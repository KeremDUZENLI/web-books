# Chapter 35: Motion

---

## Main Idea

- This chapter explores the methods for describing and generating motion in computer graphics, ranging from artist-driven keyframe interpolation to procedural and physically based dynamics.
- It details the mathematical foundations of interpolation (linear, splines), the simulation of physical systems using differential equations and numerical integration (Euler, Runge-Kutta), and the challenges of stability, collision detection, and maintaining temporal coherence in rendering.

---

## Keywords

**Key Pose (Keyframe):**

- A specific pose of an object or character at a specific time, defined by an artist, from which intermediate poses are interpolated.

**Dynamics (Simulation):**

- A method of generating motion by applying physical laws (forces, mass, acceleration) to objects and solving for their state over time.

**Forward Euler Integration:**

- A simple numerical method for solving ordinary differential equations where the next state is estimated using the current derivative (slope) over a time step.

**Runge-Kutta Integration:**

- A family of iterative methods for approximating solutions to ODEs, with the fourth-order variant (RK4) being a standard in graphics for its balance of accuracy and stability.

**Particle System:**

- A collection of many small, simple objects (particles) that move according to physical rules, used to model phenomena like fire, smoke, and rain.

**Inverse Kinematics (IK):**

- A technique for calculating the joint parameters needed to place an end-effector (like a hand) at a specific target position.

_(Add only the essential terms.)_

---

## Formulas

**Linear Interpolation (Lerp)**

- **Formula:** $x(t) = (1-\alpha)x^*(t_0) + \alpha x^*(t_1)$

- **Meaning:** Computes a point between two key poses based on the fractional time $\alpha$.

- **Use in graphics:** Smoothly transitioning between animation frames.

**Newton's Second Law**

- **Formula:** $F = ma \implies \ddot{x}(t) = \frac{f(t, x(t), \dot{x}(t))}{m}$

- **Meaning:** The acceleration of an object is proportional to the net force applied to it.

- **Use in graphics:** The fundamental equation driving physically based dynamics.

**Explicit Euler Integrator**

- **Formula:** $x_{new} = x_{old} + v_{old} \Delta t$, $v_{new} = v_{old} + \frac{F}{m} \Delta t$

- **Meaning:** Updates position and velocity by taking a single step along the current tangent.

- **Use in graphics:** Basic (though often unstable) physics engines.

**Impulse-Based Collision**

- **Formula:** $\Delta v = - (1 + \epsilon) (v_{rel} \cdot n) n$

- **Meaning:** Instantaneously changes velocity upon collision based on a coefficient of restitution $\epsilon$.

- **Use in graphics:** Bouncing objects off surfaces without interpenetration.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Character Animation**

- Blending skeletal animations (like "walk" and "run") using interpolation to create fluid character movement in video games.

**Physics Engines**

- Simulating rigid body destruction, ragdoll physics, and fluid dynamics in real-time applications using numerical integration.
