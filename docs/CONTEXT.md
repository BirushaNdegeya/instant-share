# File Sharing App

Une application permettant aux utilisateurs de partager facilement des fichiers via une connexion Wi-Fi ou un point d'hébergement.

## Caractéristiques principales

### 📤 Envoi et réception de fichiers
- Support pour images, vidéos, audio et autres types de fichiers
- Connexion via Wi-Fi ou point d'hébergement
- Transfert de fichiers sécurisé

### 📂 Gestion des fichiers
Navigation par catégories :
- Tous les fichiers
- Images
- Audio
- Vidéos

### 🔌 Gestion des connexions
- Connexion requise au Wi-Fi ou point d'hébergement
- Déconnexion possible à tout moment
- Suivi du nombre de fichiers envoyés
- Statut des transferts en temps réel

### 👤 Gestion du profil
- Personnalisation du nom d'expéditeur
- Interface utilisateur intuitive

## Guide d'utilisation

1. **Démarrage**
   - Lancement de l'application
   - Accès à l'interface principale

2. **Connexion réseau**
   - Connexion à un réseau Wi-Fi
   - Ou activation d'un point d'hébergement

3. **Sélection des fichiers**
   - Navigation dans les onglets catégorisés
   - Sélection du fichier à partager

4. **Partage de fichiers**
   - Utilisation du bouton d'envoi
   - Attente de connexion du destinataire
   - Début du transfert
   - Suivi du nombre de fichiers envoyés

5. **Suivi des transferts**
   - Affichage du statut en temps réel
   - Barre de progression

6. **Gestion du profil**
   - Accès aux paramètres du profil
   - Modification du nom d'expéditeur

7. **Déconnexion**
   - Option de déconnexion à tout moment
   - Fermeture sécurisée de la session

## Stack Technique

### 🛠️ Technologies principales
- **React Native avec TypeScript**
  - Framework principal pour le développement mobile cross-platform
  - Utilisation d'Expo pour la gestion du projet
  - Expo Router pour la navigation

### 📚 Bibliothèques principales
- **React Native Paper**
  - Composants UI Material Design
  - Thème personnalisable
  - Composants prêts à l'emploi

- **Expo FileSystem**
  - Gestion des fichiers locaux
  - Accès au système de fichiers
  - Opérations de lecture/écriture

- **Expo Sharing**
  - Partage de fichiers natif
  - Intégration avec les applications système

- **Expo Network**
  - Gestion des connexions réseau
  - Détection du statut Wi-Fi
  - Configuration du point d'accès

- **@react-native-community/netinfo**
  - Information détaillée sur la connexion
  - Surveillance des changements réseau

### 💾 Base de données
- **SQLite via expo-sqlite**
  - Stockage local des données utilisateurs
  - Historique des transferts de fichiers
  - Gestion des fichiers reçus

### 📱 Autres dépendances essentielles
- **@react-navigation/native**
  - Navigation entre les écrans
  - Gestion de la pile de navigation

- **expo-document-picker**
  - Sélection de fichiers
  - Support multi-formats

- **expo-media-library**
  - Accès à la bibliothèque média
  - Gestion des permissions
