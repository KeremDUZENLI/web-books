# Chapter 3: An Ancient Renderer Made Modern

---

## Main Idea

- This chapter eases the transition from 2D to 3D programming by introducing "Framework-3," a simplified object-oriented wrapper around the underlying graphics platform (WPF 3D).
- It covers the fundamental components of a 3D scene—coordinate systems, camera setup, geometric primitives, lighting models, and material properties—and demonstrates how to construct hierarchical scenes and implement basic user interaction.

---

## Keywords

**Right-Handed Coordinate System:**

- A standard 3D spatial reference where, if the $x$-axis points right and $y$-axis points up, the $z$-axis points toward the viewer (out of the screen).

**Camera Model:**

- A virtual viewing abstraction defined by an Eye position (location), a Look-Direction (view vector), and an Up-Vector (orientation).

**Field of View (FOV):**

- The angular extent of the scene observable by the camera; a wider FOV creates a perspective distortion similar to a wide-angle lens.

**Ambient Light:**

- A base level of non-directional light that illuminates all surfaces equally, preventing completely black shadows but providing no depth cues.

**Directional Light:**

- Light rays that travel in parallel from an infinitely distant source (like the sun); illumination depends only on the angle between the light vector and surface normal.

**Point Light:**

- A light source located at a specific position that radiates outward in all directions, with intensity typically attenuating with distance.

_(Add only the essential terms.)_

---

## Formulas

**Diffuse Reflection (Lambert's Law)**

- **Formula:** $I \propto \max(0, \mathbf{n} \cdot \mathbf{l})$

- **Meaning:** The brightness ($I$) of a matte surface is proportional to the dot product of the surface normal $\mathbf{n}$ and the light direction $\mathbf{l}$.

- **Use in graphics:** Fundamental for creating the appearance of 3D shape; surfaces facing the light appear brighter.

**Vector Addition (Translation)**

- **Formula:** $P_{new} = P_{old} + \mathbf{v}$

- **Meaning:** A point $P$ is translated to a new position by adding a translation vector $\mathbf{v}$.

- **Use in graphics:** Used to position objects (like stacking spheres for a snowman) or move the camera.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**The "Black Screen" Debugging Checklist**

- When a 3D scene renders as a black screen, check three things:
  1.  **Camera:** Is the camera looking at the objects? (Check Eye position and Look Direction).
  2.  **Frustum:** Are the objects inside the view frustum? (Check Near/Far planes and FOV).
  3.  **Lighting:** Is there light? Without light, 3D objects are rendered as black silhouettes against a black background. Always add a low-intensity Ambient light for debugging.

**Lighting Strategy**

- Use a combination of lights for realism: **Ambient** (low intensity) to soften shadows, and **Directional** (high intensity) to provide shape and definition.
