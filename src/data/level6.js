export const level6 = {
    id: 'level6',
    title: 'Python Professionnel (Architecture & Tooling)',
    shortTitle: 'Niv. 6 – Pro',
    description: 'Adopter les standards de l\'industrie pour le code en production. Durée : 15 à 20 jours.',
    lessons: [
        {
            id: 'l6-packaging',
            title: '6.1 Packaging Moderne',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Le packaging Python moderne utilise <code>pyproject.toml</code> comme fichier unique de configuration. Les outils modernes comme <strong>Poetry</strong> ou <strong>uv</strong> remplacent les anciens pip/setup.py.</p>` },
                { type: 'heading', content: 'Structure d\'un projet professionnel' },
                {
                    type: 'code', code: `# Structure recommandée (src layout)
# mon-projet/
# ├── pyproject.toml        # Configuration unique
# ├── README.md
# ├── LICENSE
# ├── src/
# │   └── mon_package/
# │       ├── __init__.py
# │       ├── core.py
# │       └── utils.py
# ├── tests/
# │   ├── __init__.py
# │   ├── test_core.py
# │   └── test_utils.py
# └── docs/
#     └── index.md`, title: 'Structure de projet'
                },
                {
                    type: 'code', code: `# pyproject.toml – Configuration complète
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "mon-package"
version = "1.0.0"
description = "Un package Python professionnel"
readme = "README.md"
requires-python = ">=3.10"
license = {text = "MIT"}
authors = [
    {name = "Votre Nom", email = "vous@email.com"},
]
dependencies = [
    "requests>=2.28",
    "pydantic>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0",
    "ruff>=0.1.0",
    "mypy>=1.0",
]

[project.scripts]
mon-cli = "mon_package.cli:main"

[tool.pytest.ini_options]
testpaths = ["tests"]

[tool.ruff]
line-length = 88
target-version = "py310"`, title: 'pyproject.toml'
                },
                { type: 'heading', content: 'Environnements virtuels' },
                {
                    type: 'code', code: `# Créer un environnement virtuel
python -m venv .venv

# Activer (Windows)
.venv\\Scripts\\activate

# Activer (Linux/Mac)
source .venv/bin/activate

# Installer les dépendances
pip install -e ".[dev]"  # Install en mode éditable + dépendances dev

# Geler les dépendances
pip freeze > requirements.txt

# Avec Poetry (recommandé)
pip install poetry
poetry init
poetry add requests pydantic
poetry add --group dev pytest ruff
poetry install
poetry run pytest`, title: 'Environnements virtuels'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel fichier remplace setup.py dans le packaging moderne ?', options: ['setup.cfg', 'pyproject.toml', 'package.json', 'config.py'], correct: 1, explanation: 'pyproject.toml est le standard moderne pour la configuration des projets Python.' },
                        { question: 'Pourquoi utiliser un environnement virtuel ?', options: ['Pour accélérer Python', 'Pour isoler les dépendances de chaque projet', 'Pour installer Python', 'Pour compiler le code'], correct: 1, explanation: 'Un environnement virtuel isole les packages de chaque projet, évitant les conflits de versions entre projets.' },
                        { question: 'Que fait pip install -e "." ?', options: ['Installe en mode production', 'Installe en mode éditable (les modifs sont reflétées sans réinstaller)', 'Supprime le package', 'Exporte les dépendances'], correct: 1, explanation: 'Le mode éditable (-e) crée un lien vers votre code source. Les modifications sont immédiatement disponibles sans réinstallation.' },
                    ]
                },
            ]
        },
        {
            id: 'l6-quality',
            title: '6.2 Qualité de Code',
            duration: '20 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Un code professionnel est lisible, cohérent et vérifié automatiquement par des outils de <strong>linting</strong> et de <strong>formatage</strong>.</p>` },
                {
                    type: 'code', code: `# Ruff – Le linter/formatter le plus rapide (écrit en Rust)
# pip install ruff

# Vérifier le code
# ruff check .

# Corriger automatiquement
# ruff check --fix .

# Formater (remplace Black)
# ruff format .

# Configuration dans pyproject.toml
[tool.ruff]
line-length = 88
select = ["E", "F", "I", "N", "UP", "B"]  # Règles
ignore = ["E501"]  # Ignorer certaines règles

# Exemple de code AVANT ruff :
import os, sys
from math import *
def calcul( x,y ):
    if x==True:
        return x+y
    return None

# Exemple de code APRÈS ruff :
import os
import sys
from math import pi, sqrt

def calcul(x: float, y: float) -> float | None:
    if x:
        return x + y
    return None`, title: 'Ruff (Linter/Formatter)'
                },
                { type: 'heading', content: 'Pre-commit hooks' },
                {
                    type: 'code', code: `# pre-commit : exécute des vérifications AVANT chaque commit Git
# pip install pre-commit

# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.3.0
    hooks:
      - id: ruff
        args: [--fix]
      - id: ruff-format
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.8.0
    hooks:
      - id: mypy

# Installation : pre-commit install
# Maintenant, chaque "git commit" vérifie le code automatiquement !`, title: 'Pre-commit'
                },
                { type: 'heading', content: 'Docstrings et documentation' },
                {
                    type: 'code', code: `def calculer_moyenne(notes: list[float], poids: list[float] | None = None) -> float:
    """Calcule la moyenne pondérée d'une série de notes.

    Args:
        notes: Liste des notes (entre 0 et 20).
        poids: Liste des coefficients. Si None, toutes les notes
               ont le même poids.

    Returns:
        La moyenne pondérée arrondie à 2 décimales.

    Raises:
        ValueError: Si les notes ne sont pas entre 0 et 20.
        ValueError: Si les longueurs de notes et poids diffèrent.

    Examples:
        >>> calculer_moyenne([12, 15, 18])
        15.0
        >>> calculer_moyenne([12, 15], [1, 2])
        14.0
    """
    if any(n < 0 or n > 20 for n in notes):
        raise ValueError("Les notes doivent être entre 0 et 20")
    
    if poids is None:
        return round(sum(notes) / len(notes), 2)
    
    if len(notes) != len(poids):
        raise ValueError("notes et poids doivent avoir la même longueur")
    
    total = sum(n * p for n, p in zip(notes, poids))
    return round(total / sum(poids), 2)`, title: 'Docstrings Google Style'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel outil combine linting ET formatage pour Python ?', options: ['pylint', 'black', 'ruff', 'flake8'], correct: 2, explanation: 'Ruff est un outil ultra-rapide (écrit en Rust) qui combine linting et formatage.' },
                        { question: 'Quel style de docstring est recommandé par Google ?', options: ['reStructuredText', 'Numpy style', 'Google style avec Args/Returns/Raises', 'Markdown'], correct: 2, explanation: 'Le Google style utilise des sections Args, Returns, Raises et Examples pour documenter les fonctions.' },
                        { question: 'Que fait pre-commit install ?', options: ['Installe Python', 'Configure des vérifications automatiques avant chaque git commit', 'Sauvegarde le code', 'Crée un backup'], correct: 1, explanation: 'pre-commit installe des hooks Git qui vérifient automatiquement le code (linting, formatage) avant chaque commit.' },
                    ]
                },
            ]
        },
        {
            id: 'l6-patterns',
            title: '6.3 Design Patterns & SOLID',
            duration: '30 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Les <strong>Design Patterns</strong> sont des solutions éprouvées à des problèmes récurrents. Les principes <strong>SOLID</strong> guident la conception d'un code maintenable.</p>` },
                { type: 'heading', content: 'Principes SOLID' },
                {
                    type: 'code', code: `# S – Single Responsibility : une classe = une responsabilité
# ❌ MAUVAIS
class Utilisateur:
    def sauvegarder(self): ...
    def envoyer_email(self): ...
    def generer_pdf(self): ...

# ✅ BON
class Utilisateur:
    def __init__(self, nom, email): ...

class UtilisateurRepository:
    def sauvegarder(self, user): ...

class NotificationService:
    def envoyer_email(self, user, message): ...

# O – Open/Closed : ouvert à l'extension, fermé à la modification
from abc import ABC, abstractmethod

class Forme(ABC):
    @abstractmethod
    def aire(self) -> float: ...

class Cercle(Forme):
    def __init__(self, rayon):
        self.rayon = rayon
    def aire(self) -> float:
        return 3.14159 * self.rayon ** 2

class Rectangle(Forme):
    def __init__(self, largeur, hauteur):
        self.largeur = largeur
        self.hauteur = hauteur
    def aire(self) -> float:
        return self.largeur * self.hauteur

# Ajouter un Triangle sans modifier le code existant
class Triangle(Forme):
    def __init__(self, base, hauteur):
        self.base = base
        self.hauteur = hauteur
    def aire(self) -> float:
        return 0.5 * self.base * self.hauteur

# D – Dependency Inversion : dépendre des abstractions
class DatabaseInterface(ABC):
    @abstractmethod
    def query(self, sql: str) -> list: ...

class PostgresDB(DatabaseInterface):
    def query(self, sql):
        return [{"result": "postgres"}]

class SQLiteDB(DatabaseInterface):
    def query(self, sql):
        return [{"result": "sqlite"}]

class UserService:
    def __init__(self, db: DatabaseInterface):  # Injection de dépendance
        self.db = db
    
    def get_users(self):
        return self.db.query("SELECT * FROM users")

# Facile à tester et à changer de base de données !
service = UserService(PostgresDB())`, title: 'SOLID'
                },
                { type: 'heading', content: 'Patterns courants' },
                {
                    type: 'code', code: `# Factory Pattern – créer des objets sans exposer la logique
class Animal:
    def parler(self): ...

class Chien(Animal):
    def parler(self): return "Ouaf !"

class Chat(Animal):
    def parler(self): return "Miaou !"

def creer_animal(type_animal: str) -> Animal:
    """Factory : crée l'animal approprié."""
    animaux = {"chien": Chien, "chat": Chat}
    cls = animaux.get(type_animal)
    if cls is None:
        raise ValueError(f"Animal inconnu : {type_animal}")
    return cls()

# Observer Pattern – notification sur changement d'état
class EventEmitter:
    def __init__(self):
        self._listeners = {}
    
    def on(self, event: str, callback):
        self._listeners.setdefault(event, []).append(callback)
    
    def emit(self, event: str, *args, **kwargs):
        for callback in self._listeners.get(event, []):
            callback(*args, **kwargs)

# Utilisation
emitter = EventEmitter()
emitter.on("user_created", lambda name: print(f"✅ Bienvenue {name}"))
emitter.on("user_created", lambda name: print(f"📧 Email envoyé à {name}"))
emitter.emit("user_created", "Alice")

# Strategy Pattern – comportement interchangeable
class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data: list) -> list: ...

class BubbleSort(SortStrategy):
    def sort(self, data):
        # ... implémentation
        return sorted(data)

class QuickSort(SortStrategy):
    def sort(self, data):
        return sorted(data)

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy
    
    def sort(self, data):
        return self.strategy.sort(data)`, title: 'Design Patterns'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Le principe "S" de SOLID signifie...', options: ['Secure', 'Scalable', 'Single Responsibility', 'Simple'], correct: 2, explanation: 'Single Responsibility Principle : chaque classe ne doit avoir qu\'une seule raison de changer.' },
                        { question: 'Quel pattern permet de créer des objets sans exposer la logique de création ?', options: ['Observer', 'Strategy', 'Factory', 'Singleton'], correct: 2, explanation: 'Le Factory Pattern encapsule la logique de création d\'objets dans une fonction ou méthode dédiée.' },
                        { question: 'Le principe D de SOLID (Dependency Inversion) recommande de...', options: ['Supprimer les dépendances', 'Dépendre des abstractions, pas des implémentations', 'Inverser l\'ordre du code', 'Utiliser des singletons'], correct: 1, explanation: 'Dependency Inversion : les modules de haut niveau ne doivent pas dépendre des modules de bas niveau. Tous doivent dépendre d\'abstractions.' },
                    ]
                },
            ]
        },
        {
            id: 'l6-logging',
            title: '6.4 Logging, Debugging & Sécurité',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Un code professionnel utilise le <strong>logging</strong> au lieu de print() pour tracer l'exécution. La <strong>sécurité</strong> est également un pilier essentiel : ne jamais exposer de secrets dans le code source.</p>` },
                {
                    type: 'code', code: `import logging

# Configuration du logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.FileHandler("app.log"),
        logging.StreamHandler()  # Console
    ]
)

logger = logging.getLogger(__name__)

# Niveaux de log (du moins au plus critique)
logger.debug("Détail pour le développement")
logger.info("Information générale")
logger.warning("Attention, quelque chose d'inhabituel")
logger.error("Une erreur est survenue")
logger.critical("Erreur critique !")

# Logger structuré pour une application
class UserService:
    def __init__(self):
        self.logger = logging.getLogger("UserService")
    
    def creer_utilisateur(self, nom: str):
        self.logger.info(f"Création de l'utilisateur : {nom}")
        try:
            # ... logique
            self.logger.info(f"Utilisateur {nom} créé avec succès")
        except Exception as e:
            self.logger.error(f"Échec création utilisateur {nom}: {e}")
            raise`, title: 'Logging'
                },
                { type: 'heading', content: 'Sécurité et gestion des secrets' },
                {
                    type: 'code', code: `# ⚠️ NE JAMAIS FAIRE
# password = "mon_mot_de_passe_123"  # Hardcodé dans le code !

# ✅ Utiliser les variables d'environnement
import os
from pathlib import Path

# Fichier .env (NE PAS committer dans Git !)
# DATABASE_URL=postgresql://user:pass@localhost/db
# SECRET_KEY=ma_cle_secrete
# DEBUG=false

# Charger avec python-dotenv
# pip install python-dotenv
from dotenv import load_dotenv

load_dotenv()  # Charge le .env

database_url = os.getenv("DATABASE_URL")
secret_key = os.getenv("SECRET_KEY", "default_key")
debug = os.getenv("DEBUG", "false").lower() == "true"

# Validation avec Pydantic
from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    debug: bool = False
    port: int = 8000
    
    class Config:
        env_file = ".env"

settings = Settings()  # Auto-validation + types

# .gitignore (IMPORTANT !)
# .env
# *.pyc
# __pycache__/
# .venv/`, title: 'Sécurité'
                },
                { type: 'info', variant: 'warning', title: '⚠️ Règles de sécurité essentielles', content: '1. JAMAIS de secrets dans le code source. 2. Utilisez .env + .gitignore. 3. Validez TOUTES les entrées utilisateur. 4. Utilisez Pydantic pour la validation des données. 5. Gardez vos dépendances à jour (pip audit).' },
                {
                    type: 'quiz', questions: [
                        { question: 'Où stocker les mots de passe et clés API ?', options: ['Dans le code Python', 'Dans un fichier .env + .gitignore', 'Dans les commentaires', 'Dans le README'], correct: 1, explanation: 'Les secrets vont dans un fichier .env qui est exclu du contrôle de version via .gitignore.' },
                        { question: 'Quel niveau de log utiliser pour une erreur non-critique ?', options: ['logger.debug()', 'logger.info()', 'logger.warning()', 'logger.critical()'], correct: 2, explanation: 'warning() signale quelque chose d\'inhabituel qui mérite attention mais n\'empêche pas l\'exécution.' },
                        { question: 'Pourquoi valider les données avec Pydantic plutôt que manuellement ?', options: ['C\'est obligatoire', 'Validation automatique des types + messages d\'erreur clairs', 'C\'est plus lent mais plus sûr', 'Pydantic remplace Python'], correct: 1, explanation: 'Pydantic valide automatiquement les types, les contraintes et génère des messages d\'erreur détaillés.' },
                    ]
                },
            ]
        },
    ]
}
