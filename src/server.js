const { exec } = require("child_process");

exec('./returnsFive', (error,stdout,stderr) => {
  console.log(stdout)
})
