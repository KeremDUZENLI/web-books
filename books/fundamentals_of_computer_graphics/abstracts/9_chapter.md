# Chapter 9: Signal Processing

---

## Main Idea

- This chapter explores the theory of **sampling and reconstruction**, explaining how continuous signals (like light or sound) are converted into discrete digital values and back again.

- It provides the mathematical foundation for preventing visual artifacts like **aliasing** (jaggies) through the use of convolution and filtering.

---

## Keywords

**Sampling & Reconstruction**

- **Sampling** converts a continuous function into a discrete sequence (pixels); **reconstruction** creates a continuous function from discrete samples.

**Aliasing**

- An artifact where high-frequency signals masquerade as low-frequency signals due to insufficient sampling rates, visible as "jaggies" or moiré patterns.

**Convolution**

- A mathematical operation that mixes two functions; in graphics, it typically involves computing a **weighted average** of pixels using a specific filter kernel.

**Nyquist Limit**

- The theoretical limit stating that a signal must be sampled at a rate greater than twice its highest frequency to be reconstructed perfectly.

---

## Formulas

**Discrete Convolution**

- **Formula:** $(a \star b)[i] = \sum_{j} a[j]b[i - j]$

- **Meaning:** Computes output sample $i$ by weighting input samples $b$ with filter weights $a$.

- **Use in graphics:** The core mechanism for **blurring, sharpening**, and resizing images.

**Sinc Function (Ideal Filter)**

- **Formula:** $\text{sinc}(x) = \frac{\sin \pi x}{\pi x}$

- **Meaning:** The Fourier transform of a box function (perfect low-pass filter).

- **Use in graphics:** The theoretically **perfect reconstruction filter**, though often approximated (e.g., by Lanczos) in practice due to infinite extent.

---

## Practical Use

**Image Resampling**

- Changing an image's size requires **resampling**; simply dropping or duplicating pixels creates artifacts, so a reconstruction filter is used to calculate new pixel values based on the old ones.

**Separable Filters**

- 2D convolution is computationally expensive ($O(r^2)$); **separable filters** allow the operation to be performed as two 1D passes (horizontal then vertical), reducing complexity to $O(r)$.

**Antialiasing**

- To prevent jaggies, images are often **low-pass filtered** (blurred slightly) before sampling to remove frequencies that exceed the Nyquist limit.
