"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function addTube(
  group: THREE.Group,
  curve: THREE.Curve<THREE.Vector3>,
  material: THREE.Material,
  radius = 0.012,
) {
  const geometry = new THREE.TubeGeometry(curve, 96, radius, 8, true);
  const mesh = new THREE.Mesh(geometry, material);
  group.add(mesh);
  return mesh;
}

function makeCurve(points: Array<[number, number, number?]>, closed = false) {
  return new THREE.CatmullRomCurve3(
    points.map(([x, y, z = 0]) => new THREE.Vector3(x, y, z)),
    closed,
    "catmullrom",
    0.42,
  );
}

function mirror(points: Array<[number, number, number?]>) {
  return points.map(([x, y, z = 0]) => [-x, y, z] as [number, number, number]);
}

export function BrainHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const host = container;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const brain = new THREE.Group();
    brain.rotation.set(-0.08, -0.28, 0.03);
    scene.add(brain);

    const lineMaterial = new THREE.MeshBasicMaterial({
      color: 0x17bf63,
      transparent: true,
      opacity: 0.78,
    });

    const paleMaterial = new THREE.MeshBasicMaterial({
      color: 0x84e3b1,
      transparent: true,
      opacity: 0.38,
    });

    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });

    const leftOutline = [
      [-0.12, 1.42, 0.08],
      [-0.58, 1.62, 0.02],
      [-1.18, 1.44, -0.06],
      [-1.56, 1.02, 0.08],
      [-1.7, 0.45, -0.05],
      [-1.52, 0.02, 0.04],
      [-1.68, -0.46, -0.08],
      [-1.44, -1.02, 0.04],
      [-0.9, -1.34, -0.06],
      [-0.38, -1.18, 0.08],
      [-0.16, -0.62, -0.02],
      [-0.2, 0.08, 0.06],
      [-0.16, 0.76, -0.04],
    ] as Array<[number, number, number]>;
    const rightOutline = mirror(leftOutline);

    addTube(brain, makeCurve(leftOutline, true), lineMaterial, 0.014);
    addTube(brain, makeCurve(rightOutline, true), lineMaterial, 0.014);

    const gyriMaterial = new THREE.MeshBasicMaterial({
      color: 0x0f9f58,
      transparent: true,
      opacity: 0.52,
    });

    const centerFissure = makeCurve([
      [0, 1.33, 0.22],
      [-0.08, 0.92, 0.12],
      [0.05, 0.42, 0.2],
      [-0.06, -0.05, 0.12],
      [0.07, -0.56, 0.2],
      [-0.03, -1.08, 0.12],
    ]);
    addTube(brain, centerFissure, lineMaterial, 0.014);

    const leftGyri = [
      [
        [-0.24, 1.05, 0.2],
        [-0.62, 1.22, 0.08],
        [-1.08, 1.12, 0.02],
        [-1.34, 0.83, 0.1],
      ],
      [
        [-0.18, 0.66, 0.1],
        [-0.58, 0.78, -0.04],
        [-1.12, 0.66, 0.12],
        [-1.42, 0.34, -0.04],
      ],
      [
        [-0.26, 0.24, 0.16],
        [-0.7, 0.36, 0.02],
        [-1.18, 0.18, 0.12],
        [-1.42, -0.12, -0.06],
      ],
      [
        [-0.22, -0.22, 0.08],
        [-0.66, -0.12, -0.08],
        [-1.08, -0.32, 0.1],
        [-1.28, -0.68, -0.02],
      ],
      [
        [-0.34, -0.7, 0.16],
        [-0.72, -0.58, 0],
        [-1.0, -0.78, 0.1],
        [-1.1, -1.04, -0.04],
      ],
      [
        [-0.55, 1.42, -0.08],
        [-0.48, 1.02, 0.1],
        [-0.72, 0.72, -0.02],
        [-0.62, 0.38, 0.08],
      ],
      [
        [-1.18, 1.22, 0.1],
        [-1.04, 0.86, -0.02],
        [-1.24, 0.54, 0.1],
        [-1.1, 0.18, -0.04],
      ],
      [
        [-0.68, -1.16, 0.04],
        [-0.58, -0.88, -0.08],
        [-0.82, -0.58, 0.1],
        [-0.76, -0.26, -0.02],
      ],
    ] as Array<Array<[number, number, number]>>;

    [...leftGyri, ...leftGyri.map(mirror)].forEach((points, index) => {
      addTube(brain, makeCurve(points), index % 3 === 0 ? paleMaterial : gyriMaterial, 0.008);
    });

    const nodeGeometry = new THREE.SphereGeometry(0.045, 16, 16);
    const nodePositions: THREE.Vector3[] = [];

    [makeCurve(leftOutline, true), makeCurve(rightOutline, true), centerFissure].forEach(
      (curve, curveIndex) => {
        for (let i = 0; i < 8; i += 1) {
          nodePositions.push(curve.getPoint(((i * 13 + curveIndex * 7) % 95) / 95));
        }
      },
    );

    nodePositions.forEach((position) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      brain.add(node);
    });

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x18bf62,
        transparent: true,
        opacity: 0.85,
      }),
    );
    core.position.set(0, 0.02, 0.18);
    brain.add(core);

    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);

    function resize() {
      const width = host.clientWidth;
      const height = host.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    function onPointerMove(event: PointerEvent) {
      const rect = host.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = -(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    }

    host.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", resize);
    resize();

    let frame = 0;
    let animationId = 0;

    function animate() {
      frame += 0.01;
      mouse.lerp(target, 0.055);
      brain.rotation.y = -0.28 + mouse.x * 0.28 + Math.sin(frame) * 0.025;
      brain.rotation.x = -0.08 - mouse.y * 0.16 + Math.cos(frame * 0.7) * 0.02;
      brain.rotation.z = 0.03 + mouse.x * 0.035;
      core.scale.setScalar(1 + Math.sin(frame * 2.6) * 0.08);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      nodeGeometry.dispose();
      lineMaterial.dispose();
      paleMaterial.dispose();
      gyriMaterial.dispose();
      nodeMaterial.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="brain-hero"
      aria-label="Cérebro 3D em linhas representando agentes de IA conectados"
    />
  );
}
