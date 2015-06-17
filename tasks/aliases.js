module.exports = {
  build: [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin',
    'htmlmin'
  ],
  default: [
    'newer:jshint',
    'newer:jscs',
    'newer:lintspaces',
    'lint-js',
    'build'
  ],
  'lint-js': [
    'jshint:js',
    'jscs:js',
    'lintspaces:js'
  ],
  'lint-grunt': [
    'jshint:gruntfile',
    'jscs:grunt',
    'lintspaces:grunt'
  ]
};
