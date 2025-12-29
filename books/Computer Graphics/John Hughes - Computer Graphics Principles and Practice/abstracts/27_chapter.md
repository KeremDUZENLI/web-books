# Chapter 27: Materials and Scattering

---

## Main Idea

- This chapter explores the modeling of light interaction with objects, focusing on surface scattering phenomena.
- It transitions from empirical models like Phong to physically based models (such as Cook-Torrance and Oren-Nayar) that account for microfacet geometry, energy conservation, and Fresnel effects, while also briefly addressing volumetric and subsurface scattering.

---

## Keywords

**Scattering:**

- The local interaction where light arriving at a surface is redirected into various outgoing directions.

**BSDF (Bidirectional Scattering Distribution Function):**

- A general function $f_s(\omega_i, \omega_o)$ describing the ratio of outgoing radiance to incident irradiance, encompassing both reflection (BRDF) and transmission (BTDF).

**Lambertian Reflection:**

- A type of diffuse scattering where the outgoing radiance is constant for all directions, independent of the viewing angle.

**Microfacet Theory:**

- A physical modeling approach that treats rough surfaces as collections of tiny, randomly oriented perfect mirrors to simulate glossy reflection.

**Fresnel Effect:**

- The physical phenomenon where the reflectance of a surface increases as the angle of incidence becomes more grazing, utilized in the Schlick approximation.

**Subsurface Scattering:**

- The transport of light within a translucent material (like skin or wax) where light enters at one point and exits at another, requiring a BSSRDF for accurate modeling.

_(Add only the essential terms.)_

---

## Formulas

**Schlick's Approximation (Fresnel)**

- **Formula:** $R_F(\theta_i) \approx R_F(0) + (1 - R_F(0))(1 - \cos \theta_i)^5$

- **Meaning:** Approximates the fraction of light reflected at a surface boundary based on angle and normal-incidence reflectance.

- **Use in graphics:** Efficiently rendering realistic metallic and dielectric highlights.

**Oren-Nayar Model (Simplified)**

- **Formula:** $L_r = \frac{\rho}{\pi} E_0 \cos(\theta_i) (A + B \max(0, \cos \phi) \sin \alpha \tan \beta)$

- **Meaning:** A diffuse reflection model that accounts for surface roughness, producing brighter edges than Lambertian shading.

- **Use in graphics:** Rendering rough matte surfaces like clay, moon dust, or fabric.

**Cook-Torrance Geometric Attenuation**

- **Formula:** $G = \min \left\{ 1, \frac{2(n \cdot h)(n \cdot v)}{v \cdot h}, \frac{2(n \cdot h)(n \cdot l)}{v \cdot h} \right\}$

- **Meaning:** Accounts for the masking and shadowing of microfacets by each other.

- **Use in graphics:** Physically based rendering of rough, shiny surfaces.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Appearance Modeling**

- Creating digital materials that match real-world observations by adjusting parameters like roughness, index of refraction, and albedo in physically based shaders.

**Global Illumination Approximation**

- Using Ambient Occlusion to simulate the darkening effect of nearby geometry, approximating the shadowing results of complex inter-reflection algorithms.
