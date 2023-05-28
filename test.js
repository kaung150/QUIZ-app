const shuffles = ["Are u crazy", "Are u alright"];

const unshuffles = shuffles
  .map((shuffle) => ({
    sort: Math.random(),
    value: shuffle,
  }))
  .sort((a, b) => a.sort - b.sort)
  .map((obj) => obj.value);

console.log(unshuffles);
