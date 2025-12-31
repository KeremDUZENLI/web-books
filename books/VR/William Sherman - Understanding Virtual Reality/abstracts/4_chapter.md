# Chapter 4: Reality Systems

---

## Main Idea

- This chapter details the hardware infrastructure of Virtual Reality, collectively termed the "Reality System," which mediates the experience between the user and the application.
- It categorizes the system into three fundamental subsystems: **Inputs** (sensors and tracking), the **Reality Engine** (computation and rendering), and **Outputs** (visual, audio, and haptic displays).

---

## Key Principles & Guidelines

**The Reality System Architecture**

- **Definition:** The complete hardware stack required to drive a VR experience. It takes data from input sensors, processes the simulation in the Reality Engine, and renders the result to output displays.
- **Design Implication:** The system is only as strong as its weakest link; latency (lag) must be minimized across the entire chain (Input $\rightarrow$ Engine $\rightarrow$ Output) to maintain presence and prevent motion sickness.

**Degrees of Freedom (DOF)**

- **Definition:** The number of independent dimensions in which a tracked object can move.
  - **3-DOF:** Orientation only (Yaw, Pitch, Roll). Common in basic mobile VR.
  - **6-DOF:** Orientation + Position (X, Y, Z). Essential for full physical immersion.
- **Design Implication:** 6-DOF tracking is required for natural interaction, allowing users to lean in (motion parallax) and move through the space, whereas 3-DOF limits the user to a fixed observation point.

**Tracking Technologies**

- **Electromagnetic:** Uses magnetic fields to track position/orientation. No line-of-sight required, but susceptible to metal interference.
- **Optical:** Uses cameras to track markers or features. High accuracy but requires line-of-sight. Can be "Outside-In" (fixed cameras) or "Inside-Out" (cameras on user).
- **Inertial (IMU):** Uses accelerometers and gyroscopes. Fast update rates (1000Hz+) but suffers from "drift" over time. Often fused with optical/magnetic/ultrasonic data (Hybrid tracking) to correct drift.
- **Ultrasonic:** Uses sound waves (time-of-flight). Inexpensive but requires line-of-sight and is sensitive to temperature/air currents.

**Visual Display Paradigms**

- **Head-Based (HMD):** Displays worn on the face. Provides high immersion and isolation but disconnects the user from their physical body and surroundings.
- **Stationary (World-Fixed):** Screens fixed in the environment (e.g., CAVE, Powerwall). Users wear lightweight glasses. Allows for collaboration and seeing one's own body, but requires dedicated physical space.
- **Hand-Based:** Displays held in the hand (e.g., Mobile AR). Acts as a "window" into the virtual world. Low immersion but high portability.

**Haptic Feedback**

- **Tactile (Cutaneous):** Stimulates the skin surface (vibration, texture, temperature). Good for confirming contact (e.g., buzzing controller).
- **Force Feedback (Kinesthetic):** Exerts physical force on the muscles/joints (weight, resistance). Requires bulky hardware like exoskeletons or robotic arms.

---

## Practical Use

**Audio Spatialization**

- To create realistic 3D sound, systems use **Head-Related Transfer Functions (HRTFs)**, which model how sound waves interact with the user's ears, head, and torso. This allows users to localize sound sources accurately in 3D space, guiding attention to events outside the visual field.

**Active vs. Passive Stereo**

- **Active Stereo:** Uses shutter glasses that rapidly block one eye then the other in sync with the display (time-multiplexed). High resolution but requires batteries and expensive glasses.
- **Passive Stereo:** Uses polarized light or spectral separation. Glasses are cheap and lightweight (like movie theaters), but often halve the vertical resolution or require special screens.
