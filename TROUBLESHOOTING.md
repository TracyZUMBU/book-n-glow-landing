# 🐛 Guide de Dépannage - API Email

## Erreur CORS

### Symptômes

```
Blocage d'une requête multiorigine (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante située sur http://localhost:3001/api/waitlist. Raison : échec de la requête CORS.
```

### Solution

1. **Vérifiez que le serveur Express est démarré** :

```bash
npm run dev:server
```

2. **Vérifiez que l'API répond** :

```bash
curl http://localhost:3001/api/health
```

3. **Redémarrez les serveurs** :

```bash
# Arrêtez les serveurs (Ctrl+C)
npm run dev:full
```

## Erreur 404

### Symptômes

```
HTTP/1.1 404 Not Found
```

### Solution

- Vérifiez que le serveur Express est démarré sur le port 3001
- Vérifiez l'URL dans la console : `http://localhost:3001/api/waitlist`

## Erreur d'envoi d'email

### Symptômes

```
Erreur lors de l'envoi des emails
```

### Solution

1. **Vérifiez votre clé API Resend** dans le fichier `.env`
2. **Vérifiez que votre domaine est configuré** dans Resend
3. **Vérifiez les logs du serveur** pour plus de détails

## Tests de diagnostic

### 1. Test de santé de l'API

```bash
curl http://localhost:3001/api/health
```

Devrait retourner : `{"status":"OK","message":"Server is running"}`

### 2. Test de l'API waitlist

```bash
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","email":"test@example.com","activity":"Testeur"}'
```

### 3. Vérification des ports

```bash
# Vérifier que les ports sont libres
lsof -i :3001  # Serveur API
lsof -i :5173  # Application React
```

## Logs utiles

### Serveur Express

Les logs apparaissent dans le terminal où vous avez lancé `npm run dev:server` :

```
🚀 Server running on http://localhost:3001
📧 API endpoint: http://localhost:3001/api/waitlist
2024-01-15T10:30:00.000Z - POST /api/waitlist - Origin: http://localhost:5173
```

### Application React

Les erreurs apparaissent dans la console du navigateur (F12).

## Configuration CORS

Si vous avez encore des problèmes CORS, vérifiez que votre configuration dans `server.js` inclut :

```javascript
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

## Variables d'environnement

Vérifiez que votre fichier `.env` contient :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=contact@book-n-glow.com
PORT=3001
```

## Redémarrage complet

Si rien ne fonctionne :

1. Arrêtez tous les serveurs (Ctrl+C)
2. Supprimez `node_modules` et `package-lock.json`
3. Réinstallez : `npm install`
4. Redémarrez : `npm run dev:full`
