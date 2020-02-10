

let scene = new THREE.Scene();
let camera, renderer, controls;
let canvas, _ctx, temp = [], water;
let amt = 1, count, material;
let _arr = [],
    _vert,
    _shader,
    _height = 1;
let mainGroup = new THREE.Group();
let x, x2;
for (i = 0; i < 100; i++) {
    _arr.push((Math.round(Math.random() * (255) / 7) * 7));
}
let width = 640, height = 640;
init();
animate();

function init() {

    renderer = new THREE.WebGLRenderer({ antialias: false, devicePixelRatio: 1 });
    renderer.setSize(width, height);
    camera = new THREE.OrthographicCamera(-width / 2, height / 2, width / 2, -height / 2, -1000, 10000)
    camera.position.set(238, 244, 208);
    camera.rotation.x = (-0.86);
    camera.rotation.y = (0.63);
    camera.rotation.z = (0.60);
    let _obj = new THREE.Quaternion(-0.294, 0.39, 0.13, 0.86);
    camera.quaternion.copy(_obj);
    camera.zoom = 0.4;
    camera.updateProjectionMatrix();
    scene.add(camera);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controlsSet();
    document.body.appendChild(renderer.domElement);
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    canvas = document.createElement('canvas');
    canvas.width = 152;
    canvas.height = 152;
    _ctx = canvas.getContext('2d');
    _ctx.fillRect(0, 0, 152, 152);
    _ctx.translate(1, 1);
    var _x = 0;
    var _y = 0;
    var _data = [];
    _arr.forEach(function (_val, _ind) {
        _ctx.fillStyle = 'rgba(' + _val + ',' + _val + ',' + _val + ',1)';
        _ctx.fillRect(_x, _y, 15, 15);
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 15; j++) {
                _data[(_x + i) + (_y + j) * 150] = _val;
            }
        }
        _x += 15;
        if (_x === 150) {
            _x = 0;
            _y += 15;
        }
    });
    terrain(0, 0);
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    render();
    update();
}

function update() {
    if (controls) {
        controls.update();
    }
}
function controlsSet() {
    controls.enabled = true
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE };
    controls.touches = { ONE: THREE.TOUCH.ROTATE }
    controls.enableKeys = false;
    controls.enableZoom = false;

    controls.maxPolarAngle = Math.PI / 2;
}

function terrain() {
    // setup the mat
    console.log(_height, '_height terrain')
    var url = './lib/shader.vert';
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            _vert = this.response;
            var url1 = './lib/shader.frag';
            var xhttp1 = new XMLHttpRequest();
            xhttp1.open('GET', url1);
            xhttp1.onreadystatechange = function () {
                if (this.readyState === 4) {
                    _shader = this.response;
                    updateTerrain();
                }
            }
            xhttp1.send();
        }
    }
    xhttp.send();

    scene.background = new THREE.Color(0xA8C6C6);
}

function showme(val) {
    amt = val / 10;
    _arr = [];
    _height = document.getElementById('layer').value / 10;
    for (i = 0; i < 100; i++) {
        console.log(Math.random(), 'document.getElementById().value / 10')
        _arr.push((Math.round(Math.random() * ((255 / (_height))) / 7) * 7));
    }

    updateTerrain(amt, val);
}

function updateTerrain(amt, val) {
    for (var i = mainGroup.children.length - 1; i >= 0; i--) {
        mainGroup.remove(mainGroup.children[i]);
    }

    // bumpTexture = null;
    var _x = 0;
    var _y = 0;
    var _data = [];
    _arr.forEach(function (_val, _ind) {
        _ctx.fillStyle = 'rgba(' + _val + ',' + _val + ',' + _val + ',1)';
        _ctx.fillRect(_x, _y, 15, 15);
        for (i = 0; i < 15; i++) {
            for (j = 0; j < 15; j++) {
                _data[(_x + i) + (_y + j) * 150] = _val;
            }
        }
        _x += 15;
        if (_x === 150) {
            _x = 0;
            _y += 15;
        }
    });

    // for ()

    console.log(_arr)
    // for (let i = 0; i < _arr.length; i++) {

    // }

    var bumpTexture = new THREE.TextureLoader().load(canvas.toDataURL('image/png'));
    bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;

    var _7 = new THREE.TextureLoader().load('./images/07.png');
    _7.wrapS = _7.wrapT = THREE.RepeatWrapping;

    var _6 = new THREE.TextureLoader().load('./images/06.png');
    _6.wrapS = _6.wrapT = THREE.RepeatWrapping;

    var _5 = new THREE.TextureLoader().load('./images/05.png');
    _5.wrapS = _5.wrapT = THREE.RepeatWrapping;

    var _4 = new THREE.TextureLoader().load('./images/04.png');
    _4.wrapS = _4.wrapT = THREE.RepeatWrapping;

    var _3 = new THREE.TextureLoader().load('./images/03.png');
    _3.wrapS = _3.wrapT = THREE.RepeatWrapping;

    var _2 = new THREE.TextureLoader().load('./images/02.png');
    _2.wrapS = _2.wrapT = THREE.RepeatWrapping;

    var _1 = new THREE.TextureLoader().load('./images/01.png');
    _1.wrapS = _1.wrapT = THREE.RepeatWrapping;

    customUniforms = {
        bumpTexture: { type: "t", value: bumpTexture },
        bumpScale: { type: "f", value: 300 },
        _7: { type: "t", value: _7 },
        _6: { type: "t", value: _6 },
        _5: { type: "t", value: _5 },
        _4: { type: "t", value: _4 },
        _3: { type: "t", value: _3 },
        _2: { type: "t", value: _2 },
        _1: { type: "t", value: _1 },
    };

    material = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: _vert,
        fragmentShader: _shader,
    });
    material.side = THREE.DoubleSide;


    if (mainGroup[0] === undefined) {
        var planeGeo = new THREE.PlaneGeometry(1000, 1000, 100, 100);
        var plane = new THREE.Mesh(planeGeo, material);

        var waterGeo = new THREE.BoxGeometry(1000, 100, 1000);
        var waterTex = new THREE.TextureLoader().load('./images/10.png');
        waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
        waterTex.repeat.set(5, 5);
        var waterMat = new THREE.MeshBasicMaterial({ map: waterTex, transparent: true, opacity: 0.5 });
        water = new THREE.Mesh(waterGeo, waterMat);
        mainGroup.add(plane, water);
        water.position.y = val === undefined ? -25 : val * 5 - 25;
        water.scale.y = amt === undefined ? 1 : amt;
    }

    // var axesHelper = new THREE.AxesHelper(500);
    // scene.add(axesHelper);
    scene.add(mainGroup);
}


