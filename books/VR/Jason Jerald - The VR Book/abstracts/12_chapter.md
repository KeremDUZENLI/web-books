# Chapter 12: Motion Sickness

---

## Main Idea

- This chapter addresses the most common negative health effect of VR—motion sickness (or cybersickness)—by analyzing its causes, symptoms, and the underlying physiological mechanisms.
- It details several competing and complementary theories (Sensory Conflict, Evolutionary, Postural Instability, Rest Frame, and Eye Movement) and culminates in a unified model, emphasizing that sickness usually stems from a mismatch between the user's internal mental model, their physical state, and the sensory feedback provided by the VR system.

---

## Key Principles & Guidelines

**Visually vs. Physically Induced Sickness**

- **Definition:** **Visually induced motion sickness** occurs due to visual motion alone (e.g., in VR) and can be stopped by closing the eyes. **Physically induced motion sickness** occurs due to actual physical motion (e.g., cars, boats) and cannot be stopped by closing the eyes.
- **Design Implication:** VR sickness is distinct from travel sickness; vomiting is less common, but disorientation and ocular strain are more prevalent. Developers must minimize unintentional visual cues that trigger this response.

**Sensory Conflict Theory**

- **Definition:** The most widely accepted theory; sickness results when inputs across sensory modalities (primarily visual vs. vestibular/proprioceptive) are incompatible with each other or the user's expectations.
- **Design Implication:** If a user visually accelerates forward in VR but their inner ear (vestibular system) feels no acceleration, conflict occurs. Constant velocity is less problematic than acceleration because the vestibular system primarily detects changes in velocity (acceleration), not velocity itself.

**Evolutionary (Poison) Theory**

- **Definition:** A theory suggesting that the brain interprets sensory mismatch as a sign of hallucination caused by ingested neurotoxins. The body initiates an emetic response (nausea/vomiting) to expel the "poison."
- **Design Implication:** This explains the survival function of sickness. Sickness is a defense mechanism, not just a bug, meaning it is deeply hardwired and difficult to bypass without precise sensory alignment.

**Postural Instability Theory**

- **Definition:** Sickness arises when an animal has not yet learned strategies to maintain balance in a novel environment. Postural instability (swaying/loss of balance) both precedes and causes sickness.
- **Design Implication:** Users often get their "VR legs" over time (adaptation). Allowing users to learn how to balance in the virtual world (e.g., by not forcing unnatural camera movements) can reduce sickness.

**Rest Frame Hypothesis**

- **Definition:** Sickness does not arise from cue conflict directly, but from conflicting definitions of what is stationary (the "rest frame"). The brain typically assumes the background is stable.
- **Design Implication:** If the virtual background moves unpredictably, the user loses their rest frame. Providing a static visual reference that matches the user's physical inertial frame (like a cockpit, a nose, or a virtual grid) helps ground the user and reduces sickness.

**Eye Movement Theory**

- **Definition:** Unnatural eye movements (nystagmus) required to stabilize a moving image on the retina can over-stimulate the vagus nerve, leading to nausea.
- **Design Implication:** Providing fixation points helps stabilize the eyes, reducing the optokinetic reflex that contributes to sickness.

---

## Practical Use

**Active vs. Passive Control**

- Drivers rarely get sick, but passengers do. Similarly, VR users who actively control their viewpoint (active transport) experience less sickness than those who are passively moved through a scene, because the active user can predict the sensory feedback (efference copy) of their actions.

**Avoiding Artificial Motion**

- **Head Bobbing:** Never add artificial head bobbing to a camera; it creates unnecessary sensory conflict.
- **Lateral Movement:** Strafing (moving sideways) is rare in the real world and often induces sickness in VR.
- **Acceleration:** Linear acceleration of the camera is more sickness-inducing than constant velocity.
