const axios = require("axios");
const URL ="http://localhost:3001/todo";

const getAll = () => {
  return axios
  .get(`${URL}/`)
  .then(rawResponse => {
    console.log(rawResponse.data);
  })
  .catch(function(error) {
    console.log(error);
  });
};

const getOne = () => {
  return axios
  .get(`${URL}/0`)
  .then(rawResponse => {
    console.log(rawResponse.data);
  })
  .catch(function(error) {
    console.log(error);
  });
};

const createNew = () => {
  return axios
    .post(`${URL}/`, {
      todo: "New Todo",
      done: false
    })
    .then(function(rawResponse) {
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

getAll();
getOne();
createNew();
getAll();
