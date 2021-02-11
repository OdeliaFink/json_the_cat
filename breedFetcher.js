const request = require('request');

//this is a get request
const fetchBreedDescription = function(breedName , callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('error:', error);
      console.log('status code:', response.statusCode);
      return;
    }

    const data = JSON.parse(body);
    console.log("this is body:", body);
    if (data.length === 0) {
      console.log("Breed not found");
      return;
    }
    if (error) {
      callback(error, null);
    } else {
      // const data = JSON.parse(body);
    }
    if (!data[0]) {
      callback(null, "Breed not found");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };