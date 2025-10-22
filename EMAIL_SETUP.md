# Configuration Email avec Resend

## 🚀 Installation et Configuration

### 1. Installer les dépendances

```bash
npm install
# ou
bun install
```

### 2. Configuration Resend

1. **Créer un compte Resend** : https://resend.com
2. **Obtenir votre API Key** dans le dashboard Resend
3. **Configurer votre domaine** (optionnel mais recommandé)

### 3. Variables d'environnement

Créez un fichier `.env` à la racine du projet (copiez depuis `env.example`) :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=contact@booknglow.com
PORT=3001
```

### 4. Démarrer le serveur

Pour le développement local, vous devez démarrer deux serveurs :

```bash
# Option 1: Démarrer les deux serveurs en même temps
npm run dev:full

# Option 2: Démarrer séparément
# Terminal 1: Serveur API
npm run dev:server

# Terminal 2: Application React
npm run dev
```

### 5. Déploiement en production

Pour déployer en production, vous devrez :

1. **Déployer le serveur Express** sur une plateforme comme Railway, Render, ou Heroku
2. **Déployer l'application React** sur Vercel ou Netlify
3. **Configurer les variables d'environnement** sur votre plateforme de déploiement
4. **Configurer votre domaine** dans Resend pour les emails

### 6. Personnalisation

Dans le fichier `server.js`, modifiez :

- **Email de destination** : Modifiez `CONTACT_EMAIL` dans votre `.env`
- **Domaine d'envoi** : Remplacez `noreply@booknglow.com` par votre domaine
- **Contenu des emails** : Personnalisez les templates HTML

## 📧 Fonctionnalités

### Email de notification (pour l'équipe)

- Reçu à chaque nouvelle inscription
- Contient toutes les informations du prestataire
- Design professionnel avec les couleurs de l'app

### Email de confirmation (pour l'utilisateur)

- Envoyé automatiquement après inscription
- Template de bienvenue personnalisé
- Informations sur les prochaines étapes

## 🔧 Test en local

1. **Démarrer les serveurs** :

```bash
npm run dev:full
```

2. **Vérifier que l'API fonctionne** :

   - Ouvrez http://localhost:3001/api/health
   - Vous devriez voir : `{"status":"OK","message":"Server is running"}`

3. **Tester l'inscription** :
   - Allez sur http://localhost:5173
   - Remplissez le formulaire de la waitlist
   - Vérifiez que les emails sont envoyés

## 🚨 Sécurité

- ✅ Validation des données côté serveur
- ✅ Protection contre les attaques CSRF
- ✅ Limitation du taux de requêtes (à implémenter)
- ✅ Validation des emails

## 📝 Logs et Monitoring

Les erreurs sont loggées dans la console du serveur. Pour la production, configurez un service de monitoring comme Sentry.

## 🎨 Personnalisation des emails

Les templates HTML sont dans `server.js`. Vous pouvez :

- Modifier les couleurs
- Ajouter votre logo
- Personnaliser le contenu
- Ajouter des liens vers vos réseaux sociaux

## 🐛 Dépannage

### Erreur 404

- Vérifiez que le serveur Express est démarré sur le port 3001
- Vérifiez que l'URL dans `src/api/waitlist.ts` est correcte

### Erreur d'envoi d'email

- Vérifiez votre clé API Resend
- Vérifiez que votre domaine est configuré dans Resend
- Vérifiez les logs du serveur pour plus de détails

### CORS Error

- Le serveur Express est configuré avec CORS pour accepter les requêtes depuis localhost:5173
