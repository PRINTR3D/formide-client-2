# formide-client-2
Second version of Formide client, an open source 3D printing client software.

[![Gitter](https://img.shields.io/gitter/room/formide-client-2/formide-client-2.svg)](https://gitter.im/formide-client-2/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

[![Build Status](https://travis-ci.org/PRINTR3D/formide-client-2.svg?branch=master)](https://travis-ci.org/PRINTR3D/formide-client-2)

[![npm](https://img.shields.io/npm/v/formide-client-2.svg)](https://www.npmjs.com/package/formide-client-2)

## Introduction
The Formide client is an IoT client that works as a stand alone local 3D printing server as well as connection to the Formide 3D printing cloud platform.
It is written in Node.js, making it easy for developers to get started with on their own devices or add functionality.

## Requirements
Formide client needs the following requirements:

* ARM linux (tailored for The Element, also tested on Raspberry Pi 2 and 3, and Beagle Bone Black) or MacOS (development purposes)
* NodeJS 6.x (the LTS release) and accompanying NPM version
* A working internet connection for [cloud](https://formide.com) functionality

## Documentation
Please find all the documentation in this project's [wiki](https://github.com/PRINTR3D/formide-client-2/wiki).

## Installation
The full manual installation guide can be found on [developers.formide.com](https://developers.formide.com/docs/installation).

### Quick steps

Step 1: install the `formide-client-2` NPM package globally.
```
npm install -g formide-client-2
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
Details about plugins can be found on the [wiki](https://github.com/PRINTR3D/formide-client-2/wiki/Plugins).

## Supported devices
At the moment, Formide client runs smoothly on the following devices:

* The Element (inc. Wi-Fi, OTA updates, cloud support)
* Raspberry Pi 2 & 3 (inc. cloud support)
* MacOS (inc. Wi-Fi, cloud support)

If you want to make Formide client compatible with another device, please check the [wiki](https://github.com/PRINTR3D/formide-client-2/wiki/native-api) for native implementations.

## Contributing
You can contribute to Formide client by closing issues (via fork -> pull request to development), adding features or just using it and report bugs!
Please check the issue list of this repo before adding new ones to see if we're already aware of the issue that you're having.

### Roadmap
The public roadmap for Printr can be found at [this board](https://github.com/orgs/PRINTR3D/projects/1).

### Testing
We advice you to run automated tests before creating a pull request. This can done by simply running `npm test`, or `npm run test:mac`, depending on your platform. All automated test results for branches and pull requests can be found on [Travis](https://travis-ci.org/PRINTR3D/formide-client-2).

## License
Please check [LICENSE.md](LICENSE.md) for licensing information.
