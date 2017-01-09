import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
	runSequence([
			'icons',
			'markup',
			'styles',
			'scripts:compile',
			'scripts:copy',
			'static',
			'sprites'
		],
		'livereload',
		'watch'
	);
});
