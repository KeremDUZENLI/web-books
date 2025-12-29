# Chapter 26: Reverse Engineering

---

## Main Idea

This chapter describes the process of converting dense 3D point data scanned from physical objects into usable boundary representation (B-rep) CAD models. It details a multi-step pipeline involving data capture, triangulation, segmentation, and surface fitting, distinguishing between the algorithms needed for "conventional" engineering parts (composed of simple analytic shapes) and "free-form" objects (requiring complex smooth surface patches).

---

## Keywords

**Reverse Engineering:**
The process of reconstructing a digital CAD model from an existing physical object using 3D scanning and geometric processing. It is used for reproducing legacy parts, analyzing competitors' products, or designing medical prosthetics.

**Segmentation:**
The crucial step of dividing a triangulated point cloud into distinct regions (subsets) that logically belong to single faces of the final model.

**Decimation:**
The process of reducing the number of triangles in a mesh while preserving the overall shape topology, making downstream algorithms faster and more efficient.

**Functional Decomposition:**
A segmentation strategy for free-form objects where the user defines a hierarchy of "primary surfaces" (large underlying shapes) and "dependent features" (like blends or steps) to structure the reconstruction.

**Direct Segmentation:**
An automatic method for conventional objects that detects regions by analyzing surface properties (like planarity or curvature) to identify simple geometric primitives like planes, cylinders, and cones.

**Constrained Fitting:**
A surface fitting technique that enforces specific geometric relationships—such as tangency, perpendicularity, or concentricity—between multiple surfaces simultaneously to ensure the final model is engineering-valid.

**Beautification:**
A post-processing step that cleans up the reconstructed model by detecting and enforcing intended regularities, such as symmetries, exact angles (e.g., 90 degrees), or aligned axes.

---

## Formulas

**Least Squares Fitting (Surface)**

- **Formula:** $F_{lsq}(S) = \sum_{i} \omega_{i}^{2} \| S(u_{i}, v_{i}) - p_{i} \|^{2}$
- **Meaning:** Minimizes the weighted squared distance between measured data points $p_i$ and the corresponding points on the parametric surface $S$.
- **Use in graphics:** The standard objective function for fitting NURBS patches to point clouds.

**Faithful Distance Approximation**

- **Formula:** $\tilde{d} = \frac{g - h^2}{2h} \approx d$
- **Meaning:** A simplified algebraic expression that approximates the true Euclidean distance $d$ to a surface, avoiding complex square roots during optimization.
- **Use in graphics:** Used to speed up the fitting of analytic shapes like cylinders and cones.

**Smoothing Functional**

- **Formula:** $F_{smooth}(S) = \iint (S_{uu}^{2} + 2S_{uv}^{2} + S_{vv}^{2}) \, du \, dv$
- **Meaning:** Measures the "strain energy" or bending of a surface. Minimizing this term prevents the surface from wrinkling to fit noise in the data.
- **Use in graphics:** Added to the least-squares term to ensure reconstructed free-form surfaces are smooth and fair.

**Linearized Constraint Update**

- **Formula:** $c(s_0 + d) \approx c(s_0) + c'(s_0)d$
- **Meaning:** A first-order Taylor expansion used to iteratively solve non-linear geometric constraints during the fitting process.
- **Use in graphics:** Allows the solver to adjust surface parameters to satisfy conditions like "radius must be 10mm" while staying close to the data.

---

## Practical Use

**Legacy Part Reproduction**
When original drawings for a vintage car part or an old machine tool are lost, reverse engineering allows manufacturers to scan the broken part and create a new CAD file for CNC machining.

**Medical Prosthetics**
Custom-fit limbs or dental implants are designed by scanning the patient's anatomy and reconstructing a smooth digital surface that perfectly matches the organic shape.

**Quality Control**
Manufactured parts are scanned and "reverse engineered" to compare the resulting model against the original design, highlighting areas where the physical object deviates from the tolerance specifications.
