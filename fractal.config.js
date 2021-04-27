'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/*
* Require the path module
*/
const path = require('path');

const twigAdapter = require('@frctl/twig')();
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

/* Set the title of the project */
fractal.set('project.title', 'Librairie de composants');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/fractal/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/fractal/docs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
