# Chapter 6: Visual Perception

---

## Main Idea

- This chapter shifts focus from the physiological hardware of the eye to the software-like processing of the brain, explaining how we interpret neural signals to perceive depth, motion, and color.

- It frames Virtual Reality as a "grand optical illusion" that succeeds by leveraging or hijacking these perceptual mechanisms, while warning that inconsistencies between sensory cues can lead to discomfort, fatigue, or incorrect interpretations.

---

## Key Principles & Guidelines

**Monocular vs. Stereo Depth Cues**

- **Definition:** Monocular cues (e.g., retinal image size, texture gradient, motion parallax) provide depth information from a single eye, while stereo cues (binocular disparity) require both eyes.

- **Design Implication:** Stereo is not strictly necessary for a 3D experience; developers can leverage powerful monocular cues (like those in 360-degree panoramic photos) to create immersion, often saving rendering power and reducing eye strain.

**Motion Parallax**

- **Definition:** A strong monocular depth cue where, as the head moves laterally, closer objects appear to move faster across the retina than distant objects.

- **Design Implication:** VR systems must track head position (not just orientation) to enable this cue; failing to do so breaks the illusion of stationary objects and depth.

**Stroboscopic Apparent Motion**

- **Definition:** The illusion of continuous motion perceived when a sequence of still images is flashed in rapid succession (the basis of movies and VR displays).

- **Design Implication:** VR requires much higher frame rates (90 FPS+) than movies (24 FPS) to maintain the illusion and prevent flicker, especially since the display covers the peripheral vision which is more sensitive to flicker.

**Vection**

- **Definition:** The illusion of self-motion induced by optical flow (visual motion of the environment) while the body is physically stationary.

- **Design Implication:** This is a primary cause of VR sickness; developers must be cautious when moving the camera or large parts of the environment without corresponding user movement.

**The McGurk Effect**

- **Definition:** A perceptual phenomenon where conflicting visual and auditory cues (e.g., seeing "ga" but hearing "ba") result in the brain perceiving a third, different sound ("da").

- **Design Implication:** This demonstrates the brain's integration of conflicting senses; in VR, mismatches between vision, audio, and proprioception can lead to confusion, incorrect perceptions, or nausea.

**Multistable Perception**

- **Definition:** A state where the brain oscillates between two or more valid interpretations of an ambiguous stimulus (e.g., the Necker Cube or the Spinning Dancer illusion).

- **Design Implication:** Poorly designed VR cues can lead to unpredictable user experiences where the perceived reality "flips" between states (e.g., a menu appearing to rush at the user vs. the user rushing at the menu).

---

## Formulas

**Bayes' Rule (Perceptual Integration)**

- **Formula:** $$P(h|c) = \frac{P(c|h)P(h)}{P(c)}$$

- **Context:** Models how the brain updates its belief in a hypothesis ($h$) (e.g., "this object is a face") based on the arrival of a new sensory cue ($c$). It mathematically explains how we combine priors (expectations) with current observations.

**Gamma Correction**

- **Formula:** $$v' = cv^\gamma$$

- **Context:** A non-linear transformation applied to pixel intensities. It is used to maximize the perceptual contrast range of a display given the limited number of bits (usually 256 levels) per color channel.

---

## Practical Use

**Low Persistence**

- A display technique where pixels are illuminated for only a tiny fraction of the frame time (1-2 ms) and left black for the rest. This drastically reduces "retinal image slip" (judder) and motion blur caused by eye rotation during a frame.

**The Wagon-Wheel Effect**

- An artifact where rotating objects (like wheels or propellers) appear to spin backward or stand still. This occurs in VR due to aliasing when the rotation speed mismatches the frame rate or the brain's motion detectors.

**Color Constancy**

- The brain's ability to perceive an object as the same color despite changes in lighting conditions (e.g., the "blue/black vs. white/gold dress"). In VR, creators must rely on lighting context and shadows to ensure users perceive colors as intended.
