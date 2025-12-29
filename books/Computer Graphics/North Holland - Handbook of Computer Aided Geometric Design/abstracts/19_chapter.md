# Chapter 19: The Medial Axis Transform

---

## Main Idea

This chapter provides a comprehensive overview of the Medial Axis Transform (MAT), a method for representing the skeleton of a shape. It defines the medial axis as the locus of centers of maximal inscribed disks (or spheres in 3D) and explains its fundamental properties, such as homotopy equivalence to the original shape. The chapter also covers various algorithms for computing the MAT, including thinning, wavefront propagation, and Voronoi-based approaches, and discusses its applications in geometric design and analysis.

---

## Keywords

**Medial Axis:**
The set of points within a shape that have at least two closest points on the boundary. It forms the "skeleton" of the object.


**Maximal Disk:**
A disk contained entirely within a shape that is not a subset of any other disk contained in the shape. The center of every maximal disk lies on the medial axis.

**Medial Axis Transform (MAT):**
The combination of the medial axis (the locus of points) and the radius function (the distance from each axis point to the boundary), which allows for full reconstruction of the original shape.

**Pruning:**
The process of removing peripheral branches of the medial axis that correspond to insignificant features or noise on the shape's boundary, simplifying the skeleton.

**Domain of Influence:**
The section of the boundary associated with a specific point or segment of the medial axis.

**Bisector:**
The locus of points equidistant from two geometric elements (like points or curves). The medial axis is essentially composed of pieces of bisectors between boundary elements.

**Retraction:**
A continuous mapping that shrinks the entire shape onto its medial axis, demonstrating that they share the same topological connectivity (homotopy type).

---

## Formulas

**Reconstruction Formula**

- **Formula:** $D = \bigcup_{p \in MA} B(p, r(p))$
- **Meaning:** The original domain $D$ is the union of all maximal inscribed balls $B$ centered at points $p$ on the medial axis with radius $r(p)$.
- **Use in graphics:** Used to compress shapes or generate offset surfaces by modifying the radius function.

**Distance Function**

- **Formula:** $d(x) = \min_{y \in \partial D} \|x - y\|$
- **Meaning:** The distance from an internal point $x$ to the nearest point on the boundary $\partial D$.
- **Use in graphics:** The medial axis corresponds to the ridges or singularities (where the gradient is undefined) of this distance function.

**Euler Characteristic**

- **Formula:** $\chi(MA) = \chi(D)$
- **Meaning:** The medial axis $MA$ has the same topological genus (number of holes and components) as the original shape $D$.
- **Use in graphics:** Ensures that skeletal animation or deformation does not accidentally close holes or break the object.

---

## Practical Use

**Path Planning (Robotics)**
Robots use the medial axis to navigate environments because moving along the "skeleton" keeps the robot as far away from obstacles (walls) as possible, maximizing safety.

**Finite Element Mesh Generation**
The medial axis is used to subdivide complex 2D and 3D domains into simpler, map-able regions (like quadrilaterals or hexahedra) suitable for structural analysis simulations.

**Shape Recognition**
Because the MAT provides a structural description of a shape (branches and connections) rather than just a boundary description, it is used in computer vision to recognize objects regardless of their orientation or slight deformations.
