# Generated by Django 3.0.6 on 2020-06-28 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0012_auto_20200628_1317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='Installement',
            field=models.CharField(choices=[('تقسيط', 'تقسيط'), ('كاش', 'كاش')], default='تقسيط', max_length=12),
        ),
    ]
