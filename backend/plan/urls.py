from django.urls import path
from . import views

urlpatterns = [
    path("plan/", views.getPlan, name="getPlan")
]