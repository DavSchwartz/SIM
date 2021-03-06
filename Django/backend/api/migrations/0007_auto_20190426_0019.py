# Generated by Django 2.2 on 2019-04-26 00:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20190424_1506'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='game_state',
            new_name='line_owner',
        ),
        migrations.AddField(
            model_name='game',
            name='current_player',
            field=models.TextField(default='/user/1/', max_length=30),
        ),
        migrations.AddField(
            model_name='game',
            name='player_one_lines',
            field=models.CharField(default=[], max_length=50, validators=[django.core.validators.int_list_validator]),
        ),
        migrations.AddField(
            model_name='game',
            name='player_two_lines',
            field=models.CharField(default=[], max_length=50, validators=[django.core.validators.int_list_validator]),
        ),
    ]
