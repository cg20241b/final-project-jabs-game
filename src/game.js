// Boilerplate

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the ground plane
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Create the platforms
const platformGeometry = new THREE.BoxGeometry(2, 0.5, 2);
const platformMaterial = new THREE.MeshBasicMaterial({ color: 0x404040 });

const platform1 = new THREE.Mesh(platformGeometry, platformMaterial);
platform1.position.set(-2, 0.25, -2);
scene.add(platform1);

const platform2 = new THREE.Mesh(platformGeometry, platformMaterial);
platform2.position.set(2, 0.25, 2);
scene.add(platform2);

const platform3 = new THREE.Mesh(platformGeometry, platformMaterial);
platform3.position.set(-2, 0.25, 2);
scene.add(platform3);

const platform4 = new THREE.Mesh(platformGeometry, platformMaterial);
platform4.position.set(2, 0.25, -2);
scene.add(platform4);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 3);
scene.add(directionalLight);

// Set up camera controls
const controls = new OrbitControls(camera, renderer.domElement);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();