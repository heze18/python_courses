export const level1 = {
    id: 'level1',
    title: 'Fondations du Langage Python',
    shortTitle: 'Niv. 1 – Fondations',
    description: 'Comprendre la syntaxe Python, les types de base et la logique algorithmique. Durée estimée : 10 à 14 jours.',
    lessons: [
        {
            id: 'l1-intro',
            title: '1.1 Introduction à Python',
            duration: '20 min',
            difficulty: 'Débutant',
            content: [
                {
                    type: 'text', content: `<p><strong>Python</strong> est un langage de programmation <em>interprété</em>, <em>polyvalent</em> et <em>facile à apprendre</em>. Créé par <strong>Guido van Rossum</strong> en 1991, il est aujourd'hui l'un des langages les plus populaires au monde.</p>
<p>Python est utilisé dans de nombreux domaines :</p>
<ul>
<li><strong>Développement web</strong> (Django, Flask, FastAPI)</li>
<li><strong>Science des données</strong> (Pandas, NumPy, Matplotlib)</li>
<li><strong>Intelligence artificielle</strong> (TensorFlow, PyTorch)</li>
<li><strong>Automatisation</strong> (scripts système, web scraping)</li>
<li><strong>Applications de bureau</strong> et bien plus encore</li>
</ul>` },
                { type: 'heading', content: 'Pourquoi Python ?' },
                {
                    type: 'text', content: `<p>Python se distingue par sa <strong>lisibilité</strong>. Contrairement à d'autres langages qui utilisent des accolades <code>{}</code> pour délimiter les blocs de code, Python utilise l'<strong>indentation</strong> (les espaces ou tabulations). Cela rend le code naturellement propre et lisible.</p>
<p>Comparons un même programme en C et en Python :</p>` },
                {
                    type: 'code', code: `// En C
#include <stdio.h>
int main() {
    printf("Bonjour le monde!");
    return 0;
}`, language: 'c', title: 'C'
                },
                {
                    type: 'code', code: `# En Python
print("Bonjour le monde!")`, title: 'Python – Beaucoup plus simple !'
                },
                { type: 'info', variant: 'tip', title: '💡 Astuce', content: 'Python est un langage interprété : le code est exécuté ligne par ligne, sans compilation préalable. Cela permet de tester rapidement des idées.' },
                { type: 'heading', content: 'Installer Python' },
                {
                    type: 'text', content: `<p>Pour commencer à programmer en Python, vous devez l'installer sur votre ordinateur :</p>
<ol>
<li>Allez sur <strong>python.org/downloads</strong></li>
<li>Téléchargez la dernière version (Python 3.12+)</li>
<li><strong>Important :</strong> Cochez la case <code>Add Python to PATH</code> lors de l'installation</li>
<li>Ouvrez un terminal et tapez <code>python --version</code> pour vérifier</li>
</ol>` },
                {
                    type: 'code', code: `# Vérifier l'installation dans le terminal
python --version
# Devrait afficher : Python 3.12.x

# Lancer l'interpréteur interactif
python
>>> print("Ça marche !")
Ça marche !
>>> exit()`, title: 'Terminal'
                },
                { type: 'heading', content: 'Votre premier programme' },
                { type: 'text', content: `<p>Créez un fichier <code>bonjour.py</code> et écrivez :</p>` },
                {
                    type: 'code', code: `# Mon premier programme Python
# Fichier : bonjour.py

print("Bonjour le monde !")
print("Je suis en train d'apprendre Python 🐍")
print("2 + 3 =", 2 + 3)`, title: 'bonjour.py'
                },
                {
                    type: 'text', content: `<p>Exécutez-le avec : <code>python bonjour.py</code></p>
<p>Résultat :</p>` },
                {
                    type: 'code', code: `Bonjour le monde !
Je suis en train d'apprendre Python 🐍
2 + 3 = 5`, title: 'Sortie'
                },
                { type: 'info', variant: 'info', title: '📝 Remarque', content: 'Les lignes commençant par # sont des commentaires. Python les ignore complètement. Utilisez-les pour expliquer votre code.' },
                { type: 'heading', content: 'PEP 8 – Les conventions de style' },
                {
                    type: 'text', content: `<p><strong>PEP 8</strong> est le guide de style officiel de Python. Voici les règles les plus importantes :</p>
<ul>
<li>Utilisez <strong>4 espaces</strong> pour l'indentation (pas de tabulations)</li>
<li>Les noms de variables en <strong>snake_case</strong> : <code>mon_nom</code>, <code>age_utilisateur</code></li>
<li>Les noms de classes en <strong>PascalCase</strong> : <code>MaClasse</code></li>
<li>Les constantes en <strong>MAJUSCULES</strong> : <code>PI = 3.14159</code></li>
<li>Lignes de maximum <strong>79 caractères</strong></li>
</ul>` },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel symbole est utilisé pour les commentaires en Python ?', options: ['//', '#', '/* */', '--'], correct: 1, explanation: 'En Python, le symbole # marque le début d\'un commentaire.' },
                        { question: 'Qui a créé Python ?', options: ['Dennis Ritchie', 'James Gosling', 'Guido van Rossum', 'Bjarne Stroustrup'], correct: 2, explanation: 'Guido van Rossum a créé Python en 1991 aux Pays-Bas.' },
                        { question: 'Comment exécute-t-on un fichier Python ?', options: ['compile mon_fichier.py', 'run mon_fichier.py', 'python mon_fichier.py', 'exec mon_fichier.py'], correct: 2, explanation: 'On utilise la commande python suivie du nom du fichier.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-variables',
            title: '1.2 Variables et Types de Données',
            duration: '25 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>En Python, une <strong>variable</strong> est un nom qui fait référence à une valeur stockée en mémoire. Contrairement à d'autres langages, vous n'avez <strong>pas besoin de déclarer le type</strong> — Python le déduit automatiquement.</p>` },
                { type: 'heading', content: 'Créer des variables' },
                {
                    type: 'code', code: `# Créer des variables – c'est simple !
nom = "Alice"           # str (chaîne de caractères)
age = 25                # int (entier)
taille = 1.72           # float (nombre à virgule)
est_etudiant = True     # bool (booléen)

# Afficher les variables
print("Nom :", nom)
print("Âge :", age)
print("Taille :", taille)
print("Étudiant :", est_etudiant)`, title: 'Création de variables'
                },
                { type: 'info', variant: 'warning', title: '⚠️ Attention', content: 'Les noms de variables sont sensibles à la casse : age, Age et AGE sont trois variables différentes ! Utilisez toujours le snake_case : mon_age, nom_complet, etc.' },
                { type: 'heading', content: 'Les 4 types de base' },
                { type: 'subheading', content: '1. Les entiers (int)' },
                { type: 'text', content: `<p>Les entiers représentent des nombres sans virgule. En Python, ils n'ont <strong>aucune limite de taille</strong> !</p>` },
                {
                    type: 'code', code: `# Entiers (int)
x = 42
y = -17
grand_nombre = 1_000_000_000   # Le underscore améliore la lisibilité

print(type(x))          # <class 'int'>
print(grand_nombre)     # 1000000000

# Python gère les très grands nombres
resultat = 2 ** 100     # 2 puissance 100
print(resultat)         # 1267650600228229401496703205376`, title: 'Entiers'
                },
                { type: 'subheading', content: '2. Les flottants (float)' },
                {
                    type: 'code', code: `# Flottants (float) – nombres à virgule
pi = 3.14159
temperature = -5.3
scientifique = 1.5e6    # Notation scientifique = 1 500 000

print(type(pi))         # <class 'float'>

# ⚠️ Attention à la précision des flottants !
print(0.1 + 0.2)        # 0.30000000000000004 (pas exactement 0.3)
print(0.1 + 0.2 == 0.3) # False !

# Solution : arrondir
print(round(0.1 + 0.2, 1))  # 0.3`, title: 'Flottants'
                },
                { type: 'info', variant: 'info', title: '📝 Pourquoi 0.1 + 0.2 ≠ 0.3 ?', content: 'Les nombres flottants sont stockés en binaire. Certaines fractions décimales ne peuvent pas être représentées exactement en binaire, d\'où ces petites erreurs d\'arrondi.' },
                { type: 'subheading', content: '3. Les chaînes de caractères (str)' },
                {
                    type: 'code', code: `# Chaînes de caractères (str)
prenom = "Alice"
nom = 'Dupont'                    # Guillemets simples ou doubles
message = """Ceci est un texte
sur plusieurs lignes"""           # Triple guillemets

# Concaténation (assemblage)
nom_complet = prenom + " " + nom
print(nom_complet)                # Alice Dupont

# f-strings – La méthode RECOMMANDÉE (Python 3.6+)
age = 25
salutation = f"Bonjour, je suis {prenom} et j'ai {age} ans."
print(salutation)
# Bonjour, je suis Alice et j'ai 25 ans.

# Opérations sur les chaînes
print(len(prenom))                # 5 (longueur)
print(prenom.upper())             # ALICE
print(prenom.lower())             # alice
print("  espaces  ".strip())      # "espaces" (supprime les espaces)
print(prenom[0])                  # A (premier caractère)
print(prenom[-1])                 # e (dernier caractère)`, title: 'Chaînes de caractères'
                },
                { type: 'subheading', content: '4. Les booléens (bool)' },
                {
                    type: 'code', code: `# Booléens (bool) – Vrai ou Faux
est_majeur = True
a_permis = False

# Résultats de comparaisons
print(5 > 3)       # True
print(10 == 11)    # False
print(5 != 3)      # True (différent)
print(5 >= 5)      # True

# Opérateurs logiques
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# Tout est vrai ou faux en Python
print(bool(0))      # False (0 est "faux")
print(bool(42))     # True  (tout autre nombre est "vrai")
print(bool(""))     # False (chaîne vide = faux)
print(bool("abc"))  # True  (chaîne non-vide = vrai)`, title: 'Booléens'
                },
                { type: 'heading', content: 'Conversion de types' },
                {
                    type: 'code', code: `# Conversion entre types
age_texte = "25"
age_nombre = int(age_texte)     # str → int
print(age_nombre + 5)           # 30

prix = 19.99
prix_int = int(prix)            # float → int (tronque, ne pas arrondir)
print(prix_int)                 # 19

nombre = 42
nombre_str = str(nombre)        # int → str
print("Le nombre est " + nombre_str)

# input() retourne TOUJOURS une chaîne
reponse = input("Votre âge ? ")  # L'utilisateur tape "25"
print(type(reponse))             # <class 'str'>
age = int(reponse)               # Convertir en int pour calculer
print(f"Dans 10 ans, vous aurez {age + 10} ans.")`, title: 'Conversions'
                },
                { type: 'info', variant: 'tip', title: '💡 Fonction type()', content: 'Utilisez type(variable) pour connaître le type d\'une variable à tout moment. C\'est très utile pour le débogage !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel est le type de la variable x = 3.14 ?', options: ['int', 'float', 'str', 'bool'], correct: 1, explanation: '3.14 contient une virgule, c\'est donc un flottant (float).' },
                        { question: 'Que retourne type("42") ?', options: ['<class \'int\'>', '<class \'float\'>', '<class \'str\'>', '<class \'bool\'>'], correct: 2, explanation: '"42" est entouré de guillemets, c\'est donc une chaîne de caractères (str).' },
                        { question: 'Quelle est la bonne façon d\'insérer une variable dans une chaîne ?', options: ['print("Bonjour " + nom)', 'print(f"Bonjour {nom}")', 'print("Bonjour %s" % nom)', 'Toutes les réponses sont valides'], correct: 3, explanation: 'Les trois syntaxes fonctionnent, mais les f-strings sont recommandées.' },
                        { question: 'Que vaut bool("") ?', options: ['True', 'False', 'None', 'Erreur'], correct: 1, explanation: 'Une chaîne vide est considérée comme False en Python.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-operators',
            title: '1.3 Opérateurs',
            duration: '15 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>opérateurs</strong> permettent d'effectuer des calculs, des comparaisons et des opérations logiques sur les données.</p>` },
                { type: 'heading', content: 'Opérateurs arithmétiques' },
                {
                    type: 'code', code: `# Opérateurs arithmétiques
a = 17
b = 5

print(a + b)    # 22  (addition)
print(a - b)    # 12  (soustraction)
print(a * b)    # 85  (multiplication)
print(a / b)    # 3.4 (division → retourne toujours un float)
print(a // b)   # 3   (division entière → arrondi vers le bas)
print(a % b)    # 2   (modulo → reste de la division)
print(a ** b)   # 1419857 (puissance → 17^5)

# Ordre de priorité (comme en maths)
resultat = 2 + 3 * 4      # 14 (pas 20 !)
resultat = (2 + 3) * 4    # 20 (les parenthèses changent l'ordre)`, title: 'Arithmétique'
                },
                { type: 'heading', content: 'Opérateurs de comparaison' },
                {
                    type: 'code', code: `# Opérateurs de comparaison → retournent True ou False
x = 10
y = 5

print(x == y)    # False (égal)
print(x != y)    # True  (différent)
print(x > y)     # True  (supérieur)
print(x < y)     # False (inférieur)
print(x >= 10)   # True  (supérieur ou égal)
print(x <= 5)    # False (inférieur ou égal)

# Comparaison de chaînes (ordre alphabétique)
print("abc" < "abd")     # True
print("Alice" == "alice") # False (sensible à la casse)`, title: 'Comparaison'
                },
                { type: 'heading', content: 'Opérateurs logiques' },
                {
                    type: 'code', code: `# Opérateurs logiques : and, or, not
age = 25
a_permis = True

# and → les DEUX conditions doivent être vraies
peut_conduire = age >= 18 and a_permis
print(peut_conduire)  # True

# or → AU MOINS UNE condition doit être vraie
est_mineur_ou_senior = age < 18 or age > 65
print(est_mineur_ou_senior)  # False

# not → inverse la valeur
print(not True)       # False
print(not False)      # True
print(not (5 > 3))    # False`, title: 'Opérateurs logiques'
                },
                { type: 'heading', content: 'Opérateurs d\'affectation' },
                {
                    type: 'code', code: `# Affectation augmentée
x = 10
x += 5    # x = x + 5 → 15
x -= 3    # x = x - 3 → 12
x *= 2    # x = x * 2 → 24
x /= 4    # x = x / 4 → 6.0
x //= 2   # x = x // 2 → 3.0
x **= 3   # x = x ** 3 → 27.0
x %= 5    # x = x % 5 → 2.0

print(x)  # 2.0`, title: 'Affectation augmentée'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que vaut 17 // 5 ?', options: ['3.4', '3', '2', '4'], correct: 1, explanation: '// est la division entière. 17 ÷ 5 = 3.4, donc la partie entière est 3.' },
                        { question: 'Que vaut 17 % 5 ?', options: ['3.4', '3', '2', '12'], correct: 2, explanation: '% donne le reste de la division. 17 = 5 × 3 + 2, donc le reste est 2.' },
                        { question: 'Que vaut True and False ?', options: ['True', 'False', 'None', 'Erreur'], correct: 1, explanation: 'L\'opérateur and retourne False si l\'une des conditions est False.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-conditions',
            title: '1.4 Conditions (if / elif / else)',
            duration: '25 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>structures conditionnelles</strong> permettent à votre programme de prendre des <em>décisions</em>. C'est l'un des concepts les plus fondamentaux de la programmation.</p>` },
                { type: 'heading', content: 'La structure if' },
                {
                    type: 'code', code: `# Structure de base
age = 20

if age >= 18:
    print("Vous êtes majeur")
    print("Bienvenue !")

# Si la condition est False, le bloc est ignoré
if age >= 65:
    print("Vous êtes senior")  # Pas affiché car 20 < 65`, title: 'if simple'
                },
                { type: 'info', variant: 'warning', title: '⚠️ L\'indentation est OBLIGATOIRE', content: 'En Python, l\'indentation (4 espaces) définit les blocs de code. Si vous ne l\'indentez pas correctement, vous aurez une erreur IndentationError.' },
                { type: 'heading', content: 'if / else' },
                {
                    type: 'code', code: `# if / else – deux chemins possibles
temperature = 35

if temperature > 30:
    print("Il fait chaud ! 🌡️")
    print("Pensez à boire de l'eau.")
else:
    print("La température est agréable.")

# Résultat : Il fait chaud ! 🌡️`, title: 'if / else'
                },
                { type: 'heading', content: 'if / elif / else – Plusieurs conditions' },
                {
                    type: 'code', code: `# Plusieurs conditions avec elif
note = 15

if note >= 16:
    mention = "Très Bien"
elif note >= 14:
    mention = "Bien"
elif note >= 12:
    mention = "Assez Bien"
elif note >= 10:
    mention = "Passable"
else:
    mention = "Insuffisant"

print(f"Note : {note}/20 → Mention : {mention}")
# Note : 15/20 → Mention : Bien

# Les conditions sont testées dans l'ordre
# Dès qu'une est vraie, les suivantes sont ignorées`, title: 'if / elif / else'
                },
                { type: 'heading', content: 'Conditions imbriquées et ternaires' },
                {
                    type: 'code', code: `# Conditions imbriquées
age = 25
a_billet = True

if age >= 18:
    if a_billet:
        print("Accès autorisé ✅")
    else:
        print("Achetez un billet d'abord")
else:
    print("Réservé aux adultes")

# Expression ternaire (condition en une ligne)
# syntaxe : valeur_si_vrai if condition else valeur_si_faux
statut = "majeur" if age >= 18 else "mineur"
print(f"Vous êtes {statut}")  # Vous êtes majeur

# Combinaison de conditions
heure = 14
if 6 <= heure < 12:
    print("Bonjour !")
elif 12 <= heure < 18:
    print("Bon après-midi !")
elif 18 <= heure < 22:
    print("Bonsoir !")
else:
    print("Bonne nuit !")`, title: 'Avancé'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Combien d\'espaces utilise-t-on pour l\'indentation en Python ?', options: ['2 espaces', '3 espaces', '4 espaces', '1 tabulation'], correct: 2, explanation: 'La convention PEP 8 recommande 4 espaces pour l\'indentation.' },
                        { question: 'Quelle est la syntaxe d\'une expression ternaire ?', options: ['condition ? vrai : faux', 'vrai if condition else faux', 'if condition then vrai else faux', 'condition and vrai or faux'], correct: 1, explanation: 'En Python : valeur_si_vrai if condition else valeur_si_faux.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-loops',
            title: '1.5 Boucles (for et while)',
            duration: '30 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>boucles</strong> permettent de répéter des instructions. Python propose deux types de boucles : <code>for</code> et <code>while</code>.</p>` },
                { type: 'heading', content: 'La boucle for' },
                { type: 'text', content: `<p>La boucle <code>for</code> parcourt chaque élément d'une <em>séquence</em> (liste, chaîne, range, etc.).</p>` },
                {
                    type: 'code', code: `# Parcourir une liste
fruits = ["pomme", "banane", "cerise"]
for fruit in fruits:
    print(f"J'aime les {fruit}s")

# Parcourir une chaîne caractère par caractère
for lettre in "Python":
    print(lettre, end=" ")  # P y t h o n

# La fonction range()
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):       # 2, 3, 4, 5, 6, 7
    print(i)

for i in range(0, 20, 3):   # 0, 3, 6, 9, 12, 15, 18
    print(i)

# Compter à rebours
for i in range(10, 0, -1):  # 10, 9, 8, ..., 1
    print(i)
print("Décollage ! 🚀")`, title: 'Boucle for'
                },
                { type: 'heading', content: 'La boucle while' },
                {
                    type: 'code', code: `# while – répète TANT QUE la condition est vraie
compteur = 5
while compteur > 0:
    print(f"Compte à rebours : {compteur}")
    compteur -= 1  # CRUCIAL : sinon boucle infinie !
print("Terminé !")

# Exemple : demander un mot de passe
mot_de_passe = ""
while mot_de_passe != "python":
    mot_de_passe = input("Mot de passe : ")
print("Accès accordé ! ✅")`, title: 'Boucle while'
                },
                { type: 'info', variant: 'warning', title: '⚠️ Boucle infinie', content: 'Assurez-vous toujours que la condition du while finira par devenir False ! Sinon, le programme tourne indéfiniment. Appuyez sur Ctrl+C pour arrêter un programme bloqué.' },
                { type: 'heading', content: 'break, continue et else' },
                {
                    type: 'code', code: `# break – sort de la boucle immédiatement
for i in range(10):
    if i == 5:
        print("Stop à 5 !")
        break
    print(i)
# Affiche : 0 1 2 3 4 Stop à 5 !

# continue – passe à l'itération suivante
for i in range(10):
    if i % 2 == 0:  # Si pair
        continue     # Sauter
    print(i)
# Affiche : 1 3 5 7 9

# else sur une boucle (peu connu mais utile !)
# Le bloc else s'exécute SI la boucle n'a PAS été interrompue par break
for n in range(2, 10):
    for d in range(2, n):
        if n % d == 0:
            break
    else:
        print(f"{n} est un nombre premier")`, title: 'Contrôle de boucle'
                },
                { type: 'heading', content: 'Boucles imbriquées' },
                {
                    type: 'code', code: `# Table de multiplication
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:4}", end="")
    print()  # Nouvelle ligne

# Résultat :
#    1   2   3   4   5
#    2   4   6   8  10
#    3   6   9  12  15
#    4   8  12  16  20
#    5  10  15  20  25`, title: 'Boucles imbriquées'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que produit range(3) ?', options: ['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]', '[3]'], correct: 1, explanation: 'range(3) produit les nombres 0, 1, 2 (le 3 est exclu).' },
                        { question: 'Que fait l\'instruction continue ?', options: ['Arrête la boucle', 'Passe à l\'itération suivante', 'Recommence la boucle depuis le début', 'Sort du programme'], correct: 1, explanation: 'continue saute le reste du corps de la boucle et passe à l\'itération suivante.' },
                        { question: 'Quand le bloc else d\'une boucle for s\'exécute-t-il ?', options: ['Toujours', 'Jamais', 'Quand la boucle se termine sans break', 'Quand la boucle est vide'], correct: 2, explanation: 'Le else d\'une boucle s\'exécute uniquement si la boucle n\'a pas été interrompue par un break.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-functions',
            title: '1.6 Fonctions',
            duration: '30 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>fonctions</strong> sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles sont <em>essentielles</em> pour organiser votre code et éviter la répétition.</p>` },
                { type: 'heading', content: 'Définir et appeler une fonction' },
                {
                    type: 'code', code: `# Définir une fonction avec def
def dire_bonjour():
    """Cette fonction affiche un message de bienvenue."""
    print("Bonjour ! 👋")
    print("Bienvenue dans Python !")

# Appeler la fonction
dire_bonjour()
dire_bonjour()  # On peut l'appeler autant de fois qu'on veut`, title: 'Fonction simple'
                },
                { type: 'heading', content: 'Paramètres et arguments' },
                {
                    type: 'code', code: `# Fonction avec paramètres
def saluer(nom):
    print(f"Bonjour, {nom} !")

saluer("Alice")    # Bonjour, Alice !
saluer("Bob")      # Bonjour, Bob !

# Plusieurs paramètres
def presenter(nom, age, ville):
    print(f"Je suis {nom}, {age} ans, de {ville}.")

presenter("Alice", 25, "Paris")

# Paramètres par défaut
def saluer_v2(nom, salutation="Bonjour"):
    print(f"{salutation}, {nom} !")

saluer_v2("Alice")              # Bonjour, Alice !
saluer_v2("Alice", "Salut")     # Salut, Alice !

# Arguments nommés (keyword arguments)
presenter(ville="Lyon", nom="Bob", age=30)
# Je suis Bob, 30 ans, de Lyon.`, title: 'Paramètres'
                },
                { type: 'heading', content: 'La valeur de retour (return)' },
                {
                    type: 'code', code: `# return – renvoyer une valeur
def additionner(a, b):
    return a + b

resultat = additionner(3, 7)
print(resultat)  # 10

# Utiliser le résultat dans d'autres expressions
total = additionner(10, 20) + additionner(5, 5)
print(total)  # 40

# Retourner plusieurs valeurs
def diviser(a, b):
    quotient = a // b
    reste = a % b
    return quotient, reste

q, r = diviser(17, 5)
print(f"17 ÷ 5 = {q} reste {r}")  # 17 ÷ 5 = 3 reste 2

# Si pas de return, la fonction retourne None
def sans_retour():
    print("Je ne retourne rien")

resultat = sans_retour()
print(resultat)  # None`, title: 'Return'
                },
                { type: 'heading', content: 'Portée des variables (Scope)' },
                {
                    type: 'code', code: `# Les variables définies DANS une fonction sont LOCALES
def ma_fonction():
    x = 10  # Variable locale
    print(f"Dans la fonction : x = {x}")

ma_fonction()
# print(x)  # ❌ ERREUR ! x n'existe pas en dehors de la fonction

# Les variables définies EN DEHORS sont GLOBALES
y = 100  # Variable globale

def afficher_y():
    print(f"Variable globale y = {y}")  # ✅ On peut la lire

afficher_y()

# Pour MODIFIER une variable globale dans une fonction
compteur = 0

def incrementer():
    global compteur  # Déclarer explicitement qu'on utilise la variable globale
    compteur += 1

incrementer()
incrementer()
print(compteur)  # 2`, title: 'Portée (Scope)'
                },
                { type: 'info', variant: 'tip', title: '💡 Bonne pratique', content: 'Évitez d\'utiliser global autant que possible. Préférez passer les valeurs en paramètres et utiliser return. Cela rend votre code plus propre et testable.' },
                { type: 'heading', content: 'Exemple pratique complet' },
                {
                    type: 'code', code: `# Calculatrice simple avec fonctions
def calculer(a, b, operation="+"):
    """Effectue une opération mathématique entre deux nombres."""
    if operation == "+":
        return a + b
    elif operation == "-":
        return a - b
    elif operation == "*":
        return a * b
    elif operation == "/":
        if b == 0:
            return "Erreur : division par zéro !"
        return a / b
    else:
        return "Opération inconnue"

# Utilisation
print(calculer(10, 5, "+"))    # 15
print(calculer(10, 5, "-"))    # 5
print(calculer(10, 5, "*"))    # 50
print(calculer(10, 5, "/"))    # 2.0
print(calculer(10, 0, "/"))    # Erreur : division par zéro !`, title: 'Calculatrice'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que retourne une fonction Python sans instruction return ?', options: ['0', '""', 'None', 'False'], correct: 2, explanation: 'Par défaut, une fonction sans return retourne None.' },
                        { question: 'Comment définit-on une valeur par défaut pour un paramètre ?', options: ['def f(x: 5)', 'def f(x=5)', 'def f(x default 5)', 'def f(5 -> x)'], correct: 1, explanation: 'On utilise = pour assigner une valeur par défaut : def f(x=5).' },
                        { question: 'Que signifie "variable locale" ?', options: ['Accessible partout', 'Accessible uniquement dans la fonction', 'Accessible uniquement dans le fichier', 'Variable constante'], correct: 1, explanation: 'Une variable locale existe uniquement dans la fonction où elle est définie.' },
                    ]
                },
            ]
        },
        {
            id: 'l1-io',
            title: '1.7 Entrées / Sorties & Projet Final',
            duration: '25 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Apprenons à interagir avec l'utilisateur et terminons ce niveau avec un projet complet !</p>` },
                { type: 'heading', content: 'La fonction input()' },
                {
                    type: 'code', code: `# input() attend que l'utilisateur tape quelque chose
nom = input("Quel est votre nom ? ")
print(f"Enchanté, {nom} !")

# ⚠️ input() retourne TOUJOURS une chaîne (str)
age_str = input("Votre âge ? ")
age = int(age_str)  # Conversion nécessaire pour calculer

# En une seule ligne
age = int(input("Votre âge ? "))

# Gestion des erreurs de saisie
try:
    nombre = int(input("Entrez un nombre : "))
    print(f"Le double est {nombre * 2}")
except ValueError:
    print("Ce n'est pas un nombre valide !")`, title: 'input()'
                },
                { type: 'heading', content: 'Formatage avancé de print()' },
                {
                    type: 'code', code: `# Paramètre sep (séparateur)
print("Python", "est", "génial", sep=" - ")
# Python - est - génial

# Paramètre end (fin de ligne)
for i in range(5):
    print(i, end=" → ")
print("Fin")
# 0 → 1 → 2 → 3 → 4 → Fin

# Formatage avec f-strings
pi = 3.14159265
print(f"Pi = {pi:.2f}")          # Pi = 3.14
print(f"Pi = {pi:.4f}")          # Pi = 3.1416

nombre = 42
print(f"Binaire : {nombre:b}")   # Binaire : 101010
print(f"Hex     : {nombre:x}")   # Hex     : 2a
print(f"Aligné  : {nombre:>10}") # Aligné  :         42
print(f"Zéros   : {nombre:05}")  # Zéros   : 00042`, title: 'print() avancé'
                },
                { type: 'heading', content: '🛠️ Projet Final : Jeu du Nombre Mystère' },
                { type: 'text', content: `<p>Voici un projet complet qui utilise <strong>toutes</strong> les notions apprises dans ce niveau :</p>` },
                {
                    type: 'code', code: `# 🎮 JEU DU NOMBRE MYSTÈRE
# L'ordinateur choisit un nombre, le joueur doit le deviner

import random  # Module pour générer des nombres aléatoires

def jeu_nombre_mystere():
    """Jeu complet du nombre mystère."""
    print("=" * 40)
    print("🎯 JEU DU NOMBRE MYSTÈRE")
    print("=" * 40)
    
    # Configuration
    minimum = 1
    maximum = 100
    nombre_secret = random.randint(minimum, maximum)
    tentatives = 0
    max_tentatives = 7
    
    print(f"\\nJe pense à un nombre entre {minimum} et {maximum}.")
    print(f"Vous avez {max_tentatives} tentatives.\\n")
    
    # Boucle de jeu
    while tentatives < max_tentatives:
        tentatives += 1
        essais_restants = max_tentatives - tentatives
        
        # Demander une proposition
        try:
            proposition = int(input(f"Tentative {tentatives}/{max_tentatives} : "))
        except ValueError:
            print("⚠️ Entrez un nombre valide !")
            tentatives -= 1  # Ne pas compter cette tentative
            continue
        
        # Vérifier la proposition
        if proposition == nombre_secret:
            print(f"\\n🎉 BRAVO ! Le nombre était bien {nombre_secret} !")
            print(f"Trouvé en {tentatives} tentative(s) !")
            
            # Évaluation
            if tentatives <= 3:
                print("⭐⭐⭐ Incroyable !")
            elif tentatives <= 5:
                print("⭐⭐ Très bien !")
            else:
                print("⭐ Bien joué !")
            return True
        
        elif proposition < nombre_secret:
            print(f"📈 C'est plus ! ({essais_restants} essai(s) restant(s))")
        else:
            print(f"📉 C'est moins ! ({essais_restants} essai(s) restant(s))")
    
    # Défaite
    print(f"\\n💔 Perdu ! Le nombre mystère était {nombre_secret}.")
    return False

# Lancer le jeu
def main():
    jouer = True
    victoires = 0
    parties = 0
    
    while jouer:
        parties += 1
        if jeu_nombre_mystere():
            victoires += 1
        
        print(f"\\n📊 Score : {victoires}/{parties} victoire(s)")
        reponse = input("\\nRejouer ? (oui/non) : ").lower()
        jouer = reponse in ("oui", "o", "yes", "y")
    
    print("\\nMerci d'avoir joué ! À bientôt 🐍")

# Point d'entrée
if __name__ == "__main__":
    main()`, title: '🎮 jeu_nombre_mystere.py – Projet complet'
                },
                { type: 'info', variant: 'tip', title: '🎓 Ce que ce projet utilise', content: 'Variables, types (int, str, bool), opérateurs, conditions (if/elif/else), boucles (while), fonctions (def, return), input/print, gestion d\'erreurs (try/except), module import. Vous maîtrisez toutes les fondations !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel type retourne toujours input() ?', options: ['int', 'float', 'str', 'Ça dépend de ce que l\'utilisateur tape'], correct: 2, explanation: 'input() retourne toujours une chaîne de caractères (str), même si l\'utilisateur tape un nombre.' },
                        { question: 'Que fait end="" dans print() ?', options: ['Termine le programme', 'Empêche le retour à la ligne', 'Ajoute un espace', 'Rien'], correct: 1, explanation: 'Par défaut, print() ajoute un retour à la ligne. end="" le remplace par rien.' },
                    ]
                },
            ]
        },
    ]
}
