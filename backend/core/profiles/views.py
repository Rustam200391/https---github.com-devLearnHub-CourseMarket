import json
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.views import APIView
import requests 





class RegisterAPIView(APIView):
       def post (self, request, uid, token):
        """Активация пользователя"""
        activate_url = 'http://localhost:8000/api/v1/users/activation/'
        authorization_url = 'http://localhost:8000/api/v1/token/'
        user_data = {"uid": uid, "token": token}
        result = requests.post(activate_url, data=user_data)
        if result.status_code == 204 or 403:
            result = requests.post(authorization_url, data=request.data) # 204 всё хорошо, 403 пользователь активен.
            return Response(result)
        else:
            return Response(bytes("тут будет редирект на страницу ошибки", 'utf-8')) #error 400


class PasswordResetAPIView(APIView):
    """Сброс пароля чере email"""
    def post(self, request, uid, token):
            reset_password_url = 'http://localhost:8000/api/v1/users/reset_password_confirm/'
            new_password = request.data['new_password']
            re_new_password = request.data['re_new_password']
            user_data = {"uid": uid, 
                        "token": token,
                        "new_password": new_password,
                        "re_new_password": re_new_password
                        }
            result = requests.post(reset_password_url, data=user_data)
            if result.status_code == 204:
                return Response(bytes("200", 'utf-8')) 
            else:
                return Response(bytes("тут будет редирект на страницу ошибки", 'utf-8'))


