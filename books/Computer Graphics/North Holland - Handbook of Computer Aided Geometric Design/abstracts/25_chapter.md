# Chapter 25: Intersection Problems

---

## Main Idea

This chapter categorizes and details the methods for solving intersection problems between geometric entities—such as points, curves, and surfaces—which are critical operations in geometric modeling, analysis, and manufacturing. It surveys various algorithmic approaches including subdivision (divide-and-conquer), marching (tracing), and algebraic methods (substitution), while addressing complex issues such as loop detection and handling singularities where surfaces touch tangentially.

---

## Keywords

**Intersection Problem:**
The fundamental task of finding the common points or curves shared by two or more geometric objects. Solutions are essential for Boolean operations in solid modeling.

**Subdivision Method:**
A robust, recursive algorithm that divides the geometric domain into smaller regions (like quadtrees or octrees) to isolate areas where intersections might occur.


**Marching Method:**
An algorithm that traces an intersection curve by starting from a known point and taking small steps along the local tangent direction, refining the position at each step.


**Loop Detection:**
The challenging process of identifying closed intersection curves that lie entirely within the interior of a surface patch and do not intersect its boundaries.

**Algebraic Method:**
A class of techniques that solves intersection problems by manipulating the polynomial equations of the objects, often using resultants or Gröbner bases to eliminate variables.

**Singularity:**
A special case where the intersection is not a simple point or curve, such as when two surfaces touch at a single point (tangency) or self-intersect. These require special numerical handling.

**Bounding Volume Hierarchy:**
A pre-processing step using simple shapes (boxes, spheres) to quickly eliminate pairs of objects that are far apart, speeding up the intersection calculation.

---

## Formulas

**Algebraic Substitution**

- **Formula:** $S_1(u,v) \cap S_2(x,y,z) \implies f_2(x_1(u,v), y_1(u,v), z_1(u,v)) = 0$
- **Meaning:** Finds the intersection of a parametric surface $S_1$ and an implicit surface $S_2$ by substituting the parametric equations into the implicit equation.
- **Use in graphics:** A standard method for ray tracing or intersecting a spline with a plane.

**Newton-Raphson Iteration**

- **Formula:** $x_{k+1} = x_k - J^{-1}(x_k)F(x_k)$
- **Meaning:** Numerical method used to refine an approximate intersection point to high precision.
- **Use in graphics:** The "snapping" step in marching algorithms to ensure the traced point stays exactly on both surfaces.

**Differential Marching Direction**

- **Formula:** $t = n_1 \times n_2$
- **Meaning:** The tangent direction $t$ of the intersection curve is the cross product of the normal vectors ($n_1, n_2$) of the two intersecting surfaces.
- **Use in graphics:** Determines the direction to step when tracing an intersection curve.

---

## Practical Use

**Boolean Operations (CSG)**
Constructive Solid Geometry relies entirely on surface-surface intersections to calculate the boundary of objects created by union, difference, or intersection operations.

**NC Machining (Tool Paths)**
Generating the path for a ball-end mill often involves finding the intersection curve between the offset surface of the part and a series of driving planes.

**Contouring (Visualization)**
Topographic maps and medical scans (MRI/CT) use intersection algorithms to draw isolines (contours) that represent constant height or density on a 3D surface.
