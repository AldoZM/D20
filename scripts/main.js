// main.js

import * as THREE from 'https://threejs.org/build/three.module.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Carga del modelo GLB
const loader = new GLTFLoader();
loader.load('models/tu-modelo.glb', (gltf) => {
    scene.add(gltf.scene);
});

camera.position.z = 5;

// Animación
const animate = () => {
    requestAnimationFrame(animate);

    // Lógica de animación aquí

    renderer.render(scene, camera);
};

animate();
