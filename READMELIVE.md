# Certificates for Everyone 

Stuaus do Projeto: Concluido 

## Descrição do Projeto

Plataforma capaz de gerar certificados em de eventos e cursos em PDF para enviá-los por e-mail aos participantes.

## Funcionalidades 

- Gerar certificados em PDF
- Mandar certificados por e-mail
- Autenticação com Google
- Layout Responsivo 

## Deploy

> https://certificates-for-everyone-womakerscode.netlify.app/

## Layout

![Imagem](https://github.com/Diana-ops/certificates-for-everyone-netlify/blob/master/layout.png)


## Pré-Requisitos 

- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/) 
- [Node](https://nodejs.org/en/) 

## Dependencias e Linguagens 

- React
- React PDF
- React Routes
- Antd 

## Configuração

No terminal, clone o projeto

```
git clone https://github.com/Diana-ops/certificates-for-everyone-netlify
```
Entre na pasta do projeto
```
cd certificates-for-everyone-netlify
```
Instale as dependencias
```
yarn install
```

## Commo rodar o projeto

```
yarn start or rails s, rails server
```

## Como rodar os testes
```
npm test, rspec 
```

## Database 

### Configuração do Banco

```
rails db:migrate
rails db:server
```

|name|email|senha|token|avatar|
| -------- | -------- | -------- | -------- | -------- | 
|Lais Lima| lais@gmail.com | lais123 | true | https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9-U_HbQAipum9lWln3APcBIwng7T46hdBA42EJv8Hf6Z4fDT3&usqp=CAU |

## Resolvendo Problemas

Em [issues](https://github.com/Diana-ops/rental-cars-treina-dev-1/issues) foram abertos alguns problemas gerados durante o desenvolviment desse projeto e como foram resolvidos

# Contribuintes 

- [Bee Bones](https://github.com/beebones)
- [Chaiana Hermes](https://github.com/chaihermes)
- [Diana Regina](https://github.com/Diana-ops)
- [Rose Ahakawa](https://github.com/ahakawa)

## Tarefas Pendentes 

- Autenticação com outras redes sociais como facebook, twitter, linkdin
- Utilizar Redux para trabalhar com os dados
- Melhorar layout 
