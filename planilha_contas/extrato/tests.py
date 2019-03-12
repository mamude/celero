from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate, APIClient
from model_mommy import mommy
from .models import Movimentacao


class TestMovimentacao(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='admin', email='mamude@gmail.com', password='1234')
        self.movimentacao = mommy.make(Movimentacao, tipo='E', descricao='Teste descrição', valor=1.32)
    
    def test_movimentacao_user_creation(self):
        self.assertTrue(isinstance(self.movimentacao, Movimentacao))
        self.assertEqual(self.user.username, 'admin')
        self.assertEqual(self.user.email, 'mamude@gmail.com')
        
    def test_authentication(self):                
        params = {'username':self.user.username, 'password':'1234'}
        response = self.client.post('/api/auth/login', params, format='json')
        self.assertEqual(response.data['user']['username'], 'admin')
        self.assertEqual(response.data['user']['email'], 'mamude@gmail.com')

    def teste_api_create_entrada_movimentacao(self):
        params = {'tipo': 'E', 'descricao': 'Salario Mensal', 'valor': '3000'}
        self.client.force_authenticate(user=self.user)
        response = self.client.post('/api/extrato/', params, format='json')
        self.assertEqual(response.data['tipo'], 'Entrada')
        self.assertEqual(response.data['descricao'], 'Salario Mensal')
        self.assertEqual(response.data['valor'], 'R$ 3.000,00')
    
    def teste_api_create_saida_movimentacao(self):
        params = {'tipo': 'S', 'descricao': 'Plano de Saude', 'valor': '185.30'}
        self.client.force_authenticate(user=self.user)
        response = self.client.post('/api/extrato/', params, format='json')
        self.assertEqual(response.data['tipo'], 'Saída')
        self.assertEqual(response.data['descricao'], 'Plano de Saude')
        self.assertEqual(response.data['valor'], 'R$ -185,30')
