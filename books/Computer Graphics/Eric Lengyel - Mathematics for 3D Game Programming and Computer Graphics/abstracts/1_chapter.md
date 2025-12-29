# Chapter 1: The Rendering Pipeline

---

## Main Idea

This chapter provides a preliminary review of the rendering pipeline, detailing the functions performed by modern 3D graphics hardware to transform geometric data into 2D images. It explains the asynchronous communication between the CPU and GPU, the sequence of coordinate space transformations, and the rasterization operations that convert primitives into visible pixels.



---

## Keywords

**Graphics Processing Unit (GPU):**
- A dedicated processor that executes rendering instructions independently of the CPU, handling vertex transformation and rasterization.

**Graphics Primitive:**
- A fundamental geometric shape (point, line, or polygon) defined by a set of vertices.


**Rasterization:**
- The process of filling the horizontal spans of pixels belonging to a graphics primitive to generate fragments.

**Fragment:**
- A set of data generated for a pixel during rasterization, including position, depth, and interpolated color/texture coordinates.

**Double Buffering:**
- The use of two image buffers (front and back) where the scene is rendered to the non-visible back buffer and then swapped to the front to prevent screen tearing.

**Depth Buffer (Z-Buffer):**
- A memory block storing the depth value of every pixel to perform hidden surface elimination.

**Stencil Buffer:**
- A buffer containing integer masks for each pixel, used to enable or disable drawing on a per-pixel basis.

**Coordinate Spaces:**
- The sequence of coordinate systems (Object, World, Camera, Clip, Window) that vertices pass through during the rendering process.


---

## Formulas

**Model-View Transformation**
- **Formula:** $M_{modelview} = M_{view} \cdot M_{model}$
- **Meaning:** Concatenation of matrices transforming vertices from object space to world space, then to camera space.
- **Use in graphics:** Positions and orients the model relative to the camera (eye).

**Perspective Projection**
- **Formula:** $P_{proj}$ (Conceptual transformation to Homogeneous Clip Space)
- **Meaning:** Applies perspective so geometry shrinks as distance from the camera increases.
- **Use in graphics:** Creates the 3D depth effect before clipping occurs.

---

## Practical Use

**Hidden Surface Elimination**
- Using the **Depth Test** to discard fragments that are obscured by closer objects, ensuring the correct visual occlusion without manual sorting.

**Real-Time Shadows**
- Utilizing the **Stencil Buffer** to create masks that prevent light from being drawn in shadowed regions (shadow volumes).

**Artifact Prevention**
- Implementing **Double Buffering** and synchronizing the buffer swap with the display refresh rate to eliminate visual tearing.
