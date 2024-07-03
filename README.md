# Dashboard Simplon

![Angular](https://img.shields.io/badge/Angular-v18.0.3-red)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4.4-blue)

## Sommaire

- [Description](#description)
- [Fonctionnalité](#fonctionnalités)
- [Conventions et design System](#conventions-et-design-system)
- [Maquette et Prototype Figma](#maquette-et-prototype-figma)
- [Installation](#installation)
- [Auteurs](#auteurs)

## Description

Ce projet est une application Angular conçue pour Simplon. Cette application permet de visualiser les statistiques des formations et des apprenants, de gérer les formations et les apprenants, ainsi que de créer de nouvelles formations en ajoutant des apprenants. L'application est connectée à une base de données et à un bot Discord pour créer automatiquement des salons pour chaque formation.

## Fonctionnalités

- **Visualisation des Statistiques** : Afficher les statistiques sur les formations et les apprenants.
- **Gestion des Formations** : Voir, ajouter, modifier et supprimer des formations.
- **Gestion des Apprenants** : Voir, ajouter, modifier et supprimer des apprenants dans une formation.
- **Création Automatique de Salons Discord** : Lors de la création d'une formation, les salons Discord correspondants sont créés automatiquement.

## Conventions et Design System

Pour plus de détails sur les conventions de code et le design system utilisés dans ce projet, veuillez consulter les documents suivants :

- [Conventions](./docs/conventions.md)
- [Design System](./docs/design-system.md)

## Maquette et Prototype Figma

Pour consulter la maquette et le prototype interactif du projet, veuillez utiliser le lien suivant :

- [Prototype Figma](https://www.figma.com/design/OognhFKeekG8u8qqRcqMQQ/Simplon-dashboard?node-id=36-86&t=dFAusiVVELsfZLdl-1)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/dashboard-simplon.git
   cd dashboard-simplon
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Lancer l'application :**
   ```bash
   ng serve
   ```
4. **Accéder à l'application :**
   - Ouvrez votre navigateur et allez sur `http://localhost:4200`.

## Auteurs

- [Hugo](https://github.com/Hugo-walando) - Développeur Front-end
- [Rémi](https://github.com/RemiDebruyne) - Développeur Front-end
