# Chapter 26: Light

---

## Main Idea

- This chapter establishes the physical and mathematical foundations of light for computer graphics, moving from the wave and particle nature of electromagnetic radiation to the geometric optics used in rendering.
- It defines core radiometric quantities such as radiance and irradiance, explains how light interacts with materials via reflection and refraction (Snell's Law, Fresnel equations), and introduces the Bidirectional Reflectance Distribution Function (BRDF).

---

## Keywords

**Radiometry:**

- The science of measuring electromagnetic radiation, providing the mathematical framework (flux, irradiance, radiance) for physically based rendering.

**Radiance ($L$):**

- The fundamental radiometric quantity representing power per unit projected area per unit solid angle; it is constant along rays in empty space.

**Irradiance ($E$):**

- The power per unit area arriving at a surface from all directions, calculated by integrating radiance weighted by the cosine of the incident angle.

**BRDF ($f_r$):**

- The Bidirectional Reflectance Distribution Function, quantifying how light from an incoming direction is scattered into an outgoing direction.

**Solid Angle ($\Omega$):**

- A measure of the field of view covered by an object from a specific point, measured in steradians (sr) on the unit sphere.

**Fresnel Equations:**

- A set of formulas describing the fraction of light reflected and transmitted at an interface between two media with different refractive indices.

_(Add only the essential terms.)_

---

## Formulas

**Snell's Law**

- **Formula:** $n_1 \sin \theta_1 = n_2 \sin \theta_2$

- **Meaning:** Describes the change in direction (bending) of a light ray passing between media of refractive indices $n_1$ and $n_2$.

- **Use in graphics:** Ray tracing transparency and refraction effects (e.g., glass, water).

**Lambertian Radiance**

- **Formula:** $L = \frac{\Phi}{\pi A}$

- **Meaning:** The constant radiance emitted by a diffuse surface of area $A$ emitting total power $\Phi$.

- **Use in graphics:** Calculating the brightness of diffuse area light sources.

**Irradiance Integral**

- **Formula:** $E(P, \mathbf{n}) = \int_{\Omega} L(P, -\omega) (\omega \cdot \mathbf{n}) d\omega$

- **Meaning:** Total light energy arriving at a point is the integral of incoming radiance weighted by the cosine of the incidence angle.

- **Use in graphics:** Shading surfaces by summing contributions from light sources.

**Fresnel Reflectance (Approximation)**

- **Formula:** $R_F \approx R_0 + (1 - R_0)(1 - \cos\theta)^5$

- **Meaning:** The fraction of light reflected increases as the angle of incidence becomes more grazing (Schlick's approximation).

- **Use in graphics:** Creating realistic material reflections that vary with view angle.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Physically Based Rendering (PBR)**

- Using radiometric units and laws (like conservation of energy and Fresnel effects) to generate photorealistic images that accurately simulate light transport.

**Gonioreflectometry**

- The process of measuring the BRDF of real-world materials using a movable light source and sensor to capture how they reflect light.
