# Upload Files By nodeJS

## install dependencies

```
npm install
```

## start dev server

```
node app.js
```

## Install Forever

```
npm install forever -g
```

```
npm install forever-monitor -g
```

## for run in windows background

```
forever start -a app.js
```

```
forever start npm start
```

## for stop service from windows background

```
forever stop app.js
```

```
forever stopall
```

```
forever -help
```

## for read files from windows

## use http-server

```
npm install http-server -g
```

## To use it:

```
cd D:\Folder
$http-server
Or, like this:
$http-server D:\Folder

you can use this URL to open
http://localhost:8080
```

## to open and use in background windows

```
http-server & exit

You can also specify a port number:

http-server -p 8082 & exit

```
