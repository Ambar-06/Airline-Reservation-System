from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('reservations', views.Reservations.as_view(), name='reservations'),
    path('flights', views.Flights.as_view(), name='flights'),
    path('login', views.Login.as_view(), name="login"),
    path('signup', views.SignUp.as_view(), name="signup")
]