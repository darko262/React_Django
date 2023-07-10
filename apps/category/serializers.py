from rest_framework import serializers
from .models import *
#lo convertimos a formatos json del modelo de la categoria, esto se hace para poder leerka en reatct
#
class CategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model=Category
        fields=[
            'id', #siempre existe
            'name',
            'slug',
            'views',
        ]