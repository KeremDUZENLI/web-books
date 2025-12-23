# Chapter 8: Visibility Determination

---

## Main Idea

This chapter explores techniques for optimizing real-time 3D rendering by efficiently identifying and culling geometry that is not visible to the camera. It details the construction and testing of various bounding volumes (boxes, spheres, ellipsoids, cylinders) and introduces spatial partitioning methods like Octrees, BSP trees, and portal systems to manage scene visibility at different scales.

---

## Keywords

**Bounding Volume:**
- A simple geometric shape (such as a sphere or box) that encloses a complex object, used to quickly test if the object lies outside the view frustum.

**Principal Component Analysis (PCA):**
- A statistical method used to determine the natural axes of a set of vertices, allowing for the construction of tighter, oriented bounding boxes.

**Octree:**
- A spatial partitioning structure that recursively subdivides a cubic volume into eight smaller octants, enabling efficient culling of large regions of space.

**Binary Space Partitioning (BSP) Tree:**
- A data structure that recursively divides space into pairs of halfspaces using splitting planes, often used for static geometry organization.

**Portal System:**
- A visibility determination technique that divides a world into zones connected by portals (polygons), rendering only those zones visible through a sequence of open portals.

---

## Formulas

**Covariance Matrix**
- **Formula:** $C = \frac{1}{N}\sum_{i=1}^{N}(P_{i}-m)(P_{i}-m)^{T}$
- **Meaning:** Represents the correlation between vertex coordinates to find principal axes.
- **Use in graphics:** Aligning bounding boxes to the natural orientation of an object.

**Bounding Sphere Expansion**
- **Formula:** $G = Q - r\frac{P_{i}-Q}{||P_{i}-Q||}$
- **Meaning:** Calculates a tangent point for expanding a bounding sphere to include an exterior point $P_i$.
- **Use in graphics:** Iteratively constructing a bounding sphere that encloses all mesh vertices.

**Effective Radius (Box)**
- **Formula:** $r_{eff} = \frac{1}{2}(|R\cdot N| + |S\cdot N| + |T\cdot N|)$
- **Meaning:** The projected radius of an oriented box onto a plane normal $N$.
- **Use in graphics:** Testing if an oriented bounding box intersects a frustum plane.

**Plane Transformation (BSP)**
- **Formula:** $K^{\prime} = [(PM)^{-1}]^{T}K$
- **Meaning:** Transforms a world-space plane $K$ into homogeneous clip space.
- **Use in graphics:** Efficiently testing if a splitting plane intersects the view frustum.

---

## Practical Use

**Frustum Culling**
- Using **Bounding Volume Tests** to discard entire objects or hierarchy nodes that fall completely outside the camera's field of view before sending them to the rendering pipeline.

**Indoor Visibility**
- Implementing **Portal Systems** to render complex indoor environments (like buildings or dungeons) by only processing rooms that are visually connected to the viewer's current location.

**Static Scene Organization**
- Using **Octrees** or **BSP Trees** to spatially index static world geometry, allowing for fast queries regarding visibility and collision potential.
