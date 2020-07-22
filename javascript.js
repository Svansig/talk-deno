const [file, path, thing1, thing2] = process.argv;

function add(thing1, thing2) {
  console.log(`${thing1} + ${thing2} = ${thing1 + thing2}`);
}

add(thing1, thing2);
