from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, BlogTagViewSet, BlogCommentViewSet
from django.urls import path, include
router= DefaultRouter()

router.register('blogs', BlogViewSet)
router.register('blog-tags', BlogTagViewSet)
router.register('blog-comments', BlogCommentViewSet)

urlpatterns = [
    path('',include(router.urls) )
]