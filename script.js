// Play music

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Halamithi Habibo",filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Pasoori",filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "TaareGinn",filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Muqabla",filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Heeriye",filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Chaleya",filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Kesariya",filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Manike",filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Vaathi Coming",filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "Ranjha",filePath: "songs/10.mp3",coverPath: "covers/10.jpg"}
]

songItems.forEach((element,i
)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to events

audioElement.addEventListener('timeupdate',()=>{
    // update seekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress;
}) 

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPLays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPLays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src = 'songs/${index+1}.mp3';
        audioElement.src = `songs/${index + 1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index >= 9){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index <= 0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index + 1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})