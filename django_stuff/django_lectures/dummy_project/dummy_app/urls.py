from django.urls import path
from dummy_app import views

urlpatterns = [
    path('', views.index, name='index'),
]