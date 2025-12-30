# Chapter 34: Iterative Design: Design Guidelines

---

## Main Idea

- This chapter serves as the concluding summary for Part VI, consolidating the principles of the iterative design process—Define, Make, and Learn.
- It reiterates that because VR involves so many unknowns, there is no single "correct" process; instead, teams must adopt a philosophy of continuous discovery, failing early and often, and prioritizing user experience over traditional software metrics like lines of code.

---

## Key Principles & Guidelines

**Philosophy of Iteration**

- **Definition:** A mindset that values rapid prototyping and feedback over rigid planning.
- **Design Implication:**
    -   **Fail Early:** If failure isn't occurring in early iterations, the team isn't innovating enough.
    -   **Culture:** Create a safe environment for experimentation.
    -   **Team Structure:** Keep teams small; if they get too large, break them up. Every member should co-create, not just critique.

**The Define Stage Guidelines**

- **Vision & Objectives:** Use **SMART** objectives (Specific, Measurable, Attainable, Relevant, Time-bound). When the vision is unclear, guess—articulated guesses are better than vague models.
- **Constraints:** Explicitly list constraints to narrow the design space. Watch for **misperceived constraints** (like the "nine dots" puzzle) that limit creativity unnecessarily.
- **Requirements:** Write **User Stories** using the **INVEST** acronym (Independent, Negotiable, Valuable, Estimable, Small, Testable).

**The Make Stage Guidelines**

- **Prototyping:** Start with the minimum work necessary to get feedback. Don't worry about aesthetics in early prototypes.
- **System Decisions:** Do not try to support every hardware device or use the "average" configuration; optimize for specific hardware to ensure quality.
- **Physics & Networking:**
    -   **Fighting Physics:** Stop applying simulated forces to an object when a user picks it up to prevent jitter.
    -   **Networking:** Use UDP for frequent, non-essential updates (position) and TCP for critical state changes. Use dead reckoning to mask latency.

**The Learn Stage Guidelines**

- **Data Collection:** Start with qualitative data (interviews/observation) to understand the "why," then move to quantitative data (metrics) for the "what."
- **Expert Evaluations:** Conduct heuristic reviews early; they are the most cost-effective way to improve usability before testing with real users.
- **Statistical vs. Practical Significance:** A result can be statistically significant (p < 0.05) but practically meaningless (e.g., a 0.1s improvement in a 10-minute task). Focus on what actually impacts the user experience.

---

## Practical Use

**The Demo Rule**

- When traveling for a demo, set up the equipment in a different room the day *before* leaving to ensure every cable and dongle is packed. Pack two backups of everything.

**Planning Poker**

- A technique to estimate development effort where team members reveal estimates simultaneously to avoid biasing each other. It highlights outliers (differing opinions) which leads to valuable discussion about task complexity.
