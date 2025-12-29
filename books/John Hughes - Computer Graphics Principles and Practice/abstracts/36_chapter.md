# Chapter 36: Visibility Determination

---

## Main Idea

- This chapter addresses the fundamental problem of determining which parts of scene geometry are visible to a camera or light source.
- It classifies algorithms into exact methods (like ray casting and the depth buffer) that ensure correctness, and conservative methods (like frustum and occlusion culling) that improve efficiency by discarding unseen geometry before expensive processing.

---

## Keywords

**Visibility Function ($V(P,Q)$):**

- A binary function that is 1 if there is an unobstructed line of sight between points P and Q, and 0 otherwise.

**Ray Casting:**

- A method of solving visibility by determining the first surface intersection along a ray originating from the camera or a specific point.

**Depth Buffer (Z-Buffer):**

- An image-space data structure that stores the distance from the camera to the nearest surface at each pixel, allowing for implicit hidden surface removal via a depth test.

**Frustum Culling:**

- A conservative visibility technique that discards geometric primitives lying entirely outside the camera's view volume (frustum).

**Backface Culling:**

- The process of discarding polygons that face away from the viewer, typically determined by the dot product of the surface normal and the view vector.

**Occlusion Culling:**

- A set of techniques (e.g., hierarchical Z-buffer, occlusion queries) used to discard objects that are obscured by other objects closer to the viewer.

**BSP Tree (Binary Space Partition):**

- A spatial data structure that recursively divides space using planes, often used to determine visibility order (painters algorithm) or accelerate ray intersections.

**Painter's Algorithm:**

- A list-priority algorithm that renders objects from back to front, allowing later (closer) objects to overwrite earlier (farther) ones, though it fails with cyclic overlaps.

_(Add only the essential terms.)_

---

## Formulas

**Visibility Function**

- **Formula:** $V(P,Q) = 1$ if $\text{Ray}(P \to Q) \cap \text{Scene} = \emptyset$, else $0$.

- **Meaning:** Mathematical definition of the line of sight between two points.

- **Use in graphics:** Foundation for ray tracing, shadows, and occlusion.

**Backface Culling Condition**

- **Formula:** $(Q - P) \cdot \hat{n} < 0$

- **Meaning:** A polygon at $P$ with normal $\hat{n}$ is a backface with respect to observer $Q$ if the vector from $P$ to $Q$ opposes the normal.

- **Use in graphics:** Eliminating roughly half the geometry in a closed mesh before rasterization.

**Hyperbolic Depth Mapping (OpenGL)**

- **Formula:** $z_{window} = \frac{f+n}{f-n} + \frac{2fn}{f-n}\frac{1}{z_{eye}}$

- **Meaning:** Maps camera-space $z$ coordinates to the range [0, 1] (or [-1, 1]) for the depth buffer, distributing precision non-linearly.

- **Use in graphics:** Z-buffering with higher precision for nearby objects.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Game Engines**

- Real-time rendering engines rely heavily on depth buffers for correctness and frustum/occlusion culling for performance to maintain high frame rates.

**Shadow Mapping**

- Visibility determination from the perspective of a light source is used to generate shadow maps, where the "visible" surfaces are lit and "hidden" surfaces are in shadow.
