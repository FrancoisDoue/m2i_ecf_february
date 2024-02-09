# ecf - Application de gestion de projet

## Initialiser et lancer le back-end


dans votre SGBD, créez une nouvelle base de données:
```sql
CREATE DATABASE IF NOT EXISTS `your_new_db`
```

Créez-vous un `.env.local` à partir du `.env` et configurez les accès à votre base de données  

**Attention:**
- **le front-end ne disposant pas encore de fichier de configuration, je vous déconseille de changer le *`PORT`***

---
Executez les commandes suivantes dans le terminal

```bash
cd ./back-end
npm i
```

Puis lancez les fixtures
```bash
npm run fixtures
# le chargement prendra quelques secondes
```
Enfin, lancez le server: 
```bash
# Si vous possédez nodemon installé en global sur votre machine :
npm start
# sinon :
node app.js
```


## Initialiser et lancer le front-end

Ouvrez un nouveau terminal puis exécutez les commandes suivantes

```bash
cd ./front-end
npm i
```
Enfin, lancez le server: 
```bash
npm run dev
```

### Deux comptes sont disponibles pour la connexion:  
- login : **admin** | password : **admin**  
- login : **user** | password : **user**

## Endpoints de l'API

|URI                                |METHOD |Auhentification|description                                    |
|-----------------------------------|-------|---------------|-----------------------------------------------|
|/user/register                     |POST   |non            |S'inscrire                                     |
|/user/login                        |POST   |non            |Se connecter ->  envoyer un token de connexion |
|/project                           |GET    |oui            |Afficher une liste de projets                  |
|/project                           |POST   |oui            |Ajouter un nouveau projet                      |
|/project/`<projet-id>`             |GET    |oui            |Afficher un projet et ses tâches associées     |
|/project/`<projet-id>`             |PUT    |oui            |Modifier un projet                             |
|/project/`<projet-id>`             |DELETE |oui            |Supprimer un projet (et les tâches associées)  |
|/project/`<projet-id>`             |POST   |oui            |Ajouter une tâche à un projet                  |
|/project/`<projet-id>`/`<tache-id>`|PUT    |oui            |Modifier une tâche d'un projet                 |
|/project/`<projet-id>`/`<tache-id>`|DELETE |oui            |Supprimer une tâche d'un projet                |

### Body acceptés par l'API
```json
// pour les endpoints /user/*
{
    "login": "your login", // doit être une chaine de caractère
    "password": "y0ur_Pa$swoRd" // idem
}
// pour les endpoints /projet/*
{
    "title": "must be a string",
    "description": "must be a string too"
}
// pour les endpoints /projet/**/*
{
    "title": "must be a string",
    "description": "must be a string too",
    "priority": 0, // optionnel
    "progress": 0  // optionnel
}
```
