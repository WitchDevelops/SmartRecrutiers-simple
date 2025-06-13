// scripts/modal.ts
var dialog = document.querySelector("#video-dialog");
var videoContainer = document.querySelector(".gallery__item--video-container");
var iframe = dialog.querySelector("iframe");
var closeModalButton = dialog.querySelector(".close-dialog");
var videoSrc = "https://www.youtube.com/embed/x6iyz1AQhuU?si=GaHSWBFI3dra_mtF";
var autoplaySrc = "".concat(videoSrc, "&autoplay=1");
videoContainer === null || videoContainer === void 0 ? void 0 : videoContainer.addEventListener("click", function () {
    if (!dialog.open) {
        iframe.src = autoplaySrc;
        dialog.showModal();
        document.body.classList.add("no-scroll");
    }
});
closeModalButton === null || closeModalButton === void 0 ? void 0 : closeModalButton.addEventListener("click", function () {
    dialog.close();
});
window.addEventListener("click", function (event) {
    if (event.target === dialog) {
        dialog.close();
    }
});
dialog.addEventListener("close", function () {
    document.body.classList.remove("no-scroll");
    iframe.src = "";
    setTimeout(function () { return (iframe.src = videoSrc); }, 100);
});
