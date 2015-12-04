
// ### Webpack Config File ###
// See https://webpack.github.io/docs/configuration.html for all options

var path = require('path');

module.exports = {

  // The base directory (absolute path!) for resolving the entry option. If
  // output.pathinfo is set, the included pathinfo is shortened to this directory.
  context: path.resolve(__dirname, "entrypoints"),

  /*
    The entry point for the bundle.
    If you pass a string: The string is resolved to a module which is loaded upon startup.
    If you pass an array: All modules are loaded upon startup. The last one is exported.

      entry: ["./entry1", "./entry2"]

    If you pass an object: Multiple entry bundles are created. The key is the chunk name. The
    value can be a string or an array.
  */
  entry: {
    'mdocter.account': ['./account'],
    'mdocter.contact': ['./contact'],
  },

  // Options affecting the output.
  output: {
    /*
      The filename of the entry chunk as relative path inside the output.path directory.
      [name] is replaced by the name of the chunk.
      [hash] is replaced by the hash of the compilation.
      [chunkhash] is replaced by the hash of the chunk.
      You must not specify an absolute path here! Use the output.path option.
    */
    filename: 'dist/example_1/[name].js', // will resolve to 'dist/example_1/mdocter.account.js' etc.

    // If set, export the bundle as library. output.library is the name.
    // Use this, if you are writing a library and want to publish it as single file.
    library: 'mdocter', // After loading a chunck (i.e. js file) in CRM, the library will be available
    // on the Global Window object as window.mdocter

    /*
      Which format to export the library:
      "var" - Export by setting a variable: var Library = xxx (default)
      "this" - Export by setting a property of this: this["Library"] = xxx
      "commonjs" - Export by setting a property of exports: exports["Library"] = xxx
      "commonjs2" - Export by setting module.exports: module.exports = xxx
      "amd" - Export to AMD (optionally named)
      "umd" - Export to AMD, CommonJS2 or as property in root
    */
    libraryTarget: 'umd'
    // NOTE: Webpack should output an UMD module, but
    // TypeScript (see /tsconfig.json) should be set to 'commonjs'
    // otherwise the entry points won't build like they should.
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  module: {

    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by loader 'awesome-typescript-loader' (https://github.com/s-panferov/awesome-typescript-loader)
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}