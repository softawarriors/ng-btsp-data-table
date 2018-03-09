let config = {

    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/datatable.umd.js',
        format: 'umd',
        sourcemap: false,
        name: 'ng.datatable',
        globals: {
            '@angular/core': 'ng.core',
            'rxjs/Observable': 'Rx',
            'rxjs/ReplaySubject': 'Rx',
            'rxjs/add/operator/map': 'Rx.Observable.prototype',
            'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
            'rxjs/add/observable/fromEvent': 'Rx.Observable',
            'rxjs/add/observable/of': 'Rx.Observable'
        }
    }
  };


export default config;

