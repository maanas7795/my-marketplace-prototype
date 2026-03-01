"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import indiaMapData from "./india.json";

export default function MapWithFreeformQuad({
  width = 1000,
  height = 600,
}) {
  const svgRef = useRef(null);

  const [points, setPoints] = useState([
    { x: 300, y: 150 },
    { x: 700, y: 150 },
    { x: 700, y: 450 },
    { x: 300, y: 450 },
  ]);

  const [dragging, setDragging] = useState(null);

  const projection = d3
    .geoMercator()
    .center([82.8, 22.5])
    .scale(900)
    .translate([400, 250]);

  const path = d3.geoPath().projection(projection);

  const handleMouseMove = (e) => {
    if (dragging === null) return;

    const svg = svgRef.current.getBoundingClientRect();
    const x = e.clientX - svg.left;
    const y = e.clientY - svg.top;

    const newPoints = [...points];
    newPoints[dragging] = { x, y };
    setPoints(newPoints);
  };

  useEffect(() => {
    window.addEventListener("mouseup", () => setDragging(null));
    return () => window.removeEventListener("mouseup", () => setDragging(null));
  }, []);

  return (
    <svg
      ref={svgRef}
      width={800}
      height={500}
      viewBox="0 0 800 500"
      className="border rounded bg-white shadow"
      onMouseMove={handleMouseMove}
    >
      <g>
        {indiaMapData.features.map((state, i) => (
          <path
            key={i}
            d={path(state)}
            fill="#e5e5e5"
            stroke="#888"
            strokeWidth={0.5}
          />
        ))}
      </g>

      <polygon
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="rgba(30,144,255,0.25)"
        stroke="dodgerblue"
        strokeWidth="3"
      />

      {points.map((p, idx) => (
        <circle
          key={idx}
          cx={p.x}
          cy={p.y}
          r="10"
          fill="white"
          stroke="dodgerblue"
          strokeWidth="3"
          onMouseDown={() => setDragging(idx)}
        />
      ))}
    </svg>
  );
}
