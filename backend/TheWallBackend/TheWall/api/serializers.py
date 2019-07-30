from rest_framework import serializers
from django.contrib.auth.models import User
from TheWall.models import Post, Person


class PostSerializer(serializers.ModelSerializer):
    person = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='username'
 )
    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.person = validated_data.get('person', instance.person)
        return instance

    class Meta:
        model = Post
        fields = ('id', 'content', 'person')


class PersonSerializer(serializers.ModelSerializer):
    person_posts = PostSerializer(many=True, required=False, allow_null=True)
    

    class Meta:
        model = Person
        fields = ('username', 'email', 'first_name',
                  'last_name', 'password', 'person_posts')
