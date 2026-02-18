export const level4 = {
    id: 'level4',
    title: 'Python Avancé (Fonctionnel & Décorateurs)',
    shortTitle: 'Niv. 4 – Avancé',
    description: 'Maîtriser les paradigmes avancés et écrire du code "Pythonique". Durée : 12 à 18 jours.',
    lessons: [
        {
            id: 'l4-functional',
            title: '4.1 Programmation Fonctionnelle',
            duration: '25 min',
            difficulty: 'Avancé',
            content: [
                { type: 'text', content: `<p>Python supporte le paradigme <strong>fonctionnel</strong> avec des fonctions de première classe, les <strong>lambdas</strong>, et les fonctions d'ordre supérieur comme <code>map</code>, <code>filter</code> et <code>reduce</code>.</p>` },
                { type: 'heading', content: 'Fonctions Lambda' },
                {
                    type: 'code', code: `# Lambda : fonction anonyme en une ligne
# syntaxe : lambda arguments: expression

carre = lambda x: x ** 2
print(carre(5))  # 25

# Comparaison avec une fonction classique
def carre_v2(x):
    return x ** 2

# Lambda avec plusieurs arguments
addition = lambda a, b: a + b
print(addition(3, 7))  # 10

# Utilisation principale : tri personnalisé
etudiants = [
    {"nom": "Alice", "note": 16},
    {"nom": "Bob", "note": 12},
    {"nom": "Charlie", "note": 18},
]

# Trier par note décroissante
etudiants_tries = sorted(etudiants, key=lambda e: e["note"], reverse=True)
for e in etudiants_tries:
    print(f"{e['nom']}: {e['note']}")
# Charlie: 18, Alice: 16, Bob: 12`, title: 'Lambda'
                },
                { type: 'heading', content: 'map, filter, reduce' },
                {
                    type: 'code', code: `from functools import reduce

# map() – appliquer une fonction à chaque élément
nombres = [1, 2, 3, 4, 5]
doubles = list(map(lambda x: x * 2, nombres))
print(doubles)  # [2, 4, 6, 8, 10]

# Équivalent en compréhension (souvent préféré)
doubles_v2 = [x * 2 for x in nombres]

# filter() – garder les éléments qui satisfont une condition
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)  # [2, 4]

# Équivalent en compréhension
pairs_v2 = [x for x in nombres if x % 2 == 0]

# reduce() – réduire une liste à une seule valeur
somme = reduce(lambda a, b: a + b, nombres)
print(somme)  # 15 (1+2+3+4+5)

produit = reduce(lambda a, b: a * b, nombres)
print(produit)  # 120 (1*2*3*4*5)

# Enchaîner les opérations
# Prendre les nombres impairs, les doubler, et les sommer
resultat = reduce(
    lambda a, b: a + b,
    map(lambda x: x * 2,
        filter(lambda x: x % 2 != 0, range(1, 11)))
)
print(resultat)  # 50`, title: 'map, filter, reduce'
                },
                { type: 'info', variant: 'tip', title: '💡 Compréhension vs map/filter', content: 'En Python, les compréhensions sont généralement préférées à map/filter car elles sont plus lisibles. Utilisez map/filter quand vous avez déjà une fonction nommée à appliquer.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Que retourne list(filter(lambda x: x > 3, [1,2,3,4,5])) ?', options: ['[1, 2, 3]', '[4, 5]', '[True, True]', '[3, 4, 5]'], correct: 1, explanation: 'filter garde uniquement les éléments pour lesquels la fonction retourne True. Seuls 4 et 5 sont > 3.' },
                        { question: 'Avec reduce(lambda a,b: a+b, [1,2,3]), quelle est la valeur finale ?', options: ['[1, 2, 3]', '3', '6', 'Erreur'], correct: 2, explanation: 'reduce calcule : (1+2)+3 = 6.' },
                        { question: 'Quelle est la différence principale entre map() et une list comprehension ?', options: ['map est plus rapide', 'Aucune, les résultats sont identiques', 'map retourne un itérateur (lazy), la compréhension retourne une liste', 'map ne peut prendre qu\'un argument'], correct: 2, explanation: 'map() retourne un itérateur (évaluation paresseuse), tandis qu\'une comprehension crée immédiatement une liste en mémoire.' },
                    ]
                },
            ]
        },
        {
            id: 'l4-generators',
            title: '4.2 Itérateurs et Générateurs',
            duration: '30 min',
            difficulty: 'Avancé',
            content: [
                { type: 'text', content: `<p>Les <strong>générateurs</strong> sont un moyen élégant et économe en mémoire de produire des séquences de valeurs à la demande, grâce au mot-clé <code>yield</code>.</p>` },
                { type: 'heading', content: 'Le protocole itérateur' },
                {
                    type: 'code', code: `# Créer un itérateur personnalisé
class Compteur:
    """Itérateur qui compte de start à stop."""
    
    def __init__(self, start, stop):
        self.current = start
        self.stop = stop
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        valeur = self.current
        self.current += 1
        return valeur

# Utilisation
for n in Compteur(1, 5):
    print(n)  # 1, 2, 3, 4`, title: 'Protocole itérateur'
                },
                { type: 'heading', content: 'Générateurs avec yield' },
                {
                    type: 'code', code: `# Un générateur est une fonction qui utilise yield
def compteur(start, stop):
    """Générateur : beaucoup plus simple qu'un itérateur !"""
    current = start
    while current < stop:
        yield current  # "Pause" et retourne la valeur
        current += 1   # Reprend ici au prochain appel

for n in compteur(1, 5):
    print(n)  # 1, 2, 3, 4

# Générateur de Fibonacci (séquence infinie !)
def fibonacci():
    a, b = 0, 1
    while True:  # Infini, mais on ne calcule que ce qu'on consomme
        yield a
        a, b = b, a + b

# Prendre les 10 premiers nombres de Fibonacci
fib = fibonacci()
for _ in range(10):
    print(next(fib), end=" ")
# 0 1 1 2 3 5 8 13 21 34

# AVANTAGE MÉMOIRE : traiter un fichier gigantesque ligne par ligne
def lire_gros_fichier(chemin):
    """Lit un fichier ligne par ligne sans tout charger en mémoire."""
    with open(chemin, "r") as f:
        for ligne in f:
            yield ligne.strip()

# Expression génératrice (comme les compréhensions, mais lazy)
carres = (x**2 for x in range(1_000_000))  # Pas stocké en mémoire !
print(next(carres))  # 0
print(next(carres))  # 1
print(sum(x**2 for x in range(100)))  # Somme des carrés`, title: 'Générateurs'
                },
                { type: 'info', variant: 'info', title: '📝 Générateur vs Liste', content: 'Une liste stocke TOUS les éléments en mémoire. Un générateur les produit UN PAR UN à la demande. Pour 1 million d\'éléments, la liste utilise ~8 Mo, le générateur ~100 octets !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quelle est la différence principale entre yield et return ?', options: ['yield est plus rapide', 'yield arrête la fonction, return la met en pause', 'yield met la fonction en pause, return l\'arrête', 'Aucune différence'], correct: 2, explanation: 'yield met la fonction en pause et retourne une valeur. Au prochain next(), elle reprend où elle s\'était arrêtée.' },
                        { question: 'Quelle est la différence entre (x**2 for x in range(10)) et [x**2 for x in range(10)] ?', options: ['Aucune', 'Le premier est un générateur (lazy), le second une liste', 'Le premier est plus lent', 'Le second utilise yield'], correct: 1, explanation: 'Les parenthèses créent une expression génératrice (lazy, économe en mémoire), les crochets créent une liste complète en mémoire.' },
                        { question: 'Quel est l\'avantage principal des générateurs ?', options: ['Plus rapides que les listes', 'Économie de mémoire (les valeurs sont produites à la demande)', 'Peuvent stocker plus de données', 'Fonctionnent en parallèle'], correct: 1, explanation: 'Les générateurs ne stockent pas tous les éléments en mémoire : ils les produisent un par un à la demande.' },
                    ]
                },
            ]
        },
        {
            id: 'l4-decorators',
            title: '4.3 Décorateurs',
            duration: '30 min',
            difficulty: 'Avancé',
            content: [
                { type: 'text', content: `<p>Les <strong>décorateurs</strong> sont un moyen élégant de modifier le comportement d'une fonction <em>sans toucher à son code</em>. C'est l'un des patterns les plus puissants de Python.</p>` },
                {
                    type: 'code', code: `import time
from functools import wraps

# Décorateur simple : mesurer le temps d'exécution
def timer(func):
    @wraps(func)  # Préserve le nom et la doc de la fonction
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"⏱ {func.__name__} : {elapsed:.4f}s")
        return result
    return wrapper

@timer
def calcul_lourd():
    """Effectue un calcul lourd."""
    return sum(i**2 for i in range(1_000_000))

resultat = calcul_lourd()  # ⏱ calcul_lourd : 0.1234s

# Décorateur avec arguments
def retry(max_tentatives=3, delai=1):
    def decorateur(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for tentative in range(1, max_tentatives + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"❌ Tentative {tentative}/{max_tentatives} : {e}")
                    if tentative < max_tentatives:
                        time.sleep(delai)
            raise Exception(f"Échec après {max_tentatives} tentatives")
        return wrapper
    return decorateur

@retry(max_tentatives=3, delai=0.5)
def operation_risquee():
    import random
    if random.random() < 0.7:
        raise ConnectionError("Serveur indisponible")
    return "Succès !"

# Décorateur de cache (mémoïzation)
def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(100))  # Instantané grâce au cache !`, title: 'Décorateurs'
                },
                { type: 'info', variant: 'tip', title: '💡 functools.lru_cache', content: 'Python inclut un décorateur de cache intégré : @functools.lru_cache(maxsize=128). Utilisez-le plutôt que de créer le vôtre en production !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Un décorateur est essentiellement...', options: ['Un commentaire spécial', 'Une fonction qui prend une fonction et retourne une fonction modifiée', 'Un type de variable', 'Un module Python'], correct: 1, explanation: 'Un décorateur est une fonction qui enveloppe une autre fonction pour modifier son comportement.' },
                        { question: 'À quoi sert @wraps(func) de functools ?', options: ['Accélérer la fonction', 'Préserver le nom et la docstring de la fonction décorée', 'Créer un cache', 'Appeler la fonction automatiquement'], correct: 1, explanation: '@wraps préserve les métadonnées (__name__, __doc__) de la fonction originale, ce qui est essentiel pour le debug.' },
                        { question: 'Comment créer un décorateur avec arguments (ex: @retry(n=3)) ?', options: ['Définir une fonction à un niveau', 'Définir une fonction à trois niveaux imbriqués', 'Utiliser une classe', 'C\'est impossible'], correct: 1, explanation: 'Un décorateur avec arguments nécessite 3 niveaux : la fonction externe (reçoit les args), le décorateur (reçoit func), et le wrapper (reçoit *args/**kwargs).' },
                    ]
                },
            ]
        },
        {
            id: 'l4-context',
            title: '4.4 Context Managers',
            duration: '20 min',
            difficulty: 'Avancé',
            content: [
                { type: 'text', content: `<p>Les <strong>context managers</strong> garantissent que les ressources (fichiers, connexions, locks) sont correctement acquises et libérées, même en cas d'erreur.</p>` },
                {
                    type: 'code', code: `# Context manager avec une classe
class GestionFichier:
    def __init__(self, chemin, mode):
        self.chemin = chemin
        self.mode = mode
        self.fichier = None
    
    def __enter__(self):
        """Appelé au début du bloc with."""
        self.fichier = open(self.chemin, self.mode)
        print(f"📂 Fichier '{self.chemin}' ouvert")
        return self.fichier
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Appelé à la fin du bloc with (même si erreur)."""
        self.fichier.close()
        print(f"📁 Fichier '{self.chemin}' fermé")
        return False  # Ne pas supprimer les exceptions

with GestionFichier("test.txt", "w") as f:
    f.write("Hello !")
# 📂 Fichier 'test.txt' ouvert
# 📁 Fichier 'test.txt' fermé

# Context manager avec contextlib (PLUS SIMPLE)
from contextlib import contextmanager
import time

@contextmanager
def chronometre(label):
    """Mesure le temps d'exécution d'un bloc de code."""
    start = time.time()
    print(f"⏱ {label} : début...")
    try:
        yield  # Le code du bloc with s'exécute ici
    finally:
        elapsed = time.time() - start
        print(f"⏱ {label} : {elapsed:.4f}s")

with chronometre("Calcul"):
    sum(i**2 for i in range(1_000_000))

# Context manager pour gérer une connexion DB (exemple)
@contextmanager
def connexion_db(url):
    print(f"🔗 Connexion à {url}")
    conn = {"url": url, "active": True}  # Simule une connexion
    try:
        yield conn
    finally:
        conn["active"] = False
        print("🔌 Connexion fermée")`, title: 'Context Managers'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Quelles méthodes définissent un context manager ?', options: ['__open__ et __close__', '__enter__ et __exit__', '__start__ et __stop__', '__with__ et __end__'], correct: 1, explanation: '__enter__ est appelé au début du bloc with, __exit__ à la fin.' },
                        { question: 'Que se passe-t-il si une exception est levée dans un bloc with ?', options: ['Le programme plante', '__exit__ est appelé quand même (nettoyage garanti)', 'L\'exception est ignorée', 'Le with est relance'], correct: 1, explanation: '__exit__ est TOUJOURS appelé, même en cas d\'exception, garantissant la libération des ressources.' },
                        { question: 'Quelle alternative simplifiée à une classe pour créer un context manager ?', options: ['@contextlib.contextmanager avec yield', '@with_manager', 'contextlib.open()', 'with.create()'], correct: 0, explanation: '@contextmanager de contextlib permet de créer un context manager avec une simple fonction génératrice utilisant yield.' },
                    ]
                },
            ]
        },
        {
            id: 'l4-testing',
            title: '4.5 Tests Unitaires avec pytest',
            duration: '25 min',
            difficulty: 'Avancé',
            content: [
                { type: 'text', content: `<p>Les <strong>tests unitaires</strong> vérifient que chaque partie de votre code fonctionne correctement. <code>pytest</code> est le framework de test le plus populaire en Python.</p>` },
                {
                    type: 'code', code: `# Fichier : calculatrice.py
def additionner(a, b):
    return a + b

def diviser(a, b):
    if b == 0:
        raise ValueError("Division par zéro impossible")
    return a / b

def est_pair(n):
    return n % 2 == 0`, title: 'calculatrice.py'
                },
                {
                    type: 'code', code: `# Fichier : test_calculatrice.py
import pytest
from calculatrice import additionner, diviser, est_pair

# Tests simples
def test_additionner():
    assert additionner(2, 3) == 5
    assert additionner(-1, 1) == 0
    assert additionner(0, 0) == 0

def test_diviser():
    assert diviser(10, 2) == 5.0
    assert diviser(7, 2) == 3.5

# Tester les exceptions
def test_diviser_par_zero():
    with pytest.raises(ValueError, match="Division par zéro"):
        diviser(10, 0)

# Tester avec des paramètres multiples
@pytest.mark.parametrize("n, attendu", [
    (2, True), (3, False), (0, True), (-4, True), (7, False)
])
def test_est_pair(n, attendu):
    assert est_pair(n) == attendu

# Fixtures : configuration réutilisable
@pytest.fixture
def liste_nombres():
    return [1, 2, 3, 4, 5]

def test_somme(liste_nombres):
    assert sum(liste_nombres) == 15

def test_longueur(liste_nombres):
    assert len(liste_nombres) == 5`, title: 'test_calculatrice.py'
                },
                {
                    type: 'code', code: `# Exécuter les tests
# pytest                    # Tous les tests
# pytest -v                 # Mode verbose
# pytest test_calculatrice.py  # Un fichier spécifique
# pytest -k "test_add"      # Tests contenant "test_add"
# pytest --tb=short         # Traceback court`, title: 'Commandes pytest'
                },
                { type: 'info', variant: 'tip', title: '💡 Bonnes pratiques de test', content: '1. Nommez vos fichiers test_xxx.py et fonctions test_xxx. 2. Un test = une assertion principale. 3. Testez les cas normaux ET les cas d\'erreur. 4. Utilisez des fixtures pour éviter la répétition.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel mot-clé vérifie qu\'une exception est levée dans pytest ?', options: ['pytest.expect()', 'pytest.raises()', 'pytest.throws()', 'pytest.error()'], correct: 1, explanation: 'pytest.raises(ExceptionType) vérifie qu\'une exception spécifique est levée.' },
                        { question: 'Que fait @pytest.mark.parametrize ?', options: ['Parallélise les tests', 'Exécute le même test avec différentes valeurs', 'Ignore le test', 'Génère un rapport'], correct: 1, explanation: 'parametrize permet de lancer le même test avec plusieurs jeux de données, évitant la duplication de code.' },
                        { question: 'Qu\'est-ce qu\'une fixture dans pytest ?', options: ['Un type de test', 'Une configuration réutilisable injectée dans les tests', 'Un fichier de configuration', 'Un type d\'assertion'], correct: 1, explanation: 'Les fixtures préparent des données ou des états réutilisables et sont injectées automatiquement dans les fonctions de test.' },
                    ]
                },
                { type: 'heading', content: '🛠️ Projet Validant : Scraper Web Modulaire' },
                { type: 'text', content: `<p>Ce projet utilise <strong>toutes</strong> les notions du Niveau 4 : générateurs, décorateurs, context managers et tests pytest.</p>` },
                {
                    type: 'code', code: `import time
import json
from functools import wraps
from contextlib import contextmanager

# Décorateur : retry avec délai
def retry(max_tentatives=3, delai=0.5):
    def decorateur(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for tentative in range(1, max_tentatives + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"❌ Tentative {tentative}/{max_tentatives} : {e}")
                    if tentative < max_tentatives:
                        time.sleep(delai)
            raise Exception(f"Échec après {max_tentatives} tentatives")
        return wrapper
    return decorateur

# Décorateur : cache simple
def cache(func):
    memo = {}
    @wraps(func)
    def wrapper(*args):
        if args not in memo:
            memo[args] = func(*args)
        return memo[args]
    return wrapper

# Context Manager : sauvegarde automatique
@contextmanager
def sauvegarde_json(fichier):
    """Charge et sauvegarde automatiquement un fichier JSON."""
    try:
        with open(fichier, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    
    try:
        yield data  # Le code du with manipule la liste
    finally:
        with open(fichier, "w") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"💾 {len(data)} éléments sauvegardés dans {fichier}")

# Générateur : simuler le scraping page par page
def scraper_pages(urls):
    """Générateur qui 'scrappe' des pages une par une."""
    for url in urls:
        print(f"🔍 Scraping : {url}")
        # Simule l'extraction de données
        yield {
            "url": url,
            "titre": f"Page {url.split('/')[-1]}",
            "contenu": f"Contenu extrait de {url}",
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }

# Programme principal
def main():
    urls = [
        "https://example.com/page/1",
        "https://example.com/page/2",
        "https://example.com/page/3",
    ]
    
    with sauvegarde_json("resultats.json") as resultats:
        for page in scraper_pages(urls):
            resultats.append(page)
            print(f"  ✅ {page['titre']} ajouté")

if __name__ == "__main__":
    main()`, title: '🛠️ scraper_web.py – Projet complet Niveau 4'
                },
                { type: 'info', variant: 'tip', title: '🎓 Ce projet utilise', content: 'Décorateurs (retry, cache, @wraps), Générateurs (yield page par page), Context Managers (@contextmanager + yield), Modules JSON. Bravo, vous maîtrisez le Python avancé !' },
            ]
        },
    ]
}
