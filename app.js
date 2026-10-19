// ===================================================
// KEURGUI — GESTION LOCATIVE ÉPURÉE & STRUCTURÉE PAR IMMEUBLE
// ===================================================

// Données par défaut (initiales) si rien n'est encore enregistré
const DEFAULT_PROPERTIES = [
  {
    id: 1,
    building: "Résidence Teranga",
    unitName: "Appartement 3B",
    neighborhood: "Mermoz",
    type: "Appartement 3 pièces standing",
    rent: 230000,
    charges: 20000,
    tenant: "Moussa Diop",
    phone: "+221 77 654 32 10",
    status: "paid",
    paymentMethod: "Wave",
    paidDate: "05/10/2026",
    owner: "M. Babacar Ndiaye",
    receiptNo: "KG-2026-0042"
  },
  {
    id: 2,
    building: "Résidence Teranga",
    unitName: "Appartement 2A",
    neighborhood: "Mermoz",
    type: "Appartement 2 pièces",
    rent: 200000,
    charges: 15000,
    tenant: "Aminata Fall",
    phone: "+221 77 321 45 88",
    status: "paid",
    paymentMethod: "Wave",
    paidDate: "03/10/2026",
    owner: "M. Babacar Ndiaye",
    receiptNo: "KG-2026-0043"
  },
  {
    id: 3,
    building: "Immeuble Horizon",
    unitName: "Appartement 1A",
    neighborhood: "Maristes",
    type: "Appartement 3 pièces",
    rent: 220000,
    charges: 15000,
    tenant: "Fatoumata Bamba",
    phone: "+221 77 888 11 22",
    status: "paid",
    paymentMethod: "Espèces",
    paidDate: "06/10/2026",
    owner: "M. Babacar Ndiaye",
    receiptNo: "KG-2026-0044"
  },
  {
    id: 4,
    building: "Immeuble Horizon",
    unitName: "Appartement 2B",
    neighborhood: "Maristes",
    type: "Appartement 2 pièces",
    rent: 195000,
    charges: 15000,
    tenant: "Alioune Ndoye",
    phone: "+221 78 555 12 34",
    status: "paid",
    paymentMethod: "Orange Money",
    paidDate: "04/10/2026",
    owner: "M. Babacar Ndiaye",
    receiptNo: "KG-2026-0045"
  },
  {
    id: 5,
    building: "Résidence Almadies Corniche",
    unitName: "Duplex Standing 4C",
    neighborhood: "Almadies",
    type: "Duplex vue mer",
    rent: 550000,
    charges: 30000,
    tenant: "Mamadou Diallo",
    phone: "+221 77 444 77 88",
    status: "late",
    paymentMethod: null,
    paidDate: null,
    owner: "Mme Marième Sy",
    receiptNo: "KG-2026-0046"
  },
  {
    id: 6,
    building: "Villas & Logements Individuels",
    unitName: "Villa R+1 Keur Jaraaf",
    neighborhood: "Ouakam",
    type: "Grande villa avec cour",
    rent: 450000,
    charges: 0,
    tenant: "Cheikh Tidiane Seck",
    phone: "+221 76 555 44 33",
    status: "paid",
    paymentMethod: "Wave",
    paidDate: "02/10/2026",
    owner: "M. Ousmane Diagne",
    receiptNo: "KG-2026-0047"
  },
  {
    id: 7,
    building: "Villas & Logements Individuels",
    unitName: "Studio Cosy 104",
    neighborhood: "Ngor",
    type: "Studio indépendant climatisé",
    rent: 180000,
    charges: 15000,
    tenant: "Aïssatou Ba",
    phone: "+221 78 123 99 88",
    status: "paid",
    paymentMethod: "Orange Money",
    paidDate: "01/10/2026",
    owner: "Mme Fatou Sow",
    receiptNo: "KG-2026-0048"
  },
  {
    id: 8,
    building: "Centre d'Affaires VDN",
    unitName: "Bureaux 2ème Étage (Plateau Bureaux)",
    neighborhood: "VDN / Mermoz",
    type: "Bail Commercial & Professionnel (SARL)",
    rent: 600000,
    charges: 50000,
    tenant: "Cabinet Sahel Consulting SARL",
    phone: "+221 77 912 34 56",
    status: "paid",
    paymentMethod: "Virement Bancaire (CBAO)",
    paidDate: "05/10/2026",
    owner: "M. Babacar Ndiaye",
    receiptNo: "FACT-2026-0018",
    isCommercial: true
  }
];

// Chargement depuis le LocalStorage pour préserver les modifications
let properties = loadProperties();

function loadProperties() {
  try {
    const saved = localStorage.getItem('keurgui_properties_data');
    if (saved) {
      let parsed = JSON.parse(saved);
      // S'assurer que l'exemple de bail commercial TVA 18% est présent
      if (!parsed.some(p => p.isCommercial)) {
        const comm = DEFAULT_PROPERTIES.find(p => p.isCommercial);
        if (comm) {
          parsed.push(comm);
          localStorage.setItem('keurgui_properties_data', JSON.stringify(parsed));
        }
      }
      return parsed;
    }
  } catch (e) {
    console.error('Erreur chargement LocalStorage', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
}

function saveProperties() {
  try {
    localStorage.setItem('keurgui_properties_data', JSON.stringify(properties));
  } catch (e) {
    console.error('Erreur sauvegarde LocalStorage', e);
  }
}

function resetDemoData() {
  if (confirm("Voulez-vous réinitialiser le tableau de bord avec les données de démonstration ?")) {
    localStorage.removeItem('keurgui_properties_data');
    properties = JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
    saveProperties();
    renderProperties();
    updateStats();

    // Réafficher le bandeau démo
    const demoBanner = document.querySelector('.demo-banner-highlight');
    if (demoBanner) demoBanner.classList.remove('hidden');

    showToast("Données de démo réactivées !", "success");
  }
}

function clearToMyProperties() {
  if (confirm("Voulez-vous vider les exemples de démo pour commencer à ajouter vos propres biens ? (Vous pourrez restaurer la démo à tout moment avec le bouton 🔄 en haut à droite)")) {
    properties = [];
    saveProperties();
    renderProperties();
    updateStats();

    // Masquer le bandeau démo car l'utilisateur passe en mode réel
    const demoBanner = document.querySelector('.demo-banner-highlight');
    if (demoBanner) demoBanner.classList.add('hidden');

    showToast("Votre tableau de bord est prêt pour vos vrais biens !", "success");
  }
}

// Système de Toast moderne (remplace les alertes brutes)
function showToast(message, type = "info") {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  const icon = type === 'success' ? '✅' : '🔔';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

let isAgencyMode = false;
let activeFilter = 'all';
let currentActiveProperty = null;
let propertyToPay = null;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  updateStats();
  renderBuildingUnitsSetup();
  checkWelcomeGreeting();

  // Support touche Échap pour fermer les fenêtres
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReceiptModal();
      closePayModal();
      closeAddPropertyModal();
      closeFeedbackModal();
    }
  });
});

// Normalisation du texte pour recherche insensible aux accents
function normalizeStr(str) {
  return (str || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Formatage FCFA
function formatFCFA(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
}

// Convertisseur parfait de nombres en lettres français pour quittances officielles
function numberToWordsFR(n) {
  if (n === 0) return 'Zéro Francs CFA';
  
  const ones = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
  const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];

  function convertBelow1000(num) {
    let s = '';
    const h = Math.floor(num / 100);
    const r = num % 100;

    if (h > 0) {
      if (h === 1) s += 'cent ';
      else s += ones[h] + (r === 0 ? ' cents ' : ' cent ');
    }

    if (r > 0) {
      if (r < 10) {
        s += ones[r] + ' ';
      } else if (r < 20) {
        s += teens[r - 10] + ' ';
      } else {
        const t = Math.floor(r / 10);
        const u = r % 10;
        if (t === 7) {
          s += (u === 1 ? 'soixante-et-onze ' : 'soixante-' + teens[u] + ' ');
        } else if (t === 8) {
          s += (u === 0 ? 'quatre-vingts ' : 'quatre-vingt-' + ones[u] + ' ');
        } else if (t === 9) {
          s += 'quatre-vingt-' + teens[u] + ' ';
        } else {
          if (u === 1 && t < 7) s += tens[t] + '-et-un ';
          else s += tens[t] + (u > 0 ? '-' + ones[u] : '') + ' ';
        }
      }
    }
    return s.trim();
  }

  let result = '';
  const millions = Math.floor(n / 1000000);
  let rem = n % 1000000;
  const thousands = Math.floor(rem / 1000);
  rem = rem % 1000;

  if (millions > 0) {
    result += (millions === 1 ? 'un million ' : convertBelow1000(millions) + ' millions ');
  }
  if (thousands > 0) {
    result += (thousands === 1 ? 'mille ' : convertBelow1000(thousands) + ' mille ');
  }
  if (rem > 0) {
    result += convertBelow1000(rem);
  }

  result = result.trim();
  return result.charAt(0).toUpperCase() + result.slice(1) + ' Francs CFA';
}

// Nettoyage intelligent des numéros pour WhatsApp (+221 automatique au Sénégal)
function sanitizeWhatsAppPhone(phone) {
  let clean = (phone || '').replace(/[^0-9]/g, '');
  if (clean.startsWith('00221')) clean = clean.slice(2);
  if (clean.length === 9 && clean.startsWith('7')) {
    clean = '221' + clean; // Ajoute l'indicatif international si l'utilisateur a tapé 77...
  }
  return clean || '221770000000';
}

// ===================================================
// GESTION DU MODE BAILLEUR / AGENCE
// ===================================================
function toggleAgencyMode() {
  const toggle = document.getElementById('agencyModeToggle');
  isAgencyMode = toggle.checked;

  const labelBailleur = document.getElementById('label-bailleur');
  const labelAgence = document.getElementById('label-agence');
  const userBadge = document.getElementById('userRoleBadge');
  const commissionCard = document.getElementById('agencyCommissionCard');
  const agencyOwnerField = document.getElementById('agencyOwnerField');
  const bldAgencyOwnerField = document.getElementById('bldAgencyOwnerField');

  if (isAgencyMode) {
    labelBailleur.classList.remove('active-role');
    labelAgence.classList.add('active-role');
    userBadge.textContent = 'Agence Immobilière';
    commissionCard.style.display = 'flex';
    if (agencyOwnerField) agencyOwnerField.style.display = 'block';
    if (bldAgencyOwnerField) bldAgencyOwnerField.style.display = 'block';
  } else {
    labelBailleur.classList.add('active-role');
    labelAgence.classList.remove('active-role');
    userBadge.textContent = 'Propriétaire';
    commissionCard.style.display = 'none';
    if (agencyOwnerField) agencyOwnerField.style.display = 'none';
    if (bldAgencyOwnerField) bldAgencyOwnerField.style.display = 'none';
  }

  renderProperties();
  updateStats();
}

// Variables pour le compteur chiffré fluide (Motion Design)
let prevStats = { collected: 0, pending: 0, rate: 0 };

function animateNumber(elementId, start, end, duration, isFCFA = true) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (start === end || duration <= 0) {
    el.textContent = isFCFA ? formatFCFA(end) : end + '%';
    return;
  }
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
    const current = Math.round(start + (end - start) * ease);
    el.textContent = isFCFA ? formatFCFA(current) : current + '%';
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = isFCFA ? formatFCFA(end) : end + '%';
    }
  }
  requestAnimationFrame(step);
}

// ===================================================
// STATISTIQUES GLOBALES
// ===================================================
function updateStats() {
  let totalCollected = 0;
  let totalPending = 0;
  let paidCount = 0;
  let lateCount = 0;

  properties.forEach(p => {
    const totalAmount = p.rent + p.charges;
    if (p.status === 'paid') {
      totalCollected += totalAmount;
      paidCount++;
    } else {
      totalPending += totalAmount;
      lateCount++;
    }
  });

  const totalExpected = totalCollected + totalPending;
  const rate = totalExpected > 0 ? Math.round((totalCollected / totalExpected) * 100) : 0;
  
  // Calcul commissions Agence (10% HT + TVA 18% selon CGI Sénégal)
  const agencyCommissionHt = Math.round(totalCollected * 0.10);
  const agencyTva = Math.round(agencyCommissionHt * 0.18);
  const agencyTtc = agencyCommissionHt + agencyTva;
  const agencyNet = Math.max(0, totalCollected - agencyTtc);

  // Animation fluide des chiffres (Rolling Counter)
  animateNumber('totalCollected', prevStats.collected, totalCollected, 750, true);
  animateNumber('totalPending', prevStats.pending, totalPending, 750, true);
  animateNumber('collectionRate', prevStats.rate, rate, 750, false);
  document.getElementById('collectionFill').style.width = rate + '%';
  document.getElementById('agencyCommission').textContent = formatFCFA(agencyCommissionHt);
  
  const payoutTag = document.getElementById('agencyPayoutTag');
  if (payoutTag) {
    payoutTag.textContent = `Reversé aux bailleurs : ${formatFCFA(agencyNet)}`;
  }

  prevStats = { collected: totalCollected, pending: totalPending, rate: rate };

  // Gestion dynamique de l'alerte pulsation danger pour les retards
  const pendingCard = document.querySelector('.stat-card.stat-warning');
  if (pendingCard) {
    if (lateCount > 0) {
      pendingCard.classList.add('has-late');
    } else {
      pendingCard.classList.remove('has-late');
    }
  }

  // Tags dynamiques explicites et valorisants
  const collectedTag = document.querySelector('.stat-card.stat-success .stat-tag');
  if (collectedTag) {
    collectedTag.textContent = paidCount > 0 
      ? `↑ ${paidCount} loyer${paidCount > 1 ? 's' : ''} encaissé${paidCount > 1 ? 's' : ''}` 
      : 'Aucun encaissement ce mois';
  }

  const pendingTag = document.querySelector('.stat-card.stat-warning .stat-tag');
  if (pendingTag) {
    pendingTag.textContent = lateCount > 0 
      ? `⚠️ ${lateCount} retard${lateCount > 1 ? 's' : ''} à régulariser` 
      : '✓ Tous les loyers sont réglés';
  }

  // Compteurs d'onglets
  document.getElementById('countAll').textContent = properties.length;
  document.getElementById('countPaid').textContent = paidCount;
  document.getElementById('countLate').textContent = lateCount;
}

// ===================================================
// FILTRES ET RECHERCHE
// ===================================================
function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const targetBtn = document.getElementById(`tab-${filter}`);
  if (targetBtn) targetBtn.classList.add('active');
  renderProperties();
}

function searchProperties() {
  renderProperties();
}

// ===================================================
// RENDU VISUEL : GROUPEMENT STRUCTURÉ PAR IMMEUBLE
// ===================================================
function renderProperties() {
  const container = document.getElementById('buildingsContainer');
  const search = normalizeStr(document.getElementById('searchInput').value.trim());

  // Si l'utilisateur a vidé la démo et n'a aucun bien encore enregistré
  if (properties.length === 0) {
    container.innerHTML = `
      <div style="background: white; padding: 60px 24px; text-align: center; border-radius: 16px; border: 2px dashed #a7f3d0; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        <div style="font-size: 52px; margin-bottom: 12px;">🌱</div>
        <h3 style="font-size: 22px; color: #064e3b; font-weight: 800; margin-bottom: 8px;">Votre espace est prêt pour vos vrais biens !</h3>
        <p style="color: #64748b; font-size: 14px; max-width: 540px; margin: 0 auto 24px auto; line-height: 1.6;">
          Les exemples ont été effacés avec succès. Cliquez ci-dessous pour enregistrer vos premiers appartements ou votre immeuble à Dakar.
        </p>
        <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="openAddPropertyModal()">
            <span>+</span> Ajouter mon premier bien / immeuble
          </button>
          <button class="btn btn-secondary" onclick="resetDemoData()">
            <span>🔄</span> Recharger les exemples de démo
          </button>
        </div>
      </div>
    `;
    return;
  }

  // 1. Filtrer les lots avec recherche insensible aux accents
  let filtered = properties.filter(p => {
    if (activeFilter === 'paid' && p.status !== 'paid') return false;
    if (activeFilter === 'late' && p.status !== 'late') return false;

    if (search) {
      const matchBld = normalizeStr(p.building).includes(search);
      const matchUnit = normalizeStr(p.unitName).includes(search);
      const matchTenant = normalizeStr(p.tenant).includes(search);
      const matchQuartier = normalizeStr(p.neighborhood).includes(search);
      const matchOwner = normalizeStr(p.owner).includes(search);
      return matchBld || matchUnit || matchTenant || matchQuartier || matchOwner;
    }
    return true;
  });

  // Si une recherche ne donne rien
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background: white; padding: 48px; text-align: center; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <span style="font-size: 36px;">🔍</span>
        <h3 style="margin-top: 12px; color: #1e293b; font-weight: 800;">Aucun logement ne correspond à cette recherche</h3>
        <p style="color: #64748b; font-size: 13px;">Vérifiez l'orthographe ou effacez la recherche.</p>
        <button class="btn btn-secondary" style="margin-top:16px;" onclick="document.getElementById('searchInput').value=''; setFilter('all');">
          Effacer la recherche
        </button>
      </div>
    `;
    return;
  }

  // 2. Regrouper par Immeuble / Résidence
  const groups = {};
  filtered.forEach(p => {
    const bldName = p.building || 'Autre Propriété';
    if (!groups[bldName]) {
      groups[bldName] = [];
    }
    groups[bldName].push(p);
  });

  // 3. Générer les cartes d'immeubles propres et aérées
  container.innerHTML = Object.keys(groups).map(bldName => {
    const units = groups[bldName];
    const firstUnit = units[0];
    const neighborhood = firstUnit.neighborhood;
    
    // Calculs de l'immeuble
    let bldTotal = 0;
    let bldPaidCount = 0;
    units.forEach(u => {
      bldTotal += (u.rent + u.charges);
      if (u.status === 'paid') bldPaidCount++;
    });

    const isFullPaid = bldPaidCount === units.length;
    const chipClass = isFullPaid ? 'bld-chip success' : 'bld-chip warning';
    const chipText = isFullPaid ? '✓ Tous payés' : `⏳ ${units.length - bldPaidCount} en attente`;

    const icon = bldName.includes('Villa') ? '🏡' : '🏢';

    return `
      <div class="building-card">
        <!-- En-tête épuré de l'immeuble -->
        <div class="building-header">
          <div class="building-title-area">
            <div class="building-icon">${icon}</div>
            <div>
              <h3 class="building-name">${bldName}</h3>
              <div class="building-meta">📍 ${neighborhood} • ${units.length} logement${units.length > 1 ? 's' : ''}</div>
            </div>
          </div>
          <div class="building-summary-chips">
            <span class="bld-chip">${formatFCFA(bldTotal)}</span>
            <span class="${chipClass}">${chipText}</span>
          </div>
        </div>

        <!-- Liste des appartements de l'immeuble -->
        <div class="building-units-list">
          ${units.map(u => {
            const total = u.rent + u.charges;

            // Statut de paiement
            let statusBadge = '';
            if (u.status === 'paid') {
              if (u.paymentMethod === 'Wave') {
                statusBadge = `<span class="unit-badge-status status-paid-wave">🌊 Wave • ${u.paidDate}</span>`;
              } else if (u.paymentMethod === 'Orange Money') {
                statusBadge = `<span class="unit-badge-status status-paid-om">🟠 OM • ${u.paidDate}</span>`;
              } else {
                statusBadge = `<span class="unit-badge-status status-paid-cash">💵 Espèces • ${u.paidDate}</span>`;
              }
            } else {
              statusBadge = `<span class="unit-badge-status status-late">⏳ En attente de loyer</span>`;
            }

            const ownerBadge = isAgencyMode ? `<span class="agency-tag-owner">Bailleur : ${u.owner}</span>` : '';
            const commercialBadge = u.isCommercial ? `<span class="badge-commercial">Bail Pro (TVA 18%)</span>` : '';

            // Boutons d'action
            let actionButtons = '';
            if (u.status === 'paid') {
              const receiptBtnLabel = u.isCommercial ? 'Facture TVA' : 'Quittance PDF';
              actionButtons = `
                <button class="btn-receipt-sm" onclick="openReceiptModal(${u.id})">
                  <span>📄</span> ${receiptBtnLabel}
                </button>
                <button class="btn-whatsapp-sm" onclick="sendWhatsAppReceiptDirect(${u.id})">
                  <span>💬</span> WhatsApp
                </button>
              `;
            } else {
              actionButtons = `
                <button class="btn-collect-sm" onclick="openPayModal(${u.id})">
                  <span>💰</span> Encaisser
                </button>
                <button class="btn-whatsapp-sm" onclick="sendWhatsAppReminder(${u.id})">
                  <span>🔔</span> Relance WhatsApp
                </button>
              `;
            }

            return `
              <div class="unit-row">
                <div class="unit-info-col">
                  <div class="unit-name">${u.unitName} ${commercialBadge} ${ownerBadge}</div>
                  <div class="unit-tenant">
                    Locataire : <strong>${u.tenant}</strong>
                    <span class="unit-phone">(${u.phone})</span>
                  </div>
                </div>

                <div class="unit-financial-col">
                  <div class="unit-amount">${formatFCFA(total)}</div>
                  <div class="unit-breakdown">Loyer : ${formatFCFA(u.rent)} | Ch : ${formatFCFA(u.charges)}</div>
                  <div>${statusBadge}</div>
                </div>

                <div class="unit-actions-col">
                  ${actionButtons}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ===================================================
// MODAL QUITTANCE DE LOYER
// ===================================================
function openReceiptModal(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;
  currentActiveProperty = p;

  const isComm = !!p.isCommercial;
  const docTitle = document.getElementById('mDocumentMainTitle');
  const rentLabel = document.getElementById('mTableRentLabel');
  const rowSubtotal = document.getElementById('mTableRowSubtotalHt');
  const rowTva = document.getElementById('mTableRowTva');
  const totalLabel = document.getElementById('mTableTotalLabel');
  const legalNote = document.getElementById('mDocumentLegalNote');

  document.getElementById('mReceiptNumber').textContent = p.receiptNo;
  document.getElementById('mReceiptRef').textContent = p.receiptNo;
  document.getElementById('mPaymentMethodBadge').textContent = 'Par ' + (p.paymentMethod || 'Wave');
  document.getElementById('mTenantName').textContent = p.tenant;
  document.getElementById('mTenantPhone').textContent = p.phone;
  document.getElementById('mPropertyAddress').textContent = `${p.unitName}, ${p.building} — ${p.neighborhood}, Dakar`;
  document.getElementById('mTablePropertyDetails').textContent = p.type;
  document.getElementById('mTableBaseRent').textContent = formatFCFA(p.rent);
  document.getElementById('mTableCharges').textContent = formatFCFA(p.charges);

  if (isComm) {
    if (docTitle) docTitle.textContent = "FACTURE DE LOYER & CHARGES LOCATIVES";
    if (rentLabel) rentLabel.textContent = "Loyer commercial / professionnel (HT)";
    
    const ht = p.rent + p.charges;
    const tva = Math.round(ht * 0.18);
    const ttc = ht + tva;

    if (rowSubtotal) {
      rowSubtotal.style.display = 'table-row';
      document.getElementById('mTableSubtotalHt').textContent = formatFCFA(ht);
    }
    if (rowTva) {
      rowTva.style.display = 'table-row';
      document.getElementById('mTableTva').textContent = formatFCFA(tva);
    }
    if (totalLabel) totalLabel.textContent = "TOTAL GÉNÉRAL TTC RÉGLÉ";
    document.getElementById('mTableTotal').textContent = formatFCFA(ttc);
    document.getElementById('mAmountWords').textContent = numberToWordsFR(ttc);
    
    if (legalNote) {
      legalNote.innerHTML = "<p>Facture de loyer commercial assujettie à la TVA au taux légal de 18% conformément à l'article 355 et suivants du Code Général des Impôts (CGI) de la République du Sénégal. TVA déductible. Le présent document certifié vaut quittance libératoire de loyer pour la période susmentionnée.</p>";
    }
  } else {
    if (docTitle) docTitle.textContent = "QUITTANCE DE LOYER OFFICIELLE";
    if (rentLabel) rentLabel.textContent = "Loyer principal d'habitation";
    if (rowSubtotal) rowSubtotal.style.display = 'none';
    if (rowTva) rowTva.style.display = 'none';
    if (totalLabel) totalLabel.textContent = "TOTAL NET ENCAISSÉ ET RÉGLÉ";
    
    const total = p.rent + p.charges;
    document.getElementById('mTableTotal').textContent = formatFCFA(total);
    document.getElementById('mAmountWords').textContent = numberToWordsFR(total);

    if (legalNote) {
      legalNote.innerHTML = "<p>La présente quittance annule tout reçu antérieur pour la période susvisée. Elle ne préjuge pas des loyers postérieurs. Exonéré de TVA en vertu de l'article 361 du Code Général des Impôts (CGI) du Sénégal. Document généré avec certification numérique KeurGui conforme aux normes OHADA.</p>";
    }
  }

  if (isAgencyMode && p.owner) {
    document.getElementById('mOwnerName').textContent = p.owner + ' (Géré par Agence KeurGui)';
  } else {
    document.getElementById('mOwnerName').textContent = 'Jean Philippe Gomis';
  }

  const modal = document.getElementById('receiptModalOverlay');
  modal.classList.add('active');
}

function closeReceiptModal() {
  document.getElementById('receiptModalOverlay').classList.remove('active');
}

// Téléchargement direct PDF
function downloadDirectPDF() {
  if (!currentActiveProperty) return;

  const btn = document.getElementById('btnDirectPdf');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>⏳</span> Création du PDF...';
  btn.classList.add('loading');

  const element = document.getElementById('printableReceipt');
  const cleanTenantName = currentActiveProperty.tenant.replace(/\s+/g, '_');
  const docTypePrefix = currentActiveProperty.isCommercial ? 'Facture_Loyer' : 'Quittance';
  const filename = `${docTypePrefix}_${currentActiveProperty.receiptNo}_${cleanTenantName}.pdf`;

  const opt = {
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  if (window.html2pdf) {
    html2pdf().set(opt).from(element).save().then(() => {
      btn.innerHTML = '<span>✅</span> Téléchargé !';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('loading');
      }, 2500);
    }).catch(err => {
      console.error('Erreur PDF:', err);
      window.print();
      btn.innerHTML = originalText;
      btn.classList.remove('loading');
    });
  } else {
    window.print();
    btn.innerHTML = originalText;
    btn.classList.remove('loading');
  }
}

// Impression papier
function printReceiptPaper() {
  window.print();
}

// MESSAGE D'ACCOMPAGNEMENT WHATSAPP POUR LE PDF (POLI & PRÉCIS)
function sendWhatsAppReceipt() {
  if (!currentActiveProperty) return;
  sendWhatsAppReceiptDirect(currentActiveProperty.id);
}

function sendWhatsAppReceiptDirect(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;

  let message = '';
  if (p.isCommercial) {
    const ht = p.rent + p.charges;
    const tva = Math.round(ht * 0.18);
    const ttc = ht + tva;
    message = `Bonjour ${p.tenant},

J'espère que vous vous portez bien.

Veuillez trouver ci-joint votre Facture de Loyer et Quittance officielle (au format PDF) avec décompte de TVA 18% pour le mois d'Octobre 2026 concernant vos locaux professionnels : ${p.unitName} (${p.building}).

• Montant HT (Loyer + charges) : ${formatFCFA(ht)}
• TVA légale (18% - CGI Sénégal) : ${formatFCFA(tva)}
• Total réglé TTC : ${formatFCFA(ttc)} (par ${p.paymentMethod})
• Référence Facture : ${p.receiptNo}

Ce document officiel comporte toutes les mentions fiscales réglementaires (NINEA, RC) déductibles auprès de la DGID Sénégal.
Merci pour votre collaboration.

Bien cordialement,
Jean Philippe Gomis — KeurGui Immobilier`;
  } else {
    const total = formatFCFA(p.rent + p.charges);
    message = `Bonjour ${p.tenant},

J'espère que vous vous portez bien.

Veuillez trouver ci-joint votre quittance de loyer officielle (au format PDF) pour le mois d'Octobre 2026 concernant votre logement : ${p.unitName} (${p.building}).

• Montant réglé : ${total} (par ${p.paymentMethod})
• Référence Quittance : ${p.receiptNo}

Merci pour votre ponctualité.
Excellente journée à vous !

Bien cordialement,
Jean Philippe Gomis — KeurGui Immobilier`;
  }

  const cleanPhone = sanitizeWhatsAppPhone(p.phone);
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function sendWhatsAppReminder(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;

  const total = formatFCFA(p.rent + p.charges);
  const message = `Bonjour ${p.tenant},

Petit rappel amical concernant votre loyer d'Octobre 2026 pour le logement : ${p.unitName} (${p.building}).
Montant à régler : ${total}.

Le règlement peut être effectué par Wave ou Orange Money.
Dès réception, nous vous transmettrons immédiatement votre quittance PDF officielle.

Merci pour votre collaboration !
KeurGui Gestion — Jean Philippe Gomis`;

  const cleanPhone = sanitizeWhatsAppPhone(p.phone);
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ===================================================
// ENCAISSEMENT D'UN LOYER EN ATTENTE
// ===================================================
function openPayModal(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;
  propertyToPay = p;

  document.getElementById('payModalTenant').textContent = `${p.tenant} (${p.unitName} - ${p.building})`;
  document.getElementById('payModalAmount').textContent = formatFCFA(p.rent + p.charges);

  document.getElementById('payModalOverlay').classList.add('active');
}

function closePayModal() {
  document.getElementById('payModalOverlay').classList.remove('active');
  propertyToPay = null;
}

// Obtenir la date du jour formatée
function getTodayFormatted() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}

function getTodayFrench() {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const now = new Date();
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

function getCurrentMonthYear() {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
}

function confirmPayment() {
  if (!propertyToPay) return;

  const selectedMethod = document.querySelector('input[name="payMethod"]:checked').value;
  propertyToPay.status = 'paid';
  propertyToPay.paymentMethod = selectedMethod;
  propertyToPay.paidDate = getTodayFormatted();

  saveProperties(); // Sauvegarde permanente
  closePayModal();
  renderProperties();
  updateStats();

  // Motion Design : Onde de choc lumineuse Wave
  triggerPaymentSuccessBurst();

  showToast(`Paiement de ${propertyToPay.tenant} enregistré (${selectedMethod}) !`, "success");
  setTimeout(() => {
    openReceiptModal(propertyToPay.id);
  }, 450);
}

function triggerPaymentSuccessBurst() {
  const burst = document.createElement('div');
  burst.className = 'payment-success-burst';
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 800);
}

// ===================================================
// GESTIONNAIRE D'IMMEUBLES & LOCATAIRES DÉTAILLÉS
// ===================================================
function openAddPropertyModal() {
  document.getElementById('addPropertyModal').classList.add('active');
}

function closeAddPropertyModal() {
  document.getElementById('addPropertyModal').classList.remove('active');
  document.getElementById('formSingleProperty').reset();
  document.getElementById('formBuildingGenerator').reset();
  switchAddMode('single');
}

function switchAddMode(mode) {
  const tabSingle = document.getElementById('tabAddSingle');
  const tabBuilding = document.getElementById('tabAddBuilding');
  const formSingle = document.getElementById('formSingleProperty');
  const formBuilding = document.getElementById('formBuildingGenerator');

  if (mode === 'single') {
    tabSingle.classList.add('active');
    tabBuilding.classList.remove('active');
    formSingle.style.display = 'block';
    formBuilding.style.display = 'none';
  } else {
    tabSingle.classList.remove('active');
    tabBuilding.classList.add('active');
    formSingle.style.display = 'none';
    formBuilding.style.display = 'block';
    renderBuildingUnitsSetup(); // Met à jour la liste des champs
  }
}

// Génère les champs interactifs pour renseigner le locataire de chaque appartement
function renderBuildingUnitsSetup() {
  const unitCount = parseInt(document.getElementById('bldUnitCount').value, 10) || 4;
  const listContainer = document.getElementById('buildingUnitsSetupList');
  if (!listContainer) return;

  const letters = ['A', 'B', 'C', 'D'];
  let html = '';

  for (let i = 1; i <= unitCount; i++) {
    const floor = Math.ceil(i / 2);
    const letter = letters[(i - 1) % 2];
    const unitLabel = `Appt ${floor}${letter}`;

    html += `
      <div class="unit-setup-row">
        <span class="unit-setup-badge">🚪 ${unitLabel}</span>
        <input type="text" id="unitTenant_${i}" placeholder="Nom du locataire (ex: Moussa Fall)" value="Locataire ${unitLabel}">
        <input type="text" id="unitPhone_${i}" placeholder="Téléphone (+221 77...)" value="+221 77 000 00 0${i}">
      </div>
    `;
  }

  listContainer.innerHTML = html;
}

// Ajout d'un logement individuel
function handleAddNewProperty(e) {
  e.preventDefault();

  const name = document.getElementById('propName').value.trim();
  const neighborhood = document.getElementById('propNeighborhood').value;
  const type = document.getElementById('propType').value;
  const rent = parseInt(document.getElementById('propRent').value, 10);
  const charges = parseInt(document.getElementById('propCharges').value, 10) || 0;
  const tenant = document.getElementById('propTenantName').value.trim();
  const phone = document.getElementById('propTenantPhone').value.trim();
  const owner = (document.getElementById('propOwnerName') && document.getElementById('propOwnerName').value) || 'Jean Philippe Gomis';
  const initialStatus = document.querySelector('input[name="propInitialStatus"]:checked').value;
  const isCommercial = document.getElementById('propIsCommercial') 
    ? document.getElementById('propIsCommercial').checked 
    : (type === 'Commercial' || type === 'Bureaux');

  const newId = Date.now();
  const newReceiptNo = isCommercial 
    ? `FACT-${new Date().getFullYear()}-${String(newId).slice(-6)}`
    : `KG-${new Date().getFullYear()}-${String(newId).slice(-6)}`;

  const newProp = {
    id: newId,
    building: "Logements Individuels",
    unitName: name,
    neighborhood: neighborhood,
    type: type,
    rent: rent,
    charges: charges,
    tenant: tenant,
    phone: phone,
    status: initialStatus,
    paymentMethod: initialStatus === 'paid' ? 'Wave' : null,
    paidDate: initialStatus === 'paid' ? '17/10/2026' : null,
    owner: owner,
    receiptNo: newReceiptNo,
    isCommercial: isCommercial
  };

  properties.unshift(newProp);
  saveProperties(); // Sauvegarde permanente
  closeAddPropertyModal();
  renderProperties();
  updateStats();

  showToast(`Logement "${name}" ajouté avec succès !`, "success");
}

// Création d'un immeuble avec tous ses locataires personnalisés
function handleGenerateBuilding(e) {
  e.preventDefault();

  const bldName = document.getElementById('bldName').value.trim();
  const neighborhood = document.getElementById('bldNeighborhood').value;
  const unitCount = parseInt(document.getElementById('bldUnitCount').value, 10) || 4;
  const defaultRent = parseInt(document.getElementById('bldDefaultRent').value, 10) || 220000;
  const owner = (document.getElementById('bldOwnerName') && document.getElementById('bldOwnerName').value) || 'Jean Philippe Gomis';

  const letters = ['A', 'B', 'C', 'D'];

  for (let i = 1; i <= unitCount; i++) {
    const floor = Math.ceil(i / 2);
    const letter = letters[(i - 1) % 2];
    const unitLabel = `Appt ${floor}${letter}`;

    const tenantInput = document.getElementById(`unitTenant_${i}`);
    const phoneInput = document.getElementById(`unitPhone_${i}`);

    const tenantName = (tenantInput && tenantInput.value.trim()) || `Locataire ${unitLabel}`;
    const tenantPhone = (phoneInput && phoneInput.value.trim()) || '+221 77 000 00 00';

    const newId = properties.length + 1;
    const newReceiptNo = `KG-2026-00${50 + newId}`;

    properties.push({
      id: newId,
      building: bldName,
      unitName: unitLabel,
      neighborhood: neighborhood,
      type: "Appartement conventionné",
      rent: defaultRent,
      charges: 15000,
      tenant: tenantName,
      phone: tenantPhone,
      status: "late", // En attente par défaut !
      paymentMethod: null,
      paidDate: null,
      owner: owner,
      receiptNo: newReceiptNo
    });
  }

  saveProperties(); // Sauvegarde permanente
  closeAddPropertyModal();
  renderProperties();
  updateStats();

  showToast(`Immeuble "${bldName}" (${unitCount} lots) créé avec succès !`, "success");
}

function closeModalOnOverlay(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
}

// ===================================================
// BANNIÈRE D'ACCUEIL PERSONNALISÉE SUBTILE & CHALEUREUSE
// ===================================================
function checkWelcomeGreeting() {
  const urlParams = new URLSearchParams(window.location.search);
  const welcomeParam = urlParams.get('welcome');
  const nameParam = urlParams.get('name') || localStorage.getItem('keurgui_lead_name');
  
  if (nameParam) {
    const avatarEl = document.getElementById('headerAvatar');
    const nameEl = document.getElementById('headerUserName');
    if (avatarEl && nameParam.length > 0) {
      avatarEl.textContent = nameParam.substring(0, 2).toUpperCase();
    }
    if (nameEl) {
      nameEl.textContent = nameParam;
    }
  }

  const dismissed = sessionStorage.getItem('keurgui_welcome_dismissed');
  if (!dismissed && (welcomeParam === '1' || nameParam)) {
    const banner = document.getElementById('welcomeBanner');
    const nameSpan = document.getElementById('welcomeUserName');
    if (banner && nameSpan) {
      nameSpan.textContent = nameParam || 'Cher Propriétaire';
      banner.style.display = 'block';
    }
  }
}

function dismissWelcomeBanner() {
  const banner = document.getElementById('welcomeBanner');
  if (banner) banner.style.display = 'none';
  sessionStorage.setItem('keurgui_welcome_dismissed', 'true');
}

// ===================================================
// GESTION DU SERVICE CLIENT & FEEDBACK DIRECT ($100M)
// ===================================================
const GOOGLE_SHEETS_FEEDBACK_URL = "https://script.google.com/macros/s/AKfycbyq-4fs2XGdsdMSPWRjvwyuut-V8PgZ-_38_titTXmfz6G4jxCDZy6yuCwpWnmYm_IN/exec";

function openFeedbackModal() {
  const modal = document.getElementById('feedbackModalOverlay');
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => {
      const commentInput = document.getElementById('feedbackComment');
      if (commentInput) commentInput.focus();
    }, 100);
  }
}

function closeFeedbackModal() {
  const modal = document.getElementById('feedbackModalOverlay');
  if (modal) modal.style.display = 'none';
}

function closeModalOnBackdropFb(e) {
  if (e.target.id === 'feedbackModalOverlay') {
    closeFeedbackModal();
  }
}

function selectRating(val, el) {
  document.getElementById('selectedRatingValue').value = val;
  document.querySelectorAll('.star-rating-pill').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
}

async function handleFeedbackSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSendFeedback');
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span>Envoi en cours...</span> ⏳';

  const rating = document.getElementById('selectedRatingValue').value;
  const comment = document.getElementById('feedbackComment').value.trim();
  const userName = localStorage.getItem('keurgui_lead_name') || 'Visiteur Démo';
  const dateStr = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' });

  const payload = {
    date: dateStr,
    name: userName,
    phone: "⭐ Avis Client (" + rating + "/5)",
    email: "Note : " + rating + " étoiles",
    role: "Suggestion : " + comment
  };

  if (GOOGLE_SHEETS_FEEDBACK_URL) {
    try {
      await fetch(GOOGLE_SHEETS_FEEDBACK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Feedback envoi différé', err);
    }
  }

  closeFeedbackModal();
  showToast("Merci infiniment ! Votre avis a été directement transmis à Jean Philippe.", "success");
  document.getElementById('feedbackForm').reset();
  btn.disabled = false;
  btn.innerHTML = original;
}

function sendFeedbackWhatsAppDirect() {
  const rating = document.getElementById('selectedRatingValue').value;
  const comment = document.getElementById('feedbackComment').value.trim() || 'Bonjour Jean Philippe, je viens de tester KeurGui !';
  const text = `Salam Jean Philippe, voici mon avis sur KeurGui (Note : ${rating}/5) :\n\n"${comment}"`;
  const jpPhone = "221788182104"; // Numéro direct WhatsApp de Jean Philippe
  const url = `https://wa.me/${jpPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  closeFeedbackModal();
}

// ===================================================
// GESTION DES FACTURES D'HONORAIRES AGENCE (TVA 18% & TTC)
// ===================================================
let activeAgencyOwner = 'all';

function openAgencyInvoiceModal() {
  populateAgencyOwnerSelect();
  updateAgencyInvoiceView();
  const modal = document.getElementById('agencyInvoiceModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeAgencyInvoiceModal() {
  const modal = document.getElementById('agencyInvoiceModalOverlay');
  if (modal) modal.classList.remove('active');
}

function closeAgencyInvoiceModalOnOverlay(e) {
  if (e.target && e.target.id === 'agencyInvoiceModalOverlay') {
    closeAgencyInvoiceModal();
  }
}

function populateAgencyOwnerSelect() {
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  if (!select) return;

  // Récupérer la liste unique des bailleurs
  const owners = Array.from(new Set(properties.map(p => p.owner || 'Jean Philippe Gomis'))).sort();
  
  let html = `<option value="all">Portefeuille global (Tous les bailleurs)</option>`;
  owners.forEach(owner => {
    html += `<option value="${owner}">${owner}</option>`;
  });
  select.innerHTML = html;
  select.value = activeAgencyOwner || 'all';
}

function onAgencyOwnerFilterChange() {
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  activeAgencyOwner = select ? select.value : 'all';
  updateAgencyInvoiceView();
}

function updateAgencyInvoiceView() {
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  const selectedOwner = select ? select.value : 'all';

  // Filtrer les biens encaissés
  const paidProps = properties.filter(p => p.status === 'paid' && (selectedOwner === 'all' || p.owner === selectedOwner));
  
  let totalCollected = 0;
  paidProps.forEach(p => {
    totalCollected += (p.rent + p.charges);
  });

  // Commission 10% HT, TVA 18% sur commission, TTC
  const commissionRate = 0.10;
  const commissionHt = Math.round(totalCollected * commissionRate);
  const tvaRate = 0.18;
  const tva = Math.round(commissionHt * tvaRate);
  const commissionTtc = commissionHt + tva;
  const netPayout = Math.max(0, totalCollected - commissionTtc);

  // Mettre à jour l'en-tête
  const ownerDisplay = document.getElementById('agencyInvoiceOwnerDisplay');
  const portfolioDesc = document.getElementById('agencyInvoicePortfolioDesc');
  const unitsDetail = document.getElementById('agencyInvoiceUnitsDetail');
  
  if (selectedOwner === 'all') {
    if (ownerDisplay) ownerDisplay.textContent = "Portefeuille Global de l'Agence";
    if (portfolioDesc) portfolioDesc.textContent = `${paidProps.length} lots gérés avec encaissement au Sénégal`;
    if (unitsDetail) unitsDetail.textContent = `Globalité des encaissements (${paidProps.length} loyers perçus)`;
  } else {
    if (ownerDisplay) ownerDisplay.textContent = selectedOwner;
    if (portfolioDesc) portfolioDesc.textContent = `${paidProps.length} lot(s) en gérance mandatée`;
    if (unitsDetail) unitsDetail.textContent = `Encaissements perçus pour ${selectedOwner} (${paidProps.length} lot(s))`;
  }

  // Remplir les montants
  document.getElementById('agencyTableCollected').textContent = formatFCFA(totalCollected);
  document.getElementById('agencyTableCommissionHt').textContent = formatFCFA(commissionHt);
  document.getElementById('agencyTableTva').textContent = formatFCFA(tva);
  document.getElementById('agencyTableTotalTtc').textContent = formatFCFA(commissionTtc);
  document.getElementById('agencyNetPayout').textContent = formatFCFA(netPayout);
  document.getElementById('agencyAmountWords').textContent = numberToWordsFR(commissionTtc);
  
  // Date et Réf
  const now = new Date();
  const year = now.getFullYear();
  const invoiceRef = `FACT-AG-${year}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  
  const invNumberEl = document.getElementById('mAgencyInvoiceNumber');
  const invRefEl = document.getElementById('agencyInvoiceRef');
  if (invNumberEl) invNumberEl.textContent = invoiceRef;
  if (invRefEl) invRefEl.textContent = invoiceRef;
}

function downloadAgencyInvoicePdf() {
  const btn = document.getElementById('btnAgencyPdf');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>⏳</span> Création du PDF...';
  btn.classList.add('loading');

  const element = document.getElementById('printableAgencyInvoice');
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  const ownerClean = (select ? select.value : 'Global').replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Facture_Honoraires_KeurGui_${ownerClean}_Octobre_2026.pdf`;

  const opt = {
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  if (window.html2pdf) {
    html2pdf().set(opt).from(element).save().then(() => {
      btn.innerHTML = '<span>✅</span> Facture Téléchargée !';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('loading');
      }, 2500);
    }).catch(err => {
      console.error('Erreur PDF Facture:', err);
      window.print();
      btn.innerHTML = originalText;
      btn.classList.remove('loading');
    });
  } else {
    window.print();
    btn.innerHTML = originalText;
    btn.classList.remove('loading');
  }
}

function printAgencyInvoice() {
  window.print();
}

function sendWhatsAppAgencyInvoice() {
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  const selectedOwner = select ? select.value : 'all';

  const paidProps = properties.filter(p => p.status === 'paid' && (selectedOwner === 'all' || p.owner === selectedOwner));
  let totalCollected = 0;
  paidProps.forEach(p => { totalCollected += (p.rent + p.charges); });

  const commissionHt = Math.round(totalCollected * 0.10);
  const tva = Math.round(commissionHt * 0.18);
  const commissionTtc = commissionHt + tva;
  const netPayout = Math.max(0, totalCollected - commissionTtc);

  const ownerName = selectedOwner === 'all' ? 'Cher Bailleur' : selectedOwner;
  const message = `Bonjour ${ownerName},

Veuillez trouver ci-joint votre Décompte de Gestion et la Facture d'Honoraires officielle (au format PDF) pour le mois d'Octobre 2026 concernant vos biens sous mandat.

📊 RÉCAPITULATIF FINANCIER DU MOIS :
• Total des loyers encaissés : ${formatFCFA(totalCollected)}
• Honoraires de gestion (10% HT) : ${formatFCFA(commissionHt)}
• TVA sur honoraires (18% - CGI Sénégal) : ${formatFCFA(tva)}
• Total Honoraires TTC : ${formatFCFA(commissionTtc)}
━━━━━━━━━━━━━━━━━━━━
💰 NET REVERSÉ SUR VOTRE COMPTE : ${formatFCFA(netPayout)}
(Virement / Wave effectué avec succès)

• Réf Facture : FACT-AG-2026-10

Merci pour votre confiance continue.
Excellente journée à vous !

Bien cordialement,
Direction Financière — KeurGui Immobilier SARL
VDN Sacré-Cœur 3, Dakar • +221 78 818 21 04`;

  // Trouver un numéro WhatsApp si dispo ou Jean Philippe par défaut
  let targetPhone = '221788182104';
  const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

