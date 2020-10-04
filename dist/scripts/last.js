//Returns last item in array or undefined

function last (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[arr.length-1]
  } else return undefined
}

export default last;
