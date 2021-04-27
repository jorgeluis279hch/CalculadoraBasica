let history = new Array();
function clearBox(t) {   
    if (t != 1 && t != 2) {;
        append(".twoBox", "", 1);
        append(".oneBox", "", 1);
    } else {
        append((t === 1) ? ".oneBox": ".twoBox", "", 1);
    }    
}
let append = (identificador, valor, methd) => {
    /**********************************************************
     * @methd === 0 : es para añadir al valor del @identificador
     * @methd === 1 : es para remplazar el valor anterior por el valor que se envia a append
     * y @methd === 3 es para solo obtener el valor del id
     */
    if (methd === 0) {
        return document.querySelector(identificador).value += valor;
    } else if (methd === 1) {
        return document.querySelector(identificador).value = valor;
    } else {
        return document.querySelector(identificador).value;
    }
}
const escribir = (v, destino = 0) => {
    if (destino === 0 ){
        append(".twoBox", v.value, 0);
    }else if (destino !== 0 && append(".twoBox", null, 3).length != 0) {
        let tmp = append(".twoBox", null, 3);
        append(".oneBox", tmp + v.value, 0);
        clearBox(2);
    }
}
let eliminar = () => {
    let actualNumber = append(".twoBox", null, 3);
    let cortando = actualNumber.slice(0, actualNumber.length - 1);
    append(".twoBox", cortando, 1);
}
let simbResta = () => {
    let val = append(".twoBox", null, 3);
    append(".twoBox", '-' + val, 1);
}
let writeSimb = simb => {
    if (append(".twoBox", null, 3).indexOf(simb) == -1){
        append(".twoBox", simb , 0)
    }
}
let elevate = ()=> {
    let elev = append(".twoBox", null, 3);
    if (append(".twoBox", null, 3).length != 0 ){
        writeSimb("²");
        elev.slice(0, elev.length - 1);
        let r = Math.pow(parseInt(elev), 2);
        append(".twoBox", r, 1);  
        add(`${elev}² = ${r}`);
    } 
    clearBox(1);
}
let result = () => {
    let result = append(".oneBox", null, 3) + append(".twoBox", null, 3);
    let res = eval(result.replace(/x/g, "*"));
    add(`${result} = ${res}`);
    append(".twoBox", res, 1);
    clearBox(1);
}   
let raiz = () => {
    let res = append(".twoBox", null, 3).replace(/√/g, "");
    let r = Math.sqrt(parseInt(res));
    append(".twoBox", r, 1);
    add(`√${res} = ${r}`);
    clearBox(1);
}

const add = elem => {
    history.push(elem);
    console.log(elem + ' :: added to history');
}



