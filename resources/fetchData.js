
let users = "nooranasrin,rey-vthi,anil-muraleedharan,photongupta,Neha-sanserwal,satheesh-chandran,bugdriver,anujachaitanya,apurvagurme,drishya-dobriyal,lazyhackerthani,bernie-walker,sravani-labala,symbiote-ux,bsanthoshkumar,naveen-kumar-vadla,myultimatevision,imvaishu,desibabua,bcalm,shankarbyageli,melodyni,abhilashkasula,dad-ka-raneesa,shiviraj,cricket-lover,palpriyanshu,unphydra,venkybavisetti,rahitkar,mildshower,gulsane,pssruthy,trinangkur,armanaaquib,sukhiboi".split(",");

const globalData = [];
for (name of users) {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      globalData.push(this.responseText);
    }
  };
  http.open("GET", `https://api.github.com/users/${name}`, false);
  http.setRequestHeader('Authorization', 'token a54637dc9f384dbec1502d35ac0890d54c9b9072')
  http.send();
}