// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseEnter: function() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  
  mouseLeave: function() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  
  mouseResize: function() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  
  rightClick: function() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

const title = document.querySelector("h2");
const fontColor = document.querySelector("body");

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize",superEventHandler.mouseResize);
window.addEventListener("contextmenu",superEventHandler.rightClick);