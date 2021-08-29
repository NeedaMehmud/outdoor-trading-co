const { AuthenticationError } = require('apollo-server-express');
const { User, Item  } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username: username }).populate('item');
    },
    item: async(parent, { itemId }) => {
      return Item.findOne({ _id: itemId })
    },
    items: async(parent, { username }) => {
      const params = username ? { username } : {};
      return Item.find(params).sort({createdAt: -1})
    },
    genreItems: async(parent, { genre }) => {
      return Item.find({ genre })
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('item');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
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
    addItem: async (parent, { name, genre, location, condition, description, image_id }, context) => {
      if (context.user) {
        const item = await Item.create({
          name, genre, location, condition, description, image_id,
          user: context.user.username,
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

module.exports = resolvers;
