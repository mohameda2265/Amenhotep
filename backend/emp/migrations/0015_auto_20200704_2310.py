# Generated by Django 3.0.6 on 2020-07-04 21:10

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0014_auto_20200629_0604'),
    ]

    operations = [
        migrations.AlterField(
            model_name='existence',
            name='NID',
            field=models.CharField(max_length=14, validators=[django.core.validators.RegexValidator(message='National ID must be entered exactly 14 digits.', regex='^(\\d{14})$')]),
        ),
    ]