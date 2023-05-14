from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class UserData(AbstractUser):
    phoneNumber = PhoneNumberField(unique = True, null = False, blank = False, region="RU")
    REQUIRED_FIELDS = ["phoneNumber"]


class Women(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    create_time = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    # cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.title




# # Create your models here.
# from django.db import models
# from django.contrib.auth.models import User


# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     username = models.CharField('Имя', max_length=50)
#     mobile = models.CharField("Номер телефона", max_length=20, blank=True)
#     mail = models.EmailField('Почта')
#     password = models.CharField('Пароль', max_length=50)
   

#     def str(self):
#         return self.username

#     class Meta:
#         verbose_name = 'Пользователь'
#         verbose_name_plural = 'Пользователи'