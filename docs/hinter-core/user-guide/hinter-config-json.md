---
sidebar_label: "hinter.config.json"
title: ""
---

## `hinter.config.json`

You can apply settings globally or on a per-peer basis.
Peer-specific settings always override global settings.
These are advanced settings and are not typically needed for normal operation.

### Global Configuration

Create a file at `hinter-core-data/hinter.config.json` to set global defaults for all peers.

- `disableIncomingReports` (boolean, optional, default: `false`): If `true`, your hinter-core instance will not listen for or accept any incoming reports from any peer.
- `peerSizeLimitMB` (number, optional, default: `1024`): The maximum size (in megabytes) a peer's `incoming/` directory can reach before they are automatically blacklisted to prevent abuse.

:::info Managing Blacklisting
When the `peerSizeLimitMB` is exceeded, the peer is blacklisted by creating an empty file named `.blacklisted` in their peer directory.
To undo the blacklisting, the conditions that caused the blacklisting must be reversed, and this file needs to be deleted manually.
:::

### Peer-specific Configuration

Each peer's configuration is stored at `hinter-core-data/peers/{PEER_ALIAS}/hinter.config.json`.
This file is created automatically when you add a peer with the hinter-cline helper tool.

It **must** contain the peer's `publicKey`.
You can also add any of the global configuration keys here to override the default settings for just that peer.

**Example:**

```json
{
  "publicKey": "a1b2c3d4e5f6...",
  "disableIncomingReports": true,
  "peerSizeLimitMB": 2048
}
```
