// Cek status emby
function embyStatus() {
  var xhr = new XMLHttpRequest();
  xhr.timeout = 5000; // Set timeout to 5 seconds

  xhr.ontimeout = function() {
    document.getElementById("emby").innerHTML = "Offline (timeout)";
    document.getElementById("emby").style.color = "#d10000";
  };

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById("emby").innerHTML = "Operational";
        document.getElementById("emby").style.color = "green";
      } else {
        document.getElementById("emby").innerHTML = "Under maintenance";
        document.getElementById("emby").style.color = "#b00000";
      }
    }
  };

  xhr.open("GET", "http://stream.kuhaku.id:8000/web/index.html");
  xhr.send();
}

// Cek status jellyfin
function jellyfinStatus() {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 5000; // Set timeout to 5 seconds

    xhr.ontimeout = function() {
      document.getElementById("jellyfin").innerHTML = "Offline (timeout)";
      document.getElementById("jellyfin").style.color = "#d10000";
    };

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById("jellyfin").innerHTML = "Operational";
          document.getElementById("jellyfin").style.color = "green";
        } else {
          document.getElementById("jellyfin").innerHTML = "Under maintenance";
          document.getElementById("jellyfin").style.color = "#b00000";
        }
      }
    };

    xhr.open("GET", "http://stream.kuhaku.id/web/index.html");
    xhr.send();
  }

  // Cek status web index
  function webIndexStatus() {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 5000; // Set timeout to 5 seconds

    xhr.ontimeout = function() {
      document.getElementById("webIndex").innerHTML = "Offline (timeout)";
      document.getElementById("webIndex").style.color = "#d10000";
    };

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById("webIndex").innerHTML = "Operational";
          document.getElementById("webIndex").style.color = "green";
        } else {
          document.getElementById("webIndex").innerHTML = "Under maintenance";
          document.getElementById("webIndex").style.color = "#b00000";
        }
      }
    };

    xhr.open("GET", "https://kuhaku.id/");
    xhr.send();
  }  

  // Cek status radio
  function radioStatus() {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 5000; // Set timeout to 5 seconds

    xhr.ontimeout = function() {
      document.getElementById("radio").innerHTML = "Offline (timeout)";
      document.getElementById("radio").style.color = "#b00000";
    };

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById("radio").innerHTML = "Operational";
          document.getElementById("radio").style.color = "green";
        } else {
          document.getElementById("radio").innerHTML = "Under maintenance";
          document.getElementById("radio").style.color = "#b00000";
        }
      }
    };

    xhr.open("GET", "http://103.255.241.62");
    xhr.send();
  }

  // Panggil fungsi berulang
  function repeat() {
    embyStatus();
    jellyfinStatus();
    webIndexStatus();
    radioStatus();
    setTimeout(repeat, 5000);
  }
  repeat();