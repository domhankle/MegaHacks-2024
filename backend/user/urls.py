from django.urls import path
from . import views

urlpatterns = [
    path("user/", views.createUser, name="createUser"),
    path("user/", views.login, name="login")
]