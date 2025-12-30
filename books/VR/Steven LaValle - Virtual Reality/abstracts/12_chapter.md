# Chapter 12: Evaluating VR Systems and Experiences

---

## Main Idea

- This chapter shifts from building VR systems to measuring their effectiveness, highlighting that standard engineering metrics (latency, frame rate) are insufficient because the "system" includes the highly variable human user.

- It provides a framework for using the scientific method to evaluate user experience, covering experimental design, ethics, and specific metrics for comfort, VR sickness, and the sense of presence.

---

## Key Principles & Guidelines

**The Developer-Tester Feedback Loop**

- **Definition:** The common practice where a developer repeatedly tests their own VR experience during creation.

- **Design Implication:** This is dangerous because the developer becomes highly adapted to the system (perceptual learning) and loses the ability to perceive flaws (like latency or vection) that would immediately sicken a fresh user; testing with naive subjects is mandatory.

**Perceptual Learning (Adaptation)**

- **Definition:** The brain's ability to adapt to new sensory stimuli over time (e.g., getting used to a new pair of glasses or VR sickness).

- **Design Implication:** Because resistance to sickness increases with exposure ("getting your sea legs"), long-term users cannot reliably judge the comfort of a system for the general public.

**The Scientific Method in VR**

- **Definition:** A rigorous process involving: 1) Formulating a hypothesis, 2) Designing an experiment (control vs. treatment), 3) Collecting data, and 4) Analyzing results to accept or reject the hypothesis.

- **Design Implication:** Essential for validating design choices (e.g., "Does interface A cause less nausea than interface B?"); relying on intuition often leads to incorrect assumptions about user behavior.

**Psychophysics**

- **Definition:** The branch of psychology that investigates the relationship between physical stimuli (e.g., screen brightness, sound volume) and the sensations and perceptions they produce.

- **Design Implication:** Used to determine hardware specifications, such as the minimum resolution required to read text or the maximum latency before a user notices lag (Just Noticeable Difference).

**VR Sickness & The SSQ**

- **Definition:** Motion sickness induced by VR, often measured using the **Simulator Sickness Questionnaire (SSQ)**, which scores symptoms like nausea, oculomotor issues, and disorientation.

- **Design Implication:** Since physiological measurements (heart rate, skin conductance) are noisy and hard to interpret, standardized self-report surveys remain the gold standard for evaluating comfort.

**Presence**

- **Definition:** The subjective feeling of "being there" in the virtual world, distinct from immersion (which is a technological description).

- **Design Implication:** Often measured via questionnaires (e.g., Slater-Usoh-Steed) or behavioral proxies (e.g., did the user duck when an object flew at them?); it is a primary goal for entertainment but potential distraction for productivity apps.

---

## Formulas

**Stevens' Power Law**

- **Formula:** $$P = c I^x$$

- **Context:** Models the relationship between the magnitude of a physical stimulus ($I$) and its perceived intensity ($P$). The exponent $x$ determines if the sensation grows faster or slower than the stimulus (e.g., brightness perception vs. electric shock).

---

## Practical Use

**Institutional Review Board (IRB)**

- An ethics committee that must approve experiments involving human subjects at universities and research institutions. They ensure risks (like inducing severe nausea) are minimized and that subjects provide informed consent.

**Within-Subjects vs. Between-Subjects Design**

- **Within-Subjects:** Each participant tests *all* conditions (e.g., tries both VR headsets). This reduces variance due to individual differences but introduces "order effects" (learning/fatigue).
- **Between-Subjects:** Each participant tests only *one* condition. This eliminates order effects but requires many more participants to achieve statistical significance.
