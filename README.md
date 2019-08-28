Front Kit 
========

Ce starterkit est à utiliser en cas d'intégration simple. Afin d'avoir une structure rapidement mise en place. 
Il ne doit pas être cloné, mais est utlisé pour initier un projet cible. 
Il s'appuie sur [webpack encore](https://symfony.com/doc/current/frontend.html)

⚠️ Si vous utilisez symfony il faut utiliser le front-bundle (Lien à venir)


Pré-requis
--------

* Avoir dockerisé node dans le projet cible

```
services:
  node:
    image: node:12
    working_dir: /var/www/html
    user: node
    tty: true
    volumes:
      - .:/var/www/html:delegated
```

Installation
--------

* Télécharger le [makefile](https://raw.githubusercontent.com/umanit/front-kit/master/Makefile) du repo et l'installer dans le projet cible
Si le projet cible possède déjà un fichier make il faut fusionner les 2 

* A la racine du projet cible lancer la commande 
```make init front```

⚠️ Attention si votre projet possède déjà un fichier package.json à la racine du projet l'installation ne va pas fonctionner
Dans ce cas il faut un merge des deux fichiers 

Utilisation
--------

L'installation va créer à la racine du projet un dossier assets 

```
scss -> les fichiers styles
fav -> les favicons
fonts -> les polices du site
images -> les images du site
js -> les fichiers javascript du site
```

Le fichier app.js possède un exemple d'utilisation 

Pour compiler les assets du site : 

```
docker-compose exec node yarn run dev
```

Pour compiler et ecouter les assets du site : 

```
docker-compose exec node yarn run watch
```

Pour compiler les assets pour la prod

```
docker-compose exec node yarn build
```
