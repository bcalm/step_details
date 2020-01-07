const fs = require("fs");
const githubData = require("./step7GithubData.json");

for (let i = 0; i < githubData.length; i++) {
  console.log(`<div class="image">`);
  console.log(`<div class="imageSize">`);
  console.log("<img");
  console.log(`src="${githubData[i]["avatar_url"]}"`);
  console.log(` class="imgArea"`);
  console.log(`alt="${githubData[i].name}"`);
  console.log("/>");
  console.log("</div>");
  console.log(`<div class="name">${githubData[i].name || githubData[i].login}</div>`);
  console.log(" </div>");
}
