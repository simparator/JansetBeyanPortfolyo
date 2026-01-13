/* ===============================
   ELEMENTS
=============================== */
const aboutBtn = document.getElementById("aboutBtn");
const portfolioBtn = document.getElementById("portfolioBtn");
const mainBtn = document.getElementById("mainBtn");
const darkBtn = document.getElementById("darkBtn");

const aboutNote = document.getElementById("aboutNote");
const portfolioNote = document.getElementById("portfolioNote");

/* ===============================
   NOTES TOGGLE
=============================== */
function toggleNote(note) {
  const isOpen = note.classList.contains("open");

  aboutNote.classList.remove("open");
  portfolioNote.classList.remove("open");

  if (!isOpen) {
    note.classList.add("open");
  }
}

aboutBtn.addEventListener("click", () => {
  toggleNote(aboutNote);
});

portfolioBtn.addEventListener("click", () => {
  toggleNote(portfolioNote);
});

/* ===============================
   MAIN
=============================== */
mainBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

/* ===============================
   DARK MODE
=============================== */
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
