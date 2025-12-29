# Chapter 9: Functions on Meshes

---

## Main Idea

- This chapter details methods for defining and extending functions across geometric meshes, utilizing piecewise linear interpolation based on barycentric coordinates.
- It explores practical applications such as texture mapping and discusses the mathematical and topological limitations of interpolating functions on non-convex domains like spheres.

---

## Keywords

**Barycentric Coordinates:**

- A coordinate system defined by the vertices of a simplex (like a triangle) where any point inside is expressed as a weighted sum of the vertices, with weights summing to one.

**Piecewise Linear Interpolation:**

- A method of extending values defined at mesh vertices to the interior of the mesh, resulting in a function that is linear within each element and continuous across boundaries.

**Texture Mapping:**

- A graphics technique where a 2D image (texture) is mapped onto a 3D surface by assigning texture coordinates to vertices and interpolating them across the surface.

**Star and Link:**

- The star of a vertex is the set of all mesh elements (edges, faces) containing it; the link is the boundary of the star.

**Simplex:**

- A generalization of a triangle to arbitrary dimensions (e.g., a point is a 0-simplex, a line segment is a 1-simplex, a triangle is a 2-simplex).

_(Add only the essential terms.)_

---

## Formulas

**Linear Interpolation (1D)**

- **Formula:** $f(t) = (1-s)f_i + s f_{i+1}$

- **Meaning:** Determines the value of a function at a point $t$ between two known values $f_i$ and $f_{i+1}$.

- **Use in graphics:** Animation keyframing and gradient generation.

**Barycentric Interpolation (Triangle)**

- **Formula:** $f(P) = \alpha f_A + \beta f_B + \gamma f_C$

- **Meaning:** Calculates the value at point $P$ inside a triangle using the values at vertices $A, B, C$ and the barycentric weights.

- **Use in graphics:** Shading (Gouraud), texture mapping, and normal interpolation.

**Barycentric Constraint**

- **Formula:** $\alpha + \beta + \gamma = 1$

- **Meaning:** The sum of barycentric coordinates for any point relative to a simplex is always unity.

- **Use in graphics:** Validating points and reducing storage requirements.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Texture Mapping**

- To apply detailed images to 3D geometry without increasing geometric complexity, $(u,v)$ coordinates are assigned to mesh vertices. The graphics system uses barycentric interpolation to compute the $(u,v)$ coordinate for every pixel on a triangle, allowing the color to be fetched from the texture image.

**Color Interpolation**

- In smooth shading, lighting calculations are often performed only at vertices to save performance. The resulting colors are then interpolated across the triangle surface, creating a smooth gradient appearance.
