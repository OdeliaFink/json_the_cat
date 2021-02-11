const request = require('request');
const fs = require('fs')
const command = process.argv.slice(2)
const path = command[0]

//this is a get request
request(`https://api.thecatapi.com/v1/images/search?breed_ids=${path}`, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log('error:', error);
    console.log('status code:', response.statusCode)
    return;
  }

  const data = JSON.parse(body);
  console.log(data)
  // console.log(typeof data) returns object

  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
})

