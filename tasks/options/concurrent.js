module.exports = {
  server: [
    'sass:server',
    'copy:styles'
  ],
  dist: [
    'sass',
    'copy:styles',
    'imagemin',
    'svgmin'
  ]
};
