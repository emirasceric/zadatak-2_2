document.write('<h2>Zadatak 2</h2>');

//nastaviti pisati kod ispod


const niz = [];

for (let i = 0; i < 3; i++) {
  niz[i] = [];

  //console.log(niz);
  
  
for (let j = 0; j < 3; j++) {

   if (i === 0) {
     niz[i][j] = (j + 1) * 2; // Prvi red
 }


 else if (i === 1) {
     niz[i][j] = niz[0][j] ** 2; // Drugi red

 
  } else if (i === 2) {
    niz[i][j] = niz[0][j] ** 3; // Treći red
   
  }  
  document.write(`[${i}] [${j}] = ${niz[i][j]}<br>`);
}}


console.log(niz);
