# Generated by Django 3.0.6 on 2020-07-12 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0019_remove_requests_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='block',
            name='Number',
            field=models.IntegerField(),
        ),
    ]
