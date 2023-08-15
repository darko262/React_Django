from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer
from apps.language.serializers import LanguageSerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    languages = LanguageSerializer(many=True)
    
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'media_file',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'languages',
        ]

class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    languages = LanguageSerializer(many=True)
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'media_file',
            'description',
            'time_read',
            'published',
            'views',
            'category',
            'languages',
        ]