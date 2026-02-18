export const level3 = {
    id: 'level3',
    title: 'Programmation Orientée Objet (POO)',
    shortTitle: 'Niv. 3 – POO',
    description: 'Concevoir des programmes robustes, extensibles et maintenables avec les classes et l\'héritage. Durée : 15 à 20 jours.',
    lessons: [
        {
            id: 'l3-classes',
            title: '3.1 Classes et Objets',
            duration: '30 min',
            difficulty: 'Intermédiaire',
            content: [
                {
                    type: 'text', content: `<p>La <strong>Programmation Orientée Objet</strong> (POO) est un paradigme qui organise le code autour d'<em>objets</em> qui combinent des <strong>données</strong> (attributs) et des <strong>comportements</strong> (méthodes).</p>
<p>Pensez à une classe comme un <strong>plan de construction</strong> et à un objet comme la <strong>maison construite</strong> à partir de ce plan. Un seul plan peut produire plusieurs maisons différentes.</p>` },
                { type: 'heading', content: 'Créer une classe' },
                {
                    type: 'code', code: `# Définir une classe
class Voiture:
    """Représente une voiture."""
    
    def __init__(self, marque, modele, annee):
        """Constructeur : appelé à la création de l'objet."""
        self.marque = marque    # Attribut d'instance
        self.modele = modele
        self.annee = annee
        self.vitesse = 0        # Valeur par défaut
    
    def accelerer(self, valeur):
        """Augmente la vitesse."""
        self.vitesse += valeur
        print(f"🚗 {self.marque} accélère à {self.vitesse} km/h")
    
    def freiner(self):
        """Ralentit la voiture."""
        self.vitesse = max(0, self.vitesse - 20)
        print(f"🛑 Vitesse réduite à {self.vitesse} km/h")
    
    def afficher(self):
        """Affiche les infos de la voiture."""
        print(f"{self.marque} {self.modele} ({self.annee}) - {self.vitesse} km/h")

# Créer des objets (instances)
ma_voiture = Voiture("Tesla", "Model 3", 2024)
autre_voiture = Voiture("BMW", "Série 3", 2023)

# Utiliser les méthodes
ma_voiture.accelerer(50)   # 🚗 Tesla accélère à 50 km/h
ma_voiture.accelerer(30)   # 🚗 Tesla accélère à 80 km/h
ma_voiture.freiner()       # 🛑 Vitesse réduite à 60 km/h
ma_voiture.afficher()      # Tesla Model 3 (2024) - 60 km/h

# Accéder aux attributs
print(ma_voiture.marque)   # Tesla
print(ma_voiture.vitesse)  # 60`, title: 'Classes et objets'
                },
                { type: 'info', variant: 'info', title: '📝 Le paramètre self', content: 'self fait référence à l\'instance actuelle de la classe. Il est automatiquement passé par Python quand vous appelez une méthode. Grâce à self, chaque objet a ses propres données.' },
                { type: 'heading', content: 'Attributs de classe vs d\'instance' },
                {
                    type: 'code', code: `class Employe:
    # Attribut de CLASSE (partagé par toutes les instances)
    nombre_employes = 0
    entreprise = "TechCorp"
    
    def __init__(self, nom, salaire):
        # Attributs d'INSTANCE (propres à chaque objet)
        self.nom = nom
        self.salaire = salaire
        Employe.nombre_employes += 1  # Incrémenter le compteur de classe
    
    def augmenter(self, pourcentage):
        self.salaire *= (1 + pourcentage / 100)
    
    def __str__(self):
        return f"{self.nom} ({self.entreprise}) - {self.salaire:.0f}€"

alice = Employe("Alice", 45000)
bob = Employe("Bob", 50000)

print(alice)                      # Alice (TechCorp) - 45000€
print(Employe.nombre_employes)    # 2
alice.augmenter(10)
print(alice)                      # Alice (TechCorp) - 49500€`, title: 'Attributs de classe'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que représente self dans une méthode de classe ?', options: ['La classe elle-même', 'L\'instance actuelle de l\'objet', 'Un paramètre obligatoire quelconque', 'Le constructeur'], correct: 1, explanation: 'self fait référence à l\'instance spécifique sur laquelle la méthode est appelée.' },
                        { question: 'Quelle méthode est appelée automatiquement à la création d\'un objet ?', options: ['__create__', '__new__', '__init__', '__start__'], correct: 2, explanation: '__init__ est le constructeur, appelé automatiquement quand on crée un objet.' },
                        { question: 'Quelle est la différence entre un attribut de classe et un attribut d\'instance ?', options: ['Aucune différence', 'L\'attribut de classe est partagé par toutes les instances', 'L\'attribut d\'instance est constant', 'L\'attribut de classe est privé'], correct: 1, explanation: 'Un attribut de classe est défini dans la classe et partagé par toutes les instances, contrairement à un attribut d\'instance qui est propre à chaque objet.' },
                    ]
                },
            ]
        },
        {
            id: 'l3-encapsulation',
            title: '3.2 Encapsulation et Propriétés',
            duration: '25 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'text', content: `<p>L'<strong>encapsulation</strong> consiste à protéger les données internes d'un objet et à contrôler l'accès via des méthodes dédiées.</p>` },
                {
                    type: 'code', code: `class CompteBancaire:
    def __init__(self, titulaire, solde_initial=0):
        self.titulaire = titulaire
        self._solde = solde_initial     # Convention : _ = "privé"
        self.__historique = []          # __ = name mangling (vraiment privé)
    
    @property
    def solde(self):
        """Getter : accéder au solde en lecture seule."""
        return self._solde
    
    @solde.setter
    def solde(self, valeur):
        """Setter : contrôler la modification du solde."""
        if valeur < 0:
            raise ValueError("Le solde ne peut pas être négatif !")
        self._solde = valeur
    
    def deposer(self, montant):
        if montant <= 0:
            raise ValueError("Le montant doit être positif")
        self._solde += montant
        self.__historique.append(f"+{montant}€")
        print(f"💰 Dépôt de {montant}€. Solde : {self._solde}€")
    
    def retirer(self, montant):
        if montant > self._solde:
            print("❌ Fonds insuffisants !")
            return
        self._solde -= montant
        self.__historique.append(f"-{montant}€")
        print(f"💸 Retrait de {montant}€. Solde : {self._solde}€")

compte = CompteBancaire("Alice", 1000)
compte.deposer(500)        # 💰 Dépôt de 500€. Solde : 1500€
compte.retirer(200)        # 💸 Retrait de 200€. Solde : 1300€
print(compte.solde)        # 1300 (via le @property)

# compte.solde = -100  # ❌ ValueError !`, title: 'Encapsulation & Properties'
                },
                { type: 'info', variant: 'info', title: '📝 Conventions de nommage', content: '_attribut : Convention pour indiquer "usage interne" (pas vraiment privé). __attribut : Name mangling — Python renomme en _Classe__attribut pour le rendre plus difficile d\'accès.' },
                {
                    type: 'quiz', questions: [
                        { question: 'Que fait le décorateur @property ?', options: ['Rend l\'attribut constant', 'Crée un getter qui ressemble à un attribut', 'Supprime un attribut', 'Crée une méthode statique'], correct: 1, explanation: '@property permet d\'accéder à une méthode comme si c\'était un attribut : obj.solde au lieu de obj.get_solde().' },
                        { question: 'Que signifie le préfixe _ devant un attribut en Python ?', options: ['L\'attribut est constant', 'Convention indiquant un usage interne', 'L\'attribut est supprimé', 'L\'attribut est public'], correct: 1, explanation: 'Le préfixe _ est une convention qui signale que l\'attribut est destiné à un usage interne (privé par convention, pas techniquement).' },
                        { question: 'Que fait le name mangling avec double underscore __ ?', options: ['Supprime l\'attribut', 'Renomme en _Classe__attribut', 'Le rend public', 'Crée une copie'], correct: 1, explanation: 'Python renomme __attribut en _NomClasse__attribut pour éviter les conflits dans les sous-classes.' },
                    ]
                },
            ]
        },
        {
            id: 'l3-heritage',
            title: '3.3 Héritage et Polymorphisme',
            duration: '30 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'text', content: `<p>L'<strong>héritage</strong> permet de créer de nouvelles classes basées sur des classes existantes, en héritant de leurs attributs et méthodes. Le <strong>polymorphisme</strong> permet à des objets différents de répondre au même message de manière différente.</p>` },
                {
                    type: 'code', code: `# Classe parente (base)
class Animal:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    
    def parler(self):
        """Méthode générique — sera redéfinie."""
        return "..."
    
    def se_presenter(self):
        return f"Je suis {self.nom}, {self.age} ans"

# Classes enfants (héritent de Animal)
class Chien(Animal):
    def __init__(self, nom, age, race):
        super().__init__(nom, age)  # Appel au constructeur parent
        self.race = race
    
    def parler(self):  # Override (redéfinition)
        return "Ouaf ! 🐕"

class Chat(Animal):
    def parler(self):
        return "Miaou ! 🐱"

class Oiseau(Animal):
    def parler(self):
        return "Cui-cui ! 🐦"
    
    def voler(self):  # Méthode spécifique
        return f"{self.nom} s'envole !"

# Créer des objets
rex = Chien("Rex", 5, "Berger Allemand")
mimi = Chat("Mimi", 3)
piou = Oiseau("Piou", 1)

# Polymorphisme : même méthode, comportement différent
animaux = [rex, mimi, piou]
for animal in animaux:
    print(f"{animal.se_presenter()} → {animal.parler()}")

# Je suis Rex, 5 ans → Ouaf ! 🐕
# Je suis Mimi, 3 ans → Miaou ! 🐱
# Je suis Piou, 1 ans → Cui-cui ! 🐦

# isinstance et issubclass
print(isinstance(rex, Chien))    # True
print(isinstance(rex, Animal))   # True (hérite de Animal)
print(issubclass(Chien, Animal)) # True`, title: 'Héritage et Polymorphisme'
                },
                { type: 'heading', content: 'Héritage multiple' },
                {
                    type: 'code', code: `# Héritage multiple (avec précaution !)
class Nageur:
    def nager(self):
        return "Je nage 🏊"

class Coureur:
    def courir(self):
        return "Je cours 🏃"

class Triathlete(Nageur, Coureur):
    def se_presenter(self):
        return f"{self.nager()} et {self.courir()}"

athlete = Triathlete()
print(athlete.se_presenter())  # Je nage 🏊 et Je cours 🏃

# MRO (Method Resolution Order) — ordre de recherche des méthodes
print(Triathlete.__mro__)`, title: 'Héritage multiple'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Que fait super().__init__() ?', options: ['Crée un nouvel objet', 'Appelle le constructeur de la classe parente', 'Supprime l\'objet', 'Crée une copie'], correct: 1, explanation: 'super() permet d\'appeler les méthodes de la classe parente, y compris __init__.' },
                        { question: 'Qu\'est-ce que le polymorphisme ?', options: ['Avoir plusieurs classes', 'Des objets différents répondant au même message différemment', 'L\'héritage multiple', 'La surcharge de méthodes'], correct: 1, explanation: 'Le polymorphisme permet à des objets de types différents de répondre au même appel de méthode avec leur propre comportement.' },
                        { question: 'isinstance(chien, Animal) retourne True quand...', options: ['chien est une instance de Animal ou d\'une sous-classe', 'chien a un attribut nom', 'chien a été créé avec type()', 'Animal est une métaclasse'], correct: 0, explanation: 'isinstance vérifie si un objet est une instance de la classe spécifiée ou de l\'une de ses sous-classes.' },
                    ]
                },
            ]
        },
        {
            id: 'l3-dunder',
            title: '3.4 Méthodes Spéciales (Dunder)',
            duration: '25 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'text', content: `<p>Les <strong>méthodes spéciales</strong> (ou "dunder methods", pour <em>double underscore</em>) permettent de personnaliser le comportement de vos objets avec les opérateurs Python.</p>` },
                {
                    type: 'code', code: `class Vecteur:
    """Vecteur 2D avec opérateurs personnalisés."""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        """Représentation lisible (pour print)."""
        return f"Vecteur({self.x}, {self.y})"
    
    def __repr__(self):
        """Représentation technique (pour debug)."""
        return f"Vecteur(x={self.x}, y={self.y})"
    
    def __add__(self, autre):
        """Addition : v1 + v2"""
        return Vecteur(self.x + autre.x, self.y + autre.y)
    
    def __sub__(self, autre):
        """Soustraction : v1 - v2"""
        return Vecteur(self.x - autre.x, self.y - autre.y)
    
    def __mul__(self, scalaire):
        """Multiplication par un scalaire : v * 3"""
        return Vecteur(self.x * scalaire, self.y * scalaire)
    
    def __eq__(self, autre):
        """Égalité : v1 == v2"""
        return self.x == autre.x and self.y == autre.y
    
    def __len__(self):
        """Norme (arrondie) : len(v)"""
        return int((self.x**2 + self.y**2)**0.5)
    
    def __bool__(self):
        """Vecteur nul = False : bool(v)"""
        return self.x != 0 or self.y != 0

# Utilisation
v1 = Vecteur(3, 4)
v2 = Vecteur(1, 2)

print(v1)              # Vecteur(3, 4)
print(v1 + v2)         # Vecteur(4, 6)
print(v1 - v2)         # Vecteur(2, 2)
print(v1 * 3)          # Vecteur(9, 12)
print(v1 == v2)        # False
print(len(v1))         # 5 (norme du vecteur 3,4)
print(bool(Vecteur(0, 0)))  # False`, title: 'Dunder Methods'
                },
                { type: 'info', variant: 'tip', title: '💡 Principales méthodes spéciales', content: '__init__ (constructeur), __str__ (print), __repr__ (debug), __add__ (+), __sub__ (-), __mul__ (*), __eq__ (==), __lt__ (<), __len__ (len), __contains__ (in), __getitem__ ([]), __iter__ (for), __call__ (()).' },
                {
                    type: 'quiz', questions: [
                        { question: 'Quelle méthode est appelée par print(objet) ?', options: ['__repr__', '__str__', '__print__', '__display__'], correct: 1, explanation: '__str__ est appelée par print() et str(). __repr__ est utilisée pour le debug et le REPL.' },
                        { question: 'Pour pouvoir utiliser l\'opérateur + entre deux objets, quelle méthode faut-il définir ?', options: ['__plus__', '__add__', '__sum__', '__concat__'], correct: 1, explanation: '__add__ est la méthode spéciale qui surcharge l\'opérateur + pour vos objets.' },
                        { question: 'Quelle méthode permet d\'utiliser len() sur votre objet ?', options: ['__size__', '__count__', '__len__', '__length__'], correct: 2, explanation: '__len__ est appelée par la fonction built-in len(). Elle doit retourner un entier.' },
                    ]
                },
            ]
        },
        {
            id: 'l3-dataclass',
            title: '3.5 Dataclasses & Exceptions Custom',
            duration: '20 min',
            difficulty: 'Intermédiaire',
            content: [
                { type: 'heading', content: 'Dataclasses' },
                { type: 'text', content: `<p>Les <strong>dataclasses</strong> (Python 3.7+) simplifient la création de classes qui stockent principalement des données.</p>` },
                {
                    type: 'code', code: `from dataclasses import dataclass, field

@dataclass
class Etudiant:
    nom: str
    age: int
    notes: list = field(default_factory=list)
    
    @property
    def moyenne(self):
        return sum(self.notes) / len(self.notes) if self.notes else 0

# Pas besoin d'écrire __init__, __str__, __repr__, __eq__ !
alice = Etudiant("Alice", 20, [15, 16, 18])
bob = Etudiant("Bob", 22, [12, 14])

print(alice)           # Etudiant(nom='Alice', age=20, notes=[15, 16, 18])
print(alice.moyenne)   # 16.333...
print(alice == bob)    # False (comparaison automatique)

# Dataclass immuable
@dataclass(frozen=True)
class Point:
    x: float
    y: float

p = Point(3.0, 4.0)
# p.x = 5.0  # ❌ FrozenInstanceError !`, title: 'Dataclasses'
                },
                { type: 'heading', content: 'Exceptions personnalisées' },
                {
                    type: 'code', code: `# Créer ses propres exceptions
class ErreurValidation(Exception):
    """Exception pour les erreurs de validation."""
    def __init__(self, champ, message):
        self.champ = champ
        self.message = message
        super().__init__(f"{champ} : {message}")

class AgeInvalide(ErreurValidation):
    pass

class EmailInvalide(ErreurValidation):
    pass

# Utilisation
def valider_inscription(nom, age, email):
    if age < 0 or age > 150:
        raise AgeInvalide("age", f"{age} n'est pas un âge valide")
    if "@" not in email:
        raise EmailInvalide("email", f"'{email}' n'est pas un email valide")
    print(f"✅ Inscription de {nom} validée !")

try:
    valider_inscription("Alice", 25, "alice@mail.com")   # ✅
    valider_inscription("Bob", -5, "bob@mail.com")       # ❌
except AgeInvalide as e:
    print(f"❌ Erreur d'âge : {e}")
except EmailInvalide as e:
    print(f"❌ Erreur d'email : {e}")`, title: 'Exceptions personnalisées'
                },
                { type: 'heading', content: '🛠️ Projet : RPG Textuel (aperçu)' },
                {
                    type: 'code', code: `from dataclasses import dataclass, field
import random

@dataclass
class Arme:
    nom: str
    degats: int
    
    def __str__(self):
        return f"{self.nom} ({self.degats} dégâts)"

@dataclass
class Personnage:
    nom: str
    pv: int = 100
    attaque: int = 15
    defense: int = 5
    arme: Arme = None
    inventaire: list = field(default_factory=list)
    
    @property
    def est_vivant(self):
        return self.pv > 0
    
    def equiper(self, arme):
        self.arme = arme
        print(f"⚔️ {self.nom} équipe {arme}")
    
    def attaquer(self, cible):
        degats_base = self.attaque + (self.arme.degats if self.arme else 0)
        degats = max(0, degats_base - cible.defense)
        degats = random.randint(degats // 2, degats)
        cible.pv = max(0, cible.pv - degats)
        print(f"⚔️ {self.nom} attaque {cible.nom} → {degats} dégâts !")
        print(f"   {cible.nom} : {cible.pv} PV restants")
        return degats

# Combat
hero = Personnage("Héros", pv=120, attaque=18)
hero.equiper(Arme("Épée de feu", 12))

monstre = Personnage("Dragon", pv=80, attaque=20, defense=8)

print("\\n⚔️ COMBAT !")
tour = 1
while hero.est_vivant and monstre.est_vivant:
    print(f"\\n--- Tour {tour} ---")
    hero.attaquer(monstre)
    if monstre.est_vivant:
        monstre.attaquer(hero)
    tour += 1

gagnant = hero if hero.est_vivant else monstre
print(f"\\n🏆 {gagnant.nom} gagne avec {gagnant.pv} PV !")`, title: '🎮 RPG Textuel (aperçu du projet)'
                },
                {
                    type: 'quiz', questions: [
                        { question: 'Quel avantage principal offrent les dataclasses ?', options: ['Plus rapides que les classes normales', 'Génèrent automatiquement __init__, __repr__, __eq__', 'Sont obligatoires en Python 3.12+', 'Empêchent les bugs'], correct: 1, explanation: 'Les dataclasses génèrent automatiquement __init__, __repr__, __eq__ et d\'autres méthodes.' },
                        { question: 'Comment rendre une dataclass immuable ?', options: ['@dataclass(const=True)', '@dataclass(frozen=True)', '@dataclass(readonly=True)', 'Impossible'], correct: 1, explanation: 'frozen=True empêche la modification des attributs après la création. Toute tentative lève FrozenInstanceError.' },
                        { question: 'Pour créer une exception personnalisée, on hérite de...', options: ['object', 'Error', 'Exception', 'BaseClass'], correct: 2, explanation: 'Les exceptions personnalisées doivent hériter de Exception (ou d\'une de ses sous-classes).' },
                    ]
                },
            ]
        },
    ]
}
