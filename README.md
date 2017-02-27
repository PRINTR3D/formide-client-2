# formide-client-2
Second version of the formide-client. Will be renamed to formide-client when done.

## HTTP API
Full documentation for the HTTP API can be found at [printr3d.github.io/formide-client-2](https://printr3d.github.io/formide-client-2).

## WS API
Full documentation for the WS API can be found at [developers.formide.com](https://developers.formide.com/v1.0/reference#introduction).

## Plugins
Formide client supports plugins to add additional functionality depending on implementation needs.
For example, the Felix Pro Touch series can switch between the touchscreen Element and an USB
host controller on the side of the printr. A plugin was created to allow switching using GPIO
and custom hardware. Plugins must be stored in the `src/plugins/bundled` or the `~/formide/plugins`
directories in order to be loaded. At the moment, hot-loading plugins using a UI is not supported.
