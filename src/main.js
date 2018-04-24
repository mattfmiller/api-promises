import $ from 'jquery';
// import { function } from './filename';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#animal-button").click(function() {
    let animal = $('#animal').val();
    $('#animal').val("");
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${animal}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        $('#show-animal-name').text(animal);
        $('#show-animal-gif').append(`<img src="${response.data[0].images.fixed_height.url}">`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
