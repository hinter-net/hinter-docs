---
sidebar_label: "Introduction"
---

# hinter-core

**hinter-core** is the networking engine of [Hinter Net](../hinter-net/introduction.md).
It is the reference implementation of the **hinter protocol**, a secure, P2P system for exchanging intelligence reports between trusted peers.
hinter-core is built using the [Pear Runtime](https://pears.com/), which provides the underlying P2P and cryptography layers.

hinter-core runs as a quiet background service, managing your cryptographic identity and handling the secure exchange of reports.
It has no user interface of its own; its sole purpose is to be a robust and reliable data transport layer, allowing you to focus on crafting intelligence in its companion application, [hinter-cline](../hinter-cline/introduction.md).

:::tip Don't Read, Chat!

You can copy-paste [`llms-full.txt`](https://hinter.net/llms-full.txt) to your preferred AI.

:::

### Key Features

- **Identity Management**: Creates and stores your unique cryptographic keypair, which serves as your identity on the network.
- **Peer-to-peer Networking**: Connects directly and securely to your peers' machines using their public keys.
- **Report Synchronization**: Automatically sends and receives report files.
- **End-to-end Security**: All communication is direct, P2P, and end-to-end encrypted, with no central servers.

To learn how to manage its configuration and directory structure, see the **[User Guide](./user-guide.md)**.
