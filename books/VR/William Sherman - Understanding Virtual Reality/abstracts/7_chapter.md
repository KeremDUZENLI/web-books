# Chapter 7: Interacting With the Virtual World

---

## Main Idea

- This chapter defines interaction in Virtual Reality as a reciprocal action where the computer-generated environment responds to user inputs, distinguishing VR from passive media.
- It categorizes interaction into three primary domains: **Manipulation** (modifying the world), **Navigation** (moving through the world), and **Communication** (interacting with others or agents).

---

## Key Principles & Guidelines

**Forms of Manipulation**

- **Definition:** The methods by which users modify virtual objects or environments.
    - **Direct User Control:** Mimics real-world gestures (e.g., making a fist to grab).
    - **Physical Control:** Uses real-world devices (steering wheels, props) for haptic feedback.
    - **Virtual Control:** Entirely virtual widgets (menus, sliders) located within the world.
    - **Agent Control:** Issuing commands to an intelligent intermediary (e.g., voice commands to a pilot).
- **Design Implication:** Physical controls offer better tactile feedback, while virtual controls provide infinite flexibility. The choice depends on the required fidelity and task complexity.

**Navigation: Wayfinding vs. Travel**

- **Definition:** Navigation is the aggregate of **Wayfinding** (the cognitive process of determining a path) and **Travel** (the motor action of moving through space).
- **Design Implication:** A system must support both; providing travel mechanics (like flying) without wayfinding aids (like maps or landmarks) results in user "lostness."

**Travel Paradigms**

- **Definition:** Specific metaphors for movement:
    - **Physical Locomotion:** Walking in the real world to move in the virtual one.
    - **Ride Along/Towrope:** Passive or semi-passive movement guided by the system.
    - **Fly-Through/Walkthrough:** Unconstrained movement using direction and speed inputs.
    - **Put-Me-There:** Instantaneous movement to a destination (teleportation).
- **Design Implication:** "Ride Along" minimizes motion sickness but reduces agency. "Put-Me-There" allows rapid transit but can cause spatial disorientation.

**Selection Techniques**

- **Definition:** Methods to identify targets for interaction.
    - **Direction Selection:** Pointer, Gaze, Reticle, Torso, and Device-directed methods.
    - **Item Selection:** Contact-Select (touching), Menu-Select, Aperture-Select (pinching fingers), and Name-to-Select (voice).
- **Design Implication:** Selection requires feedback (highlighting) to confirm the target before activation. Techniques like "gaze-directed" are simple but prevent looking around while traveling.

**Collaborative Interaction**

- **Definition:** Shared experiences categorized by temporal synchronization (Synchronous vs. Asynchronous) and world consistency.
- **Design Implication:** Systems must manage "floor control" (who can act) and "world congruity" (ensuring all users see the same state) to facilitate effective collaboration.

---

## Formulas (Optional)

**Movement Formula**

- **Formula:** $loc_{new} = gain \times time^{order} + loc_{old}$
- **Context:** Describes how user input maps to movement. **Control Order** defines the type of movement: Zero-order (displacement), First-order (velocity), Second-order (acceleration).
- **Note:** Acceleration control (second-order) is generally unstable for humans and should be avoided.

---

## Practical Use

**Wayfinding Strategies**

- Users build mental models to navigate. Designers should support strategies like **Global Network** (using landmarks) and **Divide and Conquer** (learning sub-regions) by placing clear, visible markers and maps (You-Are-Here) in the environment.

**Metacommands (System Interaction)**

- Interactions with the simulation itself rather than the virtual world (e.g., loading a file, resetting a simulation). These are often handled via "Wizard of Oz" control (an external operator) or virtual menus to avoid breaking immersion.

**Feedback Loops**

- Because virtual objects often lack physical substance, visual (color change) or aural (sound effect) feedback is critical to confirm that a selection has been made or an action (like a button press) has occurred.
