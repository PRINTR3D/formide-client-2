# formide-client-2
Second version of the formide-client. Will be renamed to formide-client when done.

## Introduction
The Formide client is an IoT client that works as a stand alone 3D printing server as well as
connection to the Formide cloud platform. It is written in Node.js, making it easy for developers
to get started with on their own devices or add functionality. The client is open source and can
be found on GitHub.

## Requirements
Formide client needs the following requirements:

* ARM linux (tailored for The Element, also tested on Raspberry Pi 2 and 3, and Beagle Bone Black) or MacOS (development purposes)
* NodeJS 4.x (the LTS release) and accompanying NPM version
* A working internet connection for [cloud](https://formide.com) functionality

## Documentation
Please find all the documentation in this project's [wiki](/wiki).

## Installation
The full manual installation guide can be found on [developers.formide.com](https://developers.formide.com/docs/installation).

### Quick steps

Step 1: install the `formide-client` NPM package globally.
```
npm install -g formide-client
```

Step 2: set the `NODE_ENV` environment parameter to `production`.
```
export NODE_ENV=production
```

Step 3: run the client.
```
formide-client
```

## Plugins
Details about plugins can be found on the [wiki](/wiki/Plugins).

## Supported devices
At the moment, Formide client runs smoothly on the following devices:

* The Element (inc. Wi-Fi, OTA updates, cloud support)
* Raspberry Pi 2 & 3 (inc. cloud support)
* MacOS (inc. Wi-Fi, cloud support)

If you want to make Formide client compatible with another device, please check the [wiki](/wiki/native-api) for native implementations.

## Contributing
You can contribute to `formide-client` by closing issues (via fork -> pull request to development),
adding features or just using it and report bugs! Please check the issue list of this repo before
adding new ones to see if we're already aware of the issue that you're having.

## License
Please check [LICENSE.md](LICENSE.md) for licensing information.
