# Generated by Django 5.0.1 on 2024-01-28 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('level', models.PositiveIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='achievements',
            field=models.ManyToManyField(to='user.achievement'),
        ),
    ]
