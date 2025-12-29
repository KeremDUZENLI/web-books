# Chapter 19: Enlarging and Shrinking Images

---

## Main Idea

- This chapter applies signal processing theory to the practical task of image resizing, treating images as sampled continuous functions.
- It explains how to minimize artifacts like aliasing and ringing through proper reconstruction and filtering techniques, such as convolution with sinc or cubic spline filters.

---

## Keywords

**Reconstruction:**

- The process of recovering a continuous function from a set of discrete samples, ideally using a sinc filter for band-limited signals.

**Resampling:**

- Evaluating a reconstructed continuous signal at new sample locations to change the resolution of an image.

**Aliasing:**

- Visual artifacts that occur when high-frequency signal components are undersampled and appear as low-frequency noise.

**Separable Filter:**

- A two-dimensional filter that can be applied efficiently as two one-dimensional passes rather than a single 2D convolution.

**Unrippling:**

- A technique to reduce ringing artifacts near image edges by normalizing the weighted sum of filter coefficients.

_(Add only the essential terms.)_

---

## Formulas

**Ideal Reconstruction**

- **Formula:** $f(x) = \sum_{i=-\infty}^{\infty} y_{i} \text{sinc}(x-i)$

- **Meaning:** Defines the continuous value of a signal at any point $x$ based on discrete samples $y_i$.

- **Use in graphics:** Theoretically perfect image upscaling.

**Sinc Function**

- **Formula:** $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$

- **Meaning:** The impulse response of an ideal low-pass filter (box function in frequency domain).

- **Use in graphics:** The core function for band-limited reconstruction and resampling.

**Scaling Down (Band-limiting)**

- **Formula:** $filter(x) = \frac{K}{N} \text{sinc}(\frac{K}{N}x)$

- **Meaning:** A widened sinc filter used when shrinking images to remove high frequencies before sampling.

- **Use in graphics:** Preventing aliasing when downscaling images.

**Mitchell-Netravali Filter**

- **Formula:** $f(x) = \frac{1}{6} \dots$ (Piecewise cubic polynomial)

- **Meaning:** A practical compromise between B-spline and Catmull-Rom filters.

- **Use in graphics:** Standard high-quality resampling filter in rendering software.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Separable Convolution**

- Optimizing the filtering of an $N \times N$ image with a $K \times K$ filter from $O(N^2 K^2)$ operations down to $O(N^2 K)$ by processing rows and columns independently.

**Edge Handling**

- Strategies such as "extend by constants" or "extend by reflection" used to define pixel values outside the image boundaries during convolution.
