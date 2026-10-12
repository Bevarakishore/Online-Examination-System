(() => {
    const THREE = window.THREE;
    if (!THREE) {
        console.error("Three.js did not load; the CSS visual fallback will remain visible.");
        return;
    }

    function createPlanetTexture() {
        const textureCanvas = document.createElement("canvas");
        textureCanvas.width = 1024;
        textureCanvas.height = 512;

        const context = textureCanvas.getContext("2d");
        if (!context) {
            throw new Error("Unable to create the login planet texture.");
        }

        const ocean = context.createLinearGradient(0, 0, 0, textureCanvas.height);
        ocean.addColorStop(0, "#3d83bc");
        ocean.addColorStop(0.48, "#14517f");
        ocean.addColorStop(1, "#092c58");
        context.fillStyle = ocean;
        context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

        let seed = 4187;
        const random = () => {
            seed = (seed * 16807) % 2147483647;
            return (seed - 1) / 2147483646;
        };
        [
            [190, 165, 110, 84],
            [330, 335, 82, 112],
            [510, 180, 155, 92],
            [690, 328, 110, 116],
            [850, 170, 120, 77],
        ].forEach(([centerX, centerY, width, height]) => {
            const gradient = context.createLinearGradient(
                centerX - width,
                centerY - height,
                centerX + width,
                centerY + height,
            );
            gradient.addColorStop(0, "#80ad81");
            gradient.addColorStop(0.55, "#548768");
            gradient.addColorStop(1, "#b3b37e");
            context.beginPath();
            for (let point = 0; point <= 48; point += 1) {
                const angle = (point / 48) * Math.PI * 2;
                const variation = 0.76 + random() * 0.38;
                const x = centerX + Math.cos(angle) * width * variation;
                const y = centerY + Math.sin(angle) * height * variation;
                if (point === 0) context.moveTo(x, y);
                else context.lineTo(x, y);
            }
            context.closePath();
            context.fillStyle = gradient;
            context.fill();
        });

        const cloudCanvas = document.createElement("canvas");
        cloudCanvas.width = textureCanvas.width;
        cloudCanvas.height = textureCanvas.height;
        const cloudContext = cloudCanvas.getContext("2d");
        if (!cloudContext) {
            throw new Error("Unable to create the login planet cloud texture.");
        }
        cloudContext.strokeStyle = "rgba(255, 255, 255, 0.62)";
        cloudContext.lineWidth = 10;
        cloudContext.lineCap = "round";
        for (let cloud = 0; cloud < 34; cloud += 1) {
            const startX = random() * textureCanvas.width;
            const startY = 28 + random() * (textureCanvas.height - 56);
            const length = 35 + random() * 160;
            const offsetY = -18 + random() * 36;
            cloudContext.beginPath();
            cloudContext.moveTo(startX, startY);
            cloudContext.bezierCurveTo(
                startX + length * 0.28,
                startY + offsetY,
                startX + length * 0.7,
                startY - offsetY * 0.6,
                startX + length,
                startY - offsetY * 0.35,
            );
            cloudContext.stroke();
        }

        const surface = new THREE.CanvasTexture(textureCanvas);
        surface.colorSpace = THREE.SRGBColorSpace;
        const clouds = new THREE.CanvasTexture(cloudCanvas);
        clouds.colorSpace = THREE.SRGBColorSpace;
        return { surface, clouds };
    }

    function createWelcomeBrandScene(canvas, observerTarget) {
        if (!canvas || !observerTarget) return;

        try {
            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
                powerPreference: "low-power",
            });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
            camera.position.z = 4.5;
            scene.add(new THREE.AmbientLight(0xdce3ff, 2.4));

            const keyLight = new THREE.PointLight(0x8c9aff, 28, 12);
            keyLight.position.set(-1.5, 2, 3);
            scene.add(keyLight);
            const rimLight = new THREE.PointLight(0xc16cff, 20, 12);
            rimLight.position.set(2, -1, 2);
            scene.add(rimLight);

            const shape = new THREE.Shape();
            const half = 0.62;
            const radius = 0.2;
            shape.moveTo(-half + radius, -half);
            shape.lineTo(half - radius, -half);
            shape.quadraticCurveTo(half, -half, half, -half + radius);
            shape.lineTo(half, half - radius);
            shape.quadraticCurveTo(half, half, half - radius, half);
            shape.lineTo(-half + radius, half);
            shape.quadraticCurveTo(-half, half, -half, half - radius);
            shape.lineTo(-half, -half + radius);
            shape.quadraticCurveTo(-half, -half, -half + radius, -half);

            const logo = new THREE.Group();
            scene.add(logo);

            const badge = new THREE.Mesh(
                new THREE.ExtrudeGeometry(shape, {
                    depth: 0.16,
                    bevelEnabled: true,
                    bevelSegments: 4,
                    steps: 1,
                    bevelSize: 0.045,
                    bevelThickness: 0.045,
                    curveSegments: 10,
                }),
                new THREE.MeshPhysicalMaterial({
                    color: 0x705ef0,
                    metalness: 0.22,
                    roughness: 0.26,
                    clearcoat: 0.85,
                    clearcoatRoughness: 0.2,
                }),
            );
            badge.position.x = -0.84;
            logo.add(badge);

            const iconCanvas = document.createElement("canvas");
            iconCanvas.width = 512;
            iconCanvas.height = 512;
            const iconContext = iconCanvas.getContext("2d");
            if (!iconContext) throw new Error("Unable to create the Testify logo texture.");
            const iconGradient = iconContext.createLinearGradient(40, 30, 470, 490);
            iconGradient.addColorStop(0, "#8993ff");
            iconGradient.addColorStop(0.52, "#7162ef");
            iconGradient.addColorStop(1, "#9b59ee");
            iconContext.fillStyle = iconGradient;
            iconContext.beginPath();
            iconContext.roundRect(14, 14, 484, 484, 92);
            iconContext.fill();
            iconContext.fillStyle = "#ffffff";
            iconContext.font = "800 340px Inter, Arial, sans-serif";
            iconContext.textAlign = "center";
            iconContext.textBaseline = "middle";
            iconContext.fillText("T", 256, 260);

            const iconTexture = new THREE.CanvasTexture(iconCanvas);
            iconTexture.colorSpace = THREE.SRGBColorSpace;
            const iconFace = new THREE.Mesh(
                new THREE.PlaneGeometry(1.12, 1.12),
                new THREE.MeshBasicMaterial({
                    map: iconTexture,
                    transparent: true,
                    toneMapped: false,
                }),
            );
            iconFace.position.set(-0.84, 0, 0.205);
            logo.add(iconFace);

            const wordmarkCanvas = document.createElement("canvas");
            wordmarkCanvas.width = 800;
            wordmarkCanvas.height = 220;
            const wordmarkContext = wordmarkCanvas.getContext("2d");
            if (!wordmarkContext) throw new Error("Unable to create the Testify wordmark texture.");
            wordmarkContext.font = "800 132px Inter, Arial, sans-serif";
            wordmarkContext.textAlign = "center";
            wordmarkContext.textBaseline = "middle";
            wordmarkContext.shadowColor = "rgba(85, 74, 203, 0.25)";
            wordmarkContext.shadowBlur = 18;
            wordmarkContext.fillStyle = "#554bd0";
            wordmarkContext.fillText("TESTIFY", 400, 112);

            const wordmarkTexture = new THREE.CanvasTexture(wordmarkCanvas);
            wordmarkTexture.colorSpace = THREE.SRGBColorSpace;
            const wordmark = new THREE.Mesh(
                new THREE.PlaneGeometry(1.72, 0.48),
                new THREE.MeshBasicMaterial({
                    map: wordmarkTexture,
                    transparent: true,
                    toneMapped: false,
                }),
            );
            wordmark.position.set(0.72, 0, 0.08);
            logo.add(wordmark);

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            let isVisible = false;
            let frameId = 0;
            let lastTime = 0;
            const pointerRotation = { x: 0, y: 0 };

            observerTarget.addEventListener("pointermove", (event) => {
                if (event.pointerType !== "mouse") return;
                const bounds = observerTarget.getBoundingClientRect();
                pointerRotation.x = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.18;
                pointerRotation.y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.24;
            });
            observerTarget.addEventListener("pointerleave", () => {
                pointerRotation.x = 0;
                pointerRotation.y = 0;
            });

            function resize() {
                const bounds = observerTarget.getBoundingClientRect();
                if (!bounds.width || !bounds.height) return;
                renderer.setSize(bounds.width, bounds.height, false);
                camera.aspect = bounds.width / bounds.height;
                camera.updateProjectionMatrix();
                renderer.render(scene, camera);
                observerTarget.classList.add("three-ready");
            }

            function animate(now) {
                frameId = 0;
                if (!isVisible || document.hidden || reduceMotion.matches) return;
                const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
                lastTime = now;
                const ease = Math.min(delta * 0.7, 1);
                logo.rotation.y += (pointerRotation.y + Math.sin(now * 0.00045) * 0.12 - logo.rotation.y) * ease;
                logo.rotation.x += (pointerRotation.x - logo.rotation.x) * ease;
                logo.position.y = Math.sin(now * 0.0012) * 0.045;
                renderer.render(scene, camera);
                frameId = window.requestAnimationFrame(animate);
            }

            function updateAnimation() {
                if (frameId) {
                    window.cancelAnimationFrame(frameId);
                    frameId = 0;
                }
                lastTime = 0;
                const canvasDisplayed = getComputedStyle(canvas).display !== "none";
                if (isVisible && canvasDisplayed && !document.hidden && !reduceMotion.matches) {
                    frameId = window.requestAnimationFrame(animate);
                } else if (isVisible && canvasDisplayed) {
                    renderer.render(scene, camera);
                }
            }

            new ResizeObserver(resize).observe(observerTarget);
            new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting;
                updateAnimation();
            }).observe(observerTarget);
            window.addEventListener("resize", resize);
            reduceMotion.addEventListener("change", updateAnimation);
            document.addEventListener("visibilitychange", updateAnimation);
            const appShell = document.getElementById("appShell");
            if (appShell) {
                new MutationObserver(resize).observe(appShell, {
                    attributes: true,
                    attributeFilter: ["class"],
                });
            }
            resize();
        } catch (error) {
            console.error("Unable to initialize the 3D Testify logo.", error);
        }
    }

    function createScene(canvas, observerTarget, sceneVisibilityRoot = null) {
        if (!canvas || !observerTarget) return;
        if (canvas.id === "welcomeThreeCanvas") {
            createWelcomeBrandScene(canvas, observerTarget);
            return;
        }

        try {
            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: true,
                powerPreference: "low-power",
            });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
            camera.position.z = 5;
            scene.add(new THREE.AmbientLight(0xc9d7ff, 2.2));

            const blueLight = new THREE.PointLight(0x6688ff, 35, 15);
            blueLight.position.set(-2, 2, 3);
            scene.add(blueLight);
            const purpleLight = new THREE.PointLight(0xb45dff, 27, 15);
            purpleLight.position.set(2, -1, 2);
            scene.add(purpleLight);

            const object = new THREE.Group();
            if (canvas.id === "appThreeCanvas") {
                object.scale.setScalar(0.8);
            }
            scene.add(object);

            const realisticPlanet = true;
            const planetTextures = realisticPlanet ? createPlanetTexture() : null;
            const sphere = new THREE.Mesh(
                realisticPlanet
                    ? new THREE.SphereGeometry(0.82, 96, 64)
                    : new THREE.IcosahedronGeometry(0.82, 4),
                new THREE.MeshPhysicalMaterial(realisticPlanet
                    ? {
                        map: planetTextures.surface,
                        metalness: 0.08,
                        roughness: 0.58,
                        clearcoat: 0.3,
                        clearcoatRoughness: 0.38,
                    }
                    : {
                        color: 0x7488ff,
                        metalness: 0.24,
                        roughness: 0.2,
                        clearcoat: 1,
                        clearcoatRoughness: 0.12,
                    }),
            );
            object.add(sphere);

            if (realisticPlanet) {
                object.add(new THREE.Mesh(
                    new THREE.SphereGeometry(0.88, 64, 48),
                    new THREE.ShaderMaterial({
                        uniforms: { glowColor: { value: new THREE.Color(0x76d9ff) } },
                        vertexShader: `
                            varying vec3 viewNormal;
                            varying vec3 viewDirection;
                            void main() {
                                vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
                                viewNormal = normalize(normalMatrix * normal);
                                viewDirection = normalize(-viewPosition.xyz);
                                gl_Position = projectionMatrix * viewPosition;
                            }
                        `,
                        fragmentShader: `
                            uniform vec3 glowColor;
                            varying vec3 viewNormal;
                            varying vec3 viewDirection;
                            void main() {
                                float rim = pow(1.0 - max(dot(normalize(viewNormal), normalize(viewDirection)), 0.0), 3.0);
                                gl_FragColor = vec4(glowColor, rim * 0.62);
                            }
                        `,
                        side: THREE.BackSide,
                        blending: THREE.AdditiveBlending,
                        transparent: true,
                        depthWrite: false,
                    }),
                ));

                const cloudLayer = new THREE.Mesh(
                    new THREE.SphereGeometry(0.834, 64, 48),
                    new THREE.MeshPhysicalMaterial({
                        map: planetTextures.clouds,
                        transparent: true,
                        opacity: 0.48,
                        roughness: 0.9,
                        depthWrite: false,
                    }),
                );
                cloudLayer.scale.set(1, 0.985, 1);
                object.add(cloudLayer);
                sphere.userData.cloudLayer = cloudLayer;
            }

            const rings = [
                {
                    geometry: new THREE.TorusGeometry(1.15, 0.018, 10, 120),
                    color: 0x80dfff,
                    rotation: [0.9, 0.25, -0.35],
                },
                {
                    geometry: new THREE.TorusGeometry(1.27, 0.012, 8, 120),
                    color: 0xc49aff,
                    rotation: [1.3, -0.7, 0.35],
                },
            ];
            rings.forEach(({ geometry, color, rotation }) => {
                const ring = new THREE.Mesh(
                    geometry,
                    new THREE.MeshStandardMaterial({
                        color,
                        emissive: color,
                        emissiveIntensity: 0.35,
                        metalness: 0.5,
                        roughness: 0.25,
                    }),
                );
                ring.rotation.set(...rotation);
                object.add(ring);
            });

            const satellite = new THREE.Mesh(
                new THREE.SphereGeometry(0.09, 20, 20),
                new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                    emissive: 0x9be7ff,
                    emissiveIntensity: 1.4,
                    roughness: 0.18,
                }),
            );
            object.add(satellite);

            const particleCount = 220;
            const particlePositions = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i += 1) {
                const radius = 1.45 + Math.random() * 1.2;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                particlePositions[i * 3 + 2] = radius * Math.cos(phi);
            }
            const particleGeometry = new THREE.BufferGeometry();
            particleGeometry.setAttribute(
                "position",
                new THREE.BufferAttribute(particlePositions, 3),
            );
            const particles = new THREE.Points(
                particleGeometry,
                new THREE.PointsMaterial({
                    color: 0xb8c2ff,
                    size: 0.025,
                    transparent: true,
                    opacity: 0.72,
                    sizeAttenuation: true,
                }),
            );
            scene.add(particles);

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            let isVisible = false;
            let frameId = 0;
            let lastTime = 0;
            const pointerRotation = { x: 0, y: 0 };

            observerTarget.addEventListener("pointermove", (event) => {
                if (event.pointerType !== "mouse") return;
                const bounds = observerTarget.getBoundingClientRect();
                pointerRotation.x = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.35;
                pointerRotation.y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.45;
            });
            observerTarget.addEventListener("pointerleave", () => {
                pointerRotation.x = 0;
                pointerRotation.y = 0;
            });

            function resize() {
                const bounds = observerTarget.getBoundingClientRect();
                if (!bounds.width || !bounds.height) return;
                renderer.setSize(bounds.width, bounds.height, false);
                camera.aspect = bounds.width / bounds.height;
                camera.updateProjectionMatrix();
                renderer.render(scene, camera);
                if (canvas.id === "welcomeThreeCanvas") {
                    observerTarget.classList.add("three-ready");
                }
            }

            function stopAnimation() {
                if (frameId) {
                    window.cancelAnimationFrame(frameId);
                    frameId = 0;
                }
                lastTime = 0;
                if (isVisible) renderer.render(scene, camera);
            }

            function animate(now) {
                frameId = 0;
                if (!isVisible || document.hidden || reduceMotion.matches) return;
                const delta = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
                lastTime = now;
                const rotationEase = Math.min(delta * 0.6, 1);
                object.rotation.y += (pointerRotation.y + now * 0.00006 - object.rotation.y) * rotationEase;
                object.rotation.x += (pointerRotation.x + Math.sin(now * 0.00035) * 0.08 - object.rotation.x) *
                    rotationEase;
                if (sphere.userData.cloudLayer) {
                    sphere.rotation.y += delta * 0.035;
                    sphere.userData.cloudLayer.rotation.y += delta * 0.045;
                }
                particles.rotation.y -= delta * 0.012;
                satellite.position.set(
                    Math.cos(now * 0.00025) * 1.08,
                    Math.sin(now * 0.00025) * 0.65,
                    0.28,
                );
                renderer.render(scene, camera);
                frameId = window.requestAnimationFrame(animate);
            }

            function updateAnimation() {
                if (frameId) {
                    window.cancelAnimationFrame(frameId);
                    frameId = 0;
                }
                lastTime = 0;
                const canvasDisplayed = getComputedStyle(canvas).display !== "none";
                if (isVisible && canvasDisplayed && !document.hidden && !reduceMotion.matches) {
                    frameId = window.requestAnimationFrame(animate);
                } else if (isVisible && canvasDisplayed) {
                    renderer.render(scene, camera);
                }
            }

            new ResizeObserver(resize).observe(observerTarget);
            new IntersectionObserver(([entry]) => {
                isVisible = entry.isIntersecting;
                updateAnimation();
            }).observe(observerTarget);
            window.addEventListener("resize", resize);
            reduceMotion.addEventListener("change", updateAnimation);
            document.addEventListener("visibilitychange", updateAnimation);
            const adminDashboard = document.getElementById("adminDashboard");
            const appShell = document.getElementById("appShell");
            const authScreen = document.getElementById("authScreen");
            const visibilityRoots = sceneVisibilityRoot
                ? Array.isArray(sceneVisibilityRoot) ? sceneVisibilityRoot : [sceneVisibilityRoot]
                : [observerTarget.closest("#adminDashboard")
                    ? adminDashboard
                    : observerTarget.closest("#appShell")
                      ? appShell
                      : authScreen];
            visibilityRoots.filter(Boolean).forEach((visibilityRoot) => {
                new MutationObserver(() => {
                    updateAnimation();
                    if (visibilityRoots.some((root) => root && !root.classList.contains("hidden"))) resize();
                }).observe(visibilityRoot, { attributes: true, attributeFilter: ["class"] });
            });
            resize();
        } catch (error) {
            console.error("Unable to initialize a Three.js visual.", error);
        }
    }

    createScene(
        document.getElementById("landingThreeCanvas"),
        document.querySelector(".landing-visual"),
    );
    createScene(
        document.getElementById("appThreeCanvas"),
        document.querySelector(".app-scene-backdrop"),
        [
            document.getElementById("appShell"),
            document.getElementById("adminDashboard"),
        ],
    );
})();
