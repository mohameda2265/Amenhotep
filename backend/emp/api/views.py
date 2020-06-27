from django.db.models import Q
from rest_framework import mixins
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    CreateAPIView
    )

from .serializers import (
    NewsListSerializer,
    NewsDetailSerializer,
    OffersListSerializer,
    OfferDetailSerializer
    )

from emp.models import News,Offer



class NewsListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsListSerializer


class OffersListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = OffersListSerializer

class NewsDetailAPIView(RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer

class OfferDetailAPIView(RetrieveAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferDetailSerializer