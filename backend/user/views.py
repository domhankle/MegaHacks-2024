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

    # new_user.achievements.add(Achievement.object.create(name="First Session", description="Completed first workout session.", level=0))

    new_user.save()

    response = {
        'id': new_user.id,
        'username': new_user.username,
        'password': user_data.get('password')
    }

    
    
    return JsonResponse(response)

@csrf_exempt
def login(request):
    try:
        username = request.GET.get('username')
        password = request.GET.get('password')

        user = User.objects.get(username=username)

        encoded_pass = password.encode()
        sha256_hash = hashlib.sha256()
        sha256_hash.update(encoded_pass)
        hashed_pass = sha256_hash.hexdigest()

        if hashed_pass == user.password:
            return JsonResponse({'result':True, 'id':user.id})
        else:
            return JsonResponse({'result': False, 'error': 'Incorrect Password'}, status=401)
    except User.DoesNotExist:
        return JsonResponse({'result': False, 'error': 'User not found'}, status=404)


    

