# Tradingbot


## Server init

Init env:
install docker & docker-compose
docker pull alpine/git
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git clone https://github.com/A-HSien/Tradingbot.git
cd Tradingbot
docker run -ti --rm -v ${HOME}:/root -v $(pwd):/git alpine/git pull
chmod +x init-letsencrypt.sh
sudo ./init-letsencrypt.sh


## Server update

only web:
docker image rm tradingbot_web
docker-compose up -d

all:
docker-compose down
docker image prune -a -f
sudo rm -rf data/certbot
git pull
sudo ./init-letsencrypt.sh


### Additional commands

Build and check web locally:
cd tradingbot_web
docker build -t tradingbot_web .
docker run -d -p 3000:3000 tradingbot_web
curl localhost:3000


Check db is running:
docker ps
docker exec mymongo mongo --eval "print(version())"

Create user:
docker stop mymongo
docker run --name mymongo -v $(pwd)/data/db:/data/db -d -p 27017:27017 --rm mongo
docker exec -it mymongo mongo admin
db.createUser({ 
    user:'admin',pwd:'password',
    roles:[
        {role:'userAdminAnyDatabase', db: 'admin'},
        "readWriteAnyDatabase"
    ]
});
db.auth('admin', 'password')

use tradingbot_db
db.createUser({
    user:'dbuser',pwd:'dbpassword',
    roles:[{role:'readWrite',db:'tradingbot_db'}]
});
docker stop mymongo
docker run --name mymongo -v $(pwd)/data/db:/data/db -d -p 27017:27017 --rm mongo --auth


db.auth('dbUser', 'password')
db.getCollectionNames()
db.<collection>.drop()