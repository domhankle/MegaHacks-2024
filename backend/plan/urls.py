from django.urls import path
from . import views

urlpatterns = [
    path("plan/create", views.createPlan, name="createPlan"),
    path("plan/plans", views.getAll, name="getAll"),
    path("plan/delete", views.deletePlan, name="deletePlan"),
    path("plan/deleteAll", views.deleteAll, name="deleteAll")
]