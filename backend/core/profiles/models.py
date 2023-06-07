from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# from django.utils.translation import gettext_lazy as _

# Create your models here.
# class UserManager(BaseUserManager):
#     """диспетчер моделей для User по почте"""

#     use_in_migrations = True

#     def _create_user(self, email, password, **extra_fields):
#         """Cоздать и сохранить пользователя по почте"""
#         if not email:
#             raise ValueError("The given email must be set")
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_user(self, email, password=None, **extra_fields):
#         """Создать и сохранить обычного пользователя"""
#         extra_fields.setdefault("is_staff", False)
#         extra_fields.setdefault("is_superuser", False)
#         return self._create_user(email, password, **extra_fields)

#     def create_superuser(self, email, password, **extra_fields):
#         """Создать и сохранить суперюзера"""
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)

#         if extra_fields.get("is_staff") is not True:
#             raise ValueError("Superuser must have is_staff=True.")
#         if extra_fields.get("is_superuser") is not True:
#             raise ValueError("Superuser must have is_superuser=True.")

#         return self._create_user(email, password, **extra_fields)
    
    
class UserData(AbstractUser):
    """Модель пользователя"""
    email = models.EmailField(("email address"), unique=True)
    phoneNumber = PhoneNumberField(unique = True, null = False, blank = False, region="RU", verbose_name='номером телефона')
    username = models.CharField(max_length=200, verbose_name="login")
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["phoneNumber","username"]

    # objects = UserManager()


# class Women(models.Model):
#     """Для проверки и отладки тестовая модель"""
#     title = models.CharField(max_length=100)
#     content = models.TextField(blank=True)
#     create_time = models.DateTimeField(auto_now_add=True)
#     time_update = models.DateTimeField(auto_now=True)
#     is_published = models.BooleanField(default=True)
#     # cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)

#     def __str__(self):
#         return self.title


