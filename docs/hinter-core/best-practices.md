# Best Practices

The following is a list of best practices to consider for maximizing the security, privacy, and integrity of your hinter-core instance.
It is not expected that all users will adopt all of these practices.
You should pick and choose the ones that are appropriate for your specific use case and threat model.

### Self-host

The ideal and most secure setup is to always run everything on your own local machine.
Do not move your `hinter-core-data/` directory to a remote machine, such as one that belongs to a commercial cloud provider.
Do not push your `hinter-core-data/` directory to public or private remote repositories on platforms like GitHub.

### Secure Your Machine

The security of hinter-core depends on the security of the machine it's running on.
Use a trusted OS and configure your firewall to minimize the attack surface.
On your machine, do not use any additional software that is able to spy on you (e.g. Windows Copilot/Recall).

### Encrypt Your Data

For an additional layer of security against physical attacks, you can store your `hinter-core-data/` directory on an encrypted volume.

### Anonymize Your IP

For an additional layer of privacy, consider anonymizing your IP address using a VPN or Tor.
This will make it more difficult for peers to determine your physical location.

### Ensure High Availability

For optimal privacy, you should aim to keep your hinter-core instance online 24/7.
If your instance is only online during your waking hours, your peers' nodes can infer your timezone and daily activity patterns.

### Keep Your Secret Key Secure

Your `SECRET_KEY` in the `.env` file is the ultimate control over your Hinter Net identity, never share it.

### Share Your Public Key on a Need-to-know Basis

Only share your public key with people you intend to communicate with to minimize potential attack surfaces.
