const _ = require('../algorithms')

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

  const consecutiveNumberSeries = [1,2,3,4,5,6,7,8,9,10]

  const testEveryElement = array => {
    return null
  }

  test( 'return index of specified value in sorted array', () => {
    //testEveryElement( consecutiveNumberSeries )
    const result = _.binarySearch( consecutiveNumberSeries, 4 )
    const index = consecutiveNumberSeries.indexOf( 4 )
    expect(result).toBe(index)
  })

  test( 'return null if specified value is not present', () => {
    const result = _.binarySearch( consecutiveNumberSeries, 25 )
    expect(result).toBe(null)
  })
})
