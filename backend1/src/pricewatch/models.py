
from django.db import models

# Create your models here.

class PriceWatch(models.Model):
    #entryId = models.AutoField()
    province = models.CharField("Province",max_length = 30, blank=True)
    entryDate = models.DateField("Date",auto_now_add=True)
    NFA = models.CharField(max_length=30, blank=True)
    Local_Special = models.CharField(max_length=30, blank=True)
    Local_Premium = models.CharField(max_length=30, blank=True)
    Local_Well_milled = models.CharField(max_length=30, blank=True)
    Local_Regular_milled = models.CharField(max_length=30, blank=True)
    Bangus = models.CharField(max_length=30, blank=True)
    Tilapia = models.CharField(max_length=30, blank=True)
    Local_Galunggong = models.CharField(max_length=30, blank=True)
    Alumahan = models.CharField(max_length=30, blank=True)
    Ampalaya = models.CharField(max_length=30, blank=True)
    Sitao = models.CharField(max_length=30, blank=True)
    Pechay = models.CharField(max_length=30, blank=True)
    Squash = models.CharField(max_length=30, blank=True)
    Eggplant = models.CharField(max_length=30, blank=True)
    Tomato = models.CharField(max_length=30, blank=True)
    Cabbage = models.CharField(max_length=30, blank=True)
    Carrots = models.CharField(max_length=30, blank=True)
    White_Potato = models.CharField(max_length=30, blank=True)
    Pechay = models.CharField(max_length=30, blank=True)
    Chayote = models.CharField(max_length=30, blank=True)
    Local_Red_Onion = models.CharField(max_length=30, blank=True)
    Imported_Red_Onion = models.CharField(max_length=30, blank=True)
    Local_White_Onion = models.CharField(max_length=30, blank=True)
    Local_Garlic = models.CharField(max_length=30, blank=True)
    Ginger = models.CharField(max_length=30, blank=True)
    Chili = models.CharField(max_length=30, blank=True)
    Calamansi = models.CharField(max_length=30, blank=True)
    Banana_Lakatan = models.CharField(max_length=30, blank=True)
    Banana_Latundan = models.CharField(max_length=30, blank=True)
    Papaya = models.CharField(max_length=30, blank=True)
    Mango = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.province

class Farmer(models.Model):
    farmer_name = models.CharField(max_length=200, blank= False)
    number = models.CharField(max_length=20, blank = False)