var fs = require('fs');
const path = require('path')

function readFile(filename, encoding, callback) {
  fs.readFile(filename, encoding, callback);
}


////////////////////////////////////////////////////////////////////////////////

readFile(path.resolve(__dirname, './support/demo_template/sample.md'), 'utf8', function (err, input) {
  var output, md;

  if (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found: ' + options.file);
      process.exit(2);
    }

    console.error(
      options.trace && err.stack ||
      err.message ||
      String(err));

    process.exit(1);
  }

  md = require('./index.js')();

  try {
    output = md.render(input);

  } catch (e) {
    console.log('e', e)
    process.exit(1);
  }


  fs.writeFileSync('./test.json', output);
});
