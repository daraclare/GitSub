const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const CLIENTID = "Iv1.e1ad797ab8151ab0";
const CLIENTSECRET = "b9b29dcad95e9cabf6f4dbf01715bb40936d3900";
const BASE = "https://api.github.com/users/";

const fetchUsers = async user => {
  const URL = `${BASE}${user}?client_id=${CLIENTID}&client_secret=${CLIENTSECRET}`;
  let fetchAPI = await fetch(URL);
  let data = await fetchAPI.json();
  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

searchButton.addEventListener("click", () => {
  showData();
});
