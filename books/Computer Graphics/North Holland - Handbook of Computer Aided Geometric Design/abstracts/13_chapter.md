# Chapter 13: Interrogation of Subdivision Surfaces

---

## Main Idea

This chapter focuses on "interrogation," the process of extracting specific geometric properties from subdivision surfaces for analysis, manufacturing, and rendering. It demonstrates how the subdivision paradigm—breaking a complex problem into smaller, simpler parts—is applied to tasks like finding intersections between surfaces, calculating volumes, and generating offset surfaces for machining.

---

## Keywords

**Interrogation:**
The process of analyzing a geometric model to determine properties such as curvature, surface area, volume, or intersection curves, often to verify design quality or prepare for manufacturing.

**Recursive Division:**
A "divide and conquer" algorithmic strategy where a surface is repeatedly split into smaller pieces until each piece is simple enough (e.g., flat enough) to be solved trivially.

**Bounding Volume:**
A simple geometric shape (like a box or sphere) that completely encloses a complex surface patch. If the bounding volumes of two patches do not overlap, the patches themselves definitely do not intersect.


**Ray Casting:**
A rendering technique that determines the visibility of a surface by tracing a line from the eye point through a pixel to find the first point of intersection with the surface.

**Offset Surface:**
A surface generated at a constant normal distance from the original surface. This is critical in manufacturing to define the path of a spherical cutting tool.

**Silhouette:**
The curve on a surface where the surface normal is perpendicular to the view direction. These curves separate visible regions from hidden ones.

---

## Formulas

**Intersection Condition (Bounding Boxes)**

- **Formula:** $B_1 \cap B_2 \neq \emptyset$
- **Meaning:** A necessary (but not sufficient) condition for two surface patches to intersect is that their enclosing bounding boxes must overlap.
- **Use in graphics:** Used to rapidly discard pairs of surfaces that are far apart during collision detection or boolean operations.

**Volume Integral (Divergence Theorem)**

- **Formula:** $V = \int_{S} x \cdot n_x \, dA$
- **Meaning:** Calculates the volume of a closed object by integrating over its boundary surface $S$, reducing a 3D problem to a 2D calculation.
- **Use in graphics:** Used to compute the mass or volume of a designed part (e.g., a fuel tank).

**Flatness Test**

- **Formula:** $\| P - \text{Plane}(P) \| < \epsilon$
- **Meaning:** A check to see if a subdivided patch $P$ is flat enough to be approximated by a polygon.
- **Use in graphics:** Determines when to stop the recursive subdivision process during rendering or intersection.

---

## Practical Use

**CNC Machining**
Interrogation algorithms generate "offset surfaces" that guide the center of a milling tool, ensuring the cutter removes exactly the right amount of material to form the desired shape.

**Realistic Rendering**
Ray-casting algorithms use subdivision to find the exact point where light hits a surface, allowing for accurate shadows, reflections, and refractive effects in movies and games.

**Structural Analysis**
Engineers use interrogation methods to generate variable-density meshes for Finite Element Analysis (FEA), ensuring higher detail in areas where the part will bend or stress the most.
