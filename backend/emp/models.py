from django.db import models
from django.utils import timezone
from django.core.validators import RegexValidator

NID_regex = RegexValidator(regex=r'^(\d{14})$',
    message="National ID must be entered exactly 14 digits.")

Mobile_regex = RegexValidator(regex=r'^(\d{11})$',
    message="Mobile Number must be entered exactly 11 digits.")

DSL_regex = RegexValidator(regex=r'^(\d{10})$',
    message="DSL Number must be entered exactly 10 digits.")

class Employee(models.Model):

    NID = models.CharField(validators=[NID_regex],max_length=14,unique=True)
    Name = models.CharField(max_length=200)
    Address = models.CharField(max_length=200)
    Proof = models.FileField(upload_to='images')
    Birthdate = models.DateField()
    jobDesc = models.TextField(max_length=200)
    Mobile = models.CharField(validators=[Mobile_regex],max_length=11,unique=True)
    DSL = models.CharField(validators=[DSL_regex],max_length=10,blank=True, null=True)
    Avatar = models.FileField(upload_to='images')

    def __str__(self):
        return self.Name


class Requests(models.Model):
    request = 'طلب'
    complaint = 'شكوي'

    Title = models.CharField(max_length=200)
    Desc = models.TextField(max_length=250)
    state_choices = [
        (request,'طلب'),
        (complaint,'شكوي')
    ]
    Type = models.CharField(max_length=9,choices=state_choices,default=request)
    created_date = models.DateTimeField(default=timezone.now)
    Replied = models.BooleanField(default=False,blank=True, null=True)
    Action = models.TextField(max_length=250,blank=True, null=True)
    Email = models.EmailField(blank=True, null=True)
    Mobile = models.CharField(validators=[Mobile_regex],max_length=11)

    def __str__(self):
        return self.Title


class Existence(models.Model):
    enter = 'enter'
    exitt = 'exit'

    Name = models.CharField(max_length=250)
    state_choices = [
        (enter,'Enter'),
        (exitt,'Exit')
    ]
    Type = models.CharField(max_length=5,choices=state_choices,default=enter)
    Timing = models.DateTimeField(default=timezone.now)
    NID = models.CharField(validators=[NID_regex],max_length=14)

    def __str__(self):
        return self.Name


class Admin(models.Model):

    NID = models.CharField(validators=[NID_regex],max_length=14,unique=True)
    Username = models.CharField(max_length=50,unique=True)
    Password = models.CharField(max_length=20)
    Name = models.CharField(max_length=150)
    Registered = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Username


class Offer(models.Model):
    installment = 'تقسيط'
    cash = 'كاش'

    admin = models.ForeignKey(Admin,on_delete=models.CASCADE,related_name="offer_owner")
    Title = models.CharField(max_length=200)
    Desc = models.TextField(max_length=250)
    created_date = models.DateTimeField(default=timezone.now)
    state_choices = [
        (installment,'تقسيط'),
        (cash,'كاش')
    ]
    Installement = models.CharField(max_length=12,choices=state_choices,default=installment)
    Cost = models.FloatField(max_length=8)
    minPayment = models.FloatField(max_length=8,blank=True, null=True)
    Duration = models.IntegerField(blank=True, null=True)
    Avatar = models.FileField(upload_to='images',blank=True, null=True)

    def __str__(self):
        return self.Title


class News(models.Model):

    admin = models.ForeignKey(Admin,on_delete=models.CASCADE,related_name="news_owner")
    Title = models.CharField(max_length=200)
    Desc = models.TextField(max_length=250)
    created_date = models.DateTimeField(default=timezone.now)
    Avatar = models.FileField(upload_to='images',blank=True, null=True)

    def __str__(self):
        return self.Title


class Owner(models.Model):

    NID = models.CharField(validators=[NID_regex],max_length=14,unique=True)
    Name = models.CharField(max_length=200)
    Code = models.IntegerField()
    Proof = models.FileField(upload_to='images')
    Birthdate = models.DateField()
    Mobile = models.CharField(validators=[Mobile_regex],max_length=11,unique=True)
    DSL = models.CharField(validators=[DSL_regex],max_length=10,blank=True, null=True)
    Avatar = models.ImageField(upload_to='images')
    isOwner = models.BooleanField(default=True)
    Notes = models.TextField(max_length=200,blank=True, null=True)
    Papers = models.FileField(upload_to='images',blank=True, null=True)

    def __str__(self):
        return self.Name


class Compound(models.Model):

    Name = models.CharField(max_length=100,unique=True)
    Address = models.CharField(max_length=200)
    Latitude = models.FloatField(max_length=10,unique=True)
    Longitude = models.FloatField(max_length=10,unique=True)
    Area = models.FloatField(max_length=8)
    Desc = models.TextField(max_length=300,blank=True, null=True)

    def __str__(self):
        return self.Name


class Block(models.Model):

    compound = models.ForeignKey(Compound,on_delete=models.CASCADE,related_name="compound_block")
    Number = models.IntegerField(unique=True)
    Area = models.FloatField(max_length=8)
    Desc = models.TextField(max_length=300,blank=True, null=True)
    towersNumber = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return "Compound : " + self.compound.Name + " Block : " + str(self.Number)


class Tower(models.Model):

    Residential = 'residential'
    Commercial = 'commercial'

    block = models.ForeignKey(Block,on_delete=models.CASCADE,related_name="block_tower")
    Number = models.IntegerField()
    Name = models.CharField(max_length=100,blank=True, null=True)
    Area = models.FloatField(max_length=8)
    flatsNumber = models.IntegerField(blank=True, null=True)
    Cost = models.FloatField(max_length=8)
    Notes = models.TextField(max_length=200,blank=True, null=True)
    Papers = models.FileField(upload_to='images',blank=True, null=True)
    floorsNumber = models.IntegerField()
    storesNumber = models.IntegerField()
    state_choices = [
        (Residential,'Residential'),
        (Commercial,'Commercial')
    ]
    Type = models.CharField(max_length=12,choices=state_choices,default=Residential)
    owners = models.ManyToManyField(
        Owner,
        through='ownershipTower'
    )

    def __str__(self):
        return "Block : " + str(self.block.Number) +" Tower : " + str(self.Number)


class ownershipTower(models.Model):

    admin = models.ForeignKey(Admin,on_delete=models.CASCADE)
    owner = models.ForeignKey(Owner,on_delete=models.CASCADE)
    tower = models.ForeignKey(Tower,on_delete=models.CASCADE)
    Total = models.FloatField()
    Paid = models.FloatField()
    serialTransaction  = models.FloatField()
    proofTransaction = models.FileField(upload_to='images')


    def __str__(self):
        return "Owner : " + self.owner.Name + " Tower : " + self.tower.Name


class Flat(models.Model):

    owner = models.ForeignKey(Owner,on_delete=models.CASCADE,related_name="owner_flat")
    tower = models.ForeignKey(Tower,on_delete=models.CASCADE,related_name="tower_flat")
    Number = models.IntegerField()
    floorNumber = models.IntegerField()
    Area = models.FloatField(max_length=8)
    Desc = models.TextField(max_length=300,blank=True, null=True)
    Inhabited = models.BooleanField(default=False)

    def __str__(self):
        return "Owner : " + self.owner.Name + " Tower : " + str(self.tower.Number) + " Flat : " + str(self.Number)


class Store(models.Model):

    Gym = 'gym'
    Restaurant = 'restaurant'
    Cafe = 'cafe'
    Shop = 'shop'

    tower = models.ForeignKey(Tower,on_delete=models.CASCADE,related_name="tower_store")
    Number = models.IntegerField()
    Name = models.CharField(max_length=100)
    Desc = models.TextField(max_length=300)
    state_choices = [
        (Shop,'Shop'),
        (Restaurant,'Restaurant'),
        (Cafe,'Cafe'),
        (Gym,'Gym')
    ]
    Type = models.CharField(max_length=12,choices=state_choices,default=Shop)
    owners = models.ManyToManyField(
        Owner,
        through='ownershipStore'
    )

    def __str__(self):
        return self.Name


class ownershipStore(models.Model):

    owner = models.ForeignKey(Owner,on_delete=models.CASCADE)
    store = models.ForeignKey(Store,on_delete=models.CASCADE)

    def __str__(self):
        return "Owner : " + self.owner.Name + " Store : " + self.store.Name


class Family(models.Model):

    Wife = 'wife'
    Son = 'son'
    Daughter = 'daughter'
    Cousin = 'cousin'
    Husband = 'husband'

    owner = models.ForeignKey(Owner,on_delete=models.CASCADE,related_name="owner_family")
    Name = models.CharField(max_length=150)
    Birthdate = models.DateField()
    relation_choices = [
        (Wife,'Wife'),
        (Son,'Son'),
        (Daughter,'Daughter'),
        (Cousin,'Cousin'),
        (Husband,'Husband'),
    ]
    Relationship = models.CharField(max_length=9,choices=relation_choices,default=Wife)
    Proof = models.FileField(upload_to='images')

    class Meta:
        unique_together = ('owner','Name')

    def __str__(self):
        return self.Name
    