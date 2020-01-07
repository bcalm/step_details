const child = require("child_process").execSync;
const fs = require("fs");
const userName = "nooranasrin,rey-vthi,anil-muraleedharan,photongupta,Neha-sanserwal,satheesh-chandran,bugdriver,anujachaitanya,apurvagurme,drishya-dobriyal,lazyhackerthani,bernie-walker,sravani-labala,symbiote-ux,bsanthoshkumar,naveen-kumar-vadla,myultimatevision,imvaishu,desibabua,bcalm,shankarbyageli,melodyni,abhilashkasula,dad-ka-raneesa,shiviraj,cricket-lover,palpriyanshu,unphydra,venkybavisetti,rahitkar,mildshower,gulsane,pssruthy,trinangkur,armanaaquib,sukhiboi".split(
  ","
);

userName.forEach(link => {
  child(
    `curl -u bcalm:e240ee7da5ee28f16585b008dde6f63ce8fdb721  https://api.github.com/users/${link} > ${link}.txt`
  );
});

const profileData = [];

userName.forEach(file => {
  let data = fs.readFileSync(file + ".txt", "utf8");
  let parsed = JSON.parse(data);
  profileData.push(parsed);
});

const dataStore = "step7GitHubData.json";
fs.writeFileSync(dataStore, JSON.stringify(profileData), "utf8");

child("rm *.txt");
