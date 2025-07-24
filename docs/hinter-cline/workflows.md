# Workflows and Tips

hinter-cline is a flexible environment.
While you can develop your own methods, here are some recommended workflows and practical tips to get you started.

## The Core Workflow

The fundamental workflow for a hinter is a continuous cycle:

1.  **Ingest**: Review the `git diff` of the `incoming/` directories to see what has changed since your last session.
    You can then hyperlink to these reports from your `entries/` directory, or copy them over if you deem them critical.
    Once you have reviewed the new intelligence, commit the changes to mark them as seen.
2.  **Curate**: Collect intelligence from various sources and record it in your private `entries/` directory, adding your own thoughts and connections.
3.  **Compose**: Create new report drafts or maintain canonical ones that need to be updated at the other peers' end.
4.  **Distribute**: Use the `Sync reports` command in the helper tool to send your final report drafts to the designated recipients.

:::tip Use Your AI Assistant
Remember that you are in an AI-assisted environment. You do not have to perform these steps manually. For example, instead of reading the incoming report diffs yourself, you can ask the AI to do it for you and summarize anything that might be of interest. Similarly, you can ask the AI to synthesize new information, compose draft reports, and more.
:::

## The Reporting Workflow

Reports can be one-time dispatches, like a newsletter, or they can be canonical, living documents that you maintain and update over time for your peers.
The workflow is the same for both:

1.  **Create a Draft**: Use the helper tool to create a new report draft.
    This will prompt you for a title and recipients, and create the draft file with the correct frontmatter.
2.  **Compose**: Write your content in the newly created Markdown file.
3.  **Sync and Send**: Run the `Sync reports` command from the helper tool.
    This scans all your drafts and sends them to the correct peers.

This helper-driven workflow is the recommended way to manage your reports. You only need to manually edit the frontmatter for advanced use cases, such as changing the `sourcePath` or modifying the recipient list after the draft has been created.

## Practical Tips

### Your Daily AI Assistant

While hinter-cline is designed for hinter workflows, it's also a powerful, standalone AI assistant.
Because it has access to your entire knowledge base, you can ask it anything about the information you've curated.

For example, you can ask:

- "I've been on holiday for a week. Give me a catch-up report on what I've missed."
- "Are there any new people I should connect with, based on my current network and interests?"
- "Give me a profile on Alice based on all the information I have."

### Context Isolation

Use the "New Task" button in the Cline sidebar frequently.
Start a new task for each distinct piece of work (e.g., one task for your daily briefing, another for drafting a report to a specific group).
This keeps the AI's context focused and prevents information from unrelated conversations from influencing its output.

### Composing with the AI

Treat the AI as a collaborative partner.

- **Start broad, then refine**: Give the AI a high-level goal first ("Draft a report to the 'dev' group about the new Docker security vulnerability").
- **Iterate**: Review the AI's draft and provide specific feedback ("Make the tone more urgent," "Add a link to the official patch notes," "Can you simplify the technical explanation in the second paragraph?").
- **Use Act Mode for Edits**: Once you have a plan, switch to Act Mode and let the AI make the changes directly to the file.

### Linking Your Knowledge

You can create a powerful, interconnected knowledge base by linking your entries.
When you create a new entry that relates to an existing one, you can add a Markdown link to it.
For example, if you have an entry about a company called "Acme Corp" and you create a new entry about its CEO, you can link the two like this:

`[Acme Corp](../entries/acme_corp.md)`

This creates a relationship between the two entries that your AI assistant can understand and use to provide more contextually aware responses.
