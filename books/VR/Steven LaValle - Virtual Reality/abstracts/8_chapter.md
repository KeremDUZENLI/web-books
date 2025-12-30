# Chapter 8: Motion in Real and Virtual Worlds

---

## Main Idea

- This chapter establishes the mathematical and physical foundations for modeling motion in VR, linking engineered physics simulations with the biological vestibular system.

- It details how velocities, accelerations, and collisions are handled in virtual worlds and explains the phenomenon of vection, where visual stimuli induce false sensations of motion.

---

## Key Principles & Guidelines

**The Vestibular System**

- **Definition:** The sensory system located in the inner ear that provides balance and motion cues; it consists of the otolith organs (utricle and saccule) for linear acceleration and semicircular canals for angular acceleration.

- **Design Implication:** Since the vestibular system cannot distinguish gravity from linear acceleration (Einstein equivalence principle), VR developers must be careful not to present visual accelerations that conflict with the user's physical vestibular inputs, as this causes sickness.

**Rigid Body Dynamics**

- **Definition:** Modeling objects as solid masses that do not deform, characterized by their position, orientation, and degrees of freedom (DOFs).

- **Design Implication:** Physics engines use these models to simulate realistic interactions; constraints (like joints in a skeleton) reduce DOFs to create articulated avatars.

**Numerical Simulation**

- **Definition:** The process of approximating continuous physical motion by calculating state updates at discrete time steps (sampling rate).

- **Design Implication:** The physics engine frame rate must be high enough to maintain stability and accuracy, often running independently of and faster than the visual rendering frame rate.

**Collision Detection Phases**

- **Broad Phase:** Uses simple bounding regions (Spheres, Axis-Aligned Bounding Boxes) to quickly eliminate object pairs that are definitely not colliding.

- **Narrow Phase:** Performs expensive, precise geometric tests (e.g., triangle-triangle intersection) only on the pairs that passed the broad phase.

**Vection**

- **Definition:** The illusion of self-motion induced by visual stimuli (optical flow) while the body is physically stationary.

- **Design Implication:** While vection can enhance immersion, it is a primary cause of VR sickness when it contradicts vestibular cues; it is influenced by field of view, contrast, and spatial frequency.

---

## Formulas

**Velocity**

- **Formula:** $$v = \frac{dy(t)}{dt} \approx \frac{\Delta y}{\Delta t}$$

- **Context:** Describes the rate of change of position over time.

**Euler Integration**

- **Formula:** $$x_i[k+1] \approx x_i[k] + \dot{x}_i(k\Delta t)\Delta t$$

- **Context:** A simple numerical method to update the state of a physics object for the next time step based on its current velocity.

**Centripetal Acceleration**

- **Formula:** $$a = -r\omega^2$$

- **Context:** The acceleration felt toward the center of rotation when moving in a circle at constant angular velocity $\omega$.

---

## Practical Use

**Physics Engines**

- Software components (like in Unity or Unreal) that maintain the "state" of the virtual world, handling gravity, forces, and object interactions according to physical laws (or modified laws for gameplay).

**Bounding Volumes (AABB/OBB)**

- **Axis-Aligned Bounding Box (AABB):** A box whose faces are parallel to the coordinate axes; fast to test but fits rotated objects poorly.

- **Oriented Bounding Box (OBB):** A box that rotates with the object; fits tighter but is computationally more expensive to test.
