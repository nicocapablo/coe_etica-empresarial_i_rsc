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
  {
    texto: "Què és l’ètica?",
    opciones: [
      "a) Un conjunt de lleis obligatòries",
      "b) Un conjunt de normes morals que guien la conducta humana",
      "c) Un sistema econòmic"
    ],
    correcta: "b"
  },
  {
    texto: "De què depèn l’ètica?",
    opciones: [
      "a) Només de la llei",
      "b) Del context cultural, social i legal",
      "c) Exclusivament de l’empresa"
    ],
    correcta: "b"
  },
  {
    texto: "Segons Sòcrates, fer el bé és:",
    opciones: [
      "a) Una qüestió de por al càstig",
      "b) Una qüestió de saber",
      "c) Una obligació legal"
    ],
    correcta: "b"
  },
  {
    texto: "Quin filòsof relaciona la felicitat amb l’equilibri i la virtut?",
    opciones: [
      "a) Plató",
      "b) Aristòtil",
      "c) Sòcrates"
    ],
    correcta: "b"
  },
  {
    texto: "L’ètica cristiana es basa principalment en:",
    opciones: [
      "a) El benefici econòmic",
      "b) L’amor i el perdó",
      "c) La competència"
    ],
    correcta: "b"
  },
  {
    texto: "L’ètica musulmana està basada en:",
    opciones: [
      "a) La Bíblia",
      "b) L’Alcorà",
      "c) El Codi Civil"
    ],
    correcta: "b"
  },
  {
    texto: "Què és l’ètica empresarial?",
    opciones: [
      "a) L’aplicació de l’ètica a l’empresa",
      "b) Només complir la llei",
      "c) Una estratègia de màrqueting"
    ],
    correcta: "a"
  },
  {
    texto: "L’ètica empresarial afecta:",
    opciones: [
      "a) Només els beneficis",
      "b) Decisions econòmiques, socials i ambientals",
      "c) Només els treballadors"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és un principi fonamental de l’ètica empresarial?",
    opciones: [
      "a) Maximitzar beneficis",
      "b) Consciència moral",
      "c) Competència agressiva"
    ],
    correcta: "b"
  },
  {
    texto: "Quin avantatge aporta l’ètica empresarial?",
    opciones: [
      "a) Redueix la confiança",
      "b) Millora la reputació",
      "c) Augmenta conflictes"
    ],
    correcta: "b"
  },
  {
    texto: "Quina pràctica evita l’ètica empresarial?",
    opciones: [
      "a) Transparència",
      "b) Publicitat enganyosa",
      "c) Responsabilitat"
    ],
    correcta: "b"
  },
  {
    texto: "Què implica l’equitat empresarial?",
    opciones: [
      "a) Benefici només per a l’empresa",
      "b) Que tots els agents guanyin de manera justa",
      "c) Ignorar la societat"
    ],
    correcta: "b"
  },
  {
    texto: "La integritat empresarial significa:",
    opciones: [
      "a) Dir una cosa i fer-ne una altra",
      "b) Complir el que es promet",
      "c) Prioritzar el benefici"
    ],
    correcta: "b"
  },
  {
    texto: "La sostenibilitat fa referència a:",
    opciones: [
      "a) Produir sense límits",
      "b) Ús eficient dels recursos",
      "c) Només creixement econòmic"
    ],
    correcta: "b"
  },
  {
    texto: "La RSC és:",
    opciones: [
      "a) Una obligació fiscal",
      "b) Un compromís voluntari amb la societat",
      "c) Un tipus d’impost"
    ],
    correcta: "b"
  },
  {
    texto: "La RSC va més enllà de:",
    opciones: [
      "a) Complir la llei",
      "b) Produir més",
      "c) Reduir salaris"
    ],
    correcta: "a"
  },
  {
    texto: "Quin NO és un àmbit de la RSC?",
    opciones: [
      "a) Medi ambient",
      "b) Drets humans",
      "c) Competència agressiva"
    ],
    correcta: "c"
  },
  {
    texto: "Què significa la coherència en RSC?",
    opciones: [
      "a) Fer màrqueting verd",
      "b) Dir, decidir i fer el mateix",
      "c) Prioritzar imatge"
    ],
    correcta: "b"
  },
  {
    texto: "L’Agenda 2030 va ser aprovada:",
    opciones: [
      "a) El 2000",
      "b) El 2010",
      "c) El 2015"
    ],
    correcta: "c"
  },
  {
    texto: "Quants ODS té l’Agenda 2030?",
    opciones: [
      "a) 10",
      "b) 15",
      "c) 17"
    ],
    correcta: "c"
  },
  {
    texto: "Quin ODS promou el treball digne?",
    opciones: [
      "a) ODS 3",
      "b) ODS 8",
      "c) ODS 12"
    ],
    correcta: "b"
  },
  {
    texto: "El moviment B Corp busca:",
    opciones: [
      "a) Maximitzar beneficis",
      "b) Impacte positiu en persones i planeta",
      "c) Eliminar regulacions"
    ],
    correcta: "b"
  },
  {
    texto: "La certificació B Corp avalua:",
    opciones: [
      "a) Només beneficis econòmics",
      "b) Impacte social, ambiental i governança",
      "c) Exclusivament vendes"
    ],
    correcta: "b"
  },
  {
    texto: "Quina és la puntuació mínima per ser B Corp?",
    opciones: [
      "a) 50 punts",
      "b) 70 punts",
      "c) 80 punts"
    ],
    correcta: "c"
  },
  {
    texto: "L’economia d’impacte té en compte:",
    opciones: [
      "a) Només el benefici",
      "b) Impacte social, ambiental i governança",
      "c) Només impostos"
    ],
    correcta: "b"
  },
  {
    texto: "Quina opció defineix millor la RSC?",
    opciones: [
      "a) Política de terra cremada",
      "b) Crear valor per a tots els grups d’interès",
      "c) Benefici a curt termini"
    ],
    correcta: "b"
  },
  {
    texto: "Els ODS serveixen per:",
    opciones: [
      "a) Limitar el creixement",
      "b) Millorar la qualitat de vida i protegir el planeta",
      "c) Controlar empreses"
    ],
    correcta: "b"
  },
  {
    texto: "La RSC ajuda a:",
    opciones: [
      "a) Reduir la motivació",
      "b) Atraure i retenir talent",
      "c) Incrementar conflictes"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa ètica busca:",
    opciones: [
      "a) Només guanyar diners",
      "b) Equilibri econòmic, social i ambiental",
      "c) Eliminar competència"
    ],
    correcta: "b"
  },
  {
    texto: "La RSC és la manera com les empreses:",
    opciones: [
      "a) Substitueixen els ODS",
      "b) Contribueixen als ODS",
      "c) Ignoren els ODS"
    ],
    correcta: "b"
  }
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
    "👋 Hola, bienvenido al Tema T910 +T901.\n\n¿Qué quieres practicar?",
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






