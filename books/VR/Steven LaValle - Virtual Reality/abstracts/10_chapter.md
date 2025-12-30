# Chapter 10: Interaction

---

## Main Idea

- This chapter explores how users interface with virtual worlds, encompassing locomotion, object manipulation, and social interaction, guided by the principle that VR can simulate any real-world mechanism or invent entirely new ones.

- It emphasizes the importance of "remapping"—creating new sensorimotor relationships that map physical body movements to potentially different virtual actions to maximize effectiveness, learnability, and comfort.

---

## Key Principles & Guidelines

**Universal Simulation Principle**

- **Definition:** The concept that any interaction mechanism from the real world (e.g., turning a doorknob, operating a cockpit) can be simulated in VR.

- **Design Implication:** While realism is possible, developers should often aim to make interactions "better than reality" by reducing physical fatigue or simplifying complex tasks (e.g., using a button press instead of a physical reach).

**Remapping**

- **Definition:** The process of defining a sensorimotor mapping where a motion in the real world (e.g., moving a mouse) produces a substantially different or scaled motion in the virtual world (e.g., moving a cursor).

- **Design Implication:** Effective remapping minimizes "gorilla arms" (fatigue from holding arms up) and cognitive load; examples include scaling hand motions to cover large virtual distances with small physical movements.

**Locomotion & Vection**

- **Definition:** Interaction mechanisms that move the user's viewpoint through a virtual world that is larger than the physical tracked space.

- **Design Implication:** Locomotion often causes vection (illusion of self-motion), leading to sickness. Strategies to mitigate this include reducing the field of view (virtual cockpits), avoiding strafing/lateral motion, and using teleportation instead of smooth continuous movement.

**Redirected Walking**

- **Definition:** A locomotion technique where the virtual viewpoint is subtly rotated while the user walks, causing them to physically walk in circles while perceiving themselves as walking in a straight line.

- **Design Implication:** This allows users to explore vast virtual environments within a confined physical space without needing artificial controllers, though it requires a large tracked area (at least 30x30 meters).

**Wayfinding**

- **Definition:** The cognitive process of learning and navigating a spatial environment using cues like landmarks, signs, and maps.

- **Design Implication:** Non-physical locomotion methods like teleportation can hinder the formation of a mental map (place cells); designers should incorporate clear landmarks or "world in miniature" maps to assist users.

**Social Interaction & The Proteus Effect**

- **Definition:** The phenomenon where a user's behavior changes based on the characteristics of their avatar (e.g., becoming more confident when wearing a uniform).

- **Design Implication:** VR offers unique social possibilities by allowing users to embody different races, genders, or even species, potentially fostering empathy or enabling new forms of social dynamics beyond traditional face-to-face communication.

---

## Practical Use

**Ray Casting (Virtual Laser Pointer)**

- A primary selection interaction where a ray is projected from a controller into the scene to find the nearest intersecting object. It is used for selecting menu items, pointing at objects to grasp, or choosing a destination for teleportation.

**Basin of Attraction**

- A technique to simplify object placement where a "gravity well" is defined around a target pose. When a user releases an object near the target, it automatically snaps into the perfect position and orientation, reducing the need for high-precision motor control.

**Gorilla Arms**

- A physical fatigue syndrome caused by interfaces that require users to keep their arms extended in mid-air for prolonged periods (like the _Minority Report_ interface). VR designers should avoid this by allowing users to interact with hands resting comfortably or using small wrist motions.
