//Returns first element in array or undefined

function first (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0]
  } else return undefined
}
export default first;
