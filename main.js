// List of quotes.
let quotes = [
{quote: 'To be or not to be',
 author: '-William Shakespeare',
 citation: 'Hamlet'
},

{quote: 'Only I can change my life. No one can do it for me.',
 author: '-Carol Burnett'
},

{quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
 author: '-Dr. Seuss'
},

{quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
 author: '-Mark Twain'
},

{quote: 'Get busy living or get busy dying.',
 author: '-Stephen King',
 year: '1994'
}

];


// Get a random quote. 
function getRandomQuote() {
  let ranNum = Math.floor(Math.random() * quotes.length);
    return quotes[ranNum];
}


// Get a random color. 
function getRandomColour() {
  let bColours = ['#008080', '#00FFFF', '#FF00FF', '#8B4513', '#8B4513' ];
  let ranCol = Math.floor(Math.random()* bColours.length);
    return bColours[ranCol];
}
// Prints the Array to the screen while also changing the background colour.
function printQuote() {
  let result = getRandomQuote();
  let x = document.getElementById("quote-box");
  let z = document.body.style.backgroundColor = getRandomColour();
  let message = '';
  if(result.citation === undefined) {  
    console.log('This quote does not have a citation')
    

  } 
  message += '<p class="quote">' + result.quote + "</p>";
  message += '<p class="source">' + result.author + "</p>";
  message += '<p class="source">' + result.citation + "</p>";
  message += '<p class="year">' + result.year + "</p>";
  x.innerHTML = message;
  return z;
  
}
// Runs the function.
printQuote();

// Set timer for page refresh.
setInterval(printQuote,5000);


// Runs both the printQuote and getRandomColour function upon cicking.
document.getElementById('loadQuote').addEventListener("click", printQuote, getRandomColour, false);















