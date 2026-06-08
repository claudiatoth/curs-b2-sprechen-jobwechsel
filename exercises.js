// ============================================
// EXERCIȚII - Sprechen B2: Jobwechsel
// Claudia Toth · 5 exerciții (toate text inputs)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Traducere DE → RO (vocabular cheie)
// ============================================
const ex1Data = [
    { id: 'a', de: 'das Jobangebot', correct: 'oferta de muncă', accept: ['oferta de muncă', 'oferta de munca', 'ofertă de muncă', 'oferta de lucru'] },
    { id: 'b', de: 'kündigen', correct: 'a-și da demisia', accept: ['a-și da demisia', 'a-si da demisia', 'a da demisia', 'a demisiona'] },
    { id: 'c', de: 'die Gehaltserhöhung', correct: 'mărire de salariu', accept: ['mărire de salariu', 'marire de salariu', 'mărirea de salariu', 'marirea de salariu'] },
    { id: 'd', de: 'die Probezeit', correct: 'perioada de probă', accept: ['perioada de probă', 'perioada de proba', 'periodă de probă'] },
    { id: 'e', de: 'die Aufstiegschancen', correct: 'șanse de promovare', accept: ['șanse de promovare', 'sanse de promovare', 'șansele de promovare'] },
    { id: 'f', de: 'das Homeoffice', correct: 'munca de acasă', accept: ['munca de acasă', 'munca de acasa', 'lucru de acasă'] },
    { id: 'g', de: 'das Betriebsklima', correct: 'atmosfera la firmă', accept: ['atmosfera la firmă', 'atmosfera la firma', 'atmosferă la firmă', 'climatul firmei'] },
    { id: 'h', de: 'der unbefristete Vertrag', correct: 'contract pe perioadă nedeterminată', accept: ['contract pe perioadă nedeterminată', 'contract pe perioada nedeterminata', 'contract nedeterminat'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu termenul german în română.</strong><br>
            Diacriticele românești (ă, â, î, ș, ț) sunt opționale — sistemul acceptă ambele forme.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#065f46; font-size:1.05rem;">${item.de}</strong></label>
                    <input type="text" id="ex1-${item.id}" placeholder="traducere RO...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Traducere RO → DE (vocabular activ)
// ============================================
const ex2Data = [
    { id: 'a', ro: 'oferta de muncă', correct: 'das Jobangebot', accept: ['das jobangebot', 'jobangebot', 'das stellenangebot', 'stellenangebot'] },
    { id: 'b', ro: 'a depune demisia', correct: 'die Kündigung einreichen', accept: ['die kündigung einreichen', 'kündigung einreichen', 'die kuendigung einreichen', 'kuendigung einreichen'] },
    { id: 'c', ro: 'salariul', correct: 'das Gehalt', accept: ['das gehalt', 'gehalt', 'der lohn', 'lohn'] },
    { id: 'd', ro: 'a-și asuma riscul', correct: 'das Risiko eingehen', accept: ['das risiko eingehen', 'risiko eingehen'] },
    { id: 'e', ro: 'perioada de probă', correct: 'die Probezeit', accept: ['die probezeit', 'probezeit'] },
    { id: 'f', ro: 'program flexibil', correct: 'flexible Arbeitszeiten', accept: ['flexible arbeitszeiten', 'flexibles arbeitszeiten'] },
    { id: 'g', ro: 'un șef înțelegător', correct: 'ein verständnisvoller Chef', accept: ['ein verständnisvoller chef', 'verständnisvoller chef', 'ein verstaendnisvoller chef', 'verstaendnisvoller chef'] },
    { id: 'h', ro: 'a cere o mărire de salariu', correct: 'um eine Gehaltserhöhung bitten', accept: ['um eine gehaltserhöhung bitten', 'um eine gehaltserhoehung bitten'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔁 Tradu expresia română în germană.</strong><br>
            <em>💡 Diacritice germane:</em> poți scrie <code>ae</code> (= ä), <code>oe</code> (= ö), <code>ue</code> (= ü), <code>ss</code> (= ß).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong style="color:#6b7280; font-size:1.05rem;">${item.ro}</strong></label>
                    <input type="text" id="ex2-${item.id}" placeholder="traducere DE...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Completează propoziția (substantive cheie)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Stell dir vor, ich habe gestern ein neues ____ bekommen!', translation: 'Imaginează-ți că am primit ieri o ofertă nouă de muncă!', correct: 'Jobangebot', accept: ['jobangebot', 'stellenangebot'] },
    { id: 'b', sentence: 'Bevor du ____, solltest du das gut überlegen.', translation: 'Înainte să demisionezi, ar trebui să te gândești bine.', correct: 'kündigst', accept: ['kündigst', 'kuendigst'] },
    { id: 'c', sentence: 'Bei der neuen Firma würde ich ein höheres ____ bekommen.', translation: 'La firma nouă aș primi un salariu mai mare.', correct: 'Gehalt', accept: ['gehalt', 'lohn'] },
    { id: 'd', sentence: 'In den ersten 6 Monaten musst du eine ____ überstehen.', translation: 'În primele 6 luni trebuie să treci de o perioadă de probă.', correct: 'Probezeit', accept: ['probezeit'] },
    { id: 'e', sentence: 'Die neue Firma bietet flexible ____ und Homeoffice an.', translation: 'Firma nouă oferă program flexibil și munca de acasă.', correct: 'Arbeitszeiten', accept: ['arbeitszeiten'] },
    { id: 'f', sentence: 'Bei meinem aktuellen Job habe ich nette ____ und einen guten Chef.', translation: 'La jobul meu actual am colegi simpatici și un șef bun.', correct: 'Kollegen', accept: ['kollegen'] },
    { id: 'g', sentence: 'Wenn du jetzt wechselst, gehst du ein großes ____ ein.', translation: 'Dacă schimbi acum, îți asumi un risc mare.', correct: 'Risiko', accept: ['risiko'] },
    { id: 'h', sentence: 'Vielleicht solltest du mit deinem Chef über eine ____ sprechen.', translation: 'Poate ar trebui să vorbești cu șeful tău despre o mărire de salariu.', correct: 'Gehaltserhöhung', accept: ['gehaltserhöhung', 'gehaltserhoehung'] },
    { id: 'i', sentence: 'Bei einem ____ Vertrag hast du langfristige Sicherheit.', translation: 'Cu un contract pe perioadă nedeterminată ai siguranță pe termen lung.', correct: 'unbefristeten', accept: ['unbefristeten', 'unbefristete'] },
    { id: 'j', sentence: 'Wir müssen das Pro und Contra in Ruhe ____.', translation: 'Trebuie să cântărim pro și contra în liniște.', correct: 'abwägen', accept: ['abwägen', 'abwaegen'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează propoziția cu cuvântul potrivit din vocabular.</strong><br>
            Folosește substantivele/verbele învățate. Atenție la genul și forma corectă.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="cuvântul potrivit...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Reconstruiește dialogul (A vrea să plece, B avertizează)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'A: Du, ich habe ein ____ bekommen — viel besser bezahlt!', translation: 'Tu, am primit o ofertă de muncă — mult mai bine plătită!', correct: 'Jobangebot', accept: ['jobangebot', 'stellenangebot'] },
    { id: 'b', sentence: 'B: Wirklich? Bist du dir ____?', translation: 'Serios? Ești sigur?', correct: 'sicher', accept: ['sicher'] },
    { id: 'c', sentence: 'A: Ja, ich habe mir das gut ____. Es ist eine große Chance.', translation: 'Da, m-am gândit bine la asta. E o șansă mare.', correct: 'überlegt', accept: ['überlegt', 'ueberlegt'] },
    { id: 'd', sentence: 'B: ____ du daran gedacht, dass du erst eine Probezeit überstehen musst?', translation: 'Te-ai gândit la faptul că mai întâi trebuie să treci de o perioadă de probă?', correct: 'Hast', accept: ['hast'] },
    { id: 'e', sentence: 'A: Klar! Aber bei der neuen Firma habe ich bessere ____ und Homeoffice.', translation: 'Sigur! Dar la firma nouă am șanse mai bune de promovare și munca de acasă.', correct: 'Aufstiegschancen', accept: ['aufstiegschancen'] },
    { id: 'f', sentence: 'B: An deiner ____ würde ich erst mit deinem aktuellen Chef sprechen.', translation: 'În locul tău, eu aș vorbi mai întâi cu șeful tău actual.', correct: 'Stelle', accept: ['stelle'] },
    { id: 'g', sentence: 'A: Hm, vielleicht hast du recht. Ich könnte um eine ____ bitten.', translation: 'Mda, poate ai dreptate. Aș putea cere o mărire de salariu.', correct: 'Gehaltserhöhung', accept: ['gehaltserhöhung', 'gehaltserhoehung'] },
    { id: 'h', sentence: 'B: Genau! Ein sicherer Arbeitsplatz und ein gutes ____ sind viel wert.', translation: 'Exact! Un loc de muncă sigur și o atmosferă bună la firmă valorează mult.', correct: 'Betriebsklima', accept: ['betriebsklima'] },
    { id: 'i', sentence: 'A: Ich verstehe deine ____. Lass uns das in Ruhe besprechen.', translation: 'Înțeleg îngrijorările tale. Hai să discutăm calm.', correct: 'Bedenken', accept: ['bedenken'] },
    { id: 'j', sentence: 'B: Gut, ____ es dir noch einmal — eine Nacht darüber schlafen hilft immer.', translation: 'Bine, mai gândește-te — o noapte de gândire ajută mereu.', correct: 'überleg', accept: ['überleg', 'ueberleg'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Dialog: Cursant A a primit o ofertă ↔ Cursant B avertizează asupra riscurilor.</strong><br>
            Completează cuvântul lipsă pentru a reconstrui dialogul natural.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="cuvântul lipsă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Expresia potrivită pentru funcția de dialog
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Vrei să introduci grijă: „Ich verstehe deine ____."', translation: 'Înțeleg îngrijorările tale.', correct: 'Bedenken', accept: ['bedenken'] },
    { id: 'b', sentence: 'Vrei să oferi o sugestie politicoasă: „An ____ Stelle würde ich es nicht tun."', translation: 'În locul tău, eu nu aș face asta.', correct: 'deiner', accept: ['deiner'] },
    { id: 'c', sentence: 'Vrei să confirmi că ești sigur: „Bist du dir ____?"', translation: 'Ești sigur?', correct: 'sicher', accept: ['sicher'] },
    { id: 'd', sentence: 'Vrei să introduci un contraargument diplomatic: „Hast du ____ gedacht, dass die Probezeit auch schiefgehen kann?"', translation: 'Te-ai gândit la faptul că perioada de probă poate să meargă și prost?', correct: 'daran', accept: ['daran'] },
    { id: 'e', sentence: 'Vrei să prezinți două perspective: „Auf der einen Seite mehr Geld, ____ anderen Seite mehr Stress."', translation: 'Pe de o parte mai mulți bani, pe de altă parte mai mult stres.', correct: 'auf der', accept: ['auf der'] },
    { id: 'f', sentence: 'Vrei să exprimi acord parțial: „Das ____ schon, aber das Risiko ist hoch."', translation: 'Așa e, dar riscul este mare.', correct: 'stimmt', accept: ['stimmt'] },
    { id: 'g', sentence: 'Vrei să propui o pauză de gândire: „Überleg es dir noch ____!"', translation: 'Mai gândește-te!', correct: 'einmal', accept: ['einmal', 'mal'] },
    { id: 'h', sentence: 'Vrei să închei dialogul calm: „Lass uns das in ____ besprechen."', translation: 'Hai să discutăm calm.', correct: 'Ruhe', accept: ['ruhe'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>💬 Folosește expresia potrivită pentru funcția dată.</strong><br>
            Aceste expresii sunt esențiale pentru a structura un dialog argumentat la nivel B2.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="expresia potrivită...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
