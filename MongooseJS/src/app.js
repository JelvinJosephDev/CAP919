const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/jelvinjoseph")
.then( ()=> console.log("connection successfull...."))
.catch((err) => console.error(err));

//declaring schema
const playlistSchema = new mongoose.Schema({
name: String,
Batch: String,
Age: Number,
City: String,
University: String,
});

//declarations
let Playlist = new mongoose.model("NodeJS_Classes", playlistSchema);
let createDocument;

createDocument = async() => {
let nodePlaylist = new Playlist({
name: "Node Js",
Batch: " 2020",
Age: 30,
City: "chd",
University: "LPU",
})
let result = await nodePlaylist.save();
console.log(result);
}
createDocument();

createDocument = async() => {
let nodePlaylist = new Playlist({
name: "Angular Js",
Batch: " 2021",
Age: 30,
City: "JHD",
University: "LPU",
})
let result = await nodePlaylist.save();
console.log(result);
}
createDocument();