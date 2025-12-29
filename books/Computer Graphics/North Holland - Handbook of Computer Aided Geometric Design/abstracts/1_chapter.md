# Chapter 1: A History of Curves and Surfaces in CAGD

---

## Main Idea

This chapter explains the history of Computer Aided Geometric Design (CAGD), tracing how manual drafting tools like wooden splines evolved into mathematical computer algorithms used for designing cars, ships, and planes. It highlights the parallel discoveries of key figures like de Casteljau and Bézier, who developed the math to define free-form shapes using control points.

---

## Keywords

**CAGD:**
Computer Aided Geometric Design. It is the field of creating curves and surfaces on a computer for manufacturing and design.

**Spline:**
Originally a flexible wooden strip used by draftsmen to draw smooth curves for ships. In computers, it is a mathematical curve defined by points.

**Control Polygon:**
A set of points connected by lines (like a scaffold) used to define the shape of a curve. Moving these points changes the curve's shape intuitively.

**NURBS:**
Non-Uniform Rational B-Splines. A standard mathematical way to represent both standard shapes (like circles) and complex free-form curves in industry.

**De Casteljau Algorithm:**
A method developed at Citroën to construct curves geometrically using repeated linear interpolation between points.

**Tensor Product Surface:**
A method of creating a 3D surface by taking a curve and moving it along another curve (like sweeping a shape through the air).

---

## Formulas

**Linear Interpolation (The basis of de Casteljau's Algorithm)**

- **Formula:** $P(t) = (1-t)A + tB$
- **Meaning:** Finds a point exactly between point A and point B based on a ratio $t$.
- **Use in graphics:** Used repeatedly to construct complex curves from simple straight lines.

**Bernstein Polynomials**

- **Formula:** $B_i^n(t)$
- **Meaning:** The mathematical weighting functions used to blend control points together.
- **Use in graphics:** They determine how much influence each control point has on the final shape of a Bézier curve.

---

## Practical Use

**Shipbuilding and Automotive Design**
Designers use these mathematical curves to ensure car bodies and ship hulls are perfectly smooth and aerodynamic without building physical models first.

**CAM (Computer Aided Manufacturing)**
The mathematical descriptions of shapes allow computers to drive milling machines (NC machines) to cut parts automatically from metal.

**Data Smoothing**
Scientists use these techniques to create smooth maps or surfaces from scattered data points, such as weather station readings.
