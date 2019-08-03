from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from TheWall.models import Post
from .serializers import PostSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'key': token.key, 'username': token.user.username})


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def email(request):
    params = request.GET
    email = params.__getitem__('email')
    send_mail('Welcome To The Wall!', 
    'Thank you for joining The Wall.', 
    "thewallapp2019@gmail.com", 
    ['%s'%(email)], 
    fail_silently = False)
    return JsonResponse({'email':'sent'})