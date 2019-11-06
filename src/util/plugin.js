
function PromisePlugin(options) {
}

PromisePlugin.prototype.apply = function(compiler) {
  // 设置回调来访问 compilation 对象：
  compiler.plugin("compile", function(compilation) {
    // setTimeout(()=>{console.log(compilation,'compiler');console.log(compiler,'compiler2')},2000)
    console.log(compilation,'compiler')
    compiler.options.entry.unshift(__dirname+'/promiseDomyself.js')
  });
};

module.exports = PromisePlugin;