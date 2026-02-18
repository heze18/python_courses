export const level7 = {
    id: 'level7',
    title: 'Maîtrise : Web, Data & Projets',
    shortTitle: 'Niv. 7 – Maîtrise',
    description: 'Appliquer tout ce que vous avez appris dans des domaines professionnels concrets. Durée : 20+ jours.',
    lessons: [
        {
            id: 'l7-web',
            title: '7.1 Développement Web (Flask / FastAPI)',
            duration: '35 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Python est l'un des langages les plus utilisés pour le <strong>développement web backend</strong>. Deux frameworks dominent : <strong>Flask</strong> (léger, flexible) et <strong>FastAPI</strong> (moderne, ultra-rapide).</p>` },
                { type: 'heading', content: 'Flask – Le micro-framework' },
                {
                    type: 'code', code: `# pip install flask

from flask import Flask, jsonify, request

app = Flask(__name__)

# Base de données simple (en mémoire)
taches = [
    {"id": 1, "titre": "Apprendre Flask", "fait": False},
    {"id": 2, "titre": "Créer une API", "fait": False},
]

@app.route("/")
def accueil():
    return "<h1>Bienvenue sur mon API Flask !</h1>"

@app.route("/api/taches", methods=["GET"])
def get_taches():
    return jsonify(taches)

@app.route("/api/taches", methods=["POST"])
def creer_tache():
    data = request.get_json()
    nouvelle = {
        "id": len(taches) + 1,
        "titre": data["titre"],
        "fait": False
    }
    taches.append(nouvelle)
    return jsonify(nouvelle), 201

@app.route("/api/taches/<int:id>", methods=["PUT"])
def modifier_tache(id):
    tache = next((t for t in taches if t["id"] == id), None)
    if not tache:
        return jsonify({"erreur": "Tâche non trouvée"}), 404
    data = request.get_json()
    tache.update(data)
    return jsonify(tache)

if __name__ == "__main__":
    app.run(debug=True, port=5000)`, title: 'Flask API REST'
                },
                { type: 'heading', content: 'FastAPI – Le framework moderne' },
                {
                    type: 'code', code: `# pip install fastapi uvicorn

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Mon API Python", version="1.0.0")

# Modèle de données (validation automatique !)
class Tache(BaseModel):
    titre: str
    description: Optional[str] = None
    fait: bool = False

class TacheResponse(Tache):
    id: int

# Base de données simulée
db: list[TacheResponse] = []
counter = 0

@app.get("/")
async def accueil():
    return {"message": "Bienvenue sur l'API FastAPI ! Allez sur /docs"}

@app.get("/api/taches", response_model=list[TacheResponse])
async def lister_taches():
    return db

@app.post("/api/taches", response_model=TacheResponse, status_code=201)
async def creer_tache(tache: Tache):
    global counter
    counter += 1
    nouvelle = TacheResponse(id=counter, **tache.model_dump())
    db.append(nouvelle)
    return nouvelle

@app.get("/api/taches/{tache_id}", response_model=TacheResponse)
async def get_tache(tache_id: int):
    tache = next((t for t in db if t.id == tache_id), None)
    if not tache:
        raise HTTPException(status_code=404, detail="Tâche non trouvée")
    return tache

@app.delete("/api/taches/{tache_id}")
async def supprimer_tache(tache_id: int):
    global db
    db = [t for t in db if t.id != tache_id]
    return {"message": "Tâche supprimée"}

# Lancer : uvicorn main:app --reload
# Documentation auto : http://localhost:8000/docs`, title: 'FastAPI'
                },
                { type: 'info', variant: 'tip', title: '💡 Flask vs FastAPI', content: 'Flask : mature, simple, beaucoup de plugins. Idéal pour les projets existants. FastAPI : moderne, asynchrone, validation auto avec Pydantic, docs Swagger auto. Idéal pour les nouvelles APIs.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel avantage principal offre FastAPI sur Flask ?', options: ['Plus de plugins', 'Validation automatique des données + doc Swagger', 'Plus facile à installer', 'Meilleure compatibilité'], correct: 1, explanation: 'FastAPI valide automatiquement les données avec Pydantic et génère une documentation Swagger interactive.' },
                        { question: 'Quel décorateur définit une route GET dans Flask ?', options: ['@app.get()', '@app.route("/", methods=["GET"])', '@flask.get()', '@route("/")'], correct: 1, explanation: '@app.route() avec methods=["GET"] (ou simplement @app.route("/") car GET est le défaut) définit une route.' },
                        { question: 'Pourquoi FastAPI utilise-t-il le mot-clé async ?', options: ['C\'est obligatoire', 'Pour le support asynchrone natif (meilleure performance I/O)', 'Pour la compatibilité avec Flask', 'Pour le débogage'], correct: 1, explanation: 'FastAPI est nativement asynchrone, permettant de gérer beaucoup de requêtes simultanées sans bloquer.' },
                    ]
                },
            ]
        },
        {
            id: 'l7-data',
            title: '7.2 Data Science (Pandas & NumPy)',
            duration: '30 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Python est le langage n°1 de la <strong>Data Science</strong>. <strong>NumPy</strong> fournit les calculs numériques performants, <strong>Pandas</strong> la manipulation de données structurées.</p>` },
                { type: 'heading', content: 'NumPy – Calcul numérique' },
                {
                    type: 'code', code: `import numpy as np

# Créer des tableaux
a = np.array([1, 2, 3, 4, 5])
matrice = np.array([[1, 2, 3], [4, 5, 6]])

# Opérations vectorisées (100x plus rapide que les boucles !)
print(a * 2)        # [2, 4, 6, 8, 10]
print(a ** 2)       # [1, 4, 9, 16, 25]
print(np.sqrt(a))   # [1.0, 1.41, 1.73, 2.0, 2.24]

# Statistiques
print(np.mean(a))    # 3.0 (moyenne)
print(np.std(a))     # 1.414 (écart-type)
print(np.median(a))  # 3.0

# Création rapide
zeros = np.zeros((3, 3))
ones = np.ones((2, 4))
arange = np.arange(0, 10, 0.5)
linspace = np.linspace(0, 1, 100)  # 100 points entre 0 et 1
random = np.random.randn(1000)     # Distribution normale

# Algèbre linéaire
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)  # Produit matriciel
print(np.linalg.det(A))  # Déterminant
print(np.linalg.inv(A))  # Inverse`, title: 'NumPy'
                },
                { type: 'heading', content: 'Pandas – Manipulation de données' },
                {
                    type: 'code', code: `import pandas as pd

# Créer un DataFrame
df = pd.DataFrame({
    "nom": ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "age": [25, 30, 22, 28, 35],
    "ville": ["Paris", "Lyon", "Paris", "Marseille", "Lyon"],
    "salaire": [45000, 55000, 38000, 52000, 60000]
})

print(df)
#       nom  age      ville  salaire
# 0   Alice   25      Paris    45000
# 1     Bob   30       Lyon    55000
# 2  Charlie  22      Paris    38000
# 3   Diana   28  Marseille    52000
# 4     Eve   35       Lyon    60000

# Sélection
print(df["nom"])               # Colonne
print(df[df["age"] > 25])      # Filtrer
print(df.loc[0:2, ["nom", "age"]])  # Par label

# Statistiques
print(df.describe())           # Résumé statistique
print(df["salaire"].mean())    # Moyenne : 50000
print(df.groupby("ville")["salaire"].mean())  # Par ville

# Trier
df_sorted = df.sort_values("salaire", ascending=False)

# Lire/écrire des fichiers
# df = pd.read_csv("donnees.csv")
# df = pd.read_excel("donnees.xlsx")
# df.to_csv("export.csv", index=False)

# Transformer
df["salaire_mensuel"] = df["salaire"] / 12
df["categorie"] = df["age"].apply(
    lambda x: "Junior" if x < 25 else "Senior"
)`, title: 'Pandas'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Pourquoi NumPy est-il plus rapide que les listes Python ?', options: ['Il utilise C sous le capot', 'Il pré-calcule les résultats', 'Il utilise le GPU', 'Il compresse les données'], correct: 0, explanation: 'NumPy est implémenté en C et opère sur des tableaux continus en mémoire, évitant les boucles Python lentes.' },
                        { question: 'Que fait df.groupby("ville")["salaire"].mean() ?', options: ['Trie par ville', 'Calcule la moyenne des salaires par ville', 'Filtre les villes', 'Crée une nouvelle colonne'], correct: 1, explanation: 'groupby groupe les données par ville, puis .mean() calcule la moyenne de chaque groupe.' },
                        { question: 'Quel est l\'opérateur @ en NumPy ?', options: ['Décorateur', 'Produit matriciel', 'Référence', 'Commentaire'], correct: 1, explanation: 'L\'opérateur @ est le produit matriciel (matrix multiplication). A @ B équivaut à np.dot(A, B).' },
                    ]
                },
            ]
        },
        {
            id: 'l7-db',
            title: '7.3 Bases de Données & SQLAlchemy',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p><strong>SQLAlchemy</strong> est l'ORM (Object-Relational Mapper) le plus utilisé en Python. Il permet d'interagir avec des bases SQL en utilisant des objets Python.</p>` },
                {
                    type: 'code', code: `# pip install sqlalchemy

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import declarative_base, Session, relationship

# Créer le moteur de base de données
engine = create_engine("sqlite:///ecole.db", echo=True)
Base = declarative_base()

# Définir les modèles
class Etudiant(Base):
    __tablename__ = "etudiants"
    
    id = Column(Integer, primary_key=True)
    nom = Column(String(100), nullable=False)
    age = Column(Integer)
    email = Column(String(200), unique=True)
    
    # Relation
    notes = relationship("Note", back_populates="etudiant")
    
    def __repr__(self):
        return f"Etudiant(nom={self.nom}, age={self.age})"

class Note(Base):
    __tablename__ = "notes"
    
    id = Column(Integer, primary_key=True)
    matiere = Column(String(50))
    valeur = Column(Float)
    etudiant_id = Column(Integer, ForeignKey("etudiants.id"))
    
    etudiant = relationship("Etudiant", back_populates="notes")

# Créer les tables
Base.metadata.create_all(engine)

# CRUD (Create, Read, Update, Delete)
with Session(engine) as session:
    # CREATE
    alice = Etudiant(nom="Alice", age=20, email="alice@univ.fr")
    alice.notes = [
        Note(matiere="Python", valeur=18),
        Note(matiere="SQL", valeur=16),
    ]
    session.add(alice)
    session.commit()
    
    # READ
    etudiants = session.query(Etudiant).all()
    alice = session.query(Etudiant).filter_by(nom="Alice").first()
    
    # Requête complexe
    bons = session.query(Etudiant).join(Note).filter(
        Note.valeur >= 15
    ).distinct().all()
    
    # UPDATE
    alice.age = 21
    session.commit()
    
    # DELETE
    # session.delete(alice)
    # session.commit()`, title: 'SQLAlchemy ORM'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Qu\'est-ce qu\'un ORM ?', options: ['Un type de base de données', 'Un outil qui convertit des objets Python en SQL', 'Un langage de requête', 'Un framework web'], correct: 1, explanation: 'ORM = Object-Relational Mapper. Il permet de manipuler la base de données avec des objets Python au lieu d\'écrire du SQL brut.' },
                        { question: 'Que fait session.commit() ?', options: ['Ferme la session', 'Persiste les changements en base de données', 'Annule les modifications', 'Crée une nouvelle table'], correct: 1, explanation: 'commit() enregistre tous les changements en attente dans la base de données.' },
                        { question: 'Quel est l\'avantage principal d\'un ORM sur le SQL brut ?', options: ['Plus rapide', 'Code Python au lieu de SQL + abstraction de la base', 'Plus sécurisé', 'Supporte plus de BDD'], correct: 1, explanation: 'Un ORM permet de manipuler la BDD avec des objets Python, rendant le code plus lisible et portable entre différentes bases.' },
                    ]
                },
            ]
        },
        {
            id: 'l7-deploy',
            title: '7.4 Déploiement & Docker',
            duration: '25 min',
            difficulty: 'Expert',
            content: [
                { type: 'text', content: `<p>Le <strong>déploiement</strong> est l'étape finale : mettre votre application en production. <strong>Docker</strong> garantit que votre app fonctionne partout.</p>` },
                {
                    type: 'code', code: `# Dockerfile pour une application Python
# Fichier : Dockerfile

# Image de base Python
FROM python:3.12-slim

# Répertoire de travail
WORKDIR /app

# Copier les dépendances d'abord (cache Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code source
COPY . .

# Variables d'environnement
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Exposer le port
EXPOSE 8000

# Commande de démarrage
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`, title: 'Dockerfile'
                },
                {
                    type: 'code', code: `# docker-compose.yml
version: "3.9"

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - SECRET_KEY=\${SECRET_KEY}
    depends_on:
      - db
    volumes:
      - .:/app
  
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`, title: 'docker-compose.yml'
                },
                {
                    type: 'code', code: `# Commandes Docker essentielles
docker build -t mon-app .           # Construire l'image
docker run -p 8000:8000 mon-app     # Lancer le conteneur
docker-compose up -d                # Lancer tous les services
docker-compose logs -f              # Voir les logs
docker-compose down                 # Arrêter

# CI/CD avec GitHub Actions
# .github/workflows/ci.yml
name: CI/CD
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install -e ".[dev]"
      - run: ruff check .
      - run: mypy .
      - run: pytest --cov`, title: 'Commandes & CI/CD'
                },
                { type: 'info', variant: 'tip', title: '🎓 Félicitations !', content: 'Vous avez parcouru les 7 niveaux de Python Expert Academy ! Vous maîtrisez maintenant les fondations, les structures de données, la POO, les techniques avancées, les internals Python, les outils professionnels et le déploiement. Continuez à pratiquer avec des projets concrets !' },
                {
                    type: 'quiz', questions: [
                        { question: 'Pourquoi utiliser Docker ?', options: ['Pour écrire du Python plus vite', 'Pour garantir que l\'app fonctionne partout de la même manière', 'Pour remplacer Python', 'Pour la sécurité uniquement'], correct: 1, explanation: 'Docker encapsule l\'application et toutes ses dépendances dans un conteneur, garantissant un comportement identique partout.' },
                        { question: 'Que fait docker-compose up -d ?', options: ['Arrête les conteneurs', 'Lance les services définis dans docker-compose.yml en arrière-plan', 'Supprime les images', 'Met à jour Docker'], correct: 1, explanation: 'docker-compose up -d lance tous les services définis en mode détaché (arrière-plan).' },
                        { question: 'Dans un Dockerfile, pourquoi copier requirements.txt AVANT le code source ?', options: ['C\'est obligatoire', 'Pour profiter du cache Docker (les dépendances ne changent pas souvent)', 'Pour plus de sécurité', 'Pour réduire la taille'], correct: 1, explanation: 'Docker met en cache chaque étape. En copiant requirements.txt d\'abord, les dépendances ne sont réinstallées que si le fichier change.' },
                    ]
                },
                { type: 'heading', content: '🎓 Récapitulatif : Votre Parcours Python Expert' },
                { type: 'text', content: `<p>Félicitations ! Vous avez parcouru les <strong>7 niveaux</strong> de Python Expert Academy. Voici un résumé de tout ce que vous maîtrisez maintenant :</p>` },
                {
                    type: 'code', code: `# 📊 Résumé des compétences acquises

compétences = {
    "Niveau 1 - Fondations": [
        "Variables, types, opérateurs",
        "Conditions, boucles, fonctions",
        "Entrées/sorties, formatage",
    ],
    "Niveau 2 - Structures de Données": [
        "Listes, tuples, sets, dictionnaires",
        "Compréhensions, fichiers CSV/JSON",
        "Gestion d'erreurs, modules",
    ],
    "Niveau 3 - POO": [
        "Classes, héritage, polymorphisme",
        "Encapsulation, dunder methods",
        "Dataclasses, exceptions custom",
    ],
    "Niveau 4 - Avancé": [
        "Programmation fonctionnelle",
        "Générateurs, décorateurs",
        "Context managers, pytest",
    ],
    "Niveau 5 - Expert": [
        "Modèle mémoire, métaprogrammation",
        "Threading, asyncio, GIL",
        "Type hints, profiling",
    ],
    "Niveau 6 - Professionnel": [
        "Packaging, qualité de code",
        "Design Patterns, SOLID",
        "Logging, sécurité",
    ],
    "Niveau 7 - Maîtrise": [
        "Flask / FastAPI",
        "Pandas / NumPy",
        "SQLAlchemy, Docker, CI/CD",
    ],
}

print("🚀 Prochaines étapes :")
print("  1. Créez un projet personnel complet")
print("  2. Contribuez à un projet open-source")
print("  3. Explorez ML/AI avec scikit-learn et PyTorch")
print("  4. Passez une certification Python")`, title: '🎓 Votre Parcours Complet'
                },
                { type: 'info', variant: 'tip', title: '🚀 Et maintenant ?', content: '1. Créez un projet personnel complet (portfolio, API, app web). 2. Contribuez à un projet open-source sur GitHub. 3. Explorez le Machine Learning (scikit-learn, PyTorch). 4. Construisez votre portfolio en ligne. Vous avez toutes les bases pour devenir un développeur Python professionnel !' },
            ]
        },
    ]
}
