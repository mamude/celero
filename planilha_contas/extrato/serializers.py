from rest_framework import serializers
from .models import Movimentacao


# Movimentacao
class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = '__all__'
