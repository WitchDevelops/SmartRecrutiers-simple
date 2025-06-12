"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.modalData = void 0;
exports.modalData = {
    title: "Video Title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
var Modal = /** @class */ (function () {
    function Modal() {
        this.dialog = this.createDialog();
        this.videoContainer = this.dialog.querySelector("#video-container");
        document.body.appendChild(this.dialog);
    }
    Modal.prototype.createDialog = function () {
        var dialog = document.createElement("dialog");
        dialog.id = "video-dialog";
        dialog.className = "dialog";
        dialog.setAttribute("aria-modal", "true");
        dialog.setAttribute("role", "dialog");
        dialog.innerHTML = "\n      <div class=\"dialog-content\">\n        <div class=\"dialog-content__header\">\n          ".concat(exports.modalData.title
            ? "<h2 class=\"dialog-content__title\">".concat(exports.modalData.title, "</h2>")
            : "", "\n          <button type=\"button\" class=\"dialog-content__button close-dialog btn btn-danger btn-close\" aria-label=\"Close video\">\n            <i class=\"fa-solid fa-xmark\"></i>\n          </button>\n        </div>\n        ").concat(exports.modalData.text
            ? "<p class=\"dialog-content__text\">".concat(exports.modalData.text, "</p>")
            : "", "\n        <div id=\"video-container\" class=\"dialog-content__video--container\"></div>\n      </div>");
        return dialog;
    };
    Modal.prototype.openModal = function (videoUrl) {
        var embedUrl = this.convertToEmbedUrl(videoUrl);
        this.videoContainer.innerHTML = this.createVideoIframe(embedUrl);
        this.dialog.showModal();
    };
    Modal.prototype.closeModal = function () {
        this.videoContainer.innerHTML = "";
        this.dialog.close();
    };
    Modal.prototype.createVideoIframe = function (embedUrl) {
        return "\n      <iframe\n        src=\"".concat(embedUrl, "?autoplay=1\"\n        frameborder=\"0\"\n        allow=\"autoplay; encrypted-media\"\n        allowfullscreen\n        title=\"YouTube video\"\n        class=\"dialog-content__video--video\">\n      </iframe>");
    };
    Modal.prototype.convertToEmbedUrl = function (url) {
        var match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
        return match ? "https://www.youtube.com/embed/".concat(match[1]) : "";
    };
    return Modal;
}());
exports.Modal = Modal;
document.addEventListener("DOMContentLoaded", function () {
    var modal = new Modal();
    var videoButton = document.querySelector(".gallery__item--video-btn");
    videoButton === null || videoButton === void 0 ? void 0 : videoButton.addEventListener("click", function (event) {
        var button = event.target;
        var videoUrl = button.getAttribute("data-video-url") || "";
        modal.openModal(videoUrl);
    });
    var closeButton = document.querySelector(".close-dialog");
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
        modal.closeModal();
    });
});
