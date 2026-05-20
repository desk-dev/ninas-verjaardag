document.addEventListener("click", (e) => {
  const heart = document.createElement("span");
  heart.textContent = String.fromCodePoint(0x1F389)
  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "50px";
  heart.style.pointerEvents = "none";
  heart.style.transition = "opacity 1s, transform 1s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.opacity = "0";
    heart.style.transform = "translateY(-50px)";
  }, 10);

  setTimeout(() => heart.remove(), 1000);
});