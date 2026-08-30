// =====================================
// ELEMENTOS DE LA PÁGINA
// =====================================

const botonSorpresa =
    document.getElementById("botonSorpresa");

const inicio =
    document.getElementById("inicio");

const sorpresa =
    document.getElementById("sorpresa");

const botonCarta =
    document.getElementById("botonCarta");

const carta =
    document.getElementById("carta");

const botonRecuerdos =
    document.getElementById("botonRecuerdos");

const recuerdos =
    document.getElementById("recuerdos");

const botonFinal =
    document.getElementById("botonFinal");

const razonesSeccion =
    document.getElementById("razones");

const archivo =
    document.getElementById("archivo");

const irRazones =
    document.getElementById("irRazones");

const botonRegalo =
    document.getElementById("botonRegalo");

const finalSeccion =
    document.getElementById("final");

const abrirRegalo =
    document.getElementById("abrirRegalo");

const mensajeFinal =
    document.getElementById("mensajeFinal");

const regaloFinal =
    document.getElementById("regaloFinal");

const confeti =
    document.getElementById("confeti");

const particulas =
    document.getElementById("particulas");

const lluviaCorazones =
    document.getElementById("lluviaCorazones");

const botonMusica =
    document.getElementById("botonMusica");



// =====================================
// FUNCIÓN PARA SUBIR AL PRINCIPIO
// =====================================

function subirAlInicio() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// =====================================
// BOTÓN: ABRIR SORPRESA
// =====================================

if (botonSorpresa) {

    botonSorpresa.addEventListener(
        "click",
        function () {

            inicio.classList.add("salir");

            setTimeout(
                function () {

                    inicio.style.display = "none";

                    sorpresa.style.display = "block";

                    subirAlInicio();

                    crearConfeti();

                },
                800
            );

        }
    );

}



// =====================================
// BOTÓN: ABRIR CARTA
// =====================================

if (botonCarta) {

    botonCarta.addEventListener(
        "click",
        function () {

            sorpresa.style.display = "none";

            carta.style.display = "block";

            subirAlInicio();

        }
    );

}



// =====================================
// BOTÓN: VER RECUERDOS
// =====================================

if (botonRecuerdos) {

    botonRecuerdos.addEventListener(
        "click",
        function () {

            carta.style.display = "none";

            recuerdos.style.display = "block";

            subirAlInicio();

        }
    );

}



// =====================================
// BOTÓN: IR AL ARCHIVO
// =====================================

if (botonFinal) {

    botonFinal.addEventListener(
        "click",
        function () {

            recuerdos.style.display = "none";

            archivo.style.display = "block";

            subirAlInicio();

        }
    );

}



// =====================================
// ARCHIVO → 20 RAZONES
// =====================================

if (irRazones) {

    irRazones.addEventListener(
        "click",
        function () {

            archivo.style.display = "none";

            razonesSeccion.style.display =
                "block";

            razonActual = 0;

            mostrarRazon();

            subirAlInicio();

        }
    );

}



// =====================================
// BOTÓN: IR AL REGALO FINAL
// =====================================

if (botonRegalo) {

    botonRegalo.addEventListener(
        "click",
        function () {

            razonesSeccion.style.display =
                "none";

            finalSeccion.style.display =
                "block";

            subirAlInicio();

        }
    );

}



// =====================================
// BOTÓN: ABRIR REGALO
// =====================================

if (abrirRegalo) {

    abrirRegalo.addEventListener(
        "click",
        function () {

            abrirRegalo.style.display =
                "none";


            // Abrir la caja

            regaloFinal.classList.add(
                "regalo-abierto"
            );


            // Esperar a que se abra

            setTimeout(
                function () {

                    regaloFinal.style.display =
                        "none";

                    mensajeFinal.style.display =
                        "block";

                    crearConfeti();

                    crearLluviaCorazones();

                },
                900
            );

        }
    );

}



// =====================================
// CUENTA REGRESIVA
// =====================================
//
// Cumpleaños:
// 20 de noviembre de 2026
//
// Hora de Chile:
// 00:00:00
//
// UTC-03:00
// =====================================

const fechaCumpleanosChile =
    new Date(
        "2026-11-20T00:00:00-03:00"
    ).getTime();



function actualizarContador() {

    const ahora =
        Date.now();

    const diferencia =
        fechaCumpleanosChile - ahora;



    // =================================
    // SI YA LLEGÓ EL CUMPLEAÑOS
    // =================================

    if (diferencia <= 0) {

        const contador =
            document.getElementById(
                "contador"
            );

        if (contador) {

            contador.innerHTML = `

                <div class="cumple-hoy">

                    🎉 ¡HOY ES EL CUMPLEAÑOS
                    DE DORITA! 🎉

                </div>

            `;

        }

        return;

    }



    // =================================
    // CÁLCULO DEL TIEMPO
    // =================================

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                diferencia /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutos =
        Math.floor(
            (
                diferencia /
                (1000 * 60)
            ) % 60
        );


    const segundos =
        Math.floor(
            (
                diferencia /
                1000
            ) % 60
        );



    // =================================
    // ELEMENTOS
    // =================================

    const elementoDias =
        document.getElementById("dias");

    const elementoHoras =
        document.getElementById("horas");

    const elementoMinutos =
        document.getElementById("minutos");

    const elementoSegundos =
        document.getElementById("segundos");



    // =================================
    // MOSTRAR
    // =================================

    if (elementoDias) {

        elementoDias.textContent =
            String(dias).padStart(
                2,
                "0"
            );

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas).padStart(
                2,
                "0"
            );

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos).padStart(
                2,
                "0"
            );

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos).padStart(
                2,
                "0"
            );

    }

}



// Ejecutar inmediatamente

actualizarContador();



// Actualizar cada segundo

setInterval(
    actualizarContador,
    1000
);



// =====================================
// 20 RAZONES
// =====================================

const razones = [

    {
        emoji: "💜",

        titulo:
            "Es directa al hablar.",

        texto:
            "Me gusta que siempre dices las cosas como las piensas y no necesitas darle mil vueltas a todo."
    },


    {
        emoji: "😂",

        titulo:
            "Es muy graciosa.",

        texto:
            "Tienes una forma de hacer que hasta una conversación completamente normal termine convirtiéndose en algo divertido."
    },


    {
        emoji: "✨",

        titulo:
            "Es independiente.",

        texto:
            "Admiro que sabes hacer tus cosas por tu cuenta y que no necesitas depender de los demás para seguir adelante."
    },


    {
        emoji: "🌟",

        titulo:
            "Es auténtica.",

        texto:
            "No intentas ser alguien diferente para agradarle a los demás. Simplemente eres tú."
    },


    {
        emoji: "🧠",

        titulo:
            "Siempre busca soluciones.",

        texto:
            "Cuando aparece un problema, en lugar de quedarse pensando en él, buscas la manera de solucionarlo."
    },


    {
        emoji: "😂",

        titulo:
            "Sus consejos suelen funcionar.",

        texto:
            "A veces uno no quiere escuchar el consejo, pero después termina descubriendo que probablemente tenías razón."
    },


    {
        emoji: "🤝",

        titulo:
            "Siempre puedo contar contigo.",

        texto:
            "Sé que cuando realmente necesito a alguien, puedo contar contigo."
    },


    {
        emoji: "💬",

        titulo:
            "Tenemos confianza para hablar.",

        texto:
            "Podemos hablar de cosas serias, tonterías, problemas o cualquier cosa que aparezca en el camino."
    },


    {
        emoji: "🫶",

        titulo:
            "Tenemos una confianza especial.",

        texto:
            "Hay cosas que simplemente puedo hablar contigo porque sé que existe esa confianza entre nosotros."
    },


    {
        emoji: "😂",

        titulo:
            "Podemos molestarnos y seguir como si nada.",

        texto:
            "Nos podemos molestar, fastidiar y hacer bromas entre nosotros, y después continuar tranquilamente como si nada hubiera pasado."
    },


    {
        emoji: "😂",

        titulo:
            "\"No joda\".",

        texto:
            "Una frase que probablemente representa más a Dorita de lo que debería."
    },


    {
        emoji: "😏",

        titulo:
            "Tus opiniones sin filtro.",

        texto:
            "Nunca hace falta preguntarte dos veces qué piensas. Tu opinión llega completa, directa y sin envoltura."
    },


    {
        emoji: "🤣",

        titulo:
            "Tus ocurrencias.",

        texto:
            "Siempre aparece algún comentario o idea inesperada que termina haciendo que nos riamos."
    },


    {
        emoji: "👀",

        titulo:
            "Nuestro análisis de gente funable.",

        texto:
            "Porque aparentemente también somos especialistas en analizar situaciones ajenas que probablemente no nos incumben. 😂"
    },


    {
        emoji: "🔥",

        titulo:
            "Tu independencia.",

        texto:
            "Es una de las cosas que más admiro de ti: sabes tomar tus propias decisiones y seguir tu camino."
    },


    {
        emoji: "❤️",

        titulo:
            "Defiendes a las personas que quieres.",

        texto:
            "Cuando alguien que quieres necesita apoyo, sabes estar ahí y defenderlo."
    },


    {
        emoji: "🐰🐱",

        titulo:
            "Tus pequeños gustos.",

        texto:
            "Los gatos, los conejos, el sushi, Kidd Voodoo y ese pequeño universo de cosas que hacen que seas tú."
    },


    {
        emoji: "🥹",

        titulo:
            "Me alegra tenerte como hermana.",

        texto:
            "Puede que no lo diga todos los días, pero realmente me alegra que seas mi hermana."
    },


    {
        emoji: "💜",

        titulo:
            "Eres una persona importante en mi vida.",

        texto:
            "Más allá de todas nuestras bromas y peleas, eres alguien que ocupa un lugar muy importante en mi vida."
    },


    {
        emoji: "🤍",

        titulo:
            "Quiero que sepas que puedes contar conmigo.",

        texto:
            "Pase lo que pase y aunque no siempre encuentre las palabras correctas, quiero que sepas que siempre voy a estar para ti como hermano."
    }

];



// =====================================
// VARIABLES DE LAS RAZONES
// =====================================

let razonActual = 0;


const numeroRazon =
    document.getElementById(
        "numeroRazon"
    );

const emojiRazon =
    document.getElementById(
        "emojiRazon"
    );

const tituloRazon =
    document.getElementById(
        "tituloRazon"
    );

const textoRazon =
    document.getElementById(
        "textoRazon"
    );

const anteriorRazon =
    document.getElementById(
        "anteriorRazon"
    );

const siguienteRazon =
    document.getElementById(
        "siguienteRazon"
    );



// =====================================
// MOSTRAR RAZÓN
// =====================================

function mostrarRazon() {

    if (
        !numeroRazon ||
        !emojiRazon ||
        !tituloRazon ||
        !textoRazon
    ) {

        return;

    }


    const razon =
        razones[razonActual];


    numeroRazon.textContent =
        String(
            razonActual + 1
        ).padStart(
            2,
            "0"
        );


    emojiRazon.textContent =
        razon.emoji;


    tituloRazon.textContent =
        razon.titulo;


    textoRazon.textContent =
        razon.texto;



    // =================================
    // BOTÓN ANTERIOR
    // =================================

    if (anteriorRazon) {

        anteriorRazon.disabled =
            razonActual === 0;

    }



    // =================================
    // ÚLTIMA RAZÓN
    // =================================

    if (
        razonActual ===
        razones.length - 1
    ) {

        if (siguienteRazon) {

            siguienteRazon.style.display =
                "none";

        }

        if (botonRegalo) {

            botonRegalo.style.display =
                "inline-block";

        }

    }

    else {

        if (siguienteRazon) {

            siguienteRazon.style.display =
                "inline-block";

        }

        if (botonRegalo) {

            botonRegalo.style.display =
                "none";

        }

    }



    // =================================
    // ANIMACIÓN
    // =================================

    const tarjeta =
        document.querySelector(
            ".tarjeta-razon"
        );


    if (tarjeta) {

        tarjeta.style.animation =
            "none";


        void tarjeta.offsetWidth;


        tarjeta.style.animation =
            "aparecerRazon 0.5s ease";

    }

}



// =====================================
// SIGUIENTE RAZÓN
// =====================================

if (siguienteRazon) {

    siguienteRazon.addEventListener(
        "click",
        function () {

            if (
                razonActual <
                razones.length - 1
            ) {

                razonActual++;

                mostrarRazon();

            }

        }
    );

}



// =====================================
// RAZÓN ANTERIOR
// =====================================

if (anteriorRazon) {

    anteriorRazon.addEventListener(
        "click",
        function () {

            if (
                razonActual > 0
            ) {

                razonActual--;

                mostrarRazon();

            }

        }
    );

}



// Mostrar primera razón

mostrarRazon();



// =====================================
// CREAR PARTÍCULAS
// =====================================

function crearParticulas() {

    if (!particulas) {

        return;

    }


    for (
        let i = 0;
        i < 50;
        i++
    ) {

        const particula =
            document.createElement(
                "div"
            );


        particula.classList.add(
            "particula"
        );


        particula.style.left =
            Math.random() *
            100 +
            "%";


        particula.style.animationDuration =
            5 +
            Math.random() *
            8 +
            "s";


        particula.style.animationDelay =
            Math.random() *
            8 +
            "s";


        const tamaño =
            2 +
            Math.random() *
            5;


        particula.style.width =
            tamaño +
            "px";


        particula.style.height =
            tamaño +
            "px";


        particulas.appendChild(
            particula
        );

    }

}


crearParticulas();



// =====================================
// CREAR CONFETI
// =====================================

function crearConfeti() {

    if (!confeti) {

        return;

    }


    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const pieza =
            document.createElement(
                "div"
            );


        pieza.classList.add(
            "pieza-confeti"
        );


        pieza.style.left =
            Math.random() *
            100 +
            "%";


        pieza.style.animationDelay =
            Math.random() *
            2 +
            "s";


        pieza.style.animationDuration =
            2 +
            Math.random() *
            3 +
            "s";


        confeti.appendChild(
            pieza
        );


        setTimeout(
            function () {

                pieza.remove();

            },
            6000
        );

    }

}



// =====================================
// LLUVIA DE CORAZONES
// =====================================

function crearLluviaCorazones() {

    if (!lluviaCorazones) {

        return;

    }


    const corazones = [

        "💜",
        "💗",
        "🩵",
        "❤️",
        "💖",
        "💕"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const corazon =
            document.createElement(
                "div"
            );


        corazon.classList.add(
            "corazon"
        );


        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() *
                    corazones.length
                )
            ];


        corazon.style.left =
            Math.random() *
            100 +
            "%";


        corazon.style.fontSize =
            15 +
            Math.random() *
            25 +
            "px";


        corazon.style.animationDuration =
            3 +
            Math.random() *
            4 +
            "s";


        corazon.style.animationDelay =
            Math.random() *
            2 +
            "s";


        lluviaCorazones.appendChild(
            corazon
        );


        setTimeout(
            function () {

                corazon.remove();

            },
            7500
        );

    }

}

// =====================================
// REPRODUCTOR DE MÚSICA
// =====================================

const audioMusica =
    document.getElementById("audioMusica");

let musicaReproduciendo = false;


// =====================================
// BOTÓN DE MÚSICA
// =====================================

if (botonMusica && audioMusica) {

    botonMusica.addEventListener(
        "click",
        function () {

            // =============================
            // REPRODUCIR
            // =============================

            if (!musicaReproduciendo) {

                audioMusica.play()
                    .then(function () {

                        musicaReproduciendo =
                            true;

                        botonMusica.textContent =
                            "⏸";

                    })
                    .catch(function (error) {

                        console.error(
                            "No se pudo reproducir la música:",
                            error
                        );

                    });

            }


            // =============================
            // PAUSAR
            // =============================

            else {

                audioMusica.pause();

                musicaReproduciendo =
                    false;

                botonMusica.textContent =
                    "▶";

            }

        }
    );


    // =====================================
    // CUANDO TERMINA LA CANCIÓN
    // =====================================

    audioMusica.addEventListener(
        "ended",
        function () {

            musicaReproduciendo =
                false;

            botonMusica.textContent =
                "▶";

        }
    );

}