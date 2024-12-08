const loadCharacter = async (scene) => {
	const objLoader = new THREE.OBJLoader();
	const mtlLoader = new THREE.MTLLoader();
  
	// Set asset paths
	objLoader.setPath('./objects/character/');
	mtlLoader.setPath('./objects/character/');
  
	// Load objects
	await mtlLoader.load('character.mtl', (materials) => {
	  materials.preload();
	  objLoader.setMaterials(materials);
	  objLoader.load('character.obj', (object) => {
		// Place character at the starting position
		let pos;
		  pos = getActualPosition({
			x: Math.ceil(data.floorplan[0].length / 2),
			y: 0,
			z: Math.floor(data.floorplan.length / 2)
		  });
  
		object.position.copy(pos);
		object.rotation.set(0, Math.PI / 2, Math.PI / 2);
		object.scale.set(0.2, 0.2, 0.2);
  
		scene.add(object);
		character = object;
	  });
	});
  };