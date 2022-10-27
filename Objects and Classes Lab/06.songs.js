function createSongList(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = Number(input.shift());
    let typeSong = input.pop();
    let songs = []

    for (let i = 0; i < numberOfSongs; i++) {
        let token = input[i].split('_');
        let type = token[0];
        let name = token[1];
        let time = token[2];

        let song = new Song(type, name, time);
        songs.push(song)
    }

    if (typeSong === "all") {
        songs.forEach((el) => console.log(el.name))
    } else {
        let filtered = songs.filter((el) => el.type === typeSong);
        filtered.forEach((el) => console.log(el.name))
    }
}
createSongList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
console.log("----");
createSongList([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])