// ============================================
// FLASHCARDS - Sprechen B2: Jobwechsel (Arbeit & Beruf)
// Claudia Toth · 32 carduri
// REGULĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === Ofertă & decizia (5) ===
    { de: "das Jobangebot", ro: "oferta de muncă · momentul de pornire al schimbării", audio: "audio/letters/jobangebot.wav" },
    { de: "kündigen", ro: "a-și da demisia · acțiune oficială (verb regulat: ich kündige, ich habe gekündigt)", audio: "audio/letters/kuendigen.wav" },
    { de: "die Kündigung einreichen", ro: "a depune demisia · pasul concret după decizie", audio: "audio/letters/kuendigung-einreichen.wav" },
    { de: "eine Entscheidung treffen", ro: "a lua o decizie · expresie fixă cu treffen, NU machen", audio: "audio/letters/entscheidung-treffen.wav" },
    { de: "zögern", ro: "a ezita · când nu te poți decide", audio: "audio/letters/zoegern.wav" },

    // === Salariu & beneficii (5) ===
    { de: "das Gehalt", ro: "salariul · lunar la angajații cu studii (Lohn = la muncitori)", audio: "audio/letters/gehalt.wav" },
    { de: "die Gehaltserhöhung", ro: "mărirea de salariu · obiectiv al fiecărei negocieri", audio: "audio/letters/gehaltserhoehung.wav" },
    { de: "die Zusatzleistungen", ro: "beneficii suplimentare · ce vine pe lângă salariu", audio: "audio/letters/zusatzleistungen.wav" },
    { de: "das Weihnachtsgeld", ro: "prima de Crăciun · obiceiul german pentru salariați", audio: "audio/letters/weihnachtsgeld.wav" },
    { de: "der Firmenwagen", ro: "mașina de serviciu · beneficiu valoros la firme germane", audio: "audio/letters/firmenwagen.wav" },

    // === PRO schimbare (5) ===
    { de: "bessere Aufstiegschancen", ro: "șanse mai bune de promovare · argument cheie PRO", audio: "audio/letters/aufstiegschancen.wav" },
    { de: "ein modernes Arbeitsumfeld", ro: "un mediu de lucru modern · atmosfera contează la fel ca salariul", audio: "audio/letters/arbeitsumfeld.wav" },
    { de: "flexible Arbeitszeiten", ro: "program flexibil · combinație ideală cu Homeoffice", audio: "audio/letters/arbeitszeiten.wav" },
    { de: "eine neue Herausforderung", ro: "o nouă provocare · argument emoțional puternic", audio: "audio/letters/herausforderung.wav" },
    { de: "sich beruflich weiterentwickeln", ro: "a se dezvolta profesional · obiectiv pe termen lung", audio: "audio/letters/weiterentwickeln.wav" },

    // === CONTRA / riscuri (5) ===
    { de: "die Probezeit", ro: "perioada de probă · primele 3-6 luni la angajator nou, riscante", audio: "audio/letters/probezeit.wav" },
    { de: "das Risiko eingehen", ro: "a-și asuma riscul · verb compus cu eingehen", audio: "audio/letters/risiko-eingehen.wav" },
    { de: "die Unsicherheit", ro: "nesiguranța · sentimentul după demisie", audio: "audio/letters/unsicherheit.wav" },
    { de: "die Überstunden", ro: "orele suplimentare · realitatea jobului mai bine plătit", audio: "audio/letters/ueberstunden.wav" },
    { de: "unter Druck stehen", ro: "a fi sub presiune · expresie cu stehen + unter + Dativ", audio: "audio/letters/druck-stehen.wav" },

    // === Avantaje job actual (4) ===
    { de: "ein sicherer Arbeitsplatz", ro: "un loc de muncă sigur · cel mai puternic argument PRO rămânere", audio: "audio/letters/sicherer-arbeitsplatz.wav" },
    { de: "das gute Betriebsklima", ro: "atmosfera bună la firmă · greu de evaluat înainte de angajare", audio: "audio/letters/betriebsklima.wav" },
    { de: "ein verständnisvoller Chef", ro: "un șef înțelegător · valoare rară, greu de înlocuit", audio: "audio/letters/verstaendnisvoller-chef.wav" },
    { de: "der unbefristete Vertrag", ro: "contract pe perioadă nedeterminată · stabilitate maximă", audio: "audio/letters/unbefristete-vertrag.wav" },

    // === Alternative & negociere (4) ===
    { de: "um eine Gehaltserhöhung bitten", ro: "a cere o mărire de salariu · alternativa rămânerii", audio: "audio/letters/bitten-erhoehung.wav" },
    { de: "die interne Beförderung", ro: "promovare internă · pasul firesc înainte de schimbare", audio: "audio/letters/befoerderung.wav" },
    { de: "einen Kompromiss finden", ro: "a găsi un compromis · soluția echilibrată", audio: "audio/letters/kompromiss.wav" },
    { de: "das Pro und Contra abwägen", ro: "a cântări pro și contra · expresie cheie de gândire structurată", audio: "audio/letters/pro-contra-abwaegen.wav" },

    // === Expresii pentru dialog (4) ===
    { de: "An deiner Stelle würde ich...", ro: "În locul tău, eu aș... · sugestie politicoasă, Konjunktiv II", audio: "audio/letters/an-deiner-stelle.wav" },
    { de: "Hast du daran gedacht, dass...?", ro: "Te-ai gândit la faptul că...? · introducere contraargument diplomatic", audio: "audio/letters/daran-gedacht.wav" },
    { de: "Ich verstehe deine Bedenken.", ro: "Înțeleg îngrijorările tale. · empatie înainte de contraargument", audio: "audio/letters/bedenken.wav" },
    { de: "Überleg es dir noch einmal!", ro: "Mai gândește-te! · imperativ prietenos cu reflexiv (sich)", audio: "audio/letters/ueberleg-noch-einmal.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint">Click oriunde pentru a vedea traducerea</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" id="prev-btn" onclick="prevCard()">← Anterior</button>
            <button class="flashcard-btn" id="next-btn" onclick="nextCard()">Următor →</button>
        </div>
    `;
    showCard(0);
}

function showCard(index) {
    currentCardIndex = index;
    const card = flashcardsData[index];
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    document.getElementById('card-num').textContent = index + 1;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === flashcardsData.length - 1;
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) showCard(currentCardIndex + 1);
}

function prevCard() {
    if (currentCardIndex > 0) showCard(currentCardIndex - 1);
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(() => {});
}

buildFlashcards();
