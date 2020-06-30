from django.urls import path
# from django.conf.urls import url
from . import views
app_name = 'news-api'
urlpatterns = [
    # News Section
    path('news/new/',views.NewsCreateAPIView.as_view(),name='create_news'),
    path('news/<int:pk>/edit/',views.NewsUpdateAPIView.as_view(),name='edit_news'),
    path('news/', views.NewsListAPIView.as_view(), name='list_news'),
    path('news/<int:pk>/',views.NewsDetailAPIView.as_view(),name='news_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_news'),

    # Offers Section
    path('offers/new/',views.OffersCreateAPIView.as_view(),name='create_offer'),
    path('offers/<int:pk>/edit/',views.OffersUpdateAPIView.as_view(),name='edit_offer'),
    path('offers/', views.OffersListAPIView.as_view(), name='list_offers'),
    path('offers/<int:pk>/',views.OffersDetailAPIView.as_view(),name='offer_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_offer'),

    # Request Section
    path('requests/new/',views.RequestCreateAPIView.as_view(),name='create_request'),
    path('requests/', views.RequestListAPIView.as_view(), name='list_requests'),
    path('requests/<int:pk>/',views.RequestDetailAPIView.as_view(),name='requests_details'),

    # Employee Section
    path('employee/new/',views.EmployeeCreateAPIView.as_view(),name='create_employee'),
    path('employees/<int:pk>/edit/',views.EmployeeUpdateAPIView.as_view(),name='edit_employee'),
    path('employees/', views.EmployeesListAPIView.as_view(), name='list_employees'),
    path('employees/<int:pk>/',views.EmployeeDetailAPIView.as_view(),name='employee_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_employee'),

    # Existance Section
    path('existence/new/',views.ExistenceCreateAPIView.as_view(),name='create_existence'),
    path('existence/<int:pk>/edit/',views.ExistenceUpdateAPIView.as_view(),name='edit_existence'),
    path('existence/', views.ExistenceListAPIView.as_view(), name='list_existence'),
    path('existence/<int:pk>/',views.ExistenceDetailAPIView.as_view(),name='existence_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_existence'),

    # Owner Section
    path('owners/new/',views.OwnerCreateAPIView.as_view(),name='create_owner'),
    path('owners/<int:pk>/edit/',views.OwnerUpdateAPIView.as_view(),name='edit_owner'),
    path('owners/', views.OwnerListAPIView.as_view(), name='list_owners'),
    path('owners/<int:pk>/',views.OwnerDetailAPIView.as_view(),name='owner_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_owner'),

    # Compound Section
    path('compound/new/',views.CompoundCreateAPIView.as_view(),name='create_compound'),
    path('compound/<int:pk>/edit/',views.CompoundUpdateAPIView.as_view(),name='edit_compound'),
    path('compound/', views.CompoundListAPIView.as_view(), name='list_compounds'),
    path('compound/<int:pk>/',views.CompoundDetailAPIView.as_view(),name='compound_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_compound'),

    # Block Section
    path('block/new/',views.BlockCreateAPIView.as_view(),name='create_block'),
    path('block/<int:pk>/edit/',views.BlockUpdateAPIView.as_view(),name='edit_block'),
    path('block/', views.BlockListAPIView.as_view(), name='list_blocks'),
    path('block/<int:pk>/',views.BlockDetailAPIView.as_view(),name='block_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_block'),

    # Tower Section
    path('tower/new/',views.TowerCreateAPIView.as_view(),name='create_tower'),
    path('tower/<int:pk>/edit/',views.TowerUpdateAPIView.as_view(),name='edit_tower'),
    path('tower/', views.TowerListAPIView.as_view(), name='list_towers'),
    path('tower/<int:pk>/',views.TowerDetailAPIView.as_view(),name='tower_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_tower'),

    # Ownership Tower Section
    path('ownershiptower/new/',views.ownershipTowerCreateAPIView.as_view(),name='create_ownership_tower'),
    path('ownershiptower/<int:pk>/edit/',views.ownershipTowerUpdateAPIView.as_view(),name='edit_ownership_tower'),
    path('ownershiptower/', views.ownershipTowerListAPIView.as_view(), name='list_ownership_towers'),
    path('ownershiptower/<int:pk>/',views.ownershipTowerDetailAPIView.as_view(),name='ownership_tower_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_ownership_tower'),

    # Flat Section
    path('flat/new/',views.FlatCreateAPIView.as_view(),name='create_flat'),
    path('flat/<int:pk>/edit/',views.FlatUpdateAPIView.as_view(),name='edit_flat'),
    path('flat/', views.FlatListAPIView.as_view(), name='list_flats'),
    path('flat/<int:pk>/',views.FlatDetailAPIView.as_view(),name='flat_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_flat'),

    # Store Section
    path('store/new/',views.StoreCreateAPIView.as_view(),name='create_store'),
    path('store/<int:pk>/edit/',views.StoreUpdateAPIView.as_view(),name='edit_store'),
    path('store/', views.StoreListAPIView.as_view(), name='list_stores'),
    path('store/<int:pk>/',views.StoreDetailAPIView.as_view(),name='store_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_store'),

    # Ownership Store Section
    path('ownershipstore/new/',views.ownershipStoreCreateAPIView.as_view(),name='create_ownership_store'),
    path('ownershipstore/<int:pk>/edit/',views.ownershipStoreUpdateAPIView.as_view(),name='edit_ownership_store'),
    path('ownershipstore/', views.ownershipStoreListAPIView.as_view(), name='list_ownership_stores'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_ownership_store'),

    # Family Section
    path('family/new/',views.FamilyCreateAPIView.as_view(),name='create_family'),
    path('family/<int:pk>/edit/',views.FamilyUpdateAPIView.as_view(),name='edit_family'),
    path('family/', views.FamilyListAPIView.as_view(), name='list_familys'),
    path('family/<int:pk>/',views.FamilyDetailAPIView.as_view(),name='family_details'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_family'),

    # path('<int:pk>/edit/',views.BookUpdateAPIView.as_view(),name='edit_book'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_book'),
]

