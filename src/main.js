import { filterData } from './data.js'
import data from './data/lol/lol.js'

// visualizar data


window.addEventListener('DOMContentLoaded', (event) => {
    visualData(data);
});

function visualData(data){
    const champions = Object.values(data.data)
    
    for (let i = 0; i < champions.length; i++) {
    
        // Almacenar nombre y titulo de cada campeón en variables
        let nameChampion = (champions[i].name).toUpperCase()
        let titleChampion = champions[i].title
        let linkImgChampion = champions[i].splash
        let rolChampion = champions[i].tags[0];
        console.log(rolChampion);
        
        // Crear elementos HTML
        let newArticle = document.createElement('article')
        newArticle.className = 'card'
        
        newArticle.style.backgroundImage = `url(${linkImgChampion})`;
    
        newArticle.innerHTML= 
        `<img src='/src/assets/img/${rolChampion}.webp' class='card__imgrol'>
        <div class='card__content'>
            <p class='card__content__name'>${nameChampion}</p> 
            <p class='card__content__title'>${titleChampion}</p>
        </div>`
        
        let main = document.querySelector('main')
        main.appendChild(newArticle)
    
    }

}
    