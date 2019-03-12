from django.apps import AppConfig
from django.db.models.signals import pre_save
from .signals import signal_preco_negativo


class ExtratoConfig(AppConfig):
    name = 'extrato'

    def ready(self):
        movimentacao = self.get_model('Movimentacao')
        pre_save.connect(signal_preco_negativo, sender=movimentacao, dispatch_uid="__sgn_preco_negativo")
