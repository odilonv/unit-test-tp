# TP: Tests Unitaires

Ce fichier décrit les tests unitaires réalisés sur les différentes fonctions implémentées dans le projet. Ces tests visent à garantir la robustesse et la fiabilité des fonctions en validant leur comportement pour divers scénarios.
Ce fichier a été conçu dans le cadre de la matière **Validation de logiciels** lors de ma deuxième année à l'**IMT Mines Alès**.

## Table des matières

1. [Tests des fonctions](#tests-des-fonctions)
   - [my_alpha_number_t](#my_alpha_number_t)
   - [sum](#sum)
   - [my_size_alpha_t](#my_size_alpha_t)
   - [my_display_alpha_t](#my_display_alpha_t)
   - [my_array_alpha_t](#my_array_alpha_t)
   - [my_is_posi_neg_t](#my_is_posi_neg_t)
   - [fibo](#fibo)
   - [my_display_alpha_reverse_t](#my_display_alpha_reverse_t)
   - [my_length_array_t](#my_length_array_t)
   - [my_display_unicode_t](#my_display_unicode_t)
   - [quickSort](#quickSort)
   - [tspBrutForce](#tspBrutForce)
   - [resoudreSudoku](#resoudreSudoku)

---

## Tests des fonctions

### my_alpha_number_t
- **Description** : Convertit un nombre en chaîne de caractères.
- **Cas testés** :
  - Retourne `"123"` pour l'argument `123`.

### sum
- **Description** : Retourne la somme de deux nombres ou `0` si un des arguments n'est pas un nombre.
- **Cas testés** :
  - Retourne `5` pour les arguments `2` et `3`.
  - Retourne `0` si un des arguments n'est pas numérique (`sum(2, '3')` et `sum('2', 3)`).

### my_size_alpha_t
- **Description** : Retourne la longueur d'une chaîne de caractères.
- **Cas testés** :
  - Retourne `0` pour une chaîne vide.
  - Retourne `0` lorsqu'elle est appelée sans argument.
  - Retourne la longueur correcte (`7`) pour la chaîne `"bonjour"`.
  - Retourne `0` si l'argument n'est pas une chaîne.

### my_display_alpha_t
- **Description** : Retourne l'alphabet en minuscule.
- **Cas testés** :
  - Retour attendu : `"abcdefghijklmnopqrstuvwxyz"`.

### my_array_alpha_t
- **Description** : Retourne un tableau contenant les caractères d'une chaîne.
- **Cas testés** :
  - Chaîne `"bonjour"` retourne `['b', 'o', 'n', 'j', 'o', 'u', 'r']`.
  - Chaîne vide retourne `[]`.

### my_is_posi_neg_t
- **Description** : Indique si un nombre est positif ou négatif.
- **Cas testés** :
  - Retourne `"POSITIF"` pour un nombre positif (`5`).
  - Retourne `"NEGATIVE"` pour un nombre négatif (`-5`) ou zéro (`0`).

### fibo
- **Description** : Retourne le n-ième terme de la suite de Fibonacci.
- **Cas testés** :
  - Retourne `1` pour les indices `1` et `2`.
  - Retourne les termes corrects pour des indices > 2 (`fibo(3)` donne `2`, `fibo(4)` donne `3`, etc.).
  - Retourne `0` pour les indices <= 0.

### my_display_alpha_reverse_t
- **Description** : Retourne l'alphabet en minuscule inversé.
- **Cas testés** :
  - Retour attendu : `"zyxwvutsrqponmlkjihgfedcba"`.

### my_length_array_t
- **Description** : Retourne la longueur d'un tableau.
- **Cas testés** :
  - Tableau vide retourne `0`.
  - Tableau `[1, 2, 3]` retourne `3`.

### my_display_unicode_t
- **Description** : Convertit une liste de codes décimaux en une chaîne Unicode.
- **Cas testés** :
  - Retourne `""` pour une liste vide.
  - Retourne `"ABC"` pour `[65, 66, 67]`.
  - Retourne `"A "` pour `[65, 1000, -1, 32]` en ignorant les caractères invalides.
  - Gère correctement une liste mixte avec des caractères valides et invalides (`[48, 49, 50, 51, 65, 66, 67, 97, 98, 99]` retourne `"0123ABCabc"`).

### quickSort
- **Description** : Trie un tableau d'entiers.
- **Cas testés** :
  - Trie correctement `[3, 1, 2, 5, 4]` en `[1, 2, 3, 4, 5]`.
  - Retourne un tableau avec un seul élément intact.
  - Retourne un tableau vide s'il est vide.

### tspBrutForce
- **Description** : Résout le problème du voyageur de commerce par force brute.
- **Cas testés** :
  - Retourne la permutation optimale et la distance minimale pour une matrice donnée.

### resoudreSudoku
- **Description** : Résout une grille de Sudoku valide.
- **Cas testés** :
  - Résolution correcte d'une grille partiellement remplie.

---

## Résultats

| File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|--------------------|---------|----------|---------|---------|-------------------|
| All files          |     100 |      100 |     100 |     100 |                   |
| unitTest.class.js  |     100 |      100 |     100 |     100 |                   |

Test Suites: 1 passed, 1 total  
Tests:       28 passed, 28 total  
Snapshots:   0 total  
Time:        2.156 s  
Ran all test suites.


---

## Exécution des tests
Les tests ont été écrits à l'aide de [Jest](https://jestjs.io/). Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

Chaque test garantit que les fonctions se comportent comme attendu pour divers cas d'utilisation, y compris les cas limites.

---

## Remerciements

Merci d'avoir pris le temps de consulter ce README. Si vous avez des questions ou des suggestions, n'hésitez pas à les partager.
