# Tradingbot


## Server setup


Init env:
install docker & docker-compose
docker pull alpine/git
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git clone https://github.com/A-HSien/Tradingbot.git
cd Tradingbot
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git pull
docker-compose up -d


### Additional commands

Build and check web locally:
cd tradingbot_web
docker build -t tradingbot_web .
docker run -d -p 3000:3000 tradingbot_web
curl localhost:3000

Delete all images:
docker image prune -a -f

Run db:
docker run --name mymongo -v $(pwd)/data:/data/db -d -p 27017:27017 --rm mongo

Check db is running:
docker ps
docker exec mymongo mongo --eval "print(version())"

Create user:
docker exec -it mymongo bash