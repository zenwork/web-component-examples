const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/rps-angular/runtime.js',
        './dist/rps-angular/polyfills.js',
        './dist/rps-angular/styles.js',
        './dist/rps-angular/vendor.js',
        './dist/rps-angular/main.js'
    ];
    await concat(files, './dist/rps-angular/webcomponent.js');
    await fs.move('./dist/rps-angular/index.html', './dist/rps-angular/wc.html');
    await fs.copyFile('./src/webcomponent.html', './dist/rps-angular/index.html');
    await fs.remove('./dist/rps-angular-dev');
    await fs.move('./dist/rps-angular', './dist/rps-angular-dev');
    // await fs.copyFile('./dist/rps-angular/styles.css', './dist/elements/styles.css')
    // await fs.copy('./dist/rps-angular/assets/', 'elements/assets/' )
})();
