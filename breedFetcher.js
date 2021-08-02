const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // Print the error if one occurred
    if (error) {
      callback(error, null);
    // eslint-disable-next-line brace-style
    }
    //If no error occured then proceed with the next steps
    else {
      const breedDescription = JSON.parse(body); //Convert the string into an object,
      const desc = breedDescription['0']['description'];
      callback(null, desc);
    }
  });
};



module.exports = {fetchBreedDescription};







