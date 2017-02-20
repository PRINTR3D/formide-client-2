define({ "api": [  {    "type": "get",    "url": "/api/auth/validate",    "title": "Auth:validate",    "group": "Auth",    "description": "<p>Validate JWT token</p>",    "version": "1.0.0",    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "GetApiAuthValidate"  },  {    "type": "post",    "url": "/api/auth/login",    "title": "Auth:login",    "group": "Auth",    "description": "<p>Login with username and password</p>",    "version": "1.0.0",    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "PostApiAuthLogin"  },  {    "type": "get",    "url": "/plugins/com.printr.gpio-control-mode/api/mode",    "title": "GPIO:mode",    "group": "GPIO",    "description": "<p>Get current GPIO control mode</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "GPIO",    "name": "GetPluginsComPrintrGpioControlModeApiMode"  },  {    "type": "post",    "url": "/plugins/com.printr.gpio-control-mode/api/enable",    "title": "GPIO:enable",    "group": "GPIO",    "description": "<p>Enable the GPIO control mode to receive USB plug events over WS</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "GPIO",    "name": "PostPluginsComPrintrGpioControlModeApiEnable"  },  {    "type": "post",    "url": "/plugins/com.printr.gpio-control-mode/api/mode",    "title": "GPIO:switch",    "group": "GPIO",    "description": "<p>Set the GPIO control mode to switch between integration and host</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "GPIO",    "name": "PostPluginsComPrintrGpioControlModeApiMode"  },  {    "type": "get",    "url": "/api/network/list",    "title": "Network:list",    "group": "Network",    "description": "<p>List nearby wireless networks to connect to</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "GetApiNetworkList"  },  {    "type": "get",    "url": "/api/network/status",    "title": "Network:status",    "group": "Network",    "description": "<p>Get the current network status</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "GetApiNetworkStatus"  },  {    "type": "post",    "url": "/api/network/connect",    "title": "Network:connect",    "group": "Network",    "description": "<p>Connect to a nearby wireless network</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "PostApiNetworkConnect"  },  {    "type": "GET",    "url": "/api/printer",    "title": "Printer:list",    "group": "Printer",    "version": "1.0.0",    "description": "<p>Get the status of all printers that are currently connected to the device.</p>",    "success": {      "examples": [        {          "title": "200 success",          "content": "[\n  {\n    \"port\": \"/dev/virt0\",\n    \"type\": \"VIRTUAL\",\n    \"status\": \"offline\",\n    \"progress\": 0\n  }\n]",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinter"  },  {    "type": "GET",    "url": "/api/printer/:port",    "title": "Printer:status",    "group": "Printer",    "version": "1.0.0",    "description": "<p>Get the status of the printer that's connected to the port given in the URI parameter</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 success",          "content": "{\n  \"port\": \"/dev/virt0\",\n  \"type\": \"VIRTUAL\",\n  \"status\": \"offline\",\n  \"progress\": 0\n}",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPort"  },  {    "type": "delete",    "url": "/api/storage/:filename",    "title": "Storage:delete",    "group": "Storage",    "description": "<p>Delete G-code file from storage</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "DeleteApiStorageFilename"  },  {    "type": "get",    "url": "/api/storage",    "title": "Storage:list",    "group": "Storage",    "description": "<p>List stored G-code files</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorage"  },  {    "type": "get",    "url": "/api/storage/:filename",    "title": "Storage:single",    "group": "Storage",    "description": "<p>Get info about a single stored G-code file</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorageFilename"  },  {    "type": "get",    "url": "/api/storage/:filename/download",    "title": "Storage:download",    "group": "Storage",    "description": "<p>Download a G-code file from storage</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorageFilenameDownload"  },  {    "type": "post",    "url": "/api/storage",    "title": "Storage:upload",    "group": "Storage",    "description": "<p>Upload new G-code file to storage</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "PostApiStorage"  },  {    "type": "GET",    "url": "/api/system/info",    "title": "System:info",    "group": "System",    "description": "<p>Get general system information like versions, OS and uptime</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/system.js",    "groupTitle": "System",    "name": "GetApiSystemInfo"  },  {    "type": "POST",    "url": "/api/system/loglevel",    "title": "System:loglevel",    "group": "System",    "version": "2.0.0",    "description": "<p>Change the log level so you can receive more or less logs via the socket log channels</p>",    "filename": "src/interfaces/http/routes/system.js",    "groupTitle": "System",    "name": "PostApiSystemLoglevel"  },  {    "type": "get",    "url": "/plugins/com.printr.virtual-printer/api/status",    "title": "VirtualPrinter:status",    "group": "VirtualPrinter",    "description": "<p>Set the status of virtual printer</p>",    "version": "2.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "allowedValues": [              "online",              "printing",              "paused",              "stopping",              "heating",              "offline"            ],            "optional": false,            "field": "status",            "description": "<p>Status to set the printer to</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.virtual-printer/index.js",    "groupTitle": "VirtualPrinter",    "name": "GetPluginsComPrintrVirtualPrinterApiStatus"  }] });
