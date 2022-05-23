function digits(number, bynary) {
  const finalNum = number;
  let counter = 0;
  let finalBynary = "";
  while (number !== 0) {
    if (bynary === 0) {
      if (number % 2 === bynary) {
        finalBynary += "" + 0;
        counter++;
      } else {
        finalBynary += "" + 1;
      }
    } else if (bynary !== 0) {
      finalBynary += "" + 1;
      counter++;
    } else {
      finalBynary += "" + 0;
    }
    number = parseInt(number / 2);
  }
  //modified
  console.log(`${finalNum} -> ${finalBynary.split("").reverse().join("")}`);
  if (bynary === 0) {
    console.log(`We have ${counter} zeroes`);
  } else {
    console.log(`We have ${counter} ones`);
  }
}
digits(20, 0);
digits(15, 1);
digits(10, 0);
