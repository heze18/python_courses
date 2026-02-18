export default function Dashboard({
    courses, getCompletedCount, getTotalCompleted, getTotalLessons, getGlobalProgress, onNavigate
}) {
    const totalCompleted = getTotalCompleted()
    const totalLessons = getTotalLessons()
    const globalProgress = getGlobalProgress()
    const currentLevelIndex = courses.findIndex(level =>
        getCompletedCount(level.id) < level.lessons.length
    )
    const currentLevel = currentLevelIndex >= 0 ? currentLevelIndex + 1 : 7

    return (
        <div className="dashboard">
            <div className="dashboard-hero">
                <h1>🐍 Python Expert Academy</h1>
                <p>Formation complète Python — Du débutant à l'expert en 7 niveaux progressifs avec des exercices pratiques et des projets concrets.</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">📊</div>
                    <div className="stat-value">{globalProgress}%</div>
                    <div className="stat-label">Progression globale</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">📖</div>
                    <div className="stat-value">{totalCompleted}/{totalLessons}</div>
                    <div className="stat-label">Leçons complétées</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🎯</div>
                    <div className="stat-value">{currentLevel}</div>
                    <div className="stat-label">Niveau actuel</div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-value">{courses.filter(l => getCompletedCount(l.id) === l.lessons.length).length}</div>
                    <div className="stat-label">Niveaux terminés</div>
                </div>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>📚 Les 7 Niveaux</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Cliquez sur un niveau pour commencer ou continuer votre apprentissage.
            </p>

            <div className="levels-grid">
                {courses.map((level, index) => {
                    const completed = getCompletedCount(level.id)
                    const total = level.lessons.length
                    const percent = total > 0 ? Math.round((completed / total) * 100) : 0
                    return (
                        <div
                            key={level.id}
                            className="level-card"
                            onClick={() => onNavigate(level.id, level.lessons[0].id)}
                        >
                            <div className="level-card-header">
                                <div className="level-number">{index + 1}</div>
                                <div className="level-card-title">{level.title}</div>
                            </div>
                            <div className="level-card-desc">{level.description}</div>
                            <div className="level-card-progress">
                                <div className="level-progress-bar">
                                    <div className="level-progress-fill" style={{ width: `${percent}%` }} />
                                </div>
                                <span className="level-progress-text">{percent}%</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
