# Chapter 7: Lighting and Shading

---

## Main Idea

This chapter explains the mathematical models used to simulate the interaction of light with surfaces in 3D graphics. It progresses from basic approximations, such as standard diffuse and specular reflection models (Gouraud and Blinn-Phong), to more advanced techniques like bump mapping and physically based rendering using Bidirectional Reflectance Distribution Functions (BRDFs) and microfacet theory.


---

## Keywords

**Illumination vs. Shading:**
- Illumination determines the light reaching a surface, while shading determines the light reflected toward the viewer.

**RGB Color:**
- A system representing color as triplets of red, green, and blue components, used to model both spectral composition and light intensity.

**Bidirectional Reflectance Distribution Function (BRDF):**
- A function $\rho(V, L)$ that defines the ratio of reflected radiance to incident irradiance, characterizing how a material reflects light.

**Bump Mapping:**
- A technique that perturbs surface normal vectors using a texture map (height or normal map) to simulate fine surface details without increasing geometric complexity.

**Tangent Space:**
- A local coordinate system aligned to a surface's tangent plane, used for performing lighting calculations relative to the surface orientation, particularly in bump mapping.

**Microfacet Theory:**
- A physical reflection model that treats a rough surface as a collection of microscopic perfect reflectors (microfacets), used to derive realistic specular highlights.

---

## Formulas

**Diffuse Reflection (Lambertian)**
- **Formula:** $\mathcal{K}_{diffuse} = \mathcal{D}\mathcal{A} + \mathcal{D}\sum_{i=1}^{n}\mathcal{C}_{i}\max\{N\cdot L_{i}, 0\}$
- **Meaning:** Calculates matte reflection based on the angle between the light and surface normal.
- **Use in graphics:** Simulating non-shiny surfaces like chalk or paper.

**Blinn-Phong Specular Reflection**
- **Formula:** $\mathcal{K}_{specular} = \mathcal{S}\sum_{i=1}^{n}\mathcal{C}_{i}\max\{N\cdot H_{i}, 0\}^{m}(N\cdot L_{i} > 0)$
- **Meaning:** Approximates shiny highlights using the halfway vector $H$ and a specular exponent $m$.
- **Use in graphics:** Simulating shiny surfaces like plastic or polished metal efficiently.

**Spot Light Attenuation**
- **Formula:** $\mathcal{C} = \frac{\max\{-R\cdot L, 0\}^{p}}{k_{c} + k_{l}d + k_{q}d^{2}}\mathcal{C}_{0}$
- **Meaning:** Determines light intensity based on distance $d$ and angular falloff $p$ from the spot direction $R$.
- **Use in graphics:** Creating focused light sources like flashlights or stage lights.

**Cook-Torrance Specular BRDF**
- **Formula:** $\rho_{s}(V,L) = \frac{\mathcal{F}(V,L)D(V,L)G(V,L)}{\pi(N\cdot V)(N\cdot L)}$
- **Meaning:** A physically based model combining Fresnel effects ($F$), microfacet distribution ($D$), and geometric self-shadowing ($G$).
- **Use in graphics:** High-fidelity rendering of materials like metal and rough surfaces.

---

## Practical Use

**Normal Mapping**
- Using **Tangent Space** and **Bump Maps** to alter surface normals per-pixel, creating the illusion of depth, bumps, and grooves on flat polygons.

**Texture Filtering**
- Using **Mipmaps** and **Bilinear/Trilinear Filtering** to reduce aliasing artifacts when textures are viewed at oblique angles or distances.

**Material Simulation**
- Implementing **Cook-Torrance Illumination** to accurately render materials with complex reflective properties, such as anisotropic brushed metals.
