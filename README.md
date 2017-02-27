# formide-client-2
Second version of the formide-client. Will be renamed to formide-client when done.

## Introduction
The Formide client is an IoT client that works as a stand alone 3D printing server as well as
connection to the Formide cloud platform. It is written in Node.js, making it easy for developers
to get started with on their own devices or add functionality. The client is open source and can
be found on GitHub.

## Requirements


## Installation
The full installation guide can be found on [developers.formide.com](https://developers.formide.com/docs/installation).

### Manual install quick steps

Step 1: install the `formide-client` NPM package globally.
```
npm install -g formide-client
```

Step 2: set the `NODE_ENV` environment parameter to `production`.
```
export NODE_ENV=production
```

Step 3: run the client
```
formide-client
```

For auto-boot scripts, please check the detailed [installation guide](https://developers.formide.com/docs/installation#section-auto-boot).

## Plugins
Formide client supports plugins to add additional functionality depending on implementation needs.
For example, the Felix Pro Touch series can switch between the touchscreen Element and an USB
host controller on the side of the printr. A plugin was created to allow switching using GPIO
and custom hardware. Plugins must be stored in the `src/plugins/bundled` or the `~/formide/plugins`
directories in order to be loaded. At the moment, hot-loading plugins using a UI is not supported.

## Supported devices
At the moment, Formide client runs smoothly on the following devices:

* The Element (inc. Wi-Fi, OTA updates, cloud support)
* Raspberry Pi 2 & 3 (inc. cloud support)
* MacOS (inc. Wi-Fi, cloud support)

If you want to make Formide client compatible with another device, please check the 
[native implementation guide](https://developers.formide.com/docs/native-api).

## Documentation

### HTTP API
Full documentation for the HTTP API can be found at [printr3d.github.io/formide-client-2](https://printr3d.github.io/formide-client-2).

### RTM API
Full documentation for the RTM API can be found at [developers.formide.com](https://developers.formide.com/v1.0/reference#introduction).

### Native API
Full documentation for the Native API can be found at [developers.formide.com](https://developers.formide.com/docs/native-api).

## Contributing
You can contribute to `formide-client` by closing issues (via fork -> pull request to development),
adding features or just using it and report bugs! Please check the issue list of this repo before
adding new ones to see if we're already aware of the issue that you're having.

## License
Please check LICENSE.md for licensing information.