from django.db import models

# Create your models here.

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class ExercisePlan(models.Model):
    name = models.CharField(max_length=100)
    userid = models.PositiveIntegerField()
    exercises = models.ManyToManyField(Exercise)

    def __str__(self):
        return self.name
