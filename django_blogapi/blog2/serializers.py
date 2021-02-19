from django.db.models import fields
from rest_framework import serializers
from .models import BlogTag, Blog, BlogComment
from user.serializers import  UserSerializer

class BlogTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogTag
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):
    tag = BlogTagSerializer(many=True)
    author = UserSerializer(read_only = True)
    author_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Blog
        fields = '__all__'
        lookup_field = 'slug'

class BlogCommentSerializer(serializers.ModelSerializer):
    blog = BlogSerializer(read_only = True)
    blog_id = serializers.IntegerField(write_only=True)
    author = UserSerializer(read_only = True)
    author_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = BlogComment
        fields = '__all__'