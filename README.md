
# Installation du projet Angular Starter Kit sous Docker (WSL 2)

![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?logo=angular&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![WSL 2](https://img.shields.io/badge/wsl-2-%2361DAFB.svg?style=for-the-badge&logo=linux&logoColor=white)

## 1. Pré-requis

Avant de commencer l'installation, assurez-vous d'avoir les prérequis suivants :
- Un système d'exploitation Windows 10 version 2004 ou supérieure ou Windows 11.
- WSL 2 installé et configuré.
- Docker Desktop installé et configuré pour fonctionner avec WSL 2.
- Un éditeur de code comme Visual Studio Code (VS Code).

## 2. Installation de Docker

1. Téléchargez Docker Desktop depuis le site officiel: [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Installez Docker Desktop en suivant les instructions de l'installateur.
3. Une fois installé, ouvrez Docker Desktop puis allez dans les paramètres pour activer l'intégration avec WSL 2 :
   - Allez dans **Settings > General** et cochez 'Use the WSL 2 based engine'.
   - Allez dans **Settings > Resources > WSL Integration** et activez l'intégration avec la distribution WSL.

## 3. Configuration de WSL 2

Si WSL 2 n'est pas encore configuré, suivez les étapes ci-dessous :

1. Activez WSL et définissez WSL 2 comme la version par défaut :
   ```bash
   wsl --install
   wsl --set-default-version 2
   ```
2. Installez une distribution Linux depuis le Microsoft Store (comme Ubuntu).
3. Démarrez la distribution Linux et configurez-la.

## 4. Installation de Windows Terminal

Windows Terminal est un outil recommandé pour gérer vos terminaux WSL. Il permet de travailler avec plusieurs onglets et de mieux gérer vos sessions WSL. Pour l'installer, suivez les étapes suivantes :

1. Ouvrez le Microsoft Store.
2. Recherchez 'Windows Terminal'.
3. Cliquez sur 'Installer'.
4. Une fois installé, ouvrez Windows Terminal et sélectionnez votre distribution WSL (par exemple Ubuntu).

## 5. Lancer le projet avec Docker

1. Assurez-vous que Docker est en cours d'exécution.
2. Depuis le terminal WSL, accédez au répertoire de votre projet Next.js.
3. Construisez l'image Docker :
   ```bash
   docker compose build
   ```
4. Lancez le conteneur Docker :
   ```bash
   docker compose up
   ```
5. Ouvrez votre navigateur et accédez à [http://localhost:8080](http://localhost:8080) pour voir votre projet Angular en cours d'exécution.
