from django.shortcuts import render
from django.http import HttpResponse
from wsgiref.util import FileWrapper
import os
from django.views.generic import TemplateView
from api.models import Post

class Index(TemplateView):
    template_name = "mysite/home.html"
    def get(self, request):
        posts = Post.objects.all()
        args = {
            "posts": posts,
        }        
        return render(request, self.template_name, context=args)
