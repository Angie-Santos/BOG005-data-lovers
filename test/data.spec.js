import { orderData } from '../src/data.js';

//Test orderData => function sort

describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');

  })
  it('sort Z-A', () => {
    const data = {
      Aatrox: {
        name: 'Aatrox',
        info: {
          attack: 7,
          defense: 3,
          magic: 1,
          difficulty: 4,
        },
      },
      Zyra: {
        name: 'Zyra',
        info: {
          attack: 5,
          defense: 5,
          magic: 3,
          difficulty: 7,
        }
      },
      Ahri: {
        info: {
          name: 'Ahri',
          attack: 3,
          defense: 5,
          magic: 7,
          difficulty: 6,
        }
      }
    }

    expect(orderData(Object.values(data), 'Z-A')).toEqual(
      {
        name: 'Zyra',
        info: {
          attack: 5,
          defense: 5,
          magic: 3,
          difficulty: 7,
        }
      }
      ,
      {
        name: 'Ahri',
        info: {
          attack: 3,
          defense: 5,
          magic: 7,
          difficulty: 6,
        },
      }
      ,
      {
        name: 'Aatrox',
        info: {
          attack: 7,
          defense: 3,
          magic: 1,
          difficulty: 4,
        }
      });
  });
});
