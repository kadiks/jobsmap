# Jobmaps

## Installation

### Backend

Créer un fichier `.env` dans `./back` avec les variables d'environnements dans le Trello

#### Variables d'environnements

Les variables d'environnements utilisés sont les suivantes :

```
client_id (API Pole emploi)
client_secret (API Pole emploi)
grant_type (API Pole emploi)
scope (API Pole emploi)
cache_sec (Temps de cache de l'API en minute)
```

#### Commandes

```
cd back
npm i
npm start
```

### Frontend

```
cd client
npm i
npm run dev
```

## Coding practices

## Déploiement

- Merge all branches and test on `develop`
- Merge `develop` on `main`
- Push `main` and it will push on Heroku (automagically)
- Then build front : `cd client`
- `npm run predeploy`
- `cd ..`
- `git commit -m ...`
- `git push origin main`
