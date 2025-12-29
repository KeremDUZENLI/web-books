# Chapter 11: Transformations in Three Dimensions

---

## Main Idea

- This chapter extends 2D transformation concepts to 3D space, covering translation, scaling, shearing, reflection, and rotation using matrices and homogeneous coordinates.
- It specifically focuses on various representations of 3D rotations, including Euler angles, axis-angle pairs, and quaternions, and discusses interpolation and user interaction techniques.

---

## Keywords

**Euler Angles:**

- A method of describing 3D rotations as a sequence of three rotations about coordinate axes (e.g., yaw, pitch, roll).

**Quaternions:**

- A 4D number system used to represent 3D rotations, offering advantages in interpolation (slerp) and numerical stability over matrices.

**Rodrigues' Formula:**

- A formula for creating a rotation matrix given an axis of rotation and an angle.

**Gimbal Lock:**

- A problem in Euler angle representation where degrees of freedom are lost when rotation axes align.

**Virtual Trackball:**

- A user interface technique that allows users to rotate 3D objects by dragging a mouse, simulating the rotation of a trackball.

_(Add only the essential terms.)_

---

## Formulas

**Rodrigues' Rotation Formula**

- **Formula:** $M = I + \sin(\theta)J_{\omega} + (1-\cos\theta)J_{\omega}^2$

- **Meaning:** Constructs a rotation matrix from an axis $\omega$ and angle $\theta$, where $J_{\omega}$ is the skew-symmetric matrix of $\omega$.

- **Use in graphics:** Converting axis-angle representations to rotation matrices.

**Quaternion from Axis-Angle**

- **Formula:** $q = \cos(\frac{\theta}{2})[1, 0, 0, 0]^T + \sin(\frac{\theta}{2})\omega$

- **Meaning:** Represents a rotation of angle $\theta$ about axis $\omega$ as a quaternion.

- **Use in graphics:** Representing orientations for animation and interpolation.

**Reflection Matrix (Plane)**

- **Formula:** $M = I - 2nn^T$

- **Meaning:** Reflects points across a plane defined by the unit normal vector $n$ passing through the origin.

- **Use in graphics:** Rendering reflections in mirrors or water.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**3D Animation Interpolation**

- Quaternions are essential for animating rotating objects because they allow for smooth spherical linear interpolation (slerp) between orientations, avoiding the jerky movement and gimbal lock associated with interpolating Euler angles or matrices.

**3D Model Viewing**

- The virtual trackball algorithm is standard in 3D modeling software, allowing users to intuitively inspect an object from any angle by "spinning" it with 2D mouse movements.
