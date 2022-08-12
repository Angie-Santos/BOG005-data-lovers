// estas funciones son de ejemplo
export const orderData = (data, parameter) => {

  let sortChampions = [];
  switch (parameter) {
    case 'A-Z':
      data.forEach(data => {
        sortChampions.push(data.name);
      })
      console.log(sortChampions.sort())
      break;
    case 'Z-A':
      data.forEach(data => {
        sortChampions.push(data.name);
      })
      console.log(sortChampions.reverse())
      break;
    case 'MAX-ATTACK':
      data.forEach(data => {
        sortChampions.push(data.info.attack);
      })
      break;
    case 'MAX-DEFENSE':
      data.forEach(data => {
        sortChampions.push(data.info.defense);
      })
      break;
    case 'MAX-MAGIC':
      data.forEach(data => {
        sortChampions.push(data.info.magic);
      })
      break;
    case 'MAX-DIFFICULTY':
      data.forEach(data => {
        sortChampions.push(data.info.difficulty);
      })
      break;
    default:
      data.forEach(data => {
        sortChampions.push(data.name);
      })
      console.log(sortChampions.sort())
      break;
  }
};


// export const anotherExample = () => {
//   return 'OMG';
// };
