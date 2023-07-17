from django import forms
from .models import StudentRec
class StudentRegistration(forms.ModelForm):
    class Meta:
        model = StudentRec
        fields = ['studentID','password']
        labels = {'studentID':'Student ID','password':'Password'}
        widgets = {
            'studentID':forms.TextInput(attrs={'class':'form-control ','id':'studid'}),
            'password':forms.TextInput(attrs={'class':'form-control ','id':'passid'})
        }
class newStudentRegistration(forms.ModelForm):
    class Meta:
        model = StudentRec
        fields = ['fname','lname','fatherName','dob','profilePic','course','address','city','pincode','mobile','email','aadhar']
        labels = {'fname':'First Name',
                'lname':'Last Name',
                'fatherName':'Father Name',
                'dob':'DOB',
                'profilePic':'Profile Pic',
                'course':'Course',
                'address':'Address',
                'city': 'City',
                'pincode':'Pin Code',
                'mobile':'Mobile',
                'email':'Email',
                'aadhar':'aadhar'}
        widgets = {
            'fname':forms.TextInput(attrs={'class':'form form-control','id':'fname'}),
            'lname':forms.TextInput(attrs={'class':'form form-control','id':'lname'}),
            'fatherName':forms.TextInput(attrs={'class':'form form-control','id':'fatherName'}),
            'dob':forms.DateInput(attrs={'type':'date','class':'form form-control','id':'dob'}),
            'profilePic':forms.FileInput(attrs={'type':'file','class':'form form-control','id':'profilePic'}),
            # 'course':forms.TextInput(attrs={'class':'form form-select','type':'select'}),
            'address':forms.TextInput(attrs={'class':'form form-control','id':'address'}),
            'city':forms.TextInput(attrs={'class':'form form-control','id':'city'}),
            'pincode':forms.TextInput(attrs={'class':'form form-control','id':'pincode'}),
            'mobile':forms.TextInput(attrs={'class':'form form-control','id':'mobile'}),
            'email':forms.EmailInput(attrs={'type':'email','class':'form form-control','id':'email'}) ,
            'aadhar':forms.TextInput(attrs={'class':'form form-control','id':'aadhar'}),
        }