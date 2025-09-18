# User Guide

:::info Prerequisites
This guide assumes you have completed the [Quickstart guide](../hinter-net/quickstart.mdx).
:::

The primary way you will manage your peers, groups, and reports is through the interactive command-line helper tool.

## Running the Tool

1.  Open the hinter-cline VS Code interface in your browser (`http://localhost:8080`).
2.  Open a new terminal (`Terminal` > `New Terminal`).
3.  In the terminal panel that appears, run the command `npm start`.
    This will launch the helper tool.

## Menu Options

- **Create a report draft**: This helps you create a new report draft file in your `entries/` directory.
  It will prompt you for a title and let you select recipients from a list of your known peers and any groups you have created.
  Note that you can move this file to anywhere in your `entries/` directory.
- **Sync reports**: This is a crucial command.
  It scans all draft files in your `entries/` directory and synchronizes them with your peers.
  It reads the YAML frontmatter in each draft and copies the specified content to the correct `outgoing/` directory for hinter-core to send.
  It also removes reports from the `outgoing/` directory if a peer is no longer a recipient.
- **Add/Manage a peer**: This menu lets you add a new peer by providing their alias and public key, or edit/delete an existing peer.
- **Add/Manage a group**: This menu lets you create peer groups (e.g., "work", "friends") to make sending reports to multiple people at once easier.
  You can create new groups, add peers to existing groups, or remove them.

## Report Draft Frontmatter

The core of the reporting system is the YAML frontmatter at the top of each report draft file.

- `to`: A list of recipients. Can contain individual peer aliases (e.g., `"peer-1"`) and groups (e.g., `"group:friends"`).
- `except`: A list of peers or groups to exclude from the `to` list.
- `sourcePath`: (Optional) The path to the file or directory to be sent, relative to the draft file. If left empty, the body of the draft itself (with frontmatter removed) is sent.
- `destinationPath`: (Optional) The destination path for the file or directory in the peer's `outgoing` directory. If left empty, it defaults to the name of the source file or directory.

:::tip Sharing Beyond Text
The `sourcePath` property is powerful.
It allows you to share more than just text reports.
You can point it to a video file, a folder full of memes, or even a static website to share complex intelligence with your peers.
:::

### Example

```yaml
---
to: ["peer-alias-1", "group:my-friends"]
except: ["peer-alias-3"]
sourcePath: ""
destinationPath: ""
---
# A Private Report

Hi peer-alias-1 and my-friends, please do not share this with peer-alias-3.
```

When you run `Sync reports`, the content of this file will be sent to `peer-alias-1` and all members of the `my-friends` group, except for `peer-alias-3`.

### Using the Implicit `all` Group

You can refer to the implicit `all` group, which includes all your peers.

```yaml
---
to: ["group:all"]
except: []
sourcePath: ""
destinationPath: ""
---
# General Announcement

Hi everyone!
```

When you run `Sync reports`, the content of this file will be sent to all your peers.
You do not need to add or manage the `all` group.

## Git-based Workflow

The `hinter-cline` container automatically initializes your `hinter-core-data/` directory as a Git repository on its first run.
This means any new reports you receive or entries you create will appear as changes in `git diff`.

You are encouraged to commit these changes periodically to create checkpoints in your knowledge base's history.
You don't need to worry about crafting perfect, navigable commit histories; the primary utility is in being able to easily review changes since your last session.
You can review the diffs yourself in the VS Code interface or have your AI assistant do it for you.

## How to

### Upgrade hinter-cline to Latest Version

Stop and remove the container named `my-hinter-cline` that you created while following the [Quickstart guide](../hinter-net/quickstart.mdx).

```sh
docker stop my-hinter-cline
docker rm my-hinter-cline
```

Then, start hinter-cline using the command provided by the current [Quickstart guide](../hinter-net/quickstart.mdx), which will use the latest version.

:::info Migrating Through Breaking Changes
Some releases introduce breaking changes that require the user to handle.
Always read the respective [Release Notes](https://github.com/hinter-net/hinter-cline/releases) before upgrading.
:::

You can visit http://localhost:8080 to ensure the new version started correctly.
