function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let people = [
  "bacon",
  "mike",
  "juwan",
  "jj",
  "eric",
  "kirby",
  "tc",
  "jon samp",
  "andrew",
  "quin",
  "nick",
  "james",
  "will",
  "cedric",
  "charlie",
  "jess",
  "brent",
  "jon liak",
  "sundeep",
  // 'kudo',
  "kelley",
];

let updatesPeople = [
  "charlie",
  "eric",
  "james",
  "jj",
  "jon samp",
  "nick",
  "quin",
  "tc",
  "will",
];

let withoutUpdatesPeople = people.filter((x) => !updatesPeople.includes(x));

function randomPairings() {
  let x = Array.prototype.slice.call(people);
  let y = shuffle(x);
  for (let i = 0; i < y.length; i += 2) {
    if (y[i + 1]) {
      console.log(y[i] + "\t" + y[i + 1]);
    } else {
      console.log("extra: " + y[i]);
    }
  }
}

function randomGroups(size, ppl) {
  ppl = ppl || people;
  let x = Array.prototype.slice.call(ppl);
  let y = shuffle(x);
  let groups = [];
  while (y.length > 0) {
    let group = [];
    for (let i = 0; i < size; i++) {
      if (y.length > 0) {
        group.push(y.pop());
      } else {
        break;
      }
    }
    groups.push(group);
  }
  return groups;
}

if (require.main === module) {
  let x = randomGroups(4, withoutUpdatesPeople);
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
  let y = randomGroups(3, updatesPeople);
  for (let i = 0; i < y.length; i++) {
    console.log(y[i]);
  }

  // randomPairings();
}
