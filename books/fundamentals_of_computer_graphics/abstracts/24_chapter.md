# Chapter 24: Global Illumination

---

## Main Idea

- This chapter introduces **global illumination**, algorithms that simulate how light bounces between surfaces (indirect lighting), rather than just travelling directly from light sources to objects.
- It details two primary stochastic methods: **particle tracing** (shooting light from sources) and **path tracing** (gathering light from the eye), which are used to generate realistic images with soft shadows and color bleeding.

---

## Keywords

**Global Illumination**

- The simulation of all light interactions in a scene, specifically accounting for **indirect lighting** (mutual illumination) where surfaces reflect light onto other surfaces.

**Radiosity**

- A finite element approach that divides a scene into patches and solves a system of linear equations to determine the brightness of purely diffuse environments.

**Particle Tracing**

- A forward rendering method where "particles" of power are shot from light sources, bounce around the scene, and deposit energy into texture maps on surfaces.

**Path Tracing**

- An image-order probabilistic method that traces rays from the camera, scattering them off surfaces recursively until they hit a light source to solve the rendering equation.

---

## Formulas

**Lambertian Radiance**

- **Formula:** $L = \frac{\Phi}{\pi A}$

- **Meaning:** The radiance $L$ of a diffuse surface is directly proportional to the incident power $\Phi$ divided by the surface area $A$.

- **Use in graphics:** Used in **particle tracing** to accumulate light energy into texture maps.

**Direct Lighting Estimator**

- **Formula:** $L_s \approx \frac{L_e \rho \cos \theta_i \cos \theta' A}{d^2}$

- **Meaning:** Estimates the light reflected from a surface by picking a random point on an area light source (Monte Carlo integration).

- **Use in graphics:** The standard way to calculate **soft shadows** and direct lighting in ray tracers.

---

## Practical Use

**Separating Direct and Indirect**

- Efficient renderers often compute direct lighting (shadows) and indirect lighting (bounces) separately; indirect light changes slowly and can be sampled coarsely, while shadows need high-resolution sampling.

**Soft Shadows**

- By sending shadow rays to random points on an **area light** (rather than a single point center), renderers produce realistic shadows with penumbrae (soft edges).

**Ambient Term**

- The constant "ambient" color used in basic shading is essentially a crude approximation of global illumination; replacing it with computed indirect light vastly improves realism.
