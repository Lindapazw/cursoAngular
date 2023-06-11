interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 90,
    song: "Linda song",
    details: {
        author: 'Linda author',
        year: 2000,
    }
}

console.log('Author: ', audioPlayer.details.author);

// destructuring

const { 
    song, 
    audioVolume:volume,
    details:{author}
} = audioPlayer;

console.log('Song: ', song);
console.log('audioVolume: ', volume);
console.log('audioVolume: ', author);


export{};