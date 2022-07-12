/* eslint-disable linebreak-style */
function TodoPromisAPI({ urlfetch }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (urlfetch) {
        fetch(urlfetch).then((response) => {
          const x = response.json();
          return x;
        }).then((date) => {
          resolve(date);
        });
      } else {
        reject(new Error('no context'));
      }
    }, 500);
  });
}

export default TodoPromisAPI;
