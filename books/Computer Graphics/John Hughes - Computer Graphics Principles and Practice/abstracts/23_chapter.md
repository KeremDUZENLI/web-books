# Chapter 23: Splines and Subdivision Surfaces

---

## Main Idea

- This chapter generalizes curve generation techniques to surfaces, specifically explaining the construction of Bézier patches through tensor products and the generation of smooth surfaces from arbitrary meshes using subdivision algorithms.
- It contrasts the mathematical precision of parametric patches with the topological flexibility of subdivision surfaces.

---

## Keywords

**Bézier Patch:**

- A smooth surface segment defined by a grid of control points, constructed mathematically as the tensor product of two Bézier curves.

**Subdivision Surface:**

- A surface representation that begins with a coarse polygonal mesh and recursively refines it to approach a smooth limit surface.

**Tensor Product:**

- A mathematical method for constructing a function of two variables (surface) by multiplying basis functions of single variables (curves).

**Bilinear Patch:**

- The simplest curved surface patch defined by four corner points, created by linear interpolation in two directions.

**Loop Subdivision:**

- A specific subdivision scheme designed for triangle meshes that splits each triangle into four smaller ones, producing a smooth surface.

**Valence:**

- The number of edges connected to a vertex in a mesh; vertices with a valence other than the "regular" count correspond to extraordinary points in the subdivision surface.

_(Add only the essential terms.)_

---

## Formulas

**Bilinear Patch**

- **Formula:** $S(u,v) = (1-u)(1-v)P_{00} + u(1-v)P_{10} + (1-u)vP_{01} + uvP_{11}$

- **Meaning:** Defines a surface by interpolating linearly between four corner control points.

- **Use in graphics:** Simple interpolation for quadrilateral grids or terrain patches.

**Tensor Product Surface**

- **Formula:** $S(u,v) = \sum_{i=0}^n \sum_{j=0}^m P_{ij} b_i(u) b_j(v)$

- **Meaning:** A general formula for patches where the surface is a weighted sum of control points $P_{ij}$ and separable basis functions.

- **Use in graphics:** Creating bicubic Bézier patches or B-spline surfaces.

**Matrix Form of Bicubic Patch**

- **Formula:** $S(u,v) = \mathbf{u} M G M^T \mathbf{v}^T$

- **Meaning:** Efficient computation of a surface point using parameter vectors $\mathbf{u}, \mathbf{v}$, basis matrix $M$, and geometry matrix $G$.

- **Use in graphics:** Hardware-accelerated evaluation of surface patches.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Character Modeling**

- Subdivision surfaces allow artists to model complex, organic shapes using a coarse "control mesh" that is automatically smoothed for rendering.

**CAD/CAM**

- Tensor product splines are used to define precise, mathematically exact surfaces for manufacturing and engineering.
