docker run -itd --name nodeapp -v "$PWD/src":/usr/src/app -w /usr/src/app -p 3000:3000 node:latest node app.js

docker run -itd --name redis --net test_nw -p 6379:6379 redis


test_nw

docker run -itd --name nodeapp -v "$PWD/src":/usr/src/app -w /usr/src/app -p 3000:3000 --net test_nw node:latest node app.js
