//UI

const close = document.getElementById('close');
const toggle = document.getElementById('toggle');
const shownav = document.getElementById('nav');


toggle.addEventListener('click',function (){
    shownav.classList.add('shownav');
});

close.addEventListener('click',function (){
    shownav.classList.remove('shownav');
});

const songimg = document.getElementById('cover');

const musiccontainer = document.getElementById('player');

const songtitle = document.getElementById('song-title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const prebtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

let songinedx = 0;

const songs = ['sample1','sample2','sample3'];

loadsong(songs[songinedx]);

function loadsong(music){
    songtitle.innerText = music.toUpperCase();
    audio.src = `music/${music}.mp3`;
    songimg.src = `img/${music}.jpg`;
}

playbtn.addEventListener('click',function (){
    // console.log('hay');

    const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else {
        playsong();
    }

});

function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

const musicbtn = document.getElementById('music');
const listclose = document.getElementById('list-close');
const listcontainer = document.getElementById('music-container');

musicbtn.addEventListener('click',()=>{
    listcontainer.classList.add('show');
});

listclose.addEventListener('click',function (){
    listcontainer.classList.remove('show');
});

prebtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

function previoussong(){
    songinedx--;
    if(songinedx < 0){
        songinedx = songs.length -1;
    }

    loadsong(songs[songinedx]);
    playsong();
}

function nextsong(){
    songinedx++;
    if(songinedx > songs.length -1){
        songinedx = 0;
    }

    loadsong(songs[songinedx]);
    playsong();
}

function updateprogress(e){
    const {currentTime,duration} = e.target;
    const progresspercent = (currentTime/duration) * 100;
    progress.style.width = `${progresspercent}%`;
}

audio.addEventListener('timeupdate',updateprogress);

progresscontainer.addEventListener('click',setprogress);

function setprogress(e){
    const width = e.target.clientWidth;
    const clickx = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;
}

audio.addEventListener("ended", nextsong);

const sample1 = document.getElementById('sample1');
const sample2 = document.getElementById('sample2');
const sample3 = document.getElementById('sample3');

sample1.addEventListener('click',function (){
    loadsong(songs[0]);
    playsong();
});

sample2.addEventListener('click',function (){
    loadsong(songs[1]);
    playsong();
});

sample3.addEventListener('click',function (){
    loadsong(songs[2]);
    playsong();
});





