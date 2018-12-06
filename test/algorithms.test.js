const _ = require('../algorithms')
const mathjs = require('mathjs') // to test factorial

describe( 'sorting algorithms...', () => {

  const algorithms = [
    { description: 'bubbleSort: O(n^2)',        method: _.bubbleSort },
    { description: 'insertionSort: O(n log n)', method: _.insertionSort },
    { description: 'mergeSort: O(n log n)',     method: _.mergeSort },
    { description: 'quickSort: O(n log n)',     method: _.quickSort }
  ]

  const testcases = [
    { description: 'sort simple numeric array', input: [3,2], output: [2,3] },
    { description: 'switch values of two-member array', input: [10,5,3,8,2,6,4,7,9,1], output: [1,2,3,4,5,6,7,8,9,10] },
    { description: 'handle presorted arrays', input: [1,2,3,4,5], output: [1,2,3,4,5] },
    { description: 'sort arrays containing negative numbers', input: [1,2,-3,4,-5], output: [-5,-3,1,2,4] },
    { description: 'handle reverse-sorted arrays', input: [5,4,3,2,1], output: [1,2,3,4,5] },
    {
       description: 'sort arrays containing decimals',
       input: [ 0.5, 4.2, 3.9, 4.1, 3, 2, 1, 20, 0, -2.5, -3.1 ],
       output: [ -3.1, -2.5, 0, 0.5, 1, 2, 3, 3.9, 4.1, 4.2, 20 ]
    },
  ]
  
  algorithms.forEach( algorithm => {
    describe( algorithm.description, () => {
      testcases.forEach( testcase => {

        test( testcase.description, () => {
          const result = algorithm.method( testcase.input )
          expect( result ).toEqual( testcase.output )
        })
        
      })
    })
  })

})


describe( 'binary search', () => {

  const testAll = (array, elementsToTest = array ) => {
    elementsToTest.forEach( element => {
      const result = _.binarySearch( array, element )
      const i = array.indexOf( element )
      expect(result).toBe( i === -1 ? null : i )
    })
  }

  describe( 'return index of specified value in sorted array', () => {

    test( 'find elements in a consecutive number series', () => {
      testAll( [1,2,3,4,5,6,7,8,9,10] )
    })

    test( 'find elements in a series containing gaps', () => {
      testAll( [1,3,4,7,11,18,24,59,92,165] )
    })

    test( 'find elements in a series containing negative values and zero', () => {
      testAll( [-5, -2, -1, 0, 2, 5, 92 ] )
    })
  })

  describe( 'handle searches for missing or invalid values', () => {

    test( 'return null if specified value is NOT present', () => {
      const missingValues = [ 2, 6, 12, 27, 63, 245 ]
      testAll( [1,2,3,4,5,6,7,8,9,10], missingValues )
    })
  
    test( 'return null when checking for invalid values', () => {
      const nonsenseValues = [ 'A', {}, 'abc' ]
      testAll( [1,2,3,4,5,6,7,8,9,10], nonsenseValues )
    })

  })

})

describe( 'n factorial', () => {

  const testCases = [0,1,5,10]

  testCases.forEach( n => {
    const actual = mathjs.factorial(n) // safe?
    test( `${n} should equate to ${actual}`, () => {
      const result = _.factorial(n)
      expect( result ).toBe(actual)
    })
  })

})
