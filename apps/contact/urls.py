from django.urls import path
from .views import *

urlpatterns = [
    path('posts', ContactCreateView.as_view()),
    
]