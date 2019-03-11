import locale
from rest_framework import serializers
from .models import Movimentacao, TIPO_MOVIMENTO
from .utils import formatar_valor


# Movimentacao
class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = '__all__'
    
    def to_representation(self, obj):
        # formatar moeda padrão brasileiro
        try:
            valor = formatar_valor(obj.valor)
        except:
            valor = formatar_valor(float(obj.valor))

        # formatar data padrão brasileiro
        data = obj.data.strftime('%d/%m/%Y %H:%M:%S %Z')

        # formatar tipo de movimentação
        tipo = [t for t in TIPO_MOVIMENTO if t[0] == obj.tipo]
        try:
            # leitura
            tipo = tipo[0][1]
        except:
            # gravacao, não realizar nenhum tratamento (bug de conversão para negativo)
            pass
        
        # retornar nova estrutura
        return {
            'id': obj.id,
            'data': data,
            'tipo': tipo,
            'descricao': obj.descricao,
            'valor': valor
        }  

    def to_internal_value(self, data):
        # se a movimentação for tipo `Saída`, salvar o valor negativo
        if data['tipo'] == 'S':
            data['valor'] = -float(data['valor'])
        return data