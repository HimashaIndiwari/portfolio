import { useEffect, useRef, useCallback } from "react";

/**
 * Smooth 60fps mouse parallax via requestAnimationFrame lerp.
 */
export function useParallaxScene(options = {}) {
  const {
    lerp = 0.085,
    rotateXMax = 10,
    rotateYMax = 13,
    parallaxMultiplier = 42,
    parallaxYMultiplier = 34,
  } = options;

  const sceneRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const scene = sceneRef.current;
      if (scene) {
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;

        const { x, y } = currentRef.current;
        scene.style.setProperty("--rotate-x", `${-y * rotateXMax}deg`);
        scene.style.setProperty("--rotate-y", `${x * rotateYMax}deg`);
        scene.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
        scene.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);

        scene.querySelectorAll("[data-depth]").forEach((layer) => {
          const depth = Number(layer.dataset.depth || 1);
          layer.style.setProperty("--parallax-x", `${x * depth * parallaxMultiplier}px`);
          layer.style.setProperty("--parallax-y", `${y * depth * parallaxYMultiplier}px`);
        });
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [lerp, rotateXMax, rotateYMax, parallaxMultiplier, parallaxYMultiplier]);

  const handlePointerMove = useCallback((event) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const bounds = scene.getBoundingClientRect();
    targetRef.current = {
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    };
  }, []);

  const handlePointerLeave = useCallback(() => {
    targetRef.current = { x: 0, y: 0 };
  }, []);

  return { sceneRef, handlePointerMove, handlePointerLeave };
}
