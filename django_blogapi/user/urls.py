from django.db import router
from django.urls.conf import path
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import UserViewSet

router = DefaultRouter()
router.register('signup', UserViewSet)

urlpatterns=[
    path('',include(router.urls))
]