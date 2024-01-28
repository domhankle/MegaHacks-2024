from django.db import models
from plan.models import ExercisePlan

# Create your models here.

class Achievement(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    level=models.PositiveIntegerField()
    


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    # completions = models.PositiveIntegerField()
    plans = models.ManyToManyField(ExercisePlan)
    # achievements = models.ManyToManyField(Achievement)

    def __str__(self):
        return self.name
