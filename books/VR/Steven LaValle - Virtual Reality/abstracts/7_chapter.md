# Chapter 7: Visual Rendering

---

## Main Idea

- This chapter explains how the geometric models of the virtual world are converted into colored pixels on a display, considering the physics of light propagation, material properties, and the limitations of hardware.

- It contrasts standard computer graphics techniques (like rasterization) with VR-specific requirements, emphasizing the critical need for low latency, high frame rates, and optical distortion correction to prevent user sickness.

---

## Key Principles & Guidelines

**Ray Tracing (Image-Order Rendering)**

- **Definition:** A rendering method that iterates over every pixel on the screen and traces a viewing ray into the virtual world to find the closest intersection with an object.

- **Design Implication:** While physically accurate and capable of complex effects (shadows, reflections), it is typically too computationally expensive for real-time VR, which requires 90+ FPS.

**Rasterization (Object-Order Rendering)**

- **Definition:** The standard method used by GPUs where the system iterates over every geometric primitive (triangle) and determines which pixels it covers.

- **Design Implication:** This is highly optimized for hardware but requires specific techniques (like the Z-buffer) to handle depth sorting correctly; it is the primary method used for VR applications.

**The Depth Buffer (Z-Buffer)**

- **Definition:** A memory buffer that stores the distance from the viewpoint to the nearest rendered object for every pixel.

- **Design Implication:** This solves the visibility problem (determining which object is in front) efficiently, allowing triangles to be rendered in any order without sorting.

**Shading Models**

- **Lambertian Shading:** Simulates rough, matte surfaces where light reflects equally in all directions; brightness depends only on the angle between the light and the surface normal.

- **Blinn-Phong Shading:** A heuristic that adds a "specular" component to simulate shiny surfaces (highlights) based on the angle between the surface normal and the halfway vector between the light and the viewer.

**Aliasing and Mipmaps**

- **Aliasing:** Visual artifacts like "jaggies" (staircase edges) or Moire patterns caused by the discretization of the image into pixels.

- **Design Implication:** VR is highly susceptible to aliasing due to head motion ("escalator effect"); techniques like Multisample Anti-Aliasing (MSAA) and Mipmaps (storing textures at multiple resolutions) are essential to reduce shimmering artifacts.

**Optical Distortion Correction**

- **Definition:** The process of intentionally warping the rendered image (usually with a barrel distortion) to counteract the pincushion distortion introduced by the headset's wide-angle lenses.

- **Design Implication:** Without this software correction, straight lines in the virtual world would appear curved, and the world would seem to warp dynamically as the user moves their head, causing nausea.

**Latency Reduction & Time Warp**

- **Definition:** Techniques to minimize "motion-to-photons" latency. **Post-rendering image warp** (or Time Warp) shifts the final rendered image slightly to account for the head motion that occurred *during* the rendering process.

- **Design Implication:** This is a critical safety net in VR; if the frame rate drops, re-projecting the old frame allows the tracking to remain responsive, preventing the "judder" that leads to sickness.

---

## Formulas

**Lambertian Shading**

- **Formula:** $$L = dI \max(0, n \cdot l)$$

- **Context:** Calculates pixel intensity ($L$) based on the surface material ($d$), light intensity ($I$), surface normal ($n$), and light direction ($l$).

**Blinn-Phong Shading**

- **Formula:** $$L = dI \max(0, n \cdot l) + sI \max(0, n \cdot b)^x$$

- **Context:** Adds a specular term using the bisector vector ($b$) and a shininess exponent ($x$).

**Barycentric Coordinates**

- **Formula:** $$p = \alpha_1 p_1 + \alpha_2 p_2 + \alpha_3 p_3$$

- **Context:** Expresses any point $p$ inside a triangle as a weighted average of its vertices. Used for interpolation of colors, depths, and texture coordinates across a triangle surface.

**Distortion Approximation**

- **Formula:** $$r_d = r_u + c_1 r_u^3 + c_2 r_u^5$$

- **Context:** Approximates the radial distortion of a lens, relating the distorted radius ($r_d$) to the undistorted radius ($r_u$) using coefficients ($c_1, c_2$).

---

## Practical Use

**Skyboxes and Photospheres**

- A simple rendering technique where a 360-degree panoramic image is mapped onto a large sphere or cube surrounding the user. This is computationally cheap and effective for backgrounds or basic immersive viewing (e.g., Google Street View VR).

**VSYNC (Vertical Synchronization)**

- A display setting that forces the rendering loop to wait for the display's refresh cycle. While it prevents "tearing" (where half of two different frames are shown at once), it introduces latency, forcing VR developers to weigh visual integrity against responsiveness.
