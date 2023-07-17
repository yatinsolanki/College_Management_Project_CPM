from django.urls import path
from home_page import views
urlpatterns = [
    path('',views.index),
    path('studentlogin',views.StudLogin,name='studlogin'),
    path('newStudReg',views.newStudReg,name='newStudReg')
]
