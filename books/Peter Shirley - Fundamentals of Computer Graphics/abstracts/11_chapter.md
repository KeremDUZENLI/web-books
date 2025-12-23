# Chapter 11: Texture Mapping

---

## Main Idea

- This chapter explains **texture mapping** as a method to add complex surface appearance (like color patterns or roughness) without increasing geometric complexity.

- It covers 2D and 3D textures, procedural generation, and advanced effects like **bump mapping** and **shadow mapping** that modify normals or visibility.

---

## Keywords

**Texture Coordinates ($u, v$)**

- The 2D coordinates assigned to vertices that map a location in a texture image to a point on a 3D geometry surface.

**Solid Texture (3D Texture)**

- A texture defined by a function of 3D spatial position $(x, y, z)$ rather than a 2D image; ideal for objects that appear "carved" like wood or marble.

**Perlin Noise**

- A procedural "solid noise" function used to generate natural-looking, non-repeating textures like clouds, fire, or marble without storing images.

**Bump Mapping**

- A technique that modifies **surface normals** based on a texture to create the illusion of depth and detail (wrinkles, bumps) without changing actual geometry.

**Environment Map (Cube Map)**

- A representation of the background scene using six textures arranged as a cube, used to simulate **reflections** on shiny objects efficiently.

---

## Formulas

**Barycentric Interpolation**

- **Formula:** $u(\beta, \gamma) = u_a + \beta(u_b - u_a) + \gamma(u_c - u_a)$

- **Meaning:** Interpolates texture coordinates across a triangle based on vertex values.

- **Use in graphics:** The standard way to determine which part of a texture covers a specific pixel during rasterization.

**Perspective Correct Interpolation**

- **Formula:** Interpolate $u/w$, $v/w$, and $1/w$ linearly in screen space.

- **Meaning:** Corrects for the non-linear distortion of perspective projection.

- **Use in graphics:** Prevents textures from looking warped or "swimming" when applied to surfaces viewed at an angle.

**Reflection Vector**

- **Formula:** $\mathbf{r} = -\mathbf{v} + 2(\mathbf{v} \cdot \mathbf{n})\mathbf{n}$

- **Meaning:** Calculates the reflection direction $\mathbf{r}$ given view vector $\mathbf{v}$ and normal $\mathbf{n}$.

- **Use in graphics:** Used to look up the correct color in an **environment map**.

---

## Practical Use

**Displacement Mapping**

- Unlike bump mapping, this technique physically moves vertices based on a texture value, allowing for real geometric detail that affects silhouettes and casting shadows.

**Shadow Mapping**

- Renders the scene from the light's perspective to a depth texture; this map is checked during the final render to see if a pixel is occluded from the light source.

**Mip-mapping**

- A technique using pre-calculated, lower-resolution versions of a texture to prevent aliasing (visual noise) when objects are viewed from a distance.
