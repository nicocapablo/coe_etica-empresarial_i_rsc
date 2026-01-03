// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "L’ètica és el conjunt de normes morals que orienten la conducta humana.",
    correcta: "v"
  },
  {
    texto: "L’ètica és igual a tots els països i no depèn del context cultural.",
    correcta: "f"
  },
  {
    texto: "Sòcrates defensava que fer el bé és una qüestió de coneixement.",
    correcta: "v"
  },
  {
    texto: "Aristòtil relacionava la felicitat amb l’equilibri i els hàbits virtuosos.",
    correcta: "v"
  },
  {
    texto: "L’ètica cristiana es basa en l’amor, la misericòrdia i el perdó.",
    correcta: "v"
  },
  {
    texto: "L’ètica musulmana es fonamenta principalment en l’Alcorà.",
    correcta: "v"
  },
  {
    texto: "L’ètica empresarial aplica els valors morals al món de l’empresa.",
    correcta: "v"
  },
  {
    texto: "L’ètica empresarial només afecta les decisions econòmiques.",
    correcta: "f"
  },
  {
    texto: "Un dels objectius de l’ètica empresarial és respectar els drets humans.",
    correcta: "v"
  },
  {
    texto: "Complir la llei és suficient per ser una empresa ètica.",
    correcta: "f"
  },
  {
    texto: "L’ètica empresarial pot millorar la motivació i la confiança dels treballadors.",
    correcta: "v"
  },
  {
    texto: "Una empresa ètica evita pràctiques com la corrupció i la publicitat enganyosa.",
    correcta: "v"
  },
  {
    texto: "L’equitat implica que tots els agents guanyin de manera justa.",
    correcta: "v"
  },
  {
    texto: "La integritat significa complir allò que es promet amb transparència.",
    correcta: "v"
  },
  {
    texto: "La decència empresarial implica poder explicar les accions sense vergonya.",
    correcta: "v"
  },
  {
    texto: "La sostenibilitat es basa en l’ús eficient dels recursos i el respecte ambiental.",
    correcta: "v"
  },
  {
    texto: "L’empresa no té responsabilitats ètiques amb els seus treballadors.",
    correcta: "f"
  },
  {
    texto: "La relació amb els clients s’ha de basar en la confiança i el compliment dels acords.",
    correcta: "v"
  },
  {
    texto: "Acceptar regals personals dels proveïdors és una pràctica ètica habitual.",
    correcta: "f"
  },
  {
    texto: "La Responsabilitat Social Corporativa és un compromís voluntari amb la societat.",
    correcta: "v"
  },
  {
    texto: "La RSC només afecta el medi ambient.",
    correcta: "f"
  },
  {
    texto: "La RSC ha d’afectar totes les àrees i la cadena de valor de l’empresa.",
    correcta: "v"
  },
  {
    texto: "La coherència entre el que es diu i el que es fa és clau en la RSC.",
    correcta: "v"
  },
  {
    texto: "L’Agenda 2030 és un pla global aprovat per l’ONU l’any 2015.",
    correcta: "v"
  },
  {
    texto: "Els Objectius de Desenvolupament Sostenible són 10.",
    correcta: "f"
  },
  {
    texto: "L’ODS 8 promou el treball digne i el creixement econòmic sostenible.",
    correcta: "v"
  },
  {
    texto: "El moviment B Corp defensa que només importa maximitzar beneficis.",
    correcta: "f"
  },
  {
    texto: "La certificació B Corp avalua l’impacte social, ambiental i de governança.",
    correcta: "v"
  },
  {
    texto: "L’economia d’impacte valora com es guanyen els diners, no només quant se’n guanyen.",
    correcta: "v"
  },
  {
    texto: "La RSC és una eina per contribuir als ODS des de l’activitat empresarial.",
    correcta: "v"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  
];


// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema 1.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\n      o \n B)Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "A", iniciarSentencias);
  configurarBoton("btnB", "B", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 30);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecte. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultat final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);




