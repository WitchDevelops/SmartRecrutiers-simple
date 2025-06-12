export const modalData = {
  title: "Video Title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export class Modal {
  private dialog: HTMLDialogElement;
  private videoContainer: HTMLDivElement;

  constructor() {
    this.dialog = this.createDialog();
    this.videoContainer = this.dialog.querySelector(
      "#video-container"
    ) as HTMLDivElement;
    document.body.appendChild(this.dialog);
  }

  private createDialog(): HTMLDialogElement {
    const dialog = document.createElement("dialog");
    dialog.id = "video-dialog";
    dialog.className = "dialog";
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("role", "dialog");
    dialog.innerHTML = `
      <div class="dialog-content">
        <div class="dialog-content__header">
          ${
            modalData.title
              ? `<h2 class="dialog-content__title">${modalData.title}</h2>`
              : ""
          }
          <button type="button" class="dialog-content__button close-dialog btn btn-danger btn-close" aria-label="Close video">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        ${
          modalData.text
            ? `<p class="dialog-content__text">${modalData.text}</p>`
            : ""
        }
        <div id="video-container" class="dialog-content__video--container"></div>
      </div>`;
    return dialog;
  }

  public openModal(videoUrl: string): void {
    const embedUrl = this.convertToEmbedUrl(videoUrl);
    this.videoContainer.innerHTML = this.createVideoIframe(embedUrl);
    this.dialog.showModal();
  }

  public closeModal(): void {
    this.videoContainer.innerHTML = "";
    this.dialog.close();
  }

  private createVideoIframe(embedUrl: string): string {
    return `
      <iframe
        src="${embedUrl}?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="YouTube video"
        class="dialog-content__video--video">
      </iframe>`;
  }

  private convertToEmbedUrl(url: string): string {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = new Modal();
  const videoButton = document.querySelector(".gallery__item--video-btn");

  videoButton?.addEventListener("click", (event) => {
    const button = event.target as HTMLButtonElement;
    const videoUrl = button.getAttribute("data-video-url") || "";
    modal.openModal(videoUrl);
  });

  const closeButton = document.querySelector(".close-dialog");
  closeButton?.addEventListener("click", () => {
    modal.closeModal();
  });
});
