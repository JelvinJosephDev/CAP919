const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "To add a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Its a body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("Body :", argv.body);
  },
});
yargs.parse();
yargs.command({
  command: "remove",
  describe: "Remove a new Note",
  builder: {
    title: {
      describe: "To remove a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Its a body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("Body :", argv.body);
  },
});
yargs.parse();
yargs.command({
  command: "read",
  describe: "read a new Note",
  builder: {
    title: {
      describe: "To read a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Its a body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("Body :", argv.body);
  },
});
yargs.parse();
yargs.command({
  command: "list",
  describe: "List a new Note",
  builder: {
    title: {
      describe: "To list a note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Its a body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title :", argv.title);
    console.log("Body :", argv.body);
  },
});
yargs.parse();
