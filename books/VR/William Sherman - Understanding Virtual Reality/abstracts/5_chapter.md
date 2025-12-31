# Chapter 5: Virtual Reality Paradigms

---

## Main Idea

- This chapter explores the specific implementations of the three primary VR paradigms: Head-Based, Stationary, and Hand-Based.
- It details the hardware configurations, display technologies, and unique interaction affordances of each paradigm, including a focused examination of Augmented Reality (AR) systems and the critical challenge of registration.

---

## Key Principles & Guidelines

**Head-Based Paradigm (HMDs)**

- **Definition:** Systems where the display is attached to the user's head.
    - **Opaque HMDs:** Strictly VR. Occludes the real world completely.
    - **See-Through HMDs:** Used for AR. Allows the user to see the physical world with virtual overlays.
- **Design Implication:** HMDs provide superior 360-degree immersion and are portable but isolate the user from the immediate physical environment and their own body, often requiring avatars for self-representation.

**Stationary Paradigm (World-Fixed)**

- **Definition:** The display is fixed in the physical world, and the user moves relative to it.
    - **CAVEs:** Room-sized environments with projection on multiple walls.
    - **Fishtank VR:** Smaller, desktop-based stereo displays with head tracking.
- **Design Implication:** Stationary systems offer high resolution, a wide field of view, and reduced fatigue (lighter glasses). They naturally support collaboration (users can see each other) and physical awareness (users see their own bodies) but are expensive and non-portable.

**Hand-Based Paradigm**

- **Definition:** The user holds the display (e.g., smartphone, tablet) in their hand.
- **Design Implication:** Acts as a "magic window" or portal. It has low immersion due to the small field of view and lack of stereopsis in many cases, but it is highly accessible and excellent for "quick look" AR applications.

**AR Implementation: Video vs. Optical See-Through**

- **Video See-Through:** Cameras capture the real world, combine it with virtual graphics, and display the result on an opaque screen. Easier to match brightness and verify registration, but introduces latency and reduces resolution of the real world.
- **Optical See-Through:** Uses combiners (half-silvered mirrors) to optically overlay graphics on the real world. Zero latency for the real world view, but difficult to occlude real objects with virtual ones (virtual objects appear ghostly).

**Registration in AR**

- **Definition:** The precise alignment of virtual objects with the real world in both position and orientation.
- **Design Implication:** Poor registration breaks the illusion of AR. Latency is the enemy; if the user moves their head and the virtual cup slides off the physical table, the effect fails.

---

## Practical Use

**Choosing the Right Paradigm**

- **CAVEs** are ideal for collaborative design reviews (e.g., automotive, architecture) where multiple experts need to discuss a model simultaneously.
- **HMDs** are best for training simulations (e.g., flight sims) or experiences requiring complete isolation from the real world.
- **Hand-Based** is the standard for mass-market consumer AR due to the ubiquity of smartphones.
