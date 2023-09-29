"use client"

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.8,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [43.650182, -79.378144], size: 0.1 },
          { location: [35.673541, 139.698401], size: 0.1 },
          { location: [28.613534, 77.228200], size: 0.2 },
          { location: [1.289931, 103.857082], size: 0.3 },
          { location: [25.232026, 55.270747], size: 0.1 }
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        }
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <>
      <div
        className="bg-gray-900">
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </>
  );
};