export const level5 = {
    id: 'level5',
    title: 'Python Expert (Internals & Optimisation)',
    shortTitle: 'Niv. 5 – Expert',
    description: 'Comprendre ce qui se passe sous le capot pour optimiser et débugger expertement. Durée : 18 à 25 jours.',
    lessons: [
        {
            id: 'l5-memory',
            title: '5.1 Modèle Mémoire Python',
            duration: '30 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Pour devenir expert, vous devez comprendre comment Python gère la <strong>mémoire</strong>. En Python, tout est un <em>objet</em>, et les variables sont des <em>références</em> (pointeurs) vers ces objets.</p>` },
                { type: 'heading', content: 'Références et identité' },
                {
                    type: 'code', code: `# En Python, les variables sont des RÉFÉRENCES
a = [1, 2, 3]
b = a           # b pointe vers LE MÊME objet que a

b.append(4)
print(a)  # [1, 2, 3, 4] ← a est aussi modifié !

# id() retourne l'adresse mémoire de l'objet
print(id(a))        # même adresse
print(id(b))        # même adresse !
print(a is b)       # True (même objet)

# Copie superficielle vs profonde
import copy

original = [[1, 2], [3, 4]]
copie_sup = copy.copy(original)       # Copie superficielle
copie_prof = copy.deepcopy(original)  # Copie profonde

original[0].append(999)
print(copie_sup)    # [[1, 2, 999], [3, 4]] ← listes internes partagées !
print(copie_prof)   # [[1, 2], [3, 4]] ← totalement indépendant`, title: 'Références'
                },
                { type: 'heading', content: 'Mutabilité et immutabilité' },
                {
                    type: 'code', code: `# IMMUABLES : int, float, str, tuple, frozenset
a = "hello"
b = a
a = a + " world"  # Crée un NOUVEL objet
print(b)           # "hello" ← pas modifié

# Interning (optimisation Python)
x = 256
y = 256
print(x is y)  # True ! (Python réutilise les petits entiers -5 à 256)

x = 257
y = 257
print(x is y)  # False (potentiellement, selon l'implémentation)

# MUTABLES : list, dict, set
liste1 = [1, 2, 3]
liste2 = liste1
liste1 += [4]  # Modifie EN PLACE pour les mutables
print(liste2)  # [1, 2, 3, 4]

# Piège classique : argument par défaut mutable
def ajouter(element, liste=[]):  # ⚠️ DANGER !
    liste.append(element)
    return liste

print(ajouter(1))  # [1]
print(ajouter(2))  # [1, 2] ← la même liste est réutilisée !

# Solution : utiliser None
def ajouter_v2(element, liste=None):
    if liste is None:
        liste = []
    liste.append(element)
    return liste`, title: 'Mutabilité'
                },
                { type: 'heading', content: 'Garbage Collector' },
                {
                    type: 'code', code: `import sys
import gc

# Compteur de références
a = [1, 2, 3]
print(sys.getrefcount(a))  # 2 (a + paramètre de getrefcount)

b = a
print(sys.getrefcount(a))  # 3

del b
print(sys.getrefcount(a))  # 2

# Le garbage collector gère les références circulaires
class Noeud:
    def __init__(self):
        self.suivant = None

a = Noeud()
b = Noeud()
a.suivant = b
b.suivant = a  # Référence circulaire !

# Le GC collecte quand les objets ne sont plus accessibles
del a, b  # Le GC détectera le cycle

# Forcer la collecte
gc.collect()
print(gc.get_stats())  # Statistiques du GC`, title: 'Garbage Collector'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que fait a is b en Python ?', options: ['Compare les valeurs', 'Compare les adresses mémoire (identité)', 'Compare les types', 'Vérifie l\'héritage'], correct: 1, explanation: '"is" vérifie si deux variables pointent vers le MÊME objet en mémoire, contrairement à == qui compare les valeurs.' },
                        { question: 'Pourquoi une liste comme argument par défaut est-elle dangereuse ?', options: ['C\'est interdit en Python', 'La liste est partagée entre tous les appels', 'Ça cause une erreur', 'La liste est copiée à chaque appel'], correct: 1, explanation: 'L\'objet mutable par défaut est créé UNE SEULE FOIS et partagé entre tous les appels. Utilisez None à la place.' },
                        { question: 'Quelle est la différence entre copy.copy() et copy.deepcopy() ?', options: ['Aucune', 'copy copie le 1er niveau, deepcopy copie récursivement', 'deepcopy est plus lent mais identique', 'copy ne fonctionne qu\'avec les listes'], correct: 1, explanation: 'copy.copy() ne copie que le premier niveau (les références internes sont partagées). deepcopy() copie tout récursivement.' },
                    ]
                },
            ]
        },
        {
            id: 'l5-meta',
            title: '5.2 Métaprogrammation',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>La <strong>métaprogrammation</strong> consiste à écrire du code qui manipule du code. En Python, les classes sont elles-mêmes des objets, créés par des <em>métaclasses</em>.</p>` },
                {
                    type: 'code', code: `# En Python, TOUT est un objet, y compris les classes
class MaClasse:
    pass

# type() est la métaclasse par défaut
print(type(MaClasse))  # <class 'type'>
print(type(42))        # <class 'int'>
print(type(type))      # <class 'type'> (type est sa propre métaclasse !)

# Créer une classe dynamiquement avec type()
# type(nom, bases, attributs)
Animal = type("Animal", (), {
    "espece": "inconnu",
    "parler": lambda self: f"Je suis un {self.espece}"
})

a = Animal()
a.espece = "chat"
print(a.parler())  # Je suis un chat

# getattr / setattr / hasattr
class Config:
    debug = False
    version = "1.0"

config = Config()
print(getattr(config, "version"))          # "1.0"
print(getattr(config, "missing", "N/A"))   # "N/A" (valeur par défaut)
setattr(config, "debug", True)
print(hasattr(config, "debug"))            # True

# Accéder aux attributs dynamiquement
for attr in ["debug", "version"]:
    print(f"{attr} = {getattr(config, attr)}")`, title: 'Métaprogrammation'
                },
                { type: 'heading', content: 'Introduction aux métaclasses' },
                {
                    type: 'code', code: `# Métaclasse : contrôler la création des classes
class ValidatedMeta(type):
    """Métaclasse qui vérifie que les classes ont une docstring."""
    def __new__(mcs, name, bases, namespace):
        if not namespace.get("__doc__"):
            raise TypeError(f"La classe {name} doit avoir une docstring !")
        return super().__new__(mcs, name, bases, namespace)

class MonModele(metaclass=ValidatedMeta):
    """Ce modèle est documenté."""
    pass  # ✅ OK

# class SansDoc(metaclass=ValidatedMeta):
#     pass  # ❌ TypeError !

# Exemple pratique : Singleton
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    """Connexion unique à la base de données."""
    def __init__(self):
        self.connection = "Connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True (même instance !)`, title: 'Métaclasses'
                },
                { type: 'info', variant: 'warning', title: '⚠️ Quand utiliser les métaclasses ?', content: 'Les métaclasses sont un outil très avancé. La plupart du temps, les décorateurs de classe ou les __init_subclass__ suffisent. "Si vous vous demandez si vous avez besoin de métaclasses, vous n\'en avez probablement pas besoin." – Tim Peters' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quelle est la métaclasse par défaut en Python ?', options: ['object', 'type', 'meta', 'class'], correct: 1, explanation: 'type est la métaclasse par défaut. Toutes les classes sont des instances de type.' },
                        { question: 'Que fait getattr(obj, "nom", "inconnu") ?', options: ['Crée un attribut', 'Retourne la valeur de obj.nom ou "inconnu" si l\'attribut n\'existe pas', 'Supprime l\'attribut', 'Vérifie le type'], correct: 1, explanation: 'getattr accède dynamiquement aux attributs et permet de spécifier une valeur par défaut.' },
                        { question: 'Le pattern Singleton avec métaclasse garantit...', options: ['Que la classe est rapide', 'Qu\'une seule instance existe', 'Que la classe est thread-safe', 'Qu\'on ne peut pas hériter'], correct: 1, explanation: 'Un Singleton s\'assure qu\'il n\'y a qu\'une seule instance de la classe dans tout le programme.' },
                    ]
                },
            ]
        },
        {
            id: 'l5-async',
            title: '5.3 Concurrence : Threading, Multiprocessing, Asyncio',
            duration: '35 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Python offre trois approches pour la <strong>concurrence</strong> : le threading (I/O), le multiprocessing (CPU) et asyncio (I/O asynchrone).</p>` },
                { type: 'heading', content: 'Threading (I/O-bound)' },
                {
                    type: 'code', code: `import threading
import time

def telecharger(url, duree):
    """Simule un téléchargement."""
    print(f"📥 Début : {url}")
    time.sleep(duree)  # Simule l'attente I/O
    print(f"✅ Fin : {url}")

# Sans threading (séquentiel)
start = time.time()
telecharger("page1.html", 2)
telecharger("page2.html", 2)
print(f"Séquentiel : {time.time() - start:.1f}s")  # ~4s

# Avec threading (concurrent)
start = time.time()
t1 = threading.Thread(target=telecharger, args=("page1.html", 2))
t2 = threading.Thread(target=telecharger, args=("page2.html", 2))
t1.start()
t2.start()
t1.join()  # Attendre la fin
t2.join()
print(f"Threading : {time.time() - start:.1f}s")  # ~2s !

# ThreadPoolExecutor (plus pratique)
from concurrent.futures import ThreadPoolExecutor

urls = ["page1", "page2", "page3", "page4"]
with ThreadPoolExecutor(max_workers=4) as pool:
    pool.map(lambda u: telecharger(u, 1), urls)`, title: 'Threading'
                },
                { type: 'heading', content: 'Le GIL (Global Interpreter Lock)' },
                {
                    type: 'text', content: `<p>Le <strong>GIL</strong> est un verrou qui empêche l'exécution simultanée de code Python par plusieurs threads. Conséquences :</p>
<ul>
<li><strong>I/O-bound</strong> (réseau, fichiers) → Threading fonctionne bien (le GIL est relâché pendant l'I/O)</li>
<li><strong>CPU-bound</strong> (calculs) → Threading est inutile. Utilisez <strong>multiprocessing</strong></li>
</ul>` },
                { type: 'heading', content: 'Asyncio (async/await)' },
                {
                    type: 'code', code: `import asyncio

# Fonctions asynchrones avec async/await
async def telecharger_async(url, duree):
    print(f"📥 Début : {url}")
    await asyncio.sleep(duree)  # await = libère le contrôle
    print(f"✅ Fin : {url}")
    return f"Données de {url}"

async def main():
    # Exécuter plusieurs tâches en parallèle
    resultats = await asyncio.gather(
        telecharger_async("api/users", 2),
        telecharger_async("api/posts", 1),
        telecharger_async("api/comments", 3),
    )
    print(f"Résultats : {resultats}")

# Lancer
asyncio.run(main())  # Total ~3s (pas 6s !)

# Créer et gérer des tâches
async def main_v2():
    # Créer des tâches sans les attendre immédiatement
    task1 = asyncio.create_task(telecharger_async("url1", 2))
    task2 = asyncio.create_task(telecharger_async("url2", 2))
    
    # Faire autre chose pendant ce temps...
    print("Préparation en cours...")
    
    # Puis attendre les résultats
    r1 = await task1
    r2 = await task2`, title: 'Asyncio'
                },
                { type: 'info', variant: 'info', title: '📝 Quand utiliser quoi ?', content: 'Threading : téléchargements, requêtes réseau, I/O fichiers. Multiprocessing : calculs mathématiques, traitement d\'images, ML. Asyncio : serveurs web, APIs, beaucoup de connexions simultanées.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Le GIL empêche le vrai parallélisme pour...', options: ['Les tâches I/O', 'Les tâches CPU-bound', 'Asyncio', 'Toutes les tâches'], correct: 1, explanation: 'Le GIL empêche l\'exécution parallèle de code Python pur, mais est relâché pendant les opérations I/O.' },
                        { question: 'Que fait "await" dans asyncio ?', options: ['Arrête le programme', 'Met la coroutine en pause et libère l\'event loop', 'Crée un nouveau thread', 'Bloque tout'], correct: 1, explanation: 'await met la coroutine en pause, permettant à d\'autres tâches de s\'exécuter pendant l\'attente.' },
                        { question: 'Pour des calculs CPU intensifs, quelle approche utiliser ?', options: ['threading', 'asyncio', 'multiprocessing', 'concurrent.futures avec threads'], correct: 2, explanation: 'multiprocessing crée de vrais processus parallèles, contournant le GIL pour le calcul CPU.' },
                    ]
                },
            ]
        },
        {
            id: 'l5-typing',
            title: '5.4 Typage Statique et Type Hints',
            duration: '20 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Les <strong>type hints</strong> ajoutent des annotations de types à votre code Python. Ils améliorent la lisibilité, l'autocomplétion IDE, et permettent la vérification avec <code>mypy</code>.</p>` },
                {
                    type: 'code', code: `from typing import (
    List, Dict, Tuple, Optional, Union,
    Callable, Any, TypeVar, Generic, Protocol
)

# Types de base
def saluer(nom: str) -> str:
    return f"Bonjour {nom}"

def additionner(a: int, b: int) -> int:
    return a + b

# Collections
def moyennes(notes: list[float]) -> float:
    return sum(notes) / len(notes)

# Optional = peut être None
def trouver(nom: str) -> Optional[dict]:
    """Retourne un utilisateur ou None."""
    users = {"alice": {"age": 25}}
    return users.get(nom)

# Union = plusieurs types possibles
def traiter(valeur: int | str) -> str:
    return str(valeur)

# Callable = type pour les fonctions
def appliquer(func: Callable[[int], int], valeur: int) -> int:
    return func(valeur)

resultat = appliquer(lambda x: x * 2, 5)  # 10

# TypeVar pour les génériques
T = TypeVar("T")

def premier(items: list[T]) -> T:
    return items[0]

# Protocol (structural typing)
class Parleur(Protocol):
    def parler(self) -> str: ...

class Chat:
    def parler(self) -> str:
        return "Miaou"

def faire_parler(animal: Parleur) -> None:
    print(animal.parler())

faire_parler(Chat())  # ✅ Chat satisfait le Protocol`, title: 'Type Hints'
                },
                {
                    type: 'code', code: `# Vérification avec mypy
# Installation : pip install mypy
# Utilisation : mypy mon_fichier.py

# mypy détecte les erreurs de type SANS exécuter le code
def double(x: int) -> int:
    return x * 2

# double("hello")  # mypy ERROR: Argument 1 has incompatible type "str"`, title: 'mypy'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Les type hints en Python sont...', options: ['Obligatoires', 'Vérifiés à l\'exécution', 'Optionnels et vérifiés par des outils comme mypy', 'Activés avec un module'], correct: 2, explanation: 'Les type hints sont optionnels et ignorés à l\'exécution. Des outils comme mypy les vérifient statiquement.' },
                        { question: 'Que signifie Optional[str] ?', options: ['Le paramètre est obligatoire', 'La valeur peut être un str ou None', 'C\'est une liste de strings', 'C\'est une valeur par défaut'], correct: 1, explanation: 'Optional[str] est équivalent à str | None. La valeur peut être un string ou None.' },
                        { question: 'Quelle est la différence entre Protocol et ABC ?', options: ['Aucune', 'Protocol vérifie la structure (duck typing), ABC utilise l\'héritage', 'ABC est plus récent', 'Protocol est plus strict'], correct: 1, explanation: 'Protocol utilise le structural typing (si ça a les bonnes méthodes, c\'est OK), ABC exige l\'héritage explicite.' },
                    ]
                },
            ]
        },
        {
            id: 'l5-perf',
            title: '5.5 Performance et Profiling',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Optimiser un programme commence par le <strong>mesurer</strong>. Python offre plusieurs outils de profiling pour identifier les goulots d'étranglement.</p>` },
                {
                    type: 'code', code: `import time
import cProfile
from functools import lru_cache

# 1. Mesure simple avec time
start = time.perf_counter()
result = sum(i**2 for i in range(1_000_000))
elapsed = time.perf_counter() - start
print(f"Durée : {elapsed:.4f}s")

# 2. timeit pour des micro-benchmarks
import timeit

# Comparer deux approches
t1 = timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)
t2 = timeit.timeit('"-".join(map(str, range(100)))', number=10000)
print(f"Compréhension : {t1:.4f}s")
print(f"map()          : {t2:.4f}s")

# 3. cProfile pour profiler une fonction
def fibonacci_lent(n):
    if n < 2:
        return n
    return fibonacci_lent(n-1) + fibonacci_lent(n-2)

# cProfile.run('fibonacci_lent(30)')

# Optimiser avec le cache
@lru_cache(maxsize=None)
def fibonacci_rapide(n):
    if n < 2:
        return n
    return fibonacci_rapide(n-1) + fibonacci_rapide(n-2)

# Sans cache : fibonacci(35) prend ~4 secondes
# Avec cache : fibonacci(35) est instantané !`, title: 'Profiling & Optimisation'
                },
                { type: 'heading', content: 'Complexité algorithmique' },
                {
                    type: 'code', code: `# Comprendre la complexité est ESSENTIEL pour l'optimisation

# O(1) – Constant : accès dict/set
d = {i: i**2 for i in range(1_000_000)}
value = d[999999]  # Instantané !

# O(n) – Linéaire : parcourir une liste
def chercher_lineaire(liste, cible):
    for item in liste:
        if item == cible:
            return True
    return False

# O(log n) – Logarithmique : recherche binaire
def recherche_binaire(liste_triee, cible):
    gauche, droite = 0, len(liste_triee) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if liste_triee[milieu] == cible:
            return milieu
        elif liste_triee[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1

# O(n²) – Quadratique : à ÉVITER sur de grandes données
def doublons_lent(liste):  # O(n²)
    for i in range(len(liste)):
        for j in range(i+1, len(liste)):
            if liste[i] == liste[j]:
                return True
    return False

def doublons_rapide(liste):  # O(n) avec un set !
    return len(liste) != len(set(liste))`, title: 'Complexité algorithmique'
                },
                { type: 'info', variant: 'tip', title: '💡 Règles d\'optimisation', content: '1. "Premature optimization is the root of all evil" – Donald Knuth. 2. MESUREZ avant d\'optimiser. 3. Utilisez les bonnes structures (dict/set pour les recherches). 4. Le cache (@lru_cache) résout beaucoup de problèmes.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quelle structure utiliser pour vérifier rapidement l\'existence d\'un élément ?', options: ['list', 'tuple', 'set', 'str'], correct: 2, explanation: 'La vérification "x in set" est O(1) contre O(n) pour les listes.' },
                        { question: 'Que fait @lru_cache ?', options: ['Accélère la boucle for', 'Met en cache les résultats des appels précédents', 'Compresse les données', 'Parallélise le calcul'], correct: 1, explanation: '@lru_cache mémorise les résultats des appels précédents. Les appels avec les mêmes arguments retournent instantanément.' },
                        { question: 'Quel outil permet de mesurer précisément le temps d\'exécution d\'un petit bout de code ?', options: ['time.clock()', 'timeit.timeit()', 'os.timer()', 'sys.benchmark()'], correct: 1, explanation: 'timeit.timeit() exécute le code plusieurs fois et mesure le temps moyen, idéal pour les micro-benchmarks.' },
                    ]
                },
                { type: 'heading', content: '🛠️ Projet Validant : Analyseur de Performance' },
                { type: 'text', content: `<p>Ce projet combine le <strong>modèle mémoire</strong>, le <strong>profiling</strong> et l'<strong>optimisation</strong> pour analyser et améliorer un programme Python.</p>` },
                {
                    type: 'code', code: `import sys
import time
from functools import lru_cache
from typing import Callable, Any

# Décorateur de profiling
def profiler(func: Callable) -> Callable:
    """Décorateur qui mesure le temps et la mémoire."""
    def wrapper(*args, **kwargs):
        # Mémoire avant
        mem_avant = sys.getsizeof(args)
        
        # Temps
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        
        print(f"⏱️ {func.__name__}: {elapsed:.6f}s")
        return result
    return wrapper

# Version lente : sans cache
@profiler
def fibonacci_lent(n: int) -> int:
    if n < 2:
        return n
    return fibonacci_lent(n-1) + fibonacci_lent(n-2)

# Version rapide : avec cache
@lru_cache(maxsize=None)
def _fib_cache(n: int) -> int:
    if n < 2:
        return n
    return _fib_cache(n-1) + _fib_cache(n-2)

@profiler
def fibonacci_rapide(n: int) -> int:
    return _fib_cache(n)

# Comparaison list vs set pour la recherche
@profiler
def recherche_list(data: list, cibles: list) -> int:
    return sum(1 for c in cibles if c in data)  # O(n²)

@profiler
def recherche_set(data: set, cibles: list) -> int:
    return sum(1 for c in cibles if c in data)  # O(n)

# Démonstration
if __name__ == "__main__":
    print("=== Fibonacci ===")
    fibonacci_lent(30)
    fibonacci_rapide(30)
    
    print("\\n=== Recherche ===")
    data = list(range(100_000))
    cibles = [42, 9999, 50000, 99999, -1]
    recherche_list(data, cibles)
    recherche_set(set(data), cibles)`, title: '🛠️ analyseur_perf.py – Projet Niveau 5'
                },
                { type: 'info', variant: 'tip', title: '🎓 Ce projet démontre', content: 'Profiling (time.perf_counter, sys.getsizeof), Optimisation (lru_cache, set vs list), Type Hints (Callable, Any), Décorateurs de mesure. Vous comprenez maintenant les internals de Python !' },
            ]
        },
    ]
}
