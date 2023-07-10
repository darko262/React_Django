from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Post)
# @admin.register(Language)
# class LanguageAdmin(admin.ModelAdmin):
#     list_display = ('name', 'slug')
