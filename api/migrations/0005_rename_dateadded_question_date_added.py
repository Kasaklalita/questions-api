# Generated by Django 4.1.4 on 2022-12-28 15:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_video'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='dateAdded',
            new_name='date_added',
        ),
    ]
