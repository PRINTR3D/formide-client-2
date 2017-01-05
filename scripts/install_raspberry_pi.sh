# @Author: chris
# @Date:   2017-01-05T12:42:15+01:00
# @Filename: install_raspberry_pi.sh
# @Last modified by:   chris
# @Last modified time: 2017-01-05T14:52:02+01:00
# @Copyright: Copyright (c) 2016, All rights reserved, http://printr.nl

#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

NODE_VERSION="v4.7.0"

# STEP 1: INSTALL NVM
echo "Installing nvm..."
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# STEP 2: CHECK IF NVM IS USING CORRECTION VERSION
source ~/.profile
source ~/.nvm/nvm.sh
echo "Installing needed Node.js version ($NODE_VERSION)..."
nvm install ${NODE_VERSION}
nvm use ${NODE_VERSION}
npm config delete prefix

# STEP 3: INSTALL NODE-PRE-GYP TO COMPILE NATIVE MODULES
npm install -g node-pre-gyp

# STEP 4: INSTALL FORMIDE CLIENT AS GLOBAL NPM PACKAGE
npm install -g formide-client

} # this ensures the entire script is downloaded #
