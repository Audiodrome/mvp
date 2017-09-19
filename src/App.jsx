import React from 'react';
import * as THREE from 'three';

class App extends React.Component {
  constructor() {
    super();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, 640/480, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( 640, 480 );
    // document.body.appendChild( this.renderer.domElement );

    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    this.material = new THREE.MeshBasicMaterial( { color: 'skyblue' } );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;

    // this.animate = function () {
    //   requestAnimationFrame( this.animate );

    //   this.cube.rotation.x += 0.01;
    //   this.cube.rotation.y += 0.01;

    //   this.renderer.render(this.scene, this.camera);
    // };
    
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    // this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // this.renderer = new THREE.WebGLRenderer();
    // this.renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( this.renderer.domElement );

    // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // this.cube = new THREE.Mesh( this.geometry, this.material );
    // this.scene.add( this.cube );
    this.container = document.getElementById( 'container' );
    this.container.appendChild( this.renderer.domElement );
    this.animate();
  }

  animate() {
    requestAnimationFrame( this.animate );
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div id="container"></div>
    )
  };
}

export default App;