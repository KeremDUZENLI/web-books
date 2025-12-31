# Chapter 29: Interaction: Design Guidelines

---

## Main Idea

- This chapter serves as a comprehensive summary and practitioner's checklist for Part V, consolidating guidelines for human-centered interaction, input device selection, and interaction techniques.
- It emphasizes that there is no "silver bullet" for VR interaction; designers must match the technique to the specific task and user, prioritizing intuitiveness, comfort, and the appropriate level of fidelity (realistic vs. magical).

---

## Key Principles & Guidelines

**Human-Centered Design**

- **Definition:** Designing interfaces based on how humans naturally perceive and interact with the world.
- **Design Implication:** Prioritize intuitiveness over novelty. Ensure **affordances** (relationships between user and object) are perceivable through clear **signifiers**.

**Mapping Compliance**

- **Definition:** The alignment between physical control and virtual response.
- **Design Implication:**
  - **Directional Compliance:** The virtual object should move in the same direction as the controller.
  - **Nulling Compliance:** The virtual object should return to neutral when the controller does.
  - **Temporal Compliance:** Response should be immediate; if not, provide a "working" indicator.

**Reference Frames & Proprioception**

- **Definition:** The coordinate systems used for interaction (World, Torso, Hand, Head).
- **Design Implication:** Use the **Torso Reference Frame** for tool storage (e.g., toolbelts) to leverage muscle memory/proprioception.

**Input Device Selection**

- **Definition:** Choosing hardware based on task requirements (DoF, precision, ergonomics).
- **Design Implication:** Use **6 DoF** devices for spatial manipulation.

**Viewpoint Control & Sickness**

- **Definition:** Techniques for moving the user through the virtual world.
- **Design Implication:** To minimize sickness, prioritize **Real Walking** or **Teleportation**.

---

## Practical Use

**Gaze Interaction Rules**

- Do not use eye tracking for direct selection ("Midas Touch" problem) unless necessary. Instead, use passive gaze to provide context or have characters respond to being looked at.

**The "Working Volume"**

- Avoid interactions that require holding hands up high or fully extended for long periods. Design for the "lap" or "side" positions to prevent "Gorilla Arm" fatigue.
