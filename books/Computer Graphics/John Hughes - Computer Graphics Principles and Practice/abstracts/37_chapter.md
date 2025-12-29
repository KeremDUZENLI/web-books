# Chapter 37: Spatial Data Structures

---

## Main Idea

- This chapter examines spatial data structures—such as grids, BSP trees, k-d trees, octrees, and bounding volume hierarchies (BVHs)—which organize geometric primitives in $k$-dimensional space to accelerate intersection queries.
- It provides a theoretical and practical analysis of these structures, discussing interface design, asymptotic performance, and strategies for tuning implementations for specific applications like ray tracing and collision detection.

---

## Keywords

**Spatial Data Structure:**

- A data organization scheme (like a tree or grid) designed to efficiently store and query geometric data based on its spatial location.

**Bounding Volume Hierarchy (BVH):**

- A tree structure where each node contains a bounding volume (e.g., box or sphere) enclosing all primitives in its subtree, allowing for rapid culling of disjoint geometry.

**Binary Space Partition (BSP) Tree:**

- A tree that recursively divides space into pairs of convex sets using splitting hyperplanes; used for ordering drawing operations and accelerating queries.

**k-d Tree:**

- A specialized BSP tree where splitting planes are strictly axis-aligned, commonly used for fast ray-tracing acceleration.

**Octree:**

- A tree structure where each internal node has exactly eight children, representing the subdivision of a cube into eight octants.

**Uniform Grid:**

- A spatial partition dividing space into a regular array of equal-sized cells, allowing $O(1)$ lookup of spatial locations but potentially requiring large storage for sparse data.

**Conservative Intersection:**

- A query result that guarantees finding all true intersections but may include false positives (e.g., intersecting a bounding box instead of the complex object inside), used to quickly discard irrelevant objects.

_(Add only the essential terms.)_

---

## Formulas

**Tree Intersection Complexity**

- **Formula:** $T_{tree} \approx O(\log n)$

- **Meaning:** The expected time to find an intersection in a balanced spatial tree with $n$ primitives.

- **Use in graphics:** Predicting performance of ray casting in large scenes.

**Grid Intersection Complexity**

- **Formula:** $T_{grid} \approx O(n / g^k)$

- **Meaning:** The expected time for intersection in a grid with $g$ subdivisions along each of $k$ axes, assuming uniform distribution.

- **Use in graphics:** Analyzing trade-offs between grid resolution and query speed.

**Grid Space Complexity**

- **Formula:** $S_{grid} \approx O(g^k + n)$

- **Meaning:** Memory usage depends on both the number of primitives $n$ and the number of grid cells $g^k$.

- **Use in graphics:** Determining if a grid fits in memory for a given resolution.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Ray Tracing Acceleration**

- Using k-d trees or BVHs to reduce the cost of finding the first triangle hit by a light ray from linear to logarithmic time, enabling rendering of scenes with millions of polygons.

**Collision Detection**

- Using grids or hash grids to quickly identify pairs of objects that are close to each other in a physics simulation, avoiding $O(n^2)$ pairwise checks.
