from django.urls import include, path

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('extrato.urls')),
    path('api-auth/', include('rest_framework.urls'))
]
