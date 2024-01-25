"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchScene = exports.currentId = void 0;
function switchScene(currentView, nextView) {
    currentView.classList.add("hide");
    nextView.classList.remove("hide");
    if (nextView.classList.contains("break-view")) {
        exports.currentId = currentView.id;
    }
}
exports.switchScene = switchScene;
