# Chapter 18: Using Graphics Hardware

---

## Main Idea

- This chapter bridges theory and practice, explaining how **graphics hardware (GPUs)** processes 3D data through a pipeline of fixed and programmable stages.

- It teaches how to efficiently transfer geometry to the card and write **shader programs** (vertex and fragment) to control lighting and transformation directly on the hardware.

---

## Keywords

**Graphics Pipeline**

- A sequence of stages that transforms geometric primitives into screen pixels; typically divided into **geometry processing** and **pixel processing**.

**Vertex Buffer Object (VBO)**

- A mechanism to store vertex data (positions, normals, colors) directly in the **high-performance memory** of the graphics card, avoiding slow data transfer from the CPU during rendering.

**Vertex Shader**

- A small program running on the GPU that processes individual vertices, handling tasks like **transformation** (model-to-screen) and per-vertex lighting.

**Fragment Shader**

- A program running on the GPU that computes the color of individual **pixels** (fragments); it allows for advanced effects like per-pixel lighting and bump mapping.

**GPGPU (General Purpose GPU)**

- The practice of using the GPU's massive parallel processing power for non-graphics tasks, such as fluid dynamics or ray tracing, by treating them as texture or buffer operations.

---

## Formulas

**Vertex Transformation (GLSL)**

- **Formula:** `gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex`

- **Meaning:** Transforms the input vertex position into **clip coordinates** for the rasterizer.

- **Use in graphics:** The primary responsibility of any **vertex shader**.

**Varying Interpolation**

- **Concept:** $v_{frag} = \text{interp}(v_{vertex})$

- **Meaning:** Variables declared as "varying" are written by the vertex shader and automatically **interpolated** across the primitive before reaching the fragment shader.

- **Use in graphics:** Passes data like normals and texture coordinates from vertices to pixels.

---

## Practical Use

**Indexed Rendering**

- Instead of sending duplicate vertices for every triangle, developers use **index arrays** to reuse vertices; this reduces memory bandwidth and allows the GPU to cache processed vertices.

**Minimizing State Changes**

- Switching shaders or textures is expensive; rendering should be sorted to group objects with the same state together to keep the pipeline moving efficiently.

**Per-Pixel Lighting**

- Moving lighting calculations from the vertex shader to the **fragment shader** eliminates visual artifacts (like bad highlights on large triangles) by calculating light at every single pixel.
