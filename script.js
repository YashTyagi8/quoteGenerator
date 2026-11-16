const QUOTES = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "The cloud is just someone else\u2019s computer.", author: "Internet proverb" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
    { text: "It always seems impossible until it\u2019s done.", author: "Nelson Mandela" },
    { text: "Stay hungry, stay foolish.", author: "Stewart Brand" },
    { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
    { text: "Well begun is half done.", author: "Aristotle" },
    { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
    { text: "What we think, we become.", author: "Buddha" }
  ];
  
  const textEl = document.getElementById("text");
  const authorEl = document.getElementById("author");
  const countEl = document.getElementById("count");
  const nextBtn = document.getElementById("next");
  const copyBtn = document.getElementById("copy");
  
  let current = -1;
  let shown = 0;
  
  function pickIndex() {
    let i;
    do { i = Math.floor(Math.random() * QUOTES.length); }
    while (i === current && QUOTES.length > 1);
    return i;
  }
  
  function showQuote() {
    current = pickIndex();
    shown += 1;
    const q = QUOTES[current];
    textEl.classList.add("fading");
    authorEl.classList.add("fading");
    setTimeout(() => {
      textEl.textContent = "\u201C" + q.text + "\u201D";
      authorEl.textContent = q.author;
      countEl.textContent = "Quotes shown: " + shown;
      textEl.classList.remove("fading");
      authorEl.classList.remove("fading");
    }, 200);
    copyBtn.textContent = "Copy quote";
  }
  
  async function copyQuote() {
    const q = QUOTES[current];
    const line = "\u201C" + q.text + "\u201D \u2014 " + q.author;
    try {
      await navigator.clipboard.writeText(line);
      copyBtn.textContent = "Copied";
    } catch (e) {
      copyBtn.textContent = "Copy not available";
    }
  }
  
  nextBtn.addEventListener("click", showQuote);
  copyBtn.addEventListener("click", copyQuote);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target === document.body) {
      e.preventDefault();
      showQuote();
    }
  });
  showQuote();
