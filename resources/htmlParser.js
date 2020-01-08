const { readFileSync, writeFileSync } = require("fs");
const data = readFileSync("./resources/step7GitHubData.json", "utf8");

const githubData = JSON.parse(data);
const simpleVersionData = githubData.map(user => {
  return {
    name: user.name,
    username: user.login,
    avatar_url: user.avatar_url,
    repo_count: user.public_repos,
    followers: user.followers,
    following: user.following,
    url: user.html_url
  }
});

const script = 'const search = function (searchString) { const users = document.getElementsByClassName("card"); const usernames = Object.keys(users).map((user, index) => { return users[index].id; }); const filteredUsers = usernames.filter((user) => { const searchRegex = new RegExp(`^${searchString}`); return user.match(searchRegex); }); usernames.forEach((user) => { const currentUser = document.getElementById(user); currentUser.classList.add("hide"); }); filteredUsers.forEach((user) => { const currentUser = document.getElementById(user); currentUser.classList.remove("hide"); }); }; const searchBar = document.getElementById("searchBar"); searchBar.addEventListener("input", () => { search(event.target.value) });';

let styles =
  'body {background-color: rgba(0, 0, 0, 0.01);font-family: Montserrat !important;margin: 0;}.hide {display: none;}.flex {height: 100vh;width: 100vw;margin: 10px !important;display: flex;flex-wrap: wrap;justify-content: flex-start;}.card {position: relative;margin: 10px;width: 264px;height: 410px;overflow: hidden;border-radius: 10px;box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);}.card-front {height: inherit;width: inherit;position: absolute;background-repeat: no-repeat;background-size: cover;opacity: 1;transition: 0.5s opacity, box-shadow ease-in-out;}.name {position: relative; top: 74%; line-height: 1.5;text-align: center;font-weight: 900;color: #fff;font-size: 20px;} .extra-details {line-height: 1.4} .extra-details > span {font-weight: 100; font-size: 14px; line-height:1.4}.card-back {text-align: center;height: inherit;width: inherit;position: absolute;border-radius: 10px;opacity: 0;background: rgba(0, 0, 0, 0.7);box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);transition: 0.5s opacity, box-shadow ease-in-out;}.content {padding: 84px 0 40px 0;margin: 0;text-align: center;color: #fff;}.username {font-size: 20px;font-weight: 900;}.githubDetails {padding: 20px 0;text-align: center;}.githubDetails > span {line-height: 1.6;padding: 5px 0;font-size: 18px;color: #fff;text-transform: capitalize;}.know-more-btn {text-align: center;outline: 0;padding: 10px 30px;border-radius: 10px;background: 0 0;border: 2px solid #fff;color: #fff;font-size: 15px;font-weight: 500;transition: color, background 0.2s ease-in-out;}.know-more-btn > a {text-decoration: none;color: inherit;}.know-more-btn:hover {cursor: pointer;background: #fff;color: rgba(0, 0, 0, 0.7);transition: color, background 0.2s ease-in-out;}.card:hover .card-front {opacity: 0;transition: 0.5s opacity, box-shadow ease-in-out;}.card:hover .card-back {opacity: 1;transition: 0.5s opacity, box-shadow ease-in-out;}.header {text-align: center;padding: 30px 0 10px 0;}.search-bar {padding: 5px 10px; font-size: 20px; border: none; border-bottom: 1px solid rgba(0, 0, 0, 0.1); background: 0 0; outline: none; font-weight: 700; color: rgba(0, 0, 0, 0.6);}'.toString();

let cards = '';

simpleVersionData.forEach(data => {
  const name = data.name || data.username;
  cards = cards + `<div class="card" id=${data.username}>
      <div class="card-front" >
        <div class="name">
          <span>${name}</span><div class="extra-details"><span>${data.username}</span></div>
        </div>
      </div>
      <div class="card-back">
        <p class="content">
          <span class="username">${data.username}</span>
          <p class="githubDetails">
            <span>${data.repo_count} repositories</span><br />
            <span>${data.followers} followers</span><br />
            <span>${data.following} following</span>
          </p>
          <a target="_blank" href="${data.url}"><button class="know-more-btn">Know More</button></a>
        </p>
      </div>
    </div>`;
  styles = styles + `#${data.username}>.card-front {background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.7) 90%), url(${data.avatar_url});}`
});

const head = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
  <title>Github User Data</title>
  <link href="styles/home.css" rel="stylesheet" type="text/css">
  </head>`;

const body = `<body><div class="header"><input class="search-bar" placeholder="Search..." id="searchBar"></div><div class="flex">${cards}</div><script src="js/home.js"></script></body>`;

const html = `<!DOCTYPE html>
<html lang="en"> ${head} \n ${body} </html>`;

writeFileSync("./js/home.js", script, "utf8");
writeFileSync("./styles/home.css", styles, "utf8");
writeFileSync("./index.html", html, "utf8");