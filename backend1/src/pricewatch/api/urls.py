from pricewatch.api.views import PriceWatchViewSet
from pricewatch.api.views import FarmerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'price',PriceWatchViewSet)
router.register(r'farmer',FarmerViewSet)
urlpatterns = router.urls