# Generated by Django 2.2 on 2019-04-20 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='player_one',
            field=models.TextField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='player_two',
            field=models.TextField(max_length=20, unique=True),
        ),
    ]
