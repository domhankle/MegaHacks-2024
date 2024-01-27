from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.

def getPlan(request):
    return JsonResponse({"Exercises":["Push-ups", "Sit-ups", "Pull-ups"]})



