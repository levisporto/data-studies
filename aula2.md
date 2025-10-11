# Aula 2

::: info SQL e Postgres (07/10)
Essa aula foi mais uma introdução ao SQL. Resolvi continuar aqui tópicos teóricos que foram apresentados na aula 1 antes de escrever sobre SQL.
A partir daqui, falarei sobre "banco de dados" ou "databases" como DB, para encurtar.
:::



## Níveis de dados

Os profissionais de **banco de dados** podem trabalhar em 3 níveis (chamados níveis de abstração): **nível de visão**, **nível conceitual** ou **nível físico**.

- Os que trabalham no **nível físico** gerenciam a parte *física*, como dispositivos de armazenamento, otimizando servidores, cabeamentos, refrigeração, particionamento físico etc.

- No **nível conceitual** estão os diagramas e esquemas - como as tabelas e os dados se relacionam entre si, muitas vezes pensado antes do sistema ir para o ar.

- No **nível de visão** estão os dados já tratados, e um analista construir tabelas e dashboards para visualizar e medir dados.


## Tipos de Database

Tipos ou modelos de database são as diferentes formas usadas para se organizar dados. O mais comum é o **modelo Relacional**, mas existem outros:

- **Modelo Hierárquico**: os dados são organizados em uma estrutura que parece uma árvore: pense em uma árvore genealógica, na qual os dados tem pai, irmãos, filhos etc. Pense nos arquivos do seu PC, que estão dentro de pastas (diretórios) que estão dentro de outras pastas.


> SQL é uma linguagem de programação: são comandos utilizados para interagir com databases (mais sobre isso na aula 2).

Bancos de dados também devem permitem que sejam *administrados*, por meio de permissões de segurança, backups e monitoramento do sistema por exemplo.

Devem também permitir acessos simultâneos (muitas pessoas ou processos devem ser capazes de utilizar o banco de dados ao mesmo tempo) e definição de dados (*modelagem de dados*: como os dados serão estruturados dentro do database). 

## Propriedades (ACID)

Quando nós (ou nossa aplicação) interagimos com o database, cada unidade mínima de trabalho é chamada de **Transação**. Por exemplo, quando eu escrevo um código em SQL e envio para o database, ocorreu uma transação. 


As transações dos bancos de dados devem aderir as propriedades ACID: devem ter **Atomicidade**, **Consistência**, agir em **Isolamento** e possuir **Durabilidade**:


- **Atomicidade** significa que ou uma transação ocorre completamente, ou não ocorre.
	>  Se você escrever várias linhas de código (com várias declarações) mas algo estiver escrito errado, nada será executado, ao invés de ser executada algumas das linhas.

- **Consistência** indica que os dados só devem ser mudados segundo as regras impostas. 
	> O banco de dados deve seguir só estabelecido para chaves primárias, chaves estrangeiras, triggers, cascades...

  - **Isolamento** obriga que cada transação deve agir separadamente uma da outra, ocorrendo em isolamento. 
	> Assim, muitas transações podem acessar os dados sem interferir uma com a outra.

  - **Durabilidade** assegura que as transações acontecidas irão continuar registradas, mesmo em casos de queda do sistema. 
	> Mesmo se o serviço ficar fora do ar, ele ainda salvou seu cadastro e registrou sua compra, sem deletar o seu pedido, por exemplo. 


::: details Exemplos práticos:

1. Vamos supor que eu queira lhe passar um PIX. Para o database, isso significa fazer duas operações: registrar que agora eu tenho menos dinheiro e que você tem mais. Caso a operação que registra que você tem mais do que antes falhar, então o dinheiro não irá "sumir" da minha conta: a **Atomicidade** indica que ou é tudo ou é nada - ou a transação ocorre completamente ou então não ocorre.     



2. Imagine que fizemos um site, mas hackers estão descobrindo a senha dos nossos usuários por meio de códigos maliciosos que enviam direto para nosso database. Para resolver, podemos usar da **Consistência** e aplicar regras na submissão de dados, como por exemplo impedir que enviem um código porque agora só aceitamos que seja enviado um número máximo de caracteres. 



3. Pense que na hora que eu fui olhar meu saldo, você iria me enviar um PIX, mas o sistema caiu e o valor não foi enviado (*mas sua transação foi commitada pelo db e sofreu rollback*). Eu não irei ver um saldo errado por conta do **Isolamento**: a transação "ver meu saldo" não deve ocorrer ao mesmo tempo que a sua "enviar o PIX". Ou primeiro você me envia e depois o saldo é atualizado com o novo valor, ou então me aparece o saldo antigo e só quando a transação ocorre e eu atualizo o saldo é atualizado. 



4. Vamos supor que eu lhe passei um PIX, mas logo depois disso o sistema caiu. A **Durabilidade** faz com que a transação não seja perdida, e quando o sistema voltar você ainda terá o PIX registrado na sua conta.  


:::




## Área de dados

Na área da TI, é muito comum surgirem vagas de **Analista de Dados**, **Engenheiro de Dados** e **Cientista de Dados**.

**O Engenheiro de Dados** é o profissional que desenvolve a arquitetura do database. Geralmente mantêm ou constrói uma database do zero, gerenciando permissões de segurança, aumentando a performance e velocidade, fazendo **data modeling** (como definindo tabelas) e **pipelines** (como os sistemas irão utilizar os dados). 

> Um exemplo prático é quando uma empresa compra outra: o engenheiro irá trabalhar mergindo os dois sistemas de database - o já existente com o novo.

**O Analista de Dados** é quem irá trabalhar com os dados já tratados. Essa pessoa faz análises inteligentes a partir dos dados brutos, construindo tabelas, gráficos e comunicando à empresa algumas informações que podem ser desprendidas dos dados.  

> Um exemplo é quando uma empresa quer saber qual produto vendeu mais esse ano: o analista pode pegar as informações da tabela de vendas e se reunir com a gerência para mostrar a evolução das vendas dos produtos nos meses de outubro, setembro e agosto.

Já o **Cientista de Dados** pode **prever o futuro**: utilizando de cálculos, estatística, Machine Learning e IA, essa pessoa pode tentar criar projeções para simular situações futuras. 

> Quando uma empresa quer saber se vale mais a pena investir em um produto ou em outro, um cientista pode criar simulações para o próximo ano, calculando chances e probabilidades na comparação.