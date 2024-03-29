//kang acak tulisan
function genTips() {
  var randNum = Math.floor(Math.random() * 5) + 1;
  document.getElementById('quote').innerHTML = tips[randNum];
}

//tips array
var tips = [
  "Blank",
  "Mengklik 3x pada logo \"No Game No Life\" akan mengubah logo ke versi lain.",
  "Banner dengan gambar Emby dan Jellyfin dapat diklik untuk pergi langsung ke Emby web atau Jellyfin web.",
  "Selain anime Jepang, layanan kuhaku.id menyediakan movie Indonesia dan Internasional.",
  "Untuk mendaftar Jellyfin kamu bisa klik link ini : <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSff_r8AdCG-D7F1gSaTBXYbWYF4vkE3YXwrsQSZt4waAIpURA/viewform\" target=\"_blank\">Daftar Jellyfin</a>.",
  "Layanan kuhaku.id berdiri pada hari Kamis, 24 Desember 2020, tepatnya di jam 03:09:12."
];

//box pesan
const toastLiveExample = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastLiveExample)
function tipsBox(){toast.show()}
function startTips(){
    genTips();
    setTimeout(tipsBox, 1000);
    setTimeout(pop, 1000);
}

//random appear tips
var randAppear = Math.floor(Math.random() * 90000) + 50000;
function nextTips(){
    genTips();
    tipsBox();
    pop()
}
setInterval(nextTips, randAppear);

//notif sound (aturan baru chrome https://goo.gl/xX8pDD)
const sound = "https://tarokeitaro.github.io/other/kuhaku/notif.mp3";
function pop(){
  new Audio(sound).play();
}
