//dichiaro constant PI e assegno valore
const PI = '3.14'
//stampo in console
console.log(PI)

//assegno nuovo valore alla constante
const PI = '3.1416'
//stampo di nuovo in console
console.log(PI)

/* siccome PI è una constante e abbiamo dato il valore iniziale 3.14 
provando a riassegnare un valore a PI la console stamperà un errore
dove SyntaxError 'PI' already been declared */

let PI = '3.1416'

console.log(PI)

//neanche con let poiché const fissa il valore iniziale, di nuovo erroe