# Chapter 13: Linear Physics

---

## Main Idea

This chapter applies classical mechanics to game programming, focusing on the linear motion of objects under various forces. It covers position, velocity, and acceleration functions, solves second-order differential equations for motion with and without resistance, and analyzes the physics of projectiles and friction on inclined planes.


---

## Keywords

**Linear Motion:**
- Motion that does not involve rotation, described by position, velocity, and acceleration vectors as functions of time.

**Differential Equation:**
- An equation relating a function to its derivatives; in physics, $F=ma$ is often a second-order differential equation relating position to acceleration.

**Projectile Motion:**
- The motion of an object subject only to the force of gravity, following a parabolic path (in a vacuum) determined by its initial velocity and launch angle.

**Terminal Velocity:**
- The constant speed reached by an object falling through a resistive medium when the force of gravity is balanced by the drag force.

**Friction (Kinetic and Static):**
- A resistive force acting between surfaces in contact; static friction prevents initial motion, while kinetic friction opposes motion once it has begun.

---

## Formulas

**Position (Uniform Acceleration)**
- **Formula:** $x(t) = x_0 + v_0 t + \frac{1}{2} a_0 t^2$
- **Meaning:** Calculates the position of an object under constant acceleration (like gravity) after time $t$.
- **Use in graphics:** Updating the position of jumping characters or falling debris.

**Projectile Range**
- **Formula:** $r = \frac{2v_x v_z}{g} = \frac{v_0^2 \sin 2\alpha}{g}$
- **Meaning:** The horizontal distance a projectile travels before returning to its launch height.
- **Use in graphics:** Determining where a grenade or arrow will land for AI aiming.

**Resisted Motion Position**
- **Formula:** $x(t) = x_0 + \frac{g}{k}t + \frac{kv_0 - g}{k^2}(1 - e^{-kt})$
- **Meaning:** The position of an object moving through a fluid (like air or water) with drag coefficient $k$.
- **Use in graphics:** Simulating realistic falling speeds or underwater movement.

**Kinetic Friction**
- **Formula:** $F_K = -\mu_K N$
- **Meaning:** The force opposing the sliding motion of an object, proportional to the normal force $N$.
- **Use in graphics:** Simulating cars skidding or blocks sliding down slopes.

---

## Practical Use

**Trajectory Prediction**
- Using **Projectile Motion** formulas to draw an aiming arc for players throwing objects or to calculate the necessary launch angle for AI to hit a target.

**Physics Engines**
- Implementing **Resisted Motion** equations to prevent objects from accelerating infinitely, ensuring they reach a realistic **Terminal Velocity**.

**Collision Response**
- Applying **Friction** forces to sliding objects to bring them to a gradual stop rather than letting them slide forever on horizontal surfaces.
