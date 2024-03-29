# Tradingbot


## Server init

Init env:
install docker & docker-compose
sudo git clone https://github.com/A-HSien/Tradingbot.git
cd Tradingbot
chmod +x init-letsencrypt.sh
sudo ./init-letsencrypt.sh


## Server update

only web:
sudo git pull
docker-compose down
docker image rm tradingbot_web
docker-compose up -d

all:
docker-compose down
docker image prune -a -f
sudo rm -rf data/certbot
git pull
sudo ./init-letsencrypt.sh


### Additional commands

#### Build and check web locally:

cd tradingbot_web
docker build -t tradingbot_web .
docker run -d -p 3000:3000 tradingbot_web
curl localhost:3000


#### for local db:

docker ps
docker exec mymongo mongo --eval "print(version())"


Create user:

docker stop mymongo
docker run --name mymongo -v $(pwd)/data/db:/data/db -d -p 27017:27017 --rm mongo
docker exec -it mymongo mongo admin
db.createUser({ 
    user:'adminuser',pwd:'adminpassword',
    roles:[
        {role:'userAdminAnyDatabase', db: 'admin'},
        "readWriteAnyDatabase"
    ]
});
db.auth('adminuser', 'adminpassword')

use tradingbot_db
db.createUser({
    user:'dbuser',pwd:'dbpassword',
    roles:[{role:'readWrite',db:'tradingbot_db'}]
});
db.auth('dbuser', 'dbpassword')

exit
docker stop mymongo
docker run --name mymongo -v $(pwd)/data/db:/data/db -d -p 27017:27017 --rm mongo --auth


#### mongo commands:

db.getCollectionNames()
db.<collection>.drop()


#### check live server:

docker container logs tradingbot_web_1
docker container logs tradingbot_web_1 >& myFile.log
docker exec -it tradingbot_db_1 mongo admin
db.auth('adminuser', 'adminpassword')
use tradingbot_db
db.getCollectionNames()