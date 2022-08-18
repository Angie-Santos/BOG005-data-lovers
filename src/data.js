// estas funciones son de ejemplo
export const orderData = (data, parameter) => {

  let sortChampions;

  switch (parameter) {
    case 'A-Z':
      sortChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    case 'Z-A':
      sortChampions = data.sort((a, b) => ((b.name <= a.name) ? -1 : 1))
      break;
    case 'MAX ATTACK':
      sortChampions = data.sort((a, b) => ((b.info.attack <= a.info.attack) ? -1 : 1));
      break;
    case 'MAX DEFENSE':
      sortChampions = data.sort((a, b) => ((b.info.defense <= a.info.defense) ? -1 : 1));
      break;
    case 'MAX MAGIC':
      sortChampions = data.sort((a, b) => ((b.info.magic <= a.info.magic) ? -1 : 1));
      break;
    case 'MAX DIFFICULTY':
      sortChampions = data.sort((a, b) => ((b.info.difficulty <= a.info.difficulty) ? -1 : 1));
      break;
    default:
      sortChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
  }
  return sortChampions;
};


export const filterData = (data, parameter) => {
  let filterChampions;
  switch (parameter) {
    case 'Fighter':
      filterChampions = data.filter(((data) => (data.tags).includes('Fighter')));
      break;
    case 'Tank':
      filterChampions = data.filter(((data) => (data.tags).includes('Tank')))
      break;
    case 'Mage':
      filterChampions = data.filter(((data) => (data.tags).includes('Mage')));
      break;
    case 'Assassin':
      filterChampions = data.filter(((data) => (data.tags).includes('Assassin')));
      break;
    case 'Support':
      filterChampions = data.filter(((data) => (data.tags).includes('Support')));
      break;
    case 'Marksman':
      filterChampions = data.filter(((data) => (data.tags).includes('Marksman')));
      break;
    default:
      filterChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
  }
  return filterChampions
  // return 'OMG';
};

export const statsData = (data) => {

   let statsChampions = 0;
   data.forEach(data => {
      statsChampions += data.stats.hp;
   });
   statsChampions = statsChampions/data.length;
   return Math.round(statsChampions);
}
