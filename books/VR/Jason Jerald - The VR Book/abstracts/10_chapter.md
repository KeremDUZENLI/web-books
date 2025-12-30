# Chapter 10: Perceptual Stability, Attention, and Action

---

## Main Idea

- This chapter examines how the brain maintains a stable perception of the world (perceptual constancy) despite continuous changes in sensory input caused by eye, head, and body movements.
- It explores the mechanisms of attention (filtering information) and adaptation (adjusting to new conditions), and connects these perceptual processes to action, highlighting that we perceive the environment largely to interact with it through navigation and manipulation.

---

## Key Principles & Guidelines

**Perceptual Constancy**

- **Definition:** The phenomenon where objects appear to remain constant in size, shape, color, and position even as the proximal stimuli (retinal images) change due to movement or lighting variations.
    - **Size Constancy:** Objects appear the same size regardless of distance (Emmert's Law).
    - **Shape Constancy:** Objects appear the same shape despite viewing angle changes.
    - **Lightness/Color Constancy:** Objects appear to have the same reflectance despite lighting changes.
    - **Position Constancy:** The world appears stationary even when the eyes move.
- **Design Implication:** VR systems must respect these internal models. For example, if system latency causes the world to shift when the head turns (violating position constancy), it breaks the illusion and causes sickness. Lighting models must be consistent to support lightness constancy.

**Adaptation**

- **Definition:** The process by which the perceptual system adjusts to changes in the environment or the sensory organs themselves.
    - **Dark/Light Adaptation:** The eye's adjustment to illumination levels. Dark adaptation is slow (20+ minutes), while light adaptation is fast (~5 minutes).
    - **Prismatic Adaptation:** The brain's ability to recalibrate motor output to visual input (e.g., learning to throw a ball accurately while wearing prism glasses that shift the view).
- **Design Implication:** Designers should avoid sudden, blinding transitions from dark to bright scenes. Prismatic adaptation explains how users can eventually "get used to" slight miscalibrations in VR, though it may cause aftereffects when returning to the real world.

**Attention and Blindness**

- **Definition:** Attention acts as a filter or "spotlight" that selects a small fraction of sensory input for processing.
    - **Change Blindness:** Inability to detect changes in a scene (even large ones) if they occur during a disruption (e.g., a blink or cut).
    - **Inattentional Blindness:** Failing to see visible objects because attention is focused elsewhere (e.g., the "invisible gorilla").
- **Design Implication:** VR designers can exploit these phenomena to hide low-resolution details or rendering artifacts in areas where the user is not focused (e.g., foveated rendering, level-of-detail management).

**Affordances (Gibson)**

- **Definition:** Action possibilities provided by the environment to an observer (e.g., a flat surface affords walking, a handle affords grasping).
- **Design Implication:** Virtual objects should clearly communicate their interaction potential. If a door looks like it has a handle, it should be graspable; mismatching visual affordances with interaction logic breaks presence.

**The Perception-Action Loop**

- **Definition:** Perception and action are coupled; we perceive to act, and we act to perceive.
- **Design Implication:** Passive observation is less engaging than active exploration. VR is most powerful when it closes this loop, allowing users to physically move (locomotion) and manipulate objects, thereby continuously updating their perceptual input through their own actions.

---

## Practical Use

**The "Spotlight" of Attention**

- Since users cannot pay attention to everything, designers should use visual and audio cues (like 3D spatialized sound or lighting changes) to direct the user's "spotlight" to critical narrative events or interface elements.

**Handling Latency (Position Constancy)**

- To maintain position constancy, the VR system must update the display to match head motion almost instantaneously. If the "efference copy" (the brain's prediction of movement) does not match the visual feedback (due to latency), the world will appear to swim or drift, leading to disorientation.
