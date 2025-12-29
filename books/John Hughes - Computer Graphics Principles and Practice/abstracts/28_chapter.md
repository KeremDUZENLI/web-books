# Chapter 28: Color

---

## Main Idea

- This chapter distinguishes between the physical phenomenon of spectral power distributions and the perceptual sensation of color mediated by the human eye's rod and cone receptors.
- It establishes standard mathematical models for color description (CIE XYZ, chromaticity diagrams), explores device-dependent representations (RGB, CMY), and details the nonlinear encoding of intensity via gamma correction.

---

## Keywords

**Spectral Power Distribution (SPD):**

- A function describing the power of light at each wavelength in the visible spectrum.

**Metamers:**

- Different spectral power distributions that produce the identical physiological color response in a standard observer.

**Chromaticity:**

- An objective specification of the quality of a color regardless of its luminance, often represented by coordinates $(x, y)$.

**Gamut:**

- The subset of colors that can be accurately represented or reproduced by a specific device or medium (e.g., a monitor or printer).

**Gamma Correction:**

- A nonlinear operation used to encode luminance or tristimulus values, compensating for the power-law response of display devices and human vision.

**Luminous Efficiency Function ($V(\lambda)$):**

- A standardized curve representing the average human eye's sensitivity to different wavelengths of light.

_(Add only the essential terms.)_

---

## Formulas

**CIE Chromaticity Coordinates**

- **Formula:** $x = \frac{X}{X+Y+Z}, \quad y = \frac{Y}{X+Y+Z}, \quad z = \frac{Z}{X+Y+Z}$

- **Meaning:** Normalizes tristimulus values to separate color (chromaticity) from intensity (luminance).

- **Use in graphics:** Standardizing color definitions across devices.

**Luma ($Y'$)**

- **Formula:** $Y' = 0.299 R' + 0.587 G' + 0.114 B'$

- **Meaning:** A weighted sum of gamma-corrected RGB components used to approximate luminance for video compression (e.g., YIQ, YCbCr).

- **Use in graphics:** Video encoding and bandwidth reduction.

**CIE Lightness ($L^*$)**

- **Formula:** $L^* = 116(Y/Y_n)^{1/3} - 16$

- **Meaning:** Perceptually uniform measure of lightness, approximating the human eye's power-law response to luminance.

- **Use in graphics:** Perceptual color spaces like Lab and Luv.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Gamut Mapping**

- Algorithms that convert colors from one device's capability range to another (e.g., monitor to printer) to preserve visual intent.

**User Interface Design**

- Selecting color palettes based on perceptual harmony and distinctness, while accounting for physiological limitations like color blindness.
