//Checks if `value` is an empty object, collection, map, or set.

function isEmpty(value) {
  switch (typeof value) {
    case "object":
      return value? Object.keys(value).length <1 : true;
    case "array":
    case "string":
      return value.length < 1;
    case "map":
    case "set":
      return value.size < 1
    case "undefined":
    case "boolean":
      return true;
    case "number":
      return value <= 1 && value>= -1
    default: return true 
  }
}

export default isEmpty;
