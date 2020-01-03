from django import forms
from django.core import validators
from app_three.models import User


class NewUser(forms.ModelForm):
    
    class Meta:
        model = User
        fields = '__all__'
    
    first_name = forms.CharField(max_length=128)
    last_name = forms.CharField(max_length=128)
    email = forms.EmailField(max_length=128)
    verify_email = forms.EmailField(label='Enter your email again:')
    
    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['verify_email']
        
        if email != vmail:
            raise forms.ValidationError("MAKE SURE EMAILS MATCH!")