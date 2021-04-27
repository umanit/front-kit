let Encore = require('@symfony/webpack-encore');
let glob = require('glob-all');

let assetPath = './assets';

Encore
// directory where compiled assets will be stored
  .setOutputPath('public/build/fractal')
  // public path used by the web server to access the output path
  .setPublicPath('/build/fractal')
// only needed for CDN's or sub-directory deploy
//.setManifestKeyPrefix('build/')
;

// Ajout des entrées JS dynamiquement
let entryArray = glob.sync(
  assetPath + '/js/fractal.js',
);

for (let x in entryArray) {
  let name = entryArray[x].split('/').pop();
  Encore.addEntry(name.replace('.js', ''), entryArray[x]);
}

Encore
// When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
// in symfony uncomment this and use encore_entry_script_tags
// .splitEntryChunks()

// will require an extra scrip t tag for runtime.js
// but, you probably want this, unless you're building a single-page app
  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()

  // Copy images
  .copyFiles([
      {
        from: assetPath + '/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(png|jpg|jpeg|svg)$/,
      },
      {
        from: assetPath + '/fav',
        to: 'images/fav/fo/[path][name].[ext]',
      },
      {
        from: assetPath + '/fonts',
        to: 'fonts/[path][name].[ext]',
      },
    ],
  )

  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // enables @babel/preset-env polyfills
  .configureBabel(() => {
  }, {
    useBuiltIns: 'usage',
    corejs: 3,
  })

  // enables Sass/SCSS support
  .enableSassLoader(options => {
    options.implementation = require('sass');
  })

  .enablePostCssLoader()

;

module.exports = Encore.getWebpackConfig();
