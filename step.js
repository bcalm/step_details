const rotateBack = function (e) {
  e.children[0].style["display"] = "none";
  e.children[1].style["display"] = "block";
};
const rotateFront = function (e) {
  e.children[0].style["display"] = "block";
  e.children[1].style["display"] = "none";
};

const filterUser = (user, text) => {
  const userName = user.children[1].innerText.toLowerCase();
  return userName.startsWith(text);
}

const searchBar = function (searchString) {
  const text = document.getElementById('searchBox').value.toLowerCase();
  const allUsers = Array.from(document.getElementsByClassName('user'));
  allUsers.forEach(user => user.style.display = 'none')
  const filteredUser = allUsers.filter(user => filterUser(user, text))
  filteredUser.forEach(user => user.style['display'] = 'flex')
}

const openSideBar = function (e) {
  const sideBar = document.getElementsByClassName('sideBar')[0];
  sideBar.style["display"] = 'block';
}

const closeSideBar = function (e) {
  document.getElementsByClassName('sideBar')[0].style.display = "none";
}

const createSideBar = function () {
  const list = Array.from(document.getElementsByClassName('userList'));
  const users = Array.from(document.getElementsByClassName('name'));
  const userList = users.map(user => "✪  " + user.innerText)
  list[0].innerText += "\n" + userList.sort().join('\n');
};
