from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework import serializers  

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
class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'password',
        ]

# Image Section
class Base64ImageField(serializers.ImageField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension

# News Section
class NewsCreateSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = [
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Avatar'
        ]
        # read_only_fields = ["id"]

class NewsUpdateSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = [
        'admin',
        'Title',
        'Desc',
        'created_date',
        'Avatar'
        ]
        # read_only_fields = ["id"]

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

# Offers Section
class OffersCreateSerializer(ModelSerializer):
    class Meta:
        model = Offer
        fields = [
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

class OffersUpdateSerializer(ModelSerializer):
    class Meta:
        model = Offer
        fields = [
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

# Request Section
class RequestCreateSerializer(ModelSerializer):
    Avatar = Base64ImageField(max_length=None, use_url=True,)
    class Meta:
        model = Requests
        fields = [
        'Title',
        'Desc',
        'Type',
        'created_date',
        'Email',
        'Mobile',
        'Avatar'
        ]
        # read_only_fields = ["id"]
        
class RequestListSerializer(ModelSerializer):
    class Meta:
        model = Requests
        fields = [
        'id',
        'Title',
        'Desc',
        'Type',
        'created_date',
        'Email',
        'Mobile',
        'Avatar'
        ]
        # read_only_fields = ["id"]

class RequestDetailSerializer(ModelSerializer):
    class Meta:
        model = Requests
        fields = [
        'id',
        'Title',
        'Desc',
        'Type',
        'created_date',
        'Email',
        'Mobile',
        'Avatar'
        ]
        # read_only_fields = ["id"]

# Employee Section
class EmployeeCreateSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = [
        'NID',
        'Name',
        'Address',
        'Proof',
        'Birthdate',
        'jobDesc',
        'Mobile',
        'DSL',
        'Avatar',
        ]
        # read_only_fields = ["id"]

class EmployeeUpdateSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = [
        'id',
        'NID',
        'Name',
        'Address',
        'Proof',
        'Birthdate',
        'jobDesc',
        'Mobile',
        'DSL',
        'Avatar',
        ]
        # read_only_fields = ["id"]

class EmployeeListSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = [
        'id',
        'NID',
        'Name',
        'Address',
        'jobDesc',
        ]
        # read_only_fields = ["id"]

class EmployeeDetailSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = [
        'id',
        'NID',
        'Name',
        'Address',
        'Proof',
        'Birthdate',
        'jobDesc',
        'Mobile',
        'DSL',
        'Avatar',
        ]
        # read_only_fields = ["id"]

# Existance Section
class ExistenceSerializer(ModelSerializer):
    class Meta:
        model = Existence
        fields = [
            'Name',
            'Type',
            'Timing',
            'NID',
        ]

# Owner Section
class OwnerCreateSerializer(ModelSerializer):
    class Meta:
        model = Owner
        fields = [
        'NID',
        'Name',
        'Code',
        'Proof',
        'Birthdate',
        'Mobile',
        'DSL',
        'Avatar',
        'isOwner',
        'Notes',
        'Papers',
        ]

class OwnerUpdateSerializer(ModelSerializer):
    class Meta:
        model = Owner
        fields = [
        'NID',
        'Name',
        'Code',
        'Proof',
        'Birthdate',
        'Mobile',
        'DSL',
        'Avatar',
        'isOwner',
        'Notes',
        'Papers',
        ]

class OwnerListSerializer(ModelSerializer):
    class Meta:
        model = Owner
        fields = [
        'id',
        'NID',
        'Name',
        'Code',
        ]

class OwnerDetailSerializer(ModelSerializer):
    class Meta:
        model = Owner
        fields = [
        'id',
        'NID',
        'Name',
        'Code',
        'Proof',
        'Birthdate',
        'Mobile',
        'DSL',
        'Avatar',
        'isOwner',
        'Notes',
        'Papers',
        ]

# Compound Section
class CompoundCreateSerializer(ModelSerializer):
    class Meta:
        model = Compound
        fields = [
        'Name',
        'Address',
        'Latitude',
        'Longitude',
        'Area',
        'Desc',
        ]

class CompoundUpdateSerializer(ModelSerializer):
    class Meta:
        model = Compound
        fields = [
        'Name',
        'Address',
        'Latitude',
        'Longitude',
        'Area',
        'Desc',
        ]

class CompoundListSerializer(ModelSerializer):
    class Meta:
        model = Compound
        fields = [
        'id',
        'Name',
        'Address',
        'Desc',
        ]

class CompoundDetailSerializer(ModelSerializer):
    class Meta:
        model = Compound
        fields = [
        'id',
        'Name',
        'Address',
        'Latitude',
        'Longitude',
        'Area',
        'Desc',
        ]

# Block Section
class BlockCreateSerializer(ModelSerializer):
    class Meta:
        model = Block
        fields = [
        'compound',
        'Number',
        'Area',
        'Desc',
        'towersNumber',
        ]

class BlockUpdateSerializer(ModelSerializer):
    class Meta:
        model = Block
        fields = [
        'compound',
        'Number',
        'Area',
        'Desc',
        'towersNumber',
        ]

class BlockListSerializer(ModelSerializer):
    class Meta:
        model = Block
        fields = [
        'id',
        'compound',
        'Number',
        'Area',
        'towersNumber',
        ]

class BlockDetailSerializer(ModelSerializer):
    class Meta:
        model = Block
        fields = [
        'id',
        'compound',
        'Number',
        'Area',
        'Desc',
        'towersNumber',
        ]

# Tower Section
class TowerCreateSerializer(ModelSerializer):
    class Meta:
        model = Tower
        fields = [
        'block',
        'Number',
        'Name',
        'Area',
        'flatsNumber',
        'Cost',
        'Notes',
        'Papers',
        'floorsNumber',
        'storesNumber',
        'Type',
        ]

class TowerUpdateSerializer(ModelSerializer):
    class Meta:
        model = Tower
        fields = [
        'block',
        'Number',
        'Name',
        'Area',
        'flatsNumber',
        'Cost',
        'Notes',
        'Papers',
        'floorsNumber',
        'storesNumber',
        'Type',
        ]

class TowerListSerializer(ModelSerializer):
    class Meta:
        model = Tower
        fields = [
        'id',
        'block',
        'Number',
        'Name',
        'Area',
        ]

class TowerDetailSerializer(ModelSerializer):
    class Meta:
        model = Tower
        fields = [
        'id',
        'block',
        'Number',
        'Name',
        'Area',
        'flatsNumber',
        'Cost',
        'Notes',
        'Papers',
        'floorsNumber',
        'storesNumber',
        'Type',
        ]

# Ownership Tower Section
class ownershipTowerCreateSerializer(ModelSerializer):
    class Meta:
        model = ownershipTower
        fields = [
        'admin',
        'owner',
        'tower',
        'Total',
        'Paid',
        'serialTransaction',
        'proofTransaction',
        ]

class ownershipTowerUpdateSerializer(ModelSerializer):
    class Meta:
        model = ownershipTower
        fields = [
        'admin',
        'owner',
        'tower',
        'Total',
        'Paid',
        'serialTransaction',
        'proofTransaction',
        ]

class ownershipTowerListSerializer(ModelSerializer):
    class Meta:
        model = ownershipTower
        fields = [
        'id',
        'owner',
        'tower',
        ]

class ownershipTowerDetailSerializer(ModelSerializer):
    class Meta:
        model = ownershipTower
        fields = [
        'id',
        'admin',
        'owner',
        'tower',
        'Total',
        'Paid',
        'serialTransaction',
        'proofTransaction',
        ]

# Flat Section
class FlatCreateSerializer(ModelSerializer):
    class Meta:
        model = Flat
        fields = [
        'owner',
        'tower',
        'Number',
        'floorNumber',
        'Area',
        'Desc',
        'Inhabited',
        ]

class FlatUpdateSerializer(ModelSerializer):
    class Meta:
        model = Flat
        fields = [
        'owner',
        'tower',
        'Number',
        'floorNumber',
        'Area',
        'Desc',
        'Inhabited',
        ]

class FlatListSerializer(ModelSerializer):
    class Meta:
        model = Flat
        fields = [
        'id',
        'owner',
        'tower',
        'Number',
        'Inhabited',
        ]

class FlatDetailSerializer(ModelSerializer):
    class Meta:
        model = Flat
        fields = [
        'id',
        'owner',
        'tower',
        'Number',
        'floorNumber',
        'Area',
        'Desc',
        'Inhabited',
        ]

# Store Section
class StoreCreateSerializer(ModelSerializer):
    class Meta:
        model = Store
        fields = [
        'tower',
        'Number',
        'Name',
        'Desc',
        'Type',
        ]

class StoreUpdateSerializer(ModelSerializer):
    class Meta:
        model = Store
        fields = [
        'tower',
        'Number',
        'Name',
        'Desc',
        'Type',
        ]

class StoreListSerializer(ModelSerializer):
    class Meta:
        model = Store
        fields = [
        'id',
        'tower',
        'Number',
        'Name',
        'Type',
        ]

class StoreDetailSerializer(ModelSerializer):
    class Meta:
        model = Store
        fields = [
        'id',
        'tower',
        'Number',
        'Name',
        'Desc',
        'Type',
        ]

# Ownership Store Section
class ownershipStoreCreateandUpdateSerializer(ModelSerializer):
    class Meta:
        model = ownershipStore
        fields = [
        'owner',
        'store',
        ]

class ownershipStoreListSerializer(ModelSerializer):
    class Meta:
        model = ownershipStore
        fields = [
        'id',
        'owner',
        'store',
        ]

# Family Section
class FamilyCreateSerializer(ModelSerializer):
    class Meta:
        model = Family
        fields = [
        'owner',
        'Name',
        'Birthdate',
        'Relationship',
        'Proof',
        ]

class FamilyUpdateSerializer(ModelSerializer):
    class Meta:
        model = Family
        fields = [
        'owner',
        'Name',
        'Birthdate',
        'Relationship',
        'Proof',
        ]

class FamilyListSerializer(ModelSerializer):
    class Meta:
        model = Family
        fields = [
        'id',
        'owner',
        'Name',
        'Relationship',
        ]

class FamilyDetailSerializer(ModelSerializer):
    class Meta:
        model = Family
        fields = [
        'id',
        'owner',
        'Name',
        'Birthdate',
        'Relationship',
        'Proof',
        ]
