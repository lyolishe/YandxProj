//returns range, defined by start, end and step parametrs

function range(start, end, step, isRight) {
  if (isNaN(start)){
    throw new Error(`${start} is not a number`)
    return;
  }

  const arrayStart = end? start : 0;
  const arrayEnd = end || start;
  const arrayStep = step?step: arrayEnd< 0? -1: 1;

  let range = [];
  
  if (step == 0) {
    return (new Array(arrayEnd-1)).fill(start)
  }
  
  for (i = 0; i < (arrayEnd-arrayStart)/arrayStep; i++) {
    range.push(arrayStart + i*arrayStep)
  }

  return isRight? range.reverse() : range;
}

function rangeRight(start, end, step) {
	return range(start, end, step, true)
}

export default range;
export default rangeRight;
