'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    static associate(models) {
      // define association here
    }
  }
  Banner.init({
    bannerOn: DataTypes.BOOLEAN,
    heading: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    days: DataTypes.INTEGER,
    hours: DataTypes.INTEGER,
    minutes: DataTypes.INTEGER,
    seconds: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};
