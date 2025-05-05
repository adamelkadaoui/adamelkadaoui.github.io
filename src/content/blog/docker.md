---
title: "Tutoriel : Introduction à Docker pour les débutants"
description: "Découvrez les bases de Docker et apprenez à créer et exécuter vos premiers conteneurs."
pubDate: "2024-09-07"
heroImage: "/blog/docker/hero-docker.webp"
tags: ["docker", "containers", "devops"]
---

## Introduction

Docker est un outil incontournable pour les développeurs modernes. Il permet de créer, déployer et exécuter des applications dans des conteneurs légers et portables. Dans ce tutoriel, nous allons explorer les bases de Docker et apprendre à créer un conteneur simple.

---

## Pourquoi utiliser Docker ?

1. **Portabilité** : Les conteneurs Docker fonctionnent de manière identique sur n'importe quel environnement (local, cloud, etc.).
2. **Isolation** : Chaque conteneur est isolé, ce qui évite les conflits entre les dépendances.
3. **Efficacité** : Les conteneurs consomment moins de ressources que les machines virtuelles.

---

## Étape 1 : Installer Docker

Téléchargez et installez Docker depuis le site officiel : [docker.com](https://www.docker.com/).

Pour vérifier que Docker est correctement installé, exécutez la commande suivante :

```bash
docker --version
```

---

## Étape 2 : Créer un fichier Dockerfile

Un `Dockerfile` est un fichier texte contenant les instructions pour construire une image Docker. Voici un exemple simple :

```dockerfile
# Utilise une image Node.js comme base
FROM node:18

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers du projet dans le conteneur
COPY . .

# Installe les dépendances
RUN npm install

# Définit la commande à exécuter
CMD ["npm", "start"]
```

---

## Étape 3 : Construire et exécuter un conteneur

1. **Construire l'image Docker** :

```bash
docker build -t my-app .
```

2. **Exécuter le conteneur** :

```bash
docker run -p 3000:3000 my-app
```

Votre application sera accessible sur `http://localhost:3000`.

---

## Étape 4 : Gérer les conteneurs

- **Lister les conteneurs actifs** :

```bash
docker ps
```

- **Arrêter un conteneur** :

```bash
docker stop <container_id>
```

- **Supprimer un conteneur** :

```bash
docker rm <container_id>
```

---

## Conclusion

Docker simplifie le déploiement et l'exécution des applications en les encapsulant dans des conteneurs portables. Que vous soyez développeur ou ingénieur DevOps, Docker est un outil essentiel pour vos projets.