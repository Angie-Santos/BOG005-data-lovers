import { filterData } from './data.js'
import data from './data/lol/lol.js'


const championsData = Object.values(data.data);
const buttonWelcome = document.querySelector('.welcome__container__button');


// cambiar pantalla de bienvenida a principal
function changeDisplay(){
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".welcome__container").style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.querySelector("main").style.display = "flex";
    document.querySelector("footer").style.display = "flex";
}

// visualizar data
function visualData(championsData) {
    championsData.forEach(champions => {
        // Almacenar valores de los campeones en variables
        let nameChampion = (champions.name).toUpperCase();
        let titleChampion = champions.title;
        let linkImgChampion = champions.splash;
        let rolName = champions.tags[0];
        let rolChampion = champions.tags;
        let statsChampion = champions.stats;
        let infoChampion = champions.info;

        // Crear elementos HTML
        let newDiv = document.createElement('div');
        let div = document.createElement('div');
        let main = document.querySelector('main');
        newDiv.className = 'containercards';;
        div.className = 'box card';
        main.appendChild(newDiv);
        newDiv.appendChild(div);
        div.style.backgroundImage = `url(${linkImgChampion})`;
        
        //frontcard

        div.innerHTML =
        `<img src='/src/assets/img/${rolName}.webp' class='card__imgrol'>
        <div class='card__content'>
        <p class='card__content__name'>${nameChampion}</p> 
        <p class='card__content__title'>${titleChampion}</p>
        </div>`;
        
        //backcard
        let backDiv = document.createElement('div');
        backDiv.className = 'box cardback';
        newDiv.appendChild(backDiv);
        backDiv.innerHTML =
            `<div class='cardback__box' >
                <p class ='cardback__box__name'>${nameChampion}</p>
                <p class='cardback__box__rol'>${rolChampion}</p>
            </div>
            <div class='cardback__box2'>
                <div class='cardback__box2__box'>
                <img class='cardback__box2--icon' src='/src/assets/icon/sword.webp'>
                <p class=cardback__box2__info>${infoChampion.attack}</p>
                </div>
                <div class='cardback__box2__box'>
                <img class='cardback__box2--icon' src='/src/assets/icon/shield.webp'>
                <p class=cardback__box2__info>${infoChampion.defense}</p>
                </div>
                <div class='cardback__box2__box'>
                <img class='cardback__box2--icon' src='/src/assets/icon/magic.webp'>
                <p class=cardback__box2__info>${infoChampion.magic}</p>
                </div>
                <div class='cardback__box2__box'>
                <img class='cardback__box2--icon' src='/src/assets/icon/level.webp'>
                <p class=cardback__box2__info>${infoChampion.difficulty}</p>
                </div>
            </div>
            <div class='cardback__box3'>
                <table class='cardback__box3__table'>
                <tr class='cardback__box3__table--title'>
                    <th scope="row">STATS</th>
                    <th>INITIAL</th>
                    <th>X LEVEL</th>
                </tr>
                <tr class='cardback__box3__table--data'>
                    <th>hp</th>
                    <td>${statsChampion.hp}</td>
                    <td>${statsChampion.hpperlevel}</td>
                </tr>
                <tr class='cardback__box3__table--data'>
                    <th>mp</th>
                    <td>${statsChampion.mp}</td>
                    <td>${statsChampion.mpperlevel}</td>
                </tr>
                <tr class='cardback__box3__table--data'>
                    <th>damage</th>
                    <td>${statsChampion.attackdamage}</td>
                    <td>${statsChampion.attackdamageperlevel}</td>
                </tr>
                <tr class='cardback__box3__table--data'>
                    <th>armor</th>
                    <td>${statsChampion.armor}</td>
                    <td>${statsChampion.armorperlevel}</td>
                </tr>
                </table>
            </div>`;

        }
    );
    cardflip();

}

// girar tarjeta
function cardflip() {
    let cards = document.querySelectorAll('.containercards');
    cards.forEach((card)=>{
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
    });
}


//Escuchar eventos

buttonWelcome.addEventListener('click',(event) => {
    changeDisplay();
})

window.addEventListener('DOMContentLoaded', (event) => {
    visualData(championsData);
})


