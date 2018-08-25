#Prerequisites 
#npm install -g gulp-cli

#create build dirs
mkdir build
mkdir build/assets
mkdir -p build/assets/src
mv -f public/js build/assets/src
mv -f public/css build/assets/src
mv -f public/images build/assets/src

gulp run

#replace original files
cp -r build/assets/js public
cp -r build/assets/css public
cp -r build/assets/images public

export NODE_ENV=export


#OSX
dir=$(pwd)
t="\"Terminal\""
cm="\"cd $dir;export NODE_ENV=export;npm start;\""
osascript -e "tell application $t to do script $cm"

#Linux
#export NODE_ENV=export
#gnome-terminal -e "npm start"

#export
sleep 4
mkdir build/html
mkdir build/html/privacy
mkdir build/html/terms
mkdir build/html/contact

mkdir -p build/html/lang/es
mkdir -p build/html/lang/es/privacy
mkdir -p build/html/lang/es/terms
mkdir -p build/html/lang/es/contact

curl http://localhost:5000/ -o build/html/index.html
curl http://localhost:5000/privacy/ -o build/html/privacy/index.html
curl http://localhost:5000/terms/ -o build/html/terms/index.html
curl http://localhost:5000/contact/ -o build/html/contact/index.html

curl http://localhost:5000/lang/es/ -o build/html/lang/es/index.html 
curl http://localhost:5000/lang/es/privacy/ -o build/html/lang/es/privacy/index.html 
curl http://localhost:5000/lang/es/terms/ -o build/html/lang/es/terms/index.html 
curl http://localhost:5000/lang/es/contact/ -o build/html/lang/es/contact/index.html 

export NODE_ENV=development

#restore files
rm -r public/js
rm -r public/css
rm -r public/images
mv -f build/assets/src/js public
mv -f build/assets/src/css public
mv -f build/assets/src/images public
rm -r build/assets/src