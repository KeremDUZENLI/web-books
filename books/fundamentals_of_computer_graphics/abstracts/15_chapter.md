# Chapter 15: Curves

---

## Main Idea

- This chapter focuses on representing smooth shapes using **piecewise polynomial functions** (splines), specifically parametric curves like Bézier and B-splines.

- It explains how to mathematically define curves that are smooth, easy to control, and computationally efficient, which are the building blocks of **geometric modeling** and **animation paths**.

---

## Keywords

**Parametric Curve**

- A curve defined by a function $\mathbf{p}(t)$ where a free parameter $t$ (usually $[0, 1]$) maps to coordinates, allowing complex shapes (loops) that implicit functions cannot easily handle.

**Continuity ($C^n$ vs $G^n$)**

- Describes how smooth a curve is at the joints between segments; **$C^0$** means connected, **$C^1$** means constant velocity (tangents match), and **$C^2$** means constant acceleration.

**Spline**

- A curve constructed from multiple polynomial segments strung together; historically named after the flexible metal strips draftsmen used to draw smooth curves.

**Bézier Curve**

- An approximating curve defined by control points; it interpolates (touches) the first and last points, while the internal points define the tangents and shape.

**B-Spline (Basis Spline)**

- A generalization of Bézier curves that offers **local control** (moving one point doesn't change the whole curve) and higher continuity (typically $C^2$ for cubics).

**NURBS (Non-Uniform Rational B-Splines)**

- A variation of B-splines using ratios of polynomials; essential for CAD because they can exactly represent conic sections like **circles and cylinders**, which standard polynomials cannot.

---

## Formulas

**Matrix Form of a Curve**

- **Formula:** $\displaystyle \mathbf{f}(u) = \mathbf{u} \cdot \mathbf{B} \cdot \mathbf{p}$

- **Meaning:** Computes a point on the curve by multiplying the parameter vector $\mathbf{u}$ (powers of $u$), the Basis matrix $\mathbf{B}$ (the math definition), and the Geometry vector $\mathbf{p}$ (control points).

- **Use in graphics:** A unified way to implement various curve types (Hermite, Bézier, B-Spline) efficiently in code.

**Bernstein Basis Polynomials**

- **Formula:** $\displaystyle b_{k,n}(u) = \binom{n}{k} u^k (1-u)^{n-k}$

- **Meaning:** The weighting functions used for **Bézier curves**; they sum to 1, ensuring the curve stays within the convex hull of control points.

- **Use in graphics:** Used to blend control points together to form the final shape.

**Lagrange Interpolation**

- **Formula:** $\displaystyle L(x) = \sum y_j \prod_{i \neq j} \frac{x - x_i}{x_j - x_i}$

- **Meaning:** A polynomial that exactly passes through (interpolates) a given set of data points.

- **Use in graphics:** Useful for deriving basis functions, though often replaced by splines to avoid "wiggling" (overshoot) in complex curves.

---

## Practical Use

**De Casteljau Algorithm**

- A geometric, recursive method to evaluate a Bézier curve using only **linear interpolation** (lerps). It is numerically stable and fundamental for **subdividing** curves to render them smooth.

**Animation Paths**

- Cameras and objects in games rarely move in straight lines; they follow **splines** (often Catmull-Rom splines) to create smooth, natural motion trajectories over time.

**Vector Graphics**

- Fonts (TrueType, PostScript) and 2D illustration tools (Adobe Illustrator) rely almost entirely on **Cubic and Quadratic Bézier curves** to define scalable, crisp shapes.

**Convex Hull Property**

- Bézier and B-spline curves are guaranteed to lie within the **convex hull** (polygon boundary) formed by their control points, making it easy to perform efficient intersection tests (e.g., "does the mouse click hit the curve?").
