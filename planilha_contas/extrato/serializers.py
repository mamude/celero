import locale
from rest_framework import serializers
from .models import Movimentacao, TIPO_MOVIMENTO
from .utils import formatar_valor, formatar_data

# Movimentacao
class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = '__all__'
    
    def to_representation(self, obj):
        # formatar moeda padrão brasileiro
        valor = formatar_valor(obj.valor)        
        # formatar data padrão brasileiro
        data = formatar_data(obj.data)
        # formatar tipo de movimentação
        tipo = [t for t in TIPO_MOVIMENTO if t[0] == obj.tipo]    
        tipo = tipo[0][1]        
        
        # retornar nova estrutura
        return {
            'id': obj.id,
            'data': data,
            'tipo': tipo,
            'descricao': obj.descricao,
            'valor': valor
        }  

    def to_internal_value(self, data):        
        if data['valor'] and data['tipo'] == 'S':
            data['valor'] = -float(data['valor'])
            return data
        else:
            data = super().to_internal_value(data)
            return data