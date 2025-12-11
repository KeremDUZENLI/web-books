# Chapter 25: Reflection Models

---

## Main Idea

- This chapter focuses on mathematical models (BRDFs) that capture the visual properties of real-world materials, distinguishing between **metals, dielectrics, and layered surfaces**.

- It introduces sophisticated empirical models that enforce physical laws like **energy conservation and reciprocity** to create realistic glossy and anisotropic finishes.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQwR98nyK6sM8g2brNnlH5iEjLS7HiXxbkxE4BkPSpuglpV1UG0jctbN7BiZHjJMGKivZ8W8_gULBENEjYNPwe7DZHT4TOC1w0NVJCGuI1B7Xtzomw">

---

## Keywords

**Fresnel Equations**

- Physical laws describing how the amount of light reflected from a surface increases as the **incident angle** becomes more grazing (shallow).

**Microfacets**

- A geometric model for **rough surfaces** (like brushed metal) where the surface is treated as a collection of tiny, microscopic mirrors facing different directions.

**Dielectrics vs. Metals**

- **Dielectrics** (glass, plastic) transmit and refract light; **metals** absorb transmitted light immediately, meaning they only reflect.

**Anisotropy**

- A surface property where reflection depends on the rotation around the surface normal (e.g., **brushed metal** or hair), causing highlights to stretch.

---

## Formulas

**Schlick Approximation**

- **Formula:** $R(\theta) = R_0 + (1 - R_0)(1 - \cos \theta)^5$

- **Meaning:** A computationally efficient approximation of the complex Fresnel equations.

- **Use in graphics:** Calculates the increase in reflectivity at glancing angles for transparent coatings and wet surfaces.

**Coupled Diffuse Term**

- **Formula:** $\ k = \frac{21}{20\pi(1 - R_0)}$

- **Meaning:** A scaling factor for the diffuse component ensuring that energy is conserved when adding a specular layer.

- **Use in graphics:** Ensures that as a surface gets shinier (more specular reflection), the underlying color (diffuse reflection) naturally gets darker.

---

## Practical Use

**Layered Materials**

- Real-world materials like **polished wood or skin** are modeled as a diffuse substrate covered by a specular coating; light reflects off the coat or refracts into the diffuse layer.

**Importance Sampling BRDFs**

- To efficiently render complex materials in a path tracer, random samples must be generated according to the **Probability Density Function (PDF)** that matches the shape of the BRDF lobe.

**Reciprocity**

- A physical constraint requiring that $\rho(\mathbf{k}_i, \mathbf{k}_o) = \rho(\mathbf{k}_o, \mathbf{k}_i)$; enforcing this prevents rendering artifacts when swapping light and eye positions.
