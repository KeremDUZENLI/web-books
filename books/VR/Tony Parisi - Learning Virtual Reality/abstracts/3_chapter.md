# Chapter 3: Going Native: Developing for Oculus Rift on the Desktop

---

## Main Idea

- This chapter introduces the fundamentals of creating desktop VR applications for the Oculus Rift using the Unity3D game engine.
- It bridges the gap between raw 3D graphics theory (coordinate systems, matrices, rendering pipelines) and practical implementation via Unity's built-in VR support and the Oculus Utilities package.

---

## Key Principles & Guidelines

**Stereoscopic Rendering Pipeline**

- **Definition:** The process of rendering a 3D scene twice—once for each eye—slightly offset to simulate interpupillary distance and generate depth perception.
- **Design Implication:** Developers must manage three camera perspectives: a main camera for game logic, and two "anchor" cameras (left and right) for actual rendering.

**3D Coordinate Systems (Left-Handed)**

- **Definition:** Unity uses a left-handed coordinate system where $x$ is horizontal, $y$ is vertical, and positive $z$ goes _into_ the screen.
- **Design Implication:** This differs from the right-handed systems often used in OpenGL. Understanding this orientation is crucial for placing objects and cameras correctly in 3D space.

**Head Tracking & Anchors**

- **Definition:** The synchronization of the virtual camera's position and orientation with the user's physical head movements using data from the Rift's sensors.
- **Design Implication:** The `OVRCameraRig` prefab manages this via a hierarchy of anchors (`CenterEyeAnchor`, `LeftEyeAnchor`, `RightEyeAnchor`). Game logic should reference the `TrackerAnchor` to know the user's pose without interfering with the raw rendering cameras.

**The Transformation Matrix**

- **Definition:** A $4\times4$ mathematical grid used to calculate the new position of vertices by combining translation, rotation, and scaling operations.
- **Design Implication:** While engines like Unity abstract this math, understanding that a matrix multiplies a vector to transform it is essential for debugging complex movement or placement issues.

---

## Practical Use

**Unity3D as a VR Engine**

- Unity is the preferred tool for VR due to its native support for stereo rendering, low-level device abstraction, and "Entities and Components" architecture.
- It allows for "write once, deploy anywhere," supporting native desktop apps (Windows/Mac) and mobile VR from a single codebase.

**OVRCameraRig Prefab**

- A pre-built camera object provided by Oculus that automatically handles the complex connection between the hardware sensors and the Unity camera system.

**Building for Direct HMD Access**

- When configuring the build, developers must select "PC, Mac & Linux Standalone" and enable "Virtual Reality Supported" in Player Settings.
- The "Direct HMD Access" mode is preferred over "Extend Desktop" as it reduces latency and simplifies the user experience by bypassing the Windows desktop compositor.
