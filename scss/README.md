Front Kit 
========

L'architecture SCSS du projet est organisée selon le principe ITCSS (Inverted Triangle CSS).

_Références articles :_
* _https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/_
* _https://medium.com/@KBizien/architecture-css-avec-itcss-inuitcss-6b4271cb1042_
* _https://blog.codeminer42.com/how-to-organize-your-styles-with-itcss-3787cbc6dcbf_

### Sections du triangle inversé (du haut vers le bas / du plus global au plus spécifique)

**/!\ Il est important de ne générer aucun code CSS dans les deux premières couches /!\\**
* **01_settings** - Variables du projet (size, colors, fonts...) + overrides éventuels du préprocesseur type Bootstrap => pas de sortie CSS réelle
```
$font-size-base-px: 16; // override Bootstrap

$color-primary: #bada55;
$spacing-unit: 10px;
```

* **02_tools** - Mixins et fonctions globalement utilisées (@mixin, @function, @font-face, @keyframe...) => pas de sortie CSS réelle
```
@mixin font-brand() {
  font-family: “UI Font”, sans-serif;
  font-weight: 400;
}

@function rem($value) {
  @return ($value / $font-size-base-px) * 1rem;
}
```

---

* **03_generic** - Réinitialisations CSS qui peuvent inclure la réinitialisation Normalize.css (de base dans Bootstrap), ou notre propre code (si on n'utilise pas Bootstrap) => 1er calque qui génère du CSS réel
```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

* **04_elements** - Style pour les éléments HTML nus, sans classe (H1, a, etc.), pour redéfinir le style par défaut du navigateur
```
ul {
  list-style: square outside;
}
```

* **05_objects** - Classes non esthétiques ou sans style spécifique, plutôt relatives à la structure/positionnement/comportement des éléments dans la page (wrappers, grid, list, etc.).
Elles portent un nom agnostique :  
```
.o-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.o-list__item {
    padding: $spacing-unit;
}
```

* **06_components** - Classes esthétiques pour styliser tous les éléments de la page (souvent combinés avec la structure des classes d'objects).
Les classes sont nommées spécifiquement :  
```
.c-products-list {
  @include font-brand();
  border-top: 1px solid $color-primary;
}

.c-products-list__item {
  border-bottom: 1px solid $color-ui;
}
```

* **07_utilities** - Styles les plus spécifiques. Classes utilitaires permettant de remplacer tout ce qui précède. C'est le seul endroit où ```!important``` est autorisé. :-)
```
.u-one-half {
  width: 50% !important;
}
```

#### Projet avec un thème spécifique
Si le projet le nécessite, il est possible d'ajouter une couche supplémentaire spécifique à un thème, entre components et utilities, nommée **theming**.


### Conventions de nommage

Nous utilisons la **convention BEM** pour structurer nos noms de classes.<br>
En adéquation avec l’architecture, il est utile d’étendre la convention BEM pour la greffer à ITCSS.<br> 
Il s’agit de **préfixer les noms de classes** avec la première lettre du type de la classe :

* ```o-block__element--modifier``` — pour les objets
* ```c-block__element--modifier``` — pour les composants
* ```u-block__element--modifier``` — pour les utilitaires

### Utilisation du JS

Pour les éléments qui seraient **impactés par du JS**, utiliser un **data-attribute** plutôt qu'une classe :

* ```data-[name]``` — pour les hooks javascript (pas de styles)
