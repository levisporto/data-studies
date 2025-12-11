# Aula 2 - Bancos de Dados Relacionais

::: info Modelos de Bancos de Dados, Chave Primária/Estrangeira, RDBMS
A partir daqui, falarei sobre "banco de dados" ou "databases" como DB, para encurtar.
:::



## Níveis de dados

Os profissionais de **banco de dados** podem trabalhar em 3 níveis (chamados níveis de abstração): **nível de visão**, **nível conceitual** ou **nível físico**.

- Os que trabalham no **nível físico** gerenciam a parte *física*, como dispositivos de armazenamento, otimizando servidores, cabeamentos, refrigeração, particionamento físico etc.

- No **nível conceitual** estão os diagramas e esquemas - como as tabelas e os dados se relacionam entre si, muitas vezes pensado antes do sistema ir para o ar.

- No **nível de visão** estão os dados já tratados, e um analista construir tabelas e dashboards para visualizar e medir dados.


## Modelos de DB




> ![Modelo Relacional (Diagrama)](/modelo-relacional.jpg)

**Tipos ou modelos de database** são as diferentes formas usadas para se organizar dados. O mais comum é o **Modelo Relacional**, proposto pelo britânico Edgar F. Codd em 1970.

- Nesse modelo os dados são organizados em tabelas (relações) compostas de linhas e colunas (tuplas e atributos). Temos os dados estruturados como no exemplo:

|Cliente|Cidade  | 
|--|--|
| Levi | Fortaleza |
| Joana | São Paulo |
| Beatriz | Paraíba |


> Nessa tablela (relação), temos em cada coluna os nomes dos clientes, e na coluna do lado, a cidade que esse cliente mora. 


## Tipos de dados em Atributos (Colunas)

Quando criamos nossas relações (tabelas), podemos definir o tipo de dado que cada coluna irá aceitar. Isso é feito geralmente para economizar espaço e recursos no nosso DB.
Algumas colunas podem registrar texto e outras só aceitar números, por exemplo:

|Tipo|SQL  | Exemplo | Dado
|--|--|--|--|
| Texto | VARCHAR | Nome | Levi
| Número | INTEGER  | Idade | 27
| Data | DATE | Aniversário | 21/11/97
| Varíavel | BOOLEAN | Maior de 18 | Sim

## Chave Primárias

Imagine que você tem um negócio e quer criar um DB para lhe ajudar. Você terá que criar relações (tabelas) com os clientes e forncedores (contendo nome, endereço, telefone), produtos, número de vendas, compras...

Muitas informações podem acabar duplicadas e algumas tabelas podem ficar gigantes, dificultando sua vida. É por isso que temos as **Chaves Primárias** (PK) e **Chaves Estrangeiras** (FK).

A chave primária é uma forma de identificar unicamente cada linha (tupla). Pense por exemplo que você tem dois clientes com o mesmo nome:

|Cliente|Cidade  | 
|--|--|
| Levi | Fortaleza |
| Levi | Fortaleza |

Como irá diferenciar as duas tuplas? Como irá saber para qual Levi vendeu o quê? Nesse caso podemos numerar cada linha:

|ID | Cliente|Cidade  | 
|--|--|--|
|1 | Levi | Fortaleza |
|2|  Levi | Fortaleza |

Nesse caso, ID é a **Chave Primária** (PK).

## Chave Estrangeira

**A Chave Estrangeira** referencia a Chave Primária de outra tabela, estabelecendo relações entre diferentes tabelas.

Suponha que você tenha uma tabela (relação) de pedidos.

|Cliente|Pedido | 
|--|--|
|Levi | Macarrão |
|Levi | Biscoito |

Assim você estará duplicando relações, já que já existe uma tabela de clientes. Imagine se eu mudo de cidade, por exemplo: você terá que trocar esse dado em várias relações.
Faça uso das **Chaves Estrangeiras**

|clientes_id|Pedido | 
|--|--|
|1 | Macarrão |
|1 | Biscoito |

Agora você sabe qual foi o cliente que fez o pedido (O primeiro Levi, que podemos achar na tabela de Clientes acima) e anotar diferentes pedidos. 

::: info Chave Composta e Candidata
Para simplificar, falaremos sobre esses outros tipos de Chave só depois.
:::


## SQL (Structured Query Language)

**SQL** é uma linguagem utilizada para nos comunicarmos com Sistemas de Gerenciamento de Databases (RDBMS). Quando formos criar nossas tabelas e inserir dados no nosso DB podemos fazer de maneira 'no-code', isso é, só clicando nos botões de um programa (interface gráfica de usuário) ou então escrevendo código ('high-code').


::: danger Sobre SQL
Programar e escrever códigos de programação não é como falar com uma IA (tipo o Gemini ou ChatGPT): o Sistema de Gerenciamento de Databases não vai 'entender' se você não escrever da forma exatamente correta (chamado erro de sintaxe) e pode simplesmente não executar nada do que você pediu. 

Você terá que usar os comandos exatos e em inglês! Mas não se preocupe em decorar cada comando agora: o importante é entender como se faz e para quê.

:::

## PostgreSQL e RDMBS

**Postgres** é um Sistema de Gerenciamento de Database (RDBMS) gratuito e de código aberto. Com ele, podemos *gerenciar* o nosso DB: criar tabelas, consultar dados, deletar etc, utilizando a linguagem SQL ou por meio de algum programa (como o **myAdmin**). 

- [PostgreSQL](https://www.postgresql.org/download/)

Para instalar em um PC, clique em Windows, depois em 
["Download the installer"](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads), clique no ícone de azul de instalação e abra o instalador no seu PC.  
 > Esse programa instala no seu PC um **Servidor PostgreSQL**, o **pgAdmin** e **Stack Builder** (um instalador de drivers e utilitários para o Postgres).

 Você terá que escolher uma senha para o gerenciamento (anote!). Em seguida, pode clicar em seguir (*next*).