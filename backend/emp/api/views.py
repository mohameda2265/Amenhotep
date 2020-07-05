from django.db.models import Q
from django.contrib.auth.models import User
from rest_framework import mixins,viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    CreateAPIView
)

from .serializers import (
    UserSerializer,
    NewsCreateSerializer,
    NewsUpdateSerializer,
    NewsListSerializer,
    NewsDetailSerializer,
    OffersCreateSerializer,
    OffersUpdateSerializer,
    OffersListSerializer,
    OfferDetailSerializer,
    RequestCreateSerializer,
    RequestListSerializer,
    RequestDetailSerializer,
    EmployeeCreateSerializer,
    EmployeeUpdateSerializer,
    EmployeeListSerializer,
    EmployeeDetailSerializer,
    ExistenceSerializer,
    OwnerCreateSerializer,
    OwnerUpdateSerializer,
    OwnerListSerializer,
    OwnerDetailSerializer,
    CompoundCreateSerializer,
    CompoundUpdateSerializer,
    CompoundListSerializer,
    CompoundDetailSerializer,
    BlockCreateSerializer,
    BlockUpdateSerializer,
    BlockListSerializer,
    BlockDetailSerializer,
    TowerCreateSerializer,
    TowerUpdateSerializer,
    TowerListSerializer,
    TowerDetailSerializer,
    ownershipTowerCreateSerializer,
    ownershipTowerUpdateSerializer,
    ownershipTowerListSerializer,
    ownershipTowerDetailSerializer,
    FlatCreateSerializer,
    FlatUpdateSerializer,
    FlatListSerializer,
    FlatDetailSerializer,
    StoreCreateSerializer,
    StoreUpdateSerializer,
    StoreListSerializer,
    StoreDetailSerializer,
    ownershipStoreCreateandUpdateSerializer,
    ownershipStoreListSerializer,
    FamilyCreateSerializer,
    FamilyUpdateSerializer,
    FamilyListSerializer,
    FamilyDetailSerializer,
)

from emp.models import (
    News,
    Offer,
    Requests,
    Employee,
    Existence,
    Owner,
    Compound,
    Block,
    Tower,
    ownershipTower,
    Flat,
    Store,
    ownershipStore,
    Family,
)

# User Section
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


# News Section
class NewsCreateAPIView(CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsCreateSerializer

class NewsUpdateAPIView(UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsUpdateSerializer

class NewsListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsListSerializer

class NewsDetailAPIView(RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer

# Offers Section
class OffersCreateAPIView(CreateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OffersCreateSerializer

class OffersUpdateAPIView(UpdateAPIView):
    queryset = Offer.objects.all()
    serializer_class = OffersUpdateSerializer

class OffersListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = OffersListSerializer

class OffersDetailAPIView(RetrieveAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferDetailSerializer

# Request Section
class RequestCreateAPIView(CreateAPIView):
    queryset = Requests.objects.all()
    serializer_class = RequestCreateSerializer

class RequestListAPIView(ListAPIView):
    queryset = Requests.objects.all()
    serializer_class = RequestListSerializer

class RequestDetailAPIView(RetrieveAPIView):
    queryset = Requests.objects.all()
    serializer_class = RequestDetailSerializer

# Employee Section
class EmployeeCreateAPIView(CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeCreateSerializer

class EmployeeUpdateAPIView(UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeUpdateSerializer

class EmployeesListAPIView(mixins.CreateModelMixin, ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeListSerializer

class EmployeeDetailAPIView(RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeDetailSerializer

# Existance Section
class ExistenceCreateAPIView(CreateAPIView):
    queryset = Existence.objects.all()
    serializer_class = ExistenceSerializer

class ExistenceUpdateAPIView(UpdateAPIView):
    queryset = Existence.objects.all()
    serializer_class = ExistenceSerializer

class ExistenceListAPIView(ListAPIView):
    queryset = Existence.objects.all()
    serializer_class = ExistenceSerializer

class ExistenceDetailAPIView(RetrieveAPIView):
    queryset = Existence.objects.all()
    serializer_class = ExistenceSerializer

# Owner Section
class OwnerCreateAPIView(CreateAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerCreateSerializer

class OwnerUpdateAPIView(UpdateAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerUpdateSerializer

class OwnerListAPIView(ListAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerListSerializer

class OwnerDetailAPIView(RetrieveAPIView):
    queryset = Owner.objects.all()
    serializer_class = OwnerDetailSerializer

# Compound Section
class CompoundCreateAPIView(CreateAPIView):
    queryset = Compound.objects.all()
    serializer_class = CompoundCreateSerializer

class CompoundUpdateAPIView(UpdateAPIView):
    queryset = Compound.objects.all()
    serializer_class = CompoundUpdateSerializer

class CompoundListAPIView(ListAPIView):
    queryset = Compound.objects.all()
    serializer_class = CompoundListSerializer

class CompoundDetailAPIView(RetrieveAPIView):
    queryset = Compound.objects.all()
    serializer_class = CompoundDetailSerializer

# Block Section
class BlockCreateAPIView(CreateAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockCreateSerializer

class BlockUpdateAPIView(UpdateAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockUpdateSerializer

class BlockListAPIView(ListAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockListSerializer

class BlockDetailAPIView(RetrieveAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockDetailSerializer

# Tower Section
class TowerCreateAPIView(CreateAPIView):
    queryset = Tower.objects.all()
    serializer_class = TowerCreateSerializer

class TowerUpdateAPIView(UpdateAPIView):
    queryset = Tower.objects.all()
    serializer_class = TowerUpdateSerializer

class TowerListAPIView(ListAPIView):
    queryset = Tower.objects.all()
    serializer_class = TowerListSerializer

class TowerDetailAPIView(RetrieveAPIView):
    queryset = Tower.objects.all()
    serializer_class = TowerDetailSerializer

# Ownership Tower Section
class ownershipTowerCreateAPIView(CreateAPIView):
    queryset = ownershipTower.objects.all()
    serializer_class = ownershipTowerCreateSerializer

class ownershipTowerUpdateAPIView(UpdateAPIView):
    queryset = ownershipTower.objects.all()
    serializer_class = ownershipTowerUpdateSerializer

class ownershipTowerListAPIView(ListAPIView):
    queryset = ownershipTower.objects.all()
    serializer_class = ownershipTowerListSerializer

class ownershipTowerDetailAPIView(RetrieveAPIView):
    queryset = ownershipTower.objects.all()
    serializer_class = ownershipTowerDetailSerializer

# Flat Section
class FlatCreateAPIView(CreateAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatCreateSerializer

class FlatUpdateAPIView(UpdateAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatUpdateSerializer

class FlatListAPIView(ListAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatListSerializer

class FlatDetailAPIView(RetrieveAPIView):
    queryset = Flat.objects.all()
    serializer_class = FlatDetailSerializer

# Store Section
class StoreCreateAPIView(CreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreCreateSerializer

class StoreUpdateAPIView(UpdateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreUpdateSerializer

class StoreListAPIView(ListAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreListSerializer

class StoreDetailAPIView(RetrieveAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreDetailSerializer

# Ownership Store Section
class ownershipStoreCreateAPIView(CreateAPIView):
    queryset = ownershipStore.objects.all()
    serializer_class = ownershipStoreCreateandUpdateSerializer

class ownershipStoreUpdateAPIView(UpdateAPIView):
    queryset = ownershipStore.objects.all()
    serializer_class = ownershipStoreCreateandUpdateSerializer

class ownershipStoreListAPIView(ListAPIView):
    queryset = ownershipStore.objects.all()
    serializer_class = ownershipStoreListSerializer

# Family Section
class FamilyCreateAPIView(CreateAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilyCreateSerializer

class FamilyUpdateAPIView(UpdateAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilyUpdateSerializer

class FamilyListAPIView(ListAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilyListSerializer

class FamilyDetailAPIView(RetrieveAPIView):
    queryset = Family.objects.all()
    serializer_class = FamilyDetailSerializer
