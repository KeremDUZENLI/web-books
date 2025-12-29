# Chapter 10: Surface Shading

---

## Main Idea

- This chapter introduces heuristic methods to make objects appear to have **volume** by "painting" surfaces with light.

- It covers fundamental models like **Lambertian** and **Phong** shading, which are standard in graphics libraries, as well as artistic techniques.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQP1kJDKlJP6Lyq9nvJfNQ1WpnnTKm7dNO3n6X7MrumBrjRj7ErbRyIvVCD0LuFQyJtGvFGVZPioS1ZpwvNth4-WaUjIXYgJvZt9FHfNzo4ZouGFsQ">

---

## Keywords

**Lambertian Shading**

- A model for **matte surfaces** (like paper) where the surface color is constant regardless of the viewing angle, dependent only on the light angle.

**Phong Shading**

- A model that adds **specular highlights** to diffuse shading to simulate shiny objects; the highlights move as the viewer moves.

**Ambient Shading**

- A constant color component added to the shading model to simulate indirect light, ensuring surfaces facing away from direct light are not completely black.

**Artistic Shading**

- Techniques designed to mimic human drawings, such as using **cool-to-warm** color shifts or drawing **silhouettes** to depict shape.

---

## Formulas

**Lambertian Reflection**

- **Formula:** $c = c_r c_l \max(0, \mathbf{n} \cdot \mathbf{l})$

- **Meaning:** Light intensity is proportional to the dot product of the surface normal $\mathbf{n}$ and the light direction $\mathbf{l}$.

- **Use in graphics:** The standard equation for rendering non-shiny surfaces.

**Phong Specular (Blinn-Phong)**

- **Formula:** $c = c_l (\mathbf{n} \cdot \mathbf{h})^p$

- **Meaning:** Calculates the highlight brightness using the **halfway vector** $\mathbf{h}$ and an exponent $p$ that controls shininess.

- **Use in graphics:** Creates the "shiny spot" on plastic or metallic-looking surfaces.

---

## Practical Use

**Vertex (Gouraud) Shading**

- To avoid a faceted, polygonal look, shading is calculated at the **vertices**, and the resulting colors are linearly interpolated across the triangle.

**Normal Interpolation**

- For high-quality highlights, **surface normals** are interpolated across the polygon, and the lighting equation is computed at every pixel (often called Phong interpolation).

**Silhouettes**

- Edges are drawn as silhouettes when the two triangles sharing the edge face in opposite directions relative to the viewer (one faces front, one faces back).
