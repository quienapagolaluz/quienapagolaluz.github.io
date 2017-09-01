function UnityProgress(gameInstance, progress) {
  var container = document.getElementById('gameContainer');
  //if (container) document.body.style.background = container.style.background;

  if (!gameInstance.Module) {
     return;
  } else if (progress === "complete") {
    document.getElementById("loadingBox").style.display = "none";
    document.getElementById("icon").style.display = "none";
    document.getElementById("loadingInfo").style.display = "none";
    document.getElementById("box").style.display = "none";
    return;
  } else if (progress == 1) {
    document.getElementById("loadingInfo").innerHTML = "PROCESANDO...";
    document.getElementById("spinner").style.display = "inherit";
    document.getElementById("bgBar").style.display = "none";
    document.getElementById("progressBar").style.display = "none";
  } else if (progress > 0) {
    document.getElementById("progressBar").style.width = 300 * progress + "px"
    document.getElementById("loadingInfo").innerHTML = Math.round(progress * 100) + "%";
    document.getElementById("spinner").style.display = "none";
    document.getElementById("bgBar").style.display = "block";
    document.getElementById("progressBar").style.display = "inherit";
  }
}

var gameInstance = UnityLoader.instantiate("gameContainer", "Build/QALL4.json", {
  onProgress: UnityProgress,
  Module: {
    onRuntimeInitialized: function() { UnityProgress(gameInstance, "complete") }
  }
});
