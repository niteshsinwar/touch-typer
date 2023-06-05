const characters = "asdfjkl";

function generateRandomWord() {
  let word = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];
  }
  return word;
}

export { generateRandomWord };
