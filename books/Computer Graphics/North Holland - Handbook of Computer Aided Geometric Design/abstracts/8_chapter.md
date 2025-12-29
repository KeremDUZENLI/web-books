# Chapter 8: Geometric Continuity

---

## Main Idea

This chapter addresses the problem of joining independent curves and surfaces smoothly to form complex shapes, distinguishing between strict mathematical continuity ($C^k$) and visual geometric continuity ($G^k$). It defines the conditions required—such as matching tangent planes or curvature—to ensure that boundaries between patches are invisible (smooth) even if the underlying parameterization speed changes.

---

## Keywords

**Geometric Continuity ($G^k$):**
A measure of smoothness that is independent of the parameterization speed. Two curves are $G^k$ continuous if one can be re-parameterized to match the derivatives of the other up to order $k$.

**Parametric Continuity ($C^k$):**
A stricter form of smoothness where the $n$-th derivatives of two adjacent segments must match exactly. This is often too restrictive for free-form design.

**Beta-constraints:**
Mathematical terms (like $\beta_1$ and $\beta_2$) that appear in the continuity equations. They act as "shape parameters" allowing designers to adjust the tension or bias of a curve join while keeping it smooth.

**Reparametrization:**
The process of changing the mathematical speed at which a curve is traversed without changing its physical shape. This is the key operation linking $C^k$ and $G^k$ continuity.

**Vertex Enclosure:**
The specific challenge of joining multiple surface patches smoothly at a single common corner (vertex), ensuring no holes or creases appear.

**Frenet Frame:**
A moving coordinate system (tangent, normal, binormal) used to analyze curve properties. $G^k$ continuity ensures these frames align or move smoothly across boundaries.

---

## Formulas

**$G^1$ Condition (Curves)**

- **Formula:** $q'(0) = \beta_1 p'(1)$ with $\beta_1 > 0$
- **Meaning:** The tangent vector of the second curve is a positive scalar multiple of the first.
- **Use in graphics:** Ensures two curves join without a sharp corner (tangent continuity).

**$G^2$ Condition (Curves)**

- **Formula:** $q''(0) = \beta_1^2 p''(1) + \beta_2 p'(1)$
- **Meaning:** Relates the second derivatives (acceleration) to ensure curvature matching.
- **Use in graphics:** Essential for high-quality surfaces (like car bodies) where reflection lines must be smooth.

**$G^1$ Condition (Surfaces)**

- **Formula:** $\det [\partial_u p, \partial_v p, \partial_w q] = 0$
- **Meaning:** The tangent vector of the adjacent patch must lie in the tangent plane of the previous patch.
- **Use in graphics:** Ensures two surface patches join with a common tangent plane (no crease).

---

## Practical Use

**Free-Form Surface Modeling**
Allows designers to build complex objects (like a teapot or a car body) from separate rectangular patches that stitch together seamlessly, even when the patches are different sizes or shapes.

**CAD Data Exchange**
Understanding $G^k$ vs $C^k$ is crucial when converting models between different software packages, as some require strict derivative matching while others only care about the visual shape.

**Blending**
Used to create smooth transition fillets (rounded edges) between two intersecting shapes, such as the wing of an airplane joining the fuselage.
