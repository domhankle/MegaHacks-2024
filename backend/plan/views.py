from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Exercise, ExercisePlan
from user.models import User
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def createPlan(request):
    request_data = json.loads(request.body.decode('utf-8'))
    new_plan = ExercisePlan.objects.create(name=request_data.get('name'))
    
    for e in request_data.get('exercises', []):
        new_plan.exercises.add(Exercise.objects.create(name=e.get('name'), reps=e.get('reps'), sets=e.get('sets')))
    
    user_id = request_data.get('userid')
    user = User.objects.get(id=user_id)
    user.plans.add(new_plan)
    user.save()

    response_data = {
        'name': new_plan.name,
        'userid': user.id,
        'exercises': list(new_plan.exercises.values('name', 'reps', 'sets'))
    }

    return JsonResponse(response_data)


def getAll(request):
    userid = request.GET.get('userid')
    user = User.objects.get(id=userid)
    plans = user.plans.all()
    output = []

    for plan in plans:
        output.append({
            'name': plan.name,
            'id': plan.id,
            'exercises': list(plan.exercises.values('name', 'reps', 'sets'))
        })

    return JsonResponse(output, safe=False)

def deleteAll(request):
    Exercise.objects.all().delete()
    ExercisePlan.objects.all().delete()
    return JsonResponse({"status":"success?"})


@csrf_exempt 
def deletePlan(request):
    request_data = json.loads(request.body.decode('utf-8'))
    id_param = request_data.get('userid')

    user = User.objects.get(id=id_param)
    user.plans.remove(request_data.get('planid'))
    user.save()

    return JsonResponse({'id': id_param})


    











