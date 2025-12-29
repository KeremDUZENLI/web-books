# Chapter 16: Survey of Real-Time 3D Graphics Platforms

---

## Main Idea

- This chapter surveys the software architectures used to interface with graphics hardware, contrasting low-level Immediate Mode APIs like OpenGL with high-level Retained Mode middleware.
- It details the evolution of the graphics pipeline from fixed-function state machines to fully programmable shader-based architectures and outlines the "Application-Model-to-IM-Platform" pipeline.

---

## Keywords

**Immediate Mode (IM):**

- A low-level API style where the client application must explicitly reissue draw commands for the scene every frame without the system retaining a model of the geometry.

**Retained Mode (RM):**

- A high-level API style where the system maintains a hierarchical scene graph and handles the details of rendering and optimization automatically.

**Fixed-Function Pipeline:**

- An older generation of graphics hardware architecture where rendering stages are hardwired and configurable only via parameters.

**Programmable Pipeline:**

- Modern graphics architecture that allows developers to write custom code (shaders) for specific stages, particularly vertex and fragment processing.

**AMIP (Application-Model-to-IM-Platform):**

- The software pipeline responsible for extracting relevant data from the application, optimizing it, and generating the efficient stream of API calls needed to drive the hardware.

**Shader:**

- A program written in a specialized language that executes on the GPU to customize the processing of vertices or fragments.

_(Add only the essential terms.)_

---

## Formulas

**Model-View Matrix Composition**

- **Formula:** $M_{MODELVIEW} = M_{view} \cdot M_{model}$

- **Meaning:** The single matrix in fixed-function OpenGL that transforms geometry from object space directly to eye space.

- **Use in graphics:** Efficiently combining camera positioning and object placement into one operation.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**State Machine Configuration**

- The pattern used by immediate-mode APIs where global state variables persist until changed, requiring careful management to avoid side effects between drawing calls.

**CPU-Side Culling**

- The process of identifying and discarding invisible objects in the application software to prevent wasting GPU resources on geometry that will not appear in the final image.
