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



function getRandomQuote() {
  let ranNum = Math.floor(Math.random() * quotes.length);
    return quotes[ranNum];
}



function getRandomColour() {
  let bColours = [];
  let ranCol = Math.floor(Math.random()* bColours.length);
    return bColours[ranCol];
}

function printQuote() {
  let result = getRandomQuote();
  let x = document.getElementById("quote-box");
  let message = '';
  message += "<p>" + result.quote + "</p>";
 
    
    
    
}
















