# Chapter 7: Viewing

---

## Main Idea

- This chapter details the **viewing transformation**, the sequence of matrix operations that maps 3D world coordinates to 2D pixel coordinates on the screen.

- It decomposes this process into three distinct stages-**camera, projection, and viewport transformations**-which form the geometric backbone of object-order rendering (rasterization).

<img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR_xPIMe9vfmNR1FNqvTOJ_8UFJAcWT4ClwTj3GvheXa_ZvM0VpSZ-2iQ0YB5YShRHfJGYnYHl8YFOgWE9k_u9GGNDKbb88Dxx3ZvsraX4BQccmWWg">

---

## Keywords

**Camera Transformation**

- A rigid body transformation that reorients the world so the **camera is at the origin**, looking down the negative $z$-axis, simplifying subsequent projections.

**Canonical View Volume**

- A standardized cube (typically extending from -1 to +1 in $x, y, z$) to which all geometry is mapped before rasterization, facilitating efficient **clipping**.

**Orthographic Projection**

- A parallel projection where projection lines are perpendicular to the image plane; it preserves object scale regardless of distance, useful for engineering.

**Perspective Projection**

- A projection where lines converge at a viewpoint; objects appear smaller as they get further away, mimicking human vision.

**Viewport Transformation**

- The final step that maps points from the canonical view volume (logical coordinates) to **screen space** (actual pixel coordinates).

---

## Formulas

**Viewport Matrix ($M_{vp}$)**

- **Formula:** $\begin{bmatrix} \frac{n_x}{2} & 0 & 0 & \frac{n_x - 1}{2} \\ 0 & \frac{n_y}{2} & 0 & \frac{n_y - 1}{2} \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$

- **Meaning:** Scales and translates the $[-1, 1]$ square to the pixel grid $[0, n_x] \times [0, n_y]$.

- **Use in graphics:** The final matrix applied before rasterization to determine pixel coordinates.

**Perspective Matrix ($P$)**

- **Formula:** $\begin{bmatrix} n & 0 & 0 & 0 \\ 0 & n & 0 & 0 \\ 0 & 0 & n+f & -fn \\ 0 & 0 & 1 & 0 \end{bmatrix}$

- **Meaning:** Implements the $1/z$ division (via the homogeneous coordinate $w$) to warp a frustum (pyramid shape) into the cubic canonical view volume.

- **Use in graphics:** The core matrix for 3D realism; allows standard hardware to handle perspective viewing and depth sorting simultaneously.

**Field-of-View ($\theta$)**

- **Formula:** $\displaystyle \tan(\frac{\theta}{2}) = \frac{t}{|n|}$

- **Meaning:** Relates the vertical angle of view $\theta$ to the top screen coordinate $t$ and near plane distance $n$.

- **Use in graphics:** Used to set the "zoom" level of a virtual camera.

---

## Practical Use

**Z-Buffering**

- Even though projection flattens 3D objects to 2D, the transformation matrices preserve relative **depth ($z$) information**, allowing algorithms to correctly hide objects behind others.

**Wireframe Rendering**

- The transformations in this chapter are sufficient to create **wireframe images** (drawing only edges) without needing complex shading or visibility algorithms.

**Arbitrary Camera positioning**

- By defining an **orthonormal basis** $(\mathbf{u}, \mathbf{v}, \mathbf{w})$ from a camera's eye position and gaze direction, developers can place a virtual camera anywhere in a scene.
