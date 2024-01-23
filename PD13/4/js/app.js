function nekenciumatkes(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    return discriminant;
  }
  const discriminant = nekenciumatkes(a, b, c);
  if(discriminant > 0){
    console.log("2 Sprendiniai")
  }
  if(discriminant == 0){
    console.log("1 Sprendinys")
  }
  if(discriminant < 0){
    console.log("Sprendiniu nera")
  }