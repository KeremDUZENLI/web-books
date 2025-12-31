# Chapter 6: Build It Yourself: Stereoscopic 3D Rendering with Android

---

## Main Idea

- This chapter abandons high-level game engines to teach the fundamentals of creating a native Android VR application from scratch using the Android SDK and OpenGL ES 2.0.
- It details the construction of a custom VR rendering pipeline, including the implementation of side-by-side stereoscopic views, sensor fusion for head tracking, and the mathematical application of barrel distortion to correct for lens optics.

---

## Key Principles & Guidelines

**Barrel Distortion Correction**

- **Definition:** A software rendering technique used to counteract the physical "pincushion" distortion introduced by the magnifying lenses in VR viewers.
- **Design Implication:** Without this correction, straight lines appear curved and the image looks warped. The software must pre-distort the image in the opposite direction (barrel shape) so that when viewed through the lenses, it appears correct to the user.


**The Distortion Mesh**

- **Definition:** A 2D rendering technique where the scene is projected onto a tessellated grid (mesh) rather than a simple flat plane. The vertices of this grid are mathematically displaced in a vertex shader to create the required barrel distortion.
- **Design Implication:** Using a mesh is more efficient for mobile GPUs than processing every pixel in a fragment shader. The mesh density (e.g., 40x40 cells) balances performance with visual accuracy.


**Sensor Fusion**

- **Definition:** The process of combining data from multiple physical sensors—specifically the gyroscope, accelerometer, and magnetometer—to determine the device's orientation.
- **Design Implication:** Raw sensor data is often noisy or subject to drift. Fusion algorithms (like a Kalman filter or complimentary filter) smooth this data to provide stable, low-latency head tracking essential for preventing motion sickness.

---

## Formulas

**Radial Distortion Model**

- **Formula:** $$R_d = R_u \times (1 + K_0 r^2 + K_1 r^4 + K_2 r^6)$$
- **Context:** Used in the vertex shader to calculate the displaced position of vertices in the distortion mesh. $R_d$ is the distorted radius, $R_u$ is the undistorted radius, and $K_n$ are the distortion coefficients specific to the lenses (e.g., Google Cardboard lenses).

---

## Practical Use

**Native Android VR Architecture**

- **Activity & SurfaceView:** The application uses a standard Android `Activity` hosting a `GLSurfaceView` to manage the OpenGL context.
- **Renderer:** A custom renderer draws the scene twice per frame (once for each eye) into off-screen framebuffers (textures).
- **Compositing:** The final step draws the distortion mesh to the screen, sampling from the previously rendered eye textures to produce the final side-by-side output.


**DIY Hardware Constraints**

- **OpenDive / Cardboard:** Early DIY viewers established the baseline constraints for mobile VR: a ~45mm focal length and the necessity of split-screen rendering. The software must adapt to these physical properties (screen size, lens distance) to create a convincing scale.
