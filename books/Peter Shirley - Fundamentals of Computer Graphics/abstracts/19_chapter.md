# Chapter 19: Building Interactive Graphics Applications

---

## Main Idea

- This chapter shifts from algorithms to software engineering, detailing how to structure **interactive graphics applications** using the **Model-View-Controller (MVC)** framework.

- It advocates for **event-driven programming** over control-driven models to efficiently handle user input, system events, and real-time rendering simultaneously.

<img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSFYvyOMv0TGVUklkTJT-6ut8M7VmlH6FDwXg_WLX1Wam_CLLSIsgzb5Icet8HiMObyor_oul4bhZ_2bpnU5vGzdSd6wcrvZweWccY5ZwK3Xp73Xd8">

---

## Keywords

**Event-Driven Programming**

- A programming paradigm where the flow of the program is determined by **events** (mouse clicks, timers, key presses) rather than a linear execution sequence.

**Model-View-Controller (MVC)**

- A software architectural pattern that separates the **Model** (application state/data), **View** (visual representation), and **Controller** (user input handling) to manage complexity.

**Callback Function**

- A function passed to a library (like a GUI system) that is invoked ("called back") automatically when a specific event occurs, such as a button press.

**Application State**

- The persistent data structure (e.g., a list of objects, current velocity, active selection) that defines the current status of the program, residing within the **Model**.

**Graphics vs. GUI APIs**

- **Graphics APIs** (OpenGL, Direct3D) handle the drawing of 3D content; **GUI APIs** (Qt, FLTK, MFC) handle window management, widgets, and user input events.

---

## Formulas

**Simulation Update (Euler Integration)**

- **Formula:** $\mathbf{p}\_{new} = \mathbf{p}\_{old} + \mathbf{v} \Delta t$

- **Meaning:** Updates the position $\mathbf{p}$ of an object based on its velocity $\mathbf{v}$ and the elapsed time $\Delta t$.

- **Use in graphics:** The core mathematical operation inside the **Timer Event** loop to drive animation (e.g., moving balls) independently of user input.

**MVC Interaction**

- **Concept:** $\text{Controller} \to \text{Model} \leftarrow \text{View}$

- **Meaning:** The Controller updates the Model based on input; the View queries the Model to draw the screen; the Model knows nothing about the View or Controller.

- **Use in graphics:** Decouples rendering logic from input logic, allowing multiple views (e.g., a main view and a map view) to observe the same data.

---

## Practical Use

**Timer Events**

- To ensure smooth animation, applications register a **timer event** (e.g., every 16ms for 60fps) to trigger physics updates and redraws, rather than relying on a simple `while` loop that might freeze the interface.

**Visual Feedback (Echo)**

- Interactive programs must provide immediate visual confirmation of state changes; for example, a **slider bar** must update its numeric display instantly when the user drags the handle.

**GUI Builders**

- Tools (like FLTK's Fluid or MFC's Resource Editor) allow developers to visually layout buttons and windows, automatically generating the boilerplate code to hook these widgets into the application's event loop.
