const request = require('request');

//this is a get request
const fetchBreedDescription = function(breedName , callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log('error:', error);
      console.log('status code:', response.statusCode);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("1")
      callback("Breed not found", null);
      return;
    }
    if (error) {
      console.log("2")
      callback(error, null);
    } else {
      const data = JSON.parse(body);
    }
    if (!data[0]) {
      console.log("3")
      callback("Breed not found", null);
    } else {
      // console.log("this is body:", body, data);
      console.log("4")
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };