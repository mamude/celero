from django.db import models

TIPO_MOVIMENTO = (
    ('E', 'Entrada'),
    ('S', 'Saída'),
)


class Movimentacao(models.Model):
    tipo = models.CharField(max_length=1, choices=TIPO_MOVIMENTO)
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    data = models.DateTimeField(auto_created=True, auto_now=True)

    class Meta:
        ordering = ('data',)
