const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LPU") // LPU database
.then( ()=> console.log("connection successfull...."))
.catch((err) => console.error(err));

//declaring schema
const playlistSchema = new mongoose.Schema({
    school: String,
    students: Number,
    teachers: Number,
    code: String,
});

//declarations
let Playlist = new mongoose.model("LPU_Collection", playlistSchema); // LPU_Collection
let createDocument;

createDocument = async() => {
let nodePlaylist = new Playlist({
    school: "School of Computer Application",
    students: 1500,
    teachers: 65,
    code: "SCA",
})
let result = await nodePlaylist.save();
console.log(result);
}
createDocument();

createDocument = async() => {
let nodePlaylist = new Playlist({
    school: "School of Computer Science Engineering",
    students: 1700,
    teachers: 80,
    code: "SCSE",
})
let result = await nodePlaylist.save();
console.log(result);
}
createDocument();

createDocument = async() => {
    let nodePlaylist = new Playlist({
        school: "School of Mechanical Engineering",
        students: 1300,
        teachers: 60,
        code: "SME",
    })
let result = await nodePlaylist.save();
console.log(result);
}
createDocument();

createDocument = async() => {
    let nodePlaylist = new Playlist({
        school: "School of Computer Space Science",
        students: 1500,
        teachers: 65,
        code: "SCA",
    })
    let result = await nodePlaylist.save();
    console.log(result);
    }
    createDocument();