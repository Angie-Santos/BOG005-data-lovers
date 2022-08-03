import { filterData } from './data.js'
import data from './data/lol/lol.js'

// visualizar data

    const champions = Object.values(data.data)

    for (let i = 0; i < champions.length; i++) {
    
        // Almacenar nombre y titulo de cada campeón en variables
        let nameChampion = champions[i].name
        let titleChampion = champions[i].title
        let linkImgChampion = champions[i].splash
        
        // Crear elementos HTML
        let newArticle = document.createElement('article')
        newArticle.className = 'card'

        newArticle.innerHTML= 
        `<img src='${linkImgChampion}' class='card__imagechampion'>
        <div class='card__content'>
            <p class='card__content__name'>${nameChampion}</p> 
            <p class='card__content__title'>${titleChampion}</p>
        </div>`

        let main = document.querySelector('main')
        main.appendChild(newArticle)
    
    }
    