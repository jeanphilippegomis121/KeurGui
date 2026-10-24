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
    deposit: 460000,
    depositMonths: 2,
    depositPaymentMethod: "Wave",
    depositPaidDate: "01/10/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0042",
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
    deposit: 400000,
    depositMonths: 2,
    depositPaymentMethod: "Wave",
    depositPaidDate: "15/09/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0043",
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
    deposit: 220000,
    depositMonths: 1,
    depositPaymentMethod: "Espèces",
    depositPaidDate: "01/08/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0044",
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
    deposit: 390000,
    depositMonths: 2,
    depositPaymentMethod: "Orange Money",
    depositPaidDate: "01/09/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0045",
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
    deposit: 110000,
    depositMonths: 2,
    depositPaymentMethod: "Wave",
    depositPaidDate: "01/06/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0046",
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
    deposit: 900000,
    depositMonths: 2,
    depositPaymentMethod: "Wave",
    depositPaidDate: "01/07/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0047",
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
    deposit: 360000,
    depositMonths: 2,
    depositPaymentMethod: "Orange Money",
    depositPaidDate: "15/05/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0048",
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
    deposit: 1800000,
    depositMonths: 3,
    depositPaymentMethod: "Virement Bancaire (CBAO)",
    depositPaidDate: "01/01/2026",
    depositStatus: "held",
    depositReceiptNo: "DEP-2026-0018",
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
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Migration automatique : S'assurer que le dépôt de garantie / caution existe pour chaque bien
        let hasMigration = false;
        parsed.forEach(p => {
          if (p.deposit === undefined || p.deposit === null) {
            p.depositMonths = p.isCommercial ? 3 : 2;
            p.deposit = p.rent * p.depositMonths;
            p.depositPaymentMethod = p.paymentMethod || 'Wave';
            p.depositPaidDate = p.paidDate || '01/10/2026';
            p.depositStatus = 'held';
            p.depositReceiptNo = `DEP-2026-${String(p.id).padStart(4, '0')}`;
            hasMigration = true;
          }
        });

        // S'assurer que l'exemple de bail commercial TVA 18% est présent
        if (!parsed.some(p => p.isCommercial)) {
          const comm = DEFAULT_PROPERTIES.find(p => p.isCommercial);
          if (comm) {
            parsed.push(comm);
            hasMigration = true;
          }
        }

        if (hasMigration) {
          localStorage.setItem('keurgui_properties_data', JSON.stringify(parsed));
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error('Erreur chargement LocalStorage', e);
  }
  // Si le stockage local est vide ou corrompu, recharger immédiatement les données de démonstration par défaut
  const fresh = JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
  try {
    localStorage.setItem('keurgui_properties_data', JSON.stringify(fresh));
  } catch (e) {}
  return fresh;
}

function saveProperties() {
  try {
    localStorage.setItem('keurgui_properties_data', JSON.stringify(properties));
  } catch (e) {
    console.error('Erreur sauvegarde LocalStorage', e);
  }
}

// ===================================================
// GESTION DU CALENDRIER PÉRIODIQUE MENSUEL (MULTI-ANNÉES)
// ===================================================
const MONTH_NAMES_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

let selectedPeriod = {
  year: 2026,
  month: 10 // Octobre par défaut
};

// Charge la période sauvegardée ou initialise
try {
  const savedPeriod = localStorage.getItem('keurgui_selected_period');
  if (savedPeriod) {
    selectedPeriod = JSON.parse(savedPeriod);
  }
} catch (e) {}

function getPeriodKey(year = selectedPeriod.year, month = selectedPeriod.month) {
  return `${year}-${String(month).padStart(2, '0')}`;
}

function getPeriodFrench(year = selectedPeriod.year, month = selectedPeriod.month) {
  return `${MONTH_NAMES_FR[month - 1]} ${year}`;
}

// Obtient ou initialise les données de paiement d'un bien pour la période sélectionnée
function getPropertyPeriodData(prop, pKey = getPeriodKey()) {
  if (!prop.periods) {
    prop.periods = {};
  }
  
  if (!prop.periods[pKey]) {
    // Si c'est la période initiale de base (Octobre 2026), on reprend le statut de base
    if (pKey === '2026-10') {
      prop.periods['2026-10'] = {
        status: prop.status || 'late',
        paymentMethod: prop.paymentMethod || null,
        paidDate: prop.paidDate || null,
        receiptNo: prop.receiptNo || `KG-2026-${String(prop.id).padStart(4, '0')}`
      };
    } else {
      // Pour tout autre mois (ex: Nov 2026, Jan 2027), le loyer commence en attente ("late")
      prop.periods[pKey] = {
        status: 'late',
        paymentMethod: null,
        paidDate: null,
        receiptNo: `KG-${pKey.split('-')[0]}-${String(prop.id).padStart(4, '0')}`
      };
    }
  }
  return prop.periods[pKey];
}

function updatePeriodDisplay() {
  const mSelect = document.getElementById('periodMonthSelect');
  const ySelect = document.getElementById('periodYearSelect');
  const label = document.getElementById('activePeriodLabel');

  if (mSelect) mSelect.value = selectedPeriod.month;
  if (ySelect) ySelect.value = selectedPeriod.year;
  if (label) label.textContent = getPeriodFrench();

  try {
    localStorage.setItem('keurgui_selected_period', JSON.stringify(selectedPeriod));
  } catch (e) {}

  renderProperties();
  updateStats();
}

function changePeriod(delta) {
  let newMonth = selectedPeriod.month + delta;
  let newYear = selectedPeriod.year;

  if (newMonth < 1) {
    newMonth = 12;
    newYear -= 1;
  } else if (newMonth > 12) {
    newMonth = 1;
    newYear += 1;
  }

  selectedPeriod.month = newMonth;
  selectedPeriod.year = newYear;
  updatePeriodDisplay();
  showToast(`Affichage basculé sur ${getPeriodFrench()} 📅`, "info");
}

function onPeriodPickerChange() {
  const mSelect = document.getElementById('periodMonthSelect');
  const ySelect = document.getElementById('periodYearSelect');
  if (mSelect && ySelect) {
    selectedPeriod.month = parseInt(mSelect.value, 10);
    selectedPeriod.year = parseInt(ySelect.value, 10);
    updatePeriodDisplay();
    showToast(`Période sélectionnée : ${getPeriodFrench()} 📅`, "info");
  }
}

function goToCurrentPeriod() {
  const now = new Date();
  selectedPeriod.year = now.getFullYear();
  selectedPeriod.month = now.getMonth() + 1;
  updatePeriodDisplay();
  showToast(`Retour au mois en cours (${getPeriodFrench()})`, "success");
}

// Réinitialisation démo directe SANS boîte de confirmation bloquante du navigateur
function resetDemoData() {
  localStorage.removeItem('keurgui_properties_data');
  localStorage.removeItem('keurgui_receipts_history');
  localStorage.removeItem('keurgui_cleaned');
  sessionStorage.removeItem('keurgui_home_demo_dismissed');
  properties = JSON.parse(JSON.stringify(DEFAULT_PROPERTIES));
  saveProperties();
  updatePeriodDisplay();
  initReceiptsHistory();
  renderProperties();
  updateStats();
  renderDashboardWidgets();
  renderTenantsList();
  renderInPageReceipts();
  updateDemoBannersVisibility(activeView);
  showToast("Données de démonstration rechargées avec succès !", "success");
}

// Nettoyage direct SANS boîte de confirmation bloquante du navigateur
function clearToMyProperties() {
  properties = [];
  saveProperties();
  saveReceiptsHistory([]);
  updatePeriodDisplay();

  // Masquer le bandeau démo car l'utilisateur passe en mode réel
  const demoBanner = document.querySelector('.demo-banner-highlight');
  if (demoBanner) demoBanner.classList.add('hidden');

  showToast("✨ Prêt pour vos vrais biens ! Les exemples ont été effacés.", "success");
}

// Système de Toast moderne (remplace les alertes brutes)
function showToast(message, type = "info") {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  const icon = type === 'success' ? '✅' : '🔔';
  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

// Fonction de sécurisation contre les failles XSS (Échappement HTML strict)
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===================================================
// LOGOS OFFICIELS (WAVE & ORANGE MONEY - IMAGES RÉELLES)
// ===================================================
const WAVE_SVG_ICON = `<img src="logo-wave.png" alt="Wave" class="brand-logo-img wave-logo-img" width="18" height="18" style="width:18px; height:18px; object-fit:contain; border-radius:3px; vertical-align:middle; display:inline-block; margin-right:4px;">`;

const OM_SVG_ICON = `<img src="logo-om.png" alt="Orange Money" class="brand-logo-img om-logo-img" width="18" height="18" style="width:18px; height:18px; object-fit:contain; border-radius:3px; vertical-align:middle; display:inline-block; margin-right:4px;">`;

let isAgencyMode = false;
let activeFilter = 'all';
let currentActiveProperty = null;
let propertyToPay = null;
let activeView = 'dashboard';

const VIEW_TITLES = {
  'dashboard': 'Tableau de bord',
  'properties': 'Mes Biens & Immeubles',
  'tenants': 'Locataires',
  'receipts': 'Quittances & Reçus'
};

// ===================================================
// GESTION DU SYSTÈME MULTI-VUES (SAAS)
// ===================================================
function switchView(viewName) {
  if (!VIEW_TITLES[viewName]) viewName = 'dashboard';
  activeView = viewName;

  // 1. Masquer toutes les vues, activer la cible
  document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  // 2. Mettre à jour la navigation Desktop (Sidebar)
  document.querySelectorAll('.app-sidebar .nav-item').forEach(btn => btn.classList.remove('active'));
  const sideNavBtn = document.getElementById(`sideNav-${viewName}`);
  if (sideNavBtn) sideNavBtn.classList.add('active');

  // 3. Mettre à jour la Bottom Nav Mobile
  document.querySelectorAll('.mobile-bottom-nav .bottom-nav-item').forEach(btn => btn.classList.remove('active'));
  const bottomNavBtn = document.getElementById(`bottomNav-${viewName}`);
  if (bottomNavBtn) bottomNavBtn.classList.add('active');

  // 4. Mettre à jour le titre sur la barre mobile
  const mobileTitle = document.getElementById('mobileActiveViewTitle');
  if (mobileTitle) mobileTitle.textContent = VIEW_TITLES[viewName];

  // 5. Initialiser les données de la vue choisie
  try {
    if (viewName === 'tenants') {
      renderTenantsList();
    } else if (viewName === 'receipts') {
      renderInPageReceipts();
    } else if (viewName === 'dashboard') {
      renderDashboardWidgets();
      updateStats();
    } else if (viewName === 'properties') {
      renderProperties();
      updateStats();
    }
  } catch (err) {
    console.error(`Erreur rendu vue ${viewName}:`, err);
  }

  // 6. Gestion des bannières démo (Accueil : carte compacte ; Autres vues : fine bande 1-ligne)
  try {
    updateDemoBannersVisibility(viewName);
  } catch (err) {}

  // Scroll doux vers le haut
  try {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {}
}

function updateDemoBannersVisibility(viewName = activeView) {
  const homeDemo = document.getElementById('homeMergedDemoCard');
  const otherDemo = document.getElementById('otherViewsDemoStrip');
  const isDemoCleaned = localStorage.getItem('keurgui_cleaned') === 'true';
  const isHomeDismissed = sessionStorage.getItem('keurgui_home_demo_dismissed') === 'true';

  if (!isDemoCleaned) {
    if (viewName === 'dashboard') {
      if (homeDemo) homeDemo.style.display = isHomeDismissed ? 'none' : 'block';
      if (otherDemo) otherDemo.style.display = 'none';
    } else {
      if (homeDemo) homeDemo.style.display = 'none';
      if (otherDemo) otherDemo.style.display = 'block';
    }
  } else {
    if (homeDemo) homeDemo.style.display = 'none';
    if (otherDemo) otherDemo.style.display = 'none';
  }
}

function dismissHomeDemoCard() {
  const card = document.getElementById('homeMergedDemoCard');
  if (card) card.style.display = 'none';
  try {
    sessionStorage.setItem('keurgui_home_demo_dismissed', 'true');
  } catch (e) {}
}

// Initialisation
function initApp() {
  updatePeriodDisplay();
  renderProperties();
  updateStats();
  renderBuildingUnitsSetup();
  checkWelcomeGreeting();
  initReceiptsHistory();
  renderDashboardWidgets();
  renderTenantsList();
  renderInPageReceipts();
  updateDemoBannersVisibility('dashboard');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Support touche Échap pour fermer les fenêtres
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeReceiptModal();
    closeDepositReceiptModal();
    closePayModal();
    closeAddPropertyModal();
    closeFeedbackModal();
    closeReceiptsHistoryModal();
    closeFabActionMenu();
  }
});

// Normalisation du texte pour recherche insensible aux accents
function normalizeStr(str) {
  return (str || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Formatage FCFA
function formatFCFA(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
}

// Formatage élégant du quartier/ville pour quittances et reçus de caution
function formatPropertyLocation(neighborhood) {
  if (!neighborhood) return "Dakar, Sénégal";
  const trimmed = neighborhood.trim();
  const lower = trimmed.toLowerCase();
  if (lower.includes("dakar") || lower.includes("thiès") || lower.includes("thies") || lower.includes("mbour") || lower.includes("saly") || lower.includes("saint-louis") || lower.includes("ziguinchor") || lower.includes("rufisque") || lower.includes("touba")) {
    return trimmed;
  }
  return `${trimmed}, Dakar`;
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
function toggleAgencyMode(fromCheckbox = false) {
  const toggle = document.getElementById('agencyModeToggle');
  if (fromCheckbox && toggle) {
    isAgencyMode = toggle.checked;
  } else {
    isAgencyMode = !isAgencyMode;
    if (toggle) toggle.checked = isAgencyMode;
  }

  const labelBailleur = document.getElementById('label-bailleur');
  const labelAgence = document.getElementById('label-agence');
  const userBadge = document.getElementById('userRoleBadge');
  const commissionCard = document.getElementById('agencyCommissionCard');
  const agencyOwnerField = document.getElementById('agencyOwnerField');
  const bldAgencyOwnerField = document.getElementById('bldAgencyOwnerField');
  const mobileBtn = document.getElementById('btnMobileAgencyToggle');
  const mobileText = document.getElementById('mobileAgencyText');
  const mobileIcon = document.getElementById('mobileAgencyIcon');
  const mobileRoleBadge = document.getElementById('mobileRoleBadge');

  if (isAgencyMode) {
    if (labelBailleur) labelBailleur.classList.remove('active-role');
    if (labelAgence) labelAgence.classList.add('active-role');
    if (userBadge) userBadge.textContent = 'Agence Immobilière';
    if (mobileRoleBadge) {
      mobileRoleBadge.textContent = 'Agence';
      mobileRoleBadge.style.background = '#dcfce7';
      mobileRoleBadge.style.color = '#15803d';
    }
    if (commissionCard) commissionCard.style.display = 'flex';
    if (agencyOwnerField) agencyOwnerField.style.display = 'block';
    if (bldAgencyOwnerField) bldAgencyOwnerField.style.display = 'block';
    if (mobileBtn) {
      mobileBtn.classList.add('agency-active');
      if (mobileText) mobileText.textContent = 'Agence';
      if (mobileIcon) mobileIcon.textContent = '🏢';
    }
  } else {
    if (labelBailleur) labelBailleur.classList.add('active-role');
    if (labelAgence) labelAgence.classList.remove('active-role');
    if (userBadge) userBadge.textContent = 'Propriétaire';
    if (mobileRoleBadge) {
      mobileRoleBadge.textContent = 'Propriétaire';
      mobileRoleBadge.style.background = '';
      mobileRoleBadge.style.color = '';
    }
    if (commissionCard) commissionCard.style.display = 'none';
    if (agencyOwnerField) agencyOwnerField.style.display = 'none';
    if (bldAgencyOwnerField) bldAgencyOwnerField.style.display = 'none';
    if (mobileBtn) {
      mobileBtn.classList.remove('agency-active');
      if (mobileText) mobileText.textContent = 'Bailleur';
      if (mobileIcon) mobileIcon.textContent = '🏠';
    }
  }

  renderProperties();
  updateStats();
}

// Variables pour le compteur chiffré fluide (Motion Design)
let prevStats = { collected: 0, pending: 0, rate: 0, deposits: 0 };

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
  let totalDepositsHeld = 0;
  let depositsHeldCount = 0;
  const pKey = getPeriodKey();
  const currentPeriodName = getPeriodFrench();

  properties.forEach(p => {
    const pData = getPropertyPeriodData(p, pKey);
    const totalAmount = p.rent + p.charges;
    if (pData.status === 'paid') {
      totalCollected += totalAmount;
      paidCount++;
    } else {
      totalPending += totalAmount;
      lateCount++;
    }

    if (p.deposit && (p.depositStatus === 'held' || !p.depositStatus)) {
      totalDepositsHeld += p.deposit;
      depositsHeldCount++;
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
  animateNumber('totalDeposits', prevStats.deposits || 0, totalDepositsHeld, 750, true);

  const depositsTag = document.getElementById('depositsCountTag');
  if (depositsTag) {
    depositsTag.textContent = `🛡️ ${depositsHeldCount} caution${depositsHeldCount > 1 ? 's' : ''}`;
  }

  const collectedTag = document.getElementById('collectedLoyerCountTag');
  if (collectedTag) {
    collectedTag.textContent = `↑ ${paidCount} payé${paidCount > 1 ? 's' : ''}`;
  }

  const pendingTag = document.getElementById('pendingLoyerCountTag');
  if (pendingTag) {
    pendingTag.textContent = lateCount > 0 ? `⚠️ ${lateCount} en attente` : `✓ Tous réglés`;
  }

  document.getElementById('collectionFill').style.width = rate + '%';
  document.getElementById('agencyCommission').textContent = formatFCFA(agencyCommissionHt);
  
  const payoutTag = document.getElementById('agencyPayoutTag');
  if (payoutTag) {
    payoutTag.textContent = `Reversé aux bailleurs : ${formatFCFA(agencyNet)}`;
  }

  prevStats = { collected: totalCollected, pending: totalPending, rate: rate, deposits: totalDepositsHeld };

  // Gestion dynamique de l'alerte pulsation danger pour les retards
  const pendingCard = document.querySelector('.stat-card.stat-warning');
  if (pendingCard) {
    if (lateCount > 0) {
      pendingCard.classList.add('has-late');
    } else {
      pendingCard.classList.remove('has-late');
    }
  }

  // Tags dynamiques épurés et percutants (format First-Mobile compact)
  const collectedCardTag = document.querySelector('.stat-card.stat-success .stat-tag');
  if (collectedCardTag) {
    collectedCardTag.textContent = paidCount > 0 
      ? `↑ ${paidCount} loyer${paidCount > 1 ? 's' : ''} encaissé${paidCount > 1 ? 's' : ''}` 
      : `0 encaissement`;
  }

  const pendingCardTag = document.querySelector('.stat-card.stat-warning .stat-tag');
  if (pendingCardTag) {
    pendingCardTag.textContent = lateCount > 0 
      ? `⚠️ ${lateCount} en attente` 
      : `✓ Tous réglés`;
  }

  // Compteurs d'onglets (Vert, Jaune, Rouge 🇸🇳)
  const elCountAll = document.getElementById('countAll');
  const elCountPaid = document.getElementById('countPaid');
  const elCountPending = document.getElementById('countPending');
  const elCountLate = document.getElementById('countLate');

  if (elCountAll) elCountAll.textContent = properties.length;
  if (elCountPaid) elCountPaid.textContent = paidCount;
  if (elCountPending) elCountPending.textContent = lateCount; // En attente / Vacants (Jaune)
  if (elCountLate) elCountLate.textContent = lateCount > 0 ? lateCount : 0; // En retard (Rouge)

  // Badges Sidebar
  const sideProps = document.getElementById('sideBadgeProps');
  const sideTenants = document.getElementById('sideBadgeTenants');
  const sideReceipts = document.getElementById('sideBadgeReceipts');
  if (sideProps) sideProps.textContent = properties.length;
  if (sideTenants) sideTenants.textContent = properties.filter(p => p.tenant).length;
  if (sideReceipts) sideReceipts.textContent = getReceiptsHistory().length;

  // Rafraîchir les widgets du tableau de bord
  renderDashboardWidgets();
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
  const pKey = getPeriodKey();

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

  // 1. Filtrer les lots avec recherche insensible aux accents et statut de la période active
  let filtered = properties.filter(p => {
    const pData = getPropertyPeriodData(p, pKey);
    if (activeFilter === 'paid' && pData.status !== 'paid') return false;
    if (activeFilter === 'pending' && pData.status === 'paid') return false;
    if (activeFilter === 'late' && pData.status !== 'late') return false;

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
        <p style="color: #64748b; font-size: 13px;">Vérifiez l'orthographe ou effacez la recherche pour ce mois.</p>
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

  // 3. Générer les cartes d'immeubles propres et aérées pour la période affichée
  container.innerHTML = Object.keys(groups).map((bldName, bldIdx) => {
    const units = groups[bldName];
    const firstUnit = units[0];
    const neighborhood = firstUnit.neighborhood;
    
    // Calculs de l'immeuble pour la période active
    let bldTotal = 0;
    let bldPaidCount = 0;
    units.forEach(u => {
      const uData = getPropertyPeriodData(u, pKey);
      bldTotal += (u.rent + u.charges);
      if (uData.status === 'paid') bldPaidCount++;
    });

    const isFullPaid = bldPaidCount === units.length;
    const chipClass = isFullPaid ? 'bld-chip status-flag-green' : 'bld-chip status-flag-yellow';
    const chipText = isFullPaid ? '✓ Tous payés' : `⏳ ${units.length - bldPaidCount} en attente`;

    const icon = bldName.includes('Villa') ? '🏡' : '🏢';

    return `
      <div class="building-card">
        <!-- En-tête épuré de l'immeuble avec Accordéon Réduire / Déplier -->
        <div class="building-header" style="cursor: pointer;" onclick="toggleBuildingAccordion('bld-${bldIdx}')">
          <div class="building-title-area">
            <div class="building-icon">${icon}</div>
            <div>
              <h3 class="building-name">${escapeHtml(bldName)}</h3>
              <div class="building-meta">📍 ${escapeHtml(neighborhood)} • ${units.length} logement${units.length > 1 ? 's' : ''}</div>
            </div>
          </div>
          <div class="building-summary-chips" style="display: flex; align-items: center; gap: 8px;">
            <span class="bld-chip">${formatFCFA(bldTotal)}</span>
            <span class="${chipClass}">${chipText}</span>
            <button class="btn-accordion-toggle" id="btn-toggle-bld-${bldIdx}" onclick="event.stopPropagation(); toggleBuildingAccordion('bld-${bldIdx}')" style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; padding:3px 8px; font-size:11px; font-weight:700; color:#334155; cursor:pointer;">
              <span>▾</span> Réduire
            </button>
          </div>
        </div>

        <!-- Liste des appartements de l'immeuble (dépliable/repliable) -->
        <div class="building-units-list" id="bld-${bldIdx}-units">
          ${units.map(u => {
            const total = u.rent + u.charges;
            const uData = getPropertyPeriodData(u, pKey);

            // Statut de paiement dynamique par période (Vert, Jaune, Rouge 🇸🇳)
            let statusBadge = '';
            if (uData.status === 'paid') {
              const paidDateText = uData.paidDate || 'Payé';
              if (uData.paymentMethod === 'Wave') {
                statusBadge = `<span class="unit-badge-status status-paid-wave status-flag-green">${WAVE_SVG_ICON} Wave • ${escapeHtml(paidDateText)}</span>`;
              } else if (uData.paymentMethod === 'Orange Money') {
                statusBadge = `<span class="unit-badge-status status-paid-om status-flag-green">${OM_SVG_ICON} OM • ${escapeHtml(paidDateText)}</span>`;
              } else {
                statusBadge = `<span class="unit-badge-status status-paid-cash status-flag-green">💵 Espèces • ${escapeHtml(paidDateText)}</span>`;
              }
            } else if (!u.tenant || u.tenant.trim() === '') {
              statusBadge = `<span class="unit-badge-status status-flag-yellow">🟡 Vacant</span>`;
            } else {
              statusBadge = `<span class="unit-badge-status status-flag-yellow">🟡 En attente de loyer</span>`;
            }

            const ownerBadge = isAgencyMode ? `<span class="agency-tag-owner">Bailleur : ${escapeHtml(u.owner)}</span>` : '';
            const commercialBadge = u.isCommercial ? `<span class="badge-commercial">Bail Pro (TVA 18%)</span>` : '';

            // Boutons d'action adaptés au statut de ce mois
            let actionButtons = '';
            if (uData.status === 'paid') {
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

            let depositBadge = '';
            if (u.deposit && u.deposit > 0) {
              const monthsText = u.depositMonths ? ` (${u.depositMonths} mois)` : '';
              const isHeld = (u.depositStatus === 'held' || !u.depositStatus);
              const statusPillClass = isHeld ? 'deposit-held' : 'deposit-refunded';
              const statusPillText = isHeld ? 'En réserve' : 'Restituée';
              depositBadge = `
                <div class="unit-deposit-tag">
                  <span>🛡️</span> Caution : <strong>${formatFCFA(u.deposit)}</strong>${monthsText}
                  <span class="deposit-pill ${statusPillClass}">${statusPillText}</span>
                  <button class="btn-deposit-link" onclick="openDepositModal(${u.id})" title="Voir le reçu officiel de caution">
                    📄 Reçu
                  </button>
                </div>
              `;
            }

            return `
              <div class="unit-row">
                <div class="unit-info-col">
                  <div class="unit-name">${escapeHtml(u.unitName)} ${commercialBadge} ${ownerBadge}</div>
                  <div class="unit-tenant">
                    Locataire : <strong>${escapeHtml(u.tenant)}</strong>
                    <span class="unit-phone">(${escapeHtml(u.phone)})</span>
                  </div>
                  ${depositBadge}
                </div>

                <!-- Encadré financier sur 2 lignes (Ligne 1: Montant + Badge, Ligne 2: Détail loyer/charges) -->
                <div class="unit-financial-col">
                  <div class="unit-financial-row1" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                    <span class="unit-amount" style="white-space: nowrap; font-weight: 800; font-size: 15px; color: #0f172a;">${formatFCFA(total)}</span>
                    <span class="unit-status-wrap" style="white-space: nowrap; font-size: 11px;">${statusBadge}</span>
                  </div>
                  <div class="unit-financial-row2" style="font-size: 11px; color: #64748b; margin-top: 2px;">
                    Loyer : ${formatFCFA(u.rent)} • Charges : ${formatFCFA(u.charges)}
                  </div>
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

function toggleBuildingAccordion(bldId) {
  const list = document.getElementById(`${bldId}-units`);
  const btn = document.getElementById(`btn-toggle-${bldId}`);
  if (!list) return;
  const isHidden = list.style.display === 'none';
  if (isHidden) {
    list.style.display = 'block';
    if (btn) btn.innerHTML = '<span>▾</span> Réduire';
  } else {
    list.style.display = 'none';
    if (btn) btn.innerHTML = '<span>▸</span> Déplier';
  }
}

// ===================================================
// VUE 1 : WIDGETS DÉCISIONNELS DU TABLEAU DE BORD
// ===================================================
function renderDashboardWidgets() {
  const alertsContainer = document.getElementById('dashAlertsSection');
  const recentContainer = document.getElementById('dashRecentReceiptsContainer');
  const pKey = getPeriodKey();
  const periodText = getPeriodFrench();

  // 1. Alertes du mois (Retards vs 100% Réglé)
  if (alertsContainer) {
    const lateProps = properties.filter(p => {
      const pData = getPropertyPeriodData(p, pKey);
      return pData.status === 'late' && p.tenant && p.tenant.trim() !== '';
    });

    if (lateProps.length > 0) {
      const firstLate = lateProps[0];
      const lateTotal = firstLate.rent + firstLate.charges;
      const buttonLabel = `💬 Relancer ${escapeHtml(firstLate.tenant)} (${formatFCFA(lateTotal)}) →`;

      alertsContainer.innerHTML = `
        <div class="dash-alert-card alert-danger">
          <div class="dash-alert-left">
            <span class="dash-alert-icon">⚠️</span>
            <div>
              <div class="dash-alert-title">${lateProps.length} loyer${lateProps.length > 1 ? 's' : ''} en attente ou retard en ${periodText}</div>
              <div class="dash-alert-desc">Locataire en attente de paiement : <strong>${lateProps.map(p => escapeHtml(p.tenant)).join(', ')}</strong>.</div>
            </div>
          </div>
          <button class="btn btn-secondary-sm" style="background:#fee2e2; color:#991b1b; border-color:#fca5a5; font-weight:700;" onclick="sendWhatsAppReminder(${firstLate.id})">
            ${buttonLabel}
          </button>
        </div>
      `;
    } else {
      alertsContainer.innerHTML = `
        <div class="dash-alert-card alert-success">
          <div class="dash-alert-left">
            <span class="dash-alert-icon">🎉</span>
            <div>
              <div class="dash-alert-title">Excellente nouvelle ! Tous les loyers sont réglés pour ${periodText} 🇸🇳</div>
              <div class="dash-alert-desc">Votre taux de recouvrement est optimal. Toutes les quittances ont été délivrées.</div>
            </div>
          </div>
          <button class="btn btn-secondary-sm" style="background:#ecfdf5; color:#059669; border-color:#a7f3d0;" onclick="switchView('receipts');">
            <span>📑</span> Voir le registre →
          </button>
        </div>
      `;
    }
  }

  // 2. Dernières quittances émises
  if (recentContainer) {
    const history = getReceiptsHistory().slice(0, 3);
    if (history.length === 0) {
      recentContainer.innerHTML = `
        <p style="font-size:12px; color:#64748b; padding:12px 0;">Aucune quittance émise pour l'instant.</p>
      `;
    } else {
      recentContainer.innerHTML = history.map(r => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:12px;">
          <div>
            <strong style="color:#0f172a; display:block;">${escapeHtml(r.tenant)}</strong>
            <span style="color:#64748b;">${escapeHtml(r.receiptNo)} • ${escapeHtml(r.periodFrench)}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="color:#059669;">${formatFCFA(r.total)}</strong>
            <button class="btn-icon-subtle" onclick="downloadPdfFromHistory('${escapeHtml(r.receiptNo)}')" title="Télécharger PDF">📥</button>
          </div>
        </div>
      `).join('');
    }
  }
}

// ===================================================
// VUE 3 : ANNUAIRE DES LOCATAIRES
// ===================================================
function renderTenantsList() {
  const container = document.getElementById('tenantsContainer');
  if (!container) return;
  const searchInput = document.getElementById('tenantSearchInput');
  const query = searchInput ? normalizeStr(searchInput.value.trim()) : '';
  const pKey = getPeriodKey();

  let tenantProps = properties.filter(p => p.tenant && p.tenant.trim() !== '');

  if (query) {
    tenantProps = tenantProps.filter(p => 
      normalizeStr(p.tenant).includes(query) ||
      normalizeStr(p.phone).includes(query) ||
      normalizeStr(p.building).includes(query) ||
      normalizeStr(p.unitName).includes(query) ||
      normalizeStr(p.neighborhood).includes(query)
    );
  }

  if (tenantProps.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; background: white; padding: 48px 20px; text-align: center; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <span style="font-size: 36px;">👥</span>
        <h3 style="margin-top: 12px; color: #1e293b; font-weight: 800;">Aucun locataire trouvé</h3>
        <p style="color: #64748b; font-size: 13px;">Ajoutez des biens avec locataires ou modifiez votre recherche.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = tenantProps.map(p => {
    const pData = getPropertyPeriodData(p, pKey);
    const initials = p.tenant.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const cleanPhone = sanitizeWhatsAppPhone(p.phone);
    const hasPhone = p.phone && p.phone !== 'Non renseigné';
    
    // Statut Vert, Jaune, Rouge 🇸🇳
    let statusClass = 'status-flag-green';
    let statusLabel = '🟢 Loyer Payé';
    if (pData.status !== 'paid') {
      statusClass = 'status-flag-yellow';
      statusLabel = '🟡 En attente';
    }

    const depositAmount = p.deposit || (p.rent * 2);

    return `
      <div class="tenant-card-pro">
        <div class="tenant-top-row">
          <div class="tenant-pro-avatar">${escapeHtml(initials)}</div>
          <div class="tenant-pro-info">
            <h3 class="tenant-pro-name">${escapeHtml(p.tenant)}</h3>
            <p class="tenant-pro-unit">🚪 ${escapeHtml(p.unitName)} • ${escapeHtml(p.building)} (${escapeHtml(p.neighborhood)})</p>
          </div>
          <span class="unit-badge-status ${statusClass}" style="font-size: 11px; padding: 4px 8px;">${statusLabel}</span>
        </div>

        <div class="tenant-details-grid">
          <div>
            <span style="color: #64748b; display: block; font-size: 11px;">Loyer mensuel</span>
            <strong style="color: #0f172a; font-size: 13px;">${formatFCFA(p.rent)}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 11px;">Caution en réserve</span>
            <strong style="color: #059669; font-size: 13px;">${formatFCFA(depositAmount)}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 11px;">Bail</span>
            <span style="color: #0f172a; font-weight:700;">${p.isCommercial ? 'Commercial' : 'Habitation'}</span>
          </div>
        </div>

        <div class="tenant-action-buttons">
          ${hasPhone ? `
            <a href="https://wa.me/${cleanPhone}" target="_blank" rel="noopener" class="btn-tenant-wa">
              <span>💬</span> WhatsApp
            </a>
            <a href="tel:${cleanPhone}" class="btn-icon-subtle" title="Appeler le locataire" style="border: 1px solid #cbd5e1; border-radius: 10px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; text-decoration: none;">
              📞
            </a>
          ` : `
            <span style="font-size: 12px; color: #94a3b8; font-style: italic; align-self: center;">Aucun numéro enregistré</span>
          `}
          <button class="btn-tenant-caution" onclick="openDepositModal(${p.id})" title="Voir le reçu de caution certifié A4">
            <span>🛡️</span> Reçu Caution
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ===================================================
// VUE 4 : QUITTANCES & REÇUS DANS LA PAGE (ARCHIVES)
// ===================================================
function renderInPageReceipts() {
  const container = document.getElementById('inPageReceiptsContainer');
  const summary = document.getElementById('inPageReceiptSummaryText');
  const searchInput = document.getElementById('inPageReceiptSearchInput');
  const yearFilter = document.getElementById('inPageReceiptYearFilter');
  const bldFilter = document.getElementById('inPageReceiptBuildingFilter');
  if (!container) return;

  const query = searchInput ? normalizeStr(searchInput.value.trim()) : '';
  const year = yearFilter ? yearFilter.value : 'all';
  const building = bldFilter ? bldFilter.value : 'all';

  // Remplir le filtre d'immeubles s'il est vide
  if (bldFilter && bldFilter.options.length <= 1) {
    const buildings = [...new Set(properties.map(p => p.building).filter(Boolean))];
    buildings.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b;
      opt.textContent = b;
      bldFilter.appendChild(opt);
    });
  }

  let history = getReceiptsHistory();

  if (query) {
    history = history.filter(r => 
      (r.tenant && normalizeStr(r.tenant).includes(query)) ||
      (r.receiptNo && normalizeStr(r.receiptNo).includes(query)) ||
      (r.building && normalizeStr(r.building).includes(query)) ||
      (r.unitName && normalizeStr(r.unitName).includes(query)) ||
      (r.neighborhood && normalizeStr(r.neighborhood).includes(query)) ||
      (r.periodFrench && normalizeStr(r.periodFrench).includes(query))
    );
  }

  if (year !== 'all') {
    history = history.filter(r => r.periodKey && r.periodKey.startsWith(year));
  }

  if (building !== 'all') {
    history = history.filter(r => r.building === building);
  }

  if (summary) {
    summary.innerHTML = `Affichage de <strong>${history.length}</strong> document(s) certifié(s)`;
  }

  if (history.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="empty-icon">🔍</div>
        <h4 style="font-weight:700; color:var(--dark);">Aucun document trouvé</h4>
        <p style="font-size:12px; margin-top:4px;">Essayez d'ajuster vos filtres ou effectuez un encaissement pour générer une nouvelle quittance.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = history.map(r => {
    let methodBadge = `💵 Espèces • le ${escapeHtml(r.paidDate || '05')}`;
    if (r.paymentMethod === 'Wave') {
      methodBadge = `${WAVE_SVG_ICON} Wave • le ${escapeHtml(r.paidDate || '05')}`;
    } else if (r.paymentMethod === 'Orange Money') {
      methodBadge = `${OM_SVG_ICON} OM • le ${escapeHtml(r.paidDate || '05')}`;
    }

    return `
      <div class="history-item-row">
        <div class="history-item-main">
          <div class="history-item-header">
            <span class="history-badge-ref">${escapeHtml(r.receiptNo)}</span>
            <span class="history-badge-period">📅 ${escapeHtml(r.periodFrench)}</span>
            <span class="history-badge-method">${methodBadge}</span>
          </div>
          <div class="history-item-tenant">
            <strong>${escapeHtml(r.tenant)}</strong>
            <span class="history-tenant-phone">${escapeHtml(r.tenantPhone || '')}</span>
          </div>
          <div class="history-item-property">
            📍 ${escapeHtml(r.unitName)} — ${escapeHtml(r.building)} (${escapeHtml(r.neighborhood)})
          </div>
        </div>

        <div class="history-item-amount-side">
          <div class="history-item-price">${formatFCFA(r.total)}</div>
          <div class="history-item-type">${r.isCommercial ? 'Facture Commerciale' : 'Quittance Particulier'}</div>
        </div>

        <div class="history-item-actions">
          <button class="btn-history-view" onclick="openReceiptFromHistory('${escapeHtml(r.receiptNo)}')" title="Visualiser la quittance certifiée">
            <span>👁️</span> Voir
          </button>
          <button class="btn-history-pdf" onclick="downloadPdfFromHistory('${escapeHtml(r.receiptNo)}')" title="Télécharger le PDF 1 page">
            <span>📥</span> PDF
          </button>
          <button class="btn-history-wa" onclick="sendWhatsAppFromHistory('${escapeHtml(r.receiptNo)}')" title="Envoyer au locataire par WhatsApp">
            <span>💬</span> WhatsApp
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ===================================================
// MODAL QUITTANCE DE LOYER
// ===================================================
let currentActiveReceiptPeriodKey = null;

function openReceiptModal(id, targetPeriodKey = null) {
  const p = properties.find(item => item.id === id);
  if (!p) return;
  currentActiveProperty = p;

  const pKey = targetPeriodKey || getPeriodKey();
  currentActiveReceiptPeriodKey = pKey;

  const pData = getPropertyPeriodData(p, pKey);
  const parts = pKey.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const monthsFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const periodText = `${monthsFr[m - 1]} ${y}`;
  const isComm = !!p.isCommercial;

  const docTitle = document.getElementById('mDocumentMainTitle');
  const rentLabel = document.getElementById('mTableRentLabel');
  const rowSubtotal = document.getElementById('mTableRowSubtotalHt');
  const rowTva = document.getElementById('mTableRowTva');
  const totalLabel = document.getElementById('mTableTotalLabel');
  const legalNote = document.getElementById('mDocumentLegalNote');

  const receiptNo = pData.receiptNo || p.receiptNo || `KG-${y}-${String(p.id).padStart(4, '0')}`;
  document.getElementById('mReceiptNumber').textContent = receiptNo;
  document.getElementById('mReceiptRef').textContent = receiptNo;
  document.getElementById('mPaymentMethodBadge').textContent = 'Par ' + (pData.paymentMethod || p.paymentMethod || 'Wave');
  document.getElementById('mTenantName').textContent = p.tenant;
  document.getElementById('mTenantPhone').textContent = p.phone;
  document.getElementById('mPropertyAddress').textContent = `${p.unitName}, ${p.building} — ${formatPropertyLocation(p.neighborhood)}`;
  document.getElementById('mTablePropertyDetails').textContent = p.type;
  document.getElementById('mTableBaseRent').textContent = formatFCFA(p.rent);
  document.getElementById('mTableCharges').textContent = formatFCFA(p.charges);

  const rowCharges = document.getElementById('mTableRowCharges');
  if (rowCharges) {
    rowCharges.style.display = (p.charges > 0) ? 'table-row' : 'none';
  }

  // Période sobre (ex: "Octobre 2026")
  const mPeriod = document.getElementById('mPeriod');
  if (mPeriod) mPeriod.textContent = periodText;

  // Ligne de confirmation de règlement sous le tableau
  const payMethod = pData.paymentMethod || p.paymentMethod || 'Wave';
  const payDate = pData.paidDate ? pData.paidDate : `05/${String(m).padStart(2, '0')}/${y}`;
  const confTextEl = document.getElementById('mPaymentConfirmationText');
  if (confTextEl) {
    confTextEl.textContent = `Règlement reçu le ${payDate} via ${payMethod}.`;
  }

  const mTablePeriod = document.getElementById('mTablePeriod');
  if (mTablePeriod) {
    const lastDay = new Date(y, m, 0).getDate();
    const mStr = String(m).padStart(2, '0');
    mTablePeriod.textContent = `01/${mStr}/${y} au ${lastDay}/${mStr}/${y}`;
  }

  const mTableChargesPeriod = document.getElementById('mTableChargesPeriod');
  if (mTableChargesPeriod) {
    mTableChargesPeriod.textContent = periodText;
  }

  const mIssueDate = document.getElementById('mIssueDate');
  if (mIssueDate) {
    mIssueDate.textContent = pData.paidDate ? pData.paidDate : `05 ${periodText}`;
  }

  if (isComm) {
    if (docTitle) docTitle.textContent = "FACTURE";
    if (rentLabel) rentLabel.textContent = "Loyer commercial (HT)";
    
    const ht = p.rent + p.charges;
    const tva = Math.round(ht * 0.18);
    const ttc = ht + tva;

    if (rowSubtotal) {
      rowSubtotal.style.display = 'table-row';
      const subtotalEl = document.getElementById('mTableSubtotalHt');
      if (subtotalEl) subtotalEl.textContent = formatFCFA(ht);
    }
    if (rowTva) {
      rowTva.style.display = 'table-row';
      const tvaEl = document.getElementById('mTableTva');
      if (tvaEl) tvaEl.textContent = formatFCFA(tva);
    }
    if (totalLabel) totalLabel.textContent = "TOTAL PAYÉ";
    document.getElementById('mTableTotal').textContent = formatFCFA(ttc);
    const wordsEl = document.getElementById('mAmountWords');
    if (wordsEl) wordsEl.textContent = numberToWordsFR(ttc);
    
    if (legalNote) {
      legalNote.innerHTML = "<p>Facture de loyer commercial assujettie à la TVA au taux légal de 18% conformément à l'article 355 et suivants du Code Général des Impôts (CGI) de la République du Sénégal. TVA déductible. Le présent document certifié vaut quittance libératoire de loyer pour la période susmentionnée.</p>";
    }
  } else {
    if (docTitle) docTitle.textContent = "QUITTANCE DE LOYER";
    if (rentLabel) rentLabel.textContent = "Loyer mensuel";
    if (rowSubtotal) rowSubtotal.style.display = 'none';
    if (rowTva) rowTva.style.display = 'none';
    if (totalLabel) totalLabel.textContent = "TOTAL PAYÉ";
    
    const total = p.rent + p.charges;
    document.getElementById('mTableTotal').textContent = formatFCFA(total);
    const wordsEl = document.getElementById('mAmountWords');
    if (wordsEl) wordsEl.textContent = numberToWordsFR(total);

    if (legalNote) {
      legalNote.innerHTML = "<p>La présente quittance annule tout reçu antérieur pour la période susvisée. Elle ne préjuge pas des loyers postérieurs. Exonéré de TVA en vertu de l'article 361 du Code Général des Impôts (CGI) du Sénégal. Document généré avec certification numérique KeurGui conforme aux normes OHADA.</p>";
    }
  }

  if (isAgencyMode && p.owner) {
    document.getElementById('mOwnerName').textContent = p.owner;
  } else {
    document.getElementById('mOwnerName').textContent = 'KEURGUI';
  }

  const modal = document.getElementById('receiptModalOverlay');
  modal.classList.add('active');
}

function closeReceiptModal() {
  document.getElementById('receiptModalOverlay').classList.remove('active');
}

// ===================================================
// MOTEUR D'EXPORTATION PDF A4 UNIFIÉ, ISOLÉ & SANS COUPURE
// Compatible Desktop (1080p/4K), Tablettes et Mobiles (Garantie Stricte 1 Seule Page A4)
// ===================================================
function exportElementToA4Pdf(sourceElement, filename, btn, originalText, callback, autoSave = true) {
  if (btn) {
    btn.innerHTML = '<span>⏳</span> Création du PDF...';
    btn.classList.add('loading');
  }

  // 1. Créer une iframe isolée indépendante de la taille d'écran physique de l'appareil (Desktop, Tablette, Mobile)
  // L'iframe force un viewport dédié de 794px (largeur standard A4) sans être rognée par window.innerWidth sur mobile
  const iframe = document.createElement('iframe');
  iframe.id = 'pdf-render-isolated-iframe';
  iframe.style.position = 'fixed';
  iframe.style.top = '-10000px';
  iframe.style.left = '-10000px';
  iframe.style.width = '794px';
  iframe.style.height = '1123px';
  iframe.style.border = 'none';
  iframe.style.background = '#ffffff';
  iframe.style.zIndex = '-99999';
  document.body.appendChild(iframe);

  const iDoc = iframe.contentDocument || iframe.contentWindow.document;
  iDoc.open();
  iDoc.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background:#ffffff;"></body></html>');
  iDoc.close();

  // 2. L'iframe utilise son propre style A4 autonome et auto-suffisant (zéro conflit externe)

  // 3. Injecter les règles CSS strictes A4 (largeur fixe 794px, zéro superflu, zéro classe responsive)
  const overrideStyle = iDoc.createElement('style');
  overrideStyle.textContent = `
    * { box-sizing: border-box !important; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 794px !important;
      min-width: 794px !important;
      max-width: 794px !important;
      background: #ffffff !important;
      color: #111827 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-family: sans-serif !important;
    }
    .receipt-sheet {
      width: 794px !important;
      min-width: 794px !important;
      max-width: 794px !important;
      margin: 0 auto !important;
      background: #ffffff !important;
      padding: 40px !important;
      box-sizing: border-box !important;
      font-family: sans-serif !important;
      color: #111827 !important;
      border: none !important;
      box-shadow: none !important;
    }
    .no-print {
      display: none !important;
    }
  `;
  iDoc.head.appendChild(overrideStyle);

  // 4. Cloner l'élément source dans le body de l'iframe
  const clone = sourceElement.cloneNode(true);
  clone.id = 'pdf-isolated-clone';
  clone.querySelectorAll('.no-print').forEach(el => el.remove());
  iDoc.body.appendChild(clone);

  const cleanup = () => {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
  };

  if (window.html2pdf) {
    // Laisser 200ms à l'iframe pour appliquer polices et styles
    setTimeout(() => {
      const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: 0,
          scrollX: 0,
          width: 794,
          windowWidth: 794
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      const worker = window.html2pdf().set(opt).from(clone);
      worker.toCanvas().get('canvas').then(canvas => {
        return worker.toPdf().get('pdf').then(pdf => {
          // 🔒 GARANTIE MATHÉMATIQUE STRICTE : 1 SEULE PAGE A4 PARFAITEMENT POSITIONNÉE SANS AUCUNE COUPURE
          const totalPages = pdf.internal.getNumberOfPages();
          for (let i = totalPages; i > 1; i--) {
            pdf.deletePage(i);
          }
          const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
          const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
          const marginX = 8;
          const marginY = 8;
          const maxW = pageWidth - (marginX * 2); // 194mm
          const maxH = pageHeight - (marginY * 2); // 281mm

          const ratio = canvas.width / canvas.height;
          let renderW = maxW;
          let renderH = renderW / ratio;

          if (renderH > maxH) {
            renderH = maxH;
            renderW = renderH * ratio;
          }

          const posX = marginX + (maxW - renderW) / 2;
          // Document sur une demi-page A4 très aérée : positionné élégamment dans la moitié supérieure
          const posY = (renderH < maxH * 0.7) ? 20 : (marginY + (maxH - renderH) / 2);
          const imgData = canvas.toDataURL('image/jpeg', 0.98);

          pdf.setFillColor(255, 255, 255);
          pdf.rect(0, 0, pageWidth, pageHeight, 'F');
          pdf.addImage(imgData, 'JPEG', posX, posY, renderW, renderH);

          const blob = pdf.output('blob');

          if (autoSave) {
            pdf.save(filename);
          }

          cleanup();

          if (btn) {
            btn.innerHTML = '<span>✅</span> Téléchargé (1 page) !';
            setTimeout(() => {
              btn.innerHTML = originalText;
              btn.classList.remove('loading');
            }, 2500);
          }

          if (typeof callback === 'function') {
            callback(blob, pdf, imgData, canvas);
          }
        });
      }).catch(err => {
        cleanup();
        console.error('Erreur PDF iframe:', err);
        if (btn) {
          btn.innerHTML = originalText;
          btn.classList.remove('loading');
        }
        showToast("Génération du document en cours...", "info");
        window.print();
        if (typeof callback === 'function') {
          callback(null, null);
        }
      });
    }, 250);
  } else {
    cleanup();
    if (btn) {
      btn.innerHTML = originalText;
      btn.classList.remove('loading');
    }
    window.print();
    if (typeof callback === 'function') {
      callback(null, null);
    }
  }
}

// Téléchargement direct PDF (Quittance / Facture Locataire)
function downloadDirectPDF() {
  if (!currentActiveProperty) return;

  const btn = document.getElementById('btnDirectPdf');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>⏳</span> Création du PDF...';
  btn.classList.add('loading');

  const pKey = currentActiveReceiptPeriodKey || getPeriodKey();
  const pData = getPropertyPeriodData(currentActiveProperty, pKey);
  const element = document.getElementById('printableReceipt');
  const cleanTenantName = (currentActiveProperty.tenant || 'Locataire').replace(/\s+/g, '_');
  const docTypePrefix = currentActiveProperty.isCommercial ? 'Facture_Loyer' : 'Quittance';
  const recNo = pData.receiptNo || currentActiveProperty.receiptNo;
  const filename = `${docTypePrefix}_${recNo}_${cleanTenantName}_${pKey}.pdf`;

  exportElementToA4Pdf(element, filename, btn, originalText);
}

// Impression papier
function printReceiptPaper() {
  window.print();
}

// MESSAGE D'ACCOMPAGNEMENT WHATSAPP POUR LE PDF (POLI, COURT & DIRECT)
function sendWhatsAppReceipt() {
  if (!currentActiveProperty) return;
  sendWhatsAppReceiptDirect(currentActiveProperty.id, currentActiveReceiptPeriodKey);
}

function sendWhatsAppReceiptDirect(id, customPeriodKey = null) {
  const p = properties.find(item => item.id === id);
  if (!p) return;

  const pKey = customPeriodKey || currentActiveReceiptPeriodKey || getPeriodKey();
  const pData = getPropertyPeriodData(p, pKey);
  const parts = pKey.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const monthsFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const periodName = `${monthsFr[m - 1]} ${y}`;
  const receiptNo = pData.receiptNo || p.receiptNo;
  const cleanTenantName = (p.tenant || 'Locataire').replace(/\s+/g, '_');
  const docTypePrefix = p.isCommercial ? 'Facture_Loyer' : 'Quittance';
  const docTypeName = p.isCommercial ? 'facture de loyer' : 'quittance de loyer';
  const filename = `${docTypePrefix}_${receiptNo}_${cleanTenantName}_${pKey}.pdf`;

  // Message ultra-court, poli et droit au but (demandé expressément par Jean Philippe)
  const message = `Bonjour ${p.tenant},

Veuillez trouver ci-joint votre ${docTypeName} de ${periodName} (${p.unitName}).

Merci et très bonne journée !`;

  // 1. Ouvrir le reçu pour s'assurer que printableReceipt est à jour
  openReceiptModal(id, pKey);
  const element = document.getElementById('printableReceipt');

  showToast("⏳ Préparation de la quittance PDF (1 page)...", "info");

  // 2. Générer le PDF et partager directement sur WhatsApp
  exportElementToA4Pdf(element, filename, null, null, async (blob) => {
    // Si l'appareil supporte le partage direct de fichiers (smartphones Android & iOS)
    if (blob && navigator.canShare) {
      try {
        const file = new File([blob], filename, { type: 'application/pdf' });
        if (navigator.canShare({ files: [file] })) {
          showToast("📲 Ouverture de WhatsApp avec la quittance jointe...", "success");
          await navigator.share({
            files: [file],
            title: filename,
            text: message
          });
          return;
        }
      } catch (err) {
        if (err.name === 'AbortError') return; // L'utilisateur a simplement fermé la boîte de dialogue
        console.log("Web Share fallback:", err);
      }
    }

    // Fallback Ordinateur / Navigateur Desktop (WhatsApp Web)
    const cleanPhone = sanitizeWhatsAppPhone(p.phone);
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    showToast("✅ PDF téléchargé ! Sur WhatsApp, cliquez sur 📎 pour joindre la quittance.", "success");
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  }, true);
}

function sendWhatsAppReminder(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;

  const total = formatFCFA(p.rent + p.charges);
  const periodName = getPeriodFrench();
  const message = `Bonjour ${p.tenant},

Petit rappel amical concernant votre loyer de ${periodName} pour le logement : ${p.unitName} (${p.building}).
Montant à régler : ${total}.

Le règlement peut être effectué par Wave ou Orange Money.
Dès réception, nous vous transmettrons immédiatement votre quittance PDF officielle.

Merci pour votre collaboration !
KeurGui Gestion — Jean Philippe Gomis`;

  const cleanPhone = sanitizeWhatsAppPhone(p.phone);
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
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
  const pKey = getPeriodKey();
  const pData = getPropertyPeriodData(propertyToPay, pKey);
  const today = getTodayFormatted();

  pData.status = 'paid';
  pData.paymentMethod = selectedMethod;
  pData.paidDate = today;

  // Synchronisation de l'état
  propertyToPay.status = 'paid';
  propertyToPay.paymentMethod = selectedMethod;
  propertyToPay.paidDate = today;

  saveProperties(); // Sauvegarde permanente
  registerReceiptInHistory(propertyToPay, pKey); // Enregistrement dans le Registre Historique
  closePayModal();
  renderProperties();
  updateStats();

  // Motion Design : Onde de choc lumineuse Wave
  triggerPaymentSuccessBurst();

  showToast(`Paiement de ${propertyToPay.tenant} enregistré pour ${getPeriodFrench()} (${selectedMethod}) !`, "success");
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
// REGISTRE & HISTORIQUE DES QUITTANCES (ARCHIVES SÉCURISÉES)
// ===================================================
const RECEIPTS_HISTORY_STORAGE_KEY = 'keurgui_receipts_history';

function getReceiptsHistory() {
  try {
    const raw = localStorage.getItem(RECEIPTS_HISTORY_STORAGE_KEY);
    if (raw) {
      let parsed = JSON.parse(raw);
      let changed = false;
      parsed.forEach(r => {
        if ((r.receiptNo === 'KG-2026-0042' || r.propertyId === 1) && r.tenant !== 'Moussa Diop') {
          r.tenant = 'Moussa Diop';
          r.tenantPhone = '+221 77 654 32 10';
          changed = true;
        }
      });
      if (changed) {
        localStorage.setItem(RECEIPTS_HISTORY_STORAGE_KEY, JSON.stringify(parsed));
      }
      return parsed;
    }
  } catch (e) {}
  return [];
}

function saveReceiptsHistory(history) {
  try {
    localStorage.setItem(RECEIPTS_HISTORY_STORAGE_KEY, JSON.stringify(history));
    updateReceiptsHistoryBadge();
  } catch (e) {}
}

function initReceiptsHistory() {
  let history = getReceiptsHistory();
  if (!history || history.length === 0) {
    history = [
      // Mois en cours (Octobre 2026)
      {
        receiptNo: "KG-2026-0042",
        propertyId: 1,
        tenant: "Moussa Diop",
        tenantPhone: "+221 77 654 32 10",
        unitName: "Appartement 3B",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 250000,
        paymentMethod: "Wave",
        paidDate: "05/10/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2026-0043",
        propertyId: 2,
        tenant: "Aïssatou Ba",
        tenantPhone: "+221 78 234 56 78",
        unitName: "Studio 1A",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 220000,
        paymentMethod: "Wave",
        paidDate: "04/10/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2026-0044",
        propertyId: 3,
        tenant: "Cheikh Ndiaye",
        tenantPhone: "+221 76 345 67 89",
        unitName: "Appartement 2A",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 180000,
        paymentMethod: "Espèces",
        paidDate: "02/10/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2026-0045",
        propertyId: 4,
        tenant: "Fatou Sow",
        tenantPhone: "+221 70 456 78 90",
        unitName: "Appartement 4A",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 450000,
        paymentMethod: "Orange Money",
        paidDate: "03/10/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2026-0047",
        propertyId: 6,
        tenant: "Ousmane Fall",
        tenantPhone: "+221 77 678 90 12",
        unitName: "Appartement 1B",
        building: "Immeuble Almadies",
        neighborhood: "Almadies",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 380000,
        paymentMethod: "Wave",
        paidDate: "06/10/2026",
        isCommercial: false
      },
      {
        receiptNo: "FACT-2026-0018",
        propertyId: 7,
        tenant: "Cabinet Juridique Sarr",
        tenantPhone: "+221 33 820 11 22",
        unitName: "Plateau Bureau 201",
        building: "Centre d'Affaires Dakar",
        neighborhood: "Plateau",
        periodKey: "2026-10",
        periodFrench: "Octobre 2026",
        total: 767000,
        paymentMethod: "Virement Bancaire (CBAO)",
        paidDate: "02/10/2026",
        isCommercial: true
      },
      // Périodes antérieures (ex: il y a 1 mois, 2 mois, 1 an, 2 ans pour répondre précisément au cas d'usage)
      {
        receiptNo: "KG-2026-0036",
        propertyId: 1,
        tenant: "Moussa Diop",
        tenantPhone: "+221 77 654 32 10",
        unitName: "Appartement 3B",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-09",
        periodFrench: "Septembre 2026",
        total: 250000,
        paymentMethod: "Wave",
        paidDate: "04/09/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2026-0030",
        propertyId: 1,
        tenant: "Moussa Diop",
        tenantPhone: "+221 77 654 32 10",
        unitName: "Appartement 3B",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2026-08",
        periodFrench: "Août 2026",
        total: 250000,
        paymentMethod: "Wave",
        paidDate: "05/08/2026",
        isCommercial: false
      },
      {
        receiptNo: "KG-2025-0042",
        propertyId: 1,
        tenant: "Moussa Diop",
        tenantPhone: "+221 77 654 32 10",
        unitName: "Appartement 3B",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2025-10",
        periodFrench: "Octobre 2025",
        total: 240000,
        paymentMethod: "Wave",
        paidDate: "05/10/2025",
        isCommercial: false
      },
      {
        receiptNo: "KG-2024-0043",
        propertyId: 2,
        tenant: "Aïssatou Ba",
        tenantPhone: "+221 78 234 56 78",
        unitName: "Studio 1A",
        building: "Résidence Teranga",
        neighborhood: "Mermoz",
        periodKey: "2024-11",
        periodFrench: "Novembre 2024",
        total: 210000,
        paymentMethod: "Wave",
        paidDate: "03/11/2024",
        isCommercial: false
      }
    ];
    saveReceiptsHistory(history);
  }
  updateReceiptsHistoryBadge();
}

function registerReceiptInHistory(prop, pKey = getPeriodKey()) {
  const pData = getPropertyPeriodData(prop, pKey);
  if (pData.status !== 'paid') return;

  const history = getReceiptsHistory();
  const receiptNo = pData.receiptNo || prop.receiptNo || `KG-${pKey.split('-')[0]}-${String(prop.id).padStart(4, '0')}`;
  
  const parts = pKey.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const monthsFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  const periodFrench = `${monthsFr[m - 1]} ${y}`;

  let total = prop.rent + prop.charges;
  if (prop.isCommercial) {
    const tva = Math.round(total * 0.18);
    total = total + tva;
  }

  const existingIdx = history.findIndex(r => r.propertyId === prop.id && r.periodKey === pKey);
  const record = {
    receiptNo: receiptNo,
    propertyId: prop.id,
    tenant: prop.tenant,
    tenantPhone: prop.phone,
    unitName: prop.unitName,
    building: prop.building,
    neighborhood: prop.neighborhood,
    periodKey: pKey,
    periodFrench: periodFrench,
    total: total,
    paymentMethod: pData.paymentMethod || prop.paymentMethod || 'Wave',
    paidDate: pData.paidDate || getTodayFormatted(),
    isCommercial: !!prop.isCommercial
  };

  if (existingIdx >= 0) {
    history[existingIdx] = record;
  } else {
    history.unshift(record);
  }

  saveReceiptsHistory(history);
}

function updateReceiptsHistoryBadge() {
  const badge = document.getElementById('historyCountBadge');
  if (badge) {
    const history = getReceiptsHistory();
    badge.textContent = history.length;
  }
}

function openReceiptsHistoryModal() {
  const modal = document.getElementById('receiptsHistoryModalOverlay');
  if (!modal) return;

  populateHistoryBuildingFilter();
  filterReceiptsHistory();
  modal.classList.add('active');
}

function closeReceiptsHistoryModal() {
  const modal = document.getElementById('receiptsHistoryModalOverlay');
  if (modal) modal.classList.remove('active');
}

function closeReceiptsHistoryOnOverlay(e) {
  if (e.target.id === 'receiptsHistoryModalOverlay') {
    closeReceiptsHistoryModal();
  }
}

function populateHistoryBuildingFilter() {
  const select = document.getElementById('historyBuildingFilter');
  if (!select) return;

  const history = getReceiptsHistory();
  const buildings = Array.from(new Set(history.map(r => r.building).filter(Boolean)));

  select.innerHTML = '<option value="all">Tous les biens / immeubles</option>' +
    buildings.map(b => `<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join('');
}

function filterReceiptsHistory() {
  const searchInput = document.getElementById('historySearchInput');
  const yearSelect = document.getElementById('historyYearFilter');
  const buildingSelect = document.getElementById('historyBuildingFilter');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const year = yearSelect ? yearSelect.value : 'all';
  const building = buildingSelect ? buildingSelect.value : 'all';

  renderReceiptsHistoryList(query, year, building);
}

function renderReceiptsHistoryList(query = '', year = 'all', building = 'all') {
  const container = document.getElementById('historyListContainer');
  const summary = document.getElementById('historySummaryText');
  if (!container) return;

  let history = getReceiptsHistory();

  // Filtre par texte
  if (query) {
    history = history.filter(r => 
      (r.tenant && r.tenant.toLowerCase().includes(query)) ||
      (r.receiptNo && r.receiptNo.toLowerCase().includes(query)) ||
      (r.building && r.building.toLowerCase().includes(query)) ||
      (r.unitName && r.unitName.toLowerCase().includes(query)) ||
      (r.neighborhood && r.neighborhood.toLowerCase().includes(query)) ||
      (r.periodFrench && r.periodFrench.toLowerCase().includes(query))
    );
  }

  // Filtre par année
  if (year !== 'all') {
    history = history.filter(r => r.periodKey && r.periodKey.startsWith(year));
  }

  // Filtre par immeuble
  if (building !== 'all') {
    history = history.filter(r => r.building === building);
  }

  if (summary) {
    summary.innerHTML = `Affichage de <strong>${history.length}</strong> quittance(s)`;
  }

  if (history.length === 0) {
    container.innerHTML = `
      <div class="history-empty-state">
        <div class="empty-icon">🔍</div>
        <h4 style="font-weight:700; color:var(--dark);">Aucune quittance trouvée</h4>
        <p style="font-size:12px; margin-top:4px;">Essayez d'ajuster vos critères de recherche ou sélectionnez une autre année.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = history.map(r => {
    return `
      <div class="history-item-row">
        <div class="history-item-main">
          <div class="history-item-header">
            <span class="history-badge-ref">${escapeHtml(r.receiptNo)}</span>
            <span class="history-badge-period">📅 ${escapeHtml(r.periodFrench)}</span>
            <span class="history-badge-method">Règlement : ${escapeHtml(r.paymentMethod || 'Wave')} (le ${escapeHtml(r.paidDate || '05')})</span>
          </div>
          <div class="history-item-tenant">
            <strong>${escapeHtml(r.tenant)}</strong>
            <span class="history-tenant-phone">${escapeHtml(r.tenantPhone || '')}</span>
          </div>
          <div class="history-item-property">
            📍 ${escapeHtml(r.unitName)} — ${escapeHtml(r.building)} (${escapeHtml(r.neighborhood)})
          </div>
        </div>

        <div class="history-item-amount-side">
          <div class="history-item-price">${formatFCFA(r.total)}</div>
          <div class="history-item-type">${r.isCommercial ? 'Facture Commerciale' : 'Quittance Particulier'}</div>
        </div>

        <div class="history-item-actions">
          <button class="btn-history-view" onclick="openReceiptFromHistory('${escapeHtml(r.receiptNo)}')" title="Visualiser la quittance certifiée">
            <span>👁️</span> Voir
          </button>
          <button class="btn-history-pdf" onclick="downloadPdfFromHistory('${escapeHtml(r.receiptNo)}')" title="Télécharger le PDF 1 page">
            <span>📥</span> PDF
          </button>
          <button class="btn-history-wa" onclick="sendWhatsAppFromHistory('${escapeHtml(r.receiptNo)}')" title="Envoyer au locataire par WhatsApp">
            <span>💬</span> WhatsApp
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openReceiptFromHistory(receiptNo) {
  const history = getReceiptsHistory();
  const item = history.find(r => r.receiptNo === receiptNo);
  if (!item) return;

  const prop = properties.find(p => p.id === item.propertyId);
  if (!prop) {
    showToast("Bien introuvable", "error");
    return;
  }

  closeReceiptsHistoryModal();
  openReceiptModal(prop.id, item.periodKey);
}

function downloadPdfFromHistory(receiptNo) {
  const history = getReceiptsHistory();
  const item = history.find(r => r.receiptNo === receiptNo);
  if (!item) return;

  const prop = properties.find(p => p.id === item.propertyId);
  if (!prop) return;

  openReceiptModal(prop.id, item.periodKey);
  const element = document.getElementById('printableReceipt');
  const cleanTenant = (item.tenant || 'Locataire').replace(/\s+/g, '_');
  const docTypePrefix = item.isCommercial ? 'Facture_Loyer' : 'Quittance';
  const filename = `${docTypePrefix}_${receiptNo}_${cleanTenant}_${item.periodKey}.pdf`;

  showToast(`⏳ Téléchargement de la quittance ${receiptNo}...`, "info");
  exportElementToA4Pdf(element, filename, null, null, () => {
    showToast(`✅ Quittance ${receiptNo} téléchargée (1 page) !`, "success");
  });
}

function sendWhatsAppFromHistory(receiptNo) {
  const history = getReceiptsHistory();
  const item = history.find(r => r.receiptNo === receiptNo);
  if (!item) return;

  const prop = properties.find(p => p.id === item.propertyId);
  if (!prop) return;

  closeReceiptsHistoryModal();
  sendWhatsAppReceiptDirect(prop.id, item.periodKey);
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

// Génère les champs interactifs pour renseigner le locataire de chaque appartement (SANS pré-remplissage)
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
        <input type="text" id="unitTenant_${i}" placeholder="Nom du locataire (ex: Moussa Fall)" value="">
        <input type="text" id="unitPhone_${i}" placeholder="WhatsApp (ex: +221 77 123 45 67)" value="">
      </div>
    `;
  }

  listContainer.innerHTML = html;
}

// ===================================================
// GESTION DES PRÉSÉLECTIONS DE CAUTION (FORMULAIRES)
// ===================================================
let currentDepositPresetMonths = 2;

function setDepositPreset(months) {
  currentDepositPresetMonths = months;
  [0, 1, 2, 3].forEach(m => {
    const btn = document.getElementById(`btnPreset${m}`);
    if (btn) {
      if (m === months) btn.classList.add('active-preset');
      else btn.classList.remove('active-preset');
    }
  });

  const rentInput = document.getElementById('propRent');
  const rent = parseInt(rentInput ? rentInput.value : 0, 10) || 0;
  const depositInput = document.getElementById('propDeposit');
  if (depositInput) {
    depositInput.value = months > 0 ? (rent * months) : 0;
  }
}

function onRentInputChange() {
  if (currentDepositPresetMonths > 0) {
    const rentInput = document.getElementById('propRent');
    const rent = parseInt(rentInput ? rentInput.value : 0, 10) || 0;
    const depositInput = document.getElementById('propDeposit');
    if (depositInput) {
      depositInput.value = rent * currentDepositPresetMonths;
    }
  }
}

let currentBldDepositPresetMonths = 2;

function setBldDepositPreset(months) {
  currentBldDepositPresetMonths = months;
  [0, 1, 2, 3].forEach(m => {
    const btn = document.getElementById(`btnBldPreset${m}`);
    if (btn) {
      if (m === months) btn.classList.add('active-preset');
      else btn.classList.remove('active-preset');
    }
  });

  const rentInput = document.getElementById('bldDefaultRent');
  const rent = parseInt(rentInput ? rentInput.value : 0, 10) || 0;
  const depositInput = document.getElementById('bldDefaultDeposit');
  if (depositInput) {
    depositInput.value = months > 0 ? (rent * months) : 0;
  }
}

function onBldRentInputChange() {
  if (currentBldDepositPresetMonths > 0) {
    const rentInput = document.getElementById('bldDefaultRent');
    const rent = parseInt(rentInput ? rentInput.value : 0, 10) || 0;
    const depositInput = document.getElementById('bldDefaultDeposit');
    if (depositInput) {
      depositInput.value = rent * currentBldDepositPresetMonths;
    }
  }
}

// Ajout d'un logement individuel
function handleAddNewProperty(e) {
  e.preventDefault();

  const name = document.getElementById('propName').value.trim();
  const neighborhood = (document.getElementById('propNeighborhood').value || '').trim() || 'Mermoz';
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

  // Gestion de la caution
  const depositInput = document.getElementById('propDeposit');
  const deposit = depositInput && depositInput.value !== '' ? (parseInt(depositInput.value, 10) || 0) : (rent * 2);
  const depositMethod = (document.getElementById('propDepositMethod') && document.getElementById('propDepositMethod').value) || 'Wave';
  const depositMonths = (rent > 0 && deposit > 0) ? Math.round(deposit / rent) : 0;

  const pKey = getPeriodKey();
  const today = getTodayFormatted();
  const newId = Date.now();
  const newReceiptNo = isCommercial 
    ? `FACT-${selectedPeriod.year}-${String(newId).slice(-6)}`
    : `KG-${selectedPeriod.year}-${String(newId).slice(-6)}`;
  const newDepositReceiptNo = `DEP-${selectedPeriod.year}-${String(newId).slice(-6)}`;

  const newProp = {
    id: newId,
    building: "Logements Individuels",
    unitName: name,
    neighborhood: neighborhood,
    type: type,
    rent: rent,
    charges: charges,
    deposit: deposit,
    depositMonths: depositMonths,
    depositPaymentMethod: depositMethod,
    depositPaidDate: today,
    depositStatus: 'held',
    depositReceiptNo: newDepositReceiptNo,
    tenant: tenant || "Non assigné",
    phone: phone || "Non renseigné",
    status: initialStatus,
    paymentMethod: initialStatus === 'paid' ? 'Wave' : null,
    paidDate: initialStatus === 'paid' ? today : null,
    owner: owner,
    receiptNo: newReceiptNo,
    isCommercial: isCommercial,
    periods: {
      [pKey]: {
        status: initialStatus,
        paymentMethod: initialStatus === 'paid' ? 'Wave' : null,
        paidDate: initialStatus === 'paid' ? today : null,
        receiptNo: newReceiptNo
      }
    }
  };

  properties.unshift(newProp);
  saveProperties(); // Sauvegarde permanente
  closeAddPropertyModal();
  renderProperties();
  updateStats();

  showToast(`Logement "${name}" ajouté avec succès pour ${getPeriodFrench()} !`, "success");
}

// Création d'un immeuble avec tous ses locataires personnalisés
function handleGenerateBuilding(e) {
  e.preventDefault();

  const bldName = document.getElementById('bldName').value.trim();
  const neighborhood = (document.getElementById('bldNeighborhood').value || '').trim() || 'Mermoz';
  const unitCount = parseInt(document.getElementById('bldUnitCount').value, 10) || 4;
  const defaultRent = parseInt(document.getElementById('bldDefaultRent').value, 10) || 220000;
  const owner = (document.getElementById('bldOwnerName') && document.getElementById('bldOwnerName').value) || 'Jean Philippe Gomis';

  // Caution par défaut pour l'immeuble
  const bldDepositInput = document.getElementById('bldDefaultDeposit');
  const defaultDeposit = bldDepositInput && bldDepositInput.value !== '' ? (parseInt(bldDepositInput.value, 10) || 0) : (defaultRent * 2);
  const depositMonths = (defaultRent > 0 && defaultDeposit > 0) ? Math.round(defaultDeposit / defaultRent) : 2;

  const letters = ['A', 'B', 'C', 'D'];
  const pKey = getPeriodKey();
  const today = getTodayFormatted();
  const timestampBase = Date.now();

  for (let i = 1; i <= unitCount; i++) {
    const floor = Math.ceil(i / 2);
    const letter = letters[(i - 1) % 2];
    const unitLabel = `Appt ${floor}${letter}`;

    const tenantInput = document.getElementById(`unitTenant_${i}`);
    const phoneInput = document.getElementById(`unitPhone_${i}`);

    const tenantName = (tenantInput && tenantInput.value.trim()) || unitLabel;
    const tenantPhone = (phoneInput && phoneInput.value.trim()) || 'Non renseigné';

    const newId = timestampBase + i;
    const newReceiptNo = `KG-${selectedPeriod.year}-00${50 + (i % 99)}`;
    const newDepositReceiptNo = `DEP-${selectedPeriod.year}-00${50 + (i % 99)}`;

    properties.push({
      id: newId,
      building: bldName,
      unitName: unitLabel,
      neighborhood: neighborhood,
      type: "Appartement conventionné",
      rent: defaultRent,
      charges: 15000,
      deposit: defaultDeposit,
      depositMonths: depositMonths,
      depositPaymentMethod: "Wave",
      depositPaidDate: today,
      depositStatus: "held",
      depositReceiptNo: newDepositReceiptNo,
      tenant: tenantName,
      phone: tenantPhone,
      status: "late", // En attente par défaut pour la période
      paymentMethod: null,
      paidDate: null,
      owner: owner,
      receiptNo: newReceiptNo,
      periods: {
        [pKey]: {
          status: "late",
          paymentMethod: null,
          paidDate: null,
          receiptNo: newReceiptNo
        }
      }
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
// GESTION ET MODAL DU REÇU OFFICIEL DE CAUTION (DÉPÔT DE GARANTIE)
// ===================================================
let currentActiveDepositProperty = null;

function openDepositModal(id) {
  const p = properties.find(item => item.id === id);
  if (!p) return;
  currentActiveDepositProperty = p;

  const depositReceiptNo = p.depositReceiptNo || `DEP-${selectedPeriod.year}-${String(p.id).padStart(4, '0')}`;
  const depositAmount = (p.deposit !== undefined && p.deposit !== null) ? p.deposit : (p.rent * 2);
  const equivMonths = p.depositMonths || (p.rent > 0 ? Math.round(depositAmount / p.rent) : 2);
  const equivMonthsText = equivMonths > 0 ? `Équivalent à ${equivMonths} mois de loyer contractuel` : 'Caution forfaitaire contractuelle';

  const numEl = document.getElementById('mDepositReceiptNumber');
  if (numEl) numEl.textContent = depositReceiptNo;

  const refEl = document.getElementById('mDepositReceiptRef');
  if (refEl) refEl.textContent = depositReceiptNo;

  const methodEl = document.getElementById('mDepositPaymentMethodBadge');
  if (methodEl) methodEl.textContent = 'Par ' + (p.depositPaymentMethod || p.paymentMethod || 'Wave');

  const equivEl = document.getElementById('mDepositEquivMonths');
  if (equivEl) equivEl.textContent = equivMonthsText;

  // Bailleur
  const ownerEl = document.getElementById('mDepositOwnerName');
  const signerEl = document.getElementById('mDepositSignerName');
  if (isAgencyMode && p.owner) {
    if (ownerEl) ownerEl.textContent = p.owner;
    if (signerEl) signerEl.textContent = 'AGENCE KEURGUI';
  } else {
    if (ownerEl) ownerEl.textContent = 'KEURGUI';
    if (signerEl) signerEl.textContent = 'GOMIS J.P.';
  }

  // Preneur / Locataire
  const tenantEl = document.getElementById('mDepositTenantName');
  if (tenantEl) tenantEl.textContent = p.tenant;

  const tenantSigEl = document.getElementById('mDepositTenantSig');
  if (tenantSigEl) tenantSigEl.textContent = p.tenant;

  const tenantPhoneEl = document.getElementById('mDepositTenantPhone');
  if (tenantPhoneEl) tenantPhoneEl.textContent = p.phone;

  const propAddrEl = document.getElementById('mDepositPropertyAddress');
  if (propAddrEl) propAddrEl.textContent = `${p.unitName}, ${p.building} — ${formatPropertyLocation(p.neighborhood)}`;

  const unitDetailsEl = document.getElementById('mDepositUnitDetails');
  if (unitDetailsEl) unitDetailsEl.textContent = p.type || 'Logement conventionné';

  const monthlyRentEl = document.getElementById('mDepositMonthlyRent');
  if (monthlyRentEl) monthlyRentEl.textContent = formatFCFA(p.rent);

  // Montants
  const tableAmountEl = document.getElementById('mDepositTableAmount');
  if (tableAmountEl) tableAmountEl.textContent = formatFCFA(depositAmount);

  const tableTotalEl = document.getElementById('mDepositTableTotal');
  if (tableTotalEl) tableTotalEl.textContent = formatFCFA(depositAmount);

  const wordsEl = document.getElementById('mDepositAmountWords');
  if (wordsEl) wordsEl.textContent = numberToWordsFR(depositAmount);

  const issueDateEl = document.getElementById('mDepositIssueDate');
  if (issueDateEl) issueDateEl.textContent = p.depositPaidDate ? p.depositPaidDate : getTodayFormatted();

  // Confirmation de règlement
  const depMethod = p.depositPaymentMethod || p.paymentMethod || 'Wave';
  const depDate = p.depositPaidDate ? p.depositPaidDate : (`01/${String(selectedPeriod.month).padStart(2, '0')}/${selectedPeriod.year}`);
  const depConfirmEl = document.getElementById('mDepositConfirmationText');
  if (depConfirmEl) {
    depConfirmEl.textContent = `Dépôt de garantie reçu le ${depDate} via ${depMethod}.`;
  }

  // Statut de la caution
  const isHeld = (p.depositStatus === 'held' || !p.depositStatus);
  const badgeMain = document.getElementById('mDepositBadgeMain');
  const toggleBtnText = document.getElementById('btnToggleDepositRefundText');
  if (badgeMain) {
    badgeMain.textContent = isHeld ? '✓ CAUTION EN RÉSERVE' : 'RESTITUÉE';
  }
  if (toggleBtnText) {
    toggleBtnText.textContent = isHeld ? 'Marquer Restituée' : 'Remettre en Réserve';
  }

  const modal = document.getElementById('depositReceiptModalOverlay');
  if (modal) modal.classList.add('active');
}

function closeDepositReceiptModal() {
  const modal = document.getElementById('depositReceiptModalOverlay');
  if (modal) modal.classList.remove('active');
}

function closeDepositModalOnOverlay(e) {
  if (e.target.id === 'depositReceiptModalOverlay') {
    closeDepositReceiptModal();
  }
}

function toggleCurrentDepositStatus() {
  if (!currentActiveDepositProperty) return;
  const p = currentActiveDepositProperty;
  const wasHeld = (p.depositStatus === 'held' || !p.depositStatus);
  p.depositStatus = wasHeld ? 'refunded' : 'held';

  saveProperties();
  renderProperties();
  updateStats();

  // Mettre à jour l'affichage de la modale ouverte
  openDepositModal(p.id);

  if (p.depositStatus === 'refunded') {
    showToast(`Caution de ${p.tenant} marquée comme restituée.`, "info");
  } else {
    showToast(`Caution de ${p.tenant} remise en réserve sécurisée.`, "success");
  }
}

function downloadDirectDepositPDF() {
  if (!currentActiveDepositProperty) return;
  const p = currentActiveDepositProperty;
  const btn = document.getElementById('btnDepositPdf');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '<span>⏳</span> Création du PDF...';
    btn.classList.add('loading');
  }

  const element = document.getElementById('printableDepositReceipt');
  const cleanTenant = (p.tenant || 'Locataire').replace(/\s+/g, '_');
  const receiptNo = p.depositReceiptNo || `DEP-2026-${String(p.id).padStart(4, '0')}`;
  const filename = `Recu_Caution_${receiptNo}_${cleanTenant}.pdf`;

  showToast("⏳ Préparation du Reçu de Caution A4 (1 page)...", "info");
  exportElementToA4Pdf(element, filename, btn, originalText, () => {
    showToast(`✅ Reçu de caution ${receiptNo} téléchargé avec succès !`, "success");
  });
}

function sendWhatsAppDepositReceipt() {
  if (!currentActiveDepositProperty) return;
  const p = currentActiveDepositProperty;
  const receiptNo = p.depositReceiptNo || `DEP-2026-${String(p.id).padStart(4, '0')}`;
  const cleanTenant = (p.tenant || 'Locataire').replace(/\s+/g, '_');
  const filename = `Recu_Caution_${receiptNo}_${cleanTenant}.pdf`;
  const amountStr = formatFCFA(p.deposit || (p.rent * 2));

  // Message ultra-court et chaleureux
  const message = `Bonjour ${p.tenant},

Veuillez trouver ci-joint votre reçu officiel de caution pour votre emménagement à ${p.unitName} (${amountStr}).

Document certifié KeurGui. Bienvenue et très bonne installation !`;

  const element = document.getElementById('printableDepositReceipt');
  showToast("⏳ Préparation du reçu de caution PDF (1 page)...", "info");

  exportElementToA4Pdf(element, filename, null, null, async (blob) => {
    // Smartphone : Partage direct avec pièce jointe
    if (blob && navigator.canShare) {
      try {
        const file = new File([blob], filename, { type: 'application/pdf' });
        if (navigator.canShare({ files: [file] })) {
          showToast("📲 Ouverture de WhatsApp avec le reçu de caution joint...", "success");
          await navigator.share({
            files: [file],
            title: filename,
            text: message
          });
          return;
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.log("Web Share fallback:", err);
      }
    }

    // Fallback Ordinateur / WhatsApp Web
    const cleanPhone = sanitizeWhatsAppPhone(p.phone);
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    showToast("✅ Reçu PDF téléchargé ! Sur WhatsApp, cliquez sur 📎 pour joindre le reçu.", "success");
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  }, true);
}

function printDepositReceiptPaper() {
  window.print();
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
  btn.innerHTML = '<span>Transmission...</span> ⏳';

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

  // 1. Sauvegarde discrète dans le Google Sheet
  if (GOOGLE_SHEETS_FEEDBACK_URL) {
    try {
      fetch(GOOGLE_SHEETS_FEEDBACK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.warn('Feedback envoi différé', err));
    } catch (err) {
      console.warn('Feedback envoi différé', err);
    }
  }

  // 2. Notification et ouverture directe de WhatsApp pour que Jean Philippe reçoive le message en temps réel sur son téléphone
  const text = `Salam Jean Philippe, voici mon avis sur KeurGui :\n\n⭐ Note : ${rating}/5\n👤 De la part de : ${userName}\n💬 Message : "${comment}"\n\n(Envoyé depuis l'application KeurGui - ${dateStr})`;
  const jpPhone = "221788182104";
  const url = `https://wa.me/${jpPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');

  closeFeedbackModal();
  showToast("Merci infiniment ! Votre avis a été directement transmis à Jean Philippe via WhatsApp.", "success");
  document.getElementById('feedbackForm').reset();
  btn.disabled = false;
  btn.innerHTML = original;
}

function sendFeedbackWhatsAppDirect() {
  const rating = document.getElementById('selectedRatingValue').value;
  const comment = document.getElementById('feedbackComment').value.trim() || 'Bonjour Jean Philippe, je viens de tester KeurGui !';
  const userName = localStorage.getItem('keurgui_lead_name') || 'Visiteur Démo';
  const text = `Salam Jean Philippe, voici mon avis sur KeurGui :\n\n⭐ Note : ${rating}/5\n👤 De la part de : ${userName}\n💬 Message : "${comment}"`;
  const jpPhone = "221788182104"; // Numéro direct WhatsApp de Jean Philippe
  const url = `https://wa.me/${jpPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
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
  const pKey = getPeriodKey();
  const periodText = getPeriodFrench();

  // Filtrer les biens encaissés pour la période sélectionnée
  const paidProps = properties.filter(p => {
    const pData = getPropertyPeriodData(p, pKey);
    return pData.status === 'paid' && (selectedOwner === 'all' || p.owner === selectedOwner);
  });
  
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
    if (portfolioDesc) portfolioDesc.textContent = `${paidProps.length} lots encaissés au Sénégal (${periodText})`;
    if (unitsDetail) unitsDetail.textContent = `Globalité des encaissements (${paidProps.length} loyers perçus en ${periodText})`;
  } else {
    if (ownerDisplay) ownerDisplay.textContent = selectedOwner;
    if (portfolioDesc) portfolioDesc.textContent = `${paidProps.length} lot(s) en gérance mandatée (${periodText})`;
    if (unitsDetail) unitsDetail.textContent = `Encaissements perçus pour ${selectedOwner} (${paidProps.length} lot(s) en ${periodText})`;
  }

  // Remplir les montants
  document.getElementById('agencyTableCollected').textContent = formatFCFA(totalCollected);
  document.getElementById('agencyTableCommissionHt').textContent = formatFCFA(commissionHt);
  document.getElementById('agencyTableTva').textContent = formatFCFA(tva);
  document.getElementById('agencyTableTotalTtc').textContent = formatFCFA(commissionTtc);
  document.getElementById('agencyNetPayout').textContent = formatFCFA(netPayout);
  document.getElementById('agencyAmountWords').textContent = numberToWordsFR(commissionTtc);
  
  // Date et Réf
  const invoiceRef = `FACT-AG-${selectedPeriod.year}-${String(selectedPeriod.month).padStart(2, '0')}`;
  
  const invNumberEl = document.getElementById('mAgencyInvoiceNumber');
  const invRefEl = document.getElementById('agencyInvoiceRef');
  if (invNumberEl) invNumberEl.textContent = invoiceRef;
  if (invRefEl) invRefEl.textContent = invoiceRef;

  const invPeriodEl = document.getElementById('agencyInvoicePeriod');
  if (invPeriodEl) invPeriodEl.textContent = periodText;

  const invPayDateEl = document.getElementById('agencyInvoicePaymentDate');
  if (invPayDateEl) invPayDateEl.textContent = periodText;
}

// Téléchargement Facture d'Honoraires Agence PDF (Bailleur Mandant)
function downloadAgencyInvoicePdf() {
  const btn = document.getElementById('btnAgencyPdf');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>⏳</span> Création du PDF...';
  btn.classList.add('loading');

  const pKey = getPeriodKey();
  const element = document.getElementById('printableAgencyInvoice');
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  const ownerClean = (select ? select.value : 'Global').replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Facture_Honoraires_KeurGui_${ownerClean}_${pKey}.pdf`;

  exportElementToA4Pdf(element, filename, btn, originalText);
}

function printAgencyInvoice() {
  window.print();
}

function sendWhatsAppAgencyInvoice() {
  const select = document.getElementById('agencyInvoiceOwnerSelect');
  const selectedOwner = select ? select.value : 'all';
  const pKey = getPeriodKey();
  const periodText = getPeriodFrench();

  const paidProps = properties.filter(p => {
    const pData = getPropertyPeriodData(p, pKey);
    return pData.status === 'paid' && (selectedOwner === 'all' || p.owner === selectedOwner);
  });

  let totalCollected = 0;
  paidProps.forEach(p => { totalCollected += (p.rent + p.charges); });

  const commissionHt = Math.round(totalCollected * 0.10);
  const tva = Math.round(commissionHt * 0.18);
  const commissionTtc = commissionHt + tva;
  const netPayout = Math.max(0, totalCollected - commissionTtc);

  const ownerName = selectedOwner === 'all' ? 'Cher Bailleur' : selectedOwner;
  const invoiceRef = `FACT-AG-${selectedPeriod.year}-${String(selectedPeriod.month).padStart(2, '0')}`;
  const filename = `Facture_Honoraires_KeurGui_${(selectedOwner === 'all' ? 'Global' : selectedOwner).replace(/\s+/g, '_')}_${pKey}.pdf`;

  const message = `Bonjour ${ownerName},

Veuillez trouver ci-joint votre Décompte de Gestion et la Facture d'Honoraires officielle (au format PDF) pour le mois de ${periodText} concernant vos biens sous mandat.

📊 RÉCAPITULATIF FINANCIER DU MOIS (${periodText}) :
• Total des loyers encaissés : ${formatFCFA(totalCollected)}
• Honoraires de gestion (10% HT) : ${formatFCFA(commissionHt)}
• TVA sur honoraires (18% - CGI Sénégal) : ${formatFCFA(tva)}
• Total Honoraires TTC : ${formatFCFA(commissionTtc)}
━━━━━━━━━━━━━━━━━━━━
💰 NET REVERSÉ SUR VOTRE COMPTE : ${formatFCFA(netPayout)}
(Virement / Wave effectué avec succès)

• Réf Facture : ${invoiceRef}

Merci pour votre confiance continue.
Excellente journée à vous !

Bien cordialement,
Direction Financière — KeurGui Immobilier SARL
VDN Sacré-Cœur 3, Dakar • +221 78 818 21 04`;

  const element = document.getElementById('printableAgencyInvoice');

  showToast("⏳ Préparation de la Facture PDF...", "info");

  exportElementToA4Pdf(element, filename, null, null, () => {
    showToast("✅ Facture PDF prête ! WhatsApp s'ouvre : joignez le fichier avec 📎.", "success");
    setTimeout(() => {
      let targetPhone = '221788182104';
      const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 700);
  });
}

// ===================================================
// GESTION BANNIÈRE PWA : INSTALLATION SMARTPHONE 1-CLIC
// ===================================================
let deferredPwaPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPwaPrompt = e;
  const dismissed = localStorage.getItem('keurgui_pwa_dismissed');
  if (!dismissed) {
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) banner.style.display = 'block';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // Détection iOS (Safari) pour proposer l'installation à l'écran d'accueil
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
  const dismissed = localStorage.getItem('keurgui_pwa_dismissed');
  
  if (isIos && !isStandalone && !dismissed) {
    setTimeout(() => {
      const banner = document.getElementById('pwaInstallBanner');
      if (banner) banner.style.display = 'block';
    }, 1500);
  }
});

function triggerPwaInstall() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("Félicitations ! KeurGui a été ajouté à votre écran d'accueil.", "success");
        dismissPwaBanner();
      }
      deferredPwaPrompt = null;
    });
  } else {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIos) {
      openPwaIosModal();
    } else {
      showToast("Pour installer : ouvrez le menu de votre navigateur (⋮) puis cliquez sur 'Ajouter à l'écran d'accueil'.", "info");
    }
  }
}

function dismissPwaBanner() {
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) banner.style.display = 'none';
  localStorage.setItem('keurgui_pwa_dismissed', 'true');
}

function openPwaIosModal() {
  const modal = document.getElementById('pwaIosModal');
  if (modal) modal.style.display = 'flex';
}

function closePwaIosModalDirect() {
  const modal = document.getElementById('pwaIosModal');
  if (modal) modal.style.display = 'none';
}

function closePwaIosModal(e) {
  if (e.target.id === 'pwaIosModal') {
    closePwaIosModalDirect();
  }
}


