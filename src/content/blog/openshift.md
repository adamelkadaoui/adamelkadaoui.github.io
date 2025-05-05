---
title: "Tutoriel : Mettre en place un pipeline DevOps avec OpenShift"
description: "Découvrez OpenShift, ses avantages et inconvénients, et apprenez à configurer un pipeline CI/CD pour automatiser vos déploiements."
pubDate: "2025-03-15"
heroImage: "/blog/openshift/hero-openshift.webp"
tags: ["devops", "openshift", "cicd", "kubernetes"]
---

## Introduction

OpenShift est une plateforme Kubernetes d'entreprise développée par Red Hat. Elle offre une solution complète pour le déploiement, la gestion et la mise à l'échelle des applications conteneurisées. OpenShift est particulièrement apprécié dans les environnements DevOps grâce à ses outils intégrés pour l'automatisation des pipelines CI/CD.

Dans cet article, nous allons explorer :
- Ce qu'est OpenShift.
- Ses avantages et inconvénients.
- Comment configurer un pipeline DevOps simple.

---

## Qu'est-ce qu'OpenShift ?

OpenShift est une plateforme de conteneurs basée sur Kubernetes, conçue pour simplifier le déploiement et la gestion des applications. Elle inclut des outils supplémentaires comme :
- **OpenShift CLI (oc)** : Une interface en ligne de commande pour interagir avec la plateforme.
- **Source-to-Image (S2I)** : Un outil pour créer des images conteneurisées directement à partir du code source.
- **Pipelines CI/CD** : Basés sur Tekton, ils permettent d'automatiser les processus de construction, de test et de déploiement.

---

## Avantages d'OpenShift

1. **Facilité d'utilisation** : OpenShift simplifie la gestion des conteneurs grâce à une interface utilisateur intuitive et des outils intégrés.
2. **Sécurité renforcée** : OpenShift inclut des fonctionnalités de sécurité avancées comme la gestion des rôles (RBAC) et des politiques réseau.
3. **Support d'entreprise** : Red Hat offre un support technique fiable pour les entreprises.
4. **Automatisation native** : Les pipelines CI/CD sont intégrés, ce qui facilite l'automatisation des déploiements.

---

## Inconvénients d'OpenShift

1. **Coût élevé** : OpenShift peut être coûteux, surtout pour les petites entreprises.
2. **Complexité initiale** : La configuration initiale peut être intimidante pour les débutants.
3. **Dépendance à Red Hat** : Bien qu'OpenShift soit basé sur Kubernetes, certaines fonctionnalités sont spécifiques à Red Hat.

---

## Comment fonctionne OpenShift ?

OpenShift repose sur Kubernetes, mais ajoute des fonctionnalités supplémentaires pour simplifier le développement et le déploiement des applications. Voici les principaux composants d'OpenShift :

1. **Cluster Kubernetes** : Gère les conteneurs et les pods.
2. **OpenShift Router** : Gère le trafic entrant vers les applications.
3. **OpenShift Pipelines** : Basés sur Tekton, ils permettent d'automatiser les processus CI/CD.
4. **Source-to-Image (S2I)** : Crée des images conteneurisées directement à partir du code source.

---

## Tutoriel : Configurer un pipeline CI/CD avec OpenShift

### Étape 1 : Installer OpenShift CLI
Téléchargez et installez l'outil CLI OpenShift.

```bash
# Téléchargez la CLI
curl -LO https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/openshift-client-linux.tar.gz
tar -xvf openshift-client-linux.tar.gz
sudo mv oc kubectl /usr/local/bin/
```
### Étape 2 : Créer un projet

Créez un nouveau projet pour votre pipeline.

```bash
oc new-project devops-demo
```

### Étape 3 : Créer un pipeline CI/CD

Voici un exemple de pipeline Tekton pour OpenShift :

```yaml
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: demo-pipeline
spec:
  tasks:
    - name: build
      taskRef:
        name: buildah
    - name: deploy
      taskRef:
        name: kubernetes-deploy
```
Appliquez le pipeline avec la commande suivante :

```bash
oc apply -f pipeline.yaml
```
---

## Conclusion
OpenShift est une solution puissante pour les entreprises cherchant à automatiser leurs processus DevOps. Bien qu'il puisse être coûteux et complexe à configurer, ses fonctionnalités avancées et son support d'entreprise en font un choix idéal pour les environnements de production.
