# SQL - Structured Query Language

O requisito mais importante para quem quer trabalhar com Dados ou com Back-end é saber fazer consultas e pedidos para o [banco de dados](https://www.linkedin.com/feed/update/urn:li:ugcPost:7384629482109726720/). **Hoje em dia não basta só saber Excel para tentar uma vaga na área de Análise de Dados: é necessário saber também (pelo menos) SQL!**

SQL, ou **S**tructured **Q**uery **L**anguage_ (do inglês ''Linguagem de Consulta Estruturada'') é a linguagem padrão para se comunicar com bancos de dados. **É como uma linguagem de programação**: são comandos escritos por você, o usuário ou o programa que possibilitam consultar os dados, adicionar dados ao banco de dados, atualizar, deletar, gerenciar quem tem acesso aos dados, e muito mais.

**Essas acima são chamadas** _**consultas**_ **(queries).** Programas ou sistemas de gerenciamento de bancos de dados relacionais (como o Postgres ou MySQL) fazem a leitura do seu código SQL, processam e desempenham a consulta desejada. Alguns até possibilitam que você faça a consulta de maneira 'low-code': você aperta alguns botões e consulta os dados que deseja, adiciona dados etc, sem precisar escrever código SQL.

> Mas para consultas complexas (ou se você for desenvolvedor(a) back-end) não tem para onde fugir: precisará aprender como ''conversar'' com o seu banco - como fazer sua consulta através de código SQL. Por isso essa linguagem é tão pedida nas vagas que envolvem dados.

### SQL: Linguagem Declarativa

Escrever código SQL é como pedir algo à alguém. Imagine que está falando com uma IA ou com alguém:

`Quero ver todos os dados contidos na tabela do meu banco de dados.`

No entanto o programa (ou sistema de gerenciamento) não é uma IA nem uma pessoa, e só vai atender a **comandos completamente específicos.** Errar uma letra ou um ponto só na maneira como você escreve sua consulta com SQL pode resultar num erro ou numa ação errada, então **é necessário aprender os comandos SQL corretamente.**

No começo, foque em aprender comandos básicos e simples! A prática ajuda muito.

**Vamos ver como a consulta acima, escrita na linguagem portuguesa, pode se tornar linguagem SQL e ser bem entendida pelo sistema:**

`SELECT * FROM database.tabela;`

> SQL é uma linguagem declarativa, o que significa que você descreve _**o que deseja**_ ao invés de _**como deseja.**_ O sistema resolve sozinho como fazer para você: no caso, você pediu para ''Selecionar todas as colunas de uma tabela (chamada tabela) dentro do database (chamado database)''.

Vamos supor que nossa tabela, chamada **'clientes'**, está dentro de um database (ou esquema) chamado **'loja'**:

SELECT \* FROM loja.clientes; ou SELECT \* FROM loja.clientes LIMIT 2;

Vamos dizer que queremos só a linha (row, ou tupla) com o meu nome, para saber só o meu nome e cidade:

`SELECT Cliente, Cidade FROM loja.clientes WHERE name = 'Levi';`

SELECT Cliente, Cidade FROM loja.clientes WHERE name = 'Levi';

Perfeito! Ao invés de uma tabela enorme e cheia de dados, o código SQL nos deu só uma parte específica:

**Português: SELECIONE as colunas Cliente e Cidade DA TABELA clientes do banco de dados loja ONDE o nome será 'Levi'.**

**SQL: SELECT Cliente, Cidade FROM loja.clientes WHERE name = 'Levi';**

> Com comandos mais avançados podemos fazer análises e insights poderosos, como 'quantos clientes moram em Fortaleza', 'qual o gasto em média por cliente', 'quais produtos são mais comprados' etc!

**Por hoje é só! O SQL tem vários comandos, se você quiser aprender mais e souber um pouco de inglês ou espanhol, recomendo esse site:** [**https://sqlzoo.net/wiki/SQL\_Tutorial**](https://sqlzoo.net/wiki/SQL_Tutorial)

Caso seu conhecimento de SQL seja mais avançado, você pode treinar com databases maiores no Leetcode: [https://leetcode.com/problemset/database/](https://leetcode.com/problemset/database/)