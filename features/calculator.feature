Feature: Calculator
  Para que eu possa realizar calculos matemáticos
  Como um usuário
  Eu quero ter uma calculadora

  Scenario Outline: Sum
    Given estou na página de calculadora
    When eu somo os números <num1> e <num2>
    Then eu devo receber <result> como resultado
    Examples:
      | num1 | num2 | result |
      | 5    | 2    | 7      |
      | 3    | 2    | 5      |
      | 1    | 2    | 3      |

  Scenario Outline: Subtract
    Given estou na página de calculadora para subtrair
    When eu subtraio os números <num1> e <num2>
    Then eu devo receber <result> como resultado da subtração
    Examples:
      | num1 | num2 | result |
      | 5    | 2    | 3      |
      | 3    | 2    | 1      |
      | 1    | 2    | -1     |