SERVER="primefacility@212.71.252.140"
REMOTE_DIR="/var/www/212.71.252.140/"

echo "switching to branch main"
git checkout main

echo "Building app..."
npm run build 

echo "Deploying files to server......"
scp -r build/* "$SERVER:$REMOTE_DIR"

echo "Done!"
