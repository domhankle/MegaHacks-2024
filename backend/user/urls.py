from django.urls import path
from . import views

urlpatterns = [
    path("user/create", views.createUser, name="createUser"),
    path("user/login", views.login, name="login"),
]