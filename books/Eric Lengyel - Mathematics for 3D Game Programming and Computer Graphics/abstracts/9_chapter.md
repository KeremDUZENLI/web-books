# Chapter 9: Polygonal Techniques

---

## Main Idea

This chapter covers real-time manipulation and processing of polygonal models to create visual effects and optimize rendering. It details methods for handling coplanar polygons (decals), creating camera-facing geometry (billboards), reducing mesh complexity (simplification), and decomposing polygons into triangles (triangulation).



---

## Keywords

**Depth Value Offset:**
- A technique used to alter the depth values of a polygon (e.g., a decal) without changing its screen position, preventing Z-fighting artifacts.

**Decal:**
- A polygon applied to a surface (like a sticker) to add details such as scorch marks or footprints; it requires careful depth handling to avoid flickering.

**Billboarding:**
- A method of orienting a polygon so that it always faces the camera, commonly used for particles, smoke, fire, or distant trees.


**Polygon Reduction:**
- The process of reducing the number of triangles in a mesh while preserving its overall shape, often used to create Level of Detail (LOD) models.

**Triangulation:**
- The algorithm for decomposing a complex polygon (potentially with holes) into a set of triangles for rendering.


---

## Formulas

**Standard Projection Depth**
- **Formula:** $d = -\frac{f+n}{f-n} + \frac{1}{z}\left(\frac{-2fn}{f-n}\right)$
- **Meaning:** Maps eye-space $z$ to normalized device coordinates (depth).
- **Use in graphics:** Depth buffering and calculating necessary offsets for decals.

**Projection Matrix Modification (Offset)**
- **Formula:** $M'_{33} = M_{33}(1 + \delta)$
- **Meaning:** Modifies the projection matrix to shift depth values slightly.
- **Use in graphics:** Applying a global depth bias to specific geometry.

**Billboard Rotation (Spherical)**
- **Formula:** $R = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ (in View Space)
- **Meaning:** In view space, a spherical billboard is simply aligned with the axes (identity rotation).
- **Use in graphics:** Rendering symmetric particles like smoke or sparks.

---

## Practical Use

**Damage Effects**
- Using **Decals** with **Depth Offsets** to render bullet holes or blast marks on walls without z-fighting.

**Particle Systems**
- Implementing **Billboarding** to render thousands of particles (rain, snow, fire) efficiently as single quads that always face the viewer.

**Level of Detail (LOD)**
- Applying **Polygon Reduction** algorithms to generate lower-resolution versions of character models for rendering when they are far away.
