---
sidebar_label: "How-tos"
title: ""
---

## How-tos

As a general rule, back up your entire `hinter-core-data/` directory before attempting any of the following.
Do not remove the backup until you confirm that the operation is successful.

### Upgrade hinter-core to Latest Version

Stop and delete the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../../hinter-net/quickstart.mdx).

```sh
pm2 stop my-hinter-core
pm2 delete my-hinter-core
```

Then, install the latest hinter-core version and configure pm2 using the commands provided by the current [Quickstart guide](../../hinter-net/quickstart.mdx).

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
To do so, stop the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../../hinter-net/quickstart.mdx).

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

Stop and remove the pm2 process named `my-hinter-core` that you created while following the [Quickstart guide](../../hinter-net/quickstart.mdx).

```sh
pm2 stop my-hinter-core
pm2 delete my-hinter-core
```

Copy over your `hinter-core-data/` directory to the new machine, except the `.storage/` directory in it.

Follow the [Quickstart guide](../../hinter-net/quickstart.mdx) to start hinter-core on the new machine, skipping the initialization step.

:::warning Avoid Parallel Instances With the Same Keypair
hinter-core is designed to be operated as a single instance.
Do not run multiple instances with the same keypair.
:::
