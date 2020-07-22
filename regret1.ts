const welcome = (...args: any) => undefined;
const [
  to,
  callback,
  hell,
  the,
  weather,
  is,
  very,
  hot,
  newer,
  way,
  now,
  including,
  readability,
] = Array(16).fill(welcome);
/* eslint-disable */
/* tslint:disable */

// NODE initially used a callback-based system
// which quickly made the code very unreadable

welcome('', (err, res) => {
  // things
  to('', (err, res) => {
    // logic
    callback('', (err, res) => {
      // code
      hell('', (err, res) => {
        // comments
        the('', (err, res) => {
          // someone is probably declaring a const here
          weather('', (err, res) => {
            // this is the code that's throwing you an error
            is('', (err, res) => {
              // this is the code that you think is throwing an error
              very('', (err, res) => {
                // too far
                hot(() => 'so hot');

                // an abolute mess
              });
            });
          });
        });
      });
    });
  });
});

// Deno is built allowing the await syntax natively
// even on the top level

await welcome();
await to();
await the();
await newer();
await way();
await now();
await including();
await readability();
