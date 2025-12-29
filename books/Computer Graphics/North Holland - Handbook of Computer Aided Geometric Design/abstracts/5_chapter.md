# Chapter 5: Rational Techniques

---

## Main Idea

This chapter expands geometric modeling from standard polynomials to **rational** forms, which are the ratio of two polynomials. While standard Bézier curves cannot mathematically represent perfect circles or cylinders, rational curves (and surfaces) solve this problem by introducing **weights** and **homogeneous coordinates**, forming the basis of the industry-standard NURBS format used in CAD systems.

---

## Keywords

**Rational Curve:**
A curve defined as the ratio of two polynomials (a polynomial point divided by a polynomial weight). It is essential for representing conic sections like circles and ellipses exactly.

**Homogeneous Coordinates:**
A coordinate system where a 3D point $(x, y, z)$ is represented by four numbers $(wx, wy, wz, w)$. This extra dimension allows for the definition of points at infinity and rational curves.

**Weight:**
A scalar value associated with each control point in a rational curve. Increasing a point's weight pulls the curve tighter towards that point without moving the point itself.

**Conic Section:**
Fundamental shapes (circle, ellipse, parabola, hyperbola) created by slicing a cone. Rational quadratic Bézier curves are the standard way to model these in computers.

**NURBS:**
Non-Uniform Rational B-Splines. The standard data format in engineering (CAD) that encompasses both simple shapes (lines, circles) and complex free-form surfaces in a single mathematical representation.

**Möbius Transformation:**
A special mathematical mapping that allows you to change the speed (parameterization) of a rational curve without changing its physical shape.

---

## Formulas

**Rational Bézier Curve**

- **Formula:** $x(t) = \frac{\sum_{i=0}^{n} w_i b_i B_i^n(t)}{\sum_{i=0}^{n} w_i B_i^n(t)}$
- **Meaning:** The curve is a weighted average of control points $b_i$, where each point's influence is scaled by its weight $w_i$.
- **Use in graphics:** Used to draw exact circles and arcs in design software.

**Conic Shape Factor**

- **Formula:** $k = \frac{w_1}{\sqrt{w_0 w_2}}$
- **Meaning:** Determines the type of conic section defined by three control points.
    - $k < 1$: Ellipse
    - $k = 1$: Parabola
    - $k > 1$: Hyperbola
- **Use in graphics:** Used to classify or construct specific mechanical curves.

**Projective to Euclidean Map**

- **Formula:** $P(x, y, z, w) = (\frac{x}{w}, \frac{y}{w}, \frac{z}{w})$
- **Meaning:** Converts a point from 4D homogeneous space back to standard 3D space by dividing by the weight $w$.
- **Use in graphics:** The final step in rendering a rational curve on a screen.

---

## Practical Use

**Mechanical Engineering**
Manufactured parts often rely on exact cylinders, cones, and spheres. Rational surfaces allow CAD software to store these shapes with mathematical precision rather than approximations.

**Data Exchange (IGES/STEP)**
Because rational curves (NURBS) can represent *both* free-form car bodies and mechanical drill holes, they act as the universal language for transferring 3D models between different software packages.

**Design Flexibility**
Designers can adjust the shape of a curve by changing the **weights** of control points, providing an extra tool for fine-tuning shapes (like the nose of an aircraft) without altering the control polygon structure.
