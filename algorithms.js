
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

      /* (alternative syntax)
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

const mergeSort = array => {
  const results = [...array]

  

  return bubbleSort(results)
}

const quickSort = array => {
  const results = [...array]

  return bubbleSort(results)
}

module.exports = { bubbleSort, insertionSort, mergeSort, quickSort }