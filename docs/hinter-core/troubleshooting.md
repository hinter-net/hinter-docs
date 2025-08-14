# Troubleshooting

This page covers common issues you might encounter with hinter-core.

## Viewing Logs

The first step in troubleshooting is always to check the logs.
Since hinter-core runs as a background Docker container, you need to use a specific command to see its output.

Open a terminal on your host machine and run:

```sh
docker logs my-hinter-core
```

_(This assumes you named your container `my-hinter-core` as recommended in the [Quickstart](../hinter-net/quickstart.md).)_

## Running hinter-core without Docker

In some cases, Docker's host networking feature may not work reliably.
If you suspect this is the issue, we recommend running the application directly on your host machine instead of in a container.

**Prerequisites:**

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v22 LTS)

**Steps:**

1.  **Clone the repository:**
    Open your terminal and clone the hinter-core repository from GitHub.

    ```sh
    git clone https://github.com/hinter-net/hinter-core.git
    cd hinter-core
    ```

2.  **Check out the desired version:**
    You can check out a specific version tag. You can find the available tags on the [GitHub releases page](https://github.com/hinter-net/hinter-core/releases).

    ```sh
    # Example: git checkout 0.1.1
    git checkout <tag>
    ```

    If you want to run the latest development version, you can skip this step and stay on the `main` branch.

3.  **Install dependencies:**
    Install the necessary Node.js packages.

    ```sh
    npm install
    ```

4.  **Install Pear:**
    Pear is a tool for building and running peer-to-peer applications. Install the npm package globally.

    ```sh
    npm install -g pear
    ```

    Then, run it once to complete the installation and follow any additional instructions.

    ```sh
    pear
    ```

5.  **Configure your data directory:**
    hinter-core will look for the `hinter-core-data/` directory in the root of the cloned repository. If you have an existing data directory, copy it here. If not, you can initialize a new one.
    - **To initialize a new keypair and data directory:**
      ```sh
      npm run initialize
      ```
      This will create a `hinter-core-data` directory inside the hinter-core project folder.

6.  **Start the application:**
    Run the application.
    ```sh
    npm run start
    ```
    hinter-core will now be running in your terminal.
    You can press `Ctrl+C` to stop it.

:::tip Keep it Running
Unlike the Docker setup, this method will not automatically restart hinter-core when your computer reboots.
For continuous operation, you will need to configure this yourself using a process manager like pm2 or systemd.
:::
