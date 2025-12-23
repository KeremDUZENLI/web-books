# Chapter 8: The Graphics Pipeline

---

## Main Idea

- This chapter describes **object-order rendering** (rasterization), where the system loops through geometric objects to find which pixels they cover, rather than the reverse.

- It details the four main stages: **vertex processing**, **rasterization**, **fragment processing**, and **fragment blending**, which efficiently transform 3D primitives into a 2D image.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQVFOjRC1oVpSvQW4DdHGnndYZcwye12Um5WFkTMNTpIryGf-fuSgP6L3Dr_rmE3sSJMNVsg5xJ1hcXXGwaJpbWAv22oQd1h0hxjlVlBrZVlnB9Nfw">

---

## Keywords

**Rasterization**

- The process of enumerating the **pixels covered by a primitive** (like a triangle) and interpolating values (attributes) across it.

**Z-Buffer (Depth Buffer)**

- A buffer that stores the distance to the closest surface for each pixel; it is used to determine visibility by discarding fragments that are farther away than the current stored value.

**Gouraud Shading**

- A technique where lighting is computed **per-vertex**, and the resulting colors are interpolated linearly across the primitive's face.

**Clipping**

- The operation of removing portions of geometry that lie outside the view volume, ensuring that objects behind the camera or off-screen are not rasterized.

---

## Formulas

**Implicit Line Equation**

- **Formula:** $f(x, y) = (y_0 - y_1)x + (x_1 - x_0)y + x_0y_1 - x_1y_0 = 0$

- **Meaning:** Defines a line passing through points $(x_0, y_0)$ and $(x_1, y_1)$ for $f=0$.

- **Use in graphics:** The foundation of the **midpoint algorithm**, which draws lines efficiently by checking if the midpoint between candidate pixels is above or below the line.

**Attribute Interpolation**

- **Formula:** $\mathbf{c} = \alpha \mathbf{c}_0 + \beta \mathbf{c}_1 + \gamma \mathbf{c}_2$

- **Meaning:** Calculates a value $\mathbf{c}$ at a pixel using barycentric coordinates $(\alpha, \beta, \gamma)$ and vertex values $\mathbf{c}_i$.

- **Use in graphics:** Used to smoothly blend colors, depths, normals, and texture coordinates across a triangle during rasterization.

---

## Practical Use

**Efficiency**

- The pipeline architecture allows for efficient handling of large scenes by visiting each piece of geometry only once (object-order), which optimizes memory access compared to ray tracing's random access.

**Antialiasing**

- Techniques like **supersampling** or **multisampling** reduce visual artifacts ("jaggies") by averaging color or visibility over the area of a pixel rather than taking a single point sample.

**Culling**

- **View volume culling** and **backface culling** discard invisible geometry early in the pipeline to save processing power.

**Painter's Algorithm**

- An alternative to Z-buffering where objects are drawn back-to-front; it is generally avoided because it requires sorting and fails on intersecting triangles or cyclic overlaps.
