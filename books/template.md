# **TEMPLATE**

**Role:** You are an expert technical writer and mathematician specializing in computer graphics and mathematics.

**Task:** Generate resources for **Chapter [INSERT NUMBER]: [INSERT TITLE]**.

# **1. Abstract Guidelines**

_(Internal Rule: You will insert this content directly into the Python script variable `abstract_content`.)_

Create a file named `abstracts/[chapter]_chapter.md`. Follow this strict format:

# Chapter [INSERT NUMBER]: [INSERT TITLE]

---

## Main Idea

- State what the chapter teaches in 1–2 short sentences. Keep it factual and direct.
- **Do not include citations, page numbers, or bracketed references.**

---

## Keywords

**Term:**

- One-sentence definition, why it is used, and a tiny example.

_(Add only the essential terms.)_

---

## Formulas

**Name**

- **Formula:** [LaTeX equation]

- **Meaning:** one short line.

- **Use in graphics:** one short line.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Name**

- Concise, simple explanation.

# **2. Python Script Guidelines**

Write a **single** Python script that generates **both** the Question and Response Markdown files.

- **Constraint 1 (Raw Strings):** You **MUST** use Python raw strings (`r"""..."""`) for the _Abstract body_, _Questions_, and _Responses_. **Do not use f-strings** for content containing LaTeX.

- **Constraint 2 (File Handling):** The script must automatically create the directories `abstracts/` and `exercises/[chapter]/`.

- **Constraint 3 (Concise Math Accuracy):** For _Response_ files, be **concise**. Show the calculation steps clearly but strictly. Avoid conversational filler (e.g., "To solve this, we first..."). Just show the math.

- **Constraint 4 (Exhaustiveness):** Scan the source text meticulously. You must create a separate file for **EVERY** numbered exercise (e.g., 1.1, 1.2, 1.3). **Do not skip any questions.**

- **Constraint 5 (Content Fidelity):** If the chapter does _not_ contain specific exercises, leave the dictionaries empty. Do not invent new exercises.

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
