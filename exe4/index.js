//promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  messages();

  //Fetch

  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  ambilDataUser();
  
  //Async Await
  async function ambilDataUser() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const responseJson = await response.json();
      console.log(responseJson.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  ambilDataUser();

//Axios
const axios = require('axios');

async function ambilDataUser() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

ambilDataUser();


