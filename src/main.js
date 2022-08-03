import { filterData } from './data.js';
import data from './data/lol/lol.js';

// visualizar data

    const champions = Object.values(data.data);

    for (let i = 0; i < champions.length; i++) {
    
        // Almacenar nombre y titulo de cada campeón en variables
        let nameChampion = champions[i].name;
        let titleChampion = champions[i].title;
        let linkImgChampion = champions[i].splash;
        
        // Crear elementos HTML
        let newArticle = document.createElement("article");
        let newPName = document.createElement("p");
        let newPTitle = document.createElement("p");
        let newDiv = document.createElement("div");
        let imgChampion = document.createElement("img");
        
        newArticle.appendChild(newDiv);
        newArticle.appendChild(imgChampion);
        newDiv.appendChild(newPName);
        newDiv.appendChild(newPTitle);
    
        imgChampion.src = linkImgChampion;
    
        // Crear clases de los elementos HTML
        newArticle.className = "card";
        imgChampion.className = "card__imagechampion"
        newDiv.className = "card__content"
        newPName.className = "card__content__name"
        newPTitle.className = "card__content__title";
    
        //Asignar valor a los elementos
        newPName.innerHTML = nameChampion;
        newPTitle.innerHTML = titleChampion;
    
        //situar contenedores dentro del main
        let main = document.querySelector("main");
        main.appendChild(newArticle);
    
    }
    