const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe',
  filename: 'mfeTodoList.js', // <-- Change this line
  
  exposes: {
    // Preferred way: expose corse-grained routes
    '/routes': './projects/mfe-app/src/app/mfe.routes.ts',
    

    // Technically possible, but not preferred for Micro Frontends:
     // Exposing fine-grained components
    './Component': './projects/mfe-app/src/app/to-do-list/to-do-list.component.ts',

    /**
     * If we are using "--standalone=false":
     * './Module': './projects/mfe-app/src/app/to-do-list/to-do-list.module
     */
  },

  //if we want to select what is shared with the host app or just use "shareAll()" to share 
  // everything to have an singleton instance of each shared library/module etc.
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
