const screen = document.querySelector("#screen-display");

// FUNCIONES
/* 
  funcionar para insertar los valores en la pantalla
  la funcion recibe un parametro v
  que sera el valor a insertar en la pantalla
  sea un numero, o un operador 
*/

// funcion para calcular el valor
const calculateResult = () => {
  // se obtiene el valor que hay escrito en la pantalla (input)
  let operation = screen.value;
  // en este caso se va a intentar seguir
  // el codigo dentro de la palabra reservada try
  // pero si algo falla y da error
  // entonces pasara al catch y a hacer lo que esta en el catch
  try {
    // se evalua con la palabra reservada eval
    let result = eval(operation);
    // se inserta ese valor en la pantalla
    screen.value = result;
  } catch (e) {
    // si falla la operacion insertar error
    screen.value = "Error";
  }
};

// no-eval alternative (only a, b)
const calculateResultTwo =(value)=>{
  // separated values into array using regular expression
  let equation = value.split(/(\+|-|\*|\/)/)
  console.log(equation)
  let result = operate(equation[0], equation[2], equation[1])
  return result
}

// funcion para limpiar la pantalla
const cleanScreen = () => {
  screen.value = "";
};

const deleteCharacter = () => {
  screen.value = screen.value.slice(0, -1);
};

// funcion para insertar el valor en la pantalla
const insertValue = (v) => {
  // en este caso toma el valor anterior
  // que tenia la pantalla y le concatena (agrega)
  // el valor nuevo
  screen.value += v; // => screen.value = screen.value + v
};

// ASIGNACION DE FUNCIONES
const num_btn_list = [
  // Esto es un objeto
  { id: "btn-0", value: "0" },
  { id: "btn-1", value: "1" },
  { id: "btn-2", value: "2" },
  { id: "btn-3", value: "3" },
  { id: "btn-4", value: "4" },
  { id: "btn-5", value: "5" },
  { id: "btn-6", value: "6" },
  { id: "btn-7", value: "7" },
  { id: "btn-8", value: "8" },
  { id: "btn-9", value: "9" },
  { id: "btn-dot", value: "." },
  // botones operadores
  { id: "btn-op-suma", value: "+" },
  { id: "btn-op-resta", value: "-" },
  { id: "btn-op-div", value: "/" },
  { id: "btn-op-mult", value: "*" },
];

// en la lista declarada arriba se hace un mapeo por cada (forEach) elemento
// donde se llama a una funcion anonima "() => {}" que pasa como parametro
// cada uno de los elementos de la lista y hace un proceso con cada una
num_btn_list.forEach((btn) => {
  // obtiene el boton en base a su id
  // se arma un string concatenando el # y el el id del boton
  // "#" + btn.id => `#${btn.id}`
  let myButton = document.querySelector(`#${btn.id}`);
  // se asigna a ese boton que en el evento click
  // llame a la funcion de insertar valor
  // y le pase por parametro el value del objeto de arriba
  myButton.addEventListener("click", () => insertValue(btn.value));
});

// Botones especiales
// Boton de resultado
document
  .querySelector("#btn-res")
  .addEventListener("click", () => calculateResult());

// Boton de limpiar
document
  .querySelector("#btn-clear")
  .addEventListener("click", () => cleanScreen());

// Boton de borrar
document
  .querySelector("#btn-del")
  .addEventListener("click", () => deleteCharacter());


// UNA CALCULADORA BASICA Y FUNCIONA :D