const yargs = require("yargs")
const command = process.argv[2]
if(command == "add") {
	console.log("Adding Notes")
}
else if(command == "remove") {
	console.log("Removing Notes")
}
else if(command == "read") {
	console.log("Reading Notes")
}
else if(command == "list") {
	console.log("Listing Notes")
}