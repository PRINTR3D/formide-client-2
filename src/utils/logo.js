'use strict';

/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2015, All rights reserved, http://printr.nl
 */

const version = require('../../package.json').version;
const Globals = require('../core/globals');

Globals.log("                                        ");
Globals.log("                   ?                    ");
Globals.log("                 ????                   ");
Globals.log("               7??????                  ");
Globals.log("              ??  ?? ??                 ");
Globals.log("            ++    +   ?+                ");
Globals.log("          ++      +    I+               ");
Globals.log("          +      ++     7+              ");
Globals.log("         7+      +?      ++             ");
Globals.log("         ++      +      ++ +            ");
Globals.log("         +       +      +   +           ");
Globals.log("        ++      ++   7+++    +          ");
Globals.log("        +       +++++  ++     +         ");
Globals.log("       ?+      +?+      +     ++        ");
Globals.log("       +?    ++   +     ++    7+        ");
Globals.log("       +    ++   ++++++  +     +        ");
Globals.log("      ++  ++ +++++   + ++++    ++       ");
Globals.log("      ++++       ++++    I++   ?+       ");
Globals.log("     +=            =        ==  =       ");
Globals.log("      ==           =         =  ==      ");
Globals.log("       ==         ==         ====       ");
Globals.log("        ==       ====        ==         ");
Globals.log("         ==    ==   I==     ==          ");
Globals.log("          =====        ==I7=7           ");
Globals.log("           ================             ");
Globals.log("                                        ");
Globals.log(`Starting Formide client...`);
Globals.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
Globals.log(`Version:     ${version}`);
Globals.log(`Environment: ${process.env.NODE_ENV}`);
Globals.log(`API port:    ${Globals.config.http.api}`);
Globals.log(`UI port:     ${Globals.config.http.ui}`);
Globals.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
Globals.log(" ");