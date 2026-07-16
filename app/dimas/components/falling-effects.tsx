"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

const PILE_HEIGHT = 230;
const PATH_WIDTH = 1440;

const SNOW_MOUNDS = [
  { center: 8, width: 20, peak: 72 },
  { center: 24, width: 28, peak: 158 },
  { center: 44, width: 38, peak: 210 },
  { center: 64, width: 32, peak: 185 },
  { center: 82, width: 26, peak: 142 },
  { center: 93, width: 18, peak: 68 },
  { center: 52, width: 14, peak: 48 },
] as const;

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  opacity: number;
  rotation: number;
  landY: number;
  landRot: number;
  surfaceBottom: number;
};

type PilePetal = {
  id: number;
  left: number;
  bottom: number;
  size: number;
  rotation: number;
  opacity: number;
};

type SurfacePoint = {
  x: number;
  y: number;
  height: number;
};

type SnowClump = {
  id: number;
  left: number;
  bottom: number;
  width: number;
  height: number;
  skew: number;
  shade: number;
};

type SnowSparkle = {
  id: number;
  left: number;
  bottom: number;
  size: number;
};

type ParticleStyle = CSSProperties & {
  "--sway"?: string;
  "--rot"?: string;
  "--fall-height"?: string;
  "--land-y"?: string;
  "--land-rot"?: string;
  "--final-opacity"?: string;
};

function getSnowSurfaceHeight(leftPct: number): number {
  let height = 1.5;

  for (const { center, width, peak } of SNOW_MOUNDS) {
    const sigma = width / 3.4;
    const diff = leftPct - center;
    height += peak * Math.exp(-(diff * diff) / (2 * sigma * sigma));
  }

  const ripple =
    Math.sin(leftPct * 0.22) * 3.5 + Math.sin(leftPct * 0.47 + 1.2) * 2;
  height += ripple;

  return Math.min(Math.max(height, 0), PILE_HEIGHT - 6);
}

function sampleSurface(steps = 72): SurfacePoint[] {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const pct = (i / steps) * 100;
    const height = getSnowSurfaceHeight(pct);

    return {
      x: (pct / 100) * PATH_WIDTH,
      y: PILE_HEIGHT - height,
      height,
    };
  });
}

function buildSnowPaths(points: SurfacePoint[]) {
  const surface = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L ");
  const main = `M 0,${PILE_HEIGHT} L ${surface} L ${PATH_WIDTH},${PILE_HEIGHT} Z`;

  const shadowSurface = points
    .map((p) => `${p.x.toFixed(1)},${(p.y + 7).toFixed(1)}`)
    .join(" L ");
  const shadow = `M 0,${PILE_HEIGHT + 10} L ${shadowSurface} L ${PATH_WIDTH},${PILE_HEIGHT + 10} Z`;

  const highlightSurface = points
    .map((p) => {
      const lift = Math.max(8, p.height * 0.28);
      return `${p.x.toFixed(1)},${(p.y + lift).toFixed(1)}`;
    })
    .join(" L ");
  const highlight = `M 0,${PILE_HEIGHT} L ${highlightSurface} L ${PATH_WIDTH},${PILE_HEIGHT} Z`;

  return { main, shadow, highlight };
}

function findValleys(points: SurfacePoint[]): SurfacePoint[] {
  const valleys: SurfacePoint[] = [];

  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1].height;
    const curr = points[i].height;
    const next = points[i + 1].height;

    if (curr < prev && curr < next && curr < 90) {
      valleys.push(points[i]);
    }
  }

  return valleys;
}

function createSnowParticles(count: number, fallHeight: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    const left = Math.random() * 100;
    const speed = 35 + Math.random() * 45;
    const surfaceBottom = getSnowSurfaceHeight(left);

    return {
      id,
      left,
      size: Math.random() * 6 + 3,
      duration: fallHeight / speed,
      delay: Math.random() * -30,
      sway: (Math.random() - 0.5) * 100,
      opacity: Math.random() * 0.5 + 0.35,
      rotation: Math.random() * 360,
      landY: fallHeight - surfaceBottom,
      landRot: 0,
      surfaceBottom,
    };
  });
}

function createSakuraParticles(count: number, fallHeight: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    const left = Math.random() * 94 + 3;
    const speed = 28 + Math.random() * 35;
    const surfaceBottom = getSnowSurfaceHeight(left);
    const landY = fallHeight - surfaceBottom;

    return {
      id,
      left,
      size: Math.random() * 8 + 8,
      duration: (landY + 40) / speed,
      delay: Math.random() * -25,
      sway: (Math.random() - 0.5) * 80,
      opacity: Math.random() * 0.2 + 0.8,
      rotation: Math.random() * 360,
      landY,
      landRot: Math.random() * 360,
      surfaceBottom,
    };
  });
}

function createPilePetals(count: number): PilePetal[] {
  return Array.from({ length: count }, (_, id) => {
    const left = Math.random() * 92 + 4;
    const surface = getSnowSurfaceHeight(left);

    return {
      id,
      left,
      bottom: surface + Math.random() * 5 - 1,
      size: Math.random() * 12 + 8,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.15 + 0.85,
    };
  });
}

function createSnowClumps(count: number): SnowClump[] {
  return Array.from({ length: count }, (_, id) => {
    const left = Math.random() * 86 + 7;
    const surface = getSnowSurfaceHeight(left);

    return {
      id,
      left,
      bottom: surface - Math.random() * 22 - 6,
      width: Math.random() * 52 + 18,
      height: Math.random() * 26 + 10,
      skew: (Math.random() - 0.5) * 24,
      shade: Math.random(),
    };
  });
}

function createSparkles(count: number): SnowSparkle[] {
  return Array.from({ length: count }, (_, id) => {
    const left = Math.random() * 90 + 5;
    const surface = getSnowSurfaceHeight(left);

    return {
      id,
      left,
      bottom: surface - Math.random() * 8 - 2,
      size: Math.random() * 2.5 + 1,
    };
  });
}

export default function FallingEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallHeight, setFallHeight] = useState(1200);

  const surfacePoints = useMemo(() => sampleSurface(), []);
  const snowPaths = useMemo(() => buildSnowPaths(surfacePoints), [surfacePoints]);
  const valleys = useMemo(() => findValleys(surfacePoints), [surfacePoints]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const parent = el.parentElement;
      setFallHeight(parent?.scrollHeight ?? el.offsetHeight);
    };

    update();

    const observer = new ResizeObserver(update);
    if (el.parentElement) observer.observe(el.parentElement);
    observer.observe(el);

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const snowflakes = useMemo(
    () => createSnowParticles(85, fallHeight),
    [fallHeight],
  );
  const sakuraPetals = useMemo(
    () => createSakuraParticles(55, fallHeight),
    [fallHeight],
  );
  const pilePetals = useMemo(() => createPilePetals(40), []);
  const snowClumps = useMemo(() => createSnowClumps(22), []);
  const sparkles = useMemo(() => createSparkles(35), []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      style={
        {
          "--fall-height": `${fallHeight}px`,
          perspective: "900px",
        } as ParticleStyle
      }
    >
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          4% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(var(--land-y)) translateX(var(--sway)) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sakuraFallLand {
          0% {
            transform: translateY(-30px) translateX(0) rotateX(50deg) rotateZ(var(--rot));
            opacity: 0;
          }
          5% { opacity: 1; }
          25% {
            transform: translateY(calc(var(--land-y) * 0.25)) translateX(calc(var(--sway) * 0.3)) rotateX(48deg) rotateZ(calc(var(--rot) + 70deg));
          }
          50% {
            transform: translateY(calc(var(--land-y) * 0.55)) translateX(calc(var(--sway) * 0.65)) rotateX(40deg) rotateZ(calc(var(--rot) + 160deg));
          }
          75% {
            transform: translateY(calc(var(--land-y) * 0.88)) translateX(calc(var(--sway) * 0.9)) rotateX(28deg) rotateZ(calc(var(--rot) + 250deg));
          }
          90% {
            transform: translateY(calc(var(--land-y) - 10px)) translateX(var(--sway)) rotateX(15deg) rotateZ(calc(var(--land-rot) - 20deg));
          }
          96% {
            transform: translateY(calc(var(--land-y) - 2px)) translateX(var(--sway)) rotateX(72deg) rotateZ(var(--land-rot));
          }
          100% {
            transform: translateY(var(--land-y)) translateX(var(--sway)) rotateX(84deg) rotateZ(var(--land-rot)) scale(0.9);
            opacity: var(--final-opacity);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }

        .snow-particle {
          position: absolute;
          top: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffffff, #e0f2fe 60%, #bae6fd);
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
          animation: snowfall linear infinite;
        }

        .sakura-particle {
          position: absolute;
          top: 0;
          z-index: 5;
          transform-style: preserve-3d;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(135deg, #ffc9d6 0%, #ff9eb5 45%, #f4728a 100%);
          box-shadow: 0 2px 4px rgba(180, 60, 90, 0.35);
          animation: sakuraFallLand ease-in-out forwards;
        }

        .sakura-particle-landed {
          position: absolute;
          z-index: 6;
          transform-style: preserve-3d;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(135deg, #ffc9d6 0%, #ff9eb5 45%, #f4728a 100%);
          box-shadow: 0 1px 3px rgba(180, 60, 90, 0.45);
        }
      `}</style>

      {snowflakes.map((flake) => (
        <span
          key={`snow-${flake.id}`}
          className="snow-particle"
          style={
            {
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              opacity: flake.opacity,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              "--sway": `${flake.sway}px`,
              "--land-y": `${flake.landY}px`,
            } as ParticleStyle
          }
        />
      ))}

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: `${PILE_HEIGHT}px` }}
      >
        <svg
          viewBox={`0 0 ${PATH_WIDTH} ${PILE_HEIGHT + 12}`}
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="snowShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a5d6e" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#09090B" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="snowBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5f9fc" />
              <stop offset="18%" stopColor="#e3ecf4" />
              <stop offset="45%" stopColor="#c5d4e2" />
              <stop offset="72%" stopColor="#9eb0c0" />
              <stop offset="100%" stopColor="#7a8f9e" />
            </linearGradient>

            <linearGradient id="snowRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#edf4fa" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#c8d8e6" stopOpacity="0" />
            </linearGradient>

            <filter id="snowGrain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="4"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.9
                        0 0 0 0 0.95
                        0 0 0 0 1
                        0 0 0 0.06 0"
                in="noise"
                result="grain"
              />
              <feBlend in="SourceGraphic" in2="grain" mode="overlay" />
            </filter>

            <filter id="snowSoftBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
          </defs>

          <path d={snowPaths.shadow} fill="url(#snowShadowGrad)" filter="url(#snowSoftBlur)" />
          <path d={snowPaths.main} fill="url(#snowBodyGrad)" filter="url(#snowGrain)" />
          <path d={snowPaths.highlight} fill="url(#snowRimGrad)" />
        </svg>

        {valleys.map((valley, i) => (
          <div
            key={`valley-${i}`}
            className="absolute rounded-[50%] bg-[#3d4f5e]/50 blur-[3px]"
            style={{
              left: `${(valley.x / PATH_WIDTH) * 100 - 3}%`,
              bottom: `${valley.height - 18}px`,
              width: "6%",
              height: "28px",
            }}
          />
        ))}

        {snowClumps.map((clump) => (
          <div
            key={`clump-${clump.id}`}
            className="absolute"
            style={{
              left: `${clump.left}%`,
              bottom: `${clump.bottom}px`,
              width: `${clump.width}px`,
              height: `${clump.height}px`,
              transform: `skewX(${clump.skew}deg)`,
              borderRadius: `${40 + clump.shade * 20}% ${60 - clump.shade * 15}% ${55 + clump.shade * 10}% ${45 - clump.shade * 12}%`,
              background: `linear-gradient(${155 + clump.shade * 40}deg, #8fa4b4 0%, #b8c9d8 ${35 + clump.shade * 20}%, #e8f1f8 100%)`,
              boxShadow: `inset 0 -5px 10px rgba(70,90,110,${0.25 + clump.shade * 0.2}), 0 2px 6px rgba(0,0,0,${0.15 + clump.shade * 0.1})`,
            }}
          />
        ))}

        {sparkles.map((sparkle) => (
          <span
            key={`sparkle-${sparkle.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${sparkle.left}%`,
              bottom: `${sparkle.bottom}px`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              animation: `sparkle ${2 + (sparkle.id % 3)}s ease-in-out infinite`,
              animationDelay: `${sparkle.id * 0.15}s`,
              boxShadow: "0 0 4px rgba(255,255,255,0.9)",
            }}
          />
        ))}

        {pilePetals.map((petal) => (
          <span
            key={`pile-${petal.id}`}
            className="sakura-particle-landed"
            style={{
              left: `${petal.left}%`,
              bottom: `${petal.bottom}px`,
              width: `${petal.size}px`,
              height: `${petal.size * 0.32}px`,
              opacity: petal.opacity,
              transform: `rotateX(84deg) rotateZ(${petal.rotation}deg) scale(0.88)`,
            }}
          />
        ))}
      </div>

      {sakuraPetals.map((petal) => (
        <span
          key={`sakura-${petal.id}`}
          className="sakura-particle"
          style={
            {
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              "--sway": `${petal.sway}px`,
              "--rot": `${petal.rotation}deg`,
              "--land-y": `${petal.landY}px`,
              "--land-rot": `${petal.landRot}deg`,
              "--final-opacity": `${petal.opacity}`,
            } as ParticleStyle
          }
        />
      ))}
    </div>
  );
}
