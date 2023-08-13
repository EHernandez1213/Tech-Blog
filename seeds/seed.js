const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.js');
const postData = require('./postData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await User.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });


  // for (const posts of postData) {
  //   await Post.bulkCreate({
  //     ...posts,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
