from django.shortcuts import render

# Create your views here.
"""для регистрации"""
from rest_framework import generics , views
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import *
"""для логина"""
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

# from .models import AddArticles
from rest_framework.permissions import IsAuthenticated



class WomenAPI(generics.UpdateAPIView):
    queryset = Women.objects.all()              # использовал для отладки
    serializer_class = WomenSerializer
    # permission_classes = []


        