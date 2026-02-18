import { useState } from 'react'

export default function Sidebar({
    open, onClose, courses, currentLevel, currentLesson,
    onNavigate, onDashboard, isCompleted, getCompletedCount
}) {
    const [expandedLevels, setExpandedLevels] = useState({})

    const toggleLevel = (levelId) => {
        setExpandedLevels(prev => ({
            ...prev,
            [levelId]: !prev[levelId]
        }))
    }

    return (
        <aside className={`sidebar ${open ? 'open' : ''}`}>
            <div className="sidebar-header">
                <span className="sidebar-logo">🐍</span>
                <span className="sidebar-brand">Python Expert Academy</span>
                <button className="sidebar-close" onClick={onClose}>✕</button>
            </div>

            <nav className="sidebar-nav">
                <button
                    className="nav-level-header"
                    onClick={onDashboard}
                    style={{ color: !currentLevel ? 'var(--accent-secondary)' : undefined }}
                >
                    <span>🏠</span>
                    <span>Tableau de bord</span>
                </button>

                {courses.map(level => (
                    <div key={level.id} className="nav-level">
                        <button
                            className={`nav-level-header ${currentLevel === level.id ? 'active' : ''}`}
                            onClick={() => toggleLevel(level.id)}
                        >
                            <span className={`nav-level-icon ${expandedLevels[level.id] ? 'open' : ''}`}>▸</span>
                            <span>{level.shortTitle}</span>
                            <span className="nav-level-progress">
                                {getCompletedCount(level.id)}/{level.lessons.length}
                            </span>
                        </button>

                        <div className={`nav-lessons ${expandedLevels[level.id] ? 'open' : ''}`}>
                            {level.lessons.map(lesson => {
                                const completed = isCompleted(level.id, lesson.id)
                                const active = currentLevel === level.id && currentLesson === lesson.id
                                return (
                                    <button
                                        key={lesson.id}
                                        className={`nav-lesson-item ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}
                                        onClick={() => onNavigate(level.id, lesson.id)}
                                    >
                                        <span className={`lesson-status-dot ${completed ? 'completed' : ''} ${active ? 'active' : ''}`} />
                                        <span>{lesson.title}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    )
}
