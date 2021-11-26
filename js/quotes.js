const quotes = [
  {
    quote: "원래 코딩하는 날",
    author: "월요일은 나에게",
  },
  {
    quote: "화나서 코딩하는 날",
    author: "화요일은 나에게",
  },
  {
    quote: "수없이 코딩하는 날",
    author: "수요일은 나에게",
  },
  {
    quote: "목표 정하고 코딩하는 날",
    author: "목요일은 나에게",
  },
  {
    quote: "금방 코딩하는 날",
    author: "금요일은 나에게",
  },
  {
    quote: "토하도록 코딩하는 날",
    author: "토요일은 나에게",
  },
  {
    quote: "일없어서 코딩하는 날",
    author: "일요일은 나에게",
  },
];

const author = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = todaysQuotes.author + " : ";
quote.innerText = todaysQuotes.quote;
