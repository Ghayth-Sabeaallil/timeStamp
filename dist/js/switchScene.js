"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchScene = void 0;
function switchScene(currentView, nextView) {
    currentView.classList.add("hide");
    nextView.classList.remove("hide");
    if (nextView.classList.contains("break-view")) {
    }
}
exports.switchScene = switchScene;
