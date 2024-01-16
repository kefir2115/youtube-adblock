const selectors = [
    ".tp-yt-paper-dialog",
    "#player-ads",
    ".ytd-in-feed-ad-layout-renderer",
    "#masthead-ad"
];
setInterval(async () => {
    var addStream = document.querySelector(".video-stream");
    if(addStream!=null && addStream.parentNode.parentNode.className.includes("ad-showing")) {
        addStream.currentTime = addStream.duration;
        //addStream.remove();
        click(".ytp-ad-skip-button");
        click(".ytp-ad-skip-button-modern");
        click(".ytp-ad-skip-button-container");
        document.querySelector(".video-ads").innerHTML = "";
    }
    for(let e of selectors) {
        let q = document.querySelector(e);
        if(q!=null) {
            q.remove();
        }
    }
}, 100);

function click(e) {
    if(document.querySelector(e)!=null) document.querySelector(e).click();
}