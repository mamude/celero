# Para movimentação do tipo `Saída`, salvar o valor negativo
def signal_preco_negativo(sender, **kwargs):
    model = kwargs['instance']
    if model.tipo == 'S':
        model.valor = -model.valor    