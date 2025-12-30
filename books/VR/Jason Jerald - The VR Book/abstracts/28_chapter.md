# Chapter 28: Interaction Patterns and Techniques

---

## Main Idea

- This chapter categorizes VR interactions into five high-level patterns—Selection, Manipulation, Viewpoint Control, Indirect Control, and Compound Patterns—distinguishing these broad concepts from specific, technology-dependent interaction techniques.
- It provides a comprehensive taxonomy of methods, ranging from naturalistic "Direct Hand Manipulation" to abstract "World-in-Miniature" interfaces, helping designers choose the appropriate mechanisms based on application goals and interaction fidelity requirements.

---

## Key Principles & Guidelines

**Selection Patterns**

- **Definition:** Methods for specifying objects for command or manipulation.
    -   **Hand Selection:** Direct touching (high fidelity, limited reach).
    -   **Pointing:** Ray-casting from hand or head (high range, susceptible to tremor).
    -   **Image-Plane:** Selecting 2D projections of 3D objects (e.g., Head Crusher, Sticky Finger).
    -   **Volume-Based:** Selecting regions of space (e.g., Cone-casting flashlight).
- **Design Implication:** Use pointing for distant objects and speed; use direct hand selection for realism and personal space interactions.

**Manipulation Patterns**

- **Definition:** Modifying object attributes (position, orientation).
    -   **Direct Hand:** Natural grabbing (limited by arm length).
    -   **Proxy:** Using a local object to control a remote one (e.g., tracked props).
    -   **3D Tool:** Using an intermediary (e.g., virtual screwdriver, jigs) to act on an object.
- **Design Implication:** Proxies provide tactile feedback and precise control; 3D tools extend natural capabilities.

**Viewpoint Control Patterns**

- **Definition:** Moving the user through the world.
    -   **Walking:** Real walking, Redirected walking (warping space), or Walking-in-Place.
    -   **Steering:** Continuous motion via Gaze, Torso, or Hand direction (e.g., "flying").
    -   **3D Multi-Touch:** Grabbing space with two hands to translate, rotate, and scale the world.
    -   **Automated:** Passive transport (teleportation, vehicles).
- **Design Implication:** Real walking offers the highest presence and lowest sickness but requires space. Steering is versatile but can induce sickness due to acceleration.

**Indirect Control Patterns**

- **Definition:** Abstract control via intermediaries.
    -   **Widgets and Panels:** 2D menus (Pie menus, Ring menus, TULIP menus) placed in 3D space.
    -   **Non-Spatial Control:** Voice commands or symbolic gestures.
- **Design Implication:** Pie menus utilize muscle memory for fast selection without looking. TULIP menus map options to fingers for eyes-off interaction.

**Compound Patterns**

- **Definition:** Combining multiple patterns for complex tasks.
    -   **Pointing Hand:** Combines pointing selection with hand manipulation (e.g., Go-go, HOMER).
    -   **World-in-Miniature (WIM):** An exocentric handheld map used for navigation and object manipulation.
    -   **Multimodal:** Combining inputs like voice and gesture (e.g., "Put That There").

---

## Practical Use

**The HOMER Technique**

- "Hand-centered Object Manipulation Extending Ray-casting." Users select a distant object via a ray; upon selection, the virtual hand instantly jumps to the object's location, allowing direct manipulation as if holding it, bridging the gap between remote selection and direct handling.

**World-in-Miniature (WIM)**

- A "god-view" map held in the hand. Users can move a small doll of themselves on the map to teleport in the real world or manipulate tiny proxies on the map to move massive objects in the environment.
