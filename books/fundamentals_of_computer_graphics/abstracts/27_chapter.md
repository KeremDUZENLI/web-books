# Chapter 27: Visualization

---

## Main Idea

- This chapter defines **visualization** as the use of computer-generated images to augment human cognition, allowing people to understand complex data by offloading memory and processing to the visual system.

- It classifies data types (tabular, relational, spatial) and outlines a **human-centered design process** to create effective visual encodings that match perceptual capabilities.

---

## Keywords

**Visual Encoding**

- The mapping of data attributes to **visual channels** (like position, color, size, or shape) applied to graphical marks (points, lines, areas).

**Glyph**

- A complex graphical mark where internal substructures (like the height of bars in a miniature chart) encode multiple data dimensions for a single item.

**Small Multiples**

- A layout technique using adjacent views that share the same visual encoding but show different data slices, allowing for easy side-by-side comparison.

**Treemap**

- A space-filling visualization for **hierarchical data** (trees) that uses nested rectangles (containment) to represent parent-child relationships and node size.

**Parallel Coordinates**

- A technique for visualizing **high-dimensional data** where axes are placed parallel to each other, and each data item is a polyline crossing them.

**Focus+Context**

- Interaction techniques (like fisheye lenses or stretch-and-squish navigation) that display a selected region in detail while preserving the surrounding context to prevent disorientation.

---

## Practical Use

**Information Density**

- To manage limited display capacity, designers use **aggregation** and **filtering** to reduce visual clutter, ensuring the user is not overwhelmed by too many data points.

**Graph Drawing**

- For relational data (networks), algorithms use **force-directed placement** (simulating springs) to automatically arrange nodes and minimize edge crossings.

**Dimensionality Reduction**

- Techniques like **MDS (Multidimensional Scaling)** project high-dimensional datasets (like document clusters) down to 2D scatterplots to reveal hidden structures or similarities.

**Linked Views**

- Interactive systems often connect multiple views (e.g., a map and a table) so that selecting items in one view automatically **highlights** them in the others.
