const sentence = "hello there from lighthouse labs";
let time = 0;
for (let i = 0; i <= sentence.length; i++) {
  const lastIndex = (sentence.length) - 1;

  if (i === lastIndex + 1) {
    const muptile = lastIndex + 1;
    time = 50 * muptile;
    setTimeout(() => {
      process.stdout.write("\n");

    }, time);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, time);
    time += 50;

  }
  
}