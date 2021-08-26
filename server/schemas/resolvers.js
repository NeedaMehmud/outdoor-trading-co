// const { AuthenticationError } = require('apollo-server-express');
const { User, Item  } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('items');
    },
    item: async(parent, { _id }) => {
      return Item.findOne({ _id })
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
