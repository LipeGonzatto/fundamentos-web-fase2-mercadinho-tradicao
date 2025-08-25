# fundamentos-web-fase2-mercadinho-tradicao
Fase 2 do projeto da disciplina de Fundamentos de Sistemas Web.
Ajustes realizados em relação à fase 1:
Inclusão do Bootstrap 5 para carrossel, grid e cartões.
Criação de estilos mínimos em styles.css para contraste e layout.
Implementação de saudação dinâmica baseada no horário.
Formulário de cadastro com validação HTML5 e JavaScript, incluindo máscaras de CPF e telefone.
Agendamento com data mínima a partir de hoje e janela de horário entre 08:00 e 20:00.
Alternância dinâmica de campos quando selecionada tele-entrega (endereços para entrega).
Acessibilidade: textos alternativos em todas as imagens, labels associadas a inputs, aria-live para as mensagens do formulário, uso de header, main e footer, e foco em contraste.

Recursos usados:
CSS e Bootstrap (carrossel, grid e componentes).
JavaScript para funções temporais, validação e interação do formulário.

Formulário de cadastro e agendamento:
Campos: nome, CPF, e-mail, telefone, sexo, endereço.
Escolha do serviço: retirada no local ou tele-entrega.
Calendário de data e horário.
Regras: data mínima igual ao dia atual; horários aceitos entre 08:00 e 20:00; exibição do endereço de entrega apenas quando tele-entrega é selecionada.

Acessibilidade implementada:
Atributo alt nas imagens do carrossel e dos produtos.
Labels com atributo for e associação a todos os campos do formulário.
Região com aria-live para informar erros e sucesso no envio do formulário.
Estrutura semântica com header, main e footer.
