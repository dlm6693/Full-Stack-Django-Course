from django.shortcuts import render
from app_three.forms import NewUser

# Create your views here.

def index(request):
    return render(request, 'app_three/index.html')

def form_name_view(request):
    form = NewUser()
    
    if request.method == 'POST':
        form = NewUser(request.POST)
        
        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('ERROR FORM INVALID')
    return render(request, 'app_three/form_page.html', {'form': form})