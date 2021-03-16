const quotes = [
  {
    quote: "If it makes you nervous, you’re doing it right.",
    author: "—Childish Gambino",
  },
  {
    quote: "Inspiration does exist, but it must find you working.",
    author: "—Pablo Picasso",
  },
  {
    quote: "In order to be irreplaceable one must always be different.",
    author: "—Coco Chanel",
  },
  {
    quote:
      "Show up, show up, show up, and after a while the muse shows up, too.",
    author: "—Isabel Allende",
  },
  {
    quote:
      "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",
    author: "―David Ogilvy",
  },
  { quote: "The best way out is always through.", author: "―Robert Frost" },
  {
    quote: "I have stood on a mountain of no’s for one yes.",
    author: "—Barbara Elaine Smith",
  },
  {
    quote: "Courage is like a muscle. We strengthen it by use.",
    author: "—Ruth Gordo",
  },
  {
    quote: "I choose to make the rest of my life the best of my life.",
    author: "—Louise Hay",
  },
  {
    quote: "If there is no struggle, there is no progress.",
    author: "—Frederick Douglass",
  },
  {
    quote: "Don’t worry about failure; you only have to be right once.",
    author: "—Drew Houston",
  },
  {
    quote: "If you don’t risk anything, you risk even more.",
    author: "—Erica Jong",
  },
];

const quoteBtn = document.getElementById("quote-btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

quoteBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
});
