'use strict';
const NODE_ENV = process.env.NODE_ENV || "development";

const fs = require('fs')
const del = require('del')
const rollup = require('rollup')
const replace = require('@rollup/plugin-replace')
const {babel} = require('@rollup/plugin-babel')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const pkg = require('../package.json')

const babelPresets = [["@babel/preset-env", {"modules": false}], "@babel/preset-react"];

const bundles = [
    {
        format: 'umd', ext: '.js',
        plugins: [],
        babelPresets: babelPresets,
        moduleName: 'react-payment-icons'
    }
];

let promise = Promise.resolve();

promise = promise.then(() => del(['dist/*']));

for (const config of bundles) {
    promise = promise.then(() => rollup.rollup({
        input: "src/main.js",
        external: Object.keys(pkg.peerDependencies),
        plugins: [
            replace({
                "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
                preventAssignment: true,
            }),
            babel({
                babelrc: false,
                exclude: 'node_modules/**',
                presets: config.babelPresets,
                babelHelpers: "bundled",
            }),
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            commonjs()
        ].concat(config.plugins),
    }).then(bundle => bundle.write({
        file: `dist/${config.moduleName || 'main'}${config.ext}`,
        format: config.format,
        sourcemap: !config.minify,
        name: config.moduleName,
    })));
}

promise = promise.then(() => {
    delete pkg.private;
    delete pkg.devDependencies;
    delete pkg.scripts;
    delete pkg.eslintConfig;
    delete pkg.babel;

    fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
    fs.writeFileSync('dist/LICENSE', fs.readFileSync('LICENSE', 'utf-8'), 'utf-8');
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console