#!/bin/bash

sudo chown -R $USER:$USER /var/www/matrix-code-clock
git fetch origin
git pull origin main --rebase
npm install
npm run build
sudo chown -R www-data:www-data /var/www/matrix-code-clock
sudo systemctl reload nginx