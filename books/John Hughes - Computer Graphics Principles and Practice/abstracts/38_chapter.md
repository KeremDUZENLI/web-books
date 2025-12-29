# Chapter 38: Modern Graphics Hardware

---

## Main Idea

- This chapter examines the architecture and implementation of modern Graphics Processing Units (GPUs), explaining how they achieve high performance through massive parallelism, pipelining, and specialized memory hierarchies.
- It details the transition from fixed-function pipelines to unified programmable compute engines and explores optimization strategies like multithreading, caching, and minimizing divergence to handle the latency and bandwidth constraints of graphics workloads.

---

## Keywords

**GPU (Graphics Processing Unit):**

- A specialized processor designed to accelerate graphics rendering via high throughput and massive parallelism, distinguishing it from the latency-optimized CPU.

**SIMD (Single Instruction Multiple Data):**

- A parallel execution model where a single instruction controls multiple processing elements simultaneously, typically used in GPUs to process vectors of vertices or fragments.

**Divergence:**

- A loss of efficiency in SIMD architectures occurring when different threads in a vector take different branches of a conditional statement, forcing serialized execution of both paths.

**Latency Hiding:**

- The technique of switching execution to other available threads while waiting for long-latency operations (like memory fetches) to complete, crucial for GPU throughput.

**Spatial Locality:**

- The property where data elements accessed consecutively are located near each other in memory; GPUs optimize for this using tiled memory layouts and swizzled rasterization orders.

**Tiled Rendering (Binned Rendering):**

- An architecture that divides the screen into small tiles and processes all geometry for a tile locally, minimizing main memory bandwidth and enabling efficient on-chip antialiasing.

_(Add only the essential terms.)_

---

## Formulas

**Utilization ($u_{vec}$)**

- **Formula:** $u_{vec} = \frac{i_{seq}}{n \cdot i_{pred}}$

- **Meaning:** The ratio of useful sequential instructions to the total execution slots used in a predicated SIMD vector, quantifying efficiency lost to divergence.

- **Use in graphics:** Profiling and optimizing shader performance.

**Tiled Address Mapping**

- **Formula:** $a = a_{0} + {w_{t}}^{2}((x \div w_{t}) + \frac{w}{w_{t}}(y \div w_{t})) + (x \otimes w_{t}) + w_{t}(y \otimes w_{t})$

- **Meaning:** Maps 2D coordinates $(x,y)$ to linear memory addresses within small $w_t \times w_t$ tiles to improve cache coherence.

- **Use in graphics:** Texture storage layout optimization.

**Compound Growth**

- **Formula:** $t = r^y$

- **Meaning:** The total growth factor $t$ over $y$ years given an annual rate $r$; explains the divergence between GPU and CPU performance trends.

- **Use in graphics:** Hardware trend analysis (Moore's Law).

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**GPGPU (General-Purpose Computing on GPUs)**

- Leveraging the massive floating-point throughput of GPUs for non-graphical tasks like scientific simulation, image processing, and machine learning (e.g., CUDA, OpenCL).

**Performance Tuning**

- Optimizing rendering applications by managing texture locality, minimizing shader divergence, and balancing arithmetic density against memory bandwidth to saturate the GPU.
