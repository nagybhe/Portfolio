import React from 'react';
import './ParticlesBackground.css';

const PARTICLE_COUNT = 42;

/*
 * Gerador determinístico: as posições precisam ser estáveis entre renders
 * (Math.random() no corpo do componente reposiciona tudo a cada re-render e
 * reinicia as animações).
 */
const pseudoRandom = (seed) => {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
};

/*
 * Três camadas de profundidade: as do fundo são menores, mais apagadas e mais
 * lentas; as da frente, maiores e mais rápidas. É o que dá sensação de paralaxe
 * sem precisar de canvas ou biblioteca.
 */
const DEPTHS = [
    { name: 'far', size: [2, 3], duration: [34, 46], opacity: [0.18, 0.32] },
    { name: 'mid', size: [3, 5], duration: [24, 34], opacity: [0.3, 0.5] },
    { name: 'near', size: [5, 8], duration: [16, 24], opacity: [0.45, 0.7] }
];

const between = ([min, max], t) => min + (max - min) * t;

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const depth = DEPTHS[index % DEPTHS.length];
    const r = (offset) => pseudoRandom(index + offset);

    return {
        id: index,
        depth: depth.name,
        accent: r(101) > 0.55,
        style: {
            '--left': `${(r(1) * 100).toFixed(2)}%`,
            '--size': `${between(depth.size, r(29)).toFixed(1)}px`,
            '--duration': `${between(depth.duration, r(53)).toFixed(1)}s`,
            '--delay': `${(-r(71) * between(depth.duration, r(53))).toFixed(1)}s`,
            '--opacity': between(depth.opacity, r(97)).toFixed(2),
            '--drift': `${((r(131) - 0.5) * 160).toFixed(0)}px`
        }
    };
});

/**
 * Camada de partículas fixa atrás de todo o conteúdo da página.
 * Fica em position:fixed para não crescer com o scroll e não repintar a cada
 * rolagem — as seções acima dela são transparentes e deixam o efeito passar.
 */
const ParticlesBackground = () => (
    <div className="particles-layer" aria-hidden="true">
        {PARTICLES.map(({ id, depth, accent, style }) => (
            <span
                key={id}
                className={`particle-dot particle-${depth}${accent ? ' particle-accent' : ''}`}
                style={style}
            />
        ))}
    </div>
);

export default ParticlesBackground;
