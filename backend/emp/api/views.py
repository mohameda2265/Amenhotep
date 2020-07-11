from django.db.models import Q
from django.contrib.auth.models import User
from rest_framework import mixins,viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser, FileUploadParser
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


@api_view(['GET', 'DELETE'])
def DeleteNewsView(request, pk):
    request = News.objects.get(id=pk)
    data = {}
    operation = request.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteOffersView(request, pk):
    request = Offer.objects.get(id=pk)
    data = {}
    operation = request.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteRequestView(request, pk):
    request = Requests.objects.get(id=pk)
    data = {}
    operation = request.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteEmployeeView(request, pk):
    request = Employee.objects.get(id=pk)
    data = {}
    operation = request.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteOwnerView(request, pk):
    owner = Owner.objects.get(id=pk)
    data = {}
    operation = owner.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)


@api_view(['GET', 'DELETE'])
def DeleteFamilyView(request, pk):
    member = Family.objects.get(id=pk)
    data = {}
    operation = member.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)


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


@api_view(['GET', 'DELETE'])
def DeleteCompoundView(request, pk):
    compound = Compound.objects.get(id=pk)
    data = {}
    operation = compound.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteBlockView(request, pk):
    block = Block.objects.get(id=pk)
    data = {}
    operation = block.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

# Tower Section


class TowerCreateAPIView(CreateAPIView):
    parser_classes = (MultiPartParser, JSONParser,)
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


@api_view(['GET', 'DELETE'])
def DeleteTowerView(request, pk):
    tower = Tower.objects.get(id=pk)
    data = {}
    operation = tower.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteFlatView(request, pk):
    flat = Flat.objects.get(id=pk)
    data = {}
    operation = flat.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteShopView(request, pk):
    shop = Store.objects.get(id=pk)
    data = {}
    operation = shop.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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


@api_view(['GET', 'DELETE'])
def DeleteOwnershipStoreView(request, pk):
    ownership = ownershipStore.objects.get(id=pk)
    data = {}
    operation = ownership.delete()
    if operation:
        data["success"] = "delete successfull"
    else:
        data["failure"] = "delete failed"
    return Response(data=data)

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
