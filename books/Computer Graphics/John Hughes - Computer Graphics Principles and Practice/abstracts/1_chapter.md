# Chapter 1: Introduction

---

## Main Idea

- This chapter introduces computer graphics as a multidisciplinary field combining physics, mathematics, art, and psychology to communicate visually through computer displays.
- It establishes the fundamental framework of the graphics pipeline, the physical properties of light, the physiological constraints of human visual perception, and the necessity of approximation to balance computational resources with visual fidelity.

---

## Keywords

**Computer Graphics:**

- The science and art of visual communication via a computer's display and interaction devices, often involving the creation and manipulation of geometric models.

**Graphics Pipeline:**

- An abstract series of stages (vertex processing, rasterization, fragment processing) that transforms geometric data into a pixel-based image on a screen.

**Rendering:**

- The computational process of generating an image from a model by simulating or approximating the behavior of light.

**Rasterization:**

- The conversion of continuous geometric primitives (like triangles) into discrete fragments or pixels for display.

**Texture Mapping:**

- The technique of wrapping a 2D image (texture) onto a 3D geometric surface to add detail without increasing geometric complexity.

**Lambertian Reflectance:**

- A model for diffuse reflection where light scatters equally in all directions, with intensity dependent on the angle of incidence.

**Specular Reflection:**

- Mirror-like reflection where light bounces off a surface at a definite angle, creating bright highlights.

_(Add only the essential terms.)_

---

## Formulas

**Photon Energy**

- **Formula:** $E = hc/\lambda$

- **Meaning:** Energy ($E$) equals Planck's constant times the speed of light divided by wavelength.

- **Use in graphics:** Calculates the energy of individual photons, relevant for spectral rendering and physically based simulations.

**Lambertian Constraint**

- **Formula:** $l \cdot n$

- **Meaning:** The dot product of the light direction vector and the surface normal.

- **Use in graphics:** Determines the intensity of diffuse reflection; surfaces only receive light if this value is positive.

**Halfway Vector (Blinn-Phong)**

- **Formula:** $h = \frac{e-l}{||e-l||}$

- **Meaning:** The normalized vector exactly halfway between the eye vector ($e$) and the light vector ($l$).

- **Use in graphics:** Used to calculate specular highlights; the highlight is brightest when $h$ aligns with the surface normal.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**The Wise Modeling Principle**

- In graphics, one must first understand the physical phenomenon and the goal, then choose an abstraction rich enough to capture the necessary details, and finally select a representation that fits within the available computational resources (memory, bandwidth, processor time).

**Graphics Pipeline Abstraction**

- Programmers use the pipeline model (Application -> Geometry Processing -> Rasterization -> Fragment Processing -> Display) to optimize rendering, allowing parallel processing of vertices and pixels to achieve real-time frame rates.
