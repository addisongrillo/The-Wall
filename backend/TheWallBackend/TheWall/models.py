from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Person(User):
    class Meta:
        proxy = True
        
    def __unicode__(self):
        return self.username

class Post(models.Model):
    content = models.TextField()
    person = models.ForeignKey(
        Person, on_delete=models.CASCADE, related_name="person_posts", null=True)

    def __str__(self):
        return self.content

