const axios = require("axios");

const getAll = () => {
  return axios
  fetch("http://localhost:3001/todo")
  .then(rawResponse => {
    console.log(rawResponse.data);
  })
  .catch(err => {
    console.log(err);
  });
};

axios.post("http://localhost:3001/todo",{todo: "learn react native", done:false})
.then(rawResponse => {
  console.log(rawResponse.data);
});

getAll();