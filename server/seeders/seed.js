const db = require('../config/connection');
const { User, Item } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
// import seed files as well as database in order to connect and models to create collections and documents correctly

// call once on open
db.once('open', async () => {
  try {
    // delete existing documents
    await Item.deleteMany({});
    await User.deleteMany({});
    // create users according to seed file
    await User.create(userSeeds);
    // for each item in seed file, create document and update user documents according to username in item documents
    for (let i = 0; i < itemSeeds.length; i++) {
      const { _id, user } = await Item.create(itemSeeds[i]);
      const itemUser = await User.findOneAndUpdate(
        { username: user },
        {
          $addToSet: {
            item: _id,
          },
        }
      );
    }
    // throw err
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  // process complete
  process.exit(0)
});