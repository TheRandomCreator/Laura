// ❤️ GLOBAL HEART BACKGROUND
let heartContainer = document.createElement("div");
heartContainer.classList.add("heart-container");
document.body.appendChild(heartContainer);

// generate hearts continuously
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // random starting position
  heart.style.left = Math.random() * 100 + "vw";

  // random size between 10px and 40px
  const size = Math.random() * 30 + 10;
  heart.style.fontSize = size + "px";

  // random fall duration 3s - 6s
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 150); // lower = more hearts


// ✅ GOALS PAGE LOGIC
window.onload = function() {
  const list = document.getElementById("goalList");
  if (list) {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    savedGoals.forEach(g => addGoal(g));

    document.getElementById("addGoal").addEventListener("click", () => {
      const input = document.getElementById("goalText");
      const text = input.value.trim();
      if (text) {
        addGoal(text);
        savedGoals.push(text);
        localStorage.setItem("goals", JSON.stringify(savedGoals));
        input.value = "";
      }
    });
  }
};

function addGoal(text) {
  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("goalList").appendChild(li);
}
