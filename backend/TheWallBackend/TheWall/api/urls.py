from django.urls import path, include
from django.conf.urls import url
from . import views
from rest_framework import routers
from .views import CustomObtainAuthToken


router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('posts', views.PostView)


urlpatterns = [
    path('', include(router.urls)),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    path('email/', views.email),
]
