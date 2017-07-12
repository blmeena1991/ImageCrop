var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'imagecrop'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/imagecrop-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'imagecrop'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/imagecrop-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'imagecrop'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/imagecrop-production'
  }
};

module.exports = config[env];
