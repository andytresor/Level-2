/* my trial
const firstName = "";
document.getElementById('FN');
localStorage.getItem("FN", firstName);



const signin = {
    firstName: "",
}
document.getElementById('FN');
localStorage.setItem("FN", JSON.stringify(signin));*/
//const btn = document.getElementById("LG");
let form = document.getElementById("post")

form.addEventListener('submit', (e) => {
    let fName = document.getElementById("fn").value;
    let lName = document.getElementById("ln").value;
    let eMail = document.getElementById("email").value;
    let dBirth = document.getElementById("db").value;
    let pWord = document.getElementById("pw").value;
    
    const userData = { 
        fName: fName,
        lName: lName,
        eMail: eMail,
        dBirth: dBirth,
        pWord: pWord
    }

    localStorage.setItem("form", JSON.stringify(userData));
      //console.log(localStorage);
      alert("stored");

   
      
});


let xname = localStorage.getItem("form");
let parsedData = JSON.parse(xname)
  console.log(parsedData);

  // To get only the eemail and the fname from the array
  //ES5
  console.log(parsedData.fName)
  console.log(parsedData.eMail);

  //ES6
  let {eMail, fName} = parsedData;
  console.log({eMail, fName});
   

