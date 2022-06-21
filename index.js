function descendingOrder(n){
    let convert = n.toString()
    let newArray = convert.split('')
    let sortedArray = newArray.sort().reverse().join('')
    return Number(sortedArray)
   }