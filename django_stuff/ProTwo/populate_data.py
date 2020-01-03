import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ProTwo.settings')

import django
django.setup()

from AppTwo.models import User
from faker import Faker

fakegen = Faker()


def populate(N=5):
    for entry in range(N):
        fn = fakegen.first_name()
        ln = fakegen.last_name()
        em = fakegen.email()
        user = User.objects.get_or_create(first_name=fn, last_name=ln, email=em)[0]
        user.save()

if __name__ == '__main__':
    print('Populating data now')
    populate(N=25)
    print('Populating complete')