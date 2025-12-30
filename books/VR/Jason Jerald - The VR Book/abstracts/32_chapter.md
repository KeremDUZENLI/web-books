# Chapter 32: The Make Stage

---

## Main Idea

- This chapter focuses on the implementation phase of VR development, where theoretical designs are converted into tangible experiences through code, hardware integration, and asset creation.
- It advocates for using existing development engines (like Unity or Unreal) over custom engines and details the technical challenges unique to VR—such as "fighting physics," maintaining frame rates, and managing complex networked environments—while emphasizing the importance of diverse prototyping methods.

---

## Key Principles & Guidelines

**Task Analysis**

- **Definition:** The process of decomposing user goals into specific physical actions and cognitive processes.
- **Design Implication:** Understanding the hierarchy of tasks (e.g., breaking "pick up object" into "locate, reach, grasp") helps identify necessary affordances and potential friction points before code is written.

**Design Specifications**

- **Definition:** Tools used to document the system architecture before and during build.
    -   **Sketches:** Quick, disposable drawings to explore ideas (not finished art).
    -   **Block Diagrams:** High-level views of system components (inputs, outputs, processing).
    -   **Use Cases:** Step-by-step descriptions of interactions from the user's perspective.
    -   **Software Patterns:** Reusable code structures (e.g., Singletons, Factories) to speed up development.

**System Considerations**

- **Definition:** Critical technical trade-offs made early in the project.
- **Design Implication:** Decisions must be made regarding **Interaction Fidelity** (realism vs. magic) and **Hardware Support** (supporting multiple device classes is difficult and often results in a "lowest common denominator" experience). Frame rate must match the HMD refresh rate; if it drops, the scene should fade out rather than show judder.

**Simulation & "Fighting Physics"**

- **Definition:** The conflict that occurs when a user's absolute hand position (tracked hardware) disagrees with the physics engine's calculated position (virtual object collision).
- **Design Implication:** If a user pushes a virtual object into a wall, the physics engine tries to push it out while the hand holds it in. This causes **jitter** or massive forces that send objects flying.
    -   **Solution:** Disable physics on an object while it is being held (kinematic mode), or allow the virtual hand to separate from the physical hand (ghosting) during collision.

**Networked Environments**

- **Definition:** Distributed systems where multiple users share a state.
    -   **Consistency:** Ensuring all users see the same thing (Synchronization, Causality, Concurrency).
    -   **Dead Reckoning:** Estimating where a remote user is moving between network packets to smooth out motion and reduce bandwidth.
    -   **Protocols:** Use **UDP** for fast, non-critical data (position updates); use **TCP** for critical, one-time events (game state changes).

**Prototyping Types**

- **Wizard of Oz:** A human manually triggers system responses to test concepts before coding.
- **Programmer Prototypes:** Rough "grey box" tests for mechanics.
- **Stakeholder Prototypes:** Polished enough to show vision but not final.
- **Marketing Prototypes:** Highly polished slices of the game used for trade shows.

---

## Practical Use

**Handling Jitter**

- Physics simulations often suffer from round-off errors causing objects to vibrate on the floor. A practical fix is **damping** or clamping motion to zero when velocity falls below a small threshold.

**The Demo Protocol**

- Demos are the "lifeblood" of VR credibility. Always bring backup equipment (cables, PCs) and, if possible, set up the demo in a different room the day before to ensure all components are packed and working. A broken demo is often perceived as a broken concept.
