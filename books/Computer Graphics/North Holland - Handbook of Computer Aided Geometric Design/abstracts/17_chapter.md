# Chapter 17: Pythagorean-Hodograph Curves

---

## Main Idea

This chapter introduces Pythagorean-Hodograph (PH) curves, a special class of polynomial curves designed to bridge the gap between algebraic geometry and practical manufacturing. Unlike standard Bézier curves, PH curves have the unique property that their arc length is a polynomial and their parallel offset curves are rational, making them ideal for precise motion control, CNC machining, and robotics where constant speed and exact offset calculations are critical.

---

## Keywords

**Pythagorean-Hodograph (PH) Curve:**
A polynomial curve whose coordinate derivatives satisfy the Pythagorean condition ($x'^2 + y'^2 = \sigma^2$). This ensures the speed of the curve is a polynomial, not a square root.

**Hodograph:**
The curve traced by the velocity vector (first derivative) of a parametric curve. For PH curves, the magnitude of this vector is rational.


**Rational Offset:**
A curve parallel to the original curve at a fixed distance $d$. While offsets of standard polynomials are generally not rational, offsets of PH curves are rational, meaning they can be represented exactly in CAD systems.

**Polynomial Arc Length:**
A feature of PH curves where the cumulative distance along the curve is a polynomial function of the parameter $t$, allowing for exact computation without numerical integration.

**Complex Representation:**
A method of generating planar PH curves by squaring a complex polynomial $w(t) = u(t) + i v(t)$. The derivative of the curve is defined as the square of this complex polynomial.

**Feedrate Control:**
The ability to move a tool along a path at a strictly constant speed. PH curves allow this to be computed in real-time by inverting the polynomial arc length function.

---

## Formulas

**Pythagorean Condition**

- **Formula:** $x'(t)^2 + y'(t)^2 = \sigma(t)^2$
- **Meaning:** The sum of the squares of the derivatives is the square of a polynomial $\sigma(t)$.
- **Use in graphics:** Guarantees that the parametric speed is a simple polynomial, simplifying motion planning.

**Planar PH Construction (using polynomials)**

- **Formula:** $x'(t) = u^2(t) - v^2(t), \quad y'(t) = 2u(t)v(t)$
- **Meaning:** Defines the derivatives of a PH curve using two auxiliary polynomials $u(t)$ and $v(t)$ (based on Pythagorean triple generation).
- **Use in graphics:** The fundamental algebraic recipe for creating PH curves in design software.

**Offset Curve Definition**

- **Formula:** $\mathbf{r}_d(t) = \mathbf{r}(t) + d \frac{(y'(t), -x'(t))}{\sigma(t)}$
- **Meaning:** Calculates the point on the offset curve at distance $d$ using the unit normal vector.
- **Use in graphics:** Used to generate tool paths for milling machines or stroke outlines in vector graphics.

**Arc Length Function**

- **Formula:** $s(t) = \int_0^t (u^2(\tau) + v^2(\tau)) d\tau$
- **Meaning:** The distance along the curve from the start point to parameter $t$.
- **Use in graphics:** Enables "uniform sampling" of the curve for animation or discrete analysis.

---

## Practical Use

**CNC Machining**
PH curves are used to generate tool paths that a machine can traverse at a perfectly constant speed, reducing vibrations and improving the surface finish of manufactured parts.

**Robotics**
Robot arms often require real-time calculation of their position along a path. The polynomial arc length of PH curves makes these kinematic calculations fast and exact.

**Font Design (Stroking)**
In vector graphics (like PostScript or PDF), "stroking" a path involves calculating an offset. PH curves allow these offsets to be represented exactly as rational Bézier curves.
