# 📋 Journal de Bord — KeurGui
**Date :** 20 Octobre 2026  
**Fondateur :** Jean Philippe Gomis  
**Statut :** Bêta Privée Prête pour Prospection (Objectif : 50 Bêta-testeurs)  
**Lien Démo Vercel :** https://keurgui-ashy.vercel.app/  
**Dépôt GitHub :** https://github.com/jeanphilippegomis121/KeurGui  

---

## 🚀 Réalisations de la Séance du 20 Octobre 2026

### 1. 📄 Résolution Définitive du Bug de Téléchargement PDF A4
- **Diagnostic :** Sur écran d'ordinateur (Desktop 1080p/1440p), la boîte modale centrée créait un décalage de capture dans `html2canvas`, coupant la moitié droite et tronquant le document en hauteur sur 2 pages.
- **Solution mise en place :**
  - Conception d'un moteur d'exportation dédié (`exportElementToA4Pdf`) avec clonage sandbox isolé ancré strictement à `(0, 0)` avec une largeur fixe A4 (794 px).
  - Compactage élégant des styles pour la **Quittance Locataire** et la **Facture d'Honoraires Agence**.
  - Règle stricte anti-coupure (`page-break-inside: avoid`).
- **Validation :** Confirmé opérationnel, net et parfaitement centré sur 1 seule page A4 à 100% sur téléphone ET sur ordinateur.

### 2. 💬 Correction du Système de Recueil d'Avis (Feedback)
- **Diagnostic :** Le bouton « Envoyer mon avis » envoyait silencieusement les données vers un Google Sheet sans notification instantanée pour Jean Philippe.
- **Solution mise en place :**
  - Connexion automatique au numéro WhatsApp direct de Jean Philippe (+221 78 818 21 04).
  - Dès qu'un utilisateur soumet son avis ou sa note (1 à 5 étoiles), le message pré-rempli s'ouvre sur WhatsApp en direct.

### 3. 📢 Stratégie de Prospection ($100M Leads d'Alex Hormozi)
- Élaboration de 3 scripts sur mesure adaptés au marché sénégalais :
  1. **Cible A :** Propriétaires bailleurs résidant à Dakar (fin de la gêne des relances Wave/OM, quittances en 1 clic).
  2. **Cible B :** Diaspora sénégalaise en Europe/USA (garder un œil sur ses biens à Dakar en toute transparence).
  3. **Cible C :** Gestionnaires de biens & démarcheurs à Dakar (automatisation des factures 10% HT + TVA 18% CGI art. 355).

---

## 🎯 Prochaine Étape (Séance de Demain)

1. **Lancement de la prospection :**
   - Diffuser le script Cible A à 20-30 contacts proches du répertoire.
   - Publier le script Cible B sur 2-3 groupes Facebook de la diaspora sénégalaise.
2. **Collecte des premiers retours utilisateurs.**
3. **Optimisations selon les retours reçus.**

---

## 🚀 Réalisations de la Séance du 21 Octobre 2026

### 1. 🎨 Refonte Complète du Site Vitrine (Inspiration Bannière Officielle & Dark Luxury Proptech)
- **Alignement Visuel Total avec la Bannière KeurGui :**
  - Univers sombre émeraude (`#030a08` & `#061c16`) avec halos de lueurs néon (`#00e676` / `#10b981`) et motif blueprint architectural d'immeuble en filigrane.
  - Slogan officiel fidèlement intégré : *« La gestion de vos biens à Dakar, aussi simple qu’un message WhatsApp »*.
  - Capsule officielle : *« 🏠 Suivi des loyers • 📄 Quittances PDF • ↗ Wave & Orange Money »*.

### 2. 📱 Showcase Smartphone 3D & Satellites en Lévitation (Motion CSS)
- **iPhone 16 Pro Dark Titanium :**
  - Rendu immersif avec Dynamic Island, horloge 9:41, et interface réelle KeurGui en mode sombre OLED.
  - **Jauges circulaires animées :** Anneaux de recouvrement (`100% Loyers Résidence Teranga` et `60% Recouvrement mensuel global`).
  - **Règlements réels à Dakar :** Lots à Mermoz, Almadies et Plateau avec badges verts *« ✓ Payé »*.
- **Satellites 3D en Apesanteur (Parallaxe & Floating) :**
  - *Satellite 1 :* Carte glassmorphism Quittance PDF certifiée A4 éjectée avec mention *"Téléchargement en 1 clic"*.
  - *Satellite 2 :* Bouton néon vert WhatsApp avec onde radar pulsante.
  - *Satellite 3 :* Badge transactionnel Wave & Orange Money (+250 000 FCFA).
  - *Satellite 4 :* Pastille checkmark 3D émeraude lumineuse.

### 3. ⚡ Visual Storytelling (Compréhension en 3 secondes chrono sans lire)
- Création d'une nouvelle section interactive `section-visual-flow` :
  - **Étape 1 :** Notification visuelle Mobile Money (Wave / Orange Money).
  - **Étape 2 :** Génération instantanée de la quittance officielle A4 avec tampon vert "ACQUITTÉ".
  - **Étape 3 :** Envoi en 1 clic dans la conversation WhatsApp du locataire.

### 4. 🔥 Barre de Rareté & Urgence ($100M Offers d'Alex Hormozi)
- **Barre de progression dynamique :** Affichage de `38 / 50 places VIP attribuées (76%) • Plus que 12 places gratuites à vie`.
- Effet shimmer de lumière en mouvement et bordure pulsante néon.
- Répercussion de la rareté dans le formulaire VIP en bas de page et dans la modale d'accès rapide.

### 5. 💬 Registre des retours bêta-testeurs
- **Retour Agent Immobilier (1er testeur) :** Validation du mode Agence avec commission 10% HT + TVA 18%.
- **Prochaine amélioration actée :** Mention légale d'honoraires fermes et non remboursables sur la facture de mandat.

---

## 💎 Séance d'Optimisation SaaS & Expérience Utilisateur (21 Octobre 2026 — Session 2)

### 1. 📅 Moteur Calendrier Périodique Multi-Mois / Multi-Années (Résolution du cas Nov 2026 / Janv 2027)
- **Problématique résolue :** Un bailleur consultant son tableau de bord en Janvier 2027 ou voulant retrouver l'historique d'un paiement de Novembre 2026 doit voir des données strictement cloisonnées par période.
- **Architecture de données développée :**
  - Ajout d'une structure `periods: { [year-month]: { status, paymentMethod, paidDate, receiptNo } }` pour chaque lot.
  - Si un bailleur navigue sur Novembre 2026 ou Janvier 2027, les statistiques de recouvrement, les jauges, les badges Wave/Orange Money/Espèces, les quittances PDF et les messages WhatsApp reflètent fidèlement le mois sélectionné.
  - Barre de contrôle supérieure élégante (`.period-navigator-bar`) : flèches `◀` et `▶`, sélecteurs dynamiques du mois (Janvier à Décembre) et de l'année (2025 à 2030), ainsi qu'un bouton de retour instantané `⚡ Ce mois-ci`.

### 2. 🛡️ Simplification Radicale des Formulaires & Suppression des Pré-remplissages Factices
- **Problématique résolue :** Tout le monde n'est pas à l'aise avec la tech. Des champs pré-remplis de faux noms ("Locataire Appt 1A", "+221 77 000 00 01") ou de montants par défaut créent de la confusion et obligent l'utilisateur à effacer du texte manuellement.
- **Correctifs apportés :**
  - Formulaire de création d'immeuble et générateur de lots : suppression intégrale des valeurs injectées dans les inputs (`value=""`).
  - Ajout d'exemples discrets et bienveillants dans les placeholders (`Nom du locataire (ex: Moussa Fall)`, `WhatsApp (ex: +221 77 123 45 67)`).
  - Statut par défaut adapté : les logements sont créés en statut d'attente de loyer pour la période choisie, permettant une mise en route intuitive.

### 3. 🚫 Suppression Définitive des Boîtes de Dialogue Bloquantes du Navigateur
- **Problématique résolue :** Les popups natifs du navigateur demandant d'appuyer sur "OK" cassaient la fluidité et donnaient une impression de logiciel ancien ou bugué.
- **Correctifs apportés :**
  - Éradication de tous les `confirm()` et `alert()` natifs.
  - Remplacement par des toasts in-app fluides et non-bloquants (`#toastNotification`) avec icônes animées, disparaissant automatiquement après 3,5 secondes.

### 4. 💎 Refonte Élite du Formulaire VIP & Call-to-Action ($100M Offers)
- **Design Dark Obsidian Emerald Glassmorphism :**
  - Bordure néon avec halo vert émeraude, champs polis avec surbrillance au focus.
  - Badge de valeur irréversible : *« 💎 PACK PIONNIER : 0 FCFA À VIE (Valeur : 25 000 FCFA/mois) »*.
  - Call-to-action ultra-persuasif et engageant : *« ⚡ Réclamer mon accès gratuit à vie (12 places restantes) → »*.
  - Garanties concrètes : 0 engagement, 0 carte bancaire requise, configuration assistée par WhatsApp.

### 5. 📱 Intégration du Vrai Dashboard KeurGui dans le Téléphone de la Vitrine
- **Remplacement du mockup générique :** L'écran de l'iPhone 16 Pro intègre désormais la réplique exacte et fonctionnelle de l'application SaaS réelle KeurGui :
  - En-tête avec logo officiel, profil de Jean Philippe et pastille Dakar.
  - Barre de période dynamique avec sélecteur de mois (`◀ Octobre 2026 ▶ [Ce mois-ci]`).
  - Les 3 cartes de statistiques clés réelles (Encaissé : 1 850 000 F, Reste : 250 000 F, Taux : 88%).
  - Filtres par statut (`Tous (6)`, `Payés (5)`, `En attente (1)`).
  - Lots réels des immeubles (*Résidence Teranga* et *Immeuble Horizon*) avec les vrais badges Wave, Orange Money, boutons de Quittance PDF et relances WhatsApp.
  - Viewport scrollable fluide avec scrollbar discrète.### 6. 🔍 Audit Complet & Résolution des Dysfonctionnements (Session 3)
- **Diagnostic et Correction du Bug JavaScript (app.js) :**
  - Identification précise d'un doublon de balises de fermeture lors du rendu des immeubles (`app.js:759`), générant une erreur `Uncaught SyntaxError: Unexpected token '<'`.
  - Ce blocage syntaxique empêchait le parseur JS de s'exécuter, neutralisant tous les écouteurs d'événements (bouton 🔄, modales d'encaissement, quittances, filtres et sélecteur de période).
  - Correction immédiate et validation via navigateur sans échec : 0 erreur dans la console, réactivité rétablie à 100%.
- **Sélecteur de Période Épuré ("Visible mais Subtil") :**
  - Remplacement de la section bloc imposante par une barre d'en-tête exécutive moderne (`.dashboard-executive-header`).
  - Le sélecteur devient une capsule discrète en pilule blanche (`.period-pill-subtle`) avec micro-flèches SVG, sélecteurs intégrés sans bordures lourdes et bouton compact `Mois en cours`.
- **Alignement Visuel Authentique du Mockup Téléphone (index.html & landing.css) :**
  - Remplacement des styles sombres par le véritable thème clair, épuré et premium de l'application SaaS KeurGui.
  - Cartes blanches sur fond gris doux (`#f8fafc`), typographies ardoise contrastées, badges officiels Wave (`#0284c7`), Orange Money (`#ea580c`), boutons verts et barre de statut iOS fidèle.

### 7. 🛡️ Audit de Sécurité & Optimisation Définitive des Quittances (Session 4)
- **Résolution Définitive du Problème des Pages Multiples en PDF :**
  - **Diagnostic :** Deux causes conjuguées créaient le bug des pages multiples :
    1. Dans `@media print`, toutes les modales (`.modal-overlay`) étaient affichées en `display: block !important`, imprimant toutes les fenêtres inactives de l'application les unes après les autres.
    2. La hauteur de la feuille de quittance débordait légèrement au-delà de 1123px, provoquant un saut de page pour quelques lignes de signatures.
  - **Solution mise en place :**
    - `@media print` nettoyé : strict masquage de toutes les modales inactives (`.modal-overlay:not(.active) { display: none !important; }`).
    - Compactage élégant des styles de la quittance (`padding: 20px 26px`, hauteurs de lignes et espacements aérés mais compacts).
    - Verrou mathématique strict dans `exportElementToA4Pdf` : suppression automatique de toute page excédentaire (`pdf.deletePage(i)`).
    - **Résultat :** Exactement 1 seule page A4 nette, cadrée et conforme, sur ordinateur comme sur smartphone.
- **Automatisation Fluide de l'Envoi WhatsApp :**
  - Clic sur « 💬 Télécharger & Envoyer WhatsApp » :
    1. Le PDF officiel 1 page A4 est automatiquement téléchargé dans l'appareil.
    2. Toast d'accompagnement clair : *« Quittance prête ! WhatsApp s'ouvre : cliquez sur le trombone 📎 pour joindre la quittance. »*
    3. WhatsApp s'ouvre instantanément vers le numéro du locataire avec le message officiel pré-rempli (distinct du message de relance).
- **Renforcement de la Sécurité Globale :**
  - Éradication des risques XSS via `escapeHtml()`.
  - En-têtes HTTP de sécurité renforcés dans `vercel.json` (anti-clickjacking, nosniff, permissions policy).
  - Sécurisation des liens `window.open` avec `noopener, noreferrer`.

---

### 8. 🎯 Réponse Intégrale aux Retours Vocaux de Jean Philippe (Session 5)

#### A. Verrou Anti-Multi-Pages Strict sur Smartphone & Écrans Mobiles
- **Diagnostic :** Sur les smartphones (largeur < 768px), le CSS `@media (max-width: 768px)` appliquait des règles forçant la grille de quittance en une seule colonne verticale (`grid-template-columns: 1fr`). La feuille s'allongeait artificiellement à ~1300px lors de la capture html2canvas sur téléphone, générant 2 pages au téléchargement.
- **Résolution :**
  - Création de règles CSS prioritaires `#pdf-render-sandbox` et `#pdf-isolated-clone` avec `!important` verrouillant le gabarit strict A4 (794 px, 2 colonnes côte-à-côte, padding compact 16px 22px).
  - Émulation de résolution desktop dans html2canvas (`windowWidth: 1024`) pour neutraliser toute règle media query mobile pendant la capture.
  - **Résultat :** Le document généré est STRICTEMENT et TOUJOURS d'une seule page A4 sans coupure, qu'il soit généré depuis un smartphone ou un ordinateur.

#### B. Simplification du Message WhatsApp Pré-rempli (Poli, Court & Droit au But)
- **Constat de Jean Philippe :** Le message précédent était trop long, trop technique et répétitif par rapport au contenu du document PDF.
- **Nouveau format 100% épuré :**
  > *« Bonjour Mamadou Diallo,*
  > 
  > *Veuillez trouver ci-joint votre quittance de loyer de Octobre 2026 (Appartement 3B).*
  > 
  > *Merci et très bonne journée ! »*

#### C. Partage Direct du PDF en Pièce Jointe WhatsApp (Web Share API Niveau 2)
- Sur les smartphones (Chrome Android, Safari iOS), intégration de `navigator.share({ files: [pdfFile], text: message })` :
  - La feuille de partage native du smartphone s'ouvre directement.
  - L'utilisateur sélectionne WhatsApp : **le PDF est déjà joint en pièce jointe dans la conversation** avec le message pré-rempli. Plus besoin d'aller fouiller dans les dossiers de téléchargement de son téléphone !
- Sur ordinateur / Desktop : téléchargement direct en un clic du PDF + ouverture de WhatsApp Web + guidage visuel immédiat par toast.

#### D. Nouveau Module « Registre & Historique des Quittances »
- **Réponse au besoin exprimé :** Pouvoir retrouver en 3 secondes n'importe quelle quittance passée (mois en cours, il y a 4 mois, 1 an ou 2 ans) réclamée par un locataire sans avoir à chercher manuellement dans ses fichiers.
- **Interface & Fonctionnalités :**
  - Bouton d'accès rapide dans la barre d'action : `📑 Historique Quittances (10)`.
  - Modale dédiée grand format avec :
    - Recherche instantanée multi-critères (nom du locataire, N° de quittance, nom d'immeuble, appartement).
    - Filtre par Année (2026, 2025, 2024, Toutes).
    - Filtre par Immeuble / Bien.
    - Cartes individuelles avec récapitulatif complet (référence, montant, date, moyen de paiement).
    - 3 boutons d'action rapide en 1 clic pour chaque quittance :
      1. `👁️ Voir` : ré-ouvre la quittance certifiée dans la visionneuse officielle.
      2. `📥 PDF` : re-télécharge instantanément le PDF 1 page de cette période passée.
      3. `💬 WhatsApp` : réexpédie la quittance directement au locataire sur WhatsApp avec le message court personnalisé.
- **Persistance :** Sauvegarde locale dans `localStorage` (`keurgui_receipts_history`) synchronisée en temps réel à chaque encaissement de loyer.

---

## 🛡️ Séance du 23 Octobre 2026 (Session 6) — Module « Gestion de la Caution & Reçu Officiel A4 »

### 1. 💡 Diagnostic & Contexte Sénégalais
- Au Sénégal, la pratique et la loi sur les baux fixent couramment la caution à **1 à 2 mois de loyer** en garantie à l'entrée.
- **Problématique résolue :** 90% des litiges locataires/bailleurs à Dakar surviennent à la restitution de la caution lors du départ (montant contesté, papier d'entrée introuvable).
- Les propriétaires n'avaient aucun aperçu du montant total des cautions qu'ils détiennent en réserve et doivent restituer un jour.

### 2. 📊 Nouvelle Statistique Clé « Cautions en Réserve »
- Ajout de la 4ème carte maîtresse sur le tableau de bord :
  - **Indicateur :** `Cautions en Réserve : X FCFA` (ex: 5 620 000 FCFA).
  - **Badge dynamique :** `🛡️ X cautions en réserve`.
  - Rappel comptable pour les bailleurs : cette réserve de trésorerie est sécurisée pour les locataires.

### 3. 🏷️ Badges & Accès 1-Clic sur Chaque Logement
- Dans chaque ligne de logement (`.unit-row`) :
  - Pastille élégante : `🛡️ Caution : 460 000 FCFA (2 mois) [En réserve]`.
  - Bouton d'action directe : `[ 📄 Reçu ]` pour ouvrir instantanément le document officiel.

### 4. 📄 Reçu Officiel de Caution & Dépôt de Garantie (1 page A4 Conforme COCC)
- Modale grand format dédiée avec feuille certifiée :
  - Titre : **« REÇU OFFICIEL DE DÉPÔT DE GARANTIE »**.
  - Mention : *« Caution Locative d'Entrée • Équivalent à 2 mois de loyer »*.
  - Références complètes : N° de reçu (`DEP-2026-XXXX`), bailleur/mandataire, locataire preneur, adresse et type de bien.
  - Montant en chiffres et en toutes lettres (*Deux cent cinquante mille Francs CFA*).
  - **Clause légale stricte sénégalaise (COCC - Code des Obligations Civiles et Commerciales) :** délai légal de restitution de 30 jours après remise des clés et état des lieux contradictoire, interdiction d'imputer sur le dernier mois de loyer.
  - Tampon officiel numérique KeurGui et bloc signatures bailleur & preneur.

### 5. 💬 Partage WhatsApp & Téléchargement PDF
- **Téléchargement PDF :** Calibré dans la sandbox A4 isolée (garantie 1 seule page sans débordement).
- **Partage WhatsApp :** Pièce jointe directe sur smartphone (Web Share API) ou redirection WhatsApp Web avec message chaleureux personnalisé :
  > *« Bonjour [Nom], veuillez trouver ci-joint votre reçu officiel de caution pour votre emménagement à [Logement] ([Montant] FCFA). Document certifié KeurGui. Bienvenue et très bonne installation ! »*

### 6. 🔄 Gestion du Statut & Restitution de Caution
- Bouton rapide dans la modale : `[ 🔄 Marquer Restituée ]` / `[ Remettre en Réserve ]`.
- Met à jour immédiatement le compteur de réserves et bascule le badge sur `[ Restituée ]` pour un suivi rigoureux en fin de bail.

### 7. ⚡ Formulaires Simplifiés avec Présélections 1-Clic
- Dans l'ajout de logement unique et d'immeuble :
  - 4 boutons de calcul automatique : `[ 1 mois ]`, `[ 2 mois (standard) ]`, `[ 3 mois ]`, `[ 0 (Aucune) ]`.
  - Recalcul en temps réel dès que l'utilisateur tape le montant du loyer.
  - Choix du mode de versement : Wave, Orange Money, Espèces ou Virement Bancaire.

### 8. 🔍 Diagnostic & Correction Immédiate (Bug d'affichage des biens)
- **Problème rencontré :** Sur l'application, les cartes supérieures s'affichaient bien mais la section des logements (`buildingsContainer`) restait vide/blanche, et le bouton « + Ajouter un bien » ne réagissait pas.
- **Cause identifiée :** Dans `app.js` (`renderProperties`), une accolade fermante `}` manquait sur le bloc `else` du rendu des boutons d'action. La variable `depositBadge` se retrouvait dans un scope non accessible lors du traitement des logements déjà payés (`status === 'paid'`), provoquant une interruption de script (`ReferenceError`).
- **Correction apportée :** Accolade refermée proprement, scope rétabli.
- **Validation automatisée :**
  - Script de test Chromium headless (`test_interactions.ps1`) validé à 100% (`Test Status: SUCCESS`).
  - Vérification de l'ouverture du modal d'ajout (`openAddPropertyModal`), du modal de caution (`openDepositModal`), et du rendu complet de tous les immeubles et lots avec leurs badges.
  - Déploiement immédiat sur GitHub et Vercel avec le cache buster `v2.3`.

---

## 🚀 Séance du 23 Octobre 2026 (Session 7) — Perfectionnement Reçu de Caution PDF & Saisie Libre des Quartiers / Banlieue

### 1. 💡 Retours Utilisateur & Besoins Identifiés
1. **Reçu de Caution PDF tronqué / incomplet :**
   - Sur certains écrans (notamment mobiles et petits viewports), le bas du PDF généré pour le reçu de caution était coupé (les cases de signatures, le cadre de conditions et le tampon n'apparaissaient pas complètement).
2. **Quartier / Localisation restreint :**
   - Dans les formulaires d'ajout de bien et de création d'immeuble, le champ Quartier était un `<select>` rigide avec seulement 7 à 9 options de Dakar centre (Mermoz, Almadies, Plateau...).
   - Impossible pour un propriétaire de saisir un bien situé en banlieue (ex: *Yeumbeul, Comico, Pikine, Guédiawaye, Keur Massar, Rufisque*) ou dans d'autres villes du Sénégal (*Thiès, Saly, Mbour, Saint-Louis...*).

### 2. 📄 Résolution Définitive du PDF A4 (Garantie 100% 1 Page Sans Coupure)
- **Diagnostic de la coupure :**
  - Dans `exportElementToA4Pdf()`, si le contenu dépassait la hauteur A4 (289 mm) ou si des options `pagebreak: avoid-all` déclenchaient un saut de page, html2pdf créait une 2e page.
  - La suppression automatique de la page 2 (`pdf.deletePage(2)`) tronquait alors irrémédiablement le bas du document.
- **Solution mise en place :**
  - **Mise à l'échelle dynamique intelligente (Proportional Fitting) :** Dès qu'un débordement est détecté par `html2pdf`, au lieu de jeter la 2e page, le canvas complet (à résolution retina x2) est automatiquement redimensionné proportionnellement pour rentrer parfaitement à 100% dans la page 1 avec des marges aérées de 6mm.
  - **Styles stricts dans la Sandbox PDF (`style.css`) :**
    - `table-layout: fixed` avec largeurs de colonnes explicites (`44%`, `32%`, `24%`).
    - Neutralisation des rotations CSS (`transform: none !important`) sur les badges et tampons pour éliminer tout rognage de bordure par html2canvas.
    - Marges et paddings équilibrés (`padding: 16px 22px`, typographie optimisée).
    - Feedback visuel : bouton avec état de chargement dynamique `[ ⏳ Création du PDF... ]` puis validation `[ ✅ Téléchargé (1 page) ! ]`.

### 3. 📍 Saisie Libre de Tous les Quartiers avec Suggestions Datalist (85+ Quartiers du Sénégal)
- Remplacement des balises `<select id="propNeighborhood">` et `<select id="bldNeighborhood">` par des `<input type="text" list="neighborhoodSuggestions">`.
- **Liberté totale :** L'utilisateur peut saisir n'importe quel texte ou adresse sur mesure (*ex: "Yeumbeul Comico", "Cité Mixta", "Rufisque Arafat", "Thiès", "Bambilor"*).
- **Auto-complétion intelligente :** Un `<datalist id="neighborhoodSuggestions">` riche de plus de 85 localités sénégalaises propose des suggestions instantanées :
  - **Dakar Ville :** Mermoz, Almadies, Ngor, Ouakam, Mamelles, Fann Résidence, Point E, Plateau, Hann Maristes, Bel-Air, Sacré-Cœur, Liberté 1 à 6, Médina, Yoff, etc.
  - **Banlieue de Dakar :** Parcelles Assainies, Grand Yoff, Pikine, Guédiawaye, Yeumbeul, Yeumbeul Nord/Sud, Comico, Keur Massar, Malika, Thiaroye, Mbao, Diamaguène, Rufisque, Bargny, Diamniadio, Sangalkam, Bambilor, etc.
  - **Régions & Villes du Sénégal :** Saly Portudal, Mbour, Somone, Ngaparou, Thiès, Saint-Louis, Touba, Mbacké, Ziguinchor, Kaolack, etc.
- **Affichage naturel dans les adresses :**
  - Ajout du helper `formatPropertyLocation(neighborhood)` : affiche proprement `"Yeumbeul Comico, Dakar"`, `"Mermoz, Dakar"`, `"Thiès"`, `"Saly Portudal"` sans répétition superflue.

### 4. 🧪 Validation Automatisée Locale & Tests Headless
- **Suite de tests automatisée Chromium headless (`run_full_suite.ps1` et `run_mobile_suite.ps1`) :**
  - Test Desktop (1200x900) : **`TEST_STATUS: SUCCESS`**
  - Test Mobile iPhone (375x812) : **`MOBILE_TEST_STATUS: SUCCESS`**
  - Vérification de la présence des 85 suggestions dans le DOM.
  - Ajout réel d'un bien avec quartier libre `"Yeumbeul Comico"` et d'un immeuble `"Rufisque Arafat"` vérifiés dans le LocalStorage et sur les cartes.
  - Vérification de l'ouverture du modal de caution avec affichage d'adresse conforme.
  - Vérification de la génération du PDF : `PDF_PAGES: 1`, taille de blob valide (`340 KB`), zéro coupure de section.
- Incrémentation du cache-buster asset à `v=2.5`.

---
