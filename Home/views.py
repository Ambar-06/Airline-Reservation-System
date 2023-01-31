from django.shortcuts import HttpResponse, render
from django.views import View


# Create your views here.
def index(request):
    return render(request, "index.html")

class Reservations(View):
    template_name = "checkreservation.html"

    def get(self, request):
        return render(request, self.template_name)

class Flights(View):
    template_name = "flights.html"

    def get(self, request):
        return render(request, self.template_name)
    
class Login(View):
    template_name ="login.html"

    def get(self, request):
        return render(request, self.template_name)
    
class SignUp(View):
    template_name ="signup.html"

    def get(self, request):
        return render(request, self.template_name)