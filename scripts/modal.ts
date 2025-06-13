// scripts/modal.ts

const dialog = document.querySelector("#video-dialog") as HTMLDialogElement;
const videoContainer = document.querySelector(
  ".gallery__item--video-container"
) as HTMLElement;
const iframe = dialog.querySelector("iframe") as HTMLIFrameElement;
const closeModalButton = dialog.querySelector(".close-dialog") as HTMLElement;

const videoSrc =
  "https://www.youtube.com/embed/x6iyz1AQhuU?si=GaHSWBFI3dra_mtF";
const autoplaySrc = `${videoSrc}&autoplay=1`;

videoContainer?.addEventListener("click", () => {
  if (!dialog.open) {
    iframe.src = autoplaySrc;
    dialog.showModal();
    document.body.classList.add("no-scroll");
  }
});

closeModalButton?.addEventListener("click", () => {
  dialog.close();
});

window.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
  iframe.src = "";
  setTimeout(() => (iframe.src = videoSrc), 100);
});
