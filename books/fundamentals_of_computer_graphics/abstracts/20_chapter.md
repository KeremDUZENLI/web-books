# Chapter 20: Light

---

## Main Idea

- This chapter establishes the physical framework for measuring light, known as **radiometry**, which is the basis for physically accurate rendering.

- It distinguishes between pure physical measurement (radiometry) and human-perceived measurement (**photometry**), explaining how light energy interacts with surfaces and propagates through space.

---

## Keywords

**Radiometry**

- The science of measuring electromagnetic radiation (light) in physical units like watts or joules.

**Photometry**

- The science of measuring light as perceived by the **human eye**, weighting physical energy by the eye's spectral sensitivity.

**Photon**

- A quantum of light carrying energy determined by its frequency or wavelength ($\lambda$).

**Radiance ($L$)**

- The fundamental quantity in graphics; it measures light energy flowing in a specific direction through a specific area. It is constant along a ray in a vacuum.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR-wcURRxc8lD92tD8jp1wuYzEPrNcSuq2jUW6z_pRmP493dIU0Ag22QGW9qMPINE_FdZBdPuVM4vwDvJ5OaBSf5iDBiESbR6-SY4KfIlY4EFRFIo0">

**BRDF (Bidirectional Reflectance Distribution Function)**

- A function $\rho$ that describes how a surface reflects light; it defines the ratio of outgoing radiance to incoming irradiance for a specific pair of directions.

---

## Formulas

**Photon Energy**

- **Formula:** $\displaystyle q = hf = \frac{hc}{\lambda}$

- **Meaning:** Relates a photon's energy $q$ to its frequency $f$ or wavelength $\lambda$ (where $h$ is Planck's constant).

- **Use in graphics:** Explains why "blue" photons carry more energy than "red" ones, relevant for spectral rendering.

**Irradiance ($H$ or $E$)**

- **Formula:** $\displaystyle H = \frac{d\Phi}{dA}$

- **Meaning:** The power per unit area arriving at a surface.

- **Use in graphics:** Used to calculate how much light hits a polygon; the input for shading equations like Lambert's Law.

**The Rendering Equation (Transport Equation)**

- **Formula:** $\displaystyle L\_s(\mathbf{k}\_o) = \int\_{\text{all } \mathbf{k}\_i} \rho(\mathbf{k}\_i, \mathbf{k}\_o) L\_f(\mathbf{k}\_i) \cos \theta\_i d\sigma\_i$

- **Meaning:** The outgoing radiance $L_s$ is the sum (integral) of all incoming light $L_f$ reflected by the surface $\rho$ over the hemisphere.

- **Use in graphics:** The "grand unifying equation" of rendering; global illumination algorithms (like path tracing) attempt to solve this integral.

**Luminance ($Y$)**

- **Formula:** $Y = 683 \int V(\lambda) L(\lambda) d\lambda$

- **Meaning:** The photometric brightness of light, calculated by integrating spectral radiance $L$ against the human eye's luminous efficiency curve $V$.

- **Use in graphics:** Used to convert physical light values into "brightness" for display on a monitor.

---

## Practical Use

**Conservation of Energy**

- In physically based rendering, a surface cannot reflect more energy than it receives. This constraint helps verify if a **BRDF** model is physically plausible.

**Solid Angle**

- Measured in **steradians (sr)**, this 3D angular measure explains why light intensity falls off with distance ($1/r^2$) for point lights but radiance remains constant along a ray.

**Spectral Rendering**

- While most renderers use RGB, highly accurate simulations (like for paint mixing or dispersion in diamonds) must simulate light at specific **wavelengths** (nm) rather than just three colors.
