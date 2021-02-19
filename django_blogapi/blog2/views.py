from rest_framework import viewsets
from .models import Blog, BlogTag, BlogComment
from .serializers import BlogSerializer, BlogTagSerializer, BlogCommentSerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset =Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

class BlogTagViewSet(viewsets.ModelViewSet):
    queryset =BlogTag.objects.all()
    serializer_class = BlogTagSerializer

class BlogCommentViewSet(viewsets.ModelViewSet):
    queryset =BlogComment.objects.all()
    serializer_class = BlogCommentSerializer
