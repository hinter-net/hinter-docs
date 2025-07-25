# Quickstart

This guide will walk you through installing hinter-core and hinter-cline, and connecting with your first peer.
The entire setup runs inside Docker containers, which means it is completely isolated from the rest of your computer and safe to run.
You also don't need to install any other development tools on your machine.

## Prerequisites

- [Docker Desktop](https://docs.docker.com/desktop/) installed and running.
- On Docker Desktop, [enable host networking](https://docs.docker.com/engine/network/drivers/host/#docker-desktop).

  :::info Host Networking Required
  Host networking is required for hinter-core to communicate with peers.
  :::

## Step 1: Run hinter-core

hinter-core is the networking engine.
It needs to be running in the background to send and receive reports.

1.  **Initialize Your Data Directory & Keypair**

    Open a terminal and run the following command.

    ```sh
    docker run -it --rm -v"$(pwd)/hinter-core-data":/app/hinter-core-data bbenligiray/hinter-core:0.1.0 npm run initialize
    ```

    This creates a `hinter-core-data/` directory in your current location, which will store all your data and your unique cryptographic keypair.

2.  **Start hinter-core in the Background**

    Now, run this command to start the hinter-core container.
    It's set to always restart, so it will launch automatically even after you restart your computer.

    ```sh
    docker run -d --name my-hinter-core --restart=always --network host -v"$(pwd)/hinter-core-data":/app/hinter-core-data bbenligiray/hinter-core:0.1.0
    ```

    :::tip Check Your Logs
    You won't see hinter-core output because it's running in the background, but you can check its logs anytime with:

    ```sh
    docker logs my-hinter-core
    ```

    :::

## Step 2: Run hinter-cline

hinter-cline is your command center, providing a VS Code interface in your browser.
It comes with Cline, an AI assistant extension for VS Code.

1.  **Start hinter-cline in the Background**

    In your terminal, run:

    ```sh
    docker run -d --name my-hinter-cline --restart=always -p 8080:8080 -v"$(pwd)/hinter-core-data":/app/hinter-core-data bbenligiray/hinter-cline:0.1.0
    ```

    This starts the hinter-cline container and makes it accessible on port `8080`.
    It shares the `hinter-core-data/` directory with hinter-core, so it can access your peers and reports.

2.  **Open hinter-cline in Your Browser**

    Navigate to [`http://localhost:8080`](http://localhost:8080).
    You should see the VS Code interface.

3.  **Configure Cline**
    - Click the Cline icon in the VS Code sidebar.
    - Select an AI provider and enter your API key.

      :::tip Free OpenRouter Models for Testing
      If you don't have a subscription to an AI provider, you can get a key from [OpenRouter](https://openrouter.ai/) and start testing with one of the free models such as [`deepseek/deepseek-chat-v3-0324:free`](https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free).
      :::

## Step 3: Add Your First Peer

Now you're ready to connect with a peer.
You'll need their 64-character public key.

:::tip Find Your First Peer
If you don't know anyone to connect with, check out the **[Get Involved](./get-involved.md)** page for tips on how to find your first peers.
:::

1.  **Open a Terminal in hinter-cline**

    In the browser-based VS Code interface, go to the "Terminal" menu and select "New Terminal".

2.  **Run the helper**

    In the new terminal panel, type the following command to start the helper tool:

    ```sh
    npm start
    ```

3.  **Add a Peer**
    - Select the "Add a peer" option from the menu.
    - Follow the prompts to enter a unique alias (a nickname) for your peer and paste their public key.

## Step 4: Share Your Public Key

Your peer needs to add you back!

1.  **Find Your Public Key**

    Your key is in the `hinter-core-data/.env` file.
    You can see it in the VS Code file explorer.
    The file will look like this:

    ```
    PUBLIC_KEY=...
    SECRET_KEY=...
    ```

    Copy the entire `PUBLIC_KEY` value.

    :::warning Protect Your Secret Key
    Never share your `SECRET_KEY` with anyone.
    Sharing it would allow others to impersonate you on the network.
    :::

2.  **Send It to Your Peer**

    Share your public key with your peer.
    Once they add you using the same steps above, you'll be connected!

## Step 5: Send Your First Report

Now that you're connected, you can send your first report.
This is a two-step process.

1.  **Create a Report Draft**
    - In the hinter-cline terminal, run `npm start` to launch the helper.
    - Select the "Create a report draft" option.
    - Give your report a title.
    - When prompted to select recipients, choose the alias of the peer you just added.
    - A new Markdown file will be created in your `entries/` directory. Add your content to this file and save it.

2.  **Sync and Send the Report**
    - Go back to the main menu of the helper tool.
    - Select the "Sync reports" option.

    This command detects your draft, prepares it by removing its frontmatter (the header enclosed by `---`), and hands it off to hinter-core, which sends it to your peer.
    That's it!

## What's Next?

You've successfully set up your node and exchanged your first piece of intelligence!

To dive deeper, check out the user guides:

- **[hinter-core User Guide](../hinter-core/user-guide.md)**
- **[hinter-cline User Guide](../hinter-cline/user-guide.md)**
