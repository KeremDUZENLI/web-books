# Chapter 21: Color

---

## Main Idea

- This chapter bridges physics and psychology, explaining that **color** is a sensation created by the human brain in response to light spectra, not an intrinsic physical property.

- It introduces **Colorimetry**, the science of quantifying color, and establishes standard systems (like CIE XYZ and CIELAB) to ensure colors look consistent across different devices.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR0GqwXaMM_sKZXq0RehUM1JTfvEi8B2KUouabBWUdIrmxR4q8vxkFph1TCCbo85W0ckozRNITWpDlLchq58nr5WO7A-RsDpz-F6H5eYjkyrK3crqc">

---

## Keywords

**Metamerism**

- The phenomenon where two different spectral power distributions (light mixtures) produce the **same perceived color**; this is the fundamental principle allowing RGB monitors to work.

<img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRCqPcBJAD1kRuE6lfYZ3-v70rkBAkU1ZFSPXMpjNK72z4tTHGCqUSphVeJ0f9P1PsMImXoJytr7wsBTdQUbHSdxuVlv5pi1OpyOvCRI4S_9wI6awU">

**Tristimulus Values (X, Y, Z)**

- Three numbers obtained by integrating a light spectrum against the standard observer functions; they uniquely identify a perceived color in a device-independent way.

**CIE XYZ**

- A standard **color space** defined by the CIE (Commission Internationale de l'Éclairage) using "imaginary" primaries to describe all visible colors using positive numbers.

**Chromaticity Diagram**

- A 2D plot (the famous horseshoe shape) derived from XYZ by removing luminance (brightness), showing only hue and saturation.

**CIELAB ($L^*a^*b^*$)**

- A **perceptually uniform** color space where the Euclidean distance between two points corresponds roughly to the perceived difference between those colors.

---

## Formulas

**Tristimulus Integration**

- **Formula:** $X = \int \Phi(\lambda) \bar{x}(\lambda) d\lambda$

- **Meaning:** Calculates a color coordinate ($X$) by summing the light spectrum $\Phi$ weighted by the standard observer sensitivity function $\bar{x}$.

- **Use in graphics:** The standard way to convert physical spectral data into usable color numbers.

**Chromaticity Coordinates**

- **Formula:** $\ x = \frac{X}{X + Y + Z}, \quad y = \frac{Y}{X + Y + Z}$

- **Meaning:** Normalizes the tristimulus values to separate **color** ($x, y$) from **brightness** ($Y$).

- **Use in graphics:** Used to plot color gamuts (the range of colors a monitor can display).

**Color Difference ($\Delta E$)**

- **Formula:** $\ \Delta E_{ab}^* = \sqrt{(\Delta L^*)^2 + (\Delta a^*)^2 + (\Delta b^*)^2}$

- **Meaning:** Calculates the "distance" between two colors in Lab space.

- **Use in graphics:** Used to determine if two colors are visually distinguishable or to optimize color palettes.

**Von Kries Adaptation**

- **Formula:** $L_a = \alpha L, \quad M_a = \beta M, \quad S_a = \gamma S$

- **Meaning:** Scales the response of cone cells independently to account for the color of the lighting (e.g., tungsten vs. daylight).

- **Use in graphics:** The mathematical basis for **white balancing** in cameras and rendering.

---

## Practical Use

**White Balancing**

- Because humans adapt to lighting (a white paper looks white under blue sky or yellow bulbs), graphics engines use **chromatic adaptation** transforms to simulate this consistency.

**Gamut Mapping**

- Not all devices can display all colors. The **chromaticity diagram** allows engineers to visualize which colors fall outside a monitor's "triangle" (gamut) and map them to displayable colors.

**Color Correction**

- **CIELAB** separates lightness ($L$) from color ($a, b$), allowing image editors to adjust contrast without shifting hues, which is difficult to do in RGB.
