<h1 align="center"> Certificates for Everyone </h1>

> Status do Projeto: Concluido 

## Descrição do projeto

<p align="justify">
Desenvolver uma plataforma capaz de gerar certificados em PDF de eventos e cursos para enviá-los por e-mail aos participantes.
</p>

## O que a plataforma é capaz de fazer 

- Gerar PDF do certificado com as informações preenchidas no formulário para cada participantes para envio de e-mail 

- Check-list de participantes, permitindo selecionar quem irá receber os certificados 

- Permite que o organizador do evento escreva sua assinatura digital dentro da plataforma

- Oferece layout responsivo 

- Cadastrar organizadores 

- Cadastrar eventos 

- Cadastrar participantes para cada evento

## Deploy da Aplicação com Netlify: 

> https://certificates-for-everyone-womakerscode.netlify.app/

## Pré-requesitos

- [Node](https://nodejs.org/en/download/)

- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) 

## Como rodar a aplicação 

No terminal, clone o projeto: 

```
git clone https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator
```

Entre na pasta do projeto:  

```
cd certificate-generator
```

Instale as dependecias:

```
yarn install
```

Execute a aplicação:

```
yarn start
```

Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/ 

## JSON 

A nossa simulação de banco de dados foi feita com JSON. Foram separados um para [usuarios](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/users.json), [participantes](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/participantes.json) e [eventos](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/events.json):

### Usuário: 

|name|email|password|token|avatar|
| -------- |-------- |-------- |-------- |-------- |
|Lais Lima|laislima98@hotmail.com|lais123|true|https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9-U_HbQAipum9lWln3APcBIwng7T46hdBA42EJv8Hf6Z4fDT3&usqp=CAU|

### Evento: 

|user|company|course|startDate|finishDate|workload|logo|
| -------- |-------- |-------- |-------- |-------- |-------- |-------- |
|Lais Lima|WomakersCode|Bootcamp React|01/02/2020|28/03/2020|56|https://miro.medium.com/max/478/1*jriufqYKgJTW4DKrBizU5w.png|https://upload.wikimedia.org/wikipedia/commons/7/7f/Assinatura_Jos%C3%A9_Saramago.png|

### Participante: 

|name|email|present|receiveCertificate|course|
| -------- |-------- |-------- |-------- |-------- |
|Chaiana Hermes|chaiana_hermes@yahoo.com.br|true|false|Bootcamp React|

## Linguagens, dependencias e libs utilizadas 

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [React PDF](https://react-pdf.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

Framework para layouts prontos:
- [AntDesign](https://ant.design/docs/react/introduce) 

Autenticação com Google
- [Login com Google](https://www.npmjs.com/package/react-google-login)

Para mandar PDF por email
- [jspdf](https://www.npmjs.com/package/jspdf) 

Para inserir HTML no corpo do email
- [html2canvas](https://www.npmjs.com/package/html2canvas)

Para desenvolver a assinatura digital:

- [Reactjs-Popup](https://react-popup.elazizi.com/getting-started/)
- [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas)

Permite visualizar uma animação enquanto o usuário espera o e-mail ser enviado:
- [React-Spinkit](https://github.com/KyleAMathews/react-spinkit)

## Dependência externa 
[Server Mailjet](https://github.com/beebones/server-mailjet) - Back-end feito em **Golang** utiizado para consumir api **mailjet** e enviar os emails com o certificado.
<hr/>

## Desenvolvedoras

- [Bee Bones](https://github.com/beebones)
- [Chaiana Hermes](https://github.com/chaihermes)
- [Diana Regina](https://github.com/Diana-ops)
- [Rose Ahakawa](https://github.com/ahakawa)
