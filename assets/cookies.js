function loadMap() {
  const mapContainer = document.getElementById('map-container');
  if (!mapContainer) return;

  mapContainer.innerHTML = `
    <iframe
      src="https://www.google.com/maps?q=Strada%20delle%20Case%2C%2041%2F2%2C%2053042%20Chianciano%20Terme%20SI&output=embed"
      class="w-full h-full border-0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  banner.innerHTML = `
    <div id="cookie-box" class="minimized">
      <div class="cookie-header">
        <img src="images/logo_footer.png" alt="Logo" class="cookie-logo">
        <h3 class="cookie-title">Gestisci Cookie</h3>
       
        <button class="cookie-toggle" aria-label="Apri gestione cookie">
  <span class="icon-cookie">&#9654;</span>

  <span class="icon-close">X</span>
</button>

      </div>
      <div class="cookie-body">
        <p>
          Per offrire la migliore esperienza, utilizziamo cookie tecnici e di profilazione per memorizzare le tue preferenze e analizzare il traffico del sito.
        </p>
        <p>
          Puoi accettare tutti i cookie cliccando su <strong>Accetta</strong> o rifiutare i cookie di profilazione. Non acconsentire o ritirare il consenso può limitare alcune funzionalità.
        </p>
      </div>
      <div class="cookie-footer">
       <div class="cookie-links">
        <a class="text-sm font-bold text-stone-500 hover:text-gold/90 transition-colors" href="privacy.html">Privacy Policy</a> · 
        <a class="text-sm font-bold text-stone-500 hover:text-gold/90 transition-colors" href="cookie-policy.html">Cookie Policy</a>
      </div>
        <div class="cookie-actions">
          <button class="cookie-btn cookie-reject">Rifiuta</button>
          <button class="cookie-btn cookie-accept">Accetta</button>
        </div>
      </div>
    </div>
  `;

  const box = document.getElementById('cookie-box');
  const toggle = box.querySelector('.cookie-toggle');

  // Click sulla linguetta: espandi o minimizza
  toggle.onclick = () => {
    if (box.classList.contains('minimized')) {
      box.classList.remove('minimized');
      box.classList.add('expanded');
    } else {
      box.classList.remove('expanded');
      box.classList.add('minimized');
    }
  };

  // Click accetta/rifiuta: torna linguetta minimizzata
  banner.querySelector('.cookie-accept').onclick = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    loadThirdParty();
    box.classList.remove('expanded');
    box.classList.add('minimized');
  };
  banner.querySelector('.cookie-reject').onclick = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    box.classList.remove('expanded');
    box.classList.add('minimized');
  };

  function loadThirdParty() {
    if (typeof loadMap === 'function') loadMap();
  }
});
