# User Guide

:::info Prerequisites
This guide assumes you have completed the [Quickstart guide](../hinter-net/quickstart.mdx).
:::

While hinter-core runs as a headless background service, it is managed entirely through its file structure.
Understanding its directories and configuration files is key to managing your network and troubleshooting issues.
All of your data is stored in the `hinter-core-data/` directory.

## `--data-dir` Argument

The quickstart guide had you run hinter-core with no arguments, which requires `hinter-core-data/` to be in your home directory.

To customize the path of this directory, you can run hinter-core with the `--data-dir` argument.
For example, if `hinter-core-data/` is in your current working directory, you can use the following command.

```sh
hinter-core --data-dir "$(pwd)/hinter-core-data"
```

Similarly, you can use the `--data-dir` argument while running hinter-core with pm2.
Note that the `--` indicates where pm2 arguments end and where hinter-core arguments begin.

```sh
pm2 start hinter-core --name my-hinter-core -- --data-dir "$(pwd)/hinter-core-data"
```

The `--data-dir` value must be an absolute path.
hinter-core will reject relative paths such as `./hinter-core-data`.
This is because hinter-core is expected to be run by pm2 at startup, where the relative path would not resolve correctly.

## Directory Structure

The `hinter-core-data/` directory is the heart of your Hinter Net presence.
It is created when you run the initialization script, as described in the [Quickstart guide](../hinter-net/quickstart.mdx).

```
hinter-core-data/
├── .env                        # Your private keypair
├── .storage/                   # Automatically generated cache storage directory
├── hinter.config.json          # Global configuration (optional)
└── peers/
    └── {PEER_ALIAS}/           # Directory for a specific peer
        ├── hinter.config.json  # Configuration for this peer
        ├── incoming/           # Reports received from this peer
        └── outgoing/           # Reports to be sent to this peer
```

- **`.env`**: This file contains your unique `PUBLIC_KEY` and `SECRET_KEY`. You should back this file up in a secure location.
  - Share the `PUBLIC_KEY` with others so they can add you as a peer.
  - **Never share your `SECRET_KEY`**.
    It is the private key that controls your identity.
- **`.storage/`**: This directory gets generated automatically by hinter-core and acts as a cache storage for network data.
  It needs to be deleted while [moving `hinter-core-data/`](#migrate-to-another-working-directory-or-machine).
- **`peers/`**: This directory contains a sub-directory for each peer you add.
- **`peers/{PEER_ALIAS}/incoming/`**: Contains reports received from this peer.
  This directory is managed by hinter-core and should be treated as read-only.
- **`peers/{PEER_ALIAS}/outgoing/`**: Place files in this directory to send them to this peer.
  hinter-core will automatically detect and synchronize them.
  This is intended to be done using the hinter-cline helper tool.

## Configuration (`hinter.config.json`)

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

### Peer-Specific Configuration

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

## How to

As a general rule, back up your entire `hinter-core-data/` directory before attempting any of the following.
Do not remove the backup until you confirm that the operation is successful.

### Upgrade hinter-core to Latest Version

Stop and delete the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../hinter-net/quickstart.mdx).

```sh
pm2 stop my-hinter-core
pm2 delete my-hinter-core
```

Then, install the latest hinter-core version and configure pm2 using the commands provided by the current [Quickstart guide](../hinter-net/quickstart.mdx).


You can check the logs to ensure the new version started correctly.

```sh
pm2 logs my-hinter-core
```

:::info Migrating Through Breaking Changes
Some releases introduce breaking changes that require the user to handle.
Always read the respective [Release Notes](https://github.com/hinter-net/hinter-core/releases) before upgrading.
:::

### Update Keypair

You may want to update your keypair if it is compromised, or as a regular security practice.
To do so, stop the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../hinter-net/quickstart.mdx).

```sh
pm2 stop my-hinter-core
```

Use the following command to initialize a new hinter-core directory named `delete-after-use/`.

```sh
hinter-core-initialize --data-dir "$(pwd)/delete-after-use"
```

Overwrite the `.env` file in your `hinter-core-data/` directory with the `.env` file in `delete-after-use/`, and then delete the `delete-after-use/` directory.

Restart the pm2 process for hinter-core.

```sh
pm2 start my-hinter-core
```

Finally, you must share your new public key with your peers for them to be able to update your peer configuration on their end.

### Migrate to Another Working Directory or Machine

Stop and remove the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../hinter-net/quickstart.mdx).

```sh
pm2 stop my-hinter-core
pm2 delete my-hinter-core
```

Copy over your `hinter-core-data/` directory to the new machine, except the `.storage/` directory in it.

Follow the [Quickstart guide](../hinter-net/quickstart.mdx) to start hinter-core on the new machine, skipping the initialization step.

:::warning Avoid Parallel Instances With the Same Keypair
hinter-core is designed to be operated as a single instance.
Do not run multiple instances with the same keypair.
:::
