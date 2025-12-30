# Chapter 5: The Physiology of Human Vision

---

## Main Idea

- This chapter examines the biological hardware of human vision—from the eye's anatomy and photoreceptors to neural processing and eye movements—to understand how the brain interprets visual stimuli.

- It details how VR hardware limitations (resolution, latency, scanout) interact with physiological mechanisms (VOR, accommodation, retinal slip), often resulting in artifacts, fatigue, or motion sickness.

---

## Key Principles & Guidelines

**Photoreceptor Density (Fovea vs. Periphery)**

- **Definition:** The retina has a non-uniform distribution of receptors; high-resolution Cones are packed in the center (fovea), while low-light sensitive Rods dominate the periphery.

- **Design Implication:** Users can only perceive sharp detail and color where they are directly looking; the periphery is better suited for detecting motion, and VR systems must account for this disparity (e.g., foveated rendering).

**The Blind Spot**

- **Definition:** A region on the retina where the optic nerve exits, containing no photoreceptors, which the brain essentially "fills in" with surrounding texture.

- **Design Implication:** While usually unnoticeable, it demonstrates that visual perception is a reconstruction by the brain, not a perfect camera capture; VR illusions rely on similar reconstructive processes.

**Vestibulo-Ocular Reflex (VOR)**

- **Definition:** A reflex where the eyes automatically rotate to counteract head motion (based on vestibular data) to keep the view stable.

- **Design Implication:** VR systems must update the display with extremely low latency (tracking + rendering) to match this reflex; failure to do so results in "swimming" instability and motion sickness.

**Vergence-Accommodation Mismatch**

- **Definition:** The physiological conflict that occurs when the eyes converge on a virtual object at one distance (vergence) while the eye's lens focuses on the screen at a fixed distance (accommodation).

- **Design Implication:** This uncoupling of naturally linked mechanisms causes eye strain and fatigue, limiting how long or how comfortable close-range VR interactions can be.

**Display Scanout Artifacts**

- **Definition:** Distortions caused by displays updating pixels line-by-line (rolling shutter) rather than all at once (global shutter).

- **Design Implication:** Rapid head movements can cause stationary vertical lines in VR to appear slanted or skewed; software correction is often required to predict and compensate for this timing difference.

**Saccadic Masking**

- **Definition:** The brain's suppression of visual processing during a saccade (rapid eye movement) to prevent motion blur perception.

- **Design Implication:** This perceptual gap can potentially be exploited by VR developers to hide scene updates or perform imperceptible redirection techniques (redirected walking).

---

## Formulas

**Visual Feature Size**

- **Formula:** $$s = d \tan \theta$$

- **Context:** Relates the size of a feature ($s$) to its distance from the eye ($d$) and the viewing angle ($\theta$). Used to calculate the necessary pixel density (PPI) for a VR display to achieve "Retina" resolution at a specific focal distance.

---

## Practical Use

**Foveated Rendering**

- A rendering optimization technique that draws high-resolution graphics only at the center of the user's gaze (matching foveal acuity) and lower resolution in the periphery to save computational power.

**Screen-Door Effect**

- A visual artifact where the black spaces between pixels become visible as a grid pattern, common in VR because the display is magnified and placed very close to the eyes.

**Aliasing (Jaggies)**

- The staircase effect seen on diagonal lines when spatial resolution is too low to represent a smooth curve or line.
