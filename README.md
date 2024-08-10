# Aula Zero
- [x] Setup do banco
- [x] Seeding do banco (colocar dados)
- [x] Introdução ao Next.js
- [x] Tailwind e Shadcn
- [x] Git Hooks

# Aula 01

- [x] - Criar Página Inicial
- [x] - Criar Botão hamburguer
  - [ ] - Configurar Botão hamburguer
- [x] - Criar Input Search
- [x] - Criar Quick Search
  - [ ] - Configurar Quick Seach
- [x] - Criar e estilizar Banner
- [x] - Criar Agendamentos
  - [ ] - Configurar Agendamentos
- [x] - Criar Recomendados
  - [ ] - Configurar Recomendados
- [x]  - Criar Populares
  - [ ]  - Configurar Populares
- [x]   - Criar Foter

## Acessar Aplicação pelo Celular

  * Algumas funcionalidades que usamos durante a programação podem não funcionar corretamente por não usarmos um servidor **https://**, por tanto segue abaixo uma forma de gerar um servidor https://seuip:3000 para poder acessar pelo celular ou no próprio computador.

  🤓 É possível configurar o Next.js para rodar com HTTPS em um endereço personalizado como https://seuip:3000 durante o desenvolvimento local.
  
  🙌 Para isso, você precisa configurar um servidor de desenvolvimento local com suporte a HTTPS. Aqui está um guia passo a passo:

1. Gerar Certificados SSL (Localmente)
Para rodar um servidor HTTPS localmente, você precisará de um certificado SSL e uma chave privada. Isso pode ser feito usando openssl ou outras ferramentas.

Usando OpenSSL:
No terminal, execute os seguintes comandos:

```
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```
Isso irá gerar dois arquivos: **key.pem** (chave privada) e **cert.pem** (certificado).

2. Configurar o Next.js com HTTPS
   
* Depois de gerar os certificados, você precisa configurar o Next.js para usar HTTPS durante desenvolvimento.

👣 Passos:
   
  * Criar um arquivo de configuração do servidor personalizado:

  * Crie um arquivo **server.js** na raiz do seu projeto:

```js
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('> Server started on https://meuip:3000');
  });
});

```
Substitua "meuip" pelo endereço IP da sua máquina, por exemplo, 192.168.1.10.

3. Modificar **package.json** para usar o servidor customizado:

No arquivo **package.json**, modifique o script de desenvolvimento para usar o server.js:
```js
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "next start"
}

```
4. Executar o Servidor
Agora, quando você rodar npm run dev, o servidor Next.js será executado com HTTPS no endereço especificado:
```js
npm run dev
```

A aplicação estará acessível em https://meuip:3000.

exemplo:
* supondo que meu IP é 192.168.0.252
* o endereço para acessar ficará assim: https://192.168.0.252:3000/

#

5. Possíveis Ajustes e Considerações
   
* Aviso de Segurança: Como os certificados criados com OpenSSL não são emitidos por uma autoridade confiável, o navegador exibirá um aviso de segurança. Você pode ignorar o aviso para fins de desenvolvimento.

* Permissões de Rede: Certifique-se de que a porta 3000 esteja aberta no seu firewall ou roteador se você estiver tentando acessar o servidor de outra máquina na mesma rede.

* Nome do Domínio: Se você quiser usar um nome de domínio (como meudominio.local) em vez de um IP, você pode modificar o arquivo /etc/hosts para mapear o domínio ao seu IP local.

#

Seguindo esses passos, você terá um ambiente de desenvolvimento local com suporte a HTTPS usando Next.js.

Qualquer dúvida, só me chamar...

#

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
