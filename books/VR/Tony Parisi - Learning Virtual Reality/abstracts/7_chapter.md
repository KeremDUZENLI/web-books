# Chapter 7: Virtual Reality Design

---

## Main Idea

- This chapter shifts focus from software engineering to the principles of User Experience (UX) design in Virtual Reality.
- It emphasizes that VR is not just a visual medium but a physiological one; designing for "presence" requires managing the user's physical comfort, mitigating simulator sickness, and creating intuitive, diegetic interfaces that respect the rules of the virtual world.

---

## Key Principles & Guidelines

**Simulator Sickness (Vestibular Mismatch)**

- **Definition:** A physiological rejection of the VR experience caused when the visual system reports motion (e.g., flying forward) while the vestibular system (inner ear) reports stasis (sitting in a chair).
- **Design Implication:** This sensory conflict leads to nausea. To minimize it, developers must maintain high frame rates, low latency, and avoid forced camera movement.

**Latency and Judder**

- **Definition:**
  - **Latency:** The delay between physical head movement and the corresponding update of the visual display. It must be kept under 20 milliseconds ("motion-to-photon" latency) to avoid "swimmy" scenes.
  - **Judder:** The visual smearing or strobing of images caused by low frame rates or the lack of low-persistence display technology.
- **Design Implication:** Optimizing performance is a safety requirement, not just an aesthetic choice. Dropping below 60 FPS (or 75-90 FPS depending on hardware) breaks immersion and induces sickness.

**Locomotion and Acceleration**

- **Definition:** The mechanics of moving a user through virtual space.
- **Design Implication:** The inner ear detects acceleration, not velocity.
  - **Avoid Acceleration:** Moving the user with constant velocity is safer than speeding up or slowing down.
  - **Cockpit Mode:** Placing the user inside a static reference frame (like a car or spaceship cockpit) helps "ground" the vestibular system and reduces nausea during movement.
  - **Teleportation:** Instant movement is often preferred over artificial walking.

**Diegetic vs. Non-Diegetic UI**

- **Definition:**
  - **Non-Diegetic (HUD):** 2D overlays "stuck" to the user's face (like a health bar in a traditional FPS). These are uncomfortable and break immersion in VR.
  - **Diegetic:** Interface elements that exist as 3D objects within the game world (e.g., checking a wristwatch for the time, or a holographic map on a table).
- **Design Implication:** VR interfaces should be diegetic whenever possible. If text is needed, it should be placed in the world at a readable distance, not glued to the screen.

**Gaze-Based Interaction (The Reticle)**

- **Definition:** A user interface pattern where a cursor (reticle) is fixed to the center of the user's field of view.
- **Design Implication:** Users interact by rotating their head to "look" at objects. This is often paired with a timeout (dwell) or a button press to confirm selection.


**The Comfort Zone**

- **Definition:** The optimal depth range for placing content to avoid eye strain.
- **Design Implication:** Objects should generally be placed between 0.75 meters and 3.5 meters from the user. Objects closer than 0.75 meters cause uncomfortable eye convergence (crossing eyes), while objects too far away lose stereoscopic depth impact.
