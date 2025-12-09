# Chapter 26: Computer Graphics in Games

---

## Main Idea

- This chapter details the engineering and artistic constraints of **game development**, focusing on managing limited resources like processing power, memory, and time across different platforms.

- It outlines the **game production pipeline**, from asset creation (modeling, texturing, rigging) to optimization techniques like LOD and culling required to achieve real-time frame rates.

<img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQYZqgJtXEMiVxkZePTnSK9DCpTB0RO9J_Z4YAucTLdekJJc72W7dwn_hogXzHIGgla84u8j6eYnC-UOCuSeNsBqJ8Dfkze8FETIG7JFHrbnEL5l7I">

---

## Keywords

**Platform**

- A specific combination of hardware and software (e.g., PC, Console, Mobile) that dictates the API, performance budget, and input methods for a game.

**Level of Detail (LOD)**

- An optimization technique where multiple versions of an object (high to low complexity) are swapped based on distance to save vertex processing cost.

**Lightmap**

- A texture that stores **precomputed lighting** information for static background geometry, allowing for high-quality global illumination effects without real-time cost.

**Normal Mapping**

- A technique where high-frequency surface detail from a high-resolution sculpt is "baked" into a texture and applied to a low-resolution mesh to fake geometric complexity.

**Skinning**

- The process of binding a visible mesh to an underlying animation **skeleton (rig)** so that vertices move and deform naturally as the bones are animated.

---

## Practical Use

**Frame Budgeting**

- To maintain a steady **30 or 60 FPS**, developers have a strict time budget (e.g., 33ms) per frame; exceeding this causes stuttering, so tasks like physics and rendering must be carefully balanced.

**Occlusion Culling**

- To avoid wasting GPU power, engines use data structures (like **BSP trees** or **PVS**) to discard objects blocked by walls or outside the camera view before sending them to the graphics card.

**Depth Pre-Pass**

- A rendering optimization where scene geometry is drawn to the **z-buffer** first without shaders; this prevents the GPU from calculating expensive pixel colors for objects that will eventually be hidden behind others.

**Asset Pipeline**

- Artists work in iterative stages: creating a high-poly model, generating a low-poly game mesh, baking **normal maps**, painting textures, and finally rigging for animation.
