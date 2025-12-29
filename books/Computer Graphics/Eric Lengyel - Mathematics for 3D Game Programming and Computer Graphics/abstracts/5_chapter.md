# Chapter 5: Geometry for 3D Engines

---

## Main Idea

This chapter covers the essential geometric primitives and algorithms used in 3D game engines, focusing on the definitions and interactions of lines, rays, and planes. It establishes the mathematics for collision detection (such as finding the distance between a point and a line or the intersection of three planes) and details the construction of the view frustum and projection matrices necessary for rendering 3D scenes onto 2D screens.

---

## Keywords

**Ray:**

- A line with a specific origin extending infinitely in one direction, typically used for visibility checks and picking; defined parametrically as $P(t) = S + tV$ with $t \ge 0$.

**Plane:**

- A flat, two-dimensional surface extending infinitely, often defined implicitly by a normal vector $N$ and a distance $D$ from the origin ($N \cdot P + D = 0$).

**View Frustum:**

- The volume of space visible to a virtual camera, bounded by six planes (near, far, left, right, top, bottom), which determines what geometry is rendered.

**Perspective Projection:**

- A transformation that maps the view frustum to a canonical view volume (homogeneous clip space), causing parallel lines to converge and distant objects to appear smaller.

**Oblique Clipping:**

- A technique used to modify the projection matrix to clip geometry against an arbitrary plane (often used for rendering reflections) without adding extra clipping stages.

---

## Formulas

**Parametric Line**

- **Formula:** $P(t) = (1-t)P_1 + tP_2$
- **Meaning:** Interpolates between two points $P_1$ and $P_2$.
- **Use in graphics:** Animation, interpolation, and defining edges.

**Distance from Point to Line**

- **Formula:** $d = \frac{||(Q-S) \times V||}{||V||}$
- **Meaning:** Calculates the perpendicular distance from point $Q$ to the line defined by origin $S$ and direction $V$.
- **Use in graphics:** Collision detection and selecting objects with a mouse ray.

**Perspective Projection Matrix (Infinite Far Plane)**

- **Formula:** Maps $-n \to -1$ (or $0$) and $-f \to 1$ (approaching 1 as $f \to \infty$).
- **Meaning:** Projects 3D geometry onto the 2D viewport while maintaining depth ordering.
- **Use in graphics:** The standard projection for rendering 3D scenes, especially for stencil shadows which require robustness at infinity.

---

## Practical Use

**Reflection Rendering**

- Using **Oblique Clipping Planes** to modify the projection matrix so that the near clipping plane coincides with a mirror surface, allowing the scene to be rendered correctly for the reflection pass.

**Frustum Culling**

- extracting the **Frustum Planes** from the projection matrix to test if objects (bounding spheres or boxes) are within the camera's view, discarding those that are not to improve performance.

**Ray Casting**

- Utilizing **Line-Plane Intersections** and **Barycentric Coordinates** to determine exactly where a user clicks on a 3D object in the game world.
