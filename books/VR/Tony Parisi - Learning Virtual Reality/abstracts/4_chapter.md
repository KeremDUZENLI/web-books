# Chapter 4: Going Mobile: Developing for Gear VR

---

## Main Idea

- This chapter shifts focus from desktop to mobile Virtual Reality, specifically for the Samsung Gear VR, which pairs a high-resolution smartphone (Galaxy Note 4 or S6) with a headset containing dedicated Oculus sensors.
- It guides the reader through the specific setup requirements for Android development—including the Android SDK, Oculus Mobile SDK, and unique device signature files—and demonstrates how to build Unity3D applications that utilize the Gear VR's touchpad for input.

---

## Key Principles & Guidelines

**Mobile VR Architecture**

- **Definition:** A system where the smartphone provides the display and processor, but the headset provides a custom, high-speed Inertial Measurement Unit (IMU).
- **Design Implication:** This external IMU tracks head movement with significantly lower latency than standard phone sensors, which is crucial for immersion and comfort.

**Oculus Signature File (osig)**

- **Definition:** A cryptographically signed file linked to a specific device's unique hardware ID.
- **Design Implication:** Applications accessing low-level VR functions must contain this file during development. It must be generated via the Oculus website and placed in the Unity project folder `Assets/Plugins/Android/assets` to build successfully.

**Touchpad Input Mapping**

- **Definition:** The Gear VR features a side-mounted touchpad rather than a mouse or keyboard.
- **Design Implication:** The Oculus Utilities package maps touchpad interactions to standard Unity mouse events for compatibility.
  - **Swipes:** Mapped to Mouse X and Y movement.
  - **Taps:** Mapped to Mouse Button 0.
  - **Back Button:** Mapped to Mouse Button 1.

**Unity Android Configuration**

- **Definition:** Specific build settings required to target the Gear VR platform.
- **Design Implication:** Developers must switch the platform to Android, set the Minimum API Level to 19 (KitKat 4.4), set a unique Bundle Identifier, and explicitly check "Virtual Reality Supported" in the Player Settings.

---

## Practical Use

**Gear VR Developer Mode**

- To test applications without constantly inserting the phone into the headset, developers can enable "Developer Mode" in the Gear VR Service settings.

**OVRCameraRig for Mobile**

- The same `OVRCameraRig` prefab used for desktop VR is compatible with mobile, but the underlying script (`OVRCameraRig.cs`) includes Android-specific logic to handle head modeling and tracking space corrections unique to the mobile Unity runtime.
