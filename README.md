# Agendu (Frontend)

Repositório para o frontend do sistema agendu.

## Informações

- [Modelos no Figma 🖥️](https://www.figma.com/design/KffDlki4Ex7CBwGkh55zTX/Figma-basics?node-id=1669-162202&node-type=canvas&t=xmq2Zr2Hnqp9kAQN-0)

- [Documentação SvelteKit 📖](https://kit.svelte.dev/docs/introduction)

- [Documentação Svelte 📖](https://kit.svelte.dev/docs/introduction)

- [Tutorial dinâmico Svelte/SvelteKit 💻](https://learn.svelte.dev/tutorial/welcome-to-svelte)

- [Relatório da PPI 📔](https://docs.google.com/document/d/1deTbel9Pt1GPJnqxaGFYKbmVBlGN74ov1-3q1rL-44A/edit)

- [Introdução ao git 📒](https://www.freecodecamp.org/portuguese/news/uma-introducao-ao-git-o-que-e-e-como-usa-lo/)

## Extensões (Ferramentas de desenvolvimento)

- [VSCode](https://code.visualstudio.com/)

- [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Orientações para desenvolvimento

Instalar o [git](https://git-scm.com/downloads).<br>
Instalar o [node](https://nodejs.org/en/download/prebuilt-installer/current).<br>
(Opcional) Instalar o [pnpm](https://pnpm.io/pt/) (caso usar, substituir eventuais comandos `npm` por `pnpm`).

1. **Clonar o repositório localmente.**

No terminal, ir até o diretório onde se deseja armazenar o projeto e executar o comando:

```bash
git clone https://github.com/Gabriel-RQ/agendu-frontend
```

2. **Abrir o projeto no VSCode (ou IDE/Editor de texto de preferência).**

3. **Instalar o projeto.**

```bash
npm install
```

4. **Criar uma nova branch de desenvolvimento, e utilizar ela.**

```bash
git branch dev
git checkout dev
```

5. **Fazer alterações desejadas no código.**

6. **Adicionar alterações ao controle de versão e Realizar os commits das alterações feitas. Dica: Fazer um commit para operações atômicas (por exemplo um novo componente ou página), ao invés de adicionar todas as alterações em um commit só.**

```bash
git add ['.' para incluir todos os arquivos modificados ou nome dos arquivos]

git commit -m ["Mensagem de commit."] [arquivos a serem inclusos no commit ou '.' para incluir todos os arquivos]
```

7. **Voltar a ramificação principal e obter as alterações mais recentes do repositório remoto (GitHub).**

```bash
git checkout main
git pull origin main
```

8. **Fazer um merge das alterações em desenvolvimento com a ramificação principal.**

```bash
git merge dev
```

9. **Enviar alterações para o repositório remoto.**

```bash
git push origin main
```

## Orientações para execução

Ambas as orientações abaixo exigem a execução dos passos 1 a 3 das [Orientações para desenvolvimento](#orientações-para-desenvolvimento).

### Ambiente de desenvolvimento

Executar o projeto com `npm run dev`.

### Ambiente de teste (_preview_)

Compilar o projeto com `npm run build`.

Executar prévia com `npm run preview`.
