
const bubbleSort = array => {
  let results = array.slice()

  do {
    var swapped = false

    for ( let i = 0; i < array.length; i++ ) {

      const current = results[i]
      const next = results[i+1]
      if ( current > next) {
        results[i] = next
        results[i+1] = current
        swapped = true;
      }

      /* ( alternative syntax ...)
      if ( results[i] > results[i+1] ) {
        let temp = results[i]
        results[i] = results[i+1]
        results[i+1] = temp
        swapped = true
      }
      */
    }

  } while (swapped)

  return results
}

const insertionSort = array => {
  const results = [...array]

  for ( let iUnsorted = 1; iUnsorted < array.length; iUnsorted++ ) {
    for ( let iSorted = 0; iSorted < iUnsorted; iSorted++ ) {
      if ( results[iUnsorted] < results[iSorted] ) {
        const element = results.splice( iUnsorted, 1 )[0]
        results.splice( iSorted, 0, element )
      }
    }
  }

  return results
}

const merge = (left, right) => {

  let merged = []

  while( left.length && right.length ) {
    merged.push( left[0] < right[0] ? left.shift() : right.shift() )
  }

  // ( alternative syntax... )
  //return merged.concat( left, right )
  //return [].concat.call( merged, left, right )
  //return Array.prototype.concat.apply( [], [merged,left,right] )

  return [ ...merged, ...left, ...right ] // either L or R will be empty 
}

const mergeSort = array => {
  
  if ( array.length < 2 ) {
    return array
  }

  const iMiddle = Math.floor( array.length/2 )
  const left = array.slice( 0, iMiddle )
  const right = array.slice( iMiddle )

  return merge( mergeSort(left), mergeSort(right) )
}

const quickSort = array => {
  
  if ( array.length < 2 ) {
    return array
  }

  const pivot = array.pop()
  const low = [], high = []

  array.forEach( element => {
    const arr = element < pivot ? low : high
    arr.push( element )
  });

  return [ ...quickSort(low), pivot, ...quickSort(high) ]
}

const binarySearch = ( sortedArray, elementToFind ) => {

  const findInRange = ( iMin, iMax ) => {

    if ( iMin > iMax )
      return null // element not contained in array

    const iMid = iMin + Math.floor( (iMax - iMin)/2 )
    const value = sortedArray[ iMid ]

    if ( value === elementToFind )
      return iMid
    else if ( value > elementToFind )
      return findInRange( iMin, iMid - 1 )
    else
      return findInRange( iMid + 1, iMax )
  }
  
  return findInRange( 0, sortedArray.length -1 )
}

module.exports = { bubbleSort, insertionSort, mergeSort, quickSort, binarySearch }