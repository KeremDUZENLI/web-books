# Chapter 17: Computer Animation

---

## Main Idea

- This chapter surveys the methods used to create motion in computer graphics, ranging from artistic principles derived from traditional hand-drawn animation to algorithmic techniques.

- It covers the four main approaches: **keyframing** (interpolation), **procedural** (math functions), **physics-based** (simulation), and **motion capture** (recording reality).

---

## Keywords

**Keyframing**

- A technique where the animator defines values (position, rotation, color) at specific "key" moments, and the computer interpolates the in-between frames using splines.

**Forward Kinematics (FK)**

- Determining the position of an end-effector (like a hand) by specifying the angles of all joints in the hierarchy (shoulder, elbow) from the root up.

**Inverse Kinematics (IK)**

- The reverse process: calculating the necessary joint angles automatically to force an end-effector to reach a specific goal position in space.

**Skinning**

- The process of attaching a visible mesh (skin) to an underlying skeleton so that the mesh deforms naturally as the bones move.

**Motion Capture (Mocap)**

- Recording the movement of real actors using markers or sensors and mapping that data onto virtual characters to achieve realistic human motion.

**Particle Systems**

- A procedural technique using thousands of simple primitives to simulate "fuzzy" or fluid phenomena like **fire, smoke, and explosions** that are hard to model with rigid geometry.

**Flocking (Boids)**

- An algorithm that simulates group behavior (birds, fish, crowds) using three simple local rules: separation (don't crash), alignment (steer same way), and cohesion (stay close).

---

## Formulas

**Arc-Length Parameterization**

- **Formula:** $\ s(t) = \int_0^t \|\mathbf{v}(\tau)\| d\tau$

- **Meaning:** Maps time to actual distance traveled along a curve.

- **Use in graphics:** Ensures objects move at a **constant speed** along a path, regardless of how control points are spaced.

**IK Jacobian Update**

- **Formula:** $\delta \mathbf{x} = \mathbf{J} \delta \mathbf{\alpha}$

- **Meaning:** Relates a small change in end-effector position $\mathbf{x}$ to small changes in joint angles $\mathbf{\alpha}$ via the matrix of partial derivatives $\mathbf{J}$.

- **Use in graphics:** The core math for solving **Inverse Kinematics** iteratively.

**Euler Integration (Physics)**

- **Formula:** $\ \mathbf{v}\_{new} = \mathbf{v}\_{old} + \frac{\mathbf{F}}{m} \Delta t$

- **Meaning:** Updates velocity based on force, mass, and time step.

- **Use in graphics:** The simplest numerical method for driving **physics-based animations** like cloth or rigid bodies.

---

## Practical Use

**Squash and Stretch**

- A traditional animation principle where objects deform (change shape but preserve volume) to emphasize speed, impact, or material flexibility.

**Motion Blur**

- Simulated by integrating the image over a time interval (often via Distribution Ray Tracing), essential for making fast motion look smooth rather than strobing.

**Procedural Noise (Time)**

- Adding a time dimension to Perlin noise creates animated textures, like drifting clouds or flowing marble, without requiring manual keyframes.
