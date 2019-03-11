import locale
from rest_framework import serializers
from .models import Movimentacao, TIPO_MOVIMENTO


# Movimentacao
class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = '__all__'
    
    def to_representation(self, obj):
        # formatar moeda padrão brasileiro
        locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
        valor = locale.currency(obj.valor, grouping=True, symbol='R$')

        # formatar data padrão brasileiro
        data = obj.data.strftime('%d/%m/%Y %H:%M:%S')

        # formatar tipo de movimentação
        tipo = [t for t in TIPO_MOVIMENTO if t[0] == obj.tipo]
        
        # retornar nova estrutura
        return {
            'id': obj.id,
            'data': data,
            'tipo': tipo[0][1],
            'descricao': obj.descricao,
            'valor': valor
        }
