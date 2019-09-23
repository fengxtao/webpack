const fs = require('fs');
const pwd = process.cwd();
const {copy} = require('./util.js')

const src = pwd+'/node_modules/webpack-init-simple';
const dist = pwd;

//项目模版
copy(src+'/src',dist+'/src' );
copy(src+'/.babelrc',dist+'/.babelrc' );
copy(src+'/webpack.base.js',dist+'/webpack.base.js' );
copy(src+'/webpack.config.dev.js',dist+'/webpack.config.dev.js' );
copy(src+'/webpack.config.pro.js',dist+'/webpack.config.pro.js' );
copy(src+'/tsconfig.json',dist+'/tsconfig.json' );
copy(src+'/scripts',dist+'/scripts' );

//package.json 修改
let package_demo = JSON.parse( fs.readFileSync(src+'/package.json') );
let package = JSON.parse( fs.readFileSync(dist+'/package.json') );

package.devDependencies=package.devDependencies||{};
package.dependencies=package.dependencies||{};
package.scripts=package.scripts||{};

Object.assign(package.devDependencies,package_demo.devDependencies);
Object.assign(package.dependencies,package_demo.dependencies);
Object.assign(package.scripts,package_demo.scripts);

// fs.writeFileSync('package',package)
var writeable=fs.createWriteStream(dist+'/package.json',{
    flags: 'w',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
});
writeable.write( JSON.stringify(package,null,4) );

