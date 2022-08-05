import { filterData } from './data.js'
import data from './data/lol/lol.js'

// visualizar data

function visualData(data) {
    const champions = Object.values(data.data);
    for (let i = 0; i < champions.length; i++) {
        
        // Almacenar nombre y titulo de cada campeón en variables
        let nameChampion = (champions[i].name).toUpperCase();
        let titleChampion = champions[i].title;
        let linkImgChampion = champions[i].splash;
        let rolChampion = champions[i].tags[0];
        
        // Crear elementos HTML
        let newArticle = document.createElement('article');
        newArticle.className = 'card';
        newArticle.style.backgroundImage = `url(${linkImgChampion})`;

        newArticle.innerHTML =
            `<img src='/src/assets/img/${rolChampion}.webp' class='card__imgrol'>
            <div class='card__content'>
            <p class='card__content__name'>${nameChampion}</p> 
            <p class='card__content__title'>${titleChampion}</p>
            </div>`;
            
            let main = document.querySelector('main');
            main.appendChild(newArticle);
            
        }

}

function cardFlip(data) {
    const champion = Object.values(data.data);
    for (let i = 0; i < champion.length; i++) {
        let nameChampion = (champion[i].name).toUpperCase();
        let rolChampion = champion[i].tags[0];
        let info = champion[i].info;
        console.log(rolChampion);
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    visualData(data);
})

const card = document.querySelectorAll('.card');
card.addEventListener('click', cardFlip(data)); 