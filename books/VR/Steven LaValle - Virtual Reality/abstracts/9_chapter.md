# Chapter 9: Tracking

---

## Main Idea

- Tracking is the process of measuring the position and orientation of the user's sense organs (primarily the head/eyes) and body parts in the physical world to properly align the virtual world viewpoint.

- It relies on estimating six degrees of freedom (6-DOF) using a combination of hardware sensors (IMUs, cameras) and software algorithms (sensor fusion, prediction) to minimize latency and drift.

---

## Key Principles & Guidelines

**Inertial Measurement Units (IMUs)**

- **Definition:** A micro-electromechanical system (MEMS) component containing three sensors: a **Gyroscope** (measures angular velocity), an **Accelerometer** (measures linear acceleration + gravity), and a **Magnetometer** (measures magnetic field strength).

- **Design Implication:** IMUs provide extremely fast updates (high frequency) but suffer from drift over time; they are essential for low-latency rotational tracking but cannot maintain accurate positional tracking alone.

**Drift and Dead Reckoning**

- **Definition:** **Dead reckoning** is estimating the current state based solely on the previous state and change data (integration). **Drift** is the accumulation of errors during this process, causing the estimated position to diverge from reality.

- **Design Implication:** Because error grows linearly with time for gyroscopes and quadratically for accelerometers, secondary absolute references (like cameras or magnetic fields) are required to correct the estimated pose periodically.

**Sensor Fusion**

- **Definition:** The mathematical process of combining data from multiple sensors to reduce uncertainty and error. Common methods include the **Complementary Filter** and the **Kalman Filter**.

- **Design Implication:** A tracking system typically combines the fast, low-latency data from an IMU with the slower, drift-free data from an optical or magnetic system to achieve both responsiveness and stability.

**Inside-Out vs. Outside-In Tracking**

- **Outside-In:** Fixed external sensors (cameras/base stations) track the moving object. (Example: Oculus Rift CV1, HTC Vive).

- **Inside-Out:** Sensors on the moving object track the static environment. (Example: SLAM on mobile phones, Windows Mixed Reality headsets).

**The Perspective-n-Point (PnP) Problem**

- **Definition:** A geometric problem of estimating the pose of a camera given a set of known 3D points in the world and their corresponding 2D projections in the image.

- **Design Implication:** This is foundational for optical tracking, where the system identifies known markers (LEDs or features) to calculate the user's position relative to them.

---

## Formulas

**Calibration of Sensor Data**

- **Formula:** $$x' = M x + b$$

- **Context:** Used to correct raw sensor readings ($x$), where $M$ is a scaling/alignment matrix and $b$ is an offset vector (bias). This corrects for manufacturing defects like axis misalignment or constant error biases.

**Orientation Integration (Dead Reckoning)**

- **Formula:** $$\theta(t) = \theta(0) + \int_0^t \omega(s) ds$$

- **Context:** Calculating the current orientation $\theta$ by integrating angular velocity readings $\omega$ from a gyroscope over time.

**Complementary Filter**

- **Formula:** $$\hat{\theta}[k] = \alpha (\hat{\theta}[k-1] + \omega[k] \Delta t) + (1 - \alpha) \theta_{corr}[k]$$

- **Context:** Combines the integrated gyroscope reading (first term) with a correction value $\theta_{corr}$ (second term, e.g., from an accelerometer or magnetometer) using a weighting factor $\alpha$ (usually near 0.98).

---

## Practical Use

**Lighthouse Tracking (HTC Vive)**

- A system where base stations sweep laser beams across the room (one vertical, one horizontal) and emit an infrared pulse. Photodiodes on the headset measure the time difference between the pulse and the laser hit to calculate angular position relative to the base station.

**Inverse Kinematics (IK)**

- A method to calculate the position of intermediate joints (like elbows or knees) based on the known position of end-effectors (hands and feet) and constraints of the skeleton, allowing for full-body avatar representation from limited tracking points.
