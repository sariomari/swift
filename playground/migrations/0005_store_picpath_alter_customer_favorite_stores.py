# Generated by Django 4.2.2 on 2023-06-22 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0004_rename_area_store_area_rename_zone_store_zone_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='picpath',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customer',
            name='favorite_stores',
            field=models.ManyToManyField(blank=True, related_name='favorited_by', to='playground.store'),
        ),
    ]
