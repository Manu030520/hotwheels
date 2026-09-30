/* =========================================================
   HOT WHEELS — SECUENCIA COMPLETA
   ========================================================= */

const scenes = {

    loading: document.getElementById("loadingScene"),

    sky: document.getElementById("skyScene"),

    bouquet: document.getElementById("bouquetScene"),

    card1: document.getElementById("card1Scene"),

    card2: document.getElementById("card2Scene"),

    card3: document.getElementById("card3Scene"),

    final: document.getElementById("finalScene")

};


/* =========================================================
   ELEMENTOS DE CARGA
   ========================================================= */

const progressBar =
    document.getElementById("loadingProgress");

const percentage =
    document.getElementById("loadingPercent");


/* =========================================================
   CAMBIAR ESCENA
   ========================================================= */

function showScene(scene) {

    Object.values(scenes).forEach(item => {

        if (item) {
            item.classList.remove("active");
        }

    });

    if (scene) {
        scene.classList.add("active");
    }

}


/* =========================================================
   ESPERAR
   ========================================================= */

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


/* =========================================================
   CARGANDO 0 → 100
   ========================================================= */

async function loadingAnimation() {

    showScene(scenes.loading);

    let progress = 0;

    progressBar.style.width = "0%";

    percentage.textContent = "0%";


    while (progress < 100) {

        await wait(35);

        progress++;

        progressBar.style.width =
            `${progress}%`;

        percentage.textContent =
            `${progress}%`;

    }

    await wait(900);

}


/* =========================================================
   CIELO
   ========================================================= */

async function showSky() {

    showScene(scenes.sky);

    await wait(5000);

}


/* =========================================================
   RAMO
   ========================================================= */

async function showBouquet() {

    showScene(scenes.bouquet);

    await wait(5000);

}


/* =========================================================
   TARJETA 1
   ========================================================= */

async function showCard1() {

    showScene(scenes.card1);

    await wait(5000);

}


/* =========================================================
   TARJETA 2
   ========================================================= */

async function showCard2() {

    showScene(scenes.card2);

    await wait(5000);

}


/* =========================================================
   TARJETA 3
   ========================================================= */

async function showCard3() {

    showScene(scenes.card3);

    await wait(5000);

}


/* =========================================================
   FINAL
   ========================================================= */

async function showFinal() {

    showScene(scenes.final);

    await wait(6500);

}


/* =========================================================
   EXPERIENCIA COMPLETA
   ========================================================= */

async function startExperience() {

    await loadingAnimation();

    await showSky();

    await showBouquet();

    await showCard1();

    await showCard2();

    await showCard3();

    await showFinal();


    /* Volver a comenzar */

    startExperience();

}


/* =========================================================
   INICIAR
   ========================================================= */

startExperience();