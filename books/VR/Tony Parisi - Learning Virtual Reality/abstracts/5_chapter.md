# Chapter 5: WebVR: Browser-Based Virtual Reality in HTML5

---

## Main Idea

- This chapter introduces WebVR, a set of browser APIs that enable virtual reality experiences directly within HTML5 web pages without requiring native app installation.
- It details the collaborative history between Mozilla and Google to standardize these APIs .

---

## Key Principles & Guidelines

**The WebVR API Architecture**

- **Definition:** A set of browser extensions that allow JavaScript to interact with VR hardware. It focuses on three core capabilities: device discovery (`getVRDevices`), VR-specific fullscreen modes (handling distortion), and real-time head tracking.
- **Design Implication:** Unlike standard web apps, WebVR apps must query for `HMDVRDevice` (display) and `PositionSensorVRDevice` (tracking) objects separately to handle future hardware modularity.

**The Render Loop with `requestAnimationFrame`**

- **Definition:** The mechanism that drives continuous animation and rendering. The browser calls a specific function every time it is ready to repaint the screen (typically 60-90 times per second).
- **Design Implication:** In the loop, the application must perform three distinct steps every frame: render the scene using stereo effects, update the camera controls based on the latest sensor data, and request the next animation frame.

**Three.js Integration**

- **Definition:** The dominant open-source JavaScript library for WebGL, which abstracts complex raw WebGL code into manageable objects like Scenes, Meshes, and Materials.
- **Design Implication:** WebVR development in Three.js relies on extensions like `VREffect` (which handles stereo rendering and barrel distortion) and `VRControls` (which maps head tracking data to the camera).

---

## Practical Use

**Development Pipeline**

- **Initialization:** The script first initializes the Three.js renderer, then applies the `VREffect` to handle the specific optical requirements of the HMD.
- **Fullscreen Management:** VR requires a specific "VR fullscreen" mode to bypass the OS compositor and interact directly with the headset driver; this is triggered via user interaction (like a button click).
- **Scene Construction:** Objects are built using geometry (shape) and materials (surface look) and added to a scene hierarchy, which is viewed through a camera object.

**Tooling Ecosystem**

- **Native Web Libraries:** Libraries like Three.js, Babylon.js (by Microsoft), and declarative frameworks like GLAM or SceneVR offer lightweight, code-first approaches.
- **Cloud Editors:** Tools like PlayCanvas and Goo Create provide browser-based visual editors similar to native game engines.
- **Engine Exporters:** Unity3D and Unreal Engine can export to WebGL using Emscripten/asm.js, offering high performance but potentially large download sizes.
