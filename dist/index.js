"use strict";
//---------
// tuples
//---------
let person = ['John', 30, true];
//----------------
// tuples example
//----------------
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [25.6, 35];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//---------------
// named tuples
//---------------
let user;
user = ['Mary', 35];
console.log(user[0]);
