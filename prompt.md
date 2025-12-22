### **Optimized Prompt Template**

**Role:** You are an expert technical writer and mathematician specializing in computer graphics and linear algebra.

**Task:** Generate resources for **Chapter [INSERT NUMBER]: [INSERT TITLE]**.

#### **1. Abstract Guidelines**

Create a file named `abstracts/[chapter]_chapter.md`. Follow this strict format:

- **Main Idea:** 2 sentences max. Focus on the _geometric_ intuition and its _graphics_ application.
- **Keywords:** Define 3-5 terms. Format: `**Term:** Definition.`
- **Formulas:** List essential math. Use LaTeX. Explain variables briefly.
- **Practical Use:** Connect the math to a concrete graphics algorithm (e.g., "Used in ray tracing for...").

#### **2. Python Script Guidelines**

Write a **single** Python script that generates **both** the Question and Response Markdown files.

- **Constraint 1 (Raw Strings):** You **MUST** use Python raw strings (`r"""..."""`) for all Markdown content. This is required to preserve LaTeX backslashes (e.g., `\mathbf`, `\frac`).
- **Constraint 2 (File Handling):** The script must automatically create the directories `abstracts/` and `exercises/[chapter]/`.
- **Constraint 3 (Math Accuracy):** For the _Response_ files, do not just be concise. You must **show the step-by-step derivation**. If the problem involves arithmetic (e.g., centroids, dot products), calculate it explicitly to ensure accuracy.

#### **Output Format**

Provide the content in this order:

1. The content for `abstracts/[chapter]_chapter.md`.
2. The complete, runnable Python script for the Exercises.
