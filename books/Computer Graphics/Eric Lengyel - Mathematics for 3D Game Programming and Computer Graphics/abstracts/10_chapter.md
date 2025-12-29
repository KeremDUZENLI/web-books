# Chapter 10: Shadows

---

## Main Idea

This chapter explains the two primary real-time shadow generation techniques: shadow mapping and stencil shadows (shadow volumes). It details the mathematical and algorithmic implementations of stencil shadows, including silhouette determination, robust shadow volume extrusion to infinity, and the "Z-fail" rendering technique to handle camera placement within shadow volumes.

---

## Keywords

**Shadow Mapping:**
- An image-based technique that renders the scene depth from the light's perspective into a texture, used to determine if pixels seen by the camera are occluded from the light.

**Stencil Shadows (Shadow Volumes):**
- A geometric technique that extrudes an object's silhouette away from the light source to form a volume; the stencil buffer is used to count volume surface entries and exits to determine shadowed regions.

**Silhouette:**
- The set of edges in a mesh that separate triangles facing toward the light source from those facing away, forming the boundary used to generate the shadow volume.

**Z-Fail Algorithm:**
- A robust method for rendering stencil shadows (also known as "Carmack's Reverse") that counts shadow volume caps and faces behind the visible surface to handle cases where the camera is inside the shadow volume.

**Near-Clip Volume:**
- A pyramidal volume formed by the light source and the view frustum's near rectangle, used to optimize the rendering of shadow volume caps.

---

## Formulas

**Infinite Projection Matrix ($M_{infinite}$)**
- **Formula:** Maps $f \to \infty$. $M_{33} = -1$ (or $\epsilon - 1$ for precision).
- **Meaning:** Allows shadow volumes to be extruded to infinity without being clipped by the far plane.
- **Use in graphics:** Essential for robust stencil shadows to prevent "far cap" artifacts.

**Silhouette Normal**
- **Formula:** $N = (V_{i_2} - V_{i_1}) \times (V_{i_3} - V_{i_1})$
- **Meaning:** Calculates the face normal to determine if a triangle faces the light ($N \cdot L > 0$).
- **Use in graphics:** Identifying silhouette edges for extrusion.

**Shadow Volume Extrusion (Point Light)**
- **Formula:** $V' = V - L$ (Homogeneous: $V' = V_w L + \langle V_x - L_x, \dots \rangle$)
- **Meaning:** Projects a silhouette vertex away from the light position $L$ to infinity.
- **Use in graphics:** Constructing the geometry of the shadow volume.

---

## Practical Use

**Dynamic Lighting**
- Using **Stencil Shadows** to create hard, accurate shadows for moving objects and lights in a scene, such as characters carrying flashlights.

**Self-Shadowing Correction**
- Applying **Polygon Offset** (slope-scaled depth bias) during shadow mapping to prevent "shadow acne" caused by depth buffer quantization.

**Optimization**
- Using the **Scissor Test** to restrict shadow volume rendering to the screen-space bounding box of a light's influence (e.g., a point light's radius).
