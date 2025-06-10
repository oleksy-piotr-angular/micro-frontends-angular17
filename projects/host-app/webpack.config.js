const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'host-app',

  //! Alternative: Dynamic Shell not using this property
//  remotes: {
//     'mfe': 'http://localhost:4201/mfeTodoList.js',
//   },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
