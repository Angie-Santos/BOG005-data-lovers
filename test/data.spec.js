import { filterData, orderData } from '../src/data.js';

const data = {
  Ahri: {
    name: 'Ahri',
    info: {
      attack: 5,
      defense: 3,
      magic: 7,
      difficulty: 6,
    },
    tags: ["Mage", "Assassin", "Marksman"]
  },
  Zyra: {
    name: 'Zyra',
    info: {
      attack: 5,
      defense: 10,
      magic: 3,
      difficulty: 7,
    },
    tags:["Mage", "Support"]
  },
  Aatrox: {
    name: 'Aatrox',
    info: {
      attack: 7,
      defense: 3,
      magic: 1,
      difficulty: 6,
    },
    tags:["Fighter", "Tank", "Support"]
  }
}


//Test orderData => function sort
describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');

  })

  it('sort Z-A', () => {

    let dataOrder = orderData(Object.values(data), 'Z-A');

    expect(dataOrder[0]).toEqual(data.Zyra)
    expect(dataOrder[2]).toEqual(data.Aatrox)

  })

  it('sort A-Z', () => {

    let dataOrder = orderData(Object.values(data), 'A-Z');

    expect(dataOrder[0]).toEqual(data.Aatrox)
    expect(dataOrder[2]).toEqual(data.Zyra)

  })
  
  it('sort by MAX ATTACK', () => {
    
    let dataOrder = orderData(Object.values(data), 'MAX ATTACK');
    expect(dataOrder[0]).toEqual(data.Aatrox)
    expect(dataOrder[2]).toEqual(data.Ahri)
  })
  
  it('sort by MAX DEFENSE', () => {
    let dataOrder = orderData(Object.values(data), 'MAX DEFENSE');
    expect(dataOrder[0]).toEqual(data.Zyra)
    expect(dataOrder[2]).toEqual(data.Ahri)
  })

  it('sort by MAX MAGIC', () => {
    let dataOrder = orderData(Object.values(data), 'MAX MAGIC');
    expect(dataOrder[0]).toEqual(data.Ahri)
    expect(dataOrder[2]).toEqual(data.Aatrox)
  })

  it('sort by MAX DIFFICULTY', () => {
    let dataOrder = orderData(Object.values(data), 'MAX DIFFICULTY');
    expect(dataOrder[0]).toEqual(data.Zyra)
    expect(dataOrder[2]).toEqual(data.Ahri)
  })

  it('sort by other value', () => {
    let dataOrder = orderData(Object.values(data), 'ORDER BY');
    expect(dataOrder[0]).toEqual(data.Aatrox)
    expect(dataOrder[1]).toEqual(data.Ahri)
    expect(dataOrder[2]).toEqual(data.Zyra)
  })
});

//Test filterData => function filter
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');

  })

  it('filter by Fighter', () => {
    let dataFilter = filterData(Object.values(data), 'Fighter');
    expect(dataFilter[0]).toEqual(data.Aatrox)
  })

  it('filter by Assassin', () => {
    let dataFilter = filterData(Object.values(data), 'Assassin');
    expect(dataFilter[0]).toEqual(data.Ahri)
  })

  it('filter by Marksman', () => {
    let dataFilter = filterData(Object.values(data), 'Marksman');
    expect(dataFilter[0]).toEqual(data.Ahri)
  })

  it('filter by Support', () => {
    let dataFilter = filterData(Object.values(data), 'Support');
    expect(dataFilter[0]).toEqual(data.Zyra)
    expect(dataFilter[1]).toEqual(data.Aatrox)
  })

  it('filter by Mage', () => {
    let dataFilter = filterData(Object.values(data), 'Mage');
    expect(dataFilter[0]).toEqual(data.Ahri)
    expect(dataFilter[1]).toEqual(data.Zyra)
  })

  it('filter by Tank', () => {
    let dataFilter = filterData(Object.values(data), 'Tank');
    expect(dataFilter[0]).toEqual(data.Aatrox)
  })

  it('filter by other value', () => {
    let dataFilter = filterData(Object.values(data), 'FILTER BY');
    expect(dataFilter[0]).toEqual(data.Aatrox)
    expect(dataFilter[1]).toEqual(data.Ahri)
    expect(dataFilter[2]).toEqual(data.Zyra)
  })
});
