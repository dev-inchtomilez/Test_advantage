/**
 * ============================================
 * PROFESSIONAL BLUE EARTH GLOBE WITH ORBITING ICONS
 * ============================================
 * Monochromatic blue Earth globe with continents and smoothly orbiting business icons
 */

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Users, 
  BarChart3, 
  Briefcase,
  Cpu,
  Globe2
} from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
  size: number;
  brightness: number;
  lat: number;
  lon: number;
  isLand: boolean;
}

interface OrbitingIcon {
  Icon: any;
  label: string;
  orbitRadius: number;
  orbitSpeed: number;
  angleOffset: number;
}

interface ParticleGlobeProps {
  width?: number;
  height?: number;
  particleCount?: number;
  rotationSpeed?: number;
  radius?: number;
}

// Detailed continent mapping for realistic Earth
const isLandCoordinate = (lat: number, lon: number): boolean => {
  let normLon = ((lon + 180) % 360) - 180;
  
  // Antarctica
  if (lat < -60) return true;
  
  // North America (detailed)
  if (lat > 15 && lat < 72) {
    if ((normLon > -170 && normLon < -50)) {
      // Great Lakes cutout
      if (lat > 41 && lat < 49 && normLon > -93 && normLon < -76) return Math.random() > 0.4;
      // Hudson Bay cutout
      if (lat > 51 && lat < 65 && normLon > -95 && normLon < -77) return Math.random() > 0.5;
      return true;
    }
    // Alaska extension
    if (lat > 55 && normLon > -170 && normLon < -130) return true;
  }
  
  // Central America land bridge
  if (lat > 7 && lat < 22 && normLon > -92 && normLon < -77) return true;
  
  // Caribbean islands
  if (lat > 10 && lat < 27 && normLon > -85 && normLon < -60) {
    return Math.random() > 0.7;
  }
  
  // South America
  if (lat > -56 && lat < 13) {
    if (normLon > -82 && normLon < -34) return true;
  }
  
  // Europe (detailed)
  if (lat > 35 && lat < 71) {
    if (normLon > -10 && normLon < 40) {
      // Mediterranean cuts
      if (lat < 42 && normLon > 10 && normLon < 20) return Math.random() > 0.6;
      // Baltic Sea
      if (lat > 53 && lat < 60 && normLon > 10 && normLon < 26) return Math.random() > 0.6;
      return true;
    }
  }
  
  // Africa (detailed)
  if (lat > -36 && lat < 38) {
    if (normLon > -18 && normLon < 52) {
      // Red Sea cut
      if (lat > 12 && lat < 30 && normLon > 32 && normLon < 43) return Math.random() > 0.5;
      return true;
    }
  }
  
  // Middle East
  if (lat > 12 && lat < 42 && normLon > 34 && normLon < 63) return true;
  
  // Asia (main - detailed)
  if (lat > 0 && lat < 75) {
    if (normLon > 40 && normLon < 180) {
      // Bay of Bengal
      if (lat > 5 && lat < 22 && normLon > 80 && normLon < 95) return Math.random() > 0.5;
      // Sea of Japan
      if (lat > 35 && lat < 52 && normLon > 127 && normLon < 142) return Math.random() > 0.6;
      return true;
    }
  }
  
  // Southeast Asia islands (Indonesia, Philippines)
  if (lat > -11 && lat < 20 && normLon > 95 && normLon < 140) {
    return Math.random() > 0.35;
  }
  
  // Japan
  if (lat > 30 && lat < 46 && normLon > 128 && normLon < 146) return true;
  
  // Australia
  if (lat > -44 && lat < -10 && normLon > 113 && normLon < 154) return true;
  
  // New Zealand
  if (lat > -47 && lat < -34 && normLon > 165 && normLon < 179) return true;
  
  // Greenland
  if (lat > 60 && lat < 84 && normLon > -73 && normLon < -11) return true;
  
  // Iceland
  if (lat > 63 && lat < 67 && normLon > -25 && normLon < -13) return true;
  
  // UK and Ireland
  if (lat > 49 && lat < 61 && normLon > -11 && normLon < 2) return true;
  
  // Scandinavia
  if (lat > 55 && lat < 71 && normLon > 4 && normLon < 31) return true;
  
  // Madagascar
  if (lat > -26 && lat < -12 && normLon > 43 && normLon < 51) return true;
  
  return false;
};

export function ParticleGlobe({
  width = 500,
  height = 500,
  particleCount = 3000,
  rotationSpeed = 0.0006,
  radius = 180,
}: ParticleGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const angleRef = useRef({ x: 0.3, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
  const targetAngleRef = useRef({ x: 0.3, y: 0 });
  const [orbitTime, setOrbitTime] = useState(0);

  // Professional orbiting business icons with varied speeds
  const orbitingIcons: OrbitingIcon[] = [
    { Icon: TrendingUp, label: 'Growth Strategy', orbitRadius: 290, orbitSpeed: 1, angleOffset: 0 },
    { Icon: Target, label: 'Goal Alignment', orbitRadius: 280, orbitSpeed: 0.9, angleOffset: Math.PI / 4 },
    { Icon: Lightbulb, label: 'Innovation', orbitRadius: 295, orbitSpeed: 1.1, angleOffset: Math.PI / 2 },
    { Icon: Users, label: 'Team Synergy', orbitRadius: 285, orbitSpeed: 0.95, angleOffset: (3 * Math.PI) / 4 },
    { Icon: BarChart3, label: 'Data Analytics', orbitRadius: 290, orbitSpeed: 1.05, angleOffset: Math.PI },
    { Icon: Briefcase, label: 'Business Excellence', orbitRadius: 280, orbitSpeed: 0.92, angleOffset: (5 * Math.PI) / 4 },
    { Icon: Cpu, label: 'Technology', orbitRadius: 295, orbitSpeed: 1.08, angleOffset: (3 * Math.PI) / 2 },
    { Icon: Globe2, label: 'Global Reach', orbitRadius: 285, orbitSpeed: 0.97, angleOffset: (7 * Math.PI) / 4 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    if (!ctx) return;

    // High-DPI canvas setup
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Initialize particles using Fibonacci sphere algorithm
    const particles: Particle[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const x = radius * Math.sin(inclination) * Math.cos(azimuth);
      const y = radius * Math.sin(inclination) * Math.sin(azimuth);
      const z = radius * Math.cos(inclination);

      const lat = (Math.PI / 2 - inclination) * (180 / Math.PI);
      const lon = ((azimuth % (2 * Math.PI)) * (180 / Math.PI)) - 180;
      
      const isLand = isLandCoordinate(lat, lon);

      particles.push({
        x, y, z,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: isLand ? Math.random() * 1.4 + 1.2 : Math.random() * 0.7 + 0.5,
        brightness: isLand ? Math.random() * 0.25 + 0.75 : Math.random() * 0.25 + 0.5,
        lat, lon, isLand,
      });
    }

    particlesRef.current = particles;

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetAngleRef.current.x = 0.3 + ((e.clientY - rect.top) / height - 0.5) * 0.4;
      targetAngleRef.current.y = ((e.clientX - rect.left) / width - 0.5) * 0.5;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      targetAngleRef.current.x = 0.3;
      targetAngleRef.current.y = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      setOrbitTime(prev => prev + 0.008);

      // Smooth rotation
      if (mouseRef.current.isHovering) {
        angleRef.current.x += (targetAngleRef.current.x - angleRef.current.x) * 0.06;
        angleRef.current.y += (targetAngleRef.current.y - angleRef.current.y) * 0.06;
      } else {
        angleRef.current.y += rotationSpeed * 4;
      }

      const cosX = Math.cos(angleRef.current.x);
      const sinX = Math.sin(angleRef.current.x);
      const cosY = Math.cos(angleRef.current.y);
      const sinY = Math.sin(angleRef.current.y);

      // Project all particles
      const projected = particlesRef.current.map((p) => {
        const x1 = p.originalX * cosY - p.originalZ * sinY;
        const z1 = p.originalZ * cosY + p.originalX * sinY;
        const y2 = p.originalY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.originalY * sinX;

        const scale = 300 / (300 + z2);
        const x2d = x1 * scale + width / 2;
        const y2d = y2 * scale + height / 2;

        return { ...p, x: x1, y: y2, z: z2, x2d, y2d, scale };
      });

      projected.sort((a, b) => a.z - b.z);

      // Draw subtle latitude/longitude grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 0.8;

      // Equator and tropics
      [-23.5, 0, 23.5].forEach(lat => {
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 3) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = (lon * Math.PI) / 180;
          const x = radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = radius * Math.cos(latRad) * Math.sin(lonRad);
          const z = radius * Math.sin(latRad);

          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;

          if (z2 > -radius * 0.3) {
            const scale = 300 / (300 + z2);
            const x2d = x1 * scale + width / 2;
            const y2d = y2 * scale + height / 2;
            if (first) {
              ctx.moveTo(x2d, y2d);
              first = false;
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }
        ctx.stroke();
      });

      // Prime meridian and date lines
      [0, 90, 180, -90].forEach(lon => {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          const latRad = (lat * Math.PI) / 180;
          const lonRad = (lon * Math.PI) / 180;
          const x = radius * Math.cos(latRad) * Math.cos(lonRad);
          const y = radius * Math.cos(latRad) * Math.sin(lonRad);
          const z = radius * Math.sin(latRad);

          const x1 = x * cosY - z * sinY;
          const z1 = z * cosY + x * sinY;
          const y2 = y * cosX - z1 * sinX;
          const z2 = z1 * cosX + y * sinX;

          if (z2 > -radius * 0.3) {
            const scale = 300 / (300 + z2);
            const x2d = x1 * scale + width / 2;
            const y2d = y2 * scale + height / 2;
            if (first) {
              ctx.moveTo(x2d, y2d);
              first = false;
            } else {
              ctx.lineTo(x2d, y2d);
            }
          }
        }
        ctx.stroke();
      });

      // Draw network connections between nearby land particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (!p1.isLand || p1.z < 10) continue;

        const depth1 = (p1.z + radius) / (radius * 2);
        if (depth1 < 0.55) continue;

        for (let j = i + 1; j < Math.min(i + 50, projected.length); j++) {
          const p2 = projected[j];
          if (!p2.isLand || p2.z < 10) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 28) {
            const depth2 = (p2.z + radius) / (radius * 2);
            const lineOp = (1 - dist / 28) * Math.min(depth1, depth2) * 0.35;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineOp})`;
            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            ctx.stroke();
          }
        }
      }

      // Draw particles with professional blue palette
      projected.forEach((p) => {
        const depthOp = (p.z + radius) / (radius * 2);
        const opacity = depthOp * p.brightness;
        const size = p.size * p.scale;

        if (opacity > 0.15) {
          if (p.isLand) {
            // Land - Darker/Richer Blue but crisp
            const grad = ctx.createRadialGradient(p.x2d, p.y2d, 0, p.x2d, p.y2d, size * 2.5);
            grad.addColorStop(0, `rgba(37, 99, 235, ${opacity * 0.9})`);
            grad.addColorStop(0.6, `rgba(29, 78, 216, ${opacity * 0.6})`);
            grad.addColorStop(1, 'rgba(30, 64, 175, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x2d, p.y2d, size * 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = `rgba(96, 165, 250, ${opacity * 0.95})`;
            ctx.beginPath();
            ctx.arc(p.x2d, p.y2d, size * 1.2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Ocean - Lighter/Softer Blue but crisp
            const grad = ctx.createRadialGradient(p.x2d, p.y2d, 0, p.x2d, p.y2d, size * 2);
            grad.addColorStop(0, `rgba(147, 197, 253, ${opacity * 0.7})`);
            grad.addColorStop(0.8, `rgba(125, 179, 237, ${opacity * 0.4})`);
            grad.addColorStop(1, 'rgba(96, 165, 250, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x2d, p.y2d, size * 2, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = `rgba(186, 230, 253, ${opacity * 0.8})`;
            ctx.beginPath();
            ctx.arc(p.x2d, p.y2d, size * 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [width, height, particleCount, rotationSpeed, radius]);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ width, height }}
    >
      {/* Continuously Orbiting Business Icons */}
      {orbitingIcons.map((icon, i) => {
        const angle = orbitTime * icon.orbitSpeed + icon.angleOffset;
        const x = Math.cos(angle) * icon.orbitRadius;
        const y = Math.sin(angle) * icon.orbitRadius * 0.45;
        const depth = Math.sin(angle);
        const scale = 0.5 + depth * 0.25; // slightly smaller icons
        const opacity = 0.6 + depth * 0.4;

        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              x: x - 16,
              y: y - 16,
              scale,
              opacity,
              zIndex: depth > 0 ? 20 : 5,
            }}
          >
            <div className="relative">
              <icon.Icon 
                className="w-8 h-8" 
                style={{ 
                  color: depth > 0 ? '#2563eb' : '#60a5fa',
                  filter: depth > 0 ? `drop-shadow(0 0 ${4 + depth * 2}px rgba(37, 99, 235, 0.3))` : 'none',
                  strokeWidth: 2,
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Earth Globe Canvas */}
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing max-w-full"
        style={{ background: 'transparent' }}
      />
    </motion.div>
  );
}