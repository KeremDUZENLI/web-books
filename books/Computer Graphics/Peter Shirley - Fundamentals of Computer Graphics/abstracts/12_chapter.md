# Chapter 12: Data Structures for Graphics

---

## Main Idea

- This chapter surveys essential data structures for organizing geometric objects and space, such as **triangle meshes**, **scene graphs**, and **spatial subdivisions**.

- It emphasizes efficiency in storage and traversal, which is critical for accelerating rendering algorithms (like ray tracing) and managing complex, hierarchical scenes.

---

## Keywords

**Indexed Triangle Mesh**

- A storage method where vertices are stored in a unique list, and triangles are defined by indices into that list, saving memory by sharing common vertices.

**Triangle Strip**

- A compact way to store a connected series of triangles where each new vertex creates a triangle with the previous two, reducing data transfer to the GPU.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSBo0TIIKo9D9LKLpsMr5ocC8YPAvedw5gmqQ6m_5hPRWAYiz0XcecQCdIo_B1Kwba_26YsoneFAD5e2zYVElUu8Secu0c2Rg1f8GYparsnxFPgziQ">

**Scene Graph**

- A hierarchical tree structure (often used with a matrix stack) that organizes objects and their transforms, allowing complex objects (like a robot arm) to move together naturally.

**Bounding Volume Hierarchy (BVH)**

- A tree structure where objects are grouped into nested bounding boxes; rays check against boxes first to avoid testing every individual object.

**Binary Space Partitioning (BSP) Tree**

- A spatial data structure that recursively divides space using planes; widely used for visibility sorting (Painter's algorithm) and ray intersection.

---

## Formulas

**Plane Equation (Implicit)**

- **Formula:** $f(\mathbf{p}) = \mathbf{n} \cdot (\mathbf{p} - \mathbf{a}) = 0$

- **Meaning:** Defines a plane passing through point $\mathbf{a}$ with normal $\mathbf{n}$.

- **Use in graphics:** The core mechanism for building **BSP trees** by testing which side of a plane a point or object lies on.

**Tiled Array Indexing**

- **Formula:** $\text{index} = F_x(x) + F_y(y)$ (where functions $F$ map 2D coordinates to localized memory blocks)

- **Meaning:** Maps multidimensional coordinates to linear memory in a way that preserves locality (blocks).

- **Use in graphics:** Improves **memory cache performance** when accessing large textures or volume data.

---

## Practical Use

**Ray Tracing Acceleration**

- Spatial structures like **BVHs** and **k-d trees** turn ray-object intersection from a slow linear search ($O(N)$) into a fast logarithmic search ($O(\log N)$).

**Mesh Editing**

- Data structures like **Winged-Edge** or **Half-Edge** explicitly store adjacency information, making it efficient to traverse surfaces for algorithms like subdivision or simplification.

**Collision Detection**

- Bounding volumes (spheres, boxes) allow physics engines to quickly reject pairs of objects that are definitely not colliding, saving expensive geometry checks for objects that might be.

**Hierarchical Modeling**

- **Scene graphs** allow developers to model relative movement; rotating a "car" node automatically moves the "wheel" nodes attached to it without manually updating every vertex.
