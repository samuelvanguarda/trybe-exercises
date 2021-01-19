function fetchDogPictures () {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(data => data.json()
  .then(object => data.ok ? Promise.resolve(object) : Promise.reject(object)));
}

module.exports = fetchDogPictures;