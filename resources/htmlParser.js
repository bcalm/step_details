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

let styles =
  'body{background-color:rgba(0,0,0,.01);font-family:Montserrat!important;margin:0}.flex{height:100vh;width:100vw;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:flex-start}.card{position:relative;margin:10px;width:264px;height:410px;overflow:hidden;border-radius:10px}.card-front{height:inherit;width:inherit;position:absolute;background-repeat:no-repeat;background-size:cover;opacity:1;transition:.5s opacity,box-shadow ease-in-out}.name{position:relative;top:85%;text-align:center;font-weight:900;color:#fff;font-size:20px}.card-back{text-align:center;height:inherit;width:inherit;position:absolute;border-radius:10px;opacity:0;background:rgba(44,43,255,.7);box-shadow:0 0 10px 10px rgba(0,0,0,.2);transition:.5s opacity,box-shadow ease-in-out}.content{padding:84px 0 40px 0;margin:0;text-align:center;color:#fff}.username{font-size:20px;font-weight:900}.githubDetails{padding:20px 0;text-align:center}.githubDetails>span{line-height:1.6;padding:5px 0;font-size:18px;color:#fff;text-transform:capitalize}.know-more-btn{text-align:center;outline:0;padding:10px 30px;border-radius:10px;background:0 0;border:2px solid #fff;color:#fff;font-size:15px;font-weight:500;transition:color,background .2s ease-in-out}.know-more-btn>a{text-decoration:none;color:inherit}.know-more-btn:hover{cursor:pointer;background:#fff;color:rgba(44,43,255,.7);transition:color,background .2s ease-in-out}.card:hover .card-front{opacity:0;transition:.5s opacity,box-shadow ease-in-out}.card:hover .card-back{opacity:1;transition:.5s opacity,box-shadow ease-in-out}'.toString();

let cards = '';

simpleVersionData.forEach(data => {
  cards = cards + `<div class="card">
      <div class="card-front" id=${data.username}>
        <div class="name">
          <span>${data.name}</span>
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
          <button class="know-more-btn"><a target="_blank" href="${data.url}">Know More</a></button>
        </p>
      </div>
    </div>`;
  styles = styles + `#${data.username}{background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(44, 43, 255, 0.7) 90%), url(${data.avatar_url});}`
});

const head = `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
  <title>Home</title>
  <style> ${styles} </style>
  </head>`;

const body = `<body>
  <div class="flex">
  ${cards}
  </div>
  </body>`;

const html = `<!DOCTYPE html>
<html lang="en"> ${head} \n ${body} </html>`;

writeFileSync("./home2.html", html, "utf8");