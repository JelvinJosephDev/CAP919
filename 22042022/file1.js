const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add two numbers together",
  builder: {
    numberOne: {
      describe: 'Number 1',
      demandOption: true,
      type: 'number',
    },
    numberTwo: {
      describe: 'Number 2',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log("Number 1 :", argv.numberOne);
    console.log("Number 2 :", argv.numberTwo);
    console.log("Sum :", argv.numberOne + argv.numberTwo);
  },
},
{
  command: "substract",
  describe: "Remove a new Note",
  builder: {
    numberOne: {
      describe: 'Number 1',
      demandOption: true,
      type: 'number',
    },
    numberTwo: {
      describe: 'Number 2',
      demandOption: true,
      type: 'number',
    },
  },
  handler: function (argv) {
    console.log("Number 1 :", argv.numberOne);
    console.log("Number 2 :", argv.numberTwo);
    console.log("Substract :", argv.numberOne - argv.numberTwo);
  },
}
);
yargs.parse();

// yargs.command({
//   command: "substract",
//   describe: "Remove a new Note",
//   builder: {
//     title: {
//       describe: "To remove a note",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Its a body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log("Title :", argv.title);
//     console.log("Body :", argv.body);
//   },
// });
// yargs.parse();

// yargs.command({
//   command: "multiply",
//   describe: "read a new Note",
//   builder: {
//     title: {
//       describe: "To read a note",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Its a body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log("Title :", argv.title);
//     console.log("Body :", argv.body);
//   },
// });
// yargs.parse();
// yargs.command({
//   command: "divide",
//   describe: "List a new Note",
//   builder: {
//     title: {
//       describe: "To list a note",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Its a body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log("Title :", argv.title);
//     console.log("Body :", argv.body);
//   },
// });
// yargs.parse();
