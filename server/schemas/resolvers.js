const { AuthenticationError } = require('apollo-server-express');
const { User, Item  } = require('../models');
const { signToken } = require('../utils/auth');
// importing models, authentication error response from apollo server, and token from auth file

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find();
    },
    // find single user by username and populate item field with relevant items
    user: async (parent, { username }) => {
      return User.findOne({ username: username }).populate('item');
    },
    // find one item via item's id
    item: async(parent, { itemId }) => {
      return Item.findOne({ _id: itemId })
    },
    // if username provided, search for item by username, else find all items and sort by reverse creation order
    items: async(parent, { username }) => {
      const params = username ? { username } : {};
      return Item.find(params).sort({createdAt: -1})
    },
    // search for item via genre
    genreItems: async(parent, { genre }) => {
      return Item.find({ genre })
    },
    // search for user via the user context (logged in user) - throw error if not logged in
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('item');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    // add new user and assign token when user created
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // search user by email and use password check from user model to authenticate, then assign token if correct password
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // add item and include relevant username and email from user context (logged in user), then use that same context to update user with new item id
    addItem: async (parent, { name, genre, location, condition, description, image_id }, context) => {
      if (context.user) {
        const item = await Item.create({
          name, genre, location, condition, description, image_id,
          user: context.user.username,
          email: context.user.email
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { item: item._id } }
        );

        return item;
      }
      console.log(context.user.username);
      throw new AuthenticationError('You need to be logged in!');
    },
    // remove item based on item id and according to user context (logged in)
    removeItem: async (parent, { itemId }, context) => {
      if (context.user) {
        const item = await Item.findOneAndDelete({
          _id: itemId,
          user: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { item: item._id } }
        );

        return item;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};
// export resolvers
module.exports = resolvers;
