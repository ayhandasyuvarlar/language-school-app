import gulp from "gulp";
import imagemin from "gulp-imagemin";

gulp.task("concat", () => {
  gulp.src("./img/*.png").pipe(imagemin()).pipe(gulp.dest("./src/img"));
});
