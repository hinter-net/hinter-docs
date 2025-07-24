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

## Common Issues

This section assumes you have followed the Quickstart guide correctly. For general Docker issues, please refer to the official Docker documentation.

### Host Networking Issues on macOS

In some cases, Docker's host networking feature may not work reliably on macOS.
If you suspect this is the issue, we recommend running the application directly on your host machine instead of in a container.
You can do this by cloning the `hinter-core` repository from GitHub, checking out the specific version tag you wish to use, and using the respective npm script.
