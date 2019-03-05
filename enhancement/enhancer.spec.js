const {enhancer} = require('./enhancer');

describe('Repair method', () => {
  it('repair should restore item to 100 durability', () => {
      expect(enhancer.repair({ durability: 3 }).durability).toEqual(100)
  })
})

describe('Success method', () => {
  
})


describe('Fail method', () => {

    it('durability decreases by 5 if enhancement is between 0 and 14', () => {
      const item = {
        enhancement: 3,
        durability: 56
      }

      const actual = enhancer.failure(item);

      expect(actual.durability).toBe(51)
    })

    it('durability decreases by 10 if enhancement is greater than 14', () => {
      const item = {
        enhancement: 19,
        durability: 36
      }

      const actual = enhancer.failure(item);

      expect(actual.durability).toBe(26)
    })
    it('enhancement decreases by 1 if enhancement is greater than 16', () => {
      const item = {
        enhancement: 19,
        durability: 36
      }

      const actual = enhancer.failure(item);

      expect(actual.enhancement).toBe(18)
    })
    it('throw error if enhancement is 14 or lower and if the durability is below 25', () => {
      const item = {
        enhancement: 10,
        durability: 11
      }

      const actual = enhancer.failure(item);

      expect(actual).toThrowError({message: 'CANNOT BE ENHANCED'})
    })
})