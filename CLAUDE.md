# Book N' Glow — landing

Règles du projet : `.cursorrules`.

## Déploiement

- Netlify construit la production à chaque push sur `main` : merger sur `main` = mettre en prod.
- **Feature sur plusieurs repos** (backend, web client, app pro, admin, landing) : rien n'est mergé sur la branche principale ni mis en production, dans aucun repo, tant que toute la feature n'est pas en staging dans chaque repo et testée de bout en bout. Ensuite, mise en production de tous les repos ensemble. Pourquoi : un repo passé en prod alors que les autres n'étaient pas terminés a déjà causé des problèmes aux clientes et aux prestataires.
  - Ici : recette sur le deploy preview Netlify de la PR. La PR reste ouverte jusqu'à la fin de la recette.
