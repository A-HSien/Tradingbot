# Tradingbot


## Server setup


init env:
install docker
docker pull alpine/git
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git clone https://github.com/A-HSien/Tradingbot.git


update source if needed:
cd Tradingbot
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git pull
cd tradingbot_web
docker build -t tradingbot_web .
docker run -d -p 3000:3000 tradingbot_web
curl localhost:3000


run db:
docker run --name mymongo -v $(pwd)/data:/data/db -d -p 27017:27017 --rm mongo


make sure it's running:
docker ps
docker exec mymongo mongo --eval "print(version())"


建立user
docker exec -it mymongo bash