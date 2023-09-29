"use client";
import React from "react";
import MissionHeader from "./missionHeader";
import MissionBigTitle from "./missionBigTitle";
import MissionParagraph from "./missionParagraph";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function Mission() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 5.4,
        theta: 0.4,
        dark: 1,
        diffuse: 3,
        opacity: 0.4,
        mapSamples: 16000,
        mapBrightness: 5,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [43.650182, -79.378144], size: 0.1 },
          { location: [35.673541, 139.698401], size: 0.06 },
          { location: [28.613534, 77.2282], size: 0.1 },
          { location: [1.289931, 103.857082], size: 0.05 },
          { location: [25.232026, 55.270747], size: 0.04 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    }
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div className="h-max">
        <MissionHeader />
        <div className="flex">
          <MissionBigTitle />
          <canvas
            className=""
            ref={canvasRef}
            style={{
              width: 600,
              height: 600,
              maxWidth: "100%",
              aspectRatio: 1,
            }}
          />
        </div>
        <MissionParagraph />
      </div>
    </div>
  );
}

export default Mission;
