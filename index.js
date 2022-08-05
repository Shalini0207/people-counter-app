let count =0;
document.getElementById('people-entered').innerHTML=count;
let buttonPlus = document.getElementById('btn-increament');
let savedEntries = document.getElementById('saved-entries');
let audio = new Audio("audio/clickaudio.mp3");


buttonPlus.addEventListener('click', function(){
    audio.play();
    count+= 1;
    document.getElementById('people-entered').innerHTML = count;
    // if(localStorage.getItem('PassengerCnt')==null){

    // }
});

function save(){
    audio.play();
    savedEntries.innerHTML+= count+' - ';
    count=0;
    document.getElementById('people-entered').innerHTML=count;
}

