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

:::tip hinter-core Alternatives
This also means that users can maintain hinter-core alternatives as long as they play nice with the canonical hinter-core implementation.
:::

### Focused Responsibility

hinter-core has a single, clear job: to handle the P2P exchange of files.
It does not concern itself with the content of those files, user interfaces, or advanced data processing.
This strict separation of concerns ensures that hinter-core can be optimized for reliability and security as the foundational transport layer of Hinter Net.

## Protocol Implementation

Under the hood, hinter-core uses **Corestore**, a collection of modules for building peer-to-peer, append-only logs.
When you share reports with a peer, you are actually sharing a Corestore.

### How Synchronization Works

1.  **Append-Only Log**: Each peer's `outgoing/` directory is treated as an append-only log. When you add, modify, or delete a file, a new entry is appended to this log, creating a verifiable history of changes.
2.  **Peer Connection**: When your hinter-core instance connects to a peer, they compare their versions of the log.
3.  **Replication**: Each peer downloads the changes they are missing from the other. Because the logs are append-only, this process is very efficient. The peers only need to sync the latest changes, not the entire directory, each time they connect.
4.  **File System Mirroring**: As hinter-core receives new log entries from a peer, it mirrors those changes to the corresponding `incoming/{PEER_ALIAS}` directory on your file system, ensuring your local view is always up-to-date with the latest version of the shared data.

This append-only log structure provides a robust and efficient way to keep directories synchronized between peers in a decentralized manner.
