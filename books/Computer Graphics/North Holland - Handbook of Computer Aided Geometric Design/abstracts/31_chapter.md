# Chapter 31: Modeling and Processing with Quadric Surfaces

---

## Main Idea

This chapter provides a comprehensive overview of quadric surfaces (quadrics), which are defined by algebraic equations of degree two. It covers their classification under Euclidean, affine, and projective transformations, explores methods for generating rational parameterizations (including generalized stereographic projection), and details geometric processing algorithms for fitting, blending, offsetting, and computing intersections (QSIC) between these surfaces.

---

## Keywords

**Quadric Surface:**
A surface defined by a homogeneous quadratic equation. Depending on the rank of its coefficient matrix, it can be proper (like an ellipsoid or hyperboloid) or degenerate (like a cone or cylinder).

**Stereographic Projection:**
A method for parameterizing a quadric by projecting points from the surface onto a plane via a center of projection. It establishes a one-to-one mapping (except at the center) and yields a rational parameterization.

**Generalized Stereographic Projection:**
A mapping that relates points on a quadric to a two-parameter family of lines in 3D space. It avoids the dependency on a specific center of projection found in standard stereographic projection.

**QSIC (Quadric Surface Intersection Curve):**
The curve formed by the intersection of two quadric surfaces. It is a space curve of degree four that may be reducible (splitting into lower-degree curves) or singular depending on the configuration.

**Offset Surface:**
A surface consisting of all points at a constant distance from a progenitor surface. For non-degenerate quadrics, the offset surface is generally rational.

**Interference Analysis:**
The task of detecting whether two solid objects intersect or touch without necessarily computing the explicit intersection curve. This is computationally efficient for collision detection.

**Levin's Method:**
An algebraic algorithm for finding the intersection of two quadrics by identifying a ruled surface within the pencil of the two quadrics to parameterize the intersection curve.

---

## Formulas

**Matrix Representation of a Quadric**

- **Formula:** $X^T M X = 0$
- **Meaning:** Defines the surface using a column vector of homogeneous coordinates $X$ and a $4 \times 4$ symmetric matrix $M$.
- **Use in graphics:** The standard algebraic form used for classification and intersection testing in ray tracing.

**Rational Parameterization (Stereographic)**

- **Formula:** $P(T) = (T^T A T)X_0 - 2(X_0^T A T)T$
- **Meaning:** Computes a point $P$ on the quadric corresponding to a parameter point $T$ on the projection plane, given a center of projection $X_0$.
- **Use in graphics:** Used to texture map quadrics or generate meshes from implicit definitions.

**Intersection Curve Parameterization (Levin)**

- **Formula:** $Q(u) = \tilde{R}(u) \pm \sqrt{d(u)}\tilde{T}(u)$
- **Meaning:** Represents the intersection curve using a base curve $\tilde{R}(u)$ and a direction $\tilde{T}(u)$ derived from a ruled surface in the pencil.
- **Use in graphics:** Allows for the tracing and rendering of the complex curve where two quadrics meet.

**Characteristic Equation (Interference)**

- **Formula:** $\det(\lambda A + B) = 0$
- **Meaning:** An equation whose roots determine the relative configuration (separation, touching, or intersection) of two quadrics defined by matrices $A$ and $B$.
- **Use in graphics:** A fast algebraic check for collision detection between bounding ellipsoids.

---

## Practical Use

**Mechanical Design (CAD)**
The majority of manufactured parts are composed of planes and natural quadrics (cylinders, cones, spheres). These mathematical definitions allow for exact representation and manufacturing.

**Collision Detection**
Interference analysis of ellipsoids provides a fast "broad-phase" check in physics simulations to see if objects might be colliding before performing expensive mesh intersections.

**NC Machining**
Calculating offset surfaces for quadrics is essential for defining the path of a spherical cutting tool so that it machines the correct shape without gouging.
