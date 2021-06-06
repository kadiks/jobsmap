# Jobmaps

## Installation

### Backend

Créer un fichier `.env` dans `./back` avec les variables d'environnements dans le Trello

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

## Déploiement

- Merge all branches and test on `develop`
- Merge `develop` on `main`
- Push `main` and it will push on Heroku (automagically)
- Then build front : `cd client`
- `npm run predeploy`
- `cd ..`
- `git commit -m ...`
- `git push origin main`
