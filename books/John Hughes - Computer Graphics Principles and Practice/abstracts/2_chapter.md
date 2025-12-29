# Chapter 2: Introduction to 2D Graphics Using WPF

---

## Main Idea

- This chapter bridges theoretical graphics concepts with practical application development using Windows Presentation Foundation (WPF).
- It contrasts immediate-mode and retained-mode architectures, details the graphics pipeline from application models to display, and emphasizes the importance of abstract coordinate systems and geometric transformations (modeling vs. display) for resolution-independent rendering.

---

## Keywords

**Retained Mode (RM):**

- A graphics architecture where the platform retains a model (scene graph) of the primitives to be rendered, automatically handling redrawing and interaction (e.g., WPF).

**Immediate Mode (IM):**

- A graphics architecture where the client application must issue drawing commands for every frame and maintains no internal record of the scene geometry (e.g., GDI+, HTML5 Canvas).

**Device Independent Unit (DIU):**

- An abstract unit of measurement used to ensure consistent physical size across displays with different resolutions (in WPF, 1 unit = 1/96 inch).

**Display Transformation:**

- A transformation (scale, translate) applied to the entire scene to map abstract application coordinates to the specific physical coordinate system of the viewport.

**Modeling Transformation:**

- A transformation applied to a specific object (instance) to define its shape or position within the scene relative to its original template definition.

**Control Template:**

- A reusable definition of the visual structure and behavior of a control, allowing the separation of logic from appearance.

_(Add only the essential terms.)_

---

## Formulas

**WPF Unit Conversion**

- **Formula:** $1 \text{ unit} = \frac{1}{96} \text{ inch}$

- **Meaning:** WPF coordinates are resolution-independent; 96 logical units always map to approximately one physical inch.

- **Use in graphics:** Calculates the necessary pixel dimensions for a shape to appear at a specific physical size on any screen.

**Scale Factor Calculation**

- **Formula:** $S = \frac{D_{target}}{D_{abstract}}$

- **Meaning:** The scale factor $S$ is the ratio of the desired target size ($D_{target}$) in device units to the object's size in abstract units ($D_{abstract}$).

- **Use in graphics:** Determines the value for a `ScaleTransform` to map an abstract geometric model to a specific on-screen size.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**The Coordinate-System/Basis Principle**

- Designers should choose a coordinate system (basis) where defining geometry is most convenient (e.g., using simple integers like 10 or 100), and then use matrix transformations to map these coordinates to the final display system. This decouples the model design from device constraints.

**Declarative Animation**

- In retained-mode systems like WPF, animation is achieved by defining a start value, an end value, and a duration for a specific property (e.g., Rotation Angle). The system automatically interpolates the values over time, decoupling the animation logic from the frame-rate dependent rendering loop.
