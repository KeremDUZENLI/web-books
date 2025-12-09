# Chapter 13: More Ray Tracing

---

## Main Idea

- This chapter extends the basic ray tracing algorithm to handle advanced optical effects like **transparency**, **refraction**, and **glossy reflections**.

- It introduces **Distribution Ray Tracing**, a stochastic approach that uses multiple random samples to simulate soft shadows, depth of field, and motion blur.

<img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQNlDfHWdOjcoM7jnEizJ3PROXQye3TPMfngjnWpSKfKVzUSD7rN0G7Ai_Zq0jHsPQRCXWIAayQXIH6ClR_GjY5P1fYpX7CN7iQ5bvkiOA5nwTfGKE">

---

## Keywords

**Refraction**

- The bending of light as it passes from one medium to another (e.g., air to glass), governed by **Snell's Law**.

**Constructive Solid Geometry (CSG)**

- A modeling technique that combines simple shapes (primitives) using Boolean operations like **union, intersection, and difference** to create complex forms.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQQBya3Uupgd1RanxetzcPWEgx8mFwZsT86nrYfYzoPM0eDYqIN8Hs2x_T_YV7EFTjZS8_WgR5q6b0XLHpyKqHAIeF0HgfWgA3z-OdjND-YWMw7jsY">

**Distribution Ray Tracing**

- A technique that replaces single rays with multiple random rays to average out "sharp" artifacts, enabling **anti-aliasing** and fuzzy effects.

**Depth of Field**

- The visual effect where objects at a specific focal distance appear sharp while others appear blurry, simulated by sampling a finite **lens aperture**.

<img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRLtx4eIGgFk2cHZfx0aETti3HYPATgnENGQAVpXX8Ef_qpD27sM9hRdX9rDH-Cg1VzA3RsVuD_u_x3_1ZOZGMONps_IA5fjLR_2AW25z6YSypejG8">

---

## Formulas

**Snell's Law**

- **Formula:** $n \sin \theta = n_t \sin \phi$

- **Meaning:** Relates the incident angle $\theta$ and refracted angle $\phi$ to the refractive indices $n$ and $n_t$.

- **Use in graphics:** Essential for rendering **transparent materials** like water and glass.

**Schlick Approximation**

- **Formula:** $R(\theta) = R_0 + (1 - R_0)(1 - \cos \theta)^5$

- **Meaning:** An efficient approximation of the Fresnel equations for reflectance.

- **Use in graphics:** Calculates how reflective a transparent surface is at glancing angles without complex physics.

---

## Practical Use

**Soft Shadows**

- Instead of point lights (sharp shadows), area lights are simulated by sending shadow rays to **random points** on the light source.

**Instancing**

- A method to render many copies of an object by storing the geometry once and applying different **transformation matrices** to rays during intersection.

**Motion Blur**

- Simulated by assigning a random **time** value to each ray and moving objects to their appropriate position for that time.

**Glossy Reflection**

- Simulates rough surfaces (like brushed metal) by perturbing reflection rays randomly within a defined cone rather than reflecting perfectly.
