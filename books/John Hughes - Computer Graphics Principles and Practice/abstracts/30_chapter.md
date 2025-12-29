# Chapter 30: Probability and Monte Carlo Integration

---

## Main Idea

- This chapter provides a rigorous foundation for the randomized integration techniques essential to modern rendering algorithms like path tracing.
- It covers discrete and continuum probability, random variables, probability density functions (PDFs), expected value, and variance, culminating in the derivation of Monte Carlo estimators and importance sampling strategies to efficiently solve the rendering equation.

---

## Keywords

**Monte Carlo Integration:**

- A numerical method for estimating the value of an integral by averaging the results of evaluating the integrand at random sample points.

**Probability Density Function (PDF):**

- A function describing the relative likelihood of a continuous random variable taking on a specific value; its integral over a region gives the probability of the variable falling within that region.

**Expected Value ($E[X]$):**

- The long-run average value of a random variable, which for a continuous variable is the integral of the value weighted by its PDF.

**Variance:**

- A measure of the dispersion or "spread" of a random variable's values around its mean; in Monte Carlo integration, variance corresponds to the noise in the estimated image.

**Importance Sampling:**

- A variance-reduction technique that involves concentrating random samples in regions where the integrand is large, thereby producing a more accurate estimate with fewer samples.

**Unbiased Estimator:**

- A statistical estimator whose expected value is exactly equal to the true value of the parameter being estimated.

_(Add only the essential terms.)_

---

## Formulas

**Monte Carlo Estimator (Basic)**

- **Formula:** $E[(b-a)f(X)] = \int_a^b f(x) dx$

- **Meaning:** If $X$ is uniformly distributed on $[a,b]$, the average of $(b-a)f(X)$ converges to the integral of $f$.

- **Use in graphics:** Computing light transport integrals by firing random rays.

**Importance Sampled Estimator**

- **Formula:** $E\left[\frac{f(X)}{g(X)}\right] = \int_a^b f(x) dx$

- **Meaning:** If samples $X$ are drawn from a distribution $g(x)$, weighing the result by $1/g(X)$ yields the correct integral.

- **Use in graphics:** Reducing noise by sampling according to BRDFs or light sources.

**Variance of a Random Variable**

- **Formula:** $Var[X] = E[(X - E[X])^2] = E[X^2] - E[X]^2$

- **Meaning:** Quantifies the error or noise in an estimator.

- **Use in graphics:** Analyzing convergence rates of rendering algorithms.

**PDF Transformation Rule**

- **Formula:** $p_Y(t) = p_X(Y^{-1}(t)) \left| \frac{d}{dt} Y^{-1}(t) \right|$

- **Meaning:** Relates the PDF of a transformed random variable to the original PDF via the Jacobian of the inverse transformation.

- **Use in graphics:** Generating samples on surfaces (like spheres) from uniform random numbers.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Path Tracing**

- Using Monte Carlo integration to solve the rendering equation by recursively tracing paths of light rays through a scene.

**BRDF Sampling**

- Generating ray directions proportional to the material's reflectance function (e.g., cosine-weighted sampling for diffuse surfaces) to efficiently estimate reflected light.
