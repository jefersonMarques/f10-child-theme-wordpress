# F10 Child Theme

Tema filho do Astra utilizado no Blog F10, com templates editoriais, CTAs contextuais, páginas de autores e componentes responsivos.

## Requisitos

- WordPress 6.5 ou superior
- PHP 7.4 ou superior
- Tema Astra instalado
- Links permanentes habilitados

## Instalação

1. Compacte o diretório `f10-child` em ZIP.
2. No WordPress, acesse **Aparência → Temas → Adicionar tema → Enviar tema**.
3. Ative o tema **F10 Child**.
4. Acesse **Configurações → Links permanentes** e salve novamente.

## Perfis de autores

O tema adiciona campos próprios em **Usuários → Perfil**:

- cargo e especialidade principal;
- biografia curta;
- especialidades;
- LinkedIn;
- foto local na Biblioteca de Mídia;
- visibilidade na lista pública de autores.

A foto é armazenada no WordPress e substitui o Gravatar nos componentes compatíveis com a API padrão de avatares.

### Perfil inicial: Rodrigo Fonseca

| Campo | Valor |
|---|---|
| Nome de exibição | Rodrigo Fonseca |
| E-mail interno | rodrigo.fonseca@f10.com.br |
| Cargo | Head Comercial da F10 Software |
| Especialidades | Vendas, Captação de alunos, Funil de matrículas, Processos comerciais para escolas |
| LinkedIn | https://www.linkedin.com/in/rfrodrigofonseca/ |
| Biografia curta | Rodrigo Fonseca é Head Comercial da F10 Software e especialista em vendas, captação de alunos e processos de matrículas para instituições de ensino. |

O e-mail não é exibido publicamente pelo tema.

## Lista de autores

1. Crie uma página no WordPress com o título **Autores**.
2. No campo de modelo, selecione **F10 - Autores**.
3. Publique a página.
4. Adicione a página ao menu do blog quando necessário.

A página lista somente usuários com pelo menos um post publicado e com a opção de visibilidade habilitada.

## Página individual de autor

O WordPress usa automaticamente o arquivo `author.php` para URLs como:

```text
/author/rodrigo-fonseca/
```

A página exibe foto, cargo, biografia, especialidades, LinkedIn e artigos publicados.

## Autoria nos posts

O template `single-post.php` agora:

- mostra o nome real do autor no cabeçalho do artigo;
- relaciona o nome à página pública do autor;
- usa foto local em miniatura;
- adiciona uma caixa profissional de autoria ao final do conteúdo;
- utiliza imagens responsivas com `srcset`, `sizes`, dimensões reais e prioridade para a imagem destacada.

## Responsividade

Os componentes novos foram preparados para desktop, tablet e smartphone, incluindo:

- layouts em uma coluna em telas pequenas;
- alvos de toque com pelo menos 44 px nos controles principais;
- imagens responsivas sem largura fixa;
- tabelas e códigos com rolagem horizontal controlada;
- suporte a `prefers-reduced-motion`;
- estados de foco visíveis para navegação por teclado;
- proteção contra estouro horizontal de textos e mídias.

A pontuação final de desempenho depende também do servidor, cache, plugins, imagens publicadas, scripts de terceiros e configurações do Astra. Faça o teste final no ambiente publicado com Lighthouse e PageSpeed Insights.

## Estrutura principal

```text
assets/
  css/
    f10-author.css
    f10-author-admin.css
    f10-single-post.css
  js/
    f10-author-profile-admin.js
inc/
  author-profile.php
template-parts/
  author-card.php
  post-author-box.php
author.php
template-f10-authors.php
single-post.php
functions.php
```

## Segurança

Os campos de autor utilizam:

- verificação de nonce;
- verificação de permissão `edit_user`;
- sanitização de texto e URL;
- validação de anexos de imagem;
- links externos com `noopener noreferrer`.


## Correção 1.1.1

- evita URLs 404 quando o arquivo original do avatar foi removido, mas alguma miniatura ainda existe;
- escolhe a melhor miniatura física disponível antes de montar a URL;
- tenta gerar automaticamente o recorte `f10-author-avatar` ao salvar o perfil;
- exibe um aviso no painel quando somente miniaturas estão disponíveis;
- melhora a prévia do seletor de mídia usando `thumbnail` como fallback.
