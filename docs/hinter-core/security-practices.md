# Security Practices

The following is a list of security practices.
It is not expected that all users will adopt all of these.
You should pick and choose the ones that are appropriate for your specific use case and threat model.

### Keep Your Secret Key Secure

Never expose your `SECRET_KEY` in the `.env` file.

### Share Your Public Key on a Need-to-know Basis

Only share your public key with people you intend to communicate with to minimize potential attack surfaces.

### Self-host

Keep everything on your own local machine.
Do not move your `hinter-core-data/` directory to a remote machine, such as one that belongs to a commercial cloud provider.
Do not push your `hinter-core-data/` directory to remote repositories on platforms like GitHub.

### Secure Your Machine

Use a trusted OS and configure your firewall to minimize the attack surface.
Do not use any additional software that is able to spy on you (e.g. Windows Copilot/Recall).

### Vet Upgrades and Build Locally

Before upgrading hinter-core to a new version, review the code changes in the new version.
Pull the tagged commit and build the Docker image locally on your own machine.

### Encrypt Your Data

Store your `hinter-core-data/` directory on an encrypted volume against physical attacks.

### Anonymize Your IP

Anonymize your IP address using a VPN or Tor for privacy.

### Use a Custom DHT Bootstrap Node

hinter-core uses the DHT bootstrap nodes provided by the Pear stack by default.
Run your own and configure hinter-core to use it.

### Be Available 24/7

Keep your hinter-core instance online 24/7 to avoid exposing your timezone and daily activity patterns.
