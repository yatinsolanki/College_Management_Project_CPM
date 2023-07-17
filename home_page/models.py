from django.db import models

# Create your models here.
class StudentRec(models.Model):
    studentID = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    fname = models.CharField( max_length=50)
    lname = models.CharField( max_length=50)
    fatherName = models.CharField( max_length=50)
    dob = models.DateField( max_length=50)
    course = models.CharField(max_length=50 )
    profilePic = models.ImageField(upload_to='profilePic/')
    address = models.CharField( max_length=50)
    city = models.CharField(max_length=50)
    pincode = models.CharField(max_length=50)
    mobile = models.CharField( max_length=50)
    email = models.EmailField(max_length=254)
    aadhar = models.CharField(max_length=50)
