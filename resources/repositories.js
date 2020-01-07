const child = require("child_process").execSync;
const fs = require("fs");

const userName = [
  "craftybones",
  "vharidas",
  "blpabhishek",
  "reshmisaji",
  "keerthyeb",
  "swapnillothe",
  "rahulmadaan",
  "shubhiamchauhan",
  "affishaikh",
  "arnabghs",
  "sapanaKale",
  "leelanakka",
  "mustakip",
  "azimarif",
  "bsrushti",
  "kukshalkanishka",
  "srijayanth",
  "durgaprasadd",
  "gayatrijagtap",
  "cksharma11",
  "dheeraj-p",
  "brain-eater",
  "athulpram",
  "anupingale",
  "luckyganesh",
  "rishabghosh",
  "luciferankon",
  "heerajoshi",
  "vprince001",
  "deepikabartwal",
  "swagatachakraborty",
  "moumitaguri",
  "tushartambe",
  "sgauravk",
  "akankshakutal",
  "namankrs",
  "maheshsovani",
  "sumandeepak8",
  "nooranasrin",
  "rey-vthi",
  "anil-muraleedharan",
  "photongupta",
  "Neha-sanserwal",
  "satheesh-chandran",
  "bugdriver",
  "anujachaitanya",
  "apurvagurme",
  "drishya-dobriyal",
  "lazyhackerthani",
  "bernie-walker",
  "sravani-labala",
  "symbiote-ux",
  "bsanthoshkumar",
  "naveen-kumar-vadla",
  "myultimatevision",
  "imvaishu",
  "desibabua",
  "bcalm",
  "shankarbyageli",
  "melodyni",
  "abhilashkasula",
  "dad-ka-raneesa",
  "shiviraj",
  "cricket-lover",
  "palpriyanshu",
  "unphydra",
  "venkybavisetti",
  "rahitkar",
  "mildshower",
  "gulsane",
  "pssruthy",
  "trinangkur",
  "armanaaquib",
  "sukhiboi"
];

userName.forEach(link => {
  child(
    `curl -u bcalm:9278d5f03af17b4b78353af862c3a9796b10acf1  https://api.github.com/users/${link} > ${link}.txt`
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
