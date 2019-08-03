import json
from rest_framework import status
from django.test import TestCase, Client
from .models import Post
from django.contrib.auth.models import User
from .api.serializers import PostSerializer, UserSerializer
from .api.views import PostView, UserView
from rest_framework.test import APIRequestFactory


# initialize the APIClient app
client = Client()

class GetAllPostsTest(TestCase):

    def setUp(self):
        User.objects.create(
            username='addison', password='addisonpassword', email='addison@addison.com')
        User.objects.create(
            username='bob', password='bobpassword', email='bob@bob.com')

    def test_create_user(self):
        request = APIRequestFactory().get("/users/")
        user = User.objects.create(username="fred", password="fredpassword", email="fred@email.cmo")
        user_detail = UserView.as_view({'get': 'retrieve'})
        response = user_detail(request, pk=user.pk)
        self.assertEqual(response.status_code, 200)
    
    def test_create_post(self):
        request = APIRequestFactory().get("/posts/")
        post = Post.objects.create(content="bob", user_id=1)
        post_detail = PostView.as_view({'get': 'retrieve'})
        response = post_detail(request, pk=post.pk)
        self.assertEqual(response.status_code, 200)