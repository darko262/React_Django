# Generated by Django 3.2.16 on 2023-06-22 23:28

import apps.language.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('language', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='language',
            name='imagen',
            field=models.ImageField(default=1, max_length=500, upload_to=apps.language.models.lenguaje_thumbnail_directory),
            preserve_default=False,
        ),
    ]