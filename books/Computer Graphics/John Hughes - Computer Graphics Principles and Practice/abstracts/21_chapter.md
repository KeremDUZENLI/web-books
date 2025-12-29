# Chapter 21: Interaction Techniques

---

## Main Idea

- This chapter explores the design and mathematics of user interfaces in computer graphics, ranging from 2D multitouch manipulations to 3D object and camera control.
- It details specific techniques like the trackball, arcball, and Unicam interfaces while integrating human-computer interaction principles such as Fitts' Law.

---

## Keywords

**Fitts' Law:**

- A predictive model stating that the time required to move to a target is a function of the distance to the target and the size of the target.

**Affordance:**

- A visual property of an interface element that suggests how it should be used, such as a handle implying grasping or a button implying pushing.

**Trackball (Virtual Sphere):**

- A 3D interaction technique where the user rotates an object by clicking and dragging on a virtual sphere surrounding the object.

**Arcball:**

- A variation of the trackball that doubles the rotation angle derived from screen movement, allowing for path-independent and full 360-degree rotations.

**Unicam:**

- A single-button camera manipulation interface that integrates translation and rotation gestures into different regions of the screen to facilitate 3D navigation.

**Multitouch:**

- An interface technology capable of detecting and processing multiple simultaneous points of contact, enabling gestures like pinch-to-zoom and two-finger rotation.

_(Add only the essential terms.)_

---

## Formulas

**Fitts' Law**

- **Formula:** $T = a + b \log_2(1 + \frac{D}{W})$

- **Meaning:** The time $T$ to acquire a target increases with distance $D$ and decreases with target width $W$.

- **Use in graphics:** Guiding the sizing and placement of UI elements like menus and handles to maximize efficiency.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Photo Sorter**

- A multitouch application allowing users to translate, scale, and rotate digital photos on a surface using intuitive two-finger gestures.

**3D Object Manipulation**

- Using the virtual sphere or arcball algorithms to allow users to inspect 3D models from any angle using a standard 2D mouse.
