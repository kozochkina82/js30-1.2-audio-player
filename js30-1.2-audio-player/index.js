let songIndex = 1;

        showSong(songIndex);


        function nextSong() {
           showSong(songIndex += 1);
        }

        function previousSong() {
           showSong(songIndex -= 1);  
        }

        function currentSong(n) {
           showSong(slideIndex = n);
        }


        function showSong(n) {
           let songs = document.getElementsByClassName("songs");
    
  
            if (n > songs.length) {
               songIndex = 1
            }
            if (n < 1) {
               songIndex = songs.length
            }
  
              for (let song of songs) {
               song.style.display = "none";
            }
 
            songs[songIndex - 1].style.display = "flex";    
        }