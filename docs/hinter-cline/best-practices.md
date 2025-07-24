# Best Practices

Many of the foundational security and privacy recommendations for the Hinter Net ecosystem are covered in the [hinter-core Best Practices](../hinter-core/best-practices.md).
It is strongly recommended to review those first.
This page covers additional best practices specific to `hinter-cline`.

## Use a Local LLM to Power Your AI Assistant

To maintain full data sovereignty, the ideal and strongly recommended path is to power your AI assistant with a local LLM.

## Only Add Trusted Peers

A high-trust network requires careful vetting of its members.
Information received from a non-trusted peer is not actionable, and you cannot disclose sensitive information to them in return.
Furthermore, adding any peer creates a potential, if small, attack surface.
For these reasons, you should only add peers you trust.

## Vet Real-World Identities

To protect yourself against impersonation of real or fabricated identities by humans or bots, it is crucial to vet the real-world identity of anyone you add as a peer.
A trust-based network is only secure if you can be confident you know who you are communicating with.

:::tip Key Hinter Identity Recovery
Vetting real-world identities also provides a path for a peer to be reintegrated into the network if their cryptographic key is ever compromised.
:::

## Back Up Your Data

Your `hinter-core-data` directory is the heart of your Hinter Net presence.
It contains your cryptographic identity, your entire knowledge base, and all your peer configurations.
It is critical to back up this directory regularly to a secure, private location.
Losing this directory means losing your identity and all your data.
