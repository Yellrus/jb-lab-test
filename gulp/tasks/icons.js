import gulp       from 'gulp';
import svgSymbols from 'gulp-svg-symbols';
import svgmin     from 'gulp-svgmin';
import cheerio    from 'gulp-cheerio';
import gulpif     from 'gulp-if';
import rename     from 'gulp-rename';
import paths      from '../paths';
import path       from 'path';

gulp.task('icons', () => (
  gulp.src('app/icons/**/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))

    .pipe(svgSymbols({
      title: false,
      id: 'icon-%f',
      className: 'icon-%f',
      templates: [
        path.join(__dirname, '../utils/svg.styl'),
        'default-svg'
      ]
    }))
    .pipe( rename('icons.svg') )
	
    .pipe( gulp.dest('app/sprites/') )
));
