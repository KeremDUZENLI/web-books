# Chapter 16: Scattered Data Interpolation

---

## Main Idea

This chapter surveys methods for reconstructing smooth surfaces from non-uniformly distributed data points (scattered data) in 2D or 3D space. It focuses primarily on **Radial Basis Functions (RBFs)**, which are global interpolation methods known for high accuracy, and **Shepard's methods**, which are local, inverse-distance weighted techniques suitable for larger, less smooth datasets.

---

## Keywords

**Scattered Data Interpolation:**
The problem of constructing a function $F(x,y)$ that passes exactly through a set of data values $f_i$ at irregular locations $(x_i, y_i)$.

**Radial Basis Function (RBF):**
A function whose value depends only on the distance from a center point. RBFs are used as basis functions to build smooth surfaces by summing weighted contributions from every data point.


**Multiquadric (MQ):**
A specific type of RBF defined by $\phi(r) = \sqrt{r^2 + R^2}$. It was originally developed for topography and is renowned for its high accuracy and spectral convergence properties.

**Thin Plate Spline (TPS):**
An RBF defined by $\phi(r) = r^2 \log r$. Physically, it models the shape of a thin metal plate bent to pass through specific points while minimizing bending energy.


**Shepard's Method:**
A simple, local interpolation scheme where the value at a point is a weighted average of nearby data values, with weights inversely proportional to distance (closer points matter more).

**Positive Definite Matrix:**
A property of the system matrix formed by certain RBFs (like Gaussians) ensuring that the system of equations is always solvable and the interpolation is unique.

**Compactly Supported RBF:**
RBFs that are zero outside a specific radius. This creates a "sparse" system of equations that is much faster to solve than global RBFs, making them suitable for huge datasets.

---

## Formulas

**Radial Basis Function Interpolant**

- **Formula:** $F(x) = \sum_{j=1}^{N} c_j \phi(\|x - x_j\|) + P(x)$
- **Meaning:** The surface height at $x$ is a sum of weighted basis functions centered at each data point $x_j$, plus a low-degree polynomial $P(x)$ to handle trends.
- **Use in graphics:** Used to smoothly reconstruct 3D surfaces from 3D scanner point clouds.

**Hardy's Multiquadric (MQ)**

- **Formula:** $\phi(r) = (r^2 + R^2)^{1/2}$
- **Meaning:** A hyperboloid-shaped basis function. $R$ is a shape parameter that controls how "flat" or "peaked" the function is.
- **Use in graphics:** High-precision terrain modeling and solving differential equations.

**Thin Plate Spline (TPS)**

- **Formula:** $\phi(r) = r^2 \log r$
- **Meaning:** Represents the physical bending of a thin sheet. It has no shape parameter ($R$), making it automatic and robust.
- **Use in graphics:** Image warping (morphing) and medical image registration.

**Shepard's Method (Inverse Distance Weighting)**

- **Formula:** $F(x) = \frac{\sum w_i(x) f_i}{\sum w_i(x)} \quad \text{with} \quad w_i(x) = \frac{1}{d_i^\mu}$
- **Meaning:** Calculates the value at $x$ by averaging neighbors, where $d_i$ is the distance to the neighbor and $\mu$ controls how quickly influence drops off.
- **Use in graphics:** Fast, simple visualization of scientific data where smoothness is less critical than speed.

---

## Practical Use

**Geographic Information Systems (GIS)**
RBFs, especially Multiquadrics, are used to create smooth elevation maps (DEMs) from irregular survey measurements (like GPS points or lidar).

**Medical Imaging**
Thin Plate Splines are the standard tool for "elastic registration," allowing a computer to warp a patient's brain scan to match a standard anatomical atlas.

**Fluid Dynamics**
Scattered data interpolation is used to reconstruct continuous velocity or pressure fields from the random positions of particles in a fluid simulation.
