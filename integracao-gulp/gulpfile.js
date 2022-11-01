//Ferramenta de build
const {series,parallel,src,dest} = require('gulp')
const del = require('del')
const browserfy = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')

function limparDist(cb){
    return del('dist')
}

function copiarHtml(cb){
    return src('public/**/*').pipe(dest('dist'))
}

function gerarJS(cb){
    return browserfy({
        basedir:'.',
        entries:['src/main.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dest('dist'))
}

exports.default = series(
    limparDist,
    parallel(gerarJS,copiarHtml)
)