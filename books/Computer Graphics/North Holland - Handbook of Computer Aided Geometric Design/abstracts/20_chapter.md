# Chapter 20: Solid Modeling

---

## Main Idea

This chapter explains **Solid Modeling**, a method used to represent 3D objects in a computer so they are mathematically complete and unambiguous. Unlike simple drawings or wireframes, solid models contain full information about the object's inside and outside, allowing computers to automatically calculate physical properties like volume, mass, and center of gravity, and to guarantee that the object can actually be manufactured.

---

## Keywords

**Informational Completeness:**
A property of a computer model meaning it contains enough data to answer *any* geometric question about the object (like "is this point inside?" or "what is the volume?") without ambiguity.

**Constructive Solid Geometry (CSG):**
A method of building complex shapes by combining simple primitive shapes (like cubes, spheres, and cylinders) using logical operations.


**Boundary Representation (B-rep):**
A method of defining a solid by listing all its surface parts—faces, edges, and vertices—and how they connect to enclose a volume.


**Boolean Operations:**
Logical actions used to combine solids: **Union** (adding), **Difference** (subtracting), and **Intersection** (keeping the overlapping part).

**Regularized Set Operations:**
Special math rules for Boolean operations that prevent "impossible" results, like a solid object having a dangling wall with zero thickness.

**Manifold:**
A mathematical term for a surface where every point looks like a flat disk if you zoom in close enough. Solid modelers usually require objects to be "2-manifold" to be physically valid solids.

**Cell Decomposition:**
Breaking a complex object down into many small, simple blocks (cells), often used for finite element analysis or medical imaging (voxels).

---

## Formulas

**Regularization Formula**

- **Formula:** $S^* = \text{closure}(\text{interior}(S))$
- **Meaning:** A mathematical "cleanup" step. It removes dangling edges or isolated points, ensuring the result is a valid solid with volume.
- **Use in graphics:** Applied after every Boolean operation (like drilling a hole) to keep the 3D model valid.

**Euler-Poincaré Formula (Simple Polyhedra)**

- **Formula:** $V - E + F = 2$
- **Meaning:** A rule relating the number of Vertices ($V$), Edges ($E$), and Faces ($F$) in a simple solid without holes.
- **Use in graphics:** Used to check the validity of a B-rep model; if the numbers don't add up to 2, the mesh might have a hole or an error.

---

## Practical Use

**Computer-Aided Design (CAD)**
Engineers use solid modeling to design engine parts, ensuring they fit together perfectly and calculating their weight before building a prototype.

**3D Printing**
Solid models (often exported as STL files) provide the "watertight" geometry required by 3D printers to slice the object and print it layer by layer.

**Finite Element Analysis (FEA)**
Because solid models distinguish "inside" from "outside," they can be automatically meshed to simulate how a part will bend or break under stress.
