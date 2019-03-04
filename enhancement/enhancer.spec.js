const {enhancer} = require('./enhancer');

describe('Enhancer methods', () => {
  it('repair should restore item to 100 durability', () => {
      expect(enhancer.repair({ durability: 3 }).durability).toEqual(100)
  })
})
