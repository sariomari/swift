# Generated by Django 4.2.2 on 2023-06-19 21:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='driver',
            old_name='order',
            new_name='order_id',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='customer',
            new_name='customer_id',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='store',
            new_name='store_id',
        ),
        migrations.RemoveField(
            model_name='driver',
            name='orders_done',
        ),
        migrations.RemoveField(
            model_name='store',
            name='items',
        ),
        migrations.AddField(
            model_name='driver',
            name='first_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='driver',
            name='last_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='driver',
            name='latitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AddField(
            model_name='driver',
            name='longitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AddField(
            model_name='item',
            name='store',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='playground.store'),
        ),
        migrations.AddField(
            model_name='store',
            name='Area',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='store',
            name='Zone',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
        migrations.AlterField(
            model_name='customer',
            name='first_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customer',
            name='last_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customer',
            name='latitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='customer',
            name='longitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='customer',
            name='password',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='customer',
            name='username',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='driver',
            name='driver_password',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='driver',
            name='driver_username',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='description',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='price',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='item',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='store',
            name='latitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='store',
            name='longitude',
            field=models.DecimalField(decimal_places=6, default=0.0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='store',
            name='store_name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
