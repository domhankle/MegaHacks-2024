from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User, Achievement
from plan.models import ExercisePlan, Exercise
import json
import hashlib

# Create your views here.
@csrf_exempt
def createUser(request):
    user_data = json.loads(request.body.decode('utf-8'))
    new_user = User.objects.create(username=user_data.get('username'))

    encoded_pass = user_data.get('password').encode()
    sha256_hash = hashlib.sha256()
    sha256_hash.update(encoded_pass)
    hashed_pass = sha256_hash.hexdigest()

    new_user.password = hashed_pass

    new_user.achievements.add(Achievement.object.create(name="First Session", description="Completed first workout session.", level=0))

    new_user.save()
    
    return "Successss"

@csrf_exempt
def login(request):
    try:
        user_data = json.loads(request.body.decode('utf-8'))
        user = User.objects.get(user_data.get('username'))

        encoded_pass = user_data.get('password').encode()
        sha256_hash = hashlib.sha256()
        sha256_hash.update(encoded_pass)
        hashed_pass = sha256_hash.hexdigest()

        if hashed_pass == user.password:
            return JsonResponse({'result':True, 'id':user.id})
        else:
            return JsonResponse({'result': False, 'error': 'Incorrect Password'}, status=401)
    except User.DoesNotExist:
        return JsonResponse({'result': False, 'error': 'User not found'}, status=404)

@csrf_exempt
def getUser(request):
    request_data = json.loads(request.body.decode('utf-8'))
    user = User.objects.get(request_data.get('id'))
    output = []

    for plan in User.plans:
        output.append({
            'name': plan.name,
            'exercises': list(plan.exercises.values('name', 'reps', 'sets')),
            'achievements': list(user.achievements.values('name', 'level'))
        })

    return JsonResponse(output, safe=False)
    

