# Chapter 2: Miscellaneous Math

---

## Main Idea

- This chapter reviews the fundamental mathematical tools required to translate geometry into code, focusing on sets, functions, and quadratic equations.

- It establishes the critical geometric notations for vectors, curves, and surfaces, with a specific emphasis on **barycentric coordinates** for triangle interpolation.

---

## Keywords

**Mappings (Functions)**

- A relationship taking an argument from a **domain** and mapping it to a target set, often denoted as $f: \mathbb{R} \to \mathbb{Z}$ (taking a real number and returning an integer).

**Implicit Curves/Surfaces**

- Geometry defined by a function where the curve/surface consists of points where the function equals zero ($f(x,y)=0$). Useful for tests like "is a point inside or outside?"

**Parametric Curves/Surfaces**

- Geometry controlled by a free parameter (e.g., $t$), where $(x,y) = f(t)$. This is like a pen tracing a path over time, making it easy to generate points along the curve.

**Barycentric Coordinates**

- A non-orthogonal coordinate system based on a triangle's vertices ($\mathbf{a}, \mathbf{b}, \mathbf{c}$), used to smoothly interpolate values (like color) across the triangle's surface.

---

## Formulas

**Quadratic Formula**

- **Formula:** $\ x = \frac{-B \pm \sqrt{B^2 - 4AC}}{2A}$

- **Meaning:** Finds the roots (zero crossings) of a polynomial $Ax^2 + Bx + C = 0$.

- **Use in graphics:** Essential for calculating **ray-object intersections**, such as finding where a ray hits a sphere.

**Dot Product**

- **Formula:** $\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos \phi$

- **Meaning:** A scalar value relating the magnitudes of two vectors and the cosine of the angle between them.

- **Use in graphics:** Used constantly for **shading calculations** (Lambert’s cosine law) and projecting vectors.

**Cross Product**

- **Formula:** $\mathbf{a} \times \mathbf{b} = \mathbf{c}$ (where $\mathbf{c}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$)

- **Meaning:** Produces a vector orthogonal to the two input vectors; magnitude is the area of the parallelogram formed by them.

- **Use in graphics:** Used to find **surface normals** and to construct orthonormal coordinate bases.

**Barycentric Interpolation**

- **Formula:** $\mathbf{p} = \alpha \mathbf{a} + \beta \mathbf{b} + \gamma \mathbf{c}$ (where $\alpha + \beta + \gamma = 1$)

- **Meaning:** Defines a point $\mathbf{p}$ as a weighted average of triangle vertices.

- **Use in graphics:** The standard method for **interpolating attributes** (color, texture coordinates, normals) across a triangle during rasterization.

---

## Practical Use

**Orthonormal Bases**

- Managing coordinate systems (frames) is a core task in graphics. Constructing a basis from a single vector (like a surface normal) or two vectors is required for setting up cameras and shading local surfaces.

**2D Gradient**

- The gradient vector ($\nabla f$) points in the direction of the maximum increase of a function. In graphics, computing the gradient of an implicit shape function ($f(x,y,z) = 0$) gives you the **surface normal vector**, which is vital for lighting.

**Linear Interpolation**

- This operation connects two points $\mathbf{A}$ and $\mathbf{B}$ via a parameter $t$. It is the foundation for defining line segments, animation paths, and grading colors between vertices.
