# Chapter 31: The Define Stage

---

## Main Idea

- This chapter details the "Define Stage" of VR project management, advocating for a balance between clear initial planning and the flexibility of iterative design to avoid "analysis paralysis."
- It introduces specific methodologies—such as SMART objectives, personas, user stories, and constraint analysis—to establish the project's vision, scope, and requirements while actively managing risks and stakeholder expectations.

---

## Key Principles & Guidelines

**The Vision and Speculation**

- **Definition:** The initial concept of the project, acknowledging that early definitions are "articulated guesses" rather than final solutions.
- **Design Implication:** Teams must start by guessing to expose assumptions; this allows the problem formulation and the solution to evolve together through iteration.

**SMART Objectives**

- **Definition:** A framework for setting goals that are **S**pecific, **M**easurable, **A**chievable, **R**elevant, and **T**ime-bound.
- **Design Implication:** Focuses the team on business outcomes and user benefits (e.g., "increase productivity by 30%") rather than just engineering features, ensuring the project delivers actual value.

**Project Constraints Taxonomy**

- **Definition:** Categorizing limitations to understand what is truly fixed and what is flexible.
    -   **Real:** True impediments (e.g., physics, rules).
    -   **Resource:** Supply limitations (money, time, CPU/GPU budget).
    -   **Obsolete:** Constraints that no longer apply due to tech improvements.
    -   **Misperceived:** False beliefs that limit solutions (e.g., assuming real-world gravity must apply in VR).
    -   **Intentional Artificial:** Constraints added by the designer to simplify interaction.
- **Design Implication:** Identifying "misperceived constraints" allows creators to think outside the box, while adding "intentional constraints" can guide users and improve usability.

**Personas**

- **Definition:** Fictional models representing specific target users, detailing their needs, pain points, and competencies.
- **Design Implication:** Prevents the trap of designing for a generic "everyone"; specific personas help validate design decisions and ensure the application meets the needs of the actual audience.

**User Stories (INVEST)**

- **Definition:** Short descriptions of features from the user's perspective ("As a [user], I want [goal] so that [reason]"), ideally adhering to the **INVEST** criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable).
- **Design Implication:** Breaks complex requirements into manageable, testable units that keep the focus on user value rather than technical implementation details.

**Universal VR Requirements**

- **Definition:** Non-negotiable quality requirements specific to VR comfort, such as maintaining <30ms latency and matching the display's refresh rate.
- **Design Implication:** If these requirements are not met during runtime, the system should fail gracefully (e.g., fading to black or switching to a simpler rendering mode) to prevent user sickness, rather than displaying a stuttering image.

---

## Practical Use

**Planning Poker**

- A gamified estimation technique where team members secretly write down time estimates for a task and reveal them simultaneously. This prevents "anchoring" (being influenced by others) and highlights outliers for discussion, leading to more accurate project timelines.

**The "Nine Dots" Puzzle**

- An exercise used to demonstrate "misperceived constraints." Users often fail to connect nine dots with four lines because they subconsciously assume the lines must stay within the square. Realizing this constraint is self-imposed allows for the solution, illustrating how VR designers must question their assumptions about reality.
