# Chapter 33: Shaders

---

## Main Idea

- This chapter introduces the concept of programmable shading using the Graphics Library Shader Language (GLSL) within the context of the modern graphics pipeline.
- It contrasts the historical fixed-function pipeline with modern programmable stages (vertex and fragment shaders) and demonstrates practical implementations of Gouraud, Phong, Environment Mapping, and Toon shading algorithms.

---

## Keywords

**Shader:**

- A small program written in a specialized language (like GLSL) that executes on the GPU to control specific stages of the graphics pipeline, such as vertex transformation or pixel coloring.

**Vertex Shader:**

- A program that processes individual vertices, responsible for transforming 3D coordinates into camera space and computing per-vertex attributes like normals and texture coordinates.

**Fragment Shader (Pixel Shader):**

- A program that processes rasterized fragments (potential pixels), responsible for computing the final color of a pixel based on interpolated data from the vertex shader.

**Gouraud Shading:**

- A shading technique where lighting is calculated at the vertices and the resulting colors are linearly interpolated across the polygon faces.

**Phong Shading:**

- A shading technique where surface normals are interpolated across polygon faces, and the lighting model is evaluated individually for each fragment (pixel).

**Environment Mapping:**

- A technique for simulating highly reflective surfaces by mapping a texture (often a cube map) to the object based on the reflection vector calculated from the view direction and surface normal.

**Toon Shading (Cel Shading):**

- A non-photorealistic rendering technique that quantizes lighting intensities into discrete bands to mimic the aesthetic of hand-drawn cartoons.

_(Add only the essential terms.)_

---

## Formulas

**Lambertian Reflection (GLSL style)**

- **Formula:** $C = k_d C_d L (l \cdot n)$

- **Meaning:** The diffuse color is proportional to the dot product of the light vector $l$ and the surface normal $n$.

- **Use in graphics:** Basic diffuse lighting calculation in shaders.

**Phong Lighting Model**

- **Formula:** $color = k_d O_d I_a + k_d O_d I_d (n \cdot l) + k_s O_s (r \cdot v)^{n_s} I_d$

- **Meaning:** Computes pixel color as a sum of ambient, diffuse, and specular components.

- **Use in graphics:** Simulating shiny surfaces with highlights.

**Reflection Vector**

- **Formula:** $r = 2(n \cdot l)n - l$

- **Meaning:** Calculates the direction of a light ray perfectly reflected off a surface with normal $n$.

- **Use in graphics:** Environment mapping and specular highlights.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Custom Material Effects**

- Writing shaders allows developers to create specific visual materials, such as metallic surfaces, skin, or cartoon-style objects, that go beyond standard lighting models.

**GPU Offloading**

- Shaders move computationally intensive tasks (like lighting and transformation) from the CPU to the GPU, utilizing parallel processing for real-time rendering.
