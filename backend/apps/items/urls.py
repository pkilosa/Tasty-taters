from django.urls import path
from . import views

urlpatterns = [
    path('', views.ItemList.as_view(), name='review_list'),
   # path('add', views.ReviewAdd.as_view(), name='review_add'),
]
