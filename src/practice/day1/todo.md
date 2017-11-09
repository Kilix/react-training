## Etapes
- Afficher une simple liste de contacts en utilisant les données (default export) du fichier mockData : prénom, nom, mots-clés, lien Twitter
- Ajouter des filtres par mots-clés `react`, `cyclejs`, `typescript`, `fp` et `angular`.
Un seul filtre peut être actif à la fois, cliquer sur un filtre actif le désactive.
- Récupérer la biographie de chaque contact en utilisant `fetchTwitterBio`

## Conseils
Toujours se poser les questions suivantes : est-ce que ce composant est censé gérer cela ? Est-ce vraiment son rôle ?
Un composant ne doit faire qu'une seule chose.
Dans la correction, nous avons utilisé 8 composants, nous aurions pu en utiliser plus.

Ne mettez pas de logique dans un composant qui ne devrait pas la gérer.
Le rôle des composants est de "render", c'est quasiment tout ce qu'ils devraient faire.
