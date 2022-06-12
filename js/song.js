let playpause = document.getElementById('playpause');
let cancion = document.getElementById('cancion');
let albunes = document.getElementById('albunes');
let btn_lista = document.getElementById('btn-lista');
let audio = document.getElementById('audio');
let next = document.getElementById('next');

let cont = 0;
let song = [
	{
		cancion: "./audio/Mägo de Oz - Bandera Negra.mp3",
		can: "Bandera Negra",
		album: "./img/album2.jpg"
	},
	{
		cancion: "./audio/Mägo de Oz - Fiesta Pagana.mp3",
		can: "Fiesta Pagana",
		album: "./img/album3.jpg"
	},
	{
		cancion: "./audio/Mägo de Oz - Que el viento sople a tu favor.mp3",
		can: "Que el viento sople a tu favor",
		album: "./img/album1.jpg"
	}
];

playpause.addEventListener('click', ()=>{
	if(audio.paused || audio.ended){
		audio.play();
		playpause.innerHTML = `<i class="ci ci-pause"></i>`;
	}
	else{
		audio.pause();
		playpause.innerHTML = `<i class="ci ci-play"></i>`;
	}
});

next.addEventListener('click', ()=>{
	if(cont < song.length-1){
		cont++;
		SongPlay(cont);
		audio.play();
	}
	else{
		cont = 0;
		SongPlay(cont);
		audio.play();
	}
});

function SongPlay(cont){
	audio.src = song[cont].cancion;
	cancion.innerText = song[cont].can;
	albunes.src = song[cont].album;
	audio.load();
}

function Listado(x){
	cont = x;
	SongPlay(cont);
	audio.play();
	btn_lista.checked = false;
}