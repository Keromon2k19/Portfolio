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

$(function () {
    var playerTrack = $("#player-track"),
      bgArtwork = $("#bg-artwork"),
      bgArtworkUrl,
      albumName = $("#album-name"),
      trackName = $("#track-name"),
      albumArt = $("#album-art"),
      sArea = $("#s-area"),
      seekBar = $("#seek-bar"),
      trackTime = $("#track-time"),
      insTime = $("#ins-time"),
      sHover = $("#s-hover"),
      playPauseButton = $("#play-pause-button"),
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
      albums = [
        "Dawn",
        "Me & You",
        "Electro Boy",
        "Home",
        "Proxy (Original Mix)"
      ],
      trackNames = [
        "Skylike - Dawn",
        "Alex Skrindo - Me & You",
        "Kaaze - Electro Boy",
        "Jordan Schor - Home",
        "Martin Garrix - Proxy"
      ],
      albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
      trackUrl = [
        "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3",
        "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
        "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3",
        "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
        "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3"
      ],
      playPreviousTrackButton = $("#play-previous"),
      playNextTrackButton = $("#play-next"),
      currIndex = -1;
  
    function playPause() {
      setTimeout(function () {
        if (audio.paused) {
          playerTrack.addClass("active");
          albumArt.addClass("active");
          checkBuffering();
          i.attr("class", "fas fa-pause");
          audio.play();
        } else {
          playerTrack.removeClass("active");
          albumArt.removeClass("active");
          clearInterval(buffInterval);
          albumArt.removeClass("buffering");
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
        albumArt.removeClass("buffering").removeClass("active");
        clearInterval(buffInterval);
      }
    }
  
    function checkBuffering() {
      clearInterval(buffInterval);
      buffInterval = setInterval(function () {
        if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
        else albumArt.removeClass("buffering");
  
        bTime = new Date();
        bTime = bTime.getTime();
      }, 100);
    }
  
    function selectTrack(flag) {
      if (flag == 0 || flag == 1) ++currIndex;
      else --currIndex;
  
      if (currIndex > -1 && currIndex < albumArtworks.length) {
        if (flag == 0) i.attr("class", "fa fa-play");
        else {
          albumArt.removeClass("buffering");
          i.attr("class", "fa fa-pause");
        }
  
        seekBar.width(0);
        trackTime.removeClass("active");
        tProgress.text("00:00");
        tTime.text("00:00");
  
        currAlbum = albums[currIndex];
        currTrackName = trackNames[currIndex];
        currArtwork = albumArtworks[currIndex];
  
        audio.src = trackUrl[currIndex];
  
        nTime = 0;
        bTime = new Date();
        bTime = bTime.getTime();
  
        if (flag != 0) {
          audio.play();
          playerTrack.addClass("active");
          albumArt.addClass("active");
  
          clearInterval(buffInterval);
          checkBuffering();
        }
  
        albumName.text(currAlbum);
        trackName.text(currTrackName);
        albumArt.find("img.active").removeClass("active");
        $("#" + currArtwork).addClass("active");
  
        bgArtworkUrl = $("#" + currArtwork).attr("src");
        
      } else {
        if (flag == 0 || flag == 1) --currIndex;
        else ++currIndex;
      }
    }
  
    function initPlayer() {
      audio = new Audio();
  
      selectTrack(0);
  
      audio.loop = false;
  
      playPauseButton.on("click", playPause);
  
      sArea.mousemove(function (event) {
        showHover(event);
      });
  
      sArea.mouseout(hideHover);
  
      sArea.on("click", playFromClickedPos);
  
      $(audio).on("timeupdate", updateCurrTime);
  
      playPreviousTrackButton.on("click", function () {
        selectTrack(-1);
      });
      playNextTrackButton.on("click", function () {
        selectTrack(1);
      });
    }
  
    initPlayer();
  });
  

 