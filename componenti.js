// Definizione dell'Header (Titolo + Navigazione)
class HeaderSito extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header>
        <!-- Contenitore principale per affiancare Logo e Testi -->
        <div class="header-main-box">
            
            <img src="logo_defcolori-sito.png" alt="Logo dell'associazione Giochiamoci! Un'illustrazione in stile fumetto con toni pastello che mostra due mani viola aperte verso l'alto per sorreggere diversi elementi ludici: un controller per videogiochi verde chiaro, carte da gioco gialle, un lucchetto azzurro con una chiave infilata (simbolo di escape room), un dado a venti facce rosa per giochi di ruolo e schede di gioco. In basso, la scritta in stampatello maiuscolo scuro 'GIOCHIAMOCI!'." class="logo">
            
            <!-- Sotto-oggetto verticale per i testi -->
            <div class="testi-header">
                <h1>Giochiamoci! APS</h1>
                <p class="motto">Perché anche giocare è un diritto di tutte!</p>
            </div>
    
        </div>

        <!-- **QUESTO E' IL MENU DI NAVIGAZIONE** -->
        <nav>
            <div class="home-link-box">
                <a href="index.html" id="home-link">Home</a>
            </div>
            <!-- SEZIONE: MENU PRINCIPALE -->
            <details>
                <summary>Chi siamo</summary>
                <ul class="menu-principale">
                    <li><a href="01_01_storia.html">Storia e valori</a></li>             
                    <li><a href="01_02_sostienici.html">Sostienici</a></li>
                    <li><a href="01_03_rete.html">Scopri la rete</a></li>
                    <li><a href="01_04_contatti.html">Contatti</a></li>
                </ul>
            </details>
        
            <!-- SEZIONE: GIOCA CON NOI -->
            <details>
                <summary>Gioca con noi</summary>
                <ul id="gioca-con-noi">
                    <li><a href="02_01_escape.html">Escape Room</a></li>
                    <li><a href="02_02_tavolo.html">Giochi da Tavolo</a></li>
                    <li><a href="02_03_ruolo.html">Giochi di Ruolo</a></li> 
                </ul>
            </details>
        
            <!-- SEZIONE: PROGETTA ACCESSIBILE -->
            <details>
                <summary>Progetta Accessibile</summary>
                <ul id="progetta-accessibile">
                    <li><a href="03_01_accessibile.html">Capire l'accessibilità</a></li>
                    <li><a href="03_02_videogiochi.html">Progettare videogiochi</a></li>
                    <li><a href="03_03_acc_tavolo.html">Progettare giochi da tavolo</a></li>    
                </ul>
            </details>
        </nav>

    </header>
    `;
  }
}

// Definizione del Footer
class FooterSito extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="site-footer">
            <h2>Dati associativi</h2>
            <ul>
                <li><b>Tutti i diritti riservati.</b></li>
                <li><b>Sede legale:</b> Via Federico de Roberto 5, 20152 Milano (MI)</li>
                <li><b>Codice Fiscale:</b> 14228970969</li>
                <li><b>Iscrizione RUNTS:</b> Rep. n. 155547</li>
                <li>Ente del Terzo Settore (ETS) iscritto al RUNTS in data <b>07/07/2025</b>.</li>
                <li><a href="00_01_privacy.html">Privacy Policy</a></li>
                <li><a href="00_02_cookies.html">Cookie Policy</a></li>
            </ul>
        </footer>
    `;
  }
}

// Registrazione dei tag personalizzati
customElements.define('header-sito', HeaderSito);
customElements.define('footer-sito', FooterSito);
