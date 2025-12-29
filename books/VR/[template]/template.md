# **TEMPLATE**

**Role:** You are an expert technical writer and VR systems engineer specializing in Human-Computer Interaction (HCI), spatial computing, and immersive design.

**Task:** Generate resources for **Chapter [INSERT NUMBER]: [INSERT TITLE]**.

# **1. Abstract Guidelines**

_(Internal Rule: You will insert this content directly into the Python script variable `abstract_content`.)_

Create a file named `abstracts/[chapter]_chapter.md`. Follow this strict format:

# Chapter [INSERT NUMBER]: [INSERT TITLE]

---

## Main Idea

- State what the chapter teaches in 1–2 short sentences bullet point. Keep it factual and direct.

- **Do not include citations, page numbers, or bracketed references.**

---

## Key Principles & Guidelines

**Name of Principle/Illusion**

- **Definition:** One-sentence explanation of the phenomenon (e.g., Vergence-Accommodation Conflict, Vection).

- **Design Implication:** How this affects VR development or user comfort.

_(Include specific heuristics, perception rules, or hardware constraints.)_

---

## Formulas (Optional)

**Name**

- **Formula:** [LaTeX equation if applicable]

- **Context:** When this is used in the VR pipeline (e.g., Rendering, Tracking).

_(Only include if the chapter explicitly defines mathematical models.)_

---

## Practical Use

**Name**

- Concise, simple explanation.

# **2. Python Script Guidelines**

Write a **single** Python script that generates **both** the Question and Response Markdown files.

- **Constraint 1 (Raw Strings):** You **MUST** use Python raw strings (`r"""..."""`) for the _Abstract body_, _Questions_, and _Responses_. **Do not use f-strings** for content containing LaTeX.

- **Constraint 2 (File Handling):** The script must automatically create the directories `abstracts/` and `exercises/[chapter]/`.

- **Constraint 3 (Comprehensive Design Reasoning):** For Response files, provide detailed, reasoned explanations. If the question is a design challenge, list pros/cons or step-by-step implementation logic. If it is a discussion question, synthesize the chapter's arguments to support the answer. Do not be overly brief; prioritize clarity and context, be concise and simple.

- **Constraint 4 (Strict Source Adherence):** Scan the source text meticulously. You must create a separate file for **EVERY** numbered exercise (e.g., 1.1, 1.2, 1.3). **Do not skip any questions.**. You are **PROHIBITED** from using outside knowledge to generate exercises. You must **ONLY** extract questions that are explicitly present in the provided source text. Even if you know the book typically has "Review Questions" at the end, if that section is missing from the provided file, you **MUST** leave the questions and responses dictionaries empty.

- **Constraint 5 (Verbatim Extraction):** If you find exercises, the question text in the questions dictionary must be a _verbatim quote_ from the source file. Do not paraphrase. If the chapter does _not_ contain specific exercises, leave the dictionaries empty. Do not invent new exercises.

- **Constraint 6 (No Citations):** The output must be clean text. **Do NOT** include citations (e.g., ``), page references, or bracketed numbers in the Abstract or Responses.

# **3. Output Format**

- **Output ONLY the Python script.**

- Do not output the Abstract text separately (it must be inside the script).

- Do not add conversational text (like "Here is the script").

- Start directly with `import os`.

# **4. Python Script Template**

```python

import os

# ==========================================
# CONFIGURATION
# ==========================================
chapter_id = "[INSERT_CHAPTER_NUMBER]"  # e.g., "1_1"
chapter_title = "[INSERT_CHAPTER_TITLE]"  # e.g., "Vectors"
abstract_dir = "abstracts"
exercises_dir = f"exercises/{chapter_id}"

# Constraint 2: Create directories automatically
os.makedirs(abstract_dir, exist_ok=True)
print(f"Generating .md files for Chapter {chapter_id}: {chapter_title}...")

# ==========================================
# 1. ABSTRACT CONTENT
# ==========================================
# Constraint 2: Explicit .md extension
abstract_filename = f"{chapter_id}_chapter.md"

# Constraint 1: Raw strings for LaTeX support
abstract_content = r"""[INSERT ABSTRACT CONTENT HERE FOLLOWING GUIDELINES]"""

# Write Abstract File
with open(os.path.join(abstract_dir, abstract_filename), "w", encoding="utf-8") as f:
    f.write(abstract_content)
    print(f"[+] Created Abstract: {abstract_filename}")


# ==========================================
# 2. QUESTIONS & RESPONSES CONTENT
# ==========================================
# Constraint 4: Leave empty if no exercises exist in source.
# Constraint 5: Capture EVERY exercise found.
questions = {
    # "1.1_question.md": r"""### Exercise 1.1
    #
    # [Exact Question text]"""
}

# Constraint 3: Concise, step-by-step math. No conversational filler.
responses = {
    # "1.1_response.md": r"""### Answer 1.1
    #
    # [Step 1 Math]
    # [Step 2 Math]
    # [Final Answer]"""
}

if questions or responses:
    os.makedirs(exercises_dir, exist_ok=True)

# Write Question Files
for filename, content in questions.items():
    file_path = os.path.join(exercises_dir, filename)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[+] Created Question: {filename}")

# Write Response Files
for filename, content in responses.items():
    file_path = os.path.join(exercises_dir, filename)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[+] Created Response: {filename}")

if not questions and not responses:
    print(f"[i] No exercises found for Chapter {chapter_id}. Only Abstract created.")

print(f"\n[!] All files successfully generated for Chapter {chapter_id}.")

```
