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

// Quotes
let quotes = [];
quotes = [
    {
        quote: "Roads? Where we're going we don't need roads",
        source: "Dr. Emmet Brown",
        citation: "Back to the Future",
    },

    {
        quote: "Just keep swimming.",
        source: "Dory",
        year: 2003,
    },

    {
        quote: "Nothing is impossible, the word itself says 'I'm possible'!",
        source: "Audrey Hepburn",
        tags: "motivational",
    },

    {
        quote: "Someone else's success does not equal a failure for you",
        source: "Joe Rogan",
        tags: "motivational",
    },

    {
        quote: "Apparently there is nothing that cannot happen today.",
        source: "Mark Twain",
    },
];

/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {

    // Generates a random number from 0 to quotes.length (which was 5) -- rounded down with floor to reach 0
    let ranNumGen = Math.floor(Math.random() * quotes.length);

    // Returns a random quote object from the array -- i.e quotes[2] = B
    return quotes[ranNumGen];
};

// Colors that may compliment to existing color palette and design, instead of generating truly random colors with RBG
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

// Random color generation function
const randColorGen = ( ) => {

    // Generating a random number and assigning it to colorGen to use later
    let colorGen = Math.floor(Math.random() * pickedColors.length);

    // Selecting the body tag and manipulating its background
    document.querySelector("body").style.backgroundColor = pickedColors[colorGen].color;
};

/***
 * `printQuote` function
***/

const printQuote = () => {

    // Calls getRandomQuote function
    let pullRandQuote = getRandomQuote();

    // Building the essential messages each quote must have
    let quoteMsg = `<p class="quote">${pullRandQuote.quote}</p>
                    <p class="source">${pullRandQuote.source}`;

    // Checking to see if additional values exist so they could be added to the message, as well                
    if ( pullRandQuote.citation ) {
        quoteMsg += `<span class="citation">${pullRandQuote.citation}</span>`;
    } if ( pullRandQuote.year ) {
        quoteMsg += `<span class="year">${pullRandQuote.year}</span>`;
    } if ( pullRandQuote.tags ) {
        quoteMsg += `<span class="tags"> (${pullRandQuote.tags})</span>`;
    }

    // Closing the paragraph tag since quoteMsg variable has been constructed completely at this point
    quoteMsg += `</p>`;


    // Background color changes to a pre-determined random color each time the quote refreshes
    randColorGen();

    // Gets the element "quote-box" and changes its innerHTML value to the message (quoteMsg) we built above
    document.getElementById("quote-box").innerHTML = quoteMsg;
};

// Calling the printQuote function so we can generate a new quote before user clicks button
printQuote();

// Refreshing the quotes every 10 seconds by calling the printQuote function
let autoRotate = window.setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById("load-quote").addEventListener("click", printQuote, false);