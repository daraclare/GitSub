const inputValue = document.querySelector("#searchInput");
const searchButton = document.querySelector(".searchButton");
const pictureDiv = document.querySelector(".profile-picture");
const article = document.querySelector("article");
const profilePicture = document.createElement("img");
const usernameDiv = document.createElement("h2");
const locationDiv = document.createElement("h3");
const bioDiv = document.createElement("p");

const CLIENTID = "Iv1.e1ad797ab8151ab0";
const CLIENTSECRET = "b9b29dcad95e9cabf6f4dbf01715bb40936d3900";
const BASE = "https://api.github.com/users/";

const fetchUsers = async user => {
  const URL = `${BASE}${user}?client_id=${CLIENTID}&client_secret=${CLIENTSECRET}`;
  let fetchAPI = await fetch(URL);
  let data = await fetchAPI.json();
  return data;
};

const showData = () => {
  fetchUsers(inputValue.value)
    .then(res => {
      console.log(res);
      profilePicture.setAttribute("src", res.avatar_url);
      pictureDiv.appendChild(profilePicture);
      usernameDiv.textContent = res.name;
      article.appendChild(usernameDiv);
      locationDiv.textContent = res.location;
      article.appendChild(locationDiv);
      bioDiv.textContent = res.bio;
      article.appendChild(bioDiv);
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err);
    });
};

searchButton.addEventListener("click", () => {
  showData();
});
