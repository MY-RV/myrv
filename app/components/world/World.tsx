"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const vertexShader = `
  varying vec3 v_position;
  varying vec2 vUv;

  uniform float time;
  uniform float scroll;
  uniform float u_factor;

  mat3 rotation3dX(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(
      1.0, 0.0, 0.0,
      0.0, c, s,
      0.0, -s, c
    );
  }

  mat3 rotation3dY(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(
      c,   0.0, -s,
      0.0, 1.0, 0.0,
      s,   0.0,  c
    );
  }

  void main () {
    vUv = uv;
    vec3 new_position = position;

    float wave = 0.0;
    wave += 0.10 * sin(time + position.x) + 0.05 * sin(1.0 * time + position.x) + 0.05 * sin(0.25 * time + position.x);
    wave += 0.15 * sin(time + position.y) + 0.05 * sin(2.0 * time + position.y) + 0.05 * sin(0.25 * time + position.y);
    wave += 0.20 * sin(time + position.z) + 0.05 * sin(0.5 * time + position.z) + 0.05 * sin(0.25 * time + position.z);

    new_position *= mix(u_factor, 1.0, wave);

    new_position *= rotation3dX(scroll * 0.001);
    new_position *= rotation3dY(scroll * 0.002);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( new_position, 1.0 );
    gl_PointSize = 1.5;
    v_position = new_position;
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float u_opacity;
  varying vec3 v_position;
  varying vec2 vUv;

  vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
  {
      return a + b*cos( 6.28318*(c*t+d) );
  }

  void main () {
    vec3 color = vec3(0.051, 0.831, 0.427);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const Donut: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const aspect = width / height;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current || undefined,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const camera = new THREE.PerspectiveCamera(50, aspect, 0.001, 100);
    camera.position.set(0, 0, 20);
    camera.updateProjectionMatrix();

    const geometry = new THREE.IcosahedronGeometry(4, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scroll: { value: 3 },
        u_factor: { value: 0.5 },
        u_opacity: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const donut = new THREE.Points(geometry, material);
    donut.scale.set(4, 4, 4);
    scene.add(donut);
    donut.position.y = -8;

    const render = () => {
      material.uniforms.time.value = clock.getElapsedTime();
      donut.rotation.y += 0;
      donut.rotation.x += 0;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();

    
    container.addEventListener("mouseenter", () => {
      gsap.to(donut.scale, {
        x: 4,
        y: 4,
        z: 4,
        duration: 0.2,
        ease: "power2.inOut",
      });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(donut.scale, {
        x: 4,
        y: 4,
        z: 4,
        duration: 0.2,
        ease: "power2.inOut",
      });
    });

    const onWindowResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "364px",
        background: "transparent",
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
