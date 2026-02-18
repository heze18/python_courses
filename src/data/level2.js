export const level2 = {
    id: 'level2',
    title: 'Structures de Données & Fichiers',
    shortTitle: 'Niv. 2 – Données',
    description: 'Manipuler efficacement les données complexes et interagir avec le système de fichiers. Durée : 12 à 15 jours.',
    lessons: [
        {
            id: 'l2-lists',
            title: '2.1 Listes',
            duration: '25 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>listes</strong> sont les structures de données les plus utilisées en Python. Elles stockent une collection <em>ordonnée</em> et <em>modifiable</em> d'éléments.</p>` },
                { type: 'heading', content: 'Créer et manipuler des listes' },
                {
                    type: 'code', code: `# Créer des listes
fruits = ["pomme", "banane", "cerise"]
nombres = [1, 2, 3, 4, 5]
mixte = [42, "hello", True, 3.14]  # Types mixtes autorisés
vide = []

# Accéder aux éléments (index commence à 0)
print(fruits[0])    # pomme
print(fruits[-1])   # cerise (dernier élément)
print(fruits[1:3])  # ['banane', 'cerise'] (slicing)

# Modifier des éléments
fruits[1] = "mangue"
print(fruits)  # ['pomme', 'mangue', 'cerise']

# Longueur
print(len(fruits))  # 3`, title: 'Bases des listes'
                },
                { type: 'heading', content: 'Méthodes essentielles' },
                {
                    type: 'code', code: `# Ajouter des éléments
fruits = ["pomme", "banane"]
fruits.append("cerise")         # Ajouter à la fin
fruits.insert(1, "mangue")      # Insérer à l'index 1
fruits.extend(["kiwi", "poire"]) # Ajouter plusieurs éléments
print(fruits)  # ['pomme', 'mangue', 'banane', 'cerise', 'kiwi', 'poire']

# Supprimer des éléments
fruits.remove("banane")   # Supprime par valeur
dernier = fruits.pop()    # Supprime et retourne le dernier
del fruits[0]             # Supprime par index

# Rechercher
print("mangue" in fruits)       # True (vérifier si présent)
print(fruits.index("mangue"))   # Position de l'élément
print(fruits.count("mangue"))   # Nombre d'occurrences

# Trier
nombres = [3, 1, 4, 1, 5, 9, 2, 6]
nombres.sort()                  # Tri en place (modifie la liste)
print(nombres)                  # [1, 1, 2, 3, 4, 5, 6, 9]
nombres.sort(reverse=True)      # Tri décroissant
nombres_tries = sorted(nombres) # Crée une NOUVELLE liste triée

# Inverser
nombres.reverse()

# Copier (attention aux pièges !)
copie = fruits.copy()           # Copie indépendante
# OU copie = fruits[:]
# ⚠️ copie = fruits crée un ALIAS, pas une copie !`, title: 'Méthodes de liste'
                },
                { type: 'heading', content: 'Slicing avancé' },
                {
                    type: 'code', code: `# Slicing : liste[debut:fin:pas]
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[2:7])      # [2, 3, 4, 5, 6]
print(nums[:5])       # [0, 1, 2, 3, 4] (du début à 5)
print(nums[5:])       # [5, 6, 7, 8, 9] (de 5 à la fin)
print(nums[::2])      # [0, 2, 4, 6, 8] (un sur deux)
print(nums[::-1])     # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (inversé)
print(nums[1:8:3])    # [1, 4, 7] (de 1 à 8, pas de 3)

# Le slicing crée une COPIE
sous_liste = nums[2:5]
sous_liste[0] = 999
print(nums)       # [0, 1, 2, 3, ...] ← pas modifié !`, title: 'Slicing'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que retourne fruits[-2] si fruits = ["a", "b", "c", "d"] ?', options: ['"b"', '"c"', '"d"', 'Erreur'], correct: 1, explanation: 'Les indices négatifs comptent depuis la fin : -1 = "d", -2 = "c".' },
                        { question: 'Quelle méthode ajoute un élément à la fin d\'une liste ?', options: ['add()', 'push()', 'append()', 'insert()'], correct: 2, explanation: 'append() ajoute un élément à la fin de la liste.' },
                        { question: 'Comment inverser une liste en une ligne ?', options: ['list.invert()', 'list[::-1]', 'reversed(list)', 'Les deux derniers'], correct: 3, explanation: 'list[::-1] crée une copie inversée, reversed() crée un itérateur inversé.' },
                    ]
                },
            ]
        },
        {
            id: 'l2-tuples-sets',
            title: '2.2 Tuples et Ensembles',
            duration: '20 min',
            difficulty: 'Débutant',
            content: [
                { type: 'heading', content: 'Les Tuples (tuple)' },
                { type: 'text', content: `<p>Un <strong>tuple</strong> est comme une liste, mais <em>immuable</em> (non modifiable après création). On utilise des parenthèses au lieu de crochets.</p>` },
                {
                    type: 'code', code: `# Créer des tuples
coord = (3, 5)
couleurs = ("rouge", "vert", "bleu")
singleton = (42,)    # ⚠️ La virgule est nécessaire pour un seul élément !
sans_parens = 1, 2, 3  # Les parenthèses sont optionnelles

# Accéder aux éléments (comme les listes)
print(couleurs[0])    # rouge
print(couleurs[-1])   # bleu
print(couleurs[1:])   # ('vert', 'bleu')

# ❌ Les tuples sont IMMUABLES
# couleurs[0] = "jaune"  → TypeError !

# Unpacking (déballage) – TRÈS UTILE
x, y = coord
print(f"x={x}, y={y}")  # x=3, y=5

# Échange de variables élégant
a, b = 5, 10
a, b = b, a
print(a, b)  # 10, 5

# Fonctions retournant des tuples
def min_max(liste):
    return min(liste), max(liste)

petit, grand = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {petit}, Max: {grand}")  # Min: 1, Max: 9`, title: 'Tuples'
                },
                { type: 'info', variant: 'info', title: '📝 Quand utiliser un tuple vs une liste ?', content: 'Utilisez un tuple pour des données qui ne doivent PAS changer (coordonnées, couleurs, clés de dictionnaire). Utilisez une liste pour des collections que vous modifierez.' },
                { type: 'heading', content: 'Les Ensembles (set)' },
                {
                    type: 'code', code: `# Les ensembles : collections SANS DOUBLONS et NON ORDONNÉES
nombres = {1, 2, 3, 4, 5}
lettres = set("abracadabra")
print(lettres)  # {'a', 'r', 'b', 'c', 'd'} – pas de doublons !

# Supprimer les doublons d'une liste
liste_doublons = [1, 2, 2, 3, 3, 3, 4]
sans_doublons = list(set(liste_doublons))
print(sans_doublons)  # [1, 2, 3, 4]

# Opérations ensemblistes
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)  # Union : {1, 2, 3, 4, 5, 6, 7, 8}
print(a & b)  # Intersection : {4, 5}
print(a - b)  # Différence : {1, 2, 3}
print(a ^ b)  # Différence symétrique : {1, 2, 3, 6, 7, 8}

# Vérification d'appartenance (très rapide !)
print(3 in a)  # True – O(1) vs O(n) pour les listes

# Méthodes
a.add(6)        # Ajouter un élément
a.discard(1)    # Supprimer (sans erreur si absent)
a.remove(2)     # Supprimer (erreur si absent)`, title: 'Ensembles'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Les tuples sont...', options: ['Modifiables (mutables)', 'Non modifiables (immuables)', 'Plus rapides que les ensembles', 'Toujours vides'], correct: 1, explanation: 'Les tuples sont immuables : on ne peut pas modifier leurs éléments après création.' },
                        { question: 'Comment supprimer les doublons d\'une liste ?', options: ['list.unique()', 'list(set(ma_liste))', 'ma_liste.deduplicate()', 'sorted(ma_liste)'], correct: 1, explanation: 'Convertir en set supprime les doublons, puis reconvertir en list.' },
                    ]
                },
            ]
        },
        {
            id: 'l2-dicts',
            title: '2.3 Dictionnaires',
            duration: '25 min',
            difficulty: 'Débutant',
            content: [
                { type: 'text', content: `<p>Les <strong>dictionnaires</strong> stockent des paires <em>clé-valeur</em>. C'est l'une des structures les plus puissantes et les plus utilisées de Python.</p>` },
                {
                    type: 'code', code: `# Créer un dictionnaire
personne = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris",
    "langages": ["Python", "JavaScript"]
}

# Accéder aux valeurs
print(personne["nom"])         # Alice
print(personne.get("age"))     # 25
print(personne.get("email", "N/A"))  # N/A (valeur par défaut)

# Modifier et ajouter
personne["age"] = 26           # Modifier
personne["email"] = "a@b.com"  # Ajouter une nouvelle clé

# Supprimer
del personne["ville"]
email = personne.pop("email")  # Supprime et retourne la valeur

# Vérifier l'existence d'une clé
print("nom" in personne)  # True
print("ville" in personne)  # False`, title: 'Dictionnaires'
                },
                { type: 'heading', content: 'Parcourir un dictionnaire' },
                {
                    type: 'code', code: `etudiant = {"nom": "Bob", "age": 22, "note": 15.5}

# Parcourir les clés
for cle in etudiant:
    print(cle)

# Parcourir les valeurs
for valeur in etudiant.values():
    print(valeur)

# Parcourir clés ET valeurs (le plus courant)
for cle, valeur in etudiant.items():
    print(f"{cle} : {valeur}")

# Dictionnaires imbriqués
etudiants = {
    "alice": {"age": 25, "note": 16},
    "bob": {"age": 22, "note": 14},
    "charlie": {"age": 23, "note": 18}
}

for nom, infos in etudiants.items():
    print(f"{nom.capitalize()} : {infos['note']}/20")

# Trouver le meilleur étudiant
meilleur = max(etudiants, key=lambda x: etudiants[x]["note"])
print(f"Meilleur : {meilleur}")  # charlie`, title: 'Parcours et imbrication'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que retourne dict.get("x", 0) si "x" n\'existe pas ?', options: ['None', 'Erreur', '0', '""'], correct: 2, explanation: 'get() retourne la valeur par défaut (ici 0) si la clé n\'existe pas.' },
                        { question: 'Comment itérer sur les clés ET valeurs d\'un dictionnaire ?', options: ['for k, v in d:', 'for k, v in d.items():', 'for k, v in d.pairs():', 'for k, v in d.all():'], correct: 1, explanation: 'La méthode items() retourne des paires (clé, valeur).' },
                    ]
                },
            ]
        },
        {
            id: 'l2-comprehensions',
            title: '2.4 Compréhensions',
            duration: '20 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'text', content: `<p>Les <strong>compréhensions</strong> (comprehensions) sont une syntaxe concise et élégante propre à Python pour créer des listes, dictionnaires et ensembles.</p>` },
                {
                    type: 'code', code: `# List comprehension – créer une liste en UNE ligne

# Sans comprehension
carres = []
for i in range(10):
    carres.append(i ** 2)

# Avec comprehension (BEAUCOUP plus Pythonique !)
carres = [i ** 2 for i in range(10)]
print(carres)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Avec condition (filtre)
pairs = [i for i in range(20) if i % 2 == 0]
print(pairs)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Avec transformation conditionnelle
labels = ["pair" if i % 2 == 0 else "impair" for i in range(5)]
print(labels)  # ['pair', 'impair', 'pair', 'impair', 'pair']

# Comprehension imbriquée (aplatir une matrice)
matrice = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
aplati = [x for ligne in matrice for x in ligne]
print(aplati)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]`, title: 'List Comprehension'
                },
                { type: 'heading', content: 'Dict et Set Comprehensions' },
                {
                    type: 'code', code: `# Dict comprehension
carres_dict = {i: i**2 for i in range(6)}
print(carres_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Inverser un dictionnaire
original = {"a": 1, "b": 2, "c": 3}
inverse = {v: k for k, v in original.items()}
print(inverse)  # {1: 'a', 2: 'b', 3: 'c'}

# Filtrer un dictionnaire
notes = {"Alice": 16, "Bob": 8, "Charlie": 14, "Diana": 5}
reussis = {nom: note for nom, note in notes.items() if note >= 10}
print(reussis)  # {'Alice': 16, 'Charlie': 14}

# Set comprehension
mots = ["hello", "world", "hello", "python"]
longueurs = {len(mot) for mot in mots}
print(longueurs)  # {5, 6}`, title: 'Dict & Set Comprehensions'
                },
                { type: 'info', variant: 'tip', title: '💡 Quand utiliser les compréhensions ?', content: 'Utilisez-les quand la logique tient en UNE ligne et reste lisible. Si la logique est complexe (plusieurs if/else, boucles imbriquées), préférez une boucle for classique.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Que produit [x*2 for x in [1,2,3]] ?', options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', '[[1,2,3], [1,2,3]]'], correct: 1, explanation: 'Chaque élément est multiplié par 2 : 1*2=2, 2*2=4, 3*2=6.' },
                    ]
                },
            ]
        },
        {
            id: 'l2-files',
            title: '2.5 Fichiers (CSV & JSON)',
            duration: '25 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'text', content: `<p>Python rend la lecture et l'écriture de fichiers très simple avec l'instruction <code>with open()</code>.</p>` },
                { type: 'heading', content: 'Lire et écrire des fichiers texte' },
                {
                    type: 'code', code: `# Écrire dans un fichier
with open("mon_fichier.txt", "w", encoding="utf-8") as f:
    f.write("Première ligne\\n")
    f.write("Deuxième ligne\\n")
    f.write("Troisième ligne\\n")

# Lire tout le contenu
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    contenu = f.read()
    print(contenu)

# Lire ligne par ligne (plus économe en mémoire)
with open("mon_fichier.txt", "r", encoding="utf-8") as f:
    for ligne in f:
        print(ligne.strip())  # strip() enlève le \\n

# Ajouter du contenu (mode "a" pour append)
with open("mon_fichier.txt", "a", encoding="utf-8") as f:
    f.write("Ligne ajoutée !\\n")`, title: 'Fichiers texte'
                },
                { type: 'info', variant: 'info', title: '📝 Pourquoi "with open()" ?', content: 'Le mot-clé with garantit que le fichier sera fermé automatiquement, même si une erreur survient. C\'est la manière recommandée d\'ouvrir des fichiers.' },
                { type: 'heading', content: 'Fichiers JSON' },
                {
                    type: 'code', code: `import json

# Écrire du JSON
donnees = {
    "nom": "Alice",
    "age": 25,
    "langages": ["Python", "JavaScript"],
    "adresse": {
        "ville": "Paris",
        "pays": "France"
    }
}

with open("donnees.json", "w", encoding="utf-8") as f:
    json.dump(donnees, f, indent=2, ensure_ascii=False)

# Lire du JSON
with open("donnees.json", "r", encoding="utf-8") as f:
    data = json.load(f)
    print(data["nom"])  # Alice
    print(data["langages"][0])  # Python

# Convertir string ↔ JSON
json_str = json.dumps(donnees, indent=2, ensure_ascii=False)
print(json_str)

donnees_parsed = json.loads(json_str)`, title: 'JSON'
                },
                { type: 'heading', content: 'Fichiers CSV' },
                {
                    type: 'code', code: `import csv

# Écrire un CSV
etudiants = [
    ["Nom", "Age", "Note"],
    ["Alice", 25, 16],
    ["Bob", 22, 14],
    ["Charlie", 23, 18]
]

with open("etudiants.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(etudiants)

# Lire un CSV
with open("etudiants.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for ligne in reader:
        print(ligne)

# Lire comme dictionnaire (RECOMMANDÉ)
with open("etudiants.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for etudiant in reader:
        print(f"{etudiant['Nom']} a eu {etudiant['Note']}/20")`, title: 'CSV'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel mode ouvre un fichier pour ajouter du contenu sans écraser ?', options: ['"r"', '"w"', '"a"', '"x"'], correct: 2, explanation: 'Le mode "a" (append) ajoute à la fin du fichier sans effacer le contenu existant.' },
                        { question: 'Quelle fonction convertit un dictionnaire Python en JSON ?', options: ['json.parse()', 'json.dump()', 'json.encode()', 'json.convert()'], correct: 1, explanation: 'json.dump() écrit dans un fichier, json.dumps() retourne une chaîne JSON.' },
                    ]
                },
            ]
        },
        {
            id: 'l2-errors',
            title: '2.6 Gestion d\'Erreurs & Modules',
            duration: '25 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'heading', content: 'try / except / finally' },
                {
                    type: 'code', code: `# Gestion des erreurs avec try/except
try:
    nombre = int(input("Entrez un nombre : "))
    resultat = 100 / nombre
    print(f"100 / {nombre} = {resultat}")
except ValueError:
    print("Ce n'est pas un nombre valide !")
except ZeroDivisionError:
    print("Division par zéro impossible !")
except Exception as e:
    print(f"Erreur inattendue : {e}")
else:
    print("Tout s'est bien passé !")  # Exécuté si PAS d'erreur
finally:
    print("Nettoyage terminé.")  # Exécuté TOUJOURS

# Lever une exception
def diviser(a, b):
    if b == 0:
        raise ValueError("Le diviseur ne peut pas être zéro !")
    return a / b

try:
    diviser(10, 0)
except ValueError as e:
    print(f"Erreur : {e}")`, title: 'Gestion d\'erreurs'
                },
                { type: 'heading', content: 'Modules et imports' },
                {
                    type: 'code', code: `# Importer un module entier
import math
print(math.pi)        # 3.141592653589793
print(math.sqrt(16))  # 4.0

# Importer des fonctions spécifiques
from math import sqrt, pi
print(sqrt(25))       # 5.0

# Alias
import math as m
print(m.ceil(3.2))    # 4

# Créer son propre module
# Fichier : utils.py
# def saluer(nom):
#     return f"Bonjour {nom} !"

# Fichier : main.py
# from utils import saluer
# print(saluer("Alice"))

# Modules utiles de la bibliothèque standard
import os           # Système de fichiers
import datetime     # Dates et heures
import random       # Nombres aléatoires
import collections  # Structures de données avancées

print(os.getcwd())                          # Répertoire courant
print(datetime.datetime.now())               # Date/heure actuelle
print(random.choice(["pile", "face"]))       # Choix aléatoire`, title: 'Modules'
                },
                { type: 'heading', content: '🛠️ Projet : Gestionnaire de Tâches CLI' },
                {
                    type: 'code', code: `import json
import os
from datetime import datetime

FICHIER = "taches.json"

def charger_taches():
    """Charge les tâches depuis le fichier JSON."""
    if os.path.exists(FICHIER):
        with open(FICHIER, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

def sauvegarder_taches(taches):
    """Sauvegarde les tâches dans le fichier JSON."""
    with open(FICHIER, "w", encoding="utf-8") as f:
        json.dump(taches, f, indent=2, ensure_ascii=False)

def afficher_taches(taches):
    """Affiche toutes les tâches."""
    if not taches:
        print("\\n📭 Aucune tâche.")
        return
    print("\\n📋 VOS TÂCHES :")
    print("-" * 50)
    for i, t in enumerate(taches, 1):
        statut = "✅" if t["fait"] else "⬜"
        date = t.get("date", "")
        print(f"  {i}. {statut} {t['titre']} ({date})")

def ajouter_tache(taches):
    """Ajoute une nouvelle tâche."""
    titre = input("Titre de la tâche : ").strip()
    if titre:
        tache = {
            "titre": titre,
            "fait": False,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M")
        }
        taches.append(tache)
        sauvegarder_taches(taches)
        print(f"✅ Tâche '{titre}' ajoutée !")

def terminer_tache(taches):
    """Marque une tâche comme terminée."""
    afficher_taches(taches)
    try:
        num = int(input("Numéro de la tâche : ")) - 1
        if 0 <= num < len(taches):
            taches[num]["fait"] = True
            sauvegarder_taches(taches)
            print("✅ Tâche marquée comme terminée !")
    except (ValueError, IndexError):
        print("❌ Numéro invalide.")

def supprimer_tache(taches):
    """Supprime une tâche."""
    afficher_taches(taches)
    try:
        num = int(input("Numéro à supprimer : ")) - 1
        if 0 <= num < len(taches):
            supprimee = taches.pop(num)
            sauvegarder_taches(taches)
            print(f"🗑️ '{supprimee['titre']}' supprimée.")
    except (ValueError, IndexError):
        print("❌ Numéro invalide.")

def main():
    taches = charger_taches()
    while True:
        print("\\n" + "=" * 40)
        print("📝 GESTIONNAIRE DE TÂCHES")
        print("=" * 40)
        print("1. Afficher les tâches")
        print("2. Ajouter une tâche")
        print("3. Terminer une tâche")
        print("4. Supprimer une tâche")
        print("5. Quitter")
        
        choix = input("\\nVotre choix : ").strip()
        if choix == "1":
            afficher_taches(taches)
        elif choix == "2":
            ajouter_tache(taches)
        elif choix == "3":
            terminer_tache(taches)
        elif choix == "4":
            supprimer_tache(taches)
        elif choix == "5":
            print("\\nAu revoir ! 👋")
            break

if __name__ == "__main__":
    main()`, title: '🛠️ gestionnaire_taches.py – Projet complet Niveau 2'
                },
                { type: 'info', variant: 'tip', title: '🎓 Ce projet utilise', content: 'Listes, dictionnaires, fichiers JSON, gestion d\'erreurs, modules, fonctions. Bravo, vous maîtrisez les structures de données !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel bloc s\'exécute TOUJOURS, avec ou sans erreur ?', options: ['try', 'except', 'else', 'finally'], correct: 3, explanation: 'Le bloc finally s\'exécute toujours, qu\'il y ait eu une erreur ou non.' },
                        { question: 'Comment lever une exception en Python ?', options: ['throw Error()', 'raise Exception()', 'error()', 'except()'], correct: 1, explanation: 'On utilise raise suivi du type d\'exception à lever.' },
                    ]
                },
            ]
        },
    ]
}
