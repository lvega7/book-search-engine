const { User, Thought} = require('../models')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('thoughts')
              .populate('friends');
    
            return userData;
          }
    
          throw new AuthenticationError('Not logged in');
        },
    }
  };
  
  module.exports = resolvers;