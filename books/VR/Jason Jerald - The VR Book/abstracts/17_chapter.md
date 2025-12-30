# Chapter 17: Summary of Factors That Contribute to Adverse Effects

---

## Main Idea

- This chapter categorizes the contributing factors of VR sickness into three groups: **System Factors** (hardware/software imperfections), **Individual User Factors** (biological and psychological susceptibility), and **Application Design Factors** (content decisions).
- It emphasizes that while technology can solve system factors, individual differences and design choices remain critical variables, often requiring trade-offs between immersion/presence and user comfort.

---

## Key Principles & Guidelines

**System Factors (Hardware/Software)**

- **Definition:** Technical shortcomings that cause sensory mismatch.
    -   **Latency:** The single greatest cause of VR sickness; lag between head motion and photon response causes "swimming."
    -   **Calibration:** Misaligned FOV parameters, optical distortion, or tracker offsets result in inappropriate scene stability.
    -   **Field of View (FOV):** Wider FOV increases sickness due to greater sensitivity to motion in the periphery (vection).
    -   **Flicker:** High luminance and low refresh rates increase flicker perception, leading to fatigue and potential seizures.
- **Design Implication:** Developers must prioritize minimizing latency and ensuring precise calibration. A "perfect" wide FOV system is safe, but with current imperfections, wider FOV amplifies other errors.

**Individual User Factors**

- **Definition:** Physiological and psychological variances among users that dictate susceptibility (varying by a factor of 10,000 to 1).
    -   **Gender:** Females are approximately three times more susceptible than males.
    -   **Age:** Unlike real-world travel sickness (which decreases after age 21), VR sickness tends to increase with age.
    -   **Health & History:** Current illness (flu, fatigue) and a history of motion sickness are strong predictors of VR sickness.
    -   **Mental Model:** Mismatch between expectation and experience causes sickness (e.g., "Call of Duty Syndrome," where gamers expect the body to move in the look direction, causing confusion when it doesn't).
- **Design Implication:** There is no "average" user. Susceptibility is polygenic and highly variable.

**Application Design Factors**

- **Definition:** Choices made by content creators that trigger physiological discomfort.
    -   **Locus of Control:** Active navigation causes less sickness than passive movement (passengers get sick, drivers don't).
    -   **Visual Acceleration:** The vestibular system detects acceleration; visual acceleration without physical movement creates conflict. Head bobbing should never be used.
    -   **Altitude:** Flying low creates faster optical flow, increasing sickness compared to high-altitude flight.
    -   **Duration:** Sickness increases with exposure time.
- **Design Implication:** Design for short sessions, avoid accelerating cameras, and provide stable "rest frames" (static reference points) to ground the user.

---

## Practical Use

**Presence vs. Sickness Trade-off**

- Factors that enhance presence (like a wide Field of View or realistic locomotion) often increase the risk of motion sickness. Designers must balance the goal of immersion with the physical limitations of the user.

**Managing User Expectations**

- Warning users about potential sickness is ethical but can trigger a "nocebo" effect (thinking about sickness makes them sick). The recommended approach is to casually mention "discomfort" and encourage stopping immediately if they feel "off," rather than overemphasizing severe symptoms.

**Configuration as a Solution**

- Because susceptibility varies so wildly (e.g., some can handle strafing, others cannot), applications should provide configuration options (e.g., adjustable FOV, snap-turn vs. smooth-turn) to let users tailor the experience to their physiological tolerance.
