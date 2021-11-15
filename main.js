const newQuoteButton = document.getElementById("new-quote-button");
const quotePlace = document.querySelector('#place-quote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
console.log(quotePlace)

function displayQuote(message,place){
  place.textContent=message;
}

async function getQuote(){
  // The `try` block executes the statements within it as usual.
  // If an exception is thrown, the statements defined in
  // the `catch` block will be executed.
  // Learn more here: https://javascript.info/try-catch
  try{
      const reponce = await fetch(endpoint);
      // If the response is not 200 OK...
      if(!reponce.ok){
        // ...throw an error. This causes control flow
        // to skip to the `catch` block below.
        /* This part of the code checks if the response is 200 OK. If it’s not, an error object is thrown using the throw keyword.
         If this happens, or if an error occurs at any other point inside the try block, control moves immediately to the catch block and an alert is shown to the user
          while the actual error is logged to the console for inspection. */
        throw Error("some error occurs...\n" + reponce.statusText);
      }
      // reponce.json() reads the reponce body
      const json = await reponce.json();
      console.log(json);
      console.log(json.message);
      displayQuote(json.message,quotePlace);

    }
  catch(err){
    console.log(err);
    console.log('failed to fetch new quote');
  }

}

newQuoteButton.addEventListener('click',getQuote);
