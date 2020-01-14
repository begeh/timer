const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  } else {
    if (key >= 0 && key <= 9 && !Number.isNaN(key)) {
      console.log(`setting timer for ${key} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * key);
    }
  }
});