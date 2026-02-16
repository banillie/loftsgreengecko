rsync -avz --chmod=D755,F644 --exclude 'deploy.sh' --exclude '.git' --exclude '.idea' --exclude '.gitignore' -e ssh ./ will@142.93.136.223:/var/www/loftsgreengecko/
