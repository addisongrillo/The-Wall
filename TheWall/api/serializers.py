from rest_framework import serializers
from django.contrib.auth.models import User
from TheWall.models import Post


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        many=False,
        queryset=User.objects.all(),
        slug_field='username'
 )
    class Meta:
        model = Post
        fields = ('url', 'id', 'content', 'user', 'user_id')


class UserSerializer(serializers.ModelSerializer):
    user_posts = PostSerializer(many=True, required=False, allow_null=True)
    

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'first_name',
                  'last_name', 'password', 'user_posts')
