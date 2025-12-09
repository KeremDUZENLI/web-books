# Chapter 22: Visual Perception

---

## Main Idea

- This chapter explores the biological and psychological mechanisms of **human vision**, explaining how the eye and brain process light to perceive shape, depth, color, and motion.

- It emphasizes that the goal of graphics is **perceptual effectiveness** (looking right) rather than physical correctness, and that understanding visual limitations can optimize rendering (e.g., hiding artifacts).

<img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTJTDIzxCvGF71fyUdDMGPClcGuBBJ7FFfFdMRCBWQLiHc6IHQn_p0mW5rwQXUfug_dihafb5DT992CwaIWR27ltw4ci7QXAHm-M1CpZMFY6cxKXBQ"
class="override" style="max-width: 80%">

---

## Keywords

**Visual Acuity**

- The ability to resolve fine spatial detail; acuity is highest in the **fovea** (center of gaze) and drops sharply in the periphery, allowing for optimizations like foveated rendering.

**Contrast Sensitivity**

- The visual system detects **relative differences** in brightness (contrast) rather than absolute luminance, which allows us to see effectively across huge variations in lighting conditions.

**Saccades**

- Rapid, ballistic eye movements that redirect the fovea to regions of interest; the brain suppresses vision during the move (saccadic masking), hiding the motion blur.

**Color Constancy**

- The perceptual ability to discount the color of the illumination source, allowing us to perceive the "true" color of an object regardless of whether it is under blue sky or yellow indoor light.

**Binocular Disparity**

- The difference in image location of an object seen by the left and right eyes; the brain uses this disparity to triangulate distance (stereopsis).

**Motion Parallax**

- A depth cue where, as the viewer moves, closer objects appear to move faster across the view than distant objects; a powerful cue for 3D structure in 2D displays.

---

## Formulas

**Weber's Law**

- **Formula:** $\frac{\Delta I}{I} = k$

- **Meaning:** The just noticeable difference ($\Delta I$) is a constant proportion of the stimulus magnitude ($I$).

- **Use in graphics:** Explains why quantization artifacts (banding) are more visible in dark areas than bright ones.

**Stevens's Power Law**

- **Formula:** $S = k I^b$

- **Meaning:** Relates perceived sensation magnitude $S$ to physical intensity $I$ raised to a power $b$.

- **Use in graphics:** The perceptual basis for **gamma correction**, mapping linear physical light to non-linear human brightness perception.

**Vergence Depth**

- **Formula:** $z = \frac{\text{ipd}/2}{\tan \theta}$

- **Meaning:** Calculates depth $z$ based on the interpupillary distance (ipd) and the convergence angle $\theta$ of the eyes.

- **Use in graphics:** Fundamental for setting up comfortable **stereoscopic (3D) displays**.

---

## Practical Use

**Flicker Fusion**

- To create the illusion of continuous motion, displays must refresh fast enough (typically >60Hz) to exceed the **critical flicker fusion threshold**, otherwise the image appears to strobe.

**Tone Mapping**

- Because displays cannot match the **dynamic range** of the real world ($100,000:1$), algorithms use perceptual principles to compress contrast so bright and dark areas are both visible.

**Shape from Shading**

- The brain interprets gradients in brightness as surface curvature; graphics engines rely on **shading models** (like Blinn-Phong) to trigger this cue, giving flat polygons a 3D appearance.

**Depth Cues**

- Since stereo vision only works up close, graphics relies on **pictorial cues** like occlusion, linear perspective, and texture gradients to convey depth in landscapes and large scenes.
