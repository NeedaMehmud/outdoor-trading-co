// const { AuthenticationError } = require('apollo-server-express');
const { User, Item  } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('items');
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
        return User.findOne({ _id: context.user._id }).populate('items');
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
