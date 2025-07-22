# Design Philosophy

For Hinter Net to reach its full potential, you must be able to trust it with your most sensitive information.
This level of trust is fundamentally incompatible with the proprietary, centralized, and surveillance-based communication and AI solutions.

Hinter Net is built on the core principle of end-to-end user sovereignty.
The system is architected to function with zero reliance on external servers, ensuring that you can go completely offline and air-gapped if your use case demands it.

## Data Sovereignty

You own your data.
Your entire knowledge base—your private entries, your peer configurations, and all your reports—is stored locally in the `hinter-core-data/` directory on your own machine.
You can back it up, encrypt it, or delete it at any time.
At no point is your private data uploaded to a cloud service or third-party platform.

## Peer-to-Peer Architecture

There are no central servers in Hinter Net.
All communication happens directly between the machines of you and your peers.
Furthermore, communication between peers is end-to-end encrypted.
Even if an attacker were to intercept the network traffic, it would be unintelligible to them.

## Local LLM-first Design

We actively prioritize locally hosted models over external API services to fully protect user sovereignty.
Consequently, we do not build official tools that favor specific commercial AI services like GitHub Copilot, Gemini CLI or Claude Code.
We also deliberately avoid designing core workflows that demand massive context windows or specialized agentic capabilities, which create a soft vendor lock-in.
The ideal and strongly recommended path is to power your AI assistant with a local LLM.

:::info The Future is Local
We recognize that hosting capable LLMs locally is still an emerging capability.
However, it is safe to view this as a temporary bottleneck.
You do not need the state-of-the-art model; just an _adequate_ one, which will soon be easily achievable with local setups.
:::

## Hinter Net vs. Alternatives

Hinter Net's unique combination of principles sets it apart from other platforms.

- **vs. Public Social Networks (Twitter, etc.)**: Hinter Net is private and high-signal by design.
  It's about depth of connection with a trusted few, not breadth of connection with a noisy crowd.
- **vs. Team Collaboration Tools (Slack, etc.)**: Hinter Net is decentralized and peer-to-peer.
  There is no central company or server that owns the platform or your data.
  Your network is your own.
- **vs. Personal Knowledge Management (Obsidian, etc.)**: While PKM tools are excellent for organizing personal notes, Hinter Net adds a crucial networking and AI-synthesis layer.
  It's not just about what you know; it's about what you and your network know together, and how an AI can help you make sense of it all.

Hinter Net is not intended to replace these platforms, but to complement them.
For instance, you can aggregate your own data from various siloed platforms to enrich your private knowledge base.
Your AI assistant can then leverage this unified context to compose responses to queries, regardless of which platform they originate from.
