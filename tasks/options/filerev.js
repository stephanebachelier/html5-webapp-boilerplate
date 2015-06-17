/*global module*/
'use strict';

module.exports = {
  dist: {
    files: {
      src: [
        '<%= config.dist %>/scripts/{,*/}*.js',
        '<%= config.dist %>/styles/{,*/}*.css',
        '<%= config.dist %>/styles/fonts/{,*/}*.*',
        '<%= config.dist %>/images/{,*/}*.*',
        '<%= config.dist %>/*.{ico,png}'
      ]
    }
  }
};
