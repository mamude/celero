from django.test import TestCase
from model_mommy import mommy
from .models import Movimentacao

class TestMovimentacao(TestCase):

    def setUp(self):
        self.movimentacao = mommy.make(Movimentacao, tipo='E', descricao='Teste descrição', valor=1.32)
    
    def test_movimentacao_creation(self):
        self.assertTrue(isinstance(self.movimentacao, Movimentacao))
