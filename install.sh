if ! node -v
then
    echo "Didn't find Node.js installed. Running install script...";
    dnf install nodejs;
    echo "Installed Node.js.";
fi
echo "Running project install script...";
npm install;