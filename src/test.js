const shuffles = ["Are u crazy", "Are u alright"];

const unshuffles = shuffles.map((shuffle) => ({
  sort: Math.random(),
  value: shuffle,
}));
