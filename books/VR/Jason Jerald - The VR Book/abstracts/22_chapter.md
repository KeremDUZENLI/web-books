# Chapter 22: Affecting Behavior

---

## Main Idea

- This chapter discusses how the strong sense of presence in VR allows content creators to influence user behavior significantly more than in other media, particularly through environmental cues and social interactions.
- It details specific design mechanisms—such as wayfinding aids (maps, landmarks, trails) and social norms (personal space, body language)—that help users navigate, understand, and interact socially within virtual worlds.

---

## Key Principles & Guidelines

**Wayfinding Aids (Maps & Compasses)**

- **Definition:** Tools used to orient the user, including **maps** (symbolic representations of space) and **compasses** (directional indicators).
- **Design Implication:** Dynamic "you-are-here" markers and orientation arrows are critical for large environments. Maps should often be abstract rather than literal to improve clarity, and "forward-up" maps are generally easier to use than "North-up" maps during active navigation.

**Landmarks (Global vs. Local)**

- **Definition:** Distinct objects that aid navigation.
    -   **Global Landmarks:** Distant, visible from everywhere (e.g., a mountain, the sun) to provide heading information.
    -   **Local Landmarks:** Distinct objects in the immediate vicinity (e.g., a statue) to define specific locations.
- **Design Implication:** Global landmarks act as a compass, helping users maintain a stable sense of direction. Designers should place them strategically to prevent users from getting lost in open worlds.

**Trails (Breadcrumbs)**

- **Definition:** Visual markers (like footprints or a line) that show where the user has been or where they should go.
- **Design Implication:** Trails reduce cognitive load by externalizing memory; users don't have to remember their path in complex labyrinths if they can see their history visually.

**Reference Frames**

- **Definition:** Visual cues (like grids, ground planes, or texture gradients) that define the scale and orientation of the space.
- **Design Implication:** In abstract or empty voids, users lose the ability to judge size and distance. Adding a reference grid or ground texture instantly provides necessary scale cues.

**Social Interaction & Body Language**

- **Definition:** The behavioral norms and non-verbal cues that transfer from the real world to VR.
    -   **Personal Space:** Users feel a strong urge to back away if an avatar invades their intimate zone.
    -   **Involuntary Motion:** Fidgeting and subtle movements are hard to hide in VR.
- **Design Implication:** To make NPCs feel real, they must follow biological motion hierarchies: eyes turn first, then the head, then the body. Ignoring this sequence makes characters feel robotic.

---

## Practical Use

**Designing Natural NPC Attention**

- When a computer-controlled character notices a user, simply rotating the character's body is insufficient. The animation should start with eye movement toward the target, followed by head rotation, and finally body rotation. This subtle latency mimics real human physiology and signals "attention" effectively.

**Social Norms in VR**

- Unlike in 2D video games where players crowd continuously, VR users respect social bubbles. Designers of social spaces (like VRChat) must account for this by providing enough room for users to stand comfortably without feeling crowded, as the psychological pressure of "presence" makes violations of personal space uncomfortable.
