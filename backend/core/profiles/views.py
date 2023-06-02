from django.http import HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.views import APIView
import requests




class RegisterAPIView(APIView):
    """Регистрация пользователя"""       
    def get (self, request, uid, token):
        """Активация пользователя"""
        activate_url = 'http://localhost:8000/api/v1/users/activation/'
        user_data = {"uid": uid, "token": token}
        result = requests.post(activate_url, data=user_data)
        if result.status_code == 204 or 403:
            return Response('http://localhost:3000/') # 204 всё хорошо, 403 пользователь активен.
        else:
            return Response(bytes("тут будет редирект на страницу ошибки", 'utf-8')) #error 400


class PasswordResetAPIView(APIView):
    """Сброс пароля чере email"""
    def post(self, request, uid, token):
            reset_password_url = 'http://localhost:8000/api/v1/users/reset_password_confirm/'
            new_password = request.data['new_password']
            re_password = self.request.data['re_password']
            user_data = {"uid": uid, 
                        "token": token,
                        "new_password": new_password,
                        "re_password": re_password
                        }
            result = requests.post(reset_password_url, data=user_data)
            if result.status_code == 204:
                return HttpResponseRedirect(redirect_to='/login') # 204 всё хорошо, 403 пользователь активен.
            else:
                return Response(bytes("тут будет редирект на страницу ошибки", 'utf-8')) 
            
        #     def get (self, request):
        # """Активация пользователя"""
        # activate_url = 'http://localhost:8000/api/v1/users/activation/'
        # # authorization_url = 'http://localhost:8000/api/v1/token/'
        # # user_data = {"uid": uid, "token": token}
        # url = ' http://localhost:8000/auth/token/login/'
        # uid = request.data["uid"]
        # token = request.data['token']
        # userData = {
        #      "uid": uid,
        #      "token": token
        # }
        # result = requests.post(activate_url, data=userData)
        # if result.status_code == 204 or result.status_code == 403:
        #     uid = request.data["uid"]
        #     token = request.data['token']
        #     userData = {
        #         "uid": request.data["uid"],
        #         "token": request.data["token"],
        #         "email": request.data["email"],
        #         "password": request.data["password"]
        #     }
        #     result = requests.post(url, data=userData)

        #     return HttpResponse(result) # 204 всё хорошо, 403 пользователь активен.
        # else:
        #     return Response(bytes("тут будет редирект на страницу ошибки", 'utf-8'))