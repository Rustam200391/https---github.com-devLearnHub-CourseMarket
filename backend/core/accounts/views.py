# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from django.contrib.auth.models import User
# from .serializers import ProfileSerializer

# class RegisterView(APIView):
#     def post(self, request):
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             user = User.objects.create_user(username=serializer.validated_data['username'],
#                                             mobile=serializer.validated_data['mobile'],
#                                             mail=serializer.validated_data['mail'],
#                                             password=serializer.validated_data['password'],
#                                             confirmPassword=serializer.validated_data['confirmPassword'])
                                            
#             profile = serializer.save(user=user)
#             return Response({'message': 'Пользователь успешно зарегистрирован!'}, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# # 
# # 
# # 
# # 
# # from django.shortcuts import render, redirect
# # from django.contrib.auth import authenticate, login
# # from .forms import RegistrationForm, LoginForm

# # def registration(request):
# #     if request.method == 'POST':
# #         form = RegistrationForm(request.POST)
# #         print("проверка на метод")
# #         if form.is_valid():
# #             form.save()
# #             print('Форму сохранили в БД')
# #             return redirect('login')
# #         else:
# #             print("форма невалидна")

# #     else:
# #         form = RegistrationForm()


# #     context = {'form': form}
# #     return render(request, 'signup.html', context)



# # def login_view(request):
# #     if request.method == 'POST':
# #         form = LoginForm(request.POST)
# #         print('проверка на метод')

# #         if form.is_valid():
# #             username = form.cleaned_data['username']
# #             password = form.cleaned_data['password']
# #             user = authenticate(username=username, password=password)
# #             if user is not None:
# #                 login(request, user)
# #                 print('шалость удалась')
# #                 return redirect('http404')
# #             else:
# #                 form.add_error(None, 'Неверный логин или пароль')
# #                 print("неверный логин или пароль")
# #         else:
# #             print('Неправильно заполнена форма')

# #     else:
# #         form = LoginForm()

# #     context = {'form': form}
# #     return render(request, 'signin.html', context)


# # def http404(request):
# #     return render(request, '404.html')

# # def main(request):
# #     return render(request, 'main.html')