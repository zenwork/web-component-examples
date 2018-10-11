const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/rps-angular/runtime.js',
        './dist/rps-angular/polyfills.js',
        // './dist/rps-angular/scripts.js',
        './dist/rps-angular/main.js'
    ];
    await fs.move('./dist/rps-angular','./dist/rps-angular-prod');
    await concat(files, './dist/rps-angular-prod/rps-angular.js');
    await fs.copyFile('./src/webcomponent.html', './dist/rps-angular-prod/index.html');
    // await fs.copyFile('./dist/rps-angular/styles.css', './dist/elements/styles.css')
    // await fs.copy('./dist/rps-angular/assets/', 'elements/assets/' )
})();
