import $ from 'jquery';

class GetData {
  // constructor() {
  // }

  apiCall(query, displayData, showErrors) {
    console.log("One");
    $.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}`).then(function(response){
      displayData(response);
      console.log(response);
    }).fail(function(error){
      showErrors(error);
    });
  }

  promiseCall(query, displayData, showErrors) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      displayData(body);
    }, function(error) {
      showErrors(error);
    });
  }
}

export { GetData };
