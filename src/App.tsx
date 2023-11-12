import { useEffect } from "react"
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/Addons.js"

function App() {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three-js-canvas') as HTMLCanvasElement })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
    const torus = new THREE.Mesh(geometry, material)
    scene.add(torus)
    const light = new THREE.PointLight(0xffffff, 3)
    light.position.set(5, 5, 5)
    scene.add(light)
    const helperLight = new THREE.PointLight(0xffffff, 2)
    helperLight.position.set(5, 5, 5)
    scene.add(helperLight)
    renderer.render(scene, camera)
    const controls = new OrbitControls(camera, renderer.domElement)

    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add(gridHelper)
    const animate = () => {
      requestAnimationFrame(animate)
      torus.rotation.x += 0.01
      torus.rotation.y += 0.005
      torus.rotation.z += 0.01
      controls.update();
      renderer.render(scene, camera)
    }
    animate()
  }
    , [])



  return (
    <div>
      <canvas id="three-js-canvas">

      </canvas>
    </div>
  )
}

export default App
