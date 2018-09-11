docker run --rm --name some-mysql -v "$PWD/data":/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret -d -p 3306:3306 mysql:5.7


