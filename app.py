# print("Mine Calculadora Dery")
#n1 = int(input("Digite o primeiro Numero: "))
#n2 = int(input("Digite o segundo Numero: "))
#resultado = (n1 + n2)

#print("A soma entre o ",n1, "e" ,n2, "e :" ,resultado)`


###peso = float(input("Digite a sua Massa em KG  "))
###Altura = float(input("Digite a sua Altura m   "))

###imc = peso / (Altura * Altura)

###print("O seu IMC é ",round(imc))

###if imc < 25 :
   ## print("Abaixo do peso")
###elif imc > 28 and 67 < imc :
   # print("Bom peso ")
###elif imc > 100:
   ## print("Acima do peso")
    

nome_produto = input("Digite o nome do produto :")
preco = float(input("Digite o preço" ))
perce = float(input("Dite a percentagem % "))

desconto = preco * (perce / 100)
final =  preco - desconto
print("O valor o preço",preco, "desconto sera de", desconto , "E pagara ", final)