var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var path = YOUR_DEPLOY_PATH;

gulp.task('deploy', function() {
  return gulp.src( path+'/**/*' )
    .pipe(ghPages());
});
