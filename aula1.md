# Aula 1!

Seja bem vindo(a) às minhas anotações sobre o curso de Data Analytics da Digital College. Esse curso possui 4 módulos: Banco de Dados (64h), ETL (48h), Phyton para Análise de Dados (44h), e Power BI Desktop (36h). Tem duração de 1 ano e cobre **SQL**, **Business Inteligence**, **Python**, **Pandas** e mais.

>As aulas estão acontecendo todas as terças das 18h às 22h, na sede Aldeota.

Meu nome é [Levi](https://www.levisporto.com) e eu criei esse site para estudar e ajudar os colegas da turma e outras pessoas que tenham interesse em conhecer sobre dados. Se você quiser contribuir com as anotações ou falar comigo, pode [mandar uma mensagem](https://www.linkedin.com/in/levisporto/).


## Bancos de dados

Um **banco de dados** é uma coleção organizada de dados que se relacionam entre si. São estruturas lógicas que guardam dados para análise, processamento e entrega.
Um dado é uma *informação* sobre algo. Se eu lhe pedir seus dados, por exemplo, você pode me passar seu nome, CPF, endereço, etc. Essas são informações sobre você, que podem ser utilizadas para lhe identificar. 

Antes da era digital era comum escrever em tabelas (*index cards*) para organizar dados, como em uma lista telefônica. Essas tablelas ficavam em cadernos de registros e eram guardados em arquivos físicos, dentro de pastas e gavetas. 

Hoje em dia os bancos de dados guardam informações criadas a todo momento. Uma empresa pode registrar o estoque, analisar quais produtos tem mais saída e tentar prever como irá vender no próximo ano. É a era do **big data**: os celulares, apps e sensores estão coletando dados a todo momento.

>Os arquivos digitais geralmente não são inseridos nos bancos de dados, e sim em disco ou na memória, mas podem ser reunidos em data sets.

## Operações básicas (CRUD)

Os bancos de dados devem ser capazes de operações básicas: quando solicitado, devem **inserir** dados, **mostrar** dados, **atualizar** dados e **deletar** dados.
Esse princípio se chama CRUD.

|CRUD|SQL  |
|--|--|
| Create | INSERT |
| Read | SELECT |
| Update | UPDATE |
| Delete | DELETE |

Bancos de dados também permitem administração, por meio de monitoramento do sistema, permissões de segurança, backups, além de acessos simultâneos e definição de dados (*modelagem de dados*: como os dados são estruturados dentro do database). 

## Propriedades (ACID)

As transações dos bancos de dados devem aderir as propriedades ACID: devem conter **Atomicidade**, **Consistência**, **Isolamento** e **Durabilidade**:


- **Atomicidade** significa que ou uma transação ocorre completamente, ou não ocorre.
	>  Se você escrever várias linhas de código (com várias declarações) mas algo não estiver correto, nada será executado, ao invés de ser executada algumas das linhas.

- **Consistência** indica que os dados só devem ser mudados segundo as regras impostas. 
	> O banco de dados deve seguir o estabelecido para chaves primárias, chaves estrangeiras, triggers, cascades...

  - **Isolamento** obriga que cada transação deve ser separada uma da outra, ocorrendo em isolamento. 
	> Assim, muitas transações podem acessar os dados sem interferir com a outra.

  - **Durabilidade** assegura que as transações acontecidas irão continuar registradas, mesmo em casos de queda do sistema. 
	> Mesmo se o serviço ficar fora do ar, ele ainda salvou seu cadastro e registrou sua compra, sem deletar o seu pedido, por exemplo. 


