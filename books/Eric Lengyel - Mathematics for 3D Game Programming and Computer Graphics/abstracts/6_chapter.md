# Chapter 6: Ray Tracing

---

## Main Idea

This chapter details the algorithms required to determine the points of intersection between a ray and various geometric surfaces (such as triangles, spheres, cylinders, and tori). It also provides the mathematical foundations for altering the path of a ray when it encounters reflective or transparent materials, enabling the simulation of realistic lighting and visibility.


---

## Keywords

**Ray Tracing:**
- A technique that follows beams of light to determine their interactions with objects, used for visibility, collision detection, and rendering.

**Newton's Method:**
- A numerical iterative technique used to find the roots of a function by using its derivative to refine an initial guess.

**Discriminant:**
- The component of a polynomial equation (e.g., $b^2 - 4ac$ for quadratics) that indicates the number of real roots (intersections) that exist.

**Barycentric Coordinates:**
- A coordinate system used to describe a point inside a triangle as a weighted average of the triangle's vertices ($w_0, w_1, w_2$).

**Snell's Law:**
- A formula describing the relationship between the angles of incidence and refraction for light passing between media with different refractive indices.

**Total Internal Reflection:**
- A phenomenon where light attempts to pass from a higher refractive index to a lower one at a steep angle and is reflected back instead of refracted.

---

## Formulas

**Ray Equation**
- **Formula:** $P(t) = S + tV$
- **Meaning:** Defines a point along a line given an origin $S$, direction $V$, and parameter $t$.
- **Use in graphics:** Representing light rays or projectiles for intersection testing.

**Quadratic Formula (Ray-Sphere Intersection)**
- **Formula:** $t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- **Meaning:** Solves for the intersection distances $t$ for quadric surfaces.
- **Use in graphics:** Finding where a ray hits spheres, cylinders, or cones.

**Reflection Vector**
- **Formula:** $R = 2(N \cdot L)N - L$
- **Meaning:** Calculates the direction of a reflected ray given the normal $N$ and incident light vector $L$.
- **Use in graphics:** Rendering mirrors and shiny surfaces.

**Refraction Vector (Snell's Law)**
- **Formula:** $T = (\frac{\eta_L}{\eta_T} N \cdot L - \sqrt{1 - \frac{\eta_L^2}{\eta_T^2}[1 - (N \cdot L)^2]})N - \frac{\eta_L}{\eta_T} L$
- **Meaning:** Calculates the direction of light bending through transparent materials.
- **Use in graphics:** Rendering glass, water, and other transmissive media.

---

## Practical Use

**Collision Detection**
- Using **Ray-Box** or **Ray-Cylinder** intersection tests to determine if a projectile or character line-of-sight is blocked by game geometry.

**Light Mapping**
- Tracing rays from light sources to surface textures to pre-calculate static shadows and illumination.

**Picking**
- Using **Ray-Triangle Intersection** and **Barycentric Coordinates** to determine exactly which point on a 3D mesh a user has clicked with the mouse cursor.
