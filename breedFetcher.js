const request = require('request');
const userInput = process.argv;

const breedDescriptionSearcher = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput[2]}`, (error, response, body) => {
    // Print the error if one occurred
    if (error) {
      console.log('error:', error);
    }
    //If no error occured then proceed with the next steps
    else {

      const breedDescription = JSON.parse(body); //Convert the string into an object,
      console.log(breedDescription['0']['description']); // Print the HTML for the Google homepage.
    }
  });

};

breedDescriptionSearcher();