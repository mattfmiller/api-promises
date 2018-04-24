import $ from 'jquery';
import { GetData } from './backend.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let displayData = function(response) {
  console.log("HELLO?!?!");
  $('#show-animal-gif').append(`<img src="${response.data[0].images.fixed_height.url}">`);
}

let showErrors = function(error) {
  $('#errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
}

let displayData2 = function(response) {
  console.log("HELLO?!?!");
  $('#show-animal-gif2').append(`<img src="${response.data[0].images.fixed_height.url}">`);
}

let showErrors2 = function(error) {
  $('#errors2').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
}

$(document).ready(function() {
  let getData = new GetData();

  $("#animal-button").click(function() {
    let userInput = $('#animal').val();
    $('#animal').val("");
    getData.apiCall(userInput, displayData, showErrors);
  });

  $("#animal-button2").click(function() {
    let userInput2 = $('#animal2').val();
    $('#animal2').val("");
    getData.promiseCall(userInput2, displayData2, showErrors2);
  });
});
