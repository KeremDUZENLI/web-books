# Chapter 6: Spline Basics

---

## Main Idea

This chapter establishes the mathematical foundation of univariate splines—smooth piecewise polynomial functions—by defining them as weighted sums of B-splines. It details the construction of B-splines via recurrence relations, explores their geometric properties (such as the convex hull property and variation diminution), and provides algorithms for stable evaluation, differentiation, and knot insertion used in curve design.

---

## Keywords

**Piecewise Polynomial:**
A function defined by different polynomial formulas on specific intervals (determined by a break sequence), joined together with a certain level of smoothness.

**B-Spline:**
The fundamental basis function for spline spaces, defined recursively over a knot sequence. It has minimal support and sums to one, making it ideal for stable computations.

**Knot Sequence:**
A non-decreasing sequence of parameter values $t_j$ that determines where the polynomial pieces of a B-spline start and end.

**Recurrence Relation:**
The method of building higher-order B-splines from lower-order ones (starting with step functions) using stable linear combinations.

**Support:**
The specific interval $[t_j, t_{j+k}]$ outside of which a B-spline's value is exactly zero. This "local" property means changing one control point only affects a small part of the curve.

**Marsden's Identity:**
A mathematical identity relating powers of the variable $t$ to sums of B-splines, proving that B-splines can represent any polynomial of degree less than $k$.

**Knot Insertion:**
An algorithm to add a new knot to a spline's sequence without changing the shape of the curve. This is used to refine control polygons for rendering or intersection testing.

---

## Formulas

**B-Spline Recurrence Relation**

- **Formula:** $B_{j,k}(x) = \omega_{jk}(x)B_{j,k-1}(x) + (1-\omega_{j+1,k}(x))B_{j+1,k-1}(x)$
- **Meaning:** Computes a $k$-th order B-spline as a weighted average of two $(k-1)$-th order B-splines.
- **Use in graphics:** The core of the De Boor algorithm for evaluating spline curves.

**Differentiation of a Spline**

- **Formula:** $D(\sum_j \alpha_j B_{j,k}) = (k-1) \sum_j \frac{\alpha_j - \alpha_{j-1}}{t_{j+k-1} - t_j} B_{j,k-1}$
- **Meaning:** The derivative of a spline is itself a spline of one lower order, with coefficients derived from the differences of the original coefficients.
- **Use in graphics:** Used to calculate tangent vectors for velocity or lighting (surface normals).

**Knot Insertion (Boehm's Algorithm)**

- **Formula:** $\hat{\alpha}_j = (1-\hat{\omega}_{jk}(x))\alpha_{j-1} + \hat{\omega}_{jk}(x)\alpha_j$
- **Meaning:** Calculates new control points $\hat{\alpha}_j$ when a new knot is added.
- **Use in graphics:** Used to subdivide curves for rendering or to give a designer more local control over a specific area.

---

## Practical Use

**Curve Evaluation (De Boor's Algorithm)**
This is the standard, numerically stable method used by graphics software to calculate the exact position of a point on a spline curve given a parameter $t$.

**Smoothing Noisy Data**
Splines are used to fit smooth curves to scattered, noisy data points (e.g., from a 3D scanner) by minimizing a combination of the error and the curve's "energy" (roughness).

**Shape Preservation**
The "Variation Diminution" property ensures that a spline curve does not wiggle or oscillate more than its control polygon. This makes the design process intuitive, as the curve follows the rough shape of the polygon without introducing unexpected artifacts.
