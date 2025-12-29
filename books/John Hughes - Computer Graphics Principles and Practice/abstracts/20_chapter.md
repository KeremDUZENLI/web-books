# Chapter 20: Textures and Texture Mapping

---

## Main Idea

- This chapter explores texture mapping as a fundamental technique for adding surface detail by mapping values from image arrays or procedural functions to geometric surfaces.
- It covers various mapping techniques including environment mapping, bump mapping, and methods for synthesizing procedural textures like Perlin noise.

---

## Keywords

**Texture Mapping:**

- The process of applying detail to a 3D model using a 2D image or function mapped via texture coordinates.

**Environment Mapping:**

- A technique simulating mirror-like reflections by using the reflection vector to look up incoming light in a texture representing the surroundings.

**Bump Mapping:**

- A method that perturbs surface normal vectors based on a texture map to create the illusion of bumps and dents without changing the underlying geometry.

**Perlin Noise:**

- A type of gradient noise used to generate natural-looking procedural textures by interpolating random gradients on a lattice.

**MIP Mapping:**

- A technique using a sequence of pre-filtered texture images at decreasing resolutions to reduce aliasing artifacts when textures are minified.

**Reaction-Diffusion:**

- A texture synthesis method based on simulating the chemical interaction and diffusion of morphogens to create biological patterns.

_(Add only the essential terms.)_

---

## Formulas

**Bump Mapping Normal Adjustment**

- **Formula:** $n' = S(n + r t_1 + g t_2)$

- **Meaning:** The surface normal is perturbed by adding weighted tangent vectors derived from the texture map.

- **Use in graphics:** Creating surface relief details like bricks or wrinkles.

**Perlin Noise Interpolant**

- **Formula:** $a(t) = 6t^5 - 15t^4 + 10t^3$

- **Meaning:** A smooth polynomial function used to blend noise values, ensuring zero second derivatives at endpoints.

- **Use in graphics:** Generating smooth procedural noise without visual artifacts at grid boundaries.

**Fourier Series for Checkerboard**

- **Formula:** $S(x) = \frac{4}{\pi} \sum_{j=0}^{\infty} \frac{1}{2j+1} \sin(\pi(2j+1)x)$

- **Meaning:** The frequency decomposition of a square wave pattern.

- **Use in graphics:** Understanding aliasing and constructing band-limited procedural textures.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Cube Map**

- A type of environment map that uses six square textures arranged like a cube to capture the full sphere of directions, minimizing distortion.

**Dual Paraboloid Mapping**

- A parameterization method using two parabolic reflections to map a sphere of directions onto two circular disks, often used for environment mapping.
