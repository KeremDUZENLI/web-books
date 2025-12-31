# Chapter 2: Virtual Reality Hardware

---

## Main Idea

- This chapter surveys the landscape of consumer Virtual Reality hardware, categorizing devices into high-performance tethered systems (like the Oculus Rift) and portable mobile platforms (Samsung Gear VR, Google Cardboard).
- It highlights the evolution of hardware capabilities—from simple rotational tracking to positional tracking and low-persistence displays—and explores the emerging solutions for user input when physical vision is blocked by a Head-Mounted Display (HMD).

---

## Key Principles & Guidelines

**Positional vs. Rotational Tracking**

- **Definition:** Rotational tracking (3 Degrees of Freedom, or 3DoF) monitors the direction the head turns. Positional tracking (6 Degrees of Freedom, or 6DoF) monitors the head's physical movement through space (leaning, walking).
- **Design Implication:** Early hardware (Oculus DK1) only supported rotation. Newer iterations (DK2, Crescent Bay) added external cameras to track position, significantly reducing nausea and increasing immersion by allowing users to lean into the virtual world.

**The "Blind" User Constraint**

- **Definition:** The physical isolation caused by HMDs, which completely block the user's view of the real world, including their hands and peripherals.
- **Design Implication:** Traditional inputs like keyboards and mice are impractical. VR design necessitates "blind-accessible" inputs, such as game controllers, haptic interfaces, or motion-tracked hand controllers (e.g., Oculus Touch, Leap Motion).

**Mobile vs. Tethered Architecture**

- **Definition:** The distinction between systems driven by a powerful external PC (Tethered) and those processed entirely on a smartphone (Mobile).
- **Design Implication:** Tethered systems offer higher graphical fidelity but restrict movement via cables. Mobile systems offer portability but are constrained by battery life, thermal limits, and lower processing power.

---

## Practical Use

**Oculus Rift (Desktop VR)**

- The "Gold Standard" for PC-based VR. It utilizes barrel distortion rendering and requires a high-performance PC to maintain high frame rates (minimum 60-75 FPS) to prevent motion sickness.

**Samsung Gear VR (High-End Mobile)**

- A partnership between Oculus and Samsung. Unlike standard phone VR, it uses a dedicated high-speed Inertial Measurement Unit (IMU) built into the headset (not the phone) for lower latency tracking and features a touchpad for input.

**Google Cardboard (Entry-Level Mobile)**

- A reference specification for turning smartphones into VR viewers using simple lenses and folded cardboard. It uses undistorted stereo rendering (side-by-side) and relies on the phone's internal sensors, making it accessible but less immersive than dedicated hardware.

**Input Innovation**

- Since the "mouse of VR" has not yet been standardized, developers must experiment with various inputs, including gamepads, hand-tracking sensors (Leap Motion), and magnetic triggers (Cardboard).
