# Chapter 29: Light Transport

---

## Main Idea

- This chapter formulates the rendering equation, an integral equation that characterizes the equilibrium distribution of light in a scene including reflection and transmission.
- It introduces the transport equation to link radiance between surfaces, establishes the measurement equation for image formation, and classifies light paths using a regular-expression notation (e.g., L(D|S)E).

---

## Keywords

**Rendering Equation:**

- An integral equation describing the radiance leaving a point as the sum of emitted light and reflected/transmitted light from all incoming directions.

**Transport Equation:**

- A relation stating that radiance is constant along a ray in empty space, linking the radiance leaving one surface to the radiance arriving at another.

**Impulse Scattering:**

- Scattering events where light is redirected into a single direction (like perfect mirror reflection or refraction) rather than a continuous distribution, mathematically represented by delta functions.

**Measurement Equation:**

- The equation relating the continuous field of radiance entering a camera to the discrete digital values recorded by sensor pixels.

**Path Notation:**

- A shorthand (e.g., LDS, LSDE) used to classify light paths based on the sequence of surface interactions (Light, Diffuse, Specular, Eye).

**Luminaire:**

- A term used to distinguish light sources (objects emitting light) from the abstract concept of light itself.

_(Add only the essential terms.)_

---

## Formulas

**The Rendering Equation (Surface Form)**

- **Formula:** $L(P,\omega_{o}) = L^{e}(P,\omega_{o}) + \int_{S^{2}} L(P,-\omega_{i}) f_{s}(P,\omega_{i},\omega_{o}) |\omega_{i} \cdot n_{P}| d\omega_{i}$

- **Meaning:** Radiance leaving $P$ is emitted radiance plus the integral of incoming radiance weighted by the BSDF and cosine term.

- **Use in graphics:** The fundamental basis for global illumination algorithms like path tracing.

**The Transport Equation**

- **Formula:** $L(P, -\omega_{i}) = L(R(P, \omega_{i}), -\omega_{i})$

- **Meaning:** Light arriving at $P$ from direction $\omega_{i}$ is the same as the light leaving the first visible surface $R(P, \omega_{i})$ in that direction.

- **Use in graphics:** Ray casting to find the source of incoming light.

**Measurement Equation**

- **Formula:** $m_{ij} = \int_{U \times S^2} M_{ij}(P, \omega) L^{in}(P, -\omega) |\omega \cdot n_P| dP d\omega$

- **Meaning:** A pixel value is the weighted integral of incident radiance over the pixel's area and solid angle.

- **Use in graphics:** Simulating camera sensors and anti-aliasing.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Path Tracing**

- A Monte Carlo algorithm that solves the rendering equation by tracing random paths from the eye to light sources to simulate complex lighting effects like color bleeding and soft shadows.

**Caustics**

- Bright, focused patterns of light caused by specular reflection or refraction (e.g., light through a glass of water) which are naturally described by specific light path sequences (like LSDE).
