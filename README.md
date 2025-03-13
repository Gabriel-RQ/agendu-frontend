# Agendu (Frontend)

Repositório para o frontend do sistema agendu. O Agendu é um sistema de gerenciamento de horários formulado para a APAE, como parte da Prática Profissional Integrada (PPI) do curso de Ciência da Computação. O objetivo do projeto é que o sistema utilize uma abordagem de Algoritmo Genético para gerar os horários das aulas da APAE, baseando-se em um conjunto de restrições.

Para funcionar, é necessário executar o [backend do projeto](https://github.com/Alisson-sysy/agendu-back-end).

## Informações

- [Modelos no Figma 🖥️](https://www.figma.com/design/KffDlki4Ex7CBwGkh55zTX/Figma-basics?node-id=1669-162202&node-type=canvas&t=xmq2Zr2Hnqp9kAQN-0)

- [Documentação SvelteKit 📖](https://kit.svelte.dev/docs/introduction)

- [Documentação Svelte 📖](https://kit.svelte.dev/docs/introduction)

- [Tutorial dinâmico Svelte/SvelteKit 💻](https://learn.svelte.dev/tutorial/welcome-to-svelte)

- [Relatório da PPI 📔](https://docs.google.com/document/d/1deTbel9Pt1GPJnqxaGFYKbmVBlGN74ov1-3q1rL-44A/edit)

- [Introdução ao git 📒](https://www.freecodecamp.org/portuguese/news/uma-introducao-ao-git-o-que-e-e-como-usa-lo/)

- [Biblioeca de ícones utilizada 🟢](https://cweili.github.io/svelte-fa/)

- [Catálogo de ícones 🔤](https://fontawesome.com/search)

## Extensões (Ferramentas de desenvolvimento)

- [VSCode](https://code.visualstudio.com/)

- [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Orientações para desenvolvimento

Instalar o [git](https://git-scm.com/downloads).<br>
Instalar o [node](https://nodejs.org/en/download/prebuilt-installer/current).<br>

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

4. (OPCIONAL) **Obter as alterações mais recentes do repositório remoto (GitHub). Rodar caso já tenha clonado o repositório anteriormente.**

```bash
git pull origin main
```

5. **Criar uma nova branch de desenvolvimento, e utilizar ela.**

```bash
git branch dev
git checkout dev
```

6. **Fazer alterações desejadas no código.**

7. **Adicionar alterações ao controle de versão e Realizar os commits das alterações feitas. Dica: Fazer um commit para operações atômicas (por exemplo um novo componente ou página), ao invés de adicionar todas as alterações em um commit só.**

```bash
git add ['.' para incluir todos os arquivos modificados ou nome dos arquivos]

git commit -m "Mensagem de commit."
```

8. **Voltar a ramificação principal.**

```bash
git checkout main
```

9. **Fazer um merge das alterações em desenvolvimento com a ramificação principal.**

```bash
git merge dev
```

10. **Enviar alterações para o repositório remoto.**

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

## Documentação do Projeto

[Acesse o Notion da equipe](https://www.notion.so/1274b944e99880f58f67d15927e1c3df?v=1274b944e9988053a6b2000cc6c05b7d&pvs=4)
