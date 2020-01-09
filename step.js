const mo = function (e) {
  e.children[0].style["display"] = "none";
  e.children[1].style["display"] = "block";
};
const mou = function (e) {
  e.children[0].style["display"] = "block";
  e.children[1].style["display"] = "none";
};

const filterUser = (user, text) => {
  const userName = user.children[1].innerText.toLowerCase();
  return userName.startsWith(text);
}


const searchBar = function (searchString) {
  const text = document.getElementById('searchBox').value.toLowerCase();
  const allUsers = Array.from(document.getElementsByClassName('user'))
  console.log(allUsers)
  allUsers.forEach(user => user.style.display = 'none')
  const filteredUser = allUsers.filter(user => filterUser(user, text))
  filteredUser.forEach(user => user.style['display'] = 'flex')
}