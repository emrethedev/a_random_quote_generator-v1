/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [];
quotes = [
    {
        quote: "A",
        source: "source_a",
        citation: "cite_a",
    },

    {
        quote: "B",
        source: "source_b",
        year: 1990,
    },

    {
        quote: "C",
        source: "source_c",
        tags: "business",
    },

    {
        quote: "D",
        source: "source_d",
    },

    {
        quote: "E",
        source: "source_e",
    },
];
// console.log(quotes);
// console.log(quotes[0]);
// console.log(quotes[2]);
// console.log(quotes.length);
/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {
    // Generates a random number from 0 to quotes.length (which was 5) -- rounded down with floor to reach 0
    let ranNumGen = Math.floor(Math.random() * quotes.length);
    // Returns a random quote object from the array -- i.e quotes[2] = B
    return quotes[ranNumGen];
};

console.log(getRandomQuote());

// Picked colors that may compliment to existing color palette and design, instead of generating truly random colors with RBG
let pickedColors = [
    {
      color: "#F83839",
    },

    {
      color: "#513B41",
    },

    {
      color: "#7FE5F0",
    },

    {
      color: "#170B3B",
    },

    {
      color: "#432F70",
    },

    {
      color: "#B175FF",
    },

    {
      color: "#AB0552",
    },
];
console.log(pickedColors);
console.log(pickedColors.length);

// color generation function
const randColorGen = ( ) => {
    let colorGen = Math.floor(Math.random() * pickedColors.length);
    return document.querySelector("body").style.backgroundColor = pickedColors[colorGen].color;
};

let autoQuote = () => {
    setInterval(printQuote, 3000);
};
/***
 * `printQuote` function
***/

const printQuote = () => {
    // Calls getRandomQuote function
    let pullRandQuote = getRandomQuote();
    let quoteMsg = `<p class="quote"> A random quote: ${pullRandQuote.quote} </p>
<p class="source"> Quote Source: ${pullRandQuote.source} |
    `;
    if ( pullRandQuote.citation ) {
        quoteMsg += `<span class="citation"> Quote Citation: ${pullRandQuote.citation} |</span>`;
    } if ( pullRandQuote.year ) {
        quoteMsg += `<span class="year"> Quote Year: ${pullRandQuote.year} |</span>`;
    } if ( pullRandQuote.tags ) {
        quoteMsg += `<span class="tags"> Quote Type: ${pullRandQuote.tags}</span>`;
    }
    quoteMsg += `</p>`;
    console.log(quoteMsg);
    // Background color changes to a pre-determined random color each time the quote refreshes
    randColorGen();
    // autoQuote();
    document.getElementById("quote-box").innerHTML = quoteMsg;
};
// Calling the printQuote function so we can generate a new quote before user clicks on button
printQuote();

// Refreshing the quotes every 10 seconds by calling the printQuote function
let autoRotate = window.setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);