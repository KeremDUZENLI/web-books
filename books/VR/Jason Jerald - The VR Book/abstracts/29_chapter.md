# Chapter 29: Interaction: Design Guidelines

---

## Main Idea

- This chapter serves as a comprehensive summary and practitioner's checklist for Part V, consolidating guidelines for human-centered interaction, input device selection, and interaction techniques.
- It emphasizes that there is no "silver bullet" for VR interaction; designers must match the technique to the specific task and user, prioritizing intuitiveness, comfort, and the appropriate level of fidelity (realistic vs. magical).

---

## Key Principles & Guidelines

**Human-Centered Design**

- [cite_start]**Definition:** Designing interfaces based on how humans naturally perceive and interact with the world[cite: 1323].
- **Design Implication:** Prioritize intuitiveness over novelty. [cite_start]Ensure **affordances** (relationships between user and object) are perceivable through clear **signifiers**[cite: 1338]. [cite_start]Use **constraints** to prevent errors and add realism, but allow experts to bypass them[cite: 1341]. [cite_start]Provide immediate **feedback** (visual/audio) to confirm actions, especially when haptics are missing[cite: 1350].

**Mapping Compliance**

- [cite_start]**Definition:** The alignment between physical control and virtual response[cite: 1356].
- **Design Implication:**
    -   **Directional Compliance:** The virtual object should move in the same direction as the controller.
    -   [cite_start]**Nulling Compliance:** The virtual object should return to neutral when the controller does[cite: 1360].
    -   [cite_start]**Temporal Compliance:** Response should be immediate; if not, provide a "working" indicator[cite: 1363].

**Reference Frames & Proprioception**

- [cite_start]**Definition:** The coordinate systems used for interaction (World, Torso, Hand, Head)[cite: 1397].
- [cite_start]**Design Implication:** Use the **Torso Reference Frame** for tool storage (e.g., toolbelts) to leverage muscle memory/proprioception[cite: 1402]. [cite_start]Use the **Real-World Reference Frame** for rest frames (cockpits) to reduce sickness[cite: 1400]. [cite_start]Avoid heavy use of the **Head Reference Frame** for UI (HUDs) to prevent occlusion and eye strain[cite: 1353].

**Input Device Selection**

- [cite_start]**Definition:** Choosing hardware based on task requirements (DoF, precision, ergonomics)[cite: 1450].
- [cite_start]**Design Implication:** Use **6 DoF** devices for spatial manipulation[cite: 1455]. [cite_start]Use **buttons** for frequent, binary, or abstract tasks[cite: 1457]. [cite_start]Use **props** (tracked physical objects) when tactile feedback is critical for presence[cite: 1465].

**Viewpoint Control & Sickness**

- [cite_start]**Definition:** Techniques for moving the user through the virtual world[cite: 1508].
- [cite_start]**Design Implication:** To minimize sickness, prioritize **Real Walking** or **Teleportation**[cite: 1530]. [cite_start]If artificial locomotion (Steering/Automated) is necessary, keep velocity constant, avoid acceleration/deceleration, and provide stable reference cues[cite: 1535].

---

## Practical Use

**Gaze Interaction Rules**

- Do not use eye tracking for direct selection ("Midas Touch" problem) unless necessary. [cite_start]Instead, use passive gaze to provide context or have characters respond to being looked at[cite: 1470].

**The "Working Volume"**

- Avoid interactions that require holding hands up high or fully extended for long periods. [cite_start]Design for the "lap" or "side" positions to prevent "Gorilla Arm" fatigue[cite: 1439].
