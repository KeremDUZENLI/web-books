# Chapter 14: Sampling

---

## Main Idea

- This chapter establishes the mathematical framework for **integration** and **continuous probability** required to solve complex rendering equations.

- It focuses on **Monte Carlo integration**, a statistical method used to approximate integrals (like light transport) by averaging random samples, which is the engine behind advanced ray tracing effects.

---

## Keywords

**Probability Density Function (PDF)**

- A function $p(x)$ that describes the relative likelihood of a random variable taking a specific value; knowing this is crucial for weighting samples correctly.

**Monte Carlo Integration**

- A numerical technique to estimate the value of an integral by averaging the results of many random samples; it is robust but introduces **noise** (variance).

**Importance Sampling**

- A variance reduction technique where samples are distributed according to a PDF that matches the shape of the function being integrated (placing more samples where "it counts").

**Stratified Sampling**

- A technique that subdivides the sampling domain into distinct regions (strata) and places samples in each, preventing clustering and reducing noise compared to pure random sampling.

**Rejection Method**

- A way to generate random points within a complex shape by sampling a simple bounding box and "rejecting" points that fall outside the target shape.

---

## Formulas

**Monte Carlo Estimator**

- **Formula:** $\int g(x) d\mu \approx \frac{1}{N} \sum_{i=1}^N \frac{g(x_i)}{p(x_i)}$

- **Meaning:** Approximates an integral by averaging $N$ samples $g(x_i)$, weighted by the inverse of their probability $p(x_i)$.

- **Use in graphics:** The core formula for path tracing, used to compute pixel color by averaging many light paths.

**Variance**

- **Formula:** $V(x) = E(x^2) - [E(x)]^2$

- **Meaning:** Measures the "spread" or noise in the estimator.

- **Use in graphics:** Graphics engineers try to minimize variance to reduce the visual "graininess" in ray-traced images.

**Function Inversion (CDF Method)**

- **Formula:** $\alpha_i = P^{-1}(\xi_i)$

- **Meaning:** Uses the inverse of the Cumulative Distribution Function ($P$) to transform a uniform random number $\xi$ into a specific distribution.

- **Use in graphics:** Used to generate random points on specific shapes (like lights) or directions (like cosine-weighted hemispheres).

---

## Practical Use

**Sampling a Disk**

- To pick random points uniformly on a disk (e.g., for depth of field), you cannot just pick a random angle and radius, or points will cluster at the center. You must map the radius using a square root ($\sqrt{\xi}$) to preserve area density.

**Direct Lighting optimization**

- Instead of sending shadow rays in random directions, **importance sampling** sends rays specifically toward light sources, significantly reducing the noise in the final image with fewer samples.

**Quasi-Monte Carlo**

- Replacing purely random numbers with **low-discrepancy sequences** (deterministic patterns that cover space evenly) to converge to a clean image faster than standard Monte Carlo.
