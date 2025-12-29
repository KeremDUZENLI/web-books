# Chapter 12: Collision Detection

---

## Main Idea

This chapter addresses the problem of determining when moving objects in a 3D environment interact with each other or the static world. It focuses on using simplified bounding volumes (specifically spheres) to perform efficient intersection tests against planes and other spheres, calculating the precise time of impact, and determining the appropriate response motion (sliding) to maintain physical plausibility.



---

## Keywords

**Collision Detection:**
- The computational process of detecting the intersection of two or more geometric shapes, often approximated using bounding volumes to optimize performance.

**Bounding Volume:**
- A simplified geometric shape (like a sphere or box) that encloses a complex object, used to perform quick rejection tests before more expensive geometry checks.

**Time of Impact:**
- The exact scalar parameter $t$ (usually representing time) at which a moving object first touches a surface or another object.

**Sliding Vector:**
- A response vector calculated when an object collides with a surface, projecting the remaining velocity along the surface tangent to simulate sliding rather than stopping abruptly.


---

## Formulas

**Sphere-Sphere Time of Impact**
- **Formula:** $t = \frac{-(A \cdot B) - \sqrt{(A \cdot B)^2 - B^2 [A^2 - (r_P + r_Q)^2]}}{B^2}$
- **Meaning:** Calculates the time $t$ when two moving spheres (with radii $r_P, r_Q$) collide.
- **Use in graphics:** Detecting collisions between projectiles or moving characters.

**Sliding Response**
- **Formula:** $P_3 = P_2 - [(P_2 - Q) \cdot N]N$
- **Meaning:** Computes the new destination point $P_3$ by removing the motion component perpendicular to the surface normal $N$ at the collision point $Q$.
- **Use in graphics:** allowing players to slide along walls instead of sticking to them.

---

## Practical Use

**Physics Simulation**
- Using **Time of Impact** calculations to prevent fast-moving objects (like bullets) from "tunneling" through thin walls between frames.

**Character Movement**
- Implementing **Sliding Vectors** to ensure smooth navigation in complex environments, preventing the player from getting snagged on geometry.

**Optimization**
- Utilizing **Bounding Volumes** (spheres) to trivially reject collisions for distant objects, saving CPU cycles for objects in close proximity.
