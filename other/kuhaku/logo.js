// function AlertCC(label, msg)
// {
// popup = window.open("","popDialog","height=695,width=720,scrollbars=no")
// popup.location.href='https://youtu.be/dQw4w9WgXcQ'
// popup.document.close()
// }


var image = document.getElementById("image");
          var counter = 0;
          image.addEventListener("click", function() {
            counter++;
            if (counter === 3) {
              // tuliskan perintah yang ingin Anda jalankan di sini
              // AlertCC();
              // window.alert('Rickrolling :D')
              image.src = "https://tarokeitaro.github.io/other/kuhaku/logo2.png";
            } else {
              if (counter === 6) {
                image.src = "https://tarokeitaro.github.io/other/kuhaku/logo1.png";
                counter = 0;
              }
            }
          });