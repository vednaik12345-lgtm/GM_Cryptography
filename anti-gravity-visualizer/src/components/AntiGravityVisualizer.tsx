import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

interface AntiGravityVisualizerProps {
  totalCiphertextBits: number;
}

const MAX_BLOCKS = 100;

export const AntiGravityVisualizer: React.FC<AntiGravityVisualizerProps> = ({ totalCiphertextBits }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  
  const [hiddenCount, setHiddenCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // 3. Physics Engine Data Binding
    const renderBlocks = Math.min(totalCiphertextBits > 0 ? MAX_BLOCKS : 0, totalCiphertextBits);
    
    setDisplayCount(renderBlocks);
    setHiddenCount(Math.max(0, totalCiphertextBits - renderBlocks));
  }, [totalCiphertextBits]);

  useEffect(() => {
    if (!sceneRef.current) return;

    // 1. Setup Matter.js Engine
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0 } // Zero-gravity environment
    });
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // 2. Setup Renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
      }
    });
    renderRef.current = render;

    // 3. Setup Boundaries (Walls)
    const wallOptions = {
      isStatic: true,
      render: { visible: false },
      restitution: 0.8, // Bounciness
      friction: 0.0
    };
    
    const thickness = 60;
    const walls = [
      Matter.Bodies.rectangle(width / 2, -thickness / 2, width + thickness * 2, thickness, wallOptions), // Top
      Matter.Bodies.rectangle(width / 2, height + thickness / 2, width + thickness * 2, thickness, wallOptions), // Bottom
      Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height + thickness * 2, wallOptions), // Left
      Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height + thickness * 2, wallOptions) // Right
    ];

    Matter.World.add(engine.world, walls);

    // 4. Create floating blocks
    const blockSize = 16;
    const blocks: Matter.Body[] = [];

    // The darkroom theme colors
    // Bloat Orange for floating blocks
    const secondaryColor = 'rgba(255, 185, 95, 0.2)'; // semi-transparent fill
    const secondaryBorder = '#ffb95f'; // solid border

    for (let i = 0; i < displayCount; i++) {
      const x = Math.random() * (width - blockSize * 2) + blockSize;
      const y = Math.random() * (height - blockSize * 2) + blockSize;
      
      const block = Matter.Bodies.rectangle(x, y, blockSize, blockSize, {
        restitution: 0.9,
        frictionAir: 0.02, // Slight drag
        friction: 0.0,
        density: 0.001,
        chamfer: { radius: 1 }, // Rigid, clinical 1px rounding
        render: {
          fillStyle: secondaryColor,
          strokeStyle: secondaryBorder,
          lineWidth: 1
        }
      });

      // Apply initial random velocity and angular velocity for organic movement
      const vx = (Math.random() - 0.5) * 4;
      const vy = (Math.random() - 0.5) * 4;
      Matter.Body.setVelocity(block, { x: vx, y: vy });
      Matter.Body.setAngularVelocity(block, (Math.random() - 0.5) * 0.1);

      blocks.push(block);
    }

    Matter.World.add(engine.world, blocks);

    // 5. Run engine & renderer
    Matter.Runner.run(Matter.Runner.create(), engine);
    Matter.Render.run(render);

    // Cleanup on unmount or re-render
    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      if (render.canvas && sceneRef.current) {
        sceneRef.current.removeChild(render.canvas);
      }
    };
  }, [displayCount]);

  // Handle window resize (basic)
  useEffect(() => {
    const handleResize = () => {
      if (renderRef.current && sceneRef.current) {
        renderRef.current.canvas.width = sceneRef.current.clientWidth * window.devicePixelRatio;
        renderRef.current.canvas.height = sceneRef.current.clientHeight * window.devicePixelRatio;
        renderRef.current.canvas.style.width = `${sceneRef.current.clientWidth}px`;
        renderRef.current.canvas.style.height = `${sceneRef.current.clientHeight}px`;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-surface-container" ref={sceneRef}>
      {/* Glowing Text Overlay */}
      {hiddenCount > 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4">
          <div className="bg-background border border-secondary/50 px-6 py-4 rounded-sm text-center glow-secondary opacity-95">
            <span className="font-data-mono tracking-wide text-secondary text-lg animate-pulse block mb-1">
              + {hiddenCount.toLocaleString()} encrypted bits
            </span>
            <span className="font-label-caps text-on-surface-variant uppercase tracking-widest text-xs">
              suspended in the void
            </span>
          </div>
        </div>
      )}
      
      {/* Fallback empty state */}
      {displayCount === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-data-mono tracking-wide text-outline opacity-80 bg-background px-3 py-1 rounded-sm border border-outline-variant">
            Awaiting Plaintext Input...
          </span>
        </div>
      )}
    </div>
  );
};
