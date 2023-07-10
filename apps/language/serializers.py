from rest_framework import serializers
from .models import *
#lo convertimos a formatos json del modelo de la categoria, esto se hace para poder leerka en reatct
#
class LanguageSerializer(serializers.ModelSerializer):
    class Meta: 
        model=Language
        fields=[
            'id', #siempre existe
            'name',
            'slug',
            'imagen',
            
        ]