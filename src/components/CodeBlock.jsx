import { useState } from 'react'

function tokenize(code) {
    const tokens = []
    const patterns = [
        { type: 'comment', regex: /#.*$/gm },
        { type: 'decorator', regex: /@\w+/g },
        { type: 'string', regex: /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|f"(?:\\.|[^"\\])*"|f'(?:\\.|[^'\\])*')/g },
        { type: 'keyword', regex: /\b(def|class|return|if|elif|else|for|while|in|not|and|or|is|import|from|as|with|try|except|finally|raise|yield|async|await|pass|break|continue|lambda|True|False|None|global|nonlocal|del|assert)\b/g },
        { type: 'builtin', regex: /\b(print|len|range|int|str|float|list|dict|set|tuple|type|input|open|super|self|isinstance|enumerate|zip|map|filter|sorted|reversed|any|all|min|max|sum|abs|round|format|hasattr|getattr|setattr|property|staticmethod|classmethod|__init__|__str__|__repr__|__name__|__main__)\b/g },
        { type: 'function', regex: /\b([a-zA-Z_]\w*)\s*(?=\()/g },
        { type: 'number', regex: /\b\d+\.?\d*\b/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~:]+/g },
    ]

    let result = code
    const replacements = []

    patterns.forEach(({ type, regex }) => {
        let match
        const r = new RegExp(regex.source, regex.flags)
        while ((match = r.exec(code)) !== null) {
            replacements.push({
                start: match.index,
                end: match.index + match[0].length,
                text: match[0],
                type
            })
        }
    })

    replacements.sort((a, b) => a.start - b.start)

    const filtered = []
    let lastEnd = 0
    for (const r of replacements) {
        if (r.start >= lastEnd) {
            filtered.push(r)
            lastEnd = r.end
        }
    }

    let pos = 0
    const parts = []
    for (const r of filtered) {
        if (r.start > pos) {
            parts.push({ text: code.slice(pos, r.start), type: null })
        }
        parts.push({ text: r.text, type: r.type })
        pos = r.end
    }
    if (pos < code.length) {
        parts.push({ text: code.slice(pos), type: null })
    }

    return parts
}

export default function CodeBlock({ code, language = 'python', title }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const tokens = tokenize(code)

    return (
        <div className="code-block">
            <div className="code-block-header">
                <span className="code-block-lang">{title || language}</span>
                <button className={`code-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                    {copied ? '✓ Copié' : '📋 Copier'}
                </button>
            </div>
            <pre>
                <code>
                    {tokens.map((token, i) =>
                        token.type ? (
                            <span key={i} className={`token-${token.type}`}>{token.text}</span>
                        ) : (
                            <span key={i}>{token.text}</span>
                        )
                    )}
                </code>
            </pre>
        </div>
    )
}
