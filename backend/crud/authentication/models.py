from django.db import models
from django.contrib.auth.models import AbstractUser 
from django.contrib.auth.base_user import BaseUserManager





class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Email is a required field")
        
        email = self.normalize_email(email)  # Corrected spelling
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)  # Corrected spelling

        return user
    
    def create_superuser(self, email, password=None, **kwargs):
        kwargs.setdefault("is_staff", True)
        kwargs.setdefault("is_superuser", True)
        return self.create_user(email, password, **kwargs)

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=100, unique=True)
    birthday = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=100, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

