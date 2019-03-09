from rest_framework import viewsets, permissions
from .serializers import MovimentacaoSerializer
from .models import Movimentacao


class MovimentacaoViewSet(viewsets.ModelViewSet):
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer
    #permission_classes = (permissions.IsAuthenticated, )