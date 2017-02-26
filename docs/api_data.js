define({ "api": [  {    "type": "delete",    "url": "/api/auth/users/:id",    "title": "Auth:users(delete)",    "group": "Auth",    "description": "<p>Delete a user</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": ""          }        ]      }    },    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "DeleteApiAuthUsersId",    "sampleRequest": [      {        "url": "http://localhost:1337/api/auth/users/:id"      }    ]  },  {    "type": "get",    "url": "/api/auth/validate",    "title": "Auth:validate",    "group": "Auth",    "description": "<p>Validate JWT token</p>",    "version": "1.0.0",    "permission": [      {        "name": "user",        "title": "User auth",        "description": "<p>Only authorized users can access this endpoint.</p>"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "valid",            "defaultValue": "true",            "description": "<p>Indicates successful validation</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Details for the validated user</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.id",            "description": "<p>ID of the user</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.username",            "description": "<p>Username of the user</p>"          }        ]      },      "examples": [        {          "title": "Success:",          "content": "{\n  \"valid\": true,\n  \"user\": {\n    \"id\": \"d30db8e2-caf6-49d4-b991-f5f6a7cfe3a7\",\n    \"username\": \"admin@local\"\n  }\n}",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "GetApiAuthValidate",    "sampleRequest": [      {        "url": "http://localhost:1337/api/auth/validate"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>No Bearer token was found in the request header or an invalid token was passed.</p>"          }        ]      },      "examples": [        {          "title": "Unauthorized:",          "content": "{\n  \"statusCode\": \"401\",\n  \"statusName\": \"Unauthorized\",\n  \"message\": \"No Bearer token found\"\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/api/auth/login",    "title": "Auth:login",    "group": "Auth",    "description": "<p>Login with username and password</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "defaultValue": "true",            "description": "<p>Indicates successful login</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>JWT token to call protected endpoints with</p>"          }        ]      },      "examples": [        {          "title": "Success:",          "content": "{\n  \"success\": true,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzMGRiOGUyLWNhZjYtNDlkNC1iOTkxLWY1ZjZhN2NmZTNhNyIsInVzZXJuYW1lIjoiYWRtaW5AbG9jYWwiLCJleHAiOjE0OTA4MjMxNTcsInN1YiI6ImxvZ2luIn0.BFNInvsgQ2DnvfOVmu8xnwnPA_K5JJnfw8_LbJN5cns\"\n}",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "PostApiAuthLogin",    "sampleRequest": [      {        "url": "http://localhost:1337/api/auth/login"      }    ]  },  {    "type": "post",    "url": "/api/auth/users",    "title": "Auth:users(create)",    "group": "Auth",    "description": "<p>Create a new user</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "PostApiAuthUsers",    "sampleRequest": [      {        "url": "http://localhost:1337/api/auth/users"      }    ]  },  {    "type": "put",    "url": "/api/auth/users/:id",    "title": "Auth:users(update)",    "group": "Auth",    "description": "<p>Update a user</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "filename": "src/interfaces/http/routes/auth.js",    "groupTitle": "Auth",    "name": "PutApiAuthUsersId",    "sampleRequest": [      {        "url": "http://localhost:1337/api/auth/users/:id"      }    ]  },  {    "type": "get",    "url": "/api/network/list",    "title": "Network:list",    "group": "Network",    "description": "<p>List nearby wireless networks to connect to</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "GetApiNetworkList",    "sampleRequest": [      {        "url": "http://localhost:1337/api/network/list"      }    ]  },  {    "type": "get",    "url": "/api/network/status",    "title": "Network:status",    "group": "Network",    "description": "<p>Get the current network status</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "GetApiNetworkStatus",    "sampleRequest": [      {        "url": "http://localhost:1337/api/network/status"      }    ]  },  {    "type": "post",    "url": "/api/network/connect",    "title": "Network:connect",    "group": "Network",    "description": "<p>Connect to a nearby wireless network</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "ssid",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "PostApiNetworkConnect",    "sampleRequest": [      {        "url": "http://localhost:1337/api/network/connect"      }    ]  },  {    "type": "post",    "url": "/api/network/hotspot",    "title": "Network:hotspot",    "group": "Network",    "description": "<p>Enable or disable the Wi-Fi hotspot mode (The Element)</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "enabled",            "description": "<p>The action to undertake, will be enable on true and disable on false</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "PostApiNetworkHotspot",    "sampleRequest": [      {        "url": "http://localhost:1337/api/network/hotspot"      }    ]  },  {    "type": "post",    "url": "/api/network/hotspot",    "title": "Network:reset",    "group": "Network",    "description": "<p>Reset the Wi-Fi network connection</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/network.js",    "groupTitle": "Network",    "name": "PostApiNetworkHotspot",    "sampleRequest": [      {        "url": "http://localhost:1337/api/network/hotspot"      }    ]  },  {    "type": "get",    "url": "/plugins/com.printr.gpio-control-mode/api/mode",    "title": "GPIO:mode",    "group": "Plugin_GPIO",    "description": "<p>Get current GPIO control mode</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "Plugin_GPIO",    "name": "GetPluginsComPrintrGpioControlModeApiMode",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.gpio-control-mode/api/mode"      }    ]  },  {    "type": "post",    "url": "/plugins/com.printr.gpio-control-mode/api/enable",    "title": "GPIO:enable",    "group": "Plugin_GPIO",    "description": "<p>Enable the GPIO control mode to receive USB plug events over WS</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "Plugin_GPIO",    "name": "PostPluginsComPrintrGpioControlModeApiEnable",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.gpio-control-mode/api/enable"      }    ]  },  {    "type": "post",    "url": "/plugins/com.printr.gpio-control-mode/api/mode",    "title": "GPIO:switch",    "group": "Plugin_GPIO",    "description": "<p>Set the GPIO control mode to switch between integration and host</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.gpio-control-mode/api.js",    "groupTitle": "Plugin_GPIO",    "name": "PostPluginsComPrintrGpioControlModeApiMode",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.gpio-control-mode/api/mode"      }    ]  },  {    "type": "get",    "url": "/plugins/com.printr.usb-drive/api/drives",    "title": "USB:drives",    "group": "Plugin_USB",    "description": "<p>List attached USB drives</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.usb-drive/api.js",    "groupTitle": "Plugin_USB",    "name": "GetPluginsComPrintrUsbDriveApiDrives",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.usb-drive/api/drives"      }    ]  },  {    "type": "get",    "url": "/plugins/com.printr.usb-drive/api/drives/:drive/read",    "title": "USB:read",    "group": "Plugin_USB",    "description": "<p>Read files on the USB drive in a path relative to the drive's root</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "path",            "description": "<p>Relative path for which to list files</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.usb-drive/api.js",    "groupTitle": "Plugin_USB",    "name": "GetPluginsComPrintrUsbDriveApiDrivesDriveRead",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.usb-drive/api/drives/:drive/read"      }    ]  },  {    "type": "post",    "url": "/plugins/com.printr.usb-drive/api/drives/:drive/mount",    "title": "USB:mount",    "group": "Plugin_USB",    "description": "<p>Mount a USB drive to read it</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.usb-drive/api.js",    "groupTitle": "Plugin_USB",    "name": "PostPluginsComPrintrUsbDriveApiDrivesDriveMount",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.usb-drive/api/drives/:drive/mount"      }    ]  },  {    "type": "post",    "url": "/plugins/com.printr.usb-drive/api/drives/:drive/unmount",    "title": "USB:unmount",    "group": "Plugin_USB",    "description": "<p>Unmount a USB drive after using it</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.usb-drive/api.js",    "groupTitle": "Plugin_USB",    "name": "PostPluginsComPrintrUsbDriveApiDrivesDriveUnmount",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.usb-drive/api/drives/:drive/unmount"      }    ]  },  {    "type": "post",    "url": "/plugins/com.printr.usb-drive/drives/:drive/copy",    "title": "USB:copy",    "group": "Plugin_USB",    "description": "<p>Copy a file from USB drive to local storage</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "path",            "description": "<p>Relative path for which file to copy to local storage</p>"          }        ]      }    },    "filename": "src/plugins/bundled/com.printr.usb-drive/api.js",    "groupTitle": "Plugin_USB",    "name": "PostPluginsComPrintrUsbDriveDrivesDriveCopy",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.usb-drive/drives/:drive/copy"      }    ]  },  {    "type": "get",    "url": "/plugins/com.printr.log-reader/api/logs",    "title": "Logs:download",    "group": "Plugin_logs",    "description": "<p>Download the daemon.log file from The Element</p>",    "version": "2.0.0",    "filename": "src/plugins/bundled/com.printr.log-reader/api.js",    "groupTitle": "Plugin_logs",    "name": "GetPluginsComPrintrLogReaderApiLogs",    "sampleRequest": [      {        "url": "http://localhost:1337/plugins/com.printr.log-reader/api/logs"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NotFound",            "description": "<p>The requested path or resource does not exist.</p>"          }        ]      },      "examples": [        {          "title": "NotFound:",          "content": "{\n  \"statusCode\": \"404\",\n  \"statusName\": \"NotFound\",\n  \"message\": \"Could not find resource\"\n}",          "type": "json"        }      ]    }  },  {    "type": "GET",    "url": "/api/printer",    "title": "Printer:list",    "group": "Printer",    "description": "<p>Get the status of all printers that are currently connected to the device.</p>",    "version": "1.0.0",    "success": {      "examples": [        {          "title": "200 success",          "content": "[\n  {\n    \"port\": \"/dev/virt0\",\n    \"type\": \"VIRTUAL\",\n    \"status\": \"offline\",\n    \"progress\": 0\n  }\n]",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinter",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port",    "title": "Printer:status",    "group": "Printer",    "description": "<p>Get the status of the printer that's connected to the port given in the URI parameter</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 success",          "content": "{\n  \"port\": \"/dev/virt0\",\n  \"type\": \"VIRTUAL\",\n  \"status\": \"offline\",\n  \"progress\": 0\n}",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPort",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/commands",    "title": "Printer:commands",    "group": "Printer",    "description": "<p>Get a list of available commands for the printer on the selected port</p>",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortCommands",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/commands"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/commands/:command",    "title": "Printer:commands(run)",    "group": "Printer",    "description": "<p>Run a printer command</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "command",            "description": "<p>The command to run.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 success",          "content": "'OK'",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortCommandsCommand",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/commands/:command"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/commands/:command/mock",    "title": "Printer:commands(mock)",    "group": "Printer",    "description": "<p>Mock a printer command to check the resulting G-code</p>",    "version": "2.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "command",            "description": "<p>The command to mock.</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortCommandsCommandMock",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/commands/:command/mock"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/gcode",    "title": "Printer:gcode",    "group": "Printer",    "description": "<p>Send a G-code command to the printer</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "command",            "description": "<p>G-code to send</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 success",          "content": "'OK'",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortGcode",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/gcode"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/pause",    "title": "Printer:pause",    "group": "Printer",    "description": "<p>Pause the printer</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortPause",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/pause"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/print",    "title": "Printer:print",    "group": "Printer",    "description": "<p>Start a print by file path</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "file",            "description": "<p>Path to the file to print (absolute)</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortPrint",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/print"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/resume",    "title": "Printer:resume",    "group": "Printer",    "description": "<p>Resume the printer</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortResume",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/resume"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/stop",    "title": "Printer:stop",    "group": "Printer",    "description": "<p>Stop the printer</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortStop",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/stop"      }    ]  },  {    "type": "get",    "url": "/api/printer/:port/tune",    "title": "Printer:tune",    "group": "Printer",    "description": "<p>Send a tune G-code command to the printer while it's printing</p>",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "port",            "description": "<p>Select one of the ports where a printer is connected to. %2F should be used to encode forward slashes.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "command",            "description": "<p>Tune G-code to send</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "200 success",          "content": "'OK'",          "type": "json"        }      ]    },    "filename": "src/interfaces/http/routes/printer.js",    "groupTitle": "Printer",    "name": "GetApiPrinterPortTune",    "sampleRequest": [      {        "url": "http://localhost:1337/api/printer/:port/tune"      }    ]  },  {    "type": "delete",    "url": "/api/storage/:filename",    "title": "Storage:delete",    "group": "Storage",    "description": "<p>Delete G-code file from storage</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "DeleteApiStorageFilename",    "sampleRequest": [      {        "url": "http://localhost:1337/api/storage/:filename"      }    ]  },  {    "type": "get",    "url": "/api/storage",    "title": "Storage:list",    "group": "Storage",    "description": "<p>List stored G-code files</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorage",    "sampleRequest": [      {        "url": "http://localhost:1337/api/storage"      }    ]  },  {    "type": "get",    "url": "/api/storage/:filename",    "title": "Storage:single",    "group": "Storage",    "description": "<p>Get info about a single stored G-code file</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorageFilename",    "sampleRequest": [      {        "url": "http://localhost:1337/api/storage/:filename"      }    ]  },  {    "type": "get",    "url": "/api/storage/:filename/download",    "title": "Storage:download",    "group": "Storage",    "description": "<p>Download a G-code file from storage</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "GetApiStorageFilenameDownload",    "sampleRequest": [      {        "url": "http://localhost:1337/api/storage/:filename/download"      }    ]  },  {    "type": "post",    "url": "/api/storage",    "title": "Storage:upload",    "group": "Storage",    "description": "<p>Upload new G-code file to storage</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/storage.js",    "groupTitle": "Storage",    "name": "PostApiStorage",    "sampleRequest": [      {        "url": "http://localhost:1337/api/storage"      }    ]  },  {    "type": "get",    "url": "/api/system/cloud/code",    "title": "System:cloud(code)",    "group": "System",    "description": "<p>Get a cloud connection code to use in the redirect to Formide</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/system.js",    "groupTitle": "System",    "name": "GetApiSystemCloudCode",    "sampleRequest": [      {        "url": "http://localhost:1337/api/system/cloud/code"      }    ]  },  {    "type": "GET",    "url": "/api/system/info",    "title": "System:info",    "group": "System",    "description": "<p>Get general system information like versions, OS and uptime</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/system.js",    "groupTitle": "System",    "name": "GetApiSystemInfo",    "sampleRequest": [      {        "url": "http://localhost:1337/api/system/info"      }    ]  },  {    "type": "POST",    "url": "/api/system/logs",    "title": "System:logs(level)",    "group": "System",    "version": "2.0.0",    "description": "<p>Change the log level so you can receive more or less logs via the socket log channels</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "level",            "description": "<p>Level to set the logging to</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/system.js",    "groupTitle": "System",    "name": "PostApiSystemLogs",    "sampleRequest": [      {        "url": "http://localhost:1337/api/system/logs"      }    ]  },  {    "type": "get",    "url": "/api/update/check",    "title": "Update:check",    "group": "Update",    "description": "<p>Check if an update is available for this system</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/update.js",    "groupTitle": "Update",    "name": "GetApiUpdateCheck",    "sampleRequest": [      {        "url": "http://localhost:1337/api/update/check"      }    ]  },  {    "type": "get",    "url": "/api/update/current",    "title": "Update:current",    "group": "Update",    "description": "<p>Get current version information</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/update.js",    "groupTitle": "Update",    "name": "GetApiUpdateCurrent",    "sampleRequest": [      {        "url": "http://localhost:1337/api/update/current"      }    ]  },  {    "type": "get",    "url": "/api/update/status",    "title": "Update:status",    "group": "Update",    "description": "<p>Get status of last executed OTA update</p>",    "version": "2.0.0",    "filename": "src/interfaces/http/routes/update.js",    "groupTitle": "Update",    "name": "GetApiUpdateStatus",    "sampleRequest": [      {        "url": "http://localhost:1337/api/update/status"      }    ]  },  {    "type": "post",    "url": "/api/update/do",    "title": "Update:do",    "group": "Update",    "description": "<p>Execute the update that was found in /check</p>",    "version": "2.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authentication",            "description": "<p>Valid Bearer JWT token</p>"          }        ]      }    },    "filename": "src/interfaces/http/routes/update.js",    "groupTitle": "Update",    "name": "PostApiUpdateDo",    "sampleRequest": [      {        "url": "http://localhost:1337/api/update/do"      }    ]  }] });
