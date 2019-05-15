getRandomArrayElement = (arr) => new Promise(function(resolve, reject) {
  if (arr.length > 0) {
        let min = 0;
        let max = (arr.length - 1);
        let randIndex = Math.floor(Math.random() * (max - min)) + min;
        resolve(arr[randIndex]);
    } else {
      reject("Product array is empty");
    }


  });

module.exports = getRandomArrayElement;