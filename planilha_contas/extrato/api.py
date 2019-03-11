from django.db.models import Sum
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import MovimentacaoSerializer
from .models import Movimentacao
from .utils import formatar_valor


class MovimentacaoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]    
    serializer_class = MovimentacaoSerializer

    def get_queryset(self):
        return self.request.user.movimentacoes.all()
    
    def perform_create(self, serializer):        
        serializer.save(user=self.request.user)   

    @action(detail=False)
    def saldo(self, request):
        saldo = Movimentacao.objects.filter(user=request.user).aggregate(Sum('valor'))
        return Response({
            'saldo': formatar_valor(saldo['valor__sum'])
        })
