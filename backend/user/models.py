from django.db import models
from plan.models import ExercisePlan

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    plans = models.ManyToManyField(ExercisePlan)

    def __str__(self):
        return self.name
