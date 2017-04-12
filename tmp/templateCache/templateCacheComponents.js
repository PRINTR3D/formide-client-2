(function () { angular.module('templateCache.components', []).run(['$templateCache', function($templateCache) {'use strict';  'use strict';

  $templateCache.put('auth-login/componentView.html',
    "<article class=\"block content content--small\"><div class=localLogin><section class=\"logo logo--large\" ng-if=!authLogin.setup><svg version=1.1 baseprofile=full xmlns=http://www.w3.org/2000/svg viewbox=\"0 0 128 128\" rel=logo><lineargradient id=strokeGradient gradientunits=userSpaceOnUse x1=64 y1=127.8776 x2=64 y2=0.1224><stop offset=0 style=\"stop-color:#2192D2\"><stop offset=1 style=\"stop-color:#5FC6F3\"></lineargradient><path style=fill:none;stroke:#46b1e6;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;shape-rendering:geometric-precision d=\"\n" +
    "\t\t\t   M102.202,59.171c0,0-8.327-11.914-17.334-24.799C74.244,19.174,62.67,2.622,62.67,2.622L33.505,25.107L17.716,91.418l20.031,33.867\n" +
    "\t\t\t   l46.678,0.092c0,0,9.292-9.086,16.739-16.37c4.965-4.856,9.12-8.922,9.12-8.922L102.202,59.171z M62.67,2.622l22.198,31.75\n" +
    "\t\t\t   L77.732,54.84l-23.434,5.772L62.67,2.622z M60.823,74.021l11.906,3.725L63.038,90.75l-9.523-9.059L60.823,74.021z M53.514,81.691\n" +
    "\t\t\t   l-14.556-3.105l15.34-17.974l6.525,13.409L53.514,81.691z M60.823,74.021l-6.525-13.409l23.434-5.772l8.818,30.911l-13.821-8.004\n" +
    "\t\t\t   c-0.092-0.057,0.123,0.039,0,0L60.823,74.021z M33.505,25.107L62.67,2.622l-8.372,57.99l-15.34,17.974L17.716,91.418L33.505,25.107z\n" +
    "\t\t\t    M17.716,91.418l21.242-12.832l14.556,3.105l9.523,9.059l-1.86,18.547l-23.43,15.988L17.716,91.418z M37.747,125.285l23.43-15.988\n" +
    "\t\t\t   l23.248,16.08L37.747,125.285z M84.425,125.378l-23.248-16.08l1.86-18.547l9.691-13.004c0,0,7.225,4.184,13.821,8.004\n" +
    "\t\t\t   c5.524,3.199,10.61,6.146,10.61,6.146l4.005,17.11L84.425,125.378z M97.159,91.897L97.159,91.897l-10.61-6.146L77.732,54.84\n" +
    "\t\t\t   l7.136-20.469l17.334,24.799l8.082,40.922l-9.12,8.915L97.159,91.897z\"></svg><h1>Formide Local</h1></section><div ng-if=authLogin.setup class=figure-container><figure class=onboarding-figure><img class=main-image src=./public/assets/images/setup/setup_connect.png width=250 height=250 alt=Welcome></figure></div><section><hgroup class=\"u-textCenter u-margin-top-_5\"><h1>Device Login</h1></hgroup><form class=login-fields ng-submit=authLogin.submitLoginForm()><input ng-model=authLogin.user.username class=text-input placeholder=Username> <input type=password ng-model=authLogin.user.password class=text-input placeholder=Password> <input type=submit class=\"btn btn--primary\" value=\"Sign in\"> <span ng-if=authLogin.loading><i class=\"fa fa-2x fa-refresh fa-spin text-base-primary-color u-posAbsolute u-margin-left-1\"></i></span> <span ng-if=!authLogin.loading class=\"u-margin-left-1 text-base-alert-color\">{{ authLogin.errorMessage }}</span></form><section class=infoBox><i class=\"fa fa-info-circle\"></i><p ng-if=authLogin.setup>Log into your device to connect it to Formide. If it is for the first time you can use the following:</p><p ng-if=!authLogin.setup>Note that you are logging into your device locally. If it is for the first time you can use the following:</p><p>Username: <strong>admin@local</strong><br>Password:&nbsp; <strong>admin</strong></p><p>To use the full suite of features visit <a href=https://platform.formide.com><strong>Formide</strong></a></p></section></section></div></article>"
  );


  $templateCache.put('connect/componentView.html',
    "<article id=connect><h3>Connect your Device to Formide</h3><section class=block><div class=layout><div class=\"layout__item u-fit-sm xs-hide\"><div class=figure-container><figure class=onboarding-figure><img class=main-image src=./public/assets/images/setup/setup_connect.png width=250 height=250 alt=Welcome></figure></div></div><div class=\"layout__item u-fill\"><fieldset class=settings ng-switch=connect.connectSetupStep><section ng-switch-when=device-wifi><ul class=form-fields><li class=u-margin-bottom-1><h3>Select a network to connect to</h3><select class=text-input ng-options=\"ssid.ssid as ssid.ssid for ssid in connect.ssids\" ng-model=connect.wifi.ssid><option value=\"\" disabled selected style=\"display: none\">Select a SSID</option></select></li><li><input type=password class=text-input ng-model=connect.wifi.password placeholder=Password></li><li><a add-new ng-init=\"connect.toggleAdvanced = false\" ng-click=\"connect.toggleAdvanced = !connect.toggleAdvanced\"><small><i class=\"fa u-margin-right-_5\" ng-class=\"{true:'fa-minus',false:'fa-plus'}[connect.toggleAdvanced]\"></i>Advanced Settings</small></a></li><li ng-if=connect.toggleAdvanced><ul class=advanced-settings><li><input class=text-input placeholder=key_mgmt ng-model=connect.wifi.key_mgmt></li><li><input class=text-input placeholder=eap ng-model=connect.wifi.eap></li><li><input class=text-input placeholder=identity ng-model=connect.wifi.identity></li><li><input class=text-input placeholder=anonymous_identity ng-model=connect.wifi.anonymous_identity></li><li><input class=text-input placeholder=phase1 ng-model=connect.wifi.phase1></li><li><input class=text-input placeholder=phase2 ng-model=connect.wifi.phase2></li></ul></li><li><div class=\"layout layout--withoutGutter layout--alignMiddle u-margin-top-2\"><div class=\"layout__item u-fit\"><button class=\"btn btn--primary\" ng-click=connect.connectWifi() ng-disabled=connect.connecting>Connect to Wi-Fi <i ng-if=connect.connecting class=\"fa fa-refresh fa-spin\"></i></button></div><div class=\"layout__item u-fill u-margin-left-1\">This may take up to a minute</div><div ng-if=connect.wifiError class=layout__item><div class=\"text-base-alert-color u-margin-top-1\" ng-bind-html=connect.wifiError></div></div></div></li><li class=u-margin-top-3><a add-new ng-init=\"connect.toggleFAQ = false\" ng-click=\"connect.toggleFAQ = !connect.toggleFAQ\"><small><i class=\"fa u-margin-right-_5\" ng-class=\"{true:'fa-minus',false:'fa-plus'}[connect.toggleFAQ]\"></i>Frequently Asked Questions</small></a></li><li ng-if=connect.toggleFAQ><ul class=faqs><li><div class=faqTitle>What should I do if my network is not listed?</div><div class=faqBody>Make sure the router or access point is turned on, and that it is within range of the element. If it is, check that your network type is supported.</div></li><li><div class=faqTitle>What type of networks are supported?</div><div class=faqBody>The Wi-Fi network you select has to be a WPA-2 secured network (a common router security standard for homes and offices) or an open network. We also support enterprise networks that use the 802.11x protocol using a custom config.</div></li><li><div class=faqTitle>I get \"Failed to connect to ...\", what should I do?</div><div class=faqBody>This usually means you've entered a wrong password or connecting to the router took longer than expected. You can just try again.</div></li></ul></li></ul></section><section ng-switch-when=custom-device-wifi class=u-margin-top-3><h3>Custom Device</h3><p>Your device is not connected to Wi-Fi. Ensure that it is before trying to link your device to formide.</p></section><section ng-switch-when=network-no-internet class=u-margin-top-3><h3>No Internet</h3><p>The network your device is connected to does not have access to the Internet. Ensure that it has before trying to link your device to formide.</p></section><section ng-switch-when=connect-formide><h3>Connect to Formide</h3><p class=u-margin-top-2>Before clicking Connect to Formide, ensure that your computer is connected to the Internet.</p><p>If this is a custom device, such as a Raspberry Pi, it must first be whitelisted. You can request this via <a class=anchor__link href=\"mailto:hello@formide.com?subject=I would like to whitelist my device\">Email</a>.</p><div class=\"layout layout--withoutGutter layout--alignMiddle u-margin-top-2\"><button class=\"btn btn--primary\" ng-click=connect.connectToFormide() ng-disabled=connect.connecting><span ng-if=!connect.connectURL>Connect <i ng-if=connect.connecting class=\"fa fa-refresh fa-spin\"></i></span> <span ng-if=connect.connectURL>Go to Formide</span></button><div ng-if=connect.connectingError><div class=\"text-base-alert-color u-margin-top-1\" ng-bind-html=connect.connectingError></div></div></div></section><section ng-switch-default class=\"u-margin-top-3 u-textCenter\"><i class=\"fa fa-refresh fa-spin fa-3x text-base-primary-color\"></i></section></fieldset></div></div></section></article>"
  );


  $templateCache.put('control-print/componentView.html',
    "<article id=printer-controls><h3>Printer Controls</h3><p ng-if=\"controlPrint.printer.$active.status == 'printing' || controlPrint.printer.$active.status == 'paused'\">This printer is currently printing</p><p ng-if=\"controlPrint.printer.$active.status == 'heating'\">This printer is currently heating</p><div ng-if=\"controlPrint.printer.$active.status !== 'printing'  && controlPrint.printer.$active.status !== 'paused' && controlPrint.printer.$active.status !== 'heating'\"><h4>Axis</h4><section class=block ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline'}\"><printer-controls extruders=controlPrint.printer.$active.extruders disable-input=\"controlPrint.printer.$active.status == 'offline'\"></printer-controls></section></div><div ng-if=\"controlPrint.printer.$active.status == 'printing'  || controlPrint.printer.$active.status == 'paused' || controlPrint.printer.$active.status == 'heating'\" class=u-posRelative><h4>Tune</h4><section class=block ng-class=\"{'block--disabled': !controlPrint.printer.$active.speedMultiplier}\"><h5>Print Speed</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-speed size=45 speed=controlPrint.printSpeed min=1 max=500 class=icon></printer-controls-speed></label><section class=\"layout__item u-fill\"><printer-controls-slider min=1 max=500 gcode=controlPrint.tuneGcode.printSpeed value=controlPrint.printSpeed input-field=true pretty-min=1% pretty-max=500% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.speedMultiplier)></printer-controls-slider></section></div></fieldset><h5>Flow Rate</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-flow-rate size=45 speed=controlPrint.flowRate min=1 max=500 class=icon></printer-controls-flow-rate></label><section class=\"layout__item u-fill\"><printer-controls-slider min=1 max=500 gcode=controlPrint.tuneGcode.flowRate value=controlPrint.flowRate input-field=true pretty-min=1% pretty-max=500% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.flowRate)></printer-controls-slider></section></div></fieldset><h5>Fan Speed</h5><fieldset class=tune-container><div class=layout><label class=\"layout__item u-fit u-textCenter\"><printer-controls-fan size=45 speed=controlPrint.fanSpeed max=100 class=icon></printer-controls-fan></label><section class=\"layout__item u-fill\"><printer-controls-slider min=0 max=100 gcode=controlPrint.tuneGcode.fanSpeed value=controlPrint.fanSpeed input-field=true pretty-min=0% pretty-max=100% disable-input=!controlPrint.checkValue(controlPrint.printer.$active.fanSpeed)></printer-controls-slider></section></div></fieldset></section><div ng-if=!controlPrint.printer.$active.speedMultiplier class=updateOverlay><h4>To use this feature, please update your device</h4><a class=\"btn btn--secondary\" ng-click=\"controlPrint.navigate('manage/device/update')\">Update</a></div></div><h4 class=u-padding-top-1>Temperatures</h4><section class=block ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline'}\"><div class=layout><div class=\"layout__item u-1/3-sm\" ng-repeat=\"extruder in controlPrint.printer.$active.extruders\"><h5 class=\"u-margin-top-_5 u-margin-bottom-2\">Extruder {{$index + 1}}</h5><p class=u-margin-bottom-1>Current Temp: {{extruder.temp}} &deg;C</p><p class=\"temperature u-margin-bottom-_5\"><label for=\"\">Target Temp <input ng-change=controlPrint.runExtruderCommand($index) ng-model=controlPrint.targetTempExt[$index] ng-model-options=\"{debounce: 500}\" type=number class=text-input min=0 max={{controlPrint.maxExtTemp}} ng-disabled=\"controlPrint.printer.$active.status == 'offline'\"><span class=u-margin-left-_5>&deg;C</span></label></p></div><div class=\"layout__item u-1/3-sm\" ng-if=\"controlPrint.printer.$active.bed.temp !== 0\"><h5 class=\"u-margin-top-_5 u-margin-bottom-2\">Bed</h5><section><p class=u-margin-bottom-1>Current Temp: {{controlPrint.printer.$active.bed.temp}} &deg;C</p><p class=\"temperature u-margin-bottom-_5\"><label for=\"\">Target Temp <input ng-change=controlPrint.runBedCommand() ng-model=controlPrint.targetTempBed ng-model-options=\"{debounce: 500}\" type=number class=text-input min=0 valuemax={{controlPrint.maxBedTemp}} ng-disabled=\"controlPrint.printer.$active.status == 'offline'\"><span class=u-margin-left-_5>&deg;C</span></label></p></section></div></div></section><h4 class=u-padding-top-1>G-code Console</h4><section class=block ng-class=\"{'block--disabled': controlPrint.printer.$active.status == 'offline'}\"><div class=console><div class=header>Input a G-code command and press Enter</div><textarea id=console-textarea ng-list=&#10; ng-model=controlPrint.customCommands ng-disabled=\"controlPrint.printer.$active.status == 'offline'\" ng-trim=false on-enter=controlPrint.runConsoleCommands() rows=5></textarea></div></section></article>"
  );


  $templateCache.put('file-library/componentView.html',
    "<article id=file-library><header class=layout><div class=\"layout__item u-1/2\"><h3>Library</h3></div><div class=\"u-textRight layout__item u-1/2\"><button class=\"btn btn--tertiary\" ng-disabled=$root.fileUploading ngf-multiple=true ngf-select=fileLibrary.upload($files) ngf-pattern=\"'text/*'\">Upload G-code</button></div></header><section ng-if=\"fileLibrary.files.length > 0\" id=listView class=block><table class=\"table--formide table--formide--responsive\"><thead><tr><th>Name</th><th>Created</th><th>Size</th><th>Actions</th></tr></thead><tbody><tr ng-repeat=\"file in fileLibrary.files\" class=table__item><td data-th=Name class=name>{{file.filename | removeFiletype | removeDashes | title}}</td><td data-th=Created>{{file.updatedAt | timeAgo}}</td><td ng-if=\"file.filetype !== 'folder'\" data-th=Size>{{ file.filesize | smartbytes:1 }}</td><td ng-if=\"file.filetype === 'folder' && file.children != 1\" data-th=Size>{{ file.children }} items</td><td ng-if=\"file.filetype === 'folder' && file.children == 1\" data-th=Size>1 item</td><td class=\"actions table__item__controls\"><button class=\"btn btn--small btn--tertiary btn--slice\" ng-click=fileLibrary.print(file); title=Print ng-disabled=\"fileLibrary.printer.$active.status !== 'online'\">Print</button> <button class=\"btn btn--small btn--alert\" ng-click=fileLibrary.removeMultiple([file]) title=Details><i class=\"fa fa-trash-o\"></i></button></td></tr></tbody></table><div ng-if=!fileLibrary.files.$resolved class=\"u-textCenter u-margin-top-1 u-margin-bottom-1\"><i class=\"fa fa-refresh fa-spin fa-2x text-base-primary-color\"></i></div></section><section class=animate-show ng-show=\"fileLibrary.files.length == 0 && fileLibrary.files.$resolved\" id=uploadInvite><div class=\"layout layout--alignCenter u-margin-top-3\"><div class=\"icon layout__item u-fit\"><i class=\"fa fa-files-o\"></i></div><div class=\"layout__item u-fit\"><h2 class=xs-hide>Drag your G-codes here</h2><p class=xs-hide>Or add them by using the upload button</p><h2 class=\"sm-hide u-textCenter\">Upload G-codes</h2><p class=\"sm-hide u-textCenter\">Add files using the upload button</p></div></div></section></article>"
  );


  $templateCache.put('manage-device-update/componentView.html',
    "<header class=layout><div class=\"layout__item u-1/2\"><h3>Update Device</h3></div><div class=\"u-textRight layout__item u-1/2\"><a class=\"btn btn--tertiary\" ng-click=\"manage.navigate('/manage/device')\">Manage Device</a></div></header><button class=btn ng-click=manageDeviceUpdate.doUpdate() ng-disabled=\"!manageDeviceUpdate.deviceUpdateNeeded.needsUpdate || manageDeviceUpdate.updating\">Start Update Process</button> <span class=u-margin-left-1>{{ manageDeviceUpdate.deviceUpdateNeeded.message }}</span><section class=\"block u-margin-top-1\" ng-class=\"{'block--disabled': !manageDeviceUpdate.updating}\"><h5>Progress</h5><progress-bar ng-class=\"{'progress--undefined': manageDeviceUpdate.valuenow < 100}\" valuenow={{manageDeviceUpdate.valuenow}} valuemax=100></progress-bar><br><div ng-if=\"manageDeviceUpdate.updating && !manageDeviceUpdate.updated\"><i class=\"fa fa-refresh fa-spin\"></i> Updating, the device will come back online once updated.</div><div ng-if=\"manageDeviceUpdate.updating && manageDeviceUpdate.updated\"><i class=\"fa fa-check-circle\"></i> {{ manageDeviceUpdate.deviceUpdateStatus.message }}!</div></section>"
  );


  $templateCache.put('manage-device/componentView.html',
    "<article id=manage-device><header class=layout><div class=\"layout__item u-1/2\"><h3>Manage Device</h3></div><div class=\"u-textRight layout__item u-1/2\"><a class=\"btn btn--tertiary\" ng-click=\"manage.navigate('/manage/device/update')\">Update Device</a></div></header><div class=layout><div class=\"layout__item u-1/2-sm pad\"><h4>Network</h4><section class=block><table class=\"table--formide network-table\"><tbody><tr class=table__item><td>Connected to</td><td>{{manageDevice.network.network || '-'}}</td></tr><tr class=table__item><td>Internal IP Address</td><td>{{manageDevice.network.ip || '-'}}</td></tr><tr class=table__item><td>Public IP Address</td><td>{{manageDevice.network.publicIp || '-'}}</td></tr><tr class=table__item><td>Mac Address</td><td>{{manageDevice.network.mac || '-'}}</td></tr><tr class=table__item><td>Hotspot Mode</td><td><checkbox ng-if=\"manageDevice.deviceType == 'the_element'\" checkbox-model=manageDevice.network.isHotspot checkbox-callback=manageDevice.setHotspot></checkbox><span ng-if=\"manageDevice.deviceType !== 'the_element'\">-</span></td></tr></tbody></table></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Storage</h4><section class=block><div class=\"container layout layout--withoutGutter layout--alignMiddle layout--alignCenter u-margin-top-1 u-margin-bottom-1\"><div class=\"storageChart layout__item u-fill\"><canvas id=doughnut height=230 width=230 class=\"chart chart-doughnut\" chart-data=manageDevice.chart.data chart-labels=manageDevice.chart.labels chart-dataset-override=manageDevice.chart.datasetOverride chart-options=manageDevice.chart.options></canvas><div class=label><h3>{{manageDevice.storage.percentageUsedRnd}}%<br><small>used</small></h3></div><div class=info><h3>of {{manageDevice.diskspace.total | smartbytes:1}}</h3></div></div></div></section></div><div class=\"layout__item u-1/2-sm pad connect\"><h4>Connect</h4><section class=block><form role=form><fieldset><ul class=form-fields><li><label class=u-margin-top-1 for=\"\">SSID</label><select class=text-input ng-options=\"ssid.ssid as ssid.ssid for ssid in manageDevice.ssids\" ng-model=manageDevice.wifi.ssid><option value=\"\" disabled selected style=\"display: none\">Select a SSID</option></select></li><li><label for=\"\">Password</label><input type=password class=text-input ng-model=manageDevice.wifi.password placeholder=Password></li></ul></fieldset><div class=\"layout u-margin-bottom-1\"><div class=\"layout__item u-1/2\"><button class=\"btn btn--primary\" ng-click=manageDevice.connectWifi() ng-disabled=manageDevice.connecting>Connect to Wi-Fi <i ng-if=manageDevice.connecting class=\"fa fa-refresh fa-spin\"></i></button></div><div class=\"u-textRight layout__item u-1/2\"><button class=\"btn btn--secondary\" ng-click=manageDevice.resetWifi()>Reset Wi-Fi</button></div></div></form></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Users</h4><section class=block><table class=\"table--formide table--formide--responsive\"><thead><tr><th>Username</th><th></th></tr></thead><tbody><tr ng-repeat=\"user in manageDevice.users\" class=table__item><td data-th=Username>{{user.username}}</td><td class=\"table__item__controls u-textRight\"><a class=\"btn btn--small btn--tertiary\" ng-click=manageDevice.updateModal(user)><i class=\"fa fa-pencil\"></i></a> <a class=\"btn btn--small btn--alert\" ng-click=manageDevice.deleteUser(user)><i class=\"fa fa-trash-o\"></i></a></td></tr></tbody></table><button class=\"btn btn--tertiary\" ng-click=manageDevice.createModal()>Add User</button></section></div></div></article><script type=text/ng-template id=settingsModal><form role=\"form\">\n" +
    "\t\t <fieldset>\n" +
    "            <ul class=\"form-fields\">\n" +
    "                <li>\n" +
    "                \t<label for=\"\">Username</label>\n" +
    "                    <input type=\"text\" class=\"text-input\" ng-model=\"modal.user.username\" placeholder=\"Username\">\n" +
    "                </li>\n" +
    "\n" +
    "                <li>\n" +
    "                \t<label for=\"\">Password</label>\n" +
    "                    <input type=\"password\" class=\"text-input\" ng-model=\"modal.user.password\" placeholder=\"Password\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </fieldset>\n" +
    "\n" +
    "        <hr class=\"rule\">\n" +
    "\n" +
    "        <a class=\"btn btn--primary\" ng-click=\"modal.submitForm(modal.user); closeThisDialog()\">Save</a>\n" +
    "\t\t<a class=\"btn btn--secondary\" ng-click=\"closeThisDialog()\">Cancel</a>\n" +
    "\t</form></script>"
  );


  $templateCache.put('manage/componentView.html',
    "<article id=manage><div ng-viewport=subView></div></article>"
  );


  $templateCache.put('monitor-print/componentView.html',
    "<article id=monitor-print><h3>Monitor Print</h3><section ng-if=!monitorPrint.printer.$active.printJob class=u-margin-bottom-1></section><section id=currently-printing ng-if=monitorPrint.printer.$active.printJob class=u-margin-bottom-1><div print-job-item class=\"block u-margin-bottom-1\"></div><div class=\"tune-values xs-hide\"><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Print Speed</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-speed size=45 speed=monitorPrint.printSpeed min=1 max=500 class=icon></printer-controls-speed></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.printSpeed}}%</h4></div></div></div></div><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Flow Rate</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-flow-rate size=45 speed=monitorPrint.flowRate min=1 max=500 class=icon></printer-controls-flow-rate></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.flowRate}}%</h4></div></div></div></div><div class=\"layout__item u-1/3\"><div class=tune-block><h5 class=tune-header>Fan Speed</h5><div class=\"layout layout--alignMiddle\"><div class=\"layout__item u-1/2 u-textRight\"><printer-controls-fan size=45 speed=monitorPrint.fanSpeed max=100 class=icon></printer-controls-fan></div><div class=\"layout__item u-1/2 u-textLeft\"><h4>{{monitorPrint.fanSpeed}}%</h4></div></div></div></div></div></div></section><div ng-show=\"(monitorPrint.queue.resource | filter: {status: 'printing'}).length < 1\" ng-switch=monitorPrint.printer.$active.deviceStatus class=u-margin-bottom-1><h3>Monitor Print</h3><div ng-switch-when=online><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter\" ng-if=\"monitorPrint.printer.$active.status !== 'offline'\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>No items printing</h5><a class=fade ng-click=\"monitorPrint.navigate('print/queue')\" add-new>View queue</a></article><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\" ng-if=\"monitorPrint.printer.$active.status == 'offline'\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>This printer is currently offline</h5></article></div><div ng-switch-when=offline><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>This printer is offline</h5></article></div><div ng-switch-default><article id=loading-queue-state class=\"fade loading-queue-state u-textCenter u-margin-bottom-2\"><h4><i class=\"fa fa-2x fa-file-o\"></i></h4><h5 class=loader>No printer connected</h5></article></div></div><div class=layout><div class=\"layout__item u-1/2-sm pad\"><h4>Webcam</h4><section class=\"block block--panel\"><dashboard-webcam></dashboard-webcam></section></div><div class=\"layout__item u-1/2-sm pad\"><h4>Temperatures</h4><section class=\"block block--panel\"><dashboard-temperatures></dashboard-temperatures></section></div></div></article>"
  );
}]); })();