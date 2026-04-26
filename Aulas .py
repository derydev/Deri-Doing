
# preco = float(input("Digite o valor da : "))

# quantidade = float(input("Dite a quantidade :"))

# total = preco * quantidade

# desconconto = total > 50



# print(desconconto)



# valor = int(input("Digite um valor: "))


# if valor % 2 == 0:

#         print("O valort é Par")

# else:

#         print("O numero é Impar")



# print(valor)


# preco = float(input("Intoduza o Valor :"))

# quantidade = int(input("Introduza a quantidade  :"))

# total = preco * quantidade

# print("Valor a pagar", total,"€")


# produto = input("Digite o Produto: ")

# preco = float(input("Digite o preço  :"))

# quantidad = int(input("Digite o valor :"))

# total = preco * quantidad

# print(f"Toal sem desconto : {total}€")

# desconto = 0

# if total > 100:

#     desconto = total * 0.15



#     print(desconto)

#     print("Desconto é de 15% aplicado")

# elif total > 50:

#     desconto = total * 0.10

#     print(desconto)

#     print("Desconto é de 10% aplicado")



# else:

#     total_f = total - desconto

#     print("Total sem desconto")



# print(total_f)



#Vamos usar o macth ou swict case


# opcao = int(input(f"Digite uma Opção: \n 1 - Bora aprender \n 2 lista Produtos \n 0 sair "))

# match opcao:

#     case 1:

#         print(f'Bora aprender Com DERY')

#     case 2:

#         print(f'Listar Produtos')

#     case 0:

#         print(f'Sair do sistema')

#     case _:

#         print(f'Tente de novo')

# produtos = ['Uvas','batata','Peixe','Frango','Massa','Arroz','Pao','Agua']

# # i = 0

# # while i < len(produtos):

# #     print(produtos[i])

# #     i = i + 1

# # print(f'Total de produtos = {len(produtos)}')

# for index,produto in enumerate(produtos):

#     print(f'{index + 1}. {produto}')

# opcao = int(input("Escolha uma Opçao: "))- 1

# for produto in produtos:

#     if produto == produtos[opcao]:

#         print(f'O produto selecionado é: {produto}')

#

#//////////////////////////////////////////////////////////////////////////////////////////////////////////cls



# def registar_produto():

#     produto = input('produto: ')

#     preco = float(input('produto: '))

#     quantidade = int(input('Quantidade: '))

#     total = preco * quantidade

#     total_f = aplicar_desconto(total)

#     return total_f



def aplicar_desconto(total_antes_descontos):

# desconto = 0

    if total_antes_descontos > 100:

        desconto = 0.15

        print("Desconto é de 15% aplicado")

    elif total_antes_descontos > 50:

        desconto = 0.10

        print(desconto)

        print("Desconto é de 10% aplicado")

    else:

        print("Total sem desconto")

        return total_antes_descontos * (1 - desconto)



def calcular(preco,quantidade):

 return preco * quantidade



# def registar_produtos():

#     nome = input("Inserir um produto: ")

#     preco = float(input("Inserie o Preço: "))

#     quantidade = int(input("Inserie o quantidade: "))

#     total = calcular(preco,quantidade)

#     totalfi = aplicar_desconto(total)

#     produtos.append(nome)


#     print(f'produtos registados com sucesso')

#     print(f'produtos: {nome}')

#     print(f'produtos: {preco}')

#     print(f'produtos: {quantidade}')

#     print(f'Total a pagar {totalfi}')

encomenda = []

def encomenda_lista():

    cont = 0

    produtos = []

total_encomenda = 0

nomeCli = input("Insira o nome do cliente: ")

dados = {}

while True:

 nome = input("Inserir um produto: (Prima 0 para sair)")



if nome != '0':

 cont += 1

 preco = float(input("Inserie o Preço: "))

quantidade = int(input("Inserie o quantidade: "))

    total = calcular(preco,quantidade)

totalfi = aplicar_desconto(total)

            total_encomenda += totalfi

            dados = {

            'nomeProduto':nome,

            'preco':preco,

            'quantidade':quantidade,

            'totalfinal':totalfi

            }

        if cont > 0:

            produtos.append(dados)

        if nome == "0":

            break

        encomenda_temp = {

        'nome_cliente' : nomeCli,

        'produtos': produtos

    }

    encomenda.append(encomenda_temp)

 

    print(f'produtos registados com sucesso')

    print(f'produtos: {nome}')

    print(f'produtos: {preco}')

    print(f'produtos: {quantidade}')

    print(f'Total a pagar {totalfi}')

 

 

 

def listar_produtos(produtos):

    print(f'\n produto Registados: {len(produtos)}')

    if len(produtos) == 0:

        print(f"(Sem Produtos)")

    else:

        for index , encomenda in enumerate(produtos):

            print(f'{index + 1}. Cliente: {encomenda['nomecliente']}')

            for index, produto  in enumerate(produtos):

                print(f'{index + 1}. Produto: {produtos['nome']}')

                print(f'{index + 1}. Preço: {produtos['preco']}')

                print(f'{index + 1}. Quantidade: {produtos['quantidade']}')

                print(f'{index + 1}. Sub-total: {produtos['totalfi']}')

            print(f'Total da encomenda: {encomenda['total_encomenda']}')

           

            # for index , produto in enumerate('nomeProduto'):

            #     print(f'Adicione um novo produto : ' )

            #     print(f'{index + 3}. produto: {produto}')

               

 

 

def listar_Clientes(produtos):

    print(f'\n Cliente Registados: {len(produtos)}')

    if len(produtos) == 0:

        print(f"(Sem Clientes)")

    else:

        for index , produto in enumerate(produtos):

            print(f'{index + 1}. Cliente: {produto['nomecliente']}')

 

def totalvendas(produtos):

    print(f'\n Vendas diarias')

    total = 0

    if len(produtos) == 0:

        print(f"(Sem Vendas)")

    else:

        for index , produto in enumerate(produtos):

            print(f'{index + 1}. Cliente: {produto['nomecliente']} - total pago:{produto}')    

            total += produto['totalfinal']

        print(f'Total de vendas diarias: {total}')    

 

 

 

produtos = []

opcao = -1

while opcao !=0:

     opcao = int(input("Introduza uma opcao: "))

     match opcao:

         case 1:

             encomenda_lista()

         case 2:

             listar_produtos(produtos)

         case 3:

             listar_Clientes(produtos)

         case 4:

             totalvendas(produtos)

         case 0:

             print("Sair do sitema")

         case _:

             print("tentar de novo")      

 

# listar_produtos(produt)

 

