<h1 align="center">Bem-vindo ao Canal Digital 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Pequena aplicação com o objetivo de fazer o gerenciamento de contas de usuários para um canal digital.
> Construído usando Laravel como API RESTful, usando uma aplicação em React para consumir essa mesma API.

## Pré-Requisitos

- mysql >= 5.7.24
- npm >= 5.5.0
- node >= 9.3.0
- php >= 7.3.0
- composer >= 1.0.0
## Clonando Projeto

```sh
$ git clone https://github.com/leonardongl/canal-digital.git
```

## Configurando Base de Dados
- Crie um banco de dados MySQL com o nome 'canal_digital'
```sh
$ cd canal-digital/backend
$ cp .env.example .env
```
- Configure o arquivo .env de acordo com suas configurações

## Build API

```sh
$ cd canal-digital/backend
$ composer install
$ php artisan key:generate
$ php artisan migrate --seed
$ php artisan serve
```


## Build Web

```sh
$ cd canal-digital/backend
$ npm install
$ npm start
```

## Author

👤 **Leonardo Augusto Noronha Leão**

* Github: [@leonardongl](https://github.com/leonardongl)
* LinkedIn: [@leonardo-augusto-noronha-leão](https://linkedin.com/in/leonardo-augusto-noronha-leão-338bb118b)