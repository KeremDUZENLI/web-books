# Chapter 15: Algebraic Methods for Computer Aided Geometric Design

---

## Main Idea

This chapter applies tools from classical algebraic geometry—specifically resultants and Gröbner bases—to solve fundamental problems in CAGD such as implicitization, inversion, and intersection. It contrasts these exact algebraic methods with numerical approaches, demonstrating how they provide robust solutions for converting between parametric and implicit forms and for finding common points between curves and surfaces.

---

## Keywords

**Implicitization:**
The process of converting a parametric representation of a curve or surface (e.g., $x=x(t), y=y(t)$) into an implicit equation (e.g., $f(x,y)=0$). This is useful for determining if a point lies on a shape.

**Parametrization:**
The inverse process of finding a parametric mapping for a shape defined by an implicit equation. This is essential for generating points along a curve for drawing.

**Resultant:**
A polynomial expression derived from the coefficients of a system of polynomials. If the resultant is zero, the polynomials share a common root. It is a key tool for eliminating variables during implicitization.

**Gröbner Basis:**
A specific set of generating polynomials for an ideal that has desirable algorithmic properties. It allows for the solution of systems of polynomial equations and determining ideal membership.

**Moving Curve/Surface:**
A method for implicitization where a family of curves (or surfaces) with parameter-dependent coefficients is found that "follows" the parametric shape.

**Genus:**
A topological property of a curve related to its degree and number of singularities (double points). A curve must have a genus of zero to be rationally parametrizable.

**Variety:**
The set of all solutions to a system of polynomial equations. In CAGD, curves and surfaces are varieties.

---

## Formulas

**Sylvester's Resultant (Structure)**

- **Formula:** $Res(f, g) = \det(M)$
- **Meaning:** The determinant of a matrix formed by shifting the coefficients of two polynomials $f$ and $g$.
- **Use in graphics:** Used to eliminate the parameter $t$ from parametric equations to find the implicit form $f(x,y)=0$.

**Rational Curve Definition**

- **Formula:** $x(t) = \frac{a(t)}{c(t)}, \quad y(t) = \frac{b(t)}{c(t)}$
- **Meaning:** A curve defined by the ratio of polynomials.
- **Use in graphics:** The standard definition for NURBS and rational Bézier curves used in design software.

**Genus of a Curve**

- **Formula:** $g = \frac{(n-1)(n-2)}{2} - d$
- **Meaning:** Relates the genus $g$ to the degree $n$ and number of double points $d$.
- **Use in graphics:** Determines if an algebraic curve can be converted into a rational parametric form (only if $g=0$).

**Moving Line Condition**

- **Formula:** $\sum_{i=0}^{n-1} (A_i a(t) + B_i b(t) + C_i c(t)) t^i \equiv 0$
- **Meaning:** The condition required for a moving line to contain the parametric curve for all $t$.
- **Use in graphics:** Solved to find the basis for the moving line ideal, enabling efficient implicitization.

---

## Practical Use

**Ray Tracing**
Implicitization allows renderers to easily calculate the intersection of a light ray with a surface by substituting the ray equation into the surface's implicit polynomial $f(x,y,z)=0$.

**Point-In-Solid Test**
To check if a point is inside a shape defined by a boundary curve, it is computationally cheaper to substitute the point's coordinates into the implicit equation than to solve for a parameter.

**Curve Intersections**
Algebraic methods (resultants) reduce the problem of finding where two parametric curves intersect to finding the roots of a single polynomial, ensuring all intersection points are found without numerical guessing.
