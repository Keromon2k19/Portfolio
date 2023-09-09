let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("apex");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

let el = $('.switch');
let cur = el.find('.current');
let options = el.find('.options li');
let content = $('#content');

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtnSobreMi = document.getElementById("openModalBtn");
    const openModalBtnCurriculum = document.getElementById("openModalBtnCurriculum");
    const openModalBtnCurriculum2 = document.getElementById("openModalBtnCurriculum2");
    const openModalBtnCurriculum3 = document.getElementById("openModalBtnCurriculum3");
    const pdfModal = document.getElementById("pdfModal");
    const closeButton = pdfModal.querySelector(".close");
    const pdfViewer = pdfModal.querySelector(".pdfiframe");

    function openPdfModal(pdfUrl) {
        pdfViewer.src = pdfUrl;
        pdfModal.style.display = "block";
    }

    function closePdfModal() {
        pdfModal.style.display = "none";
        pdfViewer.src = ""; // Reset the PDF viewer source
    }

    openModalBtnSobreMi.addEventListener("click", function () {
        openPdfModal("../Joaquin Haro Filippon Resume.pdf");
    });

    openModalBtnCurriculum.addEventListener("click", function () {
        openPdfModal("../JOAQUIN HARO FILIPPON - CIntro (1).pdf");
    });

    openModalBtnCurriculum2.addEventListener("click", function () {
        openPdfModal("../Mayo 2023_JOAQUIN HARO FILIPPON_Certificado Salesforce Bootcamp(P5).pdf");
    });

    openModalBtnCurriculum3.addEventListener("click", function () {
        openPdfModal("../Cert3548022_Associate_20230722.pdf");
    });

    closeButton.addEventListener("click", closePdfModal);

    window.addEventListener("click", function (event) {
        if (event.target === pdfModal) {
            closePdfModal();
        }
    });
});

//LOADER

$(document).ready(function() {
 
    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 3500);
   
});

// MUSCI PLAYER

$(document).ready(function () {
  var playerTrack = $("#player-track"),
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    audio,
    currIndex = 0;
    var volumeBar = $("#volume-range");

    var songs = [
      {
        name: "Minecraft - Clark",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Clark%20%20Minecraft%20Volume%20Alpha.mp3",
      },
      {
        name: "Minecraft - Danny",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Danny%20%20Minecraft%20Volume%20Alpha.mp3",
      },
      {
        name: "Minecraft - Dry Hands",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Dry%20Hands%20%20Minecraft%20Volume%20Alpha.mp3",
      },
      {
        name: "Minecraft - Living Mice",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Living%20Mice%20%20Minecraft%20Volume%20Alpha.mp3",
      },
      {
        name: "Minecraft - Subwoofer Lullaby",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Subwoofer%20Lullaby%20%20Minecraft%20Volume%20Alpha.mp3",
      },
      {
        name: "Minecraft - Wet Hands",
        album: "C418",
        url: "https://github.com/Keromon2k19/Portfolio/raw/main/music/y2mate.com%20-%20C418%20%20Wet%20Hands%20%20Minecraft%20Volume%20Alpha.mp3",
      }
    ];

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        i.attr("class", "fas fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) playerTrack.addClass("buffering");
      else playerTrack.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function loadTrack(index) {
    var song = songs[index];
    audio.src = song.url;
    albumName.text(song.album);
    trackName.text(song.name);
    audio.load();
  }

  function initPlayer() {
    audio = new Audio();
    loadTrack(currIndex);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      if (currIndex > 0) {
        currIndex--;
        loadTrack(currIndex);
        playPause();
      } else {
        console.log("Estás en la primera canción.");
      }
    });

    playNextTrackButton.on("click", function () {
      if (currIndex < songs.length - 1) {
        currIndex++;
        loadTrack(currIndex);
        playPause();
      } else {
        console.log("Estás en la última canción.");
      }
    });
    
    volumeBar.on("input", function () {
      if (audio.volume === 0) {
        // Si el audio está silenciado, desmútelo al mover la barra de volumen
        toggleMute();
      }
      updateVolumeIcon();
      audio.volume = volumeBar.val() / 100;
    });

  }
  initPlayer();

  var volumeButton = $("#volume-button");
  var volumeControl = $("#volume-control");
  var volumeBar = $("#volume-range");

  // Inicialmente, oculta la barra de volumen
  volumeControl.hide();

  // Variable para rastrear si el audio está silenciado o no
  var isMuted = false;

  // Variable para rastrear si el mouse está sobre el botón de volumen o la barra de volumen
  var isHovering = false;

  // Obtén una referencia al contenedor del reproductor
  var playerContainer = $("#app-cover");

  // Escucha el clic en el botón de volumen
  volumeButton.click(function () {
    toggleMute();
  });

  // Maneja el evento hover sobre el botón de volumen
  volumeButton.hover(
    function () {
      showVolumeControl(); // Muestra la barra de volumen
      isHovering = true;
    },
    function () {
      if (!isMuted && !isHovering) {
        hideVolumeControl();
      }
      isHovering = false;
    }
  );

  // Maneja el evento hover sobre la barra de volumen
  volumeControl.hover(
    function () {
      showVolumeControl();
      isHovering = true;
    },
    function () {
      if (!isMuted && !isHovering) {
        hideVolumeControl();
      }
      isHovering = false;
    }
  );

  function toggleMute() {
    if (audio.volume === 0) {
      // Si está silenciado, restaura el volumen
      audio.volume = volumeBar.val() / 100;
      isMuted = false;
    } else {
      // Si no está silenciado, silencia el volumen o reanúdalo
      isMuted = !isMuted;
      audio.volume = isMuted ? 0 : volumeBar.val() / 100;
    }
  
    // Actualiza el ícono de volumen
    updateVolumeIcon();
  }

  function updateVolumeIcon() {
  // Cambia los íconos de volumen según la posición de la barra de volumen
  if (isMuted) {
    volumeButton.html('<i class="fa fa-volume-mute"></i>');
  } else {
    const volume = volumeBar.val() / 100;
    if (volume === 0) {
      volumeButton.html('<i class="fa fa-volume-off"></i>');
    } else if (volume <= 0.5) {
      volumeButton.html('<i class="fa fa-volume-down"></i>');
    } else {
      volumeButton.html('<i class="fa fa-volume-up"></i>');
    }
  }
}

  // Llama a la función para establecer el ícono de volumen inicial
  updateVolumeIcon();

  function showVolumeControl() {
    $("#volume-control").css({
      display: "block",
      opacity: 1
    });
  }
  
  function hideVolumeControl() {
    $("#volume-control").css({
      opacity: 0
    });
  }
  
  // Llama a la función para mostrar la barra de volumen cuando se hace clic en el botón de volumen
  volumeButton.click(function () {
    toggleVolumeControl();
  });
  
  function toggleVolumeControl() {
    if (volumeControl.css("display") === "none") {
      showVolumeControl();
    } else {
      hideVolumeControl();
    }
  }

  // Escucha el evento mouseleave en el contenedor del reproductor
  playerContainer.mouseleave(function () {
      if (!isMuted && !isHovering) {
          hideVolumeControl();
      }
  });
});

