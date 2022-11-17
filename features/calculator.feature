Feature: Calculator
  Para que eu possa realizar calculos matemáticos
  Como um usuário
  Eu quero ter uma calculadora

  Scenario: Somar
    Given estou na página de calculadora
    When eu somo os números 1 e 2
    Then eu devo receber 3 como resultado
