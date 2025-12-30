# Chapter 27: Input Devices

---

## Main Idea

- This chapter categorizes input devices based on physical characteristics (such as degrees of freedom, relative vs. absolute tracking, and encumbrance) and classifies them into hand-based and non-hand-based interaction tools.
- It emphasizes that there is no single "universal" input device; designers must choose hardware that best fits the specific interaction techniques and application goals, balancing factors like reliability, fatigue, and haptic capability.

---

## Key Principles & Guidelines

**Degrees of Freedom (DoF)**

- **Definition:** The number of dimensions an input device can manipulate.
    -   **2 DoF:** Mouse, trackball (2D position).
    -   **6 DoF:** Full spatial control (X, Y, Z translation + Roll, Pitch, Yaw rotation).
- **Design Implication:** Active VR experiences typically require minimum 6 DoF controllers to map hand movements 1:1. Simple navigation might only require 2 DoF.

**Relative vs. Absolute Input**

- **Definition:**
    -   **Relative:** Measures change from the last state (e.g., a mouse). These drift over time and are not "nulling compliant" (pose is not absolute).
    -   **Absolute:** Measures pose relative to a fixed reference point (e.g., optical trackers).
- **Design Implication:** VR requires absolute tracking for heads and hands to maintain spatial consistency. Relative devices (like standard IMUs) drift, breaking the illusion of a stable world.

**Isotonic vs. Isometric**

- **Definition:**
    -   **Isotonic:** Measures displacement/movement (e.g., a mouse).
    -   **Isometric:** Measures force/pressure with little movement (e.g., a stiff force-stick).
- **Design Implication:** Isotonic devices are superior for **position control** (moving an object). Isometric devices are superior for **rate control** (controlling the speed of a vehicle).

**Separable vs. Integral**

- **Definition:**
    -   **Integral:** All degrees of freedom are controlled simultaneously by a single motion (e.g., moving a hand).
    -   **Separable:** Dimensions are controlled by distinct, separate motions (e.g., an Etch A Sketch or a gamepad with two sticks).
- **Design Implication:** Hand tracking should be integral to feel natural. Separable inputs increase cognitive load for 3D tasks.

**Hand Input Classes**

-   **World-Grounded:** Fixed devices (steering wheels). Great for specific tasks (driving) but poor for general interaction.
-   **Non-Tracked Hand-Held:** Gamepads. Familiar and comfortable (hands in lap), but break presence if the user moves their hands away from the assumed resting position.
-   **Tracked Hand-Held:** "Wands" (e.g., Oculus Touch). Currently the industry standard. They provide 6 DoF, haptics, and physical buttons, acting as a "prop" that grounds the user.
-   **Hand-Worn:** Gloves. Theoretically ideal for dexterity, but suffer from calibration issues, hygiene concerns, and lack of buttons.
-   **Bare Hands:** Camera-based tracking. Unencumbered and widely accessible, but lack haptic feedback, buttons, and suffer from fatigue ("Gorilla Arm") and line-of-sight occlusion.

**The "Midas Touch" Problem**

- **Definition:** The issue in eye-tracking where users look at objects to see them, not necessarily to interact with them.
- **Design Implication:** Gaze should not automatically trigger actions. It works best when combined with a "clutch" (a button press or voice command) to confirm selection, rather than using dwell time which causes eye fatigue.

---

## Practical Use

**Device Reliability**

- Reliability (tracking everywhere in the user's reach) is critical. If a device loses tracking when a user reaches behind them or covers a sensor, it causes frustration and breaks presence.

**Push-to-Talk for Voice**

- Microphones are powerful but prone to "insertion errors" (picking up thinking aloud or background noise). Using a physical button (push-to-talk) on a controller is the most effective way to ensure only intended commands are processed.
