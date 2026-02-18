import { useState } from 'react'

export default function Quiz({ questions, onComplete }) {
    const [currentQ, setCurrentQ] = useState(0)
    const [selected, setSelected] = useState(null)
    const [answered, setAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    if (!questions || questions.length === 0) return null

    const question = questions[currentQ]
    const letters = ['A', 'B', 'C', 'D']

    const handleSelect = (index) => {
        if (answered) return
        setSelected(index)
    }

    const handleSubmit = () => {
        if (selected === null) return
        setAnswered(true)
        if (selected === question.correct) {
            setScore(s => s + 1)
        }
    }

    const handleNext = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(q => q + 1)
            setSelected(null)
            setAnswered(false)
        } else {
            setFinished(true)
            if (onComplete) onComplete(score + (selected === question.correct ? 1 : 0))
        }
    }

    const handleReset = () => {
        setCurrentQ(0)
        setSelected(null)
        setAnswered(false)
        setScore(0)
        setFinished(false)
    }

    if (finished) {
        const finalScore = score
        const percent = Math.round((finalScore / questions.length) * 100)
        return (
            <div className="quiz-container">
                <div className="quiz-score">
                    <div className="quiz-score-value">{percent}%</div>
                    <div className="quiz-score-label">
                        {finalScore}/{questions.length} réponses correctes
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.95rem' }}>
                        {percent >= 80 ? '🎉 Excellent ! Vous maîtrisez cette leçon !' :
                            percent >= 50 ? '👍 Bien ! Revoyez les notions manquées.' :
                                '📖 Relisez la leçon et réessayez.'}
                    </p>
                    <div className="quiz-actions" style={{ justifyContent: 'center' }}>
                        <button className="quiz-btn primary" onClick={handleReset}>
                            🔄 Recommencer le quiz
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            <div className="quiz-title">✅ Quiz – Testez vos connaissances</div>
            <div className="quiz-progress">
                Question {currentQ + 1} sur {questions.length}
            </div>

            <div className="quiz-question">{question.question}</div>

            <div className="quiz-options">
                {question.options.map((option, index) => {
                    let className = 'quiz-option'
                    if (selected === index && !answered) className += ' selected'
                    if (answered && index === question.correct) className += ' correct'
                    if (answered && selected === index && index !== question.correct) className += ' wrong'

                    return (
                        <div key={index} className={className} onClick={() => handleSelect(index)}>
                            <span className="quiz-option-letter">{letters[index]}</span>
                            <span>{option}</span>
                        </div>
                    )
                })}
            </div>

            {answered && (
                <div className={`quiz-feedback ${selected === question.correct ? 'correct' : 'wrong'}`}>
                    {selected === question.correct
                        ? `✅ Correct ! ${question.explanation || ''}`
                        : `❌ Incorrect. La bonne réponse est ${letters[question.correct]}. ${question.explanation || ''}`
                    }
                </div>
            )}

            <div className="quiz-actions">
                {!answered ? (
                    <button className="quiz-btn primary" onClick={handleSubmit} disabled={selected === null}>
                        Vérifier
                    </button>
                ) : (
                    <button className="quiz-btn primary" onClick={handleNext}>
                        {currentQ < questions.length - 1 ? 'Question suivante →' : 'Voir le résultat'}
                    </button>
                )}
            </div>
        </div>
    )
}
