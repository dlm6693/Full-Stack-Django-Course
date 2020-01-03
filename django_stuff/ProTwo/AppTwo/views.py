from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User
import json
# Create your views here.
def index(request):
    return render(request, 'AppTwo/index.html')

def help(request):
    title = {'title': 'Help Page'}
    return render(request, 'AppTwo/help.html', context=title)

def users(request):
    users = User.objects.order_by('last_name')
    user_dict = {'user_records': users}
    return render(request, 'AppTwo/users.html', context=user_dict)