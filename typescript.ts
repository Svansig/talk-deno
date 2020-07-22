// NATIVE TYPESCRIPT
const [...args] = Deno.args;

// Javascript allows you to try anything
function addAndSpeakJS(thing1: any, thing2: any) {
  console.log(`Javascript: ${thing1} + ${thing2} = ${thing1 + thing2}`);
}

// Typescript ensures that you know what kind of data you're using
function addAndSpeakTS(thing1: number, thing2: number): void {
  console.log(`Typescript: ${thing1} + ${thing2} = ${thing1 + thing2}`);
}

const [thing1, thing2] = args;

addAndSpeakJS(thing1, thing2);
addAndSpeakTS(+thing1, +thing2);
