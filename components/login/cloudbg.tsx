"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CloudScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ================= RENDERER ================= */
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x87ceeb, 1); // bright blue sky
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    /* ================= CAMERA ================= */
    const camera = new THREE.PerspectiveCamera(
      30,
      container.clientWidth / container.clientHeight,
      1,
      5000
    );
    camera.position.z = 4000;

    /* ================= FOG ================= */
    const fog = new THREE.Fog(0x87ceeb, 500, 4500);
    scene.fog = fog;

    /* ================= TEXTURE ================= */
    const texture = new THREE.TextureLoader().load(
      "https://mrdoob.com/lab/javascript/webgl/clouds/cloud10.png"
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    /* ================= MATERIAL ================= */
    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: texture },
        fogColor: { value: fog.color },
        fogNear: { value: fog.near },
        fogFar: { value: fog.far },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;

        varying vec2 vUv;

        void main() {
          vec4 tex = texture2D(map, vUv);
          if (tex.a < 0.01) discard;

          float depth = gl_FragCoord.z / gl_FragCoord.w;
          float fogFactor = smoothstep(fogNear, fogFar, depth);

          vec4 finalColor = mix(tex, vec4(fogColor, tex.a), fogFactor);
          gl_FragColor = finalColor;
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    /* ================= GEOMETRY ================= */
    const basePlane = new THREE.PlaneGeometry(64, 64);
    const geometry = new THREE.BufferGeometry();

    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    let indexOffset = 0;

    for (let i = 0; i < 7000; i++) {
      const matrix = new THREE.Matrix4();
      const pos = new THREE.Vector3(
        Math.random() * 1000 - 500,
        -Math.random() * 300,
        i * 1.2
      );
      const rot = new THREE.Euler(0, 0, Math.random() * Math.PI);
      const scale = Math.random() * 1.4 + 0.6;

      matrix.compose(
        pos,
        new THREE.Quaternion().setFromEuler(rot),
        new THREE.Vector3(scale, scale, 1)
      );

      const pAttr = basePlane.attributes.position;
      const uvAttr = basePlane.attributes.uv;
      const idxAttr = basePlane.index!;

      for (let j = 0; j < pAttr.count; j++) {
        const v = new THREE.Vector3(
          pAttr.getX(j),
          pAttr.getY(j),
          pAttr.getZ(j)
        ).applyMatrix4(matrix);

        positions.push(v.x, v.y, v.z);
        uvs.push(uvAttr.getX(j), uvAttr.getY(j));
      }

      for (let j = 0; j < idxAttr.count; j++) {
        indices.push(idxAttr.getX(j) + indexOffset);
      }

      indexOffset += pAttr.count;
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "uv",
      new THREE.Float32BufferAttribute(uvs, 2)
    );
    geometry.setIndex(indices);
    geometry.computeBoundingSphere();

    /* ================= MESHES ================= */
    const meshA = new THREE.Mesh(geometry, material);
    scene.add(meshA);

    const meshB = new THREE.Mesh(geometry, material);
    meshB.position.z = -8000;
    scene.add(meshB);

    /* ================= ANIMATION ================= */
    const start = performance.now();
    let raf = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      const z =
        ((performance.now() - start) * 0.02) % 8000;
      camera.position.z = 4000 - z;

      renderer.render(scene, camera);
    };

    animate();

    /* ================= RESIZE ================= */
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    /* ================= CLEANUP ================= */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      basePlane.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();

      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "120vh",
        position: "relative",
        overflow: "hidden",
      }}
    />
  );
}
