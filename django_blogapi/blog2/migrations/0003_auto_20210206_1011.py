# Generated by Django 3.1.6 on 2021-02-06 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog2', '0002_auto_20210205_1934'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogcomment',
            name='author',
        ),
        migrations.AddField(
            model_name='blogcomment',
            name='ip',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='blogcomment',
            name='name',
            field=models.CharField(default='Annoymous', max_length=100),
        ),
    ]
