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

/***
 * `printQuote` function
***/

const printQuote = () => {
    // Calls getRandomQuote function
    let pullRandQuote = getRandomQuote();
    let quoteMsg = `<p class="quote"> A random quote: ${pullRandQuote.quote} </p>
<p class="source"> Quote source: ${pullRandQuote.source} 
    `; // Close the P tag above
    if ( pullRandQuote.citation ) {
        quoteMsg += `<span class="citation"> quote citation: ${pullRandQuote.citation}</span>`;
    } if ( pullRandQuote.year ) {
        quoteMsg += `<span class="year"> quote year: ${pullRandQuote.year}</span>`;
    }
    quoteMsg += `</p>`;
    console.log(quoteMsg);
    return document.getElementById('quote-box').innerHTML = quoteMsg;
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);