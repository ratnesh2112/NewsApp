// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

let top = document.getElementById('navbar');
top.innerHTML = navbar();


let detailed = JSON.parse(localStorage.getItem("news"));

console.log(detailed);

let container = document.getElementById("detailed_news");

container.innerHTML = null;

    let div = document.createElement('div');
    div.setAttribute("class","news");

    let image = document.createElement('img');
    image.src = detailed.urlToImage;

    let name = document.createElement('h3');
    name.innerText =`Title : ${detailed.title}`;

    let content = document.createElement('p')
    content.innerText = detailed.content
    

    div.append(image , name , content);

    container.append(div);