from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from TheWall.models import Post
from .serializers import PostSerializer, UserSerializer
from django.db.models import Q
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


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


    # def get_queryset(self, *args, **kwargs):
    #     queryset_list = Post.objects.all()
    #     query = self.request.GET.get("q")
    #     if query:
    #         queryset_list = queryset_list.filter(
    #             Q(name__icontains=query) |
    #             Q(user__first_name__icontains=query) |
    #             Q(user__last_name__icontains=query) |
    #             Q(user__username__icontains=query)
    #         ).distinct()
    #     return queryset_list
