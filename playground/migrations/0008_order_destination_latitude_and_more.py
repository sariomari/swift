# Generated by Django 4.2.2 on 2023-06-22 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0007_rename_items_cart_itemsincart'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='destination_latitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AddField(
            model_name='order',
            name='destination_longitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
    ]
