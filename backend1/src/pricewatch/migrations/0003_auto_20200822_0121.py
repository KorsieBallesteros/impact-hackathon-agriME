# Generated by Django 3.1 on 2020-08-21 17:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pricewatch', '0002_auto_20200819_1615'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pricewatch',
            name='Habitchuelas',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Galunggong',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Garlic',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Premium',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Regular_milled',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Special',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_Well_milled',
        ),
        migrations.RemoveField(
            model_name='pricewatch',
            name='Imported_White_Onion',
        ),
    ]
