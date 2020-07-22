let delay = 500;
let delayMod = 0;
const talk = (str: string) => {
  delay += 500 + delayMod;
  delayMod += 250;
  setTimeout(() => console.log(str), delay);
};

[
  'Deno is safe.',
  'Deno is built on Rust🦀.',
  'Deno is built on Typescript.',
  'Deno is built for the decentralized internet.',
  'Deno is built for the future.',
  '🦕',
].forEach(talk);
