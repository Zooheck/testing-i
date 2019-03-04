const {enhancer} = require('./enhancer');

describe('Repair method', () => {
  it('repair should restore item to 100 durability', () => {
      expect(enhancer.repair({ durability: 3 }).durability).toEqual(100)
  })
})
