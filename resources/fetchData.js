const githubData = require("./step7GithubData.json");

for (let i = 0; i < githubData.length; i++) {
  console.log(` <div onmouseover="mo(this)" onmouseout="mou(this)"><div class="image">
    <div class="imageSize">
    <img
    src="${githubData[i]["avatar_url"]}"
    class="imgArea"
    alt="${githubData[i].name}"
    />
    </div>
    <div class="name">${githubData[i].name || githubData[i].login}</div>
    </div>
    <div class="description">
    <p style="text-align: center;">Details</p>
          <ul>
            <li>Name:${githubData[i].name || githubData[i].login}</li>
            <li>Login name: ${githubData[i].login}</li>
            <li>Followers: ${githubData[i].followers}</li>
            <li>Location: ${githubData[i].location || "BANGALORE"}</li>
            <li>Following: ${githubData[i].following}</li>
            <li>Public repos: ${githubData[i]["public_repos"]}</li>
            <li>Private repos: ${githubData[i]["private_repos"] || "0"}</li>
            <li>Created at: ${githubData[i]["created_at"]}</li>
            <li>Updated at at: ${githubData[i]["updated_at"]}</li>
          </ul></p>
    </div>
    </div>`);
}
