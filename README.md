# Шпаргалка по командам Docker

### docker build -t \<image-name> .
создать образ с именем \<image-name>, используя Dockerfile
***

### docker images
просмотреть список доступных образов
***

### docker run --name \<custom-name> -d --rm \<image-name>
запустить контейнер на основе образа \<image-name> с кастомным именем \<custom-name>  
-p - запустить в фоне  
-rm - удалить конейнер после завершения работы
***

### docker ps
посмотреть список запущенных контейнеров
***

### docker ps -a
просмотреть список всех контейнеров
***

### docker ps -aq
просмотреть список id всех контейнеров
***

### docker stop \<container-id>/\<container-name>
остановить контейнер с идентификатором \<container-id>/\<container-name>
***

### docker rm \<container-id>/<container-name>
удалить контейнер с идентификатором \<container-id>/\<container-name>
***
### docker stop $(docker ps -q)
остановить все запущенные контейнеры
***
### docker rm $(docker ps -aq)
удалить все имеющиеся контейнеры
***