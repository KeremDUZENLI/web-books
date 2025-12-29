# Chapter 18: Images and Signal Processing

---

## Main Idea

- This chapter treats images as signal functions and applies mathematical tools like convolution and the Fourier transform to understand and manipulate them.
- It focuses on the theoretical underpinnings of sampling and reconstruction to explain and mitigate artifacts such as aliasing in computer graphics.

---

## Keywords

**Aliasing:**

- The phenomenon where high-frequency signals masquerade as low-frequency signals after sampling, causing artifacts like jagged edges or backward-spinning wheels.

**Convolution:**

- A mathematical operation that integrates the product of two functions, one of which is flipped and shifted; used to model sensing, filtering, and reconstruction.

**Fourier Transform:**

- A linear operator that changes the representation of a function from the spatial domain to the frequency domain, decomposing it into a sum of sinusoids.

**Sinc Function:**

- The function $\text{sinc}(x) = \sin(\pi x)/(\pi x)$, which is the Fourier transform of a box function and serves as the ideal reconstruction filter for band-limited signals.

**Sampling Theorem (Shannon):**

- A fundamental result stating that a function band-limited at frequency $\omega_0$ can be perfectly reconstructed from samples taken at a frequency greater than $2\omega_0$.

**Band Limiting:**

- The process of removing frequency components above a certain threshold from a signal, typically to prevent aliasing before sampling.

_(Add only the essential terms.)_

---

## Formulas

**Convolution (1D Continuous)**

- **Formula:** $(f*g)(t) = \int_{-\infty}^{\infty} f(x)g(t-x)dx$

- **Meaning:** Measures the overlap of $f$ and a shifted $g$.

- **Use in graphics:** Filtering images and reconstructing continuous signals from pixels.

**Fourier Transform (1D)**

- **Formula:** $\mathcal{F}(f)(\omega) = \int_{-\infty}^{\infty} f(x) e_{\omega}(x) dx$

- **Meaning:** Decomposes a signal into its constituent frequencies.

- **Use in graphics:** Analyzing frequency content to determine sampling requirements.

**Sinc Function**

- **Formula:** $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$

- **Meaning:** The impulse response of an ideal low-pass filter.

- **Use in graphics:** Theoretically perfect reconstruction of sampled data.

**Sampling (Limit Definition)**

- **Formula:** Sample at $t_0 = \lim_{a\to 0} \frac{1}{2a} \int_{t_0-a}^{t_0+a} f(t) dt$

- **Meaning:** Modeling a sensor's measurement over an infinitesimally small interval.

- **Use in graphics:** Defining the discrete value of a continuous light field at a pixel.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Antialiasing**

- Applying a low-pass filter to a scene's light function before sampling it into pixels to reduce jagged edges.

**Image Resampling**

- Using reconstruction filters to interpolate pixel values when scaling images up or down.
