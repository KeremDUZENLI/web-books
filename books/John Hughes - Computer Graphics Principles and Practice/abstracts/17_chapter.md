# Chapter 17: Image Representation and Manipulation

---

## Main Idea

- This chapter explores the fundamental structure of digital images as rectangular arrays of data, encompassing not just color but also depth, opacity, and other auxiliary channels.
- It details common storage formats, the mathematics of image compositing using alpha channels, and techniques like MIP mapping for efficient multi-resolution image representation.

---

## Keywords

**Image:**

- A rectangular array of pixel values, where each pixel may contain color, grayscale, or other data like depth or object IDs.

**Channel:**

- A specific component of the image data, such as the red color component, the alpha component, or a depth map.

**Compositing:**

- The process of combining two or more images into a single image, often using an alpha channel to determine transparency and occlusion.

**Alpha ($\alpha$):**

- A value representing the opacity or coverage of a pixel, where 0 is fully transparent and 1 is fully opaque.

**Premultiplied Alpha:**

- A storage convention where color components are stored already multiplied by the alpha value, simplifying compositing calculations.

**MIP Map:**

- A sequence of pre-calculated, optimized images used to increase rendering speed and reduce aliasing artifacts.

_(Add only the essential terms.)_

---

## Formulas

**Over Operator (Standard)**

- **Formula:** $\alpha = \alpha_U + (1 - \alpha_U)\alpha_V$, $C = \frac{\alpha_U C_U + (1 - \alpha_U)\alpha_V C_V}{\alpha}$

- **Meaning:** Combines a foreground image $U$ over a background image $V$.

- **Use in graphics:** Fundamental operation for layering images with transparency.

**Over Operator (Premultiplied)**

- **Formula:** $C_{out} = 1 \cdot C_U + (1 - \alpha_U) \cdot C_V$

- **Meaning:** Simplified compositing when colors are pre-multiplied by alpha.

- **Use in graphics:** Efficient hardware and software image blending.

**MIP Map Averaging**

- **Formula:** $\alpha = \frac{1}{2}(\alpha_L + \alpha_R)$, $C = \frac{\alpha_L C_L + \alpha_R C_R}{\alpha_L + \alpha_R}$

- **Meaning:** Correctly downsampling an image with alpha requires weighting colors by their respective alpha values.

- **Use in graphics:** Generating lower-resolution textures without color bleeding artifacts from transparent pixels.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Blue/Green Screening**

- A technique where actors are filmed against a solid colored background, which is then replaced by a different background image using compositing.

**Lossy vs. Lossless Compression**

- Distinguishing between formats that discard data to save space versus those that preserve exact pixel values.
