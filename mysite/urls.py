"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import UserList, PostList
from django.urls import path, include
from mysite.views import Index
from django.views.generic.base import TemplateView
from django.conf.urls import url

urlpatterns = [
    path('', Index.as_view()),    
    path('admin/', admin.site.urls),
    # path('personal/', include('personal.urls')),
    path('personal/contact/', Index.as_view()),
    path('api/users', UserList.as_view()),
    path('api/posts', PostList.as_view()),
    url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home")
]
