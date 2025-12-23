# Chapter 14: Rotational Physics

---

## Main Idea

This chapter extends the study of physics into rotational mechanics, covering the behavior of objects in rotating frames of reference and the dynamics of rigid bodies. It introduces key concepts such as angular velocity, centrifugal and Coriolis forces, and the inertia tensor, and applies them to simulate realistic rotational behaviors like precession and oscillatory motion in springs and pendulums.

---

## Keywords

**Angular Velocity:**
- A vector quantity $\omega$ describing the rate of change of angular position and the axis of rotation.

**Centrifugal Force:**
- An apparent force acting on an object in a rotating frame, directing it away from the axis of rotation.

**Coriolis Force:**
- An apparent deflection force acting on objects moving within a rotating reference frame, perpendicular to both the angular velocity and the object's relative velocity.

**Inertia Tensor:**
- A $3 \times 3$ symmetric matrix that characterizes how a rigid body's mass is distributed relative to its center of mass, determining its resistance to rotational acceleration about any axis.

**Torque:**
- The rotational equivalent of linear force, defined as the cross product of position and force vectors, which causes changes in angular momentum.

---

## Formulas

**Centrifugal Force**
- **Formula:** $F_{centrifugal} = -m(\omega(t) \times [\omega(t) \times r(t)])$
- **Meaning:** The force pushing an object outward in a rotating system.
- **Use in graphics:** Simulating physics on carousels or space stations.

**Coriolis Force**
- **Formula:** $F_{Coriolis} = -2m\omega(t) \times v_r(t)$
- **Meaning:** The force deflecting moving objects in a rotating frame.
- **Use in graphics:** Accurate ballistics in rotating environments or weather simulation.

**Rotational Equation of Motion**
- **Formula:** $\tau(t) = \mathcal{I}\alpha(t) + \omega(t) \times (\mathcal{I}\omega(t))$
- **Meaning:** Relates torque, angular acceleration, and angular velocity (Euler's equations).
- **Use in graphics:** Calculating the tumbling motion of rigid bodies.

**Parallel Axis Theorem**
- **Formula:** $\mathcal{I}' = \mathcal{I} + m(s^2 E_3 - s \otimes s)$
- **Meaning:** Calculates the inertia tensor about an arbitrary point given the tensor about the center of mass.
- **Use in graphics:** Computing inertia for articulated bodies or offset pivots.

---

## Practical Use

**Vehicle Physics**
- Using **Angular Momentum** and **Torque** to simulate the suspension and tire dynamics of racing games, including effects like body roll.

**Ragdoll Physics**
- Applying **Inertia Tensors** to character limbs to ensure they rotate realistically around joints when struck or falling.

**Oscillatory Systems**
- Implementing **Spring** and **Pendulum** equations to create dynamic environmental elements like swinging signs, antennas, or bridge cables.
