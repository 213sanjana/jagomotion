# MCP Project Structure & AI Workflow

## Directory: `.mcp/`
This directory contains all meta, context, and workflow files for AI-assisted development.

### Files:
- `project-context.json`: Defines the AI workflow, mission, phases, rules, and feedback loop.
- `structure.md`: (This file) Describes the structure and conventions for MCP-driven work.
- `step-logs/`: (Optional) Directory for logs or records of each major step, if needed.
- `decisions.md`: (Optional) Running log of major design or implementation decisions.

## AI Workflow (Summary)
1. **Step Proposal**: AI proposes the next major step.
2. **Decomposition**: AI breaks down the step into subtasks if needed.
3. **Implementation**: AI implements the code/logic for the step.
4. **Reflection**: AI reviews, suggests improvements, or reorders steps.
5. **Completion**: AI marks the step complete and moves to the next.

### Rules of Engagement
- AI must state when a step is complete.
- Before each new step, AI evaluates if new steps/subtasks are needed.
- AI may revise earlier steps, but must explain why.

### Feedback Loop
After each phase, prompt:
> Would you like to modify, expand, or re-prioritize the current steps or plan? If yes, update and continue. If no, move on.

## Usage
- All major AI-driven development should reference this structure.
- New context, logs, or decisions should be added to `.mcp/` as needed.
- This structure ensures transparency, modularity, and iterative improvement. 