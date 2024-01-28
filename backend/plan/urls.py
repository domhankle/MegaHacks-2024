from django.urls import path
from . import views

urlpatterns = [
    path("plan/", views.getPlan, name="getPlan"),
    path("plan/create", views.createPlan, name="createPlan"),
    path("plan/plans", views.getAll, name="getAll")
]