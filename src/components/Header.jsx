import { useState, useEffect } from 'react'

export default function Header({ globalProgress, onMenuClick, onDashboard }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('python-academy-theme') || 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('python-academy-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className="header">
            <button className="mobile-menu-btn" onClick={onMenuClick}>☰</button>
            <div className="header-title" onClick={onDashboard} style={{ cursor: 'pointer' }}>
                <span className="emoji">🐍</span>
                <span>Python Expert Academy</span>
            </div>
            <div className="header-progress">
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${globalProgress}%` }}
                    />
                </div>
                <span className="progress-text">{globalProgress}%</span>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    )
}
