from rest_framework.serializers import ModelSerializer

from emp.models import News,Offer

class NewsListSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = [
        'id',
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Avatar'
        ]

class OffersListSerializer(ModelSerializer):
    class Meta:
        model = Offer
        fields = [
        'id',
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Installement',
        'Cost',
        'minPayment',
        'Duration',
        'Avatar',
        ]

class NewsDetailSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = [
        'id',
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Avatar'
        ]
        # read_only_fields = ["id"]


class OfferDetailSerializer(ModelSerializer):
    class Meta:
        model = Offer
        fields = [
        'id',
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Installement',
        'Cost',
        'minPayment',
        'Duration',
        'Avatar',
        ]
        # read_only_fields = ["id"]

class BookCreateSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = [
        'id',
        'author',
        'title',
        'desc',
        'state',
        'created_date',
        'img'
        ]
        # read_only_fields = ["id"]