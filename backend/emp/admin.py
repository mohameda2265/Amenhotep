from django.contrib import admin
from .models import Employee
from .models import Requests
from .models import Existence
from .models import Admin
from .models import Offer
from .models import News
from .models import Owner
from .models import Compound
from .models import Block
from .models import Tower
from .models import ownershipTower
from .models import Flat
from .models import Store
from .models import ownershipStore
from .models import Family

admin.site.register(Employee)
admin.site.register(Requests)
admin.site.register(Existence)
admin.site.register(Admin)
admin.site.register(Offer)
admin.site.register(News)
admin.site.register(Owner)
admin.site.register(Compound)
admin.site.register(Block)
admin.site.register(Tower)
admin.site.register(ownershipTower)
admin.site.register(Flat)
admin.site.register(Store)
admin.site.register(ownershipStore)
admin.site.register(Family)
