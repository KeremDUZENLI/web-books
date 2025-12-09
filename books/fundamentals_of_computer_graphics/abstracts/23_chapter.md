# Chapter 23: Tone Reproduction

---

## Main Idea

- This chapter addresses the problem of **tone reproduction**, which maps high dynamic range (HDR) images matched to the human visual system to the limited capabilities of standard displays.
- It explores various algorithms classified as **global or local**-that compress luminance while preserving essential visual details like contrast and brightness.

---

## Keywords

**High Dynamic Range (HDR)**

- Images that represent the full range of illumination in the real world (up to 100,000:1), far exceeding the 2 log units of typical monitors.

**Tone Reproduction (Tonemapping)**

- The process of compressing the range of pixel values in an image to make it displayable on **low dynamic range** devices while maintaining visual realism.

**Global Operator**

- A tonemapping algorithm that applies the **same transformation function** to every pixel in the image, often based on global statistics like the geometric average.

**Local Operator**

- An algorithm where the compression function varies per pixel based on its **local neighborhood**, offering better contrast but risking artifacts like halos.

**Haloing**

- A visual artifact common in local operators where bright areas cause surrounding dark areas to become unnaturally dark (or vice versa) due to filter size mismatches.

---

## Formulas

**Geometric Average Log-Luminance**

- **Formula:** $\bar{L}_v = \exp \left(\frac{1}{N} \sum_{x,y} \log(\delta + L_v(x, y))\right)$
- \(\bar{L}_v = \exp\!\left(\frac{1}{N}\sum_{x,y}\log(\delta + L_v(x,y))\right)\)

- **Meaning:** Computes the log-average luminance of the scene to establish a "key" value for the image.

- **Use in graphics:** Used to center the mapping function, determining which values are mapped to the middle gray of the display.

**Sigmoidal Compression**

- **Formula:** $L_d(x, y) = \frac{L_v(x, y)}{L_v(x, y) + f(x, y)^n}$

- **Meaning:** Compresses input luminance $L_v$ into a displayable range $[0, 1]$ using an S-shaped curve defined by semi-saturation constant $f$.

- **Use in graphics:** A standard function for tonemapping that preserves contrast in dark areas while compressing highlights.

---

## Practical Use

**Night Tonemapping**

- Simulates **scotopic vision** (low-light perception) by reducing contrast, desaturating colors, shifting hues toward blue, and reducing visual acuity.

**Color Transfer**

- A technique to apply the color mood of one image to another by matching the mean and standard deviation of pixel values in a decorrelated color space.

**Scale Selection**

- To avoid halo artifacts in local operators, algorithms calculate a stack of blurred images and select the largest filter size that does not overlap with sharp contrast edges.
