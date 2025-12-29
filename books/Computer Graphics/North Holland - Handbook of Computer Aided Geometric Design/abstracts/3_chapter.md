# Chapter 3: Geometries for CAGD

---

## Main Idea

This chapter introduces advanced geometric systems—such as sphere geometry, line geometry, and non-Euclidean geometry—that simplify complex design problems. Instead of just working with points in standard space, it teaches how to map shapes like spheres or lines into "points" in higher dimensions to make difficult calculations (like offsets or surface fitting) much easier.

---

## Keywords

**Projective Differential Geometry:**
A study of geometric properties (like tangency or curvature) that stay the same even when a shape is projected onto a different plane.

**Normal Curve:**
A "master curve" in a higher-dimensional space. Every standard rational Bézier curve we use in 3D is just a shadow (projection) of this master curve.

**Dual Curve:**
A curve defined by a moving line (tangent) rather than a moving point. It is useful for creating surfaces that can be flattened without tearing (developable surfaces).

**Cyclographic Mapping:**
A method that represents a circle or sphere (which has a center and a radius) as a single point in 4D space. This makes calculations involving families of spheres very simple.

**Canal Surface:**
A pipe-like surface formed by a sphere moving along a curve. It is the shape you get if you sweep a ball through space.

**Line Geometry:**
A branch of geometry where the basic building block is a straight line instead of a point. It is used to analyze mechanisms and robot movement.

**Plücker Coordinates:**
A set of six numbers used to describe a line in 3D space, treating the line as a single data point.

**PH Curves (Pythagorean Hodograph):**
Special curves designed so that their "offset" (the parallel path a machine tool travels) is mathematically exact and rational, avoiding approximation errors.

---

## Formulas

**Normal Curve Parametrization**

- **Formula:** $c^n(t) = \sum_{i=0}^n B_i^n(t)b_i$
- **Meaning:** Defines the "master curve" in n-dimensional space using Bernstein polynomials.
- **Use in graphics:** Used to derive properties for all rational Bézier curves by projection.

**Plücker Identity**

- **Formula:** $l \cdot \bar{l} = l_1 l_4 + l_2 l_5 + l_3 l_6 = 0$
- **Meaning:** A condition that six coordinates must satisfy to represent a valid straight line in 3D space.
- **Use in graphics:** Essential for calculating line intersections and robot kinematics.

**Linear Complex**

- **Formula:** $\bar{c} \cdot l + c \cdot \bar{l} = 0$
- **Meaning:** A linear equation that describes a specific family of lines, often related to helical (screw-like) motion.
- **Use in graphics:** Used to fit surfaces to scanned data points in reverse engineering.

---

## Practical Use

**CNC Machining**
Using "PH Curves" allows engineers to calculate the exact path a cutting tool must follow (the offset) without computer errors, ensuring smoother manufactured parts.

**Reverse Engineering**
Line geometry is used to analyze 3D scans of mechanical parts to automatically detect if a surface is a cylinder, cone, or sphere.

**Robotics**
Engineers use line geometry to check if the legs of a platform (like a flight simulator) are aligned in a "singular" way, which would cause the robot to lose stability and crash.
