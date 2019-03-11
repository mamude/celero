from rest_framework import viewsets, permissions
from .serializers import MovimentacaoSerializer
from .models import Movimentacao


class MovimentacaoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]    
    serializer_class = MovimentacaoSerializer

    def get_queryset(self):
        return self.request.user.movimentacoes.all()
    
    def perform_create(self, serializer):        
        serializer.save(user=self.request.user)
    