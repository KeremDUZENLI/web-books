# Chapter 6: Introduction to Fixed-Function 3D Graphics and Hierarchical Modeling

---

## Main Idea

- This chapter introduces the fundamental concepts of the fixed-function 3D graphics pipeline using WPF 3D as a testing ground.
- It covers the rendering process from mesh specification and lighting models (ambient, directional, point) to material properties (diffuse, specular) and shading techniques (flat vs. Gouraud), culminating in the organization of complex scenes using hierarchical modeling and scene graphs.

---

## Keywords

**Fixed-Function Pipeline:**

- A classic graphics rendering sequence with hard-coded stages for lighting and shading, used in older GPUs and APIs like WPF 3D.

**Scene Graph:**

- A hierarchical data structure (often a tree or DAG) that organizes the logical and spatial relationships between objects in a 3D scene.

**Gouraud Shading:**

- An interpolation technique where lighting is calculated at vertices and color values are interpolated across the face of the polygon to simulate smooth curved surfaces.

**Texture Mapping:**

- The process of wrapping a 2D image (texture) onto a 3D surface, using coordinate mapping (u, v) to add detail without increasing geometric complexity.

**Phong Reflectance Model:**

- A lighting model that simulates surface appearance by summing three components: ambient (base light), diffuse (matte reflection), and specular (shiny highlights).

**Hierarchical Modeling:**

- The practice of building complex objects from simpler subcomponents (e.g., a robot from limbs) using parent-child transformations to propagate movement.

_(Add only the essential terms.)_

---

## Formulas

**Specular Reflection (Phong)**

- **Formula:** $I_{spec} = I_{dir} k_s C_s (\cos \delta)^s$

- **Meaning:** Specular intensity depends on the angle $\delta$ between the view vector and the reflection vector, raised to the power of the specular exponent $s$.

- **Use in graphics:** Simulates glossy highlights; a higher $s$ creates smaller, sharper highlights (like mirror/plastic), while a lower $s$ creates broader ones (like an apple).

**WPF Lighting Equation (Red Component)**

- **Formula:** $I_R = (I_{a,R} k_{a,R} C_{d,R}) + \sum (I_{dir,R} k_{d,R} C_{d,R} \cos \theta) + \sum (I_{dir,R} k_{s,R} C_{s,R} (\cos \delta)^s)$

- **Meaning:** The final red intensity is the sum of the ambient term, the diffuse contributions from all lights, and the specular contributions from all lights.

- **Use in graphics:** Determines the final color value of a pixel in the fixed-function pipeline.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**The Hierarchical Modeling Principle**

- Construct models hierarchically by grouping subcomponents (e.g., foot + shin = lower leg). This corresponds to a functional hierarchy, allowing animation of logical parts (like bending a knee) by transforming a single parent node rather than editing individual meshes.

**Vertex Sharing Rule**

- To achieve smooth (Gouraud) shading, vertices must be shared between adjacent triangles so their normals are averaged. To achieve a hard edge (faceted look), vertices must be duplicated so they can have distinct normals for each face.
