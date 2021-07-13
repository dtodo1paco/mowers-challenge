const fs = require('fs-extra')

// remove file
// With a callback:
fs.remove('./build', err => {
  if (err) return console.error(err)
  console.log('cleanup success!')
})