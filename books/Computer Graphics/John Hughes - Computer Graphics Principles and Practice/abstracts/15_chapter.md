# Chapter 15: Ray Casting and Rasterization

---

## Main Idea

- This chapter details the mathematical and structural implementation of two primary light transport sampling strategies: ray casting and rasterization.
- It explores the conversion of 3D geometry to 2D image space, efficient visibility determination using depth buffers, and the optimization of shading pipelines for hardware acceleration.

---

## Keywords

**Ray Casting:**

- A rendering technique where rays are projected from the camera through pixel centers to calculate intersections with scene geometry.

**Rasterization:**

- A rendering technique that projects geometric primitives onto the image plane to determine which set of pixels they cover.

**Depth Buffer (Z-Buffer):**

- A data structure storing the depth of the closest visible surface at every pixel, used to resolve occlusion during rasterization.

**Barycentric Coordinates:**

- A coordinate system used to describe the location of a point inside a triangle as a weighted sum of its vertices, essential for attribute interpolation.

**Perspective-Correct Interpolation:**

- A method of interpolating vertex attributes in screen space that accounts for the non-linear depth distortion caused by perspective projection.

**Shadow Map:**

- A depth buffer rendered from the perspective of a light source, used to determine visibility and cast shadows during the main camera pass.

_(Add only the essential terms.)_

---

## Formulas

**Barycentric Weight (2D)**

- **Formula:** $w_A(Q) = \frac{\text{dist}(Q, \text{line}_{BC})}{\text{dist}(A, \text{line}_{BC})}$

- **Meaning:** The weight of vertex A is the ratio of the point's distance from the opposing edge to the vertex's distance from that edge.

- **Use in graphics:** Interpolating attributes and testing if a pixel lies within a triangle.

**Perspective Projection (Vertex Shader)**

- **Formula:** $P_{screen} = \begin{bmatrix} x' \\ y' \\ z' \\ w' \end{bmatrix} = \text{Matrix} \times P_{world}$

- **Meaning:** Transforms 3D world coordinates into homogeneous clip space.

- **Use in graphics:** Converting 3D geometry to 2D screen coordinates.

**Perspective-Correct Interpolation**

- **Formula:** $u(x,y) = \frac{\sum (w_i u_i / z_i)}{\sum (w_i / z_i)}$

- **Meaning:** Linearly interpolating attributes divided by depth, then normalizing by the interpolated reciprocal depth.

- **Use in graphics:** Correctly mapping textures and normals on surfaces viewed in perspective.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Bounding Box Optimization**

- Calculating the axis-aligned rectangle enclosing a triangle's screen projection to limit the number of pixels tested during rasterization.

**Early Depth Test**

- Checking a pixel's depth against the Z-buffer before executing expensive shading calculations to improve performance.
