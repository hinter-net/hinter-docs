# Design and Protocol

The design of hinter-core is guided by a commitment to simplicity, robustness, and developer agility.
This section covers the core design principles and the technical details of the protocol.

## Design Philosophy

### File System as Database

hinter-core treats the file system as its database.
Peer configurations, incoming reports, and outgoing reports are all stored as plain files and folders.
This choice is fundamental:

- **Simplicity**: It eliminates the need for a separate database server, reducing setup and maintenance overhead.
- **Transparency**: You can directly observe the state of the system by looking at the files. There is no hidden state.
- **Interoperability**: Any tool that can read a file system can interact with hinter-core's data, making it easy to script and extend.

### Protocol as Implementation

The hinter protocol is not defined by a standalone specification document.
Instead, the hinter-core codebase _is_ the specification.
This approach offers several advantages for a young and evolving project:

- **Agility**: The protocol can be updated and improved quickly without a lengthy standards process.
- **Accuracy**: The implementation is, by definition, always 100% compliant with the protocol.
- **Pragmatism**: It prioritizes a working system over abstract documentation, ensuring that development is grounded in practical reality.

:::info hinter-core Alternatives
This implies that users can maintain hinter-core alternatives as long as they are compatible with the canonical hinter-core implementation.
:::

### Focused Responsibility

hinter-core has a single, clear job: to handle the P2P exchange of files.
It does not concern itself with the content of those files, user interfaces, or advanced data processing.
This strict separation of concerns ensures that hinter-core can be optimized for reliability and security as the foundational transport layer of Hinter Net.

## Protocol Implementation

Under the hood, hinter-core uses a collection of modules for building peer-to-peer, append-only logs.

### How Synchronization Works

Synchronization in hinter-core is a process of mirroring a sender's `outgoing/` directory to a recipient's `incoming/{SENDER_ALIAS}` directory.
The sender's directory is treated as the definitive source of truth.

1.  **Append-only Log**: Each peer maintains an append-only log of its `outgoing/` directory.
    When a file is added, modified, or deleted, a new entry is appended to this log, creating a verifiable history of changes.
2.  **Peer Connection**: When two peers connect, they exchange information about their logs.
3.  **One-Way Mirroring**: For each peer connection, the synchronization is one-way.
    The recipient peer downloads any changes it is missing from the sender's log.
    The recipient always defers to the sender's log; the sender's machine knows best what it wants to send.
4.  **File System Update**: As the recipient receives new log entries, it updates its `incoming/{SENDER_ALIAS}` directory to perfectly mirror the sender's `outgoing/` directory.

This append-only log structure provides a robust and efficient way to keep directories synchronized between peers in a decentralized manner, with a clear chain of authority for the data being exchanged.
