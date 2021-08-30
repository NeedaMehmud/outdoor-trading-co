const db = require('../config/connection');
const { User, Item } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/outdoor-trading',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

db.once('open', async () => {
  try {
    await Item.deleteMany({});
    await User.deleteMany({});
  
    await User.create(userSeeds);

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
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});