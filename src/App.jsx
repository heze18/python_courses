import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LessonView from './components/LessonView'
import { coursesData } from './data/courses'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentView, setCurrentView] = useState('dashboard')
    const [currentLevel, setCurrentLevel] = useState(null)
    const [currentLesson, setCurrentLesson] = useState(null)
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('python-academy-progress')
        return saved ? JSON.parse(saved) : {}
    })

    useEffect(() => {
        localStorage.setItem('python-academy-progress', JSON.stringify(progress))
    }, [progress])

    const markCompleted = (levelId, lessonId) => {
        setProgress(prev => ({
            ...prev,
            [`${levelId}-${lessonId}`]: true
        }))
    }

    const isCompleted = (levelId, lessonId) => {
        return progress[`${levelId}-${lessonId}`] || false
    }

    const getCompletedCount = (levelId) => {
        const level = coursesData.find(l => l.id === levelId)
        if (!level) return 0
        return level.lessons.filter(l => isCompleted(levelId, l.id)).length
    }

    const getTotalLessons = () => {
        return coursesData.reduce((sum, level) => sum + level.lessons.length, 0)
    }

    const getTotalCompleted = () => {
        return coursesData.reduce((sum, level) =>
            sum + level.lessons.filter(l => isCompleted(level.id, l.id)).length, 0
        )
    }

    const getGlobalProgress = () => {
        const total = getTotalLessons()
        return total > 0 ? Math.round((getTotalCompleted() / total) * 100) : 0
    }

    const navigateToLesson = (levelId, lessonId) => {
        setCurrentLevel(levelId)
        setCurrentLesson(lessonId)
        setCurrentView('lesson')
        setSidebarOpen(false)
        window.scrollTo(0, 0)
    }

    const navigateToDashboard = () => {
        setCurrentView('dashboard')
        setCurrentLevel(null)
        setCurrentLesson(null)
        window.scrollTo(0, 0)
    }

    const navigateNext = () => {
        const level = coursesData.find(l => l.id === currentLevel)
        if (!level) return
        const lessonIndex = level.lessons.findIndex(l => l.id === currentLesson)
        if (lessonIndex < level.lessons.length - 1) {
            navigateToLesson(currentLevel, level.lessons[lessonIndex + 1].id)
        } else {
            const levelIndex = coursesData.findIndex(l => l.id === currentLevel)
            if (levelIndex < coursesData.length - 1) {
                const nextLevel = coursesData[levelIndex + 1]
                navigateToLesson(nextLevel.id, nextLevel.lessons[0].id)
            }
        }
    }

    const navigatePrev = () => {
        const level = coursesData.find(l => l.id === currentLevel)
        if (!level) return
        const lessonIndex = level.lessons.findIndex(l => l.id === currentLesson)
        if (lessonIndex > 0) {
            navigateToLesson(currentLevel, level.lessons[lessonIndex - 1].id)
        } else {
            const levelIndex = coursesData.findIndex(l => l.id === currentLevel)
            if (levelIndex > 0) {
                const prevLevel = coursesData[levelIndex - 1]
                navigateToLesson(prevLevel.id, prevLevel.lessons[prevLevel.lessons.length - 1].id)
            }
        }
    }

    return (
        <div className="app-layout">
            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                courses={coursesData}
                currentLevel={currentLevel}
                currentLesson={currentLesson}
                onNavigate={navigateToLesson}
                onDashboard={navigateToDashboard}
                isCompleted={isCompleted}
                getCompletedCount={getCompletedCount}
            />

            {sidebarOpen && (
                <div className="sidebar-overlay open" onClick={() => setSidebarOpen(false)} />
            )}

            <div className="main-content">
                <Header
                    globalProgress={getGlobalProgress()}
                    onMenuClick={() => setSidebarOpen(true)}
                    onDashboard={navigateToDashboard}
                />

                <div className="page-container">
                    {currentView === 'dashboard' ? (
                        <Dashboard
                            courses={coursesData}
                            getCompletedCount={getCompletedCount}
                            getTotalCompleted={getTotalCompleted}
                            getTotalLessons={getTotalLessons}
                            getGlobalProgress={getGlobalProgress}
                            onNavigate={navigateToLesson}
                        />
                    ) : (
                        <LessonView
                            courses={coursesData}
                            levelId={currentLevel}
                            lessonId={currentLesson}
                            isCompleted={isCompleted}
                            markCompleted={markCompleted}
                            onNext={navigateNext}
                            onPrev={navigatePrev}
                            onNavigate={navigateToLesson}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
