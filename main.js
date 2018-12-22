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
  console.log(result.quote);
  let x = document.getElementsByClassName('quote');
  let y = document.getElementsByClassName('source');
  let q = document.getElementsByClassName('citation');
  let z = document.getElementsByClassName('year');
  let message = '';
 
    message = x[0].result.quote = quotes[0].quote;
    message += y[0].result.quote = quotes[0].author;
    message += q[0].result.quote = quotes[0].citation;
  console.log(message);
    
    //message += x[0].innerText = quotes[1].quote;
   // message += y[0].innerText = quotes[1].author;

  
    //message += x[0].innerText = quotes[2].quote;
    //message += y[0].innerText = quotes[2].author;
  
    //message += x[0].innerText = quotes[3].quote;
    //message += y[0].innerText = quotes[3].author;
  
   // message += x[0].innerText = quotes[4].quote;
    //message += y[0].innerText = quotes[4].author;
    //message += z[0].innerText = quotes[4].year;
  
  //return message;
}
//printQuote() 















