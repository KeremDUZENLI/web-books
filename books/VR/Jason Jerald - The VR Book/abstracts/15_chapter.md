# Chapter 15: Latency

---

## Main Idea

- This chapter defines latency as the time delay between a user's physical action and the system's corresponding visual response, identifying it as the primary cause of "swimming" (unintended scene instability) and motion sickness.
- It breaks down the total system delay into five distinct components—tracking, application, rendering, display, and synchronization—and analyzes the trade-offs between minimizing latency (e.g., disabling V-Sync) and maintaining visual quality (e.g., avoiding tearing).

---

## Key Principles & Guidelines

**Latency and "Swimming"**

- **Definition:** For latencies below ~100 ms, users typically do not perceive a time delay directly. Instead, they perceive the consequences: the virtual world appears unstable or "swims" in space when the head moves.
- **Design Implication:** This spatial instability triggers sensory conflict (visual vs. vestibular), leading to motion sickness and breaks-in-presence. Latency reduction is critical for user comfort.

**Latency Thresholds**

- **Definition:** The just-noticeable difference for latency can be as low as 3-4 ms.
- **Design Implication:** Counter-intuitively, while sensitivity to *scene motion* decreases as head motion speed increases, sensitivity to *latency* increases with faster head motion. Fast movements make lag more apparent.

**The System Delay Pipeline**

- **Definition:** Total latency is the sum of component delays plus synchronization bottlenecks:
    - **Tracking Delay:** Time from physical motion to sensor data availability (often involves filtering).
    - **Application Delay:** Time to update the simulation/physics.
    - **Rendering Delay:** Time for the GPU to draw the frame.
    - **Display Delay:** Time for scanout, pixel response, and persistence.
    - **Synchronization Delay:** Time wasted waiting for signals (like Vertical Sync) between components.
- **Design Implication:** "System delay" (true latency) is often greater than the inverse of the frame rate due to pipelining and synchronization waits.

**Vertical Sync (V-Sync) vs. Tearing**

- **Definition:**
    - **Tearing:** A visual artifact where part of the screen shows the new frame and part shows the old frame, occurring when the buffer is swapped during scanout.
    - **V-Sync:** Waiting for the display to finish scanning before swapping buffers.
- **Design Implication:** Enabling V-Sync prevents tearing but introduces significant variable delay (up to 16.7 ms at 60Hz). Disabling V-Sync reduces latency but creates tearing.

**The Pulfrich Effect**

- **Definition:** A depth illusion caused when one eye is darker than the other; the "dark" eye processes images slower (delayed perception), causing lateral motion to look like elliptical depth.
- **Design Implication:** Dark adaptation naturally adds perceptual latency (~100-400 ms). This raises questions about whether dark VR scenes might inherently feel different or suffer from different latency perception rules than bright scenes.

---

## Practical Use

**Just-in-Time Pixels**

- Tearing becomes less visible as the frame rate and tracking sample rate increase (pose coherence). If the system renders fast enough, developers can disable V-Sync to minimize latency, as the "tear" between two very similar frames is negligible ("just-in-time pixels").

**Measuring Delays**

- Total latency cannot be calculated just by summing component specs due to synchronization behavior. Developers should use latency meters or parallel-port timing analysis to measure the true end-to-end delay from physical motion to photon change.
