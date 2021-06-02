if (process.argv.length === 2) {
  return;
} ///no numnber

let array = process.argv.slice(2); //[2,4 5,6]

for (const element of array) {
  let second = Number(element);
  if (isNaN(second) || second < 0) {
    process.stdout.write('wrong');
    process.stdout.write('\n');
  } else {
    setTimeout(function () {
      process.stdout.write('beep');
      process.stdout.write('\n');
      process.stdout.write('\x07');
    }, second * 1000)
  }
}


