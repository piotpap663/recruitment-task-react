# **Recruitment task - table**

---
## **LIVE DEMO**

[LIVE DEMO](https://xsolve-recruitment-task.herokuapp.com)

---
## **Requirements**

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You can use [YARN](https://yarnpkg.com) instead of npm if you like.
You should be able to run the following command after the installation procedure
below.
```sh
    $ node --version
    v0.10.24

    $ npm --version
    1.3.21
```

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.
```sh
    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
If everything when fine, you should run
```sh
    brew install node
```
#### Node installation on Linux
```sh
    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
```

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
	Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## **Install**
```sh
    $ git clone https://github.com/piotpap663/recruitment-task-react.git
    $ cd recruitment-task-react-master

    $ npm install
    #or
    $ yarn install
```
---
## **Development**
Table data comes from **'/src/data.json'** file.

## **Getting started**
```sh
    $ npm dev-server

    #or if you use yarn
    
    $ yarn run dev-server
```
It will run app on localhost server
Just check the ip and port on your command lines
Put the address in your browser and it'll works

##### **Default address:**

	localhost:8080

---

## **Simple build for production**
```javascript
    $ npm build

    #or if you use yarn
    
    $ yarn run build
```

---

## **Author**

* **Piotr Papiernik** - [LinkedIn](https://linkedin.com/in/piotr-papiernik/) 

---

## **License**

	This project is licensed under the MIT License
