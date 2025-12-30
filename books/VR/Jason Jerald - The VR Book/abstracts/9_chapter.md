# Chapter 9: Perception of Space and Time

---

## Main Idea

- This chapter investigates how humans perceive the spatial layout (depth, distance) and temporal flow (motion, duration) of the world, highlighting that these are mental constructions rather than direct reflections of reality.
- It provides a comprehensive taxonomy of depth cues—ranging from static pictorial cues to dynamic motion and oculomotor cues—and explains how VR systems must adhere to the brain's temporal rules to maintain illusions like motion continuity and self-motion (vection) while avoiding artifacts like judder.

---

## Key Principles & Guidelines

**Egocentric vs. Exocentric Perception**

- **Definition:** **Egocentric judgments** define where objects are relative to the observer (subject-relative), while **Exocentric judgments** define where objects are relative to each other (object-relative).
- **Design Implication:** VR interfaces must handle reference frames carefully. Egocentric perception is less stable in the dark (autokinetic effect), so providing stable visual cues is essential for accurate user orientation.

**Depth Cues Hierarchy**

- **Definition:** The brain constructs 3D space using four categories of cues:
  - **Pictorial:** Static monocular cues like **Occlusion** (strongest cue), **Linear Perspective** (parallel lines converging), and **Texture Gradient**.
  - **Motion:** **Motion Parallax** (objects moving at different speeds relative to the head).
  - **Binocular:** **Stereopsis** (disparity between eyes), effective mainly in personal space (<2m).
  - **Oculomotor:** **Accommodation** (lens focus) and **Vergence** (eye rotation), only effective up to ~2 meters.
- **Design Implication:** Occlusion is the most critical cue; if a "heads-up display" is not properly occluded by closer virtual objects, it causes depth conflict. Designers should avoid placing essential content close to the face to prevent accommodation-vergence conflicts.

**Time Perception & Latency**

- **Definition:**
  - **Delayed Perception:** Consciousness lags behind reality by ~100ms due to neural processing time.
  - **Perceptual Moment:** The smallest psychological unit of time (approx. 100ms); stimuli within this window are perceived as simultaneous.
- **Design Implication:** While humans live in the "past" biologically, adding system latency in VR creates a mismatch between proprioception (body move) and vision (screen update), leading to motion sickness. The system must update faster than the brain's integration window.

**Apparent Motion (Strobing and Judder)**

- **Definition:** The illusion of motion created by flashing discrete stimuli.
  - **Strobing:** Perception of multiple copies of a stimulus (due to high persistence).
  - **Judder:** Perception of jerky, non-smooth motion.
- **Design Implication:** These artifacts are controlled by the **Stimulus Onset Asynchrony (SOA)**. To minimize judder in VR, developers must minimize stimulus duration (persistence) and maximize frame rate, ensuring the eye doesn't see "smears" as it tracks objects.

**Vection**

- **Definition:** The illusion of self-motion caused by a large moving visual field (e.g., feeling like you are moving when a train next to you leaves).
- **Design Implication:** Vection is triggered by large, peripheral, consistent motion. It can be used to simulate movement without physical walking, but uncontrollable vection causes nausea. Providing a static "rest frame" (like a cockpit) reduces unwanted vection.

**Biological Motion**

- **Definition:** The human ability to recognize complex human movements from minimal cues (e.g., just a few moving light points on joints).
- **Design Implication:** Users are highly sensitive to avatar motion. If an avatar's movement is slightly "off" (even if the model is high-fidelity), it breaks immersion more than a simple model with perfect motion.

---

## Practical Use

**Distance Compression**

- Users in VR tend to underestimate egocentric distances (the world feels smaller/closer). Designers may need to exaggerate distances or scale environments to make them feel "correct" compared to the real world.

**The Pivot Hypothesis**

- If a virtual object is rendered at a different distance than where the user perceives it to be, head movement will cause the object to appear to move or "pivot" with the head. Accurate depth cues are required to anchor objects in 3D space.
