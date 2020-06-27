from django.urls import path
# from django.conf.urls import url
from . import views
app_name = 'news-api'
urlpatterns = [
    path('news/', views.NewsListAPIView.as_view(), name='list'),
    path('offers/', views.OffersListAPIView.as_view(), name='list'),
    # path('admin/', views.admin, name='admin'),
    # path('new/',views.BookCreateAPIView.as_view(),name='create_book'),
    path('news/<int:pk>/',views.NewsDetailAPIView.as_view(),name='news_details'),
    path('offers/<int:pk>/',views.OfferDetailAPIView.as_view(),name='offer_details'),
    # path('<int:pk>/edit/',views.BookUpdateAPIView.as_view(),name='edit_book'),
    # path('<int:pk>/delete/', views.BookDeleteAPIView.as_view(), name='delete_book'),
]

