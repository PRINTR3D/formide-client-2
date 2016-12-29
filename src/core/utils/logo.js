'use strict'

/*
 * This code was created for Printr B.V. It is open source under the formide-client package.
 * Copyright (c) 2015, All rights reserved, http://printr.nl
 */

function logLogo (config) {
  console.log('                                        ')
  console.log('                   ?                    ')
  console.log('                 ????                   ')
  console.log('               7??????                  ')
  console.log('              ??  ?? ??                 ')
  console.log('            ++    +   ?+                ')
  console.log('          ++      +    I+               ')
  console.log('          +      ++     7+              ')
  console.log('         7+      +?      ++             ')
  console.log('         ++      +      ++ +            ')
  console.log('         +       +      +   +           ')
  console.log('        ++      ++   7+++    +          ')
  console.log('        +       +++++  ++     +         ')
  console.log('       ?+      +?+      +     ++        ')
  console.log('       +?    ++   +     ++    7+        ')
  console.log('       +    ++   ++++++  +     +        ')
  console.log('      ++  ++ +++++   + ++++    ++       ')
  console.log('      ++++       ++++    I++   ?+       ')
  console.log('     +=            =        ==  =       ')
  console.log('      ==           =         =  ==      ')
  console.log('       ==         ==         ====       ')
  console.log('        ==       ====        ==         ')
  console.log('         ==    ==   I==     ==          ')
  console.log('          =====        ==I7=7           ')
  console.log('           ================             ')
  console.log('                                        ')
  console.log(`Starting Formide client...`)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(`Version:     ${config.version}`)
  console.log(`Environment: ${config.env}`)
  console.log(`API port:    ${config.http.api}`)
  console.log(`UI port:     ${config.http.www}`)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  console.log(' ')
}

module.exports = logLogo
