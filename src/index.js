const wordlist = ["과일", "술", "우산", "잎", "교회", "강", "계절"];

const sample = (items) => items[Math.floor(Math.random() * items.length)];

window.onload = () => {
  const word = sample(wordlist);

  const card = document.querySelector("#card .cardtext");
  const newText = document.createTextNode(word);
  card.appendChild(newText);
};
