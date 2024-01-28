from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Exercise, ExercisePlan
from user.models import User
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
from django.views.decorators.csrf import csrf_exempt

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

@csrf_exempt 
def createPlan(request):
    request_data = json.loads(request.body.decode('utf-8'))
    new_plan = ExercisePlan.objects.create(name=request_data.get('name'))
    
    for e in request_data.get('exercises', []):
        new_plan.exercises.add(Exercise.objects.create(name=e.get('name'), reps=e.get('reps'), sets=e.get('sets')))
    
    new_plan.save()

    response_data = {
        'name': new_plan.name,
        'id': new_plan.id,
        'exercises': list(new_plan.exercises.values('name', 'reps', 'sets'))
    }

    return JsonResponse(response_data)

# @csrf_exempt 
# def createPlan(request):
#     request_data = json.loads(request.body.decode('utf-8'))
#     new_plan = ExercisePlan.objects.create(name=request_data.get('name'))
    
#     for e in request_data.get('exercises', []):
#         new_plan.exercises.add(Exercise.objects.create(name=e.get('name'), reps=e.get('reps'), sets=e.get('sets')))
    
#     user = User.objects.get(request_data.get('id'))
#     user.plans.add(new_plan)
#     user.save()

#     response_data = {
#         'name': new_plan.name,
#         'userid': user.id,
#         'exercises': list(new_plan.exercises.values('name', 'reps', 'sets'))
#     }

#     return JsonResponse(response_data)


def getAll(request):
    plans = ExercisePlan.objects.all()
    output = []

    for plan in plans:
        output.append({
            'name': plan.name,
            'exercises': list(plan.exercises.values('name', 'reps', 'sets'))
        })

    return JsonResponse(output, safe=False)

def deleteAll(request):
    Exercise.objects.all().delete()
    ExercisePlan.objects.all().delete()
    return "DUBDUBDUBDUBDUBDUBDUBDUB"

def deletePlan(request):
    request_data = json.loads(request.body.decode('utf-8'))

    plan = ExercisePlan.object.get(id=request.get("id"))
    plan.delete()

    return "killinIS ISI SMYSLESF"


    











