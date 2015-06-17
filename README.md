
# HTML5 Webapp boilerplate

## Why another boilerplate

KISS:

 * No assumption is made on whatever JS libraries or framework you use.
 * Use SASS or SCSS
 * Wired to use bourbon and neat but you can remove them pretty easily (only two @imports in main.scss)
 * Lots of tasks to produce a fully optimised and minified build of your work with usemin, uglifyjs, cssmin, htmlmin, imagemin and svgmin.

## How to install

```js
$ npm install
$ bower install # if you want bourbon and neat
```

## How to use

```js
$ grunt serve
$ grunt serve:dist
$ grunt build
```

## How to install a frontend library or framework ?

```js
$ bower install [your-library]
$ grunt wiredep
```

Last line is important to have some magic.
