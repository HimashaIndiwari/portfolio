/** Pre-generated particle positions for stable renders. */
const PARTICLES = [
  { id: 0, left: "12%", top: "18%", delay: "0.5s", duration: "10s", size: 2 },
  { id: 1, left: "78%", top: "32%", delay: "1.2s", duration: "12s", size: 3 },
  { id: 2, left: "45%", top: "8%", delay: "2.1s", duration: "9s", size: 2 },
  { id: 3, left: "88%", top: "65%", delay: "0.8s", duration: "11s", size: 2 },
  { id: 4, left: "22%", top: "72%", delay: "3.4s", duration: "13s", size: 3 },
  { id: 5, left: "62%", top: "48%", delay: "1.8s", duration: "8s", size: 2 },
  { id: 6, left: "5%", top: "42%", delay: "4.2s", duration: "14s", size: 2 },
  { id: 7, left: "92%", top: "15%", delay: "2.6s", duration: "10s", size: 3 },
  { id: 8, left: "35%", top: "85%", delay: "0.3s", duration: "11s", size: 2 },
  { id: 9, left: "55%", top: "22%", delay: "3.1s", duration: "9s", size: 2 },
  { id: 10, left: "18%", top: "55%", delay: "1.5s", duration: "12s", size: 3 },
  { id: 11, left: "72%", top: "78%", delay: "2.9s", duration: "10s", size: 2 },
  { id: 12, left: "48%", top: "62%", delay: "4.8s", duration: "13s", size: 2 },
  { id: 13, left: "8%", top: "88%", delay: "0.9s", duration: "8s", size: 2 },
  { id: 14, left: "95%", top: "45%", delay: "3.7s", duration: "11s", size: 3 },
  { id: 15, left: "28%", top: "28%", delay: "2.2s", duration: "9s", size: 2 },
  { id: 16, left: "65%", top: "5%", delay: "1.1s", duration: "12s", size: 2 },
  { id: 17, left: "38%", top: "38%", delay: "4.5s", duration: "10s", size: 3 },
  { id: 18, left: "82%", top: "92%", delay: "0.6s", duration: "14s", size: 2 },
  { id: 19, left: "15%", top: "95%", delay: "3.3s", duration: "11s", size: 2 },
];

const STARS = [
  { id: 0, left: "10%", top: "12%", opacity: 0.4, size: 1 },
  { id: 1, left: "25%", top: "8%", opacity: 0.6, size: 2 },
  { id: 2, left: "42%", top: "18%", opacity: 0.3, size: 1 },
  { id: 3, left: "58%", top: "5%", opacity: 0.5, size: 1 },
  { id: 4, left: "75%", top: "15%", opacity: 0.7, size: 2 },
  { id: 5, left: "90%", top: "10%", opacity: 0.4, size: 1 },
  { id: 6, left: "5%", top: "30%", opacity: 0.5, size: 1 },
  { id: 7, left: "33%", top: "25%", opacity: 0.6, size: 1 },
  { id: 8, left: "67%", top: "28%", opacity: 0.3, size: 2 },
  { id: 9, left: "85%", top: "35%", opacity: 0.5, size: 1 },
  { id: 10, left: "18%", top: "45%", opacity: 0.4, size: 1 },
  { id: 11, left: "52%", top: "42%", opacity: 0.6, size: 1 },
  { id: 12, left: "78%", top: "48%", opacity: 0.3, size: 1 },
  { id: 13, left: "12%", top: "58%", opacity: 0.5, size: 2 },
  { id: 14, left: "45%", top: "55%", opacity: 0.4, size: 1 },
  { id: 15, left: "88%", top: "60%", opacity: 0.6, size: 1 },
  { id: 16, left: "30%", top: "68%", opacity: 0.3, size: 1 },
  { id: 17, left: "62%", top: "65%", opacity: 0.5, size: 2 },
  { id: 18, left: "8%", top: "75%", opacity: 0.4, size: 1 },
  { id: 19, left: "95%", top: "72%", opacity: 0.6, size: 1 },
];

/**
 * Futuristic space background: stars, particles, grid floor, light trails.
 */
export default function SceneEnvironment() {
  return (
    <>
      <div className="scene-layer scene-space" data-depth="0.2">
        {STARS.map((star) => (
          <span
            key={star.id}
            className="space-star"
            style={{
              left: star.left,
              top: star.top,
              opacity: star.opacity,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="space-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
        <div className="light-trail light-trail-one" />
        <div className="light-trail light-trail-two" />
        <div className="light-trail light-trail-three" />
      </div>

      <div className="scene-layer scene-grid-floor" data-depth="0.5">
        <div className="grid-floor" />
        <div className="grid-glow" />
      </div>

      <div className="scene-spotlight" />
    </>
  );
}
