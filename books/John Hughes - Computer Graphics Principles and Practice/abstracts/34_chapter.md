# Chapter 34: Expressive Rendering

---

## Main Idea

- This chapter explores non-photorealistic rendering (NPR), also called expressive rendering, which prioritizes intent, abstraction, and style over physical accuracy.
- It details techniques for extracting geometric features like contours, ridges, and suggestive contours, and methods for abstraction such as line simplification and stroke-based rendering to convey visual information effectively.

---

## Keywords

**Expressive Rendering:**

- Rendering techniques that focus on communication, style, and abstraction rather than photorealism, often mimicking traditional artistic media like pen-and-ink or painting.

**Silhouette:**

- The boundary separating an object from the background; for smooth objects, the set of points where the view vector is tangent to the surface.

**Contour:**

- The set of points on a smooth surface where the surface normal is orthogonal to the view vector; silhouettes are a subset of contours.

**Suggestive Contour:**

- Points on a surface where the radial curvature is zero and its derivative is positive; these correspond to features that would become true contours in nearby views.

**Apparent Ridge:**

- A view-dependent feature line defined by maximizing curvature in the projection of the surface onto the view plane, capturing visually significant ridges.

**Abstraction:**

- The process of simplifying visual information through simplification (removing detail), factorization (separating generic from specific), and schematization (using symbolic representations).

_(Add only the essential terms.)_

---

## Formulas

**Contour Condition**

- **Formula:** $n(P) \cdot (P - C) = 0$

- **Meaning:** A point $P$ is on the contour if the surface normal $n(P)$ is perpendicular to the view vector ($P - C$).

- **Use in graphics:** Extracting outlines for toon shading or line drawings.

**Curvature (Parametric Curve)**

- **Formula:** $\kappa = \frac{x'(t)y''(t) - y'(t)x''(t)}{(x'(t)^2 + y'(t)^2)^{3/2}}$

- **Meaning:** Measures how sharply a curve bends at a given point.

- **Use in graphics:** Identifying ridges, valleys, and feature lines for stylized rendering.

**Radial Curvature Direction**

- **Formula:** $w = v - (v \cdot n)v$

- **Meaning:** The projection of the view vector $v$ onto the tangent plane, used to define the direction for measuring radial curvature.

- **Use in graphics:** Calculating suggestive contours.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Technical Illustration**

- Using edge enhancement and simplified shading to clarify the structure of complex machinery or biological specimens where photorealism might obscure details.

**Toon Shading**

- A rendering style that uses quantized lighting (cel shading) and heavy outlines to mimic the look of 2D cartoons in 3D games and animation.
