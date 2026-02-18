import CodeBlock from './CodeBlock'
import Quiz from './Quiz'

export default function LessonView({
    courses, levelId, lessonId, isCompleted, markCompleted, onNext, onPrev, onNavigate
}) {
    const level = courses.find(l => l.id === levelId)
    if (!level) return <div>Niveau introuvable</div>

    const lesson = level.lessons.find(l => l.id === lessonId)
    if (!lesson) return <div>Leçon introuvable</div>

    const lessonIndex = level.lessons.findIndex(l => l.id === lessonId)
    const levelIndex = courses.findIndex(l => l.id === levelId)
    const completed = isCompleted(levelId, lessonId)

    const hasPrev = lessonIndex > 0 || levelIndex > 0
    const hasNext = lessonIndex < level.lessons.length - 1 || levelIndex < courses.length - 1

    const handleComplete = () => {
        markCompleted(levelId, lessonId)
        if (hasNext) onNext()
    }

    const renderContent = (content) => {
        return content.map((block, index) => {
            switch (block.type) {
                case 'text':
                    return <div key={index} className="lesson-content" dangerouslySetInnerHTML={{ __html: block.content }} />

                case 'code':
                    return <CodeBlock key={index} code={block.code} language={block.language || 'python'} title={block.title} />

                case 'info':
                    return (
                        <div key={index} className={`info-box ${block.variant || 'info'}`}>
                            <div className="info-box-title">{block.title}</div>
                            <p>{block.content}</p>
                        </div>
                    )

                case 'quiz':
                    return <Quiz key={index} questions={block.questions} />

                case 'heading':
                    return <div key={index} className="lesson-content"><h2>{block.content}</h2></div>

                case 'subheading':
                    return <div key={index} className="lesson-content"><h3>{block.content}</h3></div>

                default:
                    return null
            }
        })
    }

    return (
        <div className="lesson-view">
            <div className="lesson-header">
                <div className="lesson-breadcrumb">
                    <span>Niveau {levelIndex + 1}</span> › <span>{level.shortTitle}</span> › Leçon {lessonIndex + 1}
                </div>
                <h1 className="lesson-title">{lesson.title}</h1>
                <div className="lesson-meta">
                    <span>⏱ {lesson.duration || '15-20 min'}</span>
                    <span>📊 {lesson.difficulty || 'Débutant'}</span>
                    {completed && <span style={{ color: 'var(--accent-success)' }}>✅ Complétée</span>}
                </div>
            </div>

            {renderContent(lesson.content)}

            <div className="lesson-nav">
                {hasPrev ? (
                    <button className="lesson-nav-btn" onClick={onPrev}>
                        ← Précédent
                    </button>
                ) : <div />}

                {!completed ? (
                    <button className="lesson-nav-btn complete" onClick={handleComplete}>
                        ✅ Marquer comme terminée{hasNext ? ' & Suivant' : ''}
                    </button>
                ) : hasNext ? (
                    <button className="lesson-nav-btn complete" onClick={onNext}>
                        Suivant →
                    </button>
                ) : (
                    <button className="lesson-nav-btn complete" onClick={() => onNavigate(courses[0].id, courses[0].lessons[0].id)}>
                        🏠 Retour au début
                    </button>
                )}
            </div>
        </div>
    )
}
