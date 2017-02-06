'use strict';

const gulp = require('gulp'),
      runSequence = require('run-sequence'),
      spawn = require('child_process').spawn;

const runSpawn = function(done, task, opt_arg, opt_io) {
  opt_arg = typeof opt_arg !== 'undefined' ? opt_arg : [];
  let stdio = 'inherit';
  if (opt_io === 'ignore') {
    stdio = 'ignore';
  }
  let child = spawn(task, opt_arg, {stdio: stdio});
  let running = false;
  child.on('close', function() {
    if (!running) {
      running = true;
      done();
    }
  });
  child.on('error', function() {
    if (!running) {
      console.error('gulp encountered a child error');
      running = true;
      done();
    }
  });
};

gulp.task('tsc', function(done) {
  runSpawn(done, 'node', ['node_modules/typescript/bin/tsc']);
});

gulp.task('built:copy', function (done) {
  return gulp.src(['lib/**/*.js'])
    .pipe(gulp.dest('built/'));
});

gulp.task('prepublish', function (done) {
  runSequence('tsc', 'built:copy', done);
});

gulp.task('default', ['prepublish']);
