# Chapter 4: Ray Tracing

---

## Main Idea

- This chapter introduces **ray tracing**, an image-order rendering algorithm that generates 3D images by casting rays from the eye through pixels into the scene.

- It emphasizes that ray tracing elegantly handles complex global effects-like **shadows and reflections**-that are difficult for standard rasterization pipelines.

---

## Keywords

**Viewing Ray**

- A 3D line originating at the camera (eye) and passing through a specific pixel on the image plane. Finding what this ray hits determines the pixel's color.

**Object-Order vs. Image-Order**

- **Object-order** (rasterization) loops through objects to find pixels; **Image-order** (ray tracing) loops through pixels to find objects.

**Shadow Ray**

- A secondary ray cast from a surface intersection point toward a light source to check if the path is blocked (occluded), determining if the point is in shadow.

**Camera Frame**

- An orthonormal coordinate system ($\mathbf{u}, \mathbf{v}, \mathbf{w}$) derived from the eye position, gaze direction, and up vector, used to position the image plane and generate rays.

---

## Formulas

**Parametric Ray Equation**

- **Formula:** $\mathbf{p}(t) = \mathbf{e} + t\mathbf{d}$

- **Meaning:** Defines points $\mathbf{p}$ along a line starting at origin $\mathbf{e}$ with direction $\mathbf{d}$ scaled by parameter $t$.

- **Use in graphics:** The fundamental tool for generating viewing rays and solving intersection tests.

**Ray-Sphere Intersection**

- **Formula:** $(\mathbf{d} \cdot \mathbf{d})t^2 + 2\mathbf{d} \cdot (\mathbf{e} - \mathbf{c})t + (\mathbf{e} - \mathbf{c}) \cdot (\mathbf{e} - \mathbf{c}) - R^2 = 0$

- **Meaning:** A quadratic equation solving for $t$ where a ray intersects a sphere of center $\mathbf{c}$ and radius $R$.

- **Use in graphics:** The simplest mathematical primitive intersection, used for basic rendering and bounding volumes.

**Blinn-Phong Shading**

- **Formula:** $L = k_d I \max(0, \mathbf{n} \cdot \mathbf{l}) + k_s I \max(0, \mathbf{n} \cdot \mathbf{h})^p$

- **Meaning:** Combines diffuse shading (dot product of normal $\mathbf{n}$ and light $\mathbf{l}$) with a specular highlight based on the halfway vector $\mathbf{h}$.

- **Use in graphics:** The standard model for rendering shiny surfaces with highlights.

---

## Practical Use

**Recursion**

- Ray tracing easily handles **specular reflections** (mirrors) by recursively spawning a new reflection ray from the hit point and adding the result to the current pixel color.

**Visual Debugging**

- A common debugging strategy in ray tracing is visualizing data directly on the image; for example, mapping **surface normals** to RGB colors ($x \to R, y \to G, z \to B$) to verify geometry orientation.

**Epsilon Offsets**

- When casting secondary rays (like shadow rays), a tiny value ($\epsilon$) is added to the starting position to prevent **"shadow acne,"** where a ray incorrectly intersects the surface it just started from due to floating-point precision errors.

**Polymorphism in Code**

- Ray tracers are typically architected using an abstract **Surface class** with a virtual `hit` function. This allows the renderer to treat spheres, triangles, and groups of objects uniformly.
