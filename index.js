let breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("There was an error in fetching details", error);
  } else {
    console.log("Description:", description);
  }
});