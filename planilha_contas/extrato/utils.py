import locale

def formatar_valor(valor):
    # formatar moeda padrão brasileiro
    locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
    valor = locale.currency(valor, grouping=True, symbol='R$')
    return valor

def formatar_data(data):
    return data.strftime('%d/%m/%Y %H:%M:%S %Z')