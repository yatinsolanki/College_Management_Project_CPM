from django.shortcuts import render
from .forms import StudentRegistration
from .forms import newStudentRegistration

# Create your views here.
def index(request):
    return render(request,'index.html')

def StudLogin(request):
    fm = StudentRegistration()
    return render(request,'studlogin.html',{'form':fm})

def newStudReg(request):
    fm = newStudentRegistration()
    return render(request,'studReg.html',{'form':fm})
