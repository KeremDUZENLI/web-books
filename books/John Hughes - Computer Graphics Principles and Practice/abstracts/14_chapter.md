# Chapter 14: Standard Approximations and Representations

---

## Main Idea

- This chapter surveys the fundamental approximations and data structures used in computer graphics to model light, matter, geometry, and cameras, balancing physical realism with computational efficiency.
- It covers representations ranging from fixed-point arithmetic and scene graphs to volumetric models like voxels and particle systems.

---

## Keywords

**Fixed-Point Representation:**

- A real number approximation using a fixed number of bits for the integer and fractional parts, offering uniform precision and exact arithmetic.

**Scene Graph:**

- A hierarchical data structure (often a directed acyclic graph) used to manage the logical and spatial relationships between objects in a scene.

**Level of Detail (LOD):**

- A technique of using simpler geometric models for objects that are small or distant to improve rendering performance.

**Billboard:**

- A flat, textured polygon that always faces the viewer, used to approximate complex 3D objects like trees or clouds at a distance.

**Voxel:**

- A volumetric pixel representing a value on a regular grid in 3D space, used for modeling fluids, clouds, or solid objects.

**BSDF (Bidirectional Scattering Distribution Function):**

- A mathematical function describing how light is scattered by a surface, generalizing reflection and transmission.

**Lambertian Reflectance:**

- A model for diffuse surfaces where light is reflected equally in all directions, appearing equally bright from any viewing angle.

_(Add only the essential terms.)_

---

## Formulas

**Fog Blending**

- **Formula:** $c' = c + (f - c) e^{-d\kappa}$

- **Meaning:** Calculates the final color $c'$ by blending the object color $c$ with the fog color $f$ based on distance $d$ and density $\kappa$.

- **Use in graphics:** Simulating atmospheric perspective and depth cues.

**Lambertian Scattering**

- **Formula:** $f_{Lambert} = \frac{k_L}{\pi}$

- **Meaning:** The scattering function for a perfectly diffuse surface is constant, proportional to reflectivity $k_L$.

- **Use in graphics:** Calculating shading for matte surfaces like chalk or dry earth.

**Quadratic Attenuation (Point Light)**

- **Formula:** $L = \frac{\Phi}{4\pi r^2}$

- **Meaning:** Light intensity $L$ falls off with the square of the distance $r$ from a point source with power $\Phi$.

- **Use in graphics:** Modeling physically accurate light falloff.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Efficiency vs. Accuracy**

- Graphics systems often use approximations like **skyboxes** (infinite distance environment maps) or **impostors** (dynamic 2D images of 3D objects) to render complex backgrounds without the cost of full 3D geometry.

**Matte Shading**

- The **Lambertian** model is the standard "default" shader for non-shiny objects. By calculating the dot product between the light direction and surface normal, it provides a simple but convincing approximation of diffuse reflection.
