//---------
// tuples
//---------

let person: [string, number, boolean] = ['John', 30, true]


//----------------
// tuples example
//----------------
 let hsla: [number, string, string, number]
 hsla = [200, '100%', '50%', 1]

 let xy: [number, number]
 xy = [25.6, 35]

 function useCoords(): [number, number]{
  // get coords
  const lat = 100
  const long = 50

  return [lat, long]

 }

 const [lat, long] = useCoords()


//---------------
// named tuples
//---------------

let user: [name: string, age: number]

user = ['Mary', 35]

console.log(user[0]);
