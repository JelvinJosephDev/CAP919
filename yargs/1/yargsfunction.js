const yargs = require("yargs")
yargs.command(
    {
        command:"add",
        describe: "Add a new note",
        handler:function(){
            console.log("Adding a new note")
        }
    }
)

const yargs = require("yargs")
yargs.command(
    {
        command:"remove",
        describe: "Remove a note",
        handler:function(){
            console.log("Removing a new note")
        }
    }
)

const yargs = require("yargs")
yargs.command(
    {
        command:"edit",
        describe: "Edit a note",
        handler:function(){
            console.log("Editing a new note")
        }
    }
)
