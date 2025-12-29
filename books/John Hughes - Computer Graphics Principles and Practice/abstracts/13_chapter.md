# Chapter 13: Camera Specifications and Transformations

---

## Main Idea

- This chapter describes how to define and implement virtual cameras in a 3D graphics system.
- It details the mathematical derivations for creating the "Look-At" transformation matrix (positioning the camera) and the "Projection" matrix (mapping the viewing volume to a canonical cube), covering both orthographic and perspective projections.

---

## Keywords

**Look-At Transformation:**

- A rigid body transformation that aligns the world coordinate system with the camera's local coordinate system (eye at origin, looking down -z).

**Frustum:**

- The truncated pyramidal shape representing the volume of space visible to a perspective camera.

**Canonical View Volume:**

- The normalized cube (usually $[-1, 1]^3$) into which the complex camera view volume is mapped to simplify clipping and rasterization.

**Perspective Division:**

- The step in the graphics pipeline where homogeneous coordinates $(x, y, z, w)$ are divided by $w$ (which typically holds depth information) to project 3D points onto the 2D screen.

**Field of View (FOV):**

- The angle defining the extent of the observable scene; usually specified vertically or horizontally.

_(Add only the essential terms.)_

---

## Formulas

**Look-At Matrix**

- **Formula:** $M_{view} = \begin{bmatrix} u_x & u_y & u_z & -u \cdot e \\ v_x & v_y & v_z & -v \cdot e \\ n_x & n_y & n_z & -n \cdot e \\ 0 & 0 & 0 & 1 \end{bmatrix}$

- **Meaning:** Constructs the view matrix from the eye position $e$ and the camera's orthonormal basis vectors $u$ (right), $v$ (up), and $n$ (back).

- **Use in graphics:** Placing the camera in the scene.

**Perspective Projection (OpenGL style)**

- **Formula:** $M_{proj} = \begin{bmatrix} \frac{2n}{r-l} & 0 & \frac{r+l}{r-l} & 0 \\ 0 & \frac{2n}{t-b} & \frac{t+b}{t-b} & 0 \\ 0 & 0 & -\frac{f+n}{f-n} & -\frac{2fn}{f-n} \\ 0 & 0 & -1 & 0 \end{bmatrix}$

- **Meaning:** Maps the viewing frustum defined by planes $l, r, b, t, n, f$ to the canonical view volume.

- **Use in graphics:** Creating the illusion of depth where distant objects appear smaller.

**Unhinging Transformation (z-mapping)**

- **Formula:** $z' = \alpha z + \beta, \quad w' = -z$

- **Meaning:** A non-linear mapping of depth $z$ that preserves order but concentrates precision near the near plane.

- **Use in graphics:** Z-buffering and visibility determination.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Camera Setup**

- To set up a rendering view, developers typically specify an eye position, a target "look-at" point, and an "up" vector. These are mathematically converted into basis vectors using cross products to form the view matrix.

**Z-Fighting Prevention**

- Because depth precision is non-linear (denser near the camera), placing the near clipping plane too close to the eye wastes precision and causes distant surfaces to flicker (Z-fight).
