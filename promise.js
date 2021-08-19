fetch("https://restcountries.eu/rest/v2/all")
.then((data)=>data.json())
.then((countries)=>countries.forEach((countries)=>createFlag(countries)))
.catch((err)=>console.log(err));



function createFlag({name,flag,population,region,capital}){
    const info=document.createElement("div");
    info.style.backgroundColor="whitesmoke";
    info.setAttribute("class","container");
    info.innerHTML=`

    <div class="flag-container">
    <img class="flag" src=${flag} width="250px" height"150px" />
    </div>
    <div class="details">
    <h3>${name}</h3>
    <p><b>Population</b>${population}</p>
    <p><b>Region:</b>${region}</p>
    <p><b>Capital:</b>${capital}</p>
    </div>
    `

    document.body.append(info);
}

const regionAsia = fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data) => data.json())

const regionEurope = fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data) => data.json())


Promise.all([regionAsia,regionEurope]).then((countries)=>{
    var a=countries[0].concat(countries[1]);
    console.log(a);
})


const langEurspan = fetch("https://restcountries.eu/rest/v2/lang/es")
.then((data) => data.json())
.then((datalan) =>result(datalan))

var result = (data) => {
   var a= data.filter((data)=>data.region==="Europe" && data.languages[0].name==="Spanish");
   for(var i=0;i<=a.length;i++){
   console.log(a[i].name);
   } 
}

