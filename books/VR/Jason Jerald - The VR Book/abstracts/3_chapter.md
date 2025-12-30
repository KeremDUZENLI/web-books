# Chapter 3: An Overview of Various Realities

---

## Main Idea

- This chapter establishes the "Virtuality Continuum," categorizing experiences from the real environment to fully virtual environments, including Augmented Reality (AR) and Augmented Virtuality (AV).
- It details the architecture of "Reality Systems," defined as the hardware and software loop (Input $\rightarrow$ Application $\rightarrow$ Rendering $\rightarrow$ Output) required to facilitate intuitive communication between the user and the computer.

---

## Key Principles & Guidelines

**The Virtuality Continuum**

- **Definition:** A continuous scale ranging from the completely real environment to the completely virtual environment. The space between these extremes is "Mixed Reality," covering both Augmented Reality (adding virtual cues to the real world) and Augmented Virtuality (adding real-world content to virtual worlds).

- **Design Implication:** Developers must choose the appropriate level of reality based on application goals; for example, optical-see-through HMDs are ideal for AR, while non-see-through HMDs are best for full immersion.

**The Reality System Loop**

- **Definition:** The continuous cycle of information flow where the system acts as an intermediary or translator between human and machine. It consists of Input (tracking), Application (physics/logic), Rendering (visual/audio/haptic generation), and Output (display).

- **Design Implication:** The goal is transparency; the technology should be unperceivable so the user focuses on the interaction. Latency and accuracy in this loop are critical, especially for HMDs where the display moves with the head.

**Haptic Feedback Categories**

- **Definition:** Haptics (artificial forces) are categorized by source and sensation:

  - **Passive vs. Active:** Passive uses static physical objects (props); Active uses computer-controlled actuators.
  - **Tactile vs. Proprioceptive:** Tactile stimulates the skin (vibration/texture); Proprioceptive stimulates muscles/joints (weight/resistance).
  - **Self-Grounded vs. World-Grounded:** Self-grounded is worn/held (relative to user); World-grounded is attached to the environment (provides solid resistance).

- **Design Implication:** Passive haptics (props) are a low-cost way to significantly boost presence, while active haptics allow for dynamic object simulation.

**Motion Platforms (Active vs. Passive)**

- **Definition:** Devices that move the user's body to simulate physical motion and gravity.

  - **Active:** Computer-controlled (e.g., hydraulics).
  - **Passive:** User-controlled (e.g., leaning to steer).

- **Design Implication:** These are used to reduce motion sickness by aligning the felt motion with the visual motion seen in the VR headset.

---

## Practical Use

**Passive Haptics for Presence**

- Using simple physical props (like Styrofoam blocks or a physical ledge) that match the shape of virtual objects can trick the user's mind into accepting the entire virtual environment as real. The "UNC Pit demo" proved that touching a real ledge creates a visceral physical reaction (increased heart rate) even if the visual drop is virtual.

**Treadmills for Locomotion**

- Omnidirectional treadmills allow users to physically walk or run in any direction while staying in one place. While passive treadmills (sliding surface) feel like walking on ice, they add significant presence and reduce motion sickness compared to non-physical locomotion methods.
