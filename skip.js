function skipAd() {
  let skipButtons = document.getElementsByClassName("ytp-ad-skip-button-text");
  let bannerButtons = document.getElementsByClassName("ytp-ad-overlay-close-button");
  let sideAds = document.getElementsByClassName("ytd-compact-promoted-video-renderer");
  let playerAd = document.getElementById("player-ads");
  let offerAd = document.getElementById("offer-module");

  if (skipButtons) {
    for (let eachButton of skipButtons ) {
      eachButton.click();
      console.log("Skipped Ad");
    }
  }

  if (bannerButtons) {
    for (let eachButton of bannerButtons) {
      eachButton.click();
      console.log("removed Banner");
    }
  }

  if (sideAds) {
    while (sideAds[0]) {
      sideAds[0].parentNode.removeChild(sideAds[0]);
      console.log("removed side ad");
    }
  }

  if (playerAd) {
      playerAd.parentNode.removeChild(playerAd);
      console.log("removed player ad");
  }

  if (offerAd) {
    offerAd.parentNode.removeChild(offerAd);
    console.log("removed offer ad");
  }

}

setInterval(skipAd, 1000);

console.log("skip extension enabled");
