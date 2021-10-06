function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

let people = [
  'mike',
  'cruzan',
  'juwan',
  'jj',
  'eric',
  'kirby',
  // 'tc',
  'jon',
  'andrew',
  'quin',
  'nick',
  // 'ide',
  'will',
  'cedric',
  // 'charlie',
  'jess',
  'brent',
];

function randomPairings() {
  let x = Array.prototype.slice.call(people);
  let y = shuffle(x);
  for (let i = 0; i < y.length; i += 2) {
    if (y[i + 1]) {
      console.log(y[i] + "\t" + y[i + 1]);
    } else {
      console.log('extra: ' + y[i]);
    }
  }
}

if (require.main === module) {
  randomPairings();
}
