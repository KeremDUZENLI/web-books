# Chapter 21: Parametric Modeling

---

## Main Idea

This chapter surveys the field of parametric solid modeling, a technology that allows designers to define 3D shapes as functions of parameters and constraints rather than static geometry. It contrasts history-based methods (which replay a sequence of construction steps) with constraint-based (variational) methods (which solve systems of geometric equations), explaining how these allow for the definition of flexible "families of parts" and efficient design modification.

---

## Keywords

**Parametric Solid:**
A solid model whose final geometry is determined by a set of variable parameters (like length or radius) and constraints, allowing it to represent a family of similar objects.

**Geometric Constraint:**
A specific relationship imposed on geometric entities, such as requiring two lines to be parallel, a point to lie on a circle, or two edges to be a specific distance apart.

**History-Based Modeling:**
A procedural approach where the model is defined by the specific sequence of operations (sketching, extruding, cutting) used to create it. Changing a parameter triggers a "replay" of the history.

**Variational Modeling:**
A declarative approach where the shape is defined by a large system of simultaneous equations (constraints) that are solved all at once, without relying on a specific construction order.


**Constraint Solver:**
The mathematical engine (often using Newton-Raphson iteration or graph decomposition) that calculates the exact coordinates of a model's vertices to satisfy all user-defined dimensions and rules.

**Constructive Solid Geometry (CSG):**
A modeling technique where complex shapes are built by combining simple primitives (cubes, cylinders) using Boolean operations; it is naturally parametric because the primitives are defined by simple dimensions.

**Feature-Based Design:**
Structuring a model using meaningful engineering parts (like "holes," "slots," or "chamfers") rather than just low-level faces and edges, making the design intent clear.

---

## Formulas

**Constraint System**

- **Formula:** $F(X, P) = 0$
- **Meaning:** Represents the set of equations relating the geometric variables $X$ (coordinates) and the design parameters $P$ (dimensions).
- **Use in graphics:** The fundamental system that the CAD software must solve whenever a user changes a dimension value.

**Newton-Raphson Iteration**

- **Formula:** $X_{k+1} = X_k - J(X_k)^{-1} F(X_k)$
- **Meaning:** A numerical algorithm that iteratively refines an initial guess $X_k$ to find the solution to the non-linear constraint equations.
- **Use in graphics:** The standard method used by variational solvers to snap a sketch into the desired shape.

**Degrees of Freedom (DOF)**

- **Formula:** $M = n \times d - k$
- **Meaning:** Estimates the remaining mobility of a system with $n$ points in $d$ dimensions subject to $k$ independent constraints.
- **Use in graphics:** Used to tell the user if a sketch is "under-constrained" (still moves) or "fully constrained" (locked in place).

---

## Practical Use

**Product Families**
Manufacturers use parametric modeling to design a single "master" part (like a screw) and automatically generate thousands of distinct inventory items (different lengths and thread sizes) just by a table of parameters.

**Design Updates**
If an engineer needs to make a bracket 10mm longer, parametric modeling allows them to change one number, and the software automatically updates the 3D geometry and associated 2D drawings.

**Mechanism Design**
By defining constraints (like hinges or sliders) between different parts, designers can simulate the motion of machinery to check for collisions or range of motion before building it.
