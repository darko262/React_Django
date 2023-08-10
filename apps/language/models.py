from django.db import models

# Create your models here.
def lenguaje_thumbnail_directory(instance, filename):
    return 'language/{0}/{1}'.format(instance.name, filename)
class Language(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    imagen =  models.ImageField(upload_to=lenguaje_thumbnail_directory, max_length=500, blank=True)
  

    def __str__(self):
        return self.name    