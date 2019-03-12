from django.db.models import Sum
from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from decimal import Decimal
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
        valor = formatar_valor(Decimal('0.00'))
        if saldo['valor__sum'] is not None:
            valor = formatar_valor(saldo['valor__sum'])
        return Response({
            'saldo': valor
        })
    
    @action(detail=False)
    def order(self, request):
        data = self.request.user.movimentacoes.all()
        if 'descricao' in request.query_params:            
            if request.query_params['descricao'] == 'ASC':
                data = data.order_by('descricao')
            if request.query_params['descricao'] == 'DESC':
                data = data.order_by('-descricao')
        if 'valor' in request.query_params:            
            if request.query_params['valor'] == 'ASC':
                data = data.order_by('valor')
            if request.query_params['valor'] == 'DESC':
                data = data.order_by('-valor')

        if data is not None:
            serializer = self.get_serializer(data, many=True)
            return Response(serializer.data)
        else:
            return Response({'extratos': 'Sem registros'})
