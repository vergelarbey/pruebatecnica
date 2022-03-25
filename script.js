const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest1 = document.getElementById("resultado1");
const resultadoTest2 = document.getElementById("resultado2");
const resultadoTest3 = document.getElementById("resultado3");
const resultadoTest4 = document.getElementById("resultado4");
const resultadoTest5 = document.getElementById("resultado5");

/* preguntas 1 */
const preguntas1 = [
  {

    pregunta1: "1. ¿Cúal es la capital de Norte de Santander?",
    respuestas1: {
      a: "Cucuta.",
      b: "Barranquilla.",
      c: "Santamarta.",
      d: "Medellin.",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta1: "2. ¿Cúal es la capital de Santander?",
    respuestas1: {
      a: "Bogota",
      b: "Medellin",
      c: "Bucaramanga",
      d: "Cucuta",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta1: "3. ¿Cúal es la capital de Cundinamarca?",
    respuestas1: {
      a: "Bogota.",
      b: "Cartagena.",
      c: "Santamarta.",
      d: "Medellin.",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta1: "4. Cuál es la capital de Antioquia?",
    respuestas1: {
      a: "Medellin",
      b: "Bucaramanga",
      c: "Cartagena",
      d: "Bogota",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta1: "5. Cuál es la capital de Nariño?",
    respuestas1: {
      a: "Manizales",
      b: "Villavicencio",
      c: "Pasto",
      d: "Cucuta",
    },
    respuestaCorrecta: "c",
  },

  
];
/* preguntas 2 */
const preguntas2Yrespuestas2 = [
  {

    pregunta2: "1. ¿asdadasdada?",
    respuestas2: {
      a: "La supersolidaria.",
      b: "La junta de vigilancia.",
      c: "La asamblea general.",
      d: "El consejo de administración.",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta2: "2. ¿fsdfsdfsdfsdfs?",
    respuestas2: {
      a: "El presidente de la junta de vigilancia.",
      b: "El presidente del consejo de administración.",
      c: "El gerente de la cooperativa.",
      d: "El revisor fiscal.",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta2: "3. ¿Quién aprueba el reglamento interno de la cooperativa Coohem?",
    respuestas2: {
      a: "La supersolidaria.",
      b: "La junta de vigilancia.",
      c: "La asamblea general.",
      d: "El consejo de administración",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta2: "4. Cuál es la capital de Antioquia?",
    respuestas2: {
      a: "Medellin",
      b: "Bucaramanga",
      c: "Cartagena",
      d: "Bogota",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta2: "5. Cuál es la capital de Nariño?",
    respuestas2: {
      a: "Manizales",
      b: "Villavicencio",
      c: "Pasto",
      d: "Cucuta",
    },
    respuestaCorrecta: "c",
  },

  
];


/* test 1 */
function mostrarTest1() {
  const preguntas1Yrespuestas1 = [];

  preguntas1.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas1) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas1[letraRespuesta]}
              </label>`
      );
    }

    preguntas1Yrespuestas1.push(
      `<div class="cuestion">${preguntaActual.pregunta1}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntas1Yrespuestas1.join("");
}
/* test 1 */
mostrarTest1();

function mostrarResultado1() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas1.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest1.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " Total de preguntas " +
    preguntas1.length;
}

botonRes.addEventListener("click", mostrarResultado1);


/* test 2 */
function mostrarTest2() {
  const preguntas2Yrespuestas2 = [];

  preguntas2.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas2) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas1[letraRespuesta]}
              </label>`
      );
    }

    preguntas2Yrespuestas2.push(
      `<div class="cuestion">${preguntaActual.pregunta2}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntas2Yrespuestas2.join("");
}
/* test 2 */
mostrarTest2();

function mostrarResultado2() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas2.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest2.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " Total de preguntas " +
    preguntas2.length;
}

botonRes.addEventListener("click", mostrarResultado2);