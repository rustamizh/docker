# Шпаргалка по командам Docker

## docker build -t \<image-name> .
создать образ с именем \<image-name>, используя Dockerfile
***

## docker images
просмотреть список доступных образов
***

## docker run --name \<custom-name> -d --rm -p 8080:8080 \<image-name>
запустить контейнер на основе образа \<image-name> с кастомным именем \<custom-name>  
-d - запустить в фоне  
--rm - удалить конейнер после завершения работы   
-p inner-port-name:outer-port-name - прокинуть данные со внутреннего порта на внешний порт   
-e TZ=Europe/Samara - задание переменных окружения   
-v host-folder:docker-folder - указать папку в качестве источника внешних данных, host-folder - абсолютный путь, начиная с диска в Windows, с прямыми слешами, docker-folder - путь от корня, указанного в Dockerfile   
***

## docker ps
посмотреть список запущенных контейнеров
***

## docker ps -a
просмотреть список всех контейнеров
***

## docker ps -q
просмотреть список id всех запущенных контейнеров
***

## docker ps -aq
просмотреть список id всех контейнеров
***

## docker stop \<container-id>/\<container-name>
остановить контейнер с идентификатором \<container-id>/\<container-name>
***

## docker rm \<container-id>/<container-name>
удалить контейнер с идентификатором \<container-id>/\<container-name>
***
## docker stop $(docker ps -q)
остановить все запущенные контейнеры
***
## docker rm $(docker ps -aq)
удалить все имеющиеся контейнеры
***