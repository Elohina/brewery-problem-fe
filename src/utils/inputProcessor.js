
export const processInput = (fileArray) => {
  const beersResult = new Array(parseInt(fileArray[0]));
  let fixedValues = {};
  for (let index = 1; index < fileArray.length; index++) {
    const element = fileArray[index];
    const values = element.split(' ');
    for (let j = 0; j < values.length; j = j+2) {
      if (fixedValues[values[j]-1] && beersResult[values[j]-1] !== values[j + 1]) {
        return "No solution exists";
      } else {
          if (values.length === 2) {
            fixedValues[values[j]-1] = true;
            beersResult[values[j]-1] = values[j + 1];
          } else {
            const str = values.join('').replace(/[0-9]/g, '');
            if (str === 'CB' || str === 'BC') {
              beersResult[values[j]-1] = values[j + 1];
            } else {
              beersResult[values[j]-1] = 'C';
            }
          }
      }
    }
  }
  return beersResult;
};



