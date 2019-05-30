from django.contrib import admin
from api.models import Category, Tag, Image, Post, BlogPostComment

# Register your models here.
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Image)
admin.site.register(Post)
admin.site.register(BlogPostComment)