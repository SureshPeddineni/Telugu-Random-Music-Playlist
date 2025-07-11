const playlist = [
  {
    title: "Butta Bomma",
    file: "songs/buttabomma.mp3"
  },
  {
    title: "Samajavaragamana",
    file: "songs/samajavaragamana.mp3"
  },
  {
    title: "Oo Antava",
    file: "songs/ooantava.mp3"
  },
  {
    title: "Ramuloo Ramulaa",
    file: "songs/ramulooramulaa.mp3"
  },
  {
    title: "A Vachi B Pai",
    file: "songs/A Vachi B Pai.mp3"
  },
  {
    title: "Bujji Thalli",
    file: "songs/Bujji Thalli.mp3"
  },
  {
    title: "Chiguraku Chaatu",
    file: "songs/Chiguraku Chaatu.mp3"
  },
  {
    title: "Chilakamma",
    file: "songs/Chilakamma.mp3"
  },
  {
    title: "Chitti Nadumune",
    file: "songs/Chitti Nadumune.mp3"
  },
  {
    title: "Chuttamalle",
    file: "songs/Chuttamalle.mp3"
  },
  {
    title: "Devara Thandavam",
    file: "songs/Devara Thandavam.mp3"
  },
  {
    title: "Ee Manase Se Se",
    file: "songs/Ee Manase Se Se.mp3"
  },
  {
    title: "Gundu Sudhi",
    file: "songs/Gundu Sudhi.mp3"
  },
  {
    title: "Killi Killi",
    file: "songs/Killi Killi.mp3"
  },
  {
    title: "Langa Voni",
    file: "songs/Langa Voni.mp3"
  },
  {
    title: "Maata Vinaali",
    file: "songs/Maata Vinaali.mp3"
  },
  {
    title: "Mellaga Varsham",
    file: "songs/Mellaga Varsham.mp3"
  },
  {
    title: "Muvvala Navvakala",
    file: "songs/Muvvala Navvakala.mp3"
  },
  {
    title: "Nuvvosthanante",
    file: "songs/Nuvvosthanante.mp3"
  },
  {
    title: "Oo Vennela",
    file: "songs/Oo Vennela.mp3"
  },
  {
    title: "Paripoke Pitta",
    file: "songs/Paripoke Pitta.mp3"
  },
  {
    title: "Shankarabharanamtho",
    file: "songs/Shankarabharanamtho.mp3"
  },
  {
    title: "Prema Velluva",
    file: "songs/Prema Velluva.mp3"
  },
  {
    title: "Top Lesi Poddi",
    file: "songs/Top Lesi Poddi.mp3"
  },
  {
    title: "Tu Mera Lover",
    file: "songs/Tu Mera Lover.mp3"
  },
  {
    title: "Violin Song",
    file: "songs/Violin Song.mp3"
  },
  {
    title: "Yemito",
    file: "songs/Yemito.mp3"
  }
];

function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * playlist.length);
  const song = playlist[randomIndex];

  document.getElementById("songTitle").textContent = song.title;
  
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = song.file;
  audioPlayer.play();
}
