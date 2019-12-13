/* base and height are both equal to ,
sample input is equal/n = 6
-we have nested arrays
-first loop is going through the bigger array

--table represetns indexes of (i, j) ---
-we need to fin out whre the triangle begins
-the sum of i and j must be 5 or more . height - 2

(5,0) (4,0) (3,0) (2,0) (1,0)
(5,1) (4,1) (3,1) (2,1) (1,1)
(5,2) (4,2) (3,2) (2,2) (1,2)
(5,3) (4,3) (3,3) (2,3) (1,3)
(5,4) (4,4) (3,4) (2,04) (1,4)
(5,5) (4,5) (3,5) (2,5) (1,5)
*/
function staircse(n) {
  let hight = n;

  for (let i = 0; i < hight; i++) {
    let row = "";

    for (let j = 0; j < hight; j++) {
      if (i + j > hight - 2) {
        row += "#";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

staircse(6);
