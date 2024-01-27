from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Exercise, ExercisePlan


# Create your views here.

def getPlan(request):
    pushups = Exercise.objects.create(name="Push-up", reps=10, sets=3)
    squats = Exercise.objects.create(name="Squats", reps=15, sets=3)
    exercise_plan = ExercisePlan.objects.create(name="Workout 1")
    exercise_plan.exercises.add(pushups)

    data = {
        'name': exercise_plan.name,
        'exercises': list(exercise_plan.exercises.values('name', 'reps', 'sets'))
    }

    return JsonResponse(data)


def createPlan(request):
    new_plan = ExercisePlan.objects.create(name=request.data['name'])
    
    for e in request.exercises:
        new_plan.exercises.add(Exercise.objects.create(name=e.name, rep=e.reps, sets=e.sets))
    
    new_plan.save()


def getAll(request):
    plans = ExercisePlan.objects.all()
    output = []

    for plan in plans:
        output.append({
            'name': plan.name,
            'exercises': list(plan.exercises.values('name', 'reps', 'sets'))
        })

    return JsonResponse(output, safe=False)






