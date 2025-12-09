# Chapter 3: Raster Images

---

## Main Idea

- This chapter explains **raster images** as device-independent 2D arrays of pixels used to store and process visual data.

- It details how pixel values map to physical light intensities on displays and introduces **compositing**, which is essential for layering images.

---

## Keywords

**Pixel**

- Short for "picture element," it is a point sample representing the color or intensity of an image at a specific grid location.

**Raster Image**

- A rectangular array of pixels that stores image data, serving as the standard format for most input/output devices like monitors and cameras.

**Gamma Correction**

- A non-linear operation used to code luminance into pixel values, counteracting the non-linear response of display monitors to inputs.

**Alpha Channel**

- An additional channel (alongside RGB) that stores transparency or coverage information, enabling images to be layered over one another.

---

## Formulas

**Gamma Display**

- **Formula:** $\text{Displayed Intensity} = (\text{Maximum Intensity}) \cdot a^\gamma$

- **Meaning:** Relates the input pixel value $a$ to the actual light intensity emitted by a monitor.

- **Use in graphics:** Used to ensure that displayed images match the intended brightness, correcting for monitor non-linearity.

**Alpha Compositing (Over Operator)**

- **Formula:** $\mathbf{c} = \alpha \mathbf{c}_f + (1 - \alpha) \mathbf{c}_b$

- **Meaning:** Blends a foreground color $\mathbf{c}_f$ over a background color $\mathbf{c}_b$ based on the alpha value $\alpha$.

- **Use in graphics:** Fundamental for transparency, digital compositing, and anti-aliasing edges.

---

## Practical Use

**High Dynamic Range (HDR)**

- Storing pixel values as floating-point numbers allows for a much wider range of light intensities than standard integers, preventing "clipping" in bright areas.

**Demosaicking**

- Digital cameras often record only one color per pixel (red, green, or blue); software must interpolate the missing colors to create a full image.

**Monitor Calibration**

- By finding the gamma value where a checkerboard pattern matches a solid gray patch, one can calibrate a display to show intensities correctly.
