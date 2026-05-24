// ============================================
// VOCABULAR - Sprechen B2: Jobwechsel (Arbeit & Beruf)
// Tema: Schimbare de job — colegi care discută la cafea
// Claudia Toth · Vocabular bilingv pentru dialog pe perechi B2
// ============================================

const theoryHTML = `
    <!-- 0: Intro + roluri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Tema dialogului + roluri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>💼 Tema: „Jobwechsel — schimbare de job"</h4>
                <p>Voi sunteți doi <strong>colegi de muncă vechi</strong> care vă întâlniți la cafea. <strong>Cursant A</strong> a primit o ofertă mai bine plătită la o altă firmă și se gândește serios să demisioneze. <strong>Cursant B</strong> îl avertizează asupra riscurilor și încearcă să-l convingă să rămână.</p>
                <p>Discutați despre ofertă, salariu, beneficii, dar și despre riscurile schimbării. Argumentați și ascultați-vă reciproc.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Roluri</h4>
                <table class="grammar-table">
                    <tr><th>Cursant</th><th>Poziție</th><th>Argumente principale</th></tr>
                    <tr><td><strong>Cursant A</strong></td><td>vrea <strong>să schimbe</strong> jobul</td><td>salariu mai mare, mediu modern, șanse de promovare, provocare nouă, dezvoltare profesională</td></tr>
                    <tr><td><strong>Cursant B</strong></td><td>vrea ca A <strong>să rămână</strong></td><td>perioada de probă riscantă, colegi noi/oraș nou, jobul actual e sigur, alternativa = negociere internă</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📌 Ce conține acest material</h4>
                <ul style="margin-left: 18px;">
                    <li>7 secțiuni de vocabular bilingv DE → RO (~58 termeni)</li>
                    <li>5 exerciții de fixare a vocabularului (traducere DE↔RO + completare + dialog)</li>
                    <li>32 flashcards cu pronunție Hedda</li>
                    <li>Test final cu 15 întrebări mixte</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Oferta & decizia -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. Oferta de muncă & decizia</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>das Jobangebot / das Stellenangebot</strong></td><td>oferta de muncă</td></tr>
                    <tr><td><strong>ein Angebot bekommen / erhalten</strong></td><td>a primi o ofertă</td></tr>
                    <tr><td><strong>kündigen</strong></td><td>a-și da demisia</td></tr>
                    <tr><td><strong>die Kündigung einreichen</strong></td><td>a depune demisia</td></tr>
                    <tr><td><strong>den Arbeitsplatz wechseln</strong></td><td>a schimba locul de muncă</td></tr>
                    <tr><td><strong>eine Entscheidung treffen</strong></td><td>a lua o decizie</td></tr>
                    <tr><td><strong>sich (Dat.) etwas gut überlegen</strong></td><td>a se gândi bine la ceva</td></tr>
                    <tr><td><strong>zögern</strong></td><td>a ezita</td></tr>
                    <tr><td><strong>sich entschließen, etwas zu tun</strong></td><td>a se hotărî să facă ceva</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Cum folosești la dialog</h4>
                <p>Pentru a deschide subiectul: <em>„Stell dir vor, ich habe gestern ein Jobangebot bekommen — und ich zögere noch."</em> (Imaginează-ți că am primit ieri o ofertă de muncă — și încă ezit.)</p>
            </div>
        </div>
    </div>

    <!-- 2: Salariu & beneficii -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>💰 3. Salariu & beneficii</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #d1fae5;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>das Gehalt / der Lohn</strong></td><td>salariul</td></tr>
                    <tr><td><strong>die Gehaltserhöhung</strong></td><td>mărire de salariu</td></tr>
                    <tr><td><strong>besser bezahlt werden</strong></td><td>a fi plătit mai bine</td></tr>
                    <tr><td><strong>die Zusatzleistungen / die Benefits</strong></td><td>beneficii suplimentare</td></tr>
                    <tr><td><strong>das Weihnachtsgeld</strong></td><td>prima de Crăciun</td></tr>
                    <tr><td><strong>der Bonus</strong></td><td>bonusul</td></tr>
                    <tr><td><strong>die Krankenversicherung</strong></td><td>asigurarea de sănătate</td></tr>
                    <tr><td><strong>die betriebliche Altersvorsorge</strong></td><td>pensia de la angajator</td></tr>
                    <tr><td><strong>der Firmenwagen / der Dienstwagen</strong></td><td>mașina de serviciu</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model</h4>
                <p><em>„Bei der neuen Firma würde ich nicht nur ein höheres Gehalt bekommen, sondern auch einen Firmenwagen und Weihnachtsgeld."</em></p>
                <p style="color:#6b7280; font-style:italic;">La firma nouă, nu doar că aș primi un salariu mai mare, ci și o mașină de serviciu și prima de Crăciun.</p>
            </div>
        </div>
    </div>

    <!-- 3: PRO schimbare -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🚀 4. Argumente PRO schimbare (Cursant A)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #dbeafe;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>bessere Aufstiegschancen</strong></td><td>șanse mai bune de promovare</td></tr>
                    <tr><td><strong>die Karrieremöglichkeiten</strong></td><td>oportunități de carieră</td></tr>
                    <tr><td><strong>ein modernes Arbeitsumfeld</strong></td><td>un mediu de lucru modern</td></tr>
                    <tr><td><strong>flexible Arbeitszeiten</strong></td><td>program flexibil</td></tr>
                    <tr><td><strong>das Homeoffice</strong></td><td>munca de acasă</td></tr>
                    <tr><td><strong>eine neue Herausforderung</strong></td><td>o nouă provocare</td></tr>
                    <tr><td><strong>sich beruflich weiterentwickeln</strong></td><td>a se dezvolta profesional</td></tr>
                    <tr><td><strong>mehr Verantwortung übernehmen</strong></td><td>a-și asuma mai multă responsabilitate</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 4: CONTRA / riscuri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>⚠️ 5. Argumente CONTRA — riscuri (Cursant B)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background: #fef3c7;">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>die Probezeit</strong></td><td>perioada de probă</td></tr>
                    <tr><td><strong>das Risiko eingehen</strong></td><td>a-și asuma riscul</td></tr>
                    <tr><td><strong>die Unsicherheit</strong></td><td>nesiguranța</td></tr>
                    <tr><td><strong>sich an neue Kollegen gewöhnen</strong></td><td>a se obișnui cu colegi noi</td></tr>
                    <tr><td><strong>der Umzug in eine andere Stadt</strong></td><td>mutarea în alt oraș</td></tr>
                    <tr><td><strong>der lange Arbeitsweg</strong></td><td>drum lung până la muncă</td></tr>
                    <tr><td><strong>die Überstunden</strong></td><td>orele suplimentare</td></tr>
                    <tr><td><strong>unter Druck stehen</strong></td><td>a fi sub presiune</td></tr>
                    <tr><td><strong>der Stress am Arbeitsplatz</strong></td><td>stresul la locul de muncă</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>💡 Propoziție model</h4>
                <p><em>„Hast du daran gedacht, dass du erst eine Probezeit überstehen musst — und die kann auch schiefgehen?"</em></p>
                <p style="color:#6b7280; font-style:italic;">Te-ai gândit la faptul că mai întâi trebuie să treci de o perioadă de probă — și asta poate să meargă și prost?</p>
            </div>
        </div>
    </div>

    <!-- 5: Avantajele jobului actual -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏢 6. Avantajele jobului actual</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>ein sicherer Arbeitsplatz</strong></td><td>un loc de muncă sigur</td></tr>
                    <tr><td><strong>das gute Betriebsklima</strong></td><td>atmosferă bună la firmă</td></tr>
                    <tr><td><strong>nette / sympathische Kollegen</strong></td><td>colegi simpatici</td></tr>
                    <tr><td><strong>ein verständnisvoller Chef</strong></td><td>un șef înțelegător</td></tr>
                    <tr><td><strong>die Routine</strong></td><td>rutina</td></tr>
                    <tr><td><strong>eingearbeitet sein</strong></td><td>a fi deja format / inițiat</td></tr>
                    <tr><td><strong>der unbefristete Vertrag</strong></td><td>contract pe perioadă nedeterminată</td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 6: Alternative & negociere -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🤝 7. Alternative, negociere & expresii dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Alternative & negociere</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>eine Gehaltsverhandlung führen</strong></td><td>a purta o negociere salarială</td></tr>
                    <tr><td><strong>um eine Gehaltserhöhung bitten</strong></td><td>a cere o mărire de salariu</td></tr>
                    <tr><td><strong>die interne Beförderung</strong></td><td>promovare internă</td></tr>
                    <tr><td><strong>mit dem Chef sprechen</strong></td><td>a vorbi cu șeful</td></tr>
                    <tr><td><strong>einen Kompromiss finden</strong></td><td>a găsi un compromis</td></tr>
                    <tr><td><strong>das Pro und Contra abwägen</strong></td><td>a cântări pro și contra</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>Expresii utile pentru dialog</h4>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Română</th></tr>
                    <tr><td><strong>Ich habe mir das gut überlegt.</strong></td><td>M-am gândit bine la asta.</td></tr>
                    <tr><td><strong>Was hältst du davon?</strong></td><td>Ce părere ai despre asta?</td></tr>
                    <tr><td><strong>Bist du dir sicher?</strong></td><td>Ești sigur?</td></tr>
                    <tr><td><strong>An deiner Stelle würde ich...</strong></td><td>În locul tău, eu aș...</td></tr>
                    <tr><td><strong>Hast du daran gedacht, dass...?</strong></td><td>Te-ai gândit la faptul că...?</td></tr>
                    <tr><td><strong>Auf der einen Seite... auf der anderen Seite...</strong></td><td>Pe de o parte... pe de altă parte...</td></tr>
                    <tr><td><strong>Das stimmt schon, aber...</strong></td><td>Așa e, însă...</td></tr>
                    <tr><td><strong>Ich verstehe deine Bedenken.</strong></td><td>Înțeleg îngrijorările tale.</td></tr>
                    <tr><td><strong>Überleg es dir noch einmal!</strong></td><td>Mai gândește-te!</td></tr>
                    <tr><td><strong>Lass uns das in Ruhe besprechen.</strong></td><td>Hai să discutăm calm.</td></tr>
                </table>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
