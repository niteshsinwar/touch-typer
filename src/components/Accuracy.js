export function calculateAccuracy(value, randomWord) {
  let currentAccuracy = 0;
  for (let i = 0; i < 8; i++) {
    if (value[i] === randomWord[i]) {
      currentAccuracy++;
    }
  }
  return (currentAccuracy / 8) * 100;
}
