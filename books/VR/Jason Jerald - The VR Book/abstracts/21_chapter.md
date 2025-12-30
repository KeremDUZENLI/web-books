# Chapter 21: Environmental Design

---

## Main Idea

- This chapter defines the virtual scene and its components—background, contextual geometry, fundamental geometry, and interactive objects—providing a framework for environmental designers to create coherent virtual worlds.
- It illustrates the power of VR environmental design through scientific visualization, demonstrating how physically navigating through complex datasets (like biological structures) provides insights and understanding not possible with traditional 2D displays.

---

## Key Principles & Guidelines

**The Scene Taxonomy**

- **Definition:** The environment is categorized into four layers based on distance and interaction:
    -   **Background:** Scenery in the far periphery (vista space) like the sky or mountains.
    -   **Contextual Geometry:** Objects in action space (landmarks, trees) that define the setting and aid wayfinding but have no affordances.
    -   **Fundamental Geometry:** Nearby structures (implied).
    -   **Interactive Objects:** Objects that users can manipulate.
- **Design Implication:** Designers should optimize based on these categories. For example, the **background** can be a simple textured box because depth cues are non-existent at that distance. **Contextual geometry** can often use "faked" low-detail geometry (billboards) since users cannot interact with it.

**Contextual Geometry and Affordances**

- **Definition:** Geometry that sets the scene and aids navigation but explicitly "has no affordances" (cannot be picked up or manipulated).
- **Design Implication:** Clear distinction prevents user frustration. If an object looks interactive but isn't, it breaks presence. Contextual elements should clearly communicate their role as scenery, allowing for optimization (e.g., 2D textures for distant trees).

**Insight via Physical Navigation**

- **Definition:** The capability to walk through data physically using a VR headset, as demonstrated by scientists exploring yeast, lung passages, and clot heterogeneity.
- **Design Implication:** Environmental design isn't just for art; it is a tool for analysis. "Walking through" data allows users to understand complex 3D structures (branching, protrusions) that are misunderstood on flat screens, potentially altering experimental conclusions.

---

## Practical Use

**Scientific Discovery**

- VR environments allow scientists to step inside their data. For instance, researchers walking through a yeast dataset discovered "clumping" and "branching protrusions" that they hadn't realized existed using traditional tools, leading them to redesign their experiments to ask better questions.
