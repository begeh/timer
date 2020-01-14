let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] >= 0 && !(Number.isNaN(args[i]))) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`beep at ${args[i]} seconds`);
    }, 1000 * args[i]);
  }
}

typeof Number(args[i]) == 'number'