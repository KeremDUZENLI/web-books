# Chapter 26: VR Interaction Concepts

---

## Main Idea

- This chapter focuses on interaction concepts, challenges, and benefits specific to VR, discussing the trade-offs between realistic ("high-fidelity") and "magical" interactions.
- It explores the importance of reference frames—ranging from world-centric to body-centric—and details methods for handling sensory limitations through multimodal input and sensory substitution.

---

## Key Principles & Guidelines

**Interaction Fidelity**

- **Definition:** The degree to which physical actions used for a virtual task correspond to the physical actions used in the equivalent real-world task.
    -   **Realistic (High Fidelity):** Imitates reality (e.g., swinging a bat). Crucial for training to avoid negative transfer.
    -   **Magical (Low Fidelity):** Uses metaphors to provide superhuman abilities (e.g., pointing to fly). Good for efficiency and enjoyment.
- **Design Implication:** Fidelity consists of **Biomechanical Symmetry** (body movement match), **Input Veracity** (measurement accuracy), and **Control Symmetry** (degrees of freedom). Designers should choose the level of fidelity based on whether the goal is skill transfer (high) or empowerment (low).

**Reference Frames**

- **Definition:** Coordinate systems used to locate and orient objects, essential for intuitive interaction.
    -   **Virtual-World:** Global coordinates (North/East), best for large-scale navigation.
    -   **Real-World:** The physical room; important for locating physical props or controllers.
    -   **Torso:** Defined by the user's body facing; useful for "body-relative" tools (utility belts).
    -   **Hand:** Defined by the controller; critical for grasping and tool usage.
    -   **Head/Eye:** Defined by the view; used for gaze-directed selection, though HUDs here can cause eye strain.
- **Design Implication:** Misaligning interaction techniques with the wrong reference frame (e.g., a HUD in the head frame vs. the torso frame) causes usability issues. The torso frame utilizes proprioception effectively, allowing users to grab items without looking.

**Multimodal Interaction**

- **Definition:** Combining multiple input/output modalities (speech, gesture, gaze) to improve interaction.
    -   **Redundancy:** Using two inputs for the same command (voice + button) to reduce errors.
    -   **Complementarity:** Merging different inputs (point + voice) to speed up complex tasks.
- **Design Implication:** "Put-That-There" style interfaces allow users to offload cognitive effort by using the best modality for each sub-task (e.g., voice for commands, hands for selection).

**Sensory Substitution**

- **Definition:** Replacing missing sensory cues (usually haptic/tactile) with visual or auditory cues.
    -   **Ghosting:** Rendering a second transparent hand where the physical hand actually is when the virtual hand is blocked by collision.
    -   **Highlighting:** visually outlining objects to indicate interactability or collision.
    -   **Audio/Rumble:** Using sound or vibration to confirm contact.
- **Design Implication:** Since VR often lacks solid physical feedback, these substitutes are required to confirm to the user that an action (like touching a wall or grabbing a bottle) has occurred.

**Gestures (Direct vs. Indirect)**

- **Definition:**
    -   **Direct:** Immediate structural actions (e.g., pushing a button, pointing).
    -   **Indirect:** Symbolic actions requiring interpretation over time (e.g., waving hello).
- **Design Implication:** Direct gestures are generally faster and more reliable. Indirect gestures allow for complex communication but suffer from recognition latency and errors.

---

## Practical Use

**Redirected Touching**

- A haptic illusion where virtual space is warped to map multiple differently shaped virtual objects onto a single physical prop. Because vision dominates proprioception, users perceive the shape they see rather than the slight discrepancies they feel, allowing a single real object to serve as many virtual ones.

**Proprioceptive Mnemonics**

- Using the **Torso Reference Frame** to place tools (e.g., a virtual holster). Because users know where their body parts are without looking (proprioception), they can retrieve these tools instinctively. This acts as a physical mnemonic, making controls easier to remember and access than menu systems.
