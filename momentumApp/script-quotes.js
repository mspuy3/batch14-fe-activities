// List of quotes

const listQuotes = [
   "I will always choose a lazy person to do a difficult job because a lazy person will FIND an easy way to do it. - Frank B. Gilbreth Sr.",
   "Good, better, best; never let it rest, until your good is better, and your better is BEST. - St. Jerome",
   "... people will forget what you said, people will forget what you did, but people will remember how you made them FEEL. - Maya Angelou",
   "The definition of a genius is taking the complex and making it SIMPLE. - Albert Einstein",
   "Small deeds DONE are better than great deeds planned. - Peter Marshall",
   "Plans are nothing; PLANNING is everything. - Dwight Eisenhower",
   "Perfection is not attainable, but if we chase perfection, we can catch EXCELLENCE. - Vince Lombardi",
   "Do not let what you cannot do interfer with what you CAN do. - John Wooden",
   "Don't watch the clock; do what it does. Keep GOING. - Sam Levenson",
   "The journey of a thousand steps begins with ONE. - Lao Tzu",
   "We can't direct the wind but we can adjust the SAILS. - Thomas Monson",
   "He who is BRAVE is free. - Seneca",
   "He suffers more than NECESSARY, who suffers before it is necessary. - Seneca",
   "Life is neither good or evil, but only a PLACE for good and evil. - Marcus Aurelius",
   "We suffer more in imagination than in REALITY. - Seneca",
   "To be everywhere is NOWHERE. - Seneca",
]

//Script for the quotes to display

   let quoteElement = document.getElementById('quote');
      
   window.onload = displayQuote();

   function displayQuote() {

      let storedQuotesValues = JSON.parse( localStorage.getItem('storedQuotesKey'))
   
      if(storedQuotesValues === null) {

         localStorage.setItem('storedQuotesKey', JSON.stringify(listQuotes));
         let storedQuotesValues = JSON.parse( localStorage.getItem('storedQuotesKey'));
         
         randomQuoteIndex = Math.floor(Math.random() * storedQuotesValues.length);
         quoteElement.textContent = storedQuotesValues[randomQuoteIndex];

      } else {

         randomQuoteIndex = Math.floor(Math.random() * storedQuotesValues.length);
         quoteElement.textContent = storedQuotesValues[randomQuoteIndex];
      
      }

   }

   //Script for Next Quote button
   document.getElementById("next-quote-button").addEventListener("click", displayQuote);
   //End of Script for New Quote button


   
//Script for the quote addition feature

   let newQuoteContainer = document.getElementById('new-quote-container');
   let newQuoteShowCounter = 0;

   function newQuote(){

      console.log('The function is called');

      if (newQuoteShowCounter == 0) {
         
         newQuoteContainer.style.position = "relative";
         newQuoteContainer.style.transform = "scale(1,1)";
         document.getElementById("new-quote-button").textContent = "Hide New Quote";
         console.log("SHOW!");
         newQuoteShowCounter = 1;
      
      } else if (newQuoteShowCounter == 1) {
         
         newQuoteContainer.style.position = "fixed";
         newQuoteContainer.style.transform = "scale(1,0)";
         document.getElementById("new-quote-button").textContent = "New Quote";
         console.log("HIDE!");
         newQuoteShowCounter = 0;

      }

   }

   //Script for New Quote button
   document.getElementById("new-quote-button").addEventListener("click", newQuote);
   //End of Script for Add Quote button



   let addedQuoteInput = document.getElementById('add-quote-input');

   function addQuote() {

      if (addedQuoteInput.value.length != 0) {

         let storedQuotesValues = JSON.parse( localStorage.getItem('storedQuotesKey'));
         storedQuotesValues.push(addedQuoteInput.value)
         localStorage.setItem('storedQuotesKey', JSON.stringify(storedQuotesValues)); 
         
         addedQuoteInput.value = "";
         addedQuoteInput.placeholder = "You can add more.";
      }

   }

   //Script for Add Quote button
   document.getElementById("add-quote-button").addEventListener("click", addQuote);
   //End of Script for Add Quote button


   function showAdded() {
      let storedQuotesValues = JSON.parse( localStorage.getItem('storedQuotesKey'));
      quoteElement.textContent = storedQuotesValues[storedQuotesValues.length - 1];
   }

   //Script for Show Added button
      document.getElementById("show-added-button").addEventListener("click", showAdded);
   //End of Script for Show Added button




//Script for Reset List button
   function resetList(){
      localStorage.removeItem('storedQuotesKey')
      displayQuote()
   }


      document.getElementById("reset-list-button").addEventListener("click", resetList);
//End of Script for Reset List button