// Código reorganizado para integrar com o layout

const frases = [
    'A vida é curta — aproveite cada momento.',
    'Se a vida te der limões, faça limonada.',
    'Nunca subestime o poder de um pequeno recomeço.',
    'Siga em frente: cada passo conta.',
    'Coragem não é ausência de medo, é ação apesar dele.'
]

let indiceAtual = 0

function proximaFrase() {
    indiceAtual = (indiceAtual + 1) % frases.length
    return frases[indiceAtual]
}

function fraseAleatoria() {
    const i = Math.floor(Math.random() * frases.length)
    indiceAtual = i
    return frases[i]
}

// Função para inicializar interações do DOM
function initLayout() {
    const phraseBox = document.getElementById('phraseBox')
    const backBtn = document.getElementById('backBtn')
    const actionBtn = document.getElementById('actionBtn')

    if (!phraseBox || !backBtn || !actionBtn) return

    // Mostrar frase inicial
    phraseBox.textContent = frases[0]

    backBtn.addEventListener('click', () => {
        // Alterna entre próxima frase e animação
        phraseBox.textContent = proximaFrase()
        phraseBox.animate([{transform: 'translateY(6px)'},{transform: 'translateY(0)'}],{duration:220})
    })

    actionBtn.addEventListener('click', () => {
        // Ação de exemplo: mostrar frase aleatória em destaque
        const f = fraseAleatoria()
        phraseBox.textContent = f
        phraseBox.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
        setTimeout(()=> phraseBox.style.boxShadow = '', 900)
    })

    // Permitir navegação rápida com setas
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') phraseBox.textContent = proximaFrase()
        if (e.key === ' ') phraseBox.textContent = fraseAleatoria()
    })
}

// Inicializa quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout)
} else {
    initLayout()
}
