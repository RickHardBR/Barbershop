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

Acessar a aplicação pelo celular, quem quiser tentar fica assim. Primeiro você descobre qual seu IP da rede, tem duas formas:

01)	- Clicando com o botão direito do mouse no ícone de rede na barra de Tarefas: 
 
02)	- Depois clique sobre o ícone de engrenagem ou no texto mesmo Configuração da rede e da internet.

03)	- Se você usa cabo clique em Ethernet, se usa Wi-fi clica em Wi-fi.

04)	-  Eu uso cabo então: Pego o valor do IP, no meu caso é: 192.168.0.252. 

Outra forma de descobrir seu IP é pelo CMD, clique em pesquisar no windows e digite cmd, Vai aparecer o comando, clique sobre ele e vai abrir a tela do Prompt de Comando,
Digite: Ipconfig

Vai aparecer algo assim:

    Configuração de IP do Windows

    Adaptador Ethernet Ethernet:

    Sufixo DNS específico de conexão. . . . . . :

     Endereço IPv6 de link local . . . . . . . . : er14::9e55:41cc:1478:3254%6

    Endereço IPv4. . . . . . . .  . . . . . . . : 192.168.0.252

     Máscara de Sub-rede . . . . . . . . . . . . : 255.255.255.0

    Gateway Padrão. . . . . . . . . . . . . . . : 192.168.0.1

Você vai precisar apenas do número que aparece em Endereço de IPv4.

05)	- Agora com a posse desse IP vc entra no seu arquivo PACKAGE.JSON,

 
06)	- ache "scrips": e ache a opção "dev".
 
vai estar assim:

<dl>
    <dd>"scripts": {</dd>
    <dd>"buid": "next build",</dd>
    <dd>"start": "next start",</dd>
    <dd>"lint": "next lint",</dd>
    <dd>"prepare": "husky",</dd>
    <dd>"dev": "next dev",</dd>
    <dd>}, 
</dl>

07)	- Apenas coloque assim:

<dl>
    <dd>"scripts": {</dd>
    <dd>"buid": "next build",</dd>
    <dd>"start": "next start",</dd>
    <dd>"lint": "next lint",</dd>
    <dd>"prepare": "husky",</dd>
    <dd>"dev": "next dev -H 192.168.0.252",</dd>
    <dd>}, 
</dl>


    no lugar do meu IP coloque o seu.

08)	- Rode o npm run dev, ele ira criar o servidor:

<dl>
    <dd>-Local: http://192.168.0.252:3000/</dd>
    <dd>-Network: http://192.168.0.252:3000/</dd>
</dl>

Para acessar pelo celular basta abrir o navegador do celular e digitar

http://192.168.0.252:3000/ 

E pronto você terá acesso a sua aplicação pelo celular. Qualquer dúvida, só me chamar...

#

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
