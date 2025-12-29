# Chapter 27: Vector and Tensor Field Visualization

---

## Main Idea

This chapter categorizes and explains methods for visualizing vector fields (like fluid flow) and tensor fields (like stress or diffusion). It progresses from simple local icons (arrows) to global integration methods (streamlines) and texture-based techniques (Line Integral Convolution), highlighting the importance of topological analysis to extract the structural skeleton—critical points and separatrices—of complex datasets.

---

## Keywords

**Vector Field:**
A data set where a direction and magnitude vector is assigned to every point in space. It is commonly used to model fluid flow, wind velocity, or electromagnetic fields.


**Streamline:**
A curve that is tangent to the vector field at every point. It represents the path a massless particle would take if released in a steady (time-invariant) flow.

**Pathline:**
The actual trajectory of a particle moving through a flow that changes over time. Unlike a streamline, it accounts for the field's evolution.

**Tensor Field:**
A data set where a tensor (often a $3 \times 3$ matrix) is assigned to every point. It describes complex physical properties like stress, strain, or water diffusion in brain tissue.

**Topology:**
The study of the essential structure of a field, governed by critical points (where the vector is zero) and the curves connecting them. It provides a simplified "map" of complex flow patterns.


**Line Integral Convolution (LIC):**
A texture-based visualization technique that smears a random noise image along the direction of the vector field, creating a dense, painterly representation of the flow.

**Hyperstreamline:**
A tube-like geometric primitive used to visualize tensor fields. The path follows one eigenvector, while the cross-section shape and color represent the other eigenvalues.

**Hedgehog:**
A basic visualization technique that draws simple lines or arrows (spikes) at grid points to show vector direction and magnitude.

---

## Formulas

**Streamline Equation (ODE)**

- **Formula:** $\frac{d \mathbf{x}}{d t} = \mathbf{v}(\mathbf{x}(t))$
- **Meaning:** The rate of change of the position $\mathbf{x}$ is exactly equal to the vector field value $\mathbf{v}$ at that position.
- **Use in graphics:** Solved numerically (e.g., Runge-Kutta) to draw flow lines in scientific visualization.

**Line Integral Convolution**

- **Formula:** $I(x_0) = \int_{-L}^{L} k(s) T(\sigma(s)) \, ds$
- **Meaning:** The pixel intensity $I$ is calculated by averaging the texture values $T$ along the streamline $\sigma(s)$ passing through $x_0$, weighted by a kernel $k$.
- **Use in graphics:** Generates high-resolution images of vector fields that look like brush strokes.

**Eigenvalue Decomposition (Tensor)**

- **Formula:** $T = \lambda_1 \mathbf{e}_1 \mathbf{e}_1^T + \lambda_2 \mathbf{e}_2 \mathbf{e}_2^T + \lambda_3 \mathbf{e}_3 \mathbf{e}_3^T$
- **Meaning:** Breaks a symmetric tensor into three orthogonal directions (eigenvectors) and magnitudes (eigenvalues).
- **Use in graphics:** Used to define the shape and orientation of ellipsoids or hyperstreamlines for tensor visualization.

---

## Practical Use

**Computational Fluid Dynamics (CFD)**
Engineers use streamlines and topology graphs to visualize airflow around aircraft wings, identifying vortices and separation lines that cause drag.

**Medical Imaging (DT-MRI)**
Tensor visualization is used to map the diffusion of water in the brain, revealing the structure of white matter fiber tracts (neural pathways) for surgical planning.

**Structural Analysis**
Civil engineers use tensor glyphs (ellipsoids) to visualize stress and strain distributions inside concrete dams or metal bridges to identify potential failure points.
