// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

let top = document.getElementById('navbar');
top.innerHTML = navbar();

function newssearch(event)
{
    let query = document.getElementById('s_input').value;

    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

    if(event.key === "Enter")
    {
        fetch(url)

       .then((res)=>{

        return res.json()
       })
       .then((res)=>{

        let data = res.articles
        console.log(data)

        append(data)
    })
    }
}
let Search = document.getElementById('s_input');

Search.addEventListener("keypress",newssearch);


let append = (data) => {

    let container = document.getElementById('results');

    container.innerHTML = null ;

   data.forEach((el)=>{

    let div = document.createElement('div');
    div.setAttribute("class","news");

    let image = document.createElement('img');
    image.src = el.urlToImage;

    let name = document.createElement('h3');
    name.innerText =`Title : ${el.title}`;
    name.style.cursor = "pointer"
    name.addEventListener("click" , function(){

        shownews(el)
    })

    let descr = document.createElement('p');
    descr.innerText = `Description : ${el.description}`;

    div.append(image , name , descr);

    container.append(div);
   })
}

function shownews(el)
{
    console.log(el)

    localStorage.setItem("news" , JSON.stringify(el));

    window.location.href = "news.html";
}
