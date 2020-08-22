from rest_framework import serializers

from pricewatch.models import PriceWatch
from pricewatch.models import Farmer

class PriceWatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceWatch
        fields = ('id','province','entryDate')
        fields = '__all__'

class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = '__all__'