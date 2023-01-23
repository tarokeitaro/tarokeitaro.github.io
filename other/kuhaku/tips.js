//kang acak tulisan
function genTips() {
  var randNum = Math.floor(Math.random() * 4) + 1;
  document.getElementById('quote').innerHTML = tips[randNum];
}

//tips array
var tips = ["Blank", "Mengklik 3x pada logo \"No Game No Life\" akan mengubah logo ke versi lain.", "Banner dengan gambar Emby dan Jellyfin dapat diklik untuk pergi langsung ke Emby web atau Jellyfin web.", "Selain anime Jepang, layanan kuhaku.id menyediakan movie Indonesia dan Internasional.", "Untuk mendaftar Jellyfin kamu bisa klik link ini : <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSff_r8AdCG-D7F1gSaTBXYbWYF4vkE3YXwrsQSZt4waAIpURA/viewform\" target=\"_blank\">Daftar Jellyfin</a>."];

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

//notif sound
const sound = "https://cdn.discordapp.com/attachments/800026280204304424/1067150605539365006/pop.mp3";
function pop(){
  new Audio(sound).play();
}
