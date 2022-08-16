// estas funciones son de ejemplo
export const orderData = (data, parameter) => {

  let sortChampions;

  switch (parameter) {
    case 'A-Z':
      sortChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    case 'Z-A':
      sortChampions = data.reverse((a, b) => ((a.name <= b.name) ? -1 : 1))
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
    case 'ORDER BY':
      sortChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
    break;
    default:
      sortChampions = data.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
    break;
  }
  return sortChampions;
};


// export const anotherExample = () => {
//   return 'OMG';
// };
