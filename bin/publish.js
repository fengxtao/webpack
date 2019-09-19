const child_process = require('child_process');
const execSync = child_process.execSync;
 execSync(`npm publish --registry https://registry.npmjs.org`,function(error,stdout,stderr){
    if (error) {
      console.error(`执行的错误: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });