# Generated by Django 4.1.3 on 2022-12-06 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='answer',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='link',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]
