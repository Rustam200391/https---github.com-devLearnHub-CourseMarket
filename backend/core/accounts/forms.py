# from django import forms
# from django.contrib.auth.models import User
# from .models import Profile

# class RegistrationForm(forms.ModelForm):
#     password1 = forms.CharField(widget=forms.PasswordInput)
#     password2 = forms.CharField(widget=forms.PasswordInput)

#     class Meta:
#         model = Profile
#         fields = ['name', 'surname', 'phone_number', 'email', 'password1', 'password2']

#     def clean(self):
#         cleaned_data = super().clean()
#         password1 = cleaned_data.get('password1')
#         password2 = cleaned_data.get('password2')

#         if password1 and password2 and password1 != password2:
#             raise forms.ValidationError('Пароли не совпадают.')

#         return cleaned_data

#     def save(self, commit=True):
#         instance = super().save(commit=False)
#         user = User.objects.create_user(username=self.cleaned_data['email'],
#                                         email=self.cleaned_data['email'],
#                                         password=self.cleaned_data['password1'])
#         instance.user = user

#         if commit:
#             instance.save()
#         else:
#             print('Что то пошло не так')

#         return instance


# class LoginForm(forms.Form):
#     username = forms.CharField()
#     password = forms.CharField(widget=forms.PasswordInput)