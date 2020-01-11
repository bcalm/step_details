const rotateBack = function(e) {
  e.children[0].style["display"] = "none";
  e.children[1].style["display"] = "block";
};
const rotateFront = function(e) {
  e.children[0].style["display"] = "block";
  e.children[1].style["display"] = "none";
};

const filterUser = (user, text) => {
  const userName = user.children[1].innerText.toLowerCase();
  return userName.startsWith(text.toLowerCase());
};

const getAllUsers = () => Array.from(document.getElementsByClassName("user"));

const searchBar = function(e) {
  const text = e.value.toLowerCase();
  const allUsers = getAllUsers();
  const filteredUser = allUsers.filter(user => filterUser(user, text));
  const matchedPeople = filteredUser.map(user => user.innerText.toUpperCase());
  const searchSuggestion = document.getElementById("searchSuggestion");
  searchSuggestion.innerHTML = "";
  matchedPeople.forEach(user => {
    const element = document.createElement("option");
    element.setAttribute("value", user);
    searchSuggestion.appendChild(element);
  });
};

const showResult = function() {
  const allUsers = getAllUsers();
  allUsers.forEach(user => {
    console.log(searchBox.value);
    console.log(filterUser(user, searchBox.value));
    if (filterUser(user, searchBox.value)) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

const openSideBar = function(e) {
  const sideBar = document.getElementsByClassName("sideBar")[0];
  sideBar.style["transition"] = "width 0.1s";
  sideBar.style.width = "20vw";
  createSideBar();
};

const closeSideBar = function(e) {
  document.getElementsByClassName("sideBar")[0].style.width = "0vw";
};

const createSideBar = function() {
  const list = Array.from(document.getElementsByClassName("userList"));
  const users = Array.from(document.getElementsByClassName("name"));
  const userList = users.map(user => "✪  " + user.innerText.toUpperCase());
  const sortedList = userList.sort();
  list[0].innerText += "\n" + sortedList.join("\n");
};
