from pricewatch.models import PriceWatch
from pricewatch.models import Farmer
from .serializers import PriceWatchSerializer
from .serializers import FarmerSerializer
from rest_framework import viewsets
class PriceWatchViewSet(viewsets.ModelViewSet):
    serializer_class = PriceWatchSerializer
    queryset = PriceWatch.objects.order_by('province','-entryDate').distinct('province')

class FarmerViewSet(viewsets.ModelViewSet):
    serializer_class = FarmerSerializer
    queryset = Farmer.objects.all()