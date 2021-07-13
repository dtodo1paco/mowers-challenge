const fse = require('fs-extra')

const srcDir = `inputs/`;
const destDir = `build/inputs`;
                              
fse.copySync(srcDir, destDir, 
  { overwrite: true }, 
    function (err) {
      if (err) {                 
        console.error(err);      
      } else {
        console.log("copy files success!");
      }
});