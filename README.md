# Trouve l'Équipe — Générateur

Générateur de quiz vidéo TikTok pour **Unis par le Foot**, sur le principe **"devine l'équipe à partir de 11 indices visuels"**.

> Inspiré du format @footballmaaaster, refondu dans la charte visuelle de [QuizFootGen](https://quizfootgen.netlify.app).

---

## 🎮 Deux modes de quiz

### 🌍 → 🏟️ Trouve le club
On affiche les **drapeaux des 11 nationalités** d'un onze de départ sur le terrain. Le public doit deviner **quel club** c'est. À la révélation : **logo du club** + nom.

### 🏟️ → 🌍 Trouve la sélection
On affiche les **logos des 11 clubs** où jouaient les joueurs d'une sélection nationale. Le public doit deviner **quelle sélection** c'est. À la révélation : **drapeau de la sélection** + nom.

---

## ✨ Fonctionnalités

### Éditeur de cartes
- Sélecteur de mode (club ↔ sélection)
- 7 formations (4-3-3, 4-4-2, 4-2-3-1, 3-5-2, 3-4-3, losange, 5-3-2)
- Terrain interactif : clic sur une position → picker de drapeau/club
- Aperçu live au format TikTok 9:16
- Champ "réponse" avec logo/drapeau qui apparaîtra à la révélation

### Bibliothèques inline (zéro dépendance réseau)
- **~70 nations** en SVG (drapeaux footballistiques majeurs)
- **~70 clubs** stylisés (Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Eredivisie, Liga Portugal, Süper Lig, Pro League, Scottish PL, MLS, Saudi PL, Argentine, Brasileirão)
- Recherche par nom ou par championnat dans le picker

### Mode quiz / lecture auto
- Lecture automatique paramétrable : nombre de cartes (défaut 6), durée par question (10s), durée réponse (3s)
- Séquence complète : Intro → 6 questions avec timer → Récap final → Outro CTA
- Barre de temps fine en haut du stage (verte → jaune → rouge clignotant)
- Plein écran pour capture vidéo (touche `F`)
- Navigation manuelle alternative (`←` `→`, `R` pour révéler, `Espace` play/pause)

### Personnalisation visuelle
- **6 thèmes de fond** : Rouge / Vert / Bleu nuit / Noir / Violet / Doré
- Watermark personnalisable (coin haut-droit)
- Titre du label modifiable

### Données
- Persistance localStorage (cartes + réglages)
- Export / Import JSON pour backup ou partage
- Migration automatique des anciennes cartes

---

## 🚀 Utilisation

L'app est un **fichier HTML unique autonome**. Aucun build, aucun backend.

### En local
Ouvre `index.html` dans n'importe quel navigateur.

### Sur Netlify
Déploiement statique automatique depuis ce repo. Le fichier `index.html` est servi à la racine.

### Workflow d'édition
1. Édite `index.html` directement via github.com (✏️ Edit) ou vscode.dev (touche `.` sur le repo)
2. Commit avec un message clair
3. Netlify redéploie en 30-60 secondes

---

## 🎬 Enregistrement pour TikTok

1. Onglet **Mode quiz** → règle nb de cartes (6), durée question (10s), durée réponse (3s)
2. Clique sur **⛶ Plein écran** pour mettre la carte en plein écran
3. Lance ton enregistreur d'écran (OBS, capture Windows `Win+G`, partage d'onglet Chrome, etc.)
4. Clique sur **▶ Lecture auto**
5. La séquence joue ~1 min 30s, prête à être uploadée sur TikTok

---

## 📐 Architecture

- **HTML/CSS/JS vanilla** dans un seul fichier
- **Fonts** : Anton + Inter (Google Fonts)
- **Drapeaux & logos** : SVG inline générés par JS, aucune image externe
- **Persistance** : `localStorage` (clé `trouve-equipe-v2`)
- **Format des cartes** :
  ```js
  {
    id: "c-xxxx",
    mode: "team" | "nation",
    name: "Nom de la réponse",
    formation: "4-3-3",
    positions: [{ code: "fr" | "psg" }, ...11],
    answerCode: "rm" | "fr"  // logo club (mode team) ou drapeau nation (mode nation)
  }
  ```

---

## 📝 Versions

### v1.0 (date à compléter)
- Première version publique
- Deux modes (Trouve le club / Trouve la sélection)
- 70 nations + 70 clubs inline
- Lecture auto avec timer
- 6 thèmes de fond
- Reveal avec logo/drapeau

---

## 💡 Améliorations possibles

- [ ] Sync cloud via Netlify Functions + Blobs (code `UNISPARFOOT` comme QuizFootGen)
- [ ] Ajout/édition de clubs custom (sigle + couleurs personnalisées)
- [ ] Upload d'images de logos pour les clubs hors liste
- [ ] Voix off OpenAI TTS sur l'auto-play (annonce des questions et des réponses)
- [ ] Export PNG/MP4 direct des cartes
- [ ] Fusion avec QuizFootGen sous une app unique avec menu d'accueil
- [ ] PWA installable (manifest + service worker)
- [ ] Mode niveau de difficulté (débutant / pro / expert) avec border-card colorée comme QFG

---

## 🔗 Apps connexes

- [QuizFootGen](https://quizfootgen.netlify.app) — Devine le joueur à partir de ses clubs (3 indices, 4 niveaux de difficulté)

---

*Made with ❤️ pour Unis par le Foot*
