from rest_framework import routers
from .api import MovimentacaoViewSet

router = routers.DefaultRouter()
router.register('api/extrato', MovimentacaoViewSet, 'extrato')

urlpatterns = router.urls
