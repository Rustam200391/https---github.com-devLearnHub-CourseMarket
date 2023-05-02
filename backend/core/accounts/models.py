from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField("Номер телефона", max_length=20, blank=True)
    name = models.CharField('Имя', max_length=50)
    surname = models.CharField('Фамилия', max_length=50)
    email = models.EmailField('Почта')
    password1 = models.CharField('Пароль', max_length=50)
    password2 = models.CharField('Повторите пароль', max_length=50)

    def str(self):
        return self.name

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'