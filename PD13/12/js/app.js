function tripsai(n, m) {
    const trips = Math.ceil(n / m);
    return trips;
  }
  
  const n = 100; 
  const m = 20; 
  const trips = tripsai(n, m);
  console.log(trips);