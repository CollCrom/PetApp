const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less-css', () =>{
	gulp.src('/*.less')
		.pipe(less())
		.pipe(gulp.dest('/'));
});

gulp.task('watch', () =>{
	gulp.watch(['*.less'], ['less-css']);
});

gulp.task('default', ['less-css', 'watch']);