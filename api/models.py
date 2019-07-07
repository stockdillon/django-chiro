# import urllib2
import mimetypes

from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
        name = models.CharField(max_length=32, null=True)
        class Meta:
                verbose_name_plural = "Categories"
        def __unicode__(self):
                return self.name

class Tag(models.Model):
        name = models.CharField(max_length=32, null=True)
        def __unicode__(self):
                return self.name

class Image(models.Model):
        name = models.CharField(max_length=32, null=True)
        img = models.ImageField()
        def __unicode__(self):
                return self.name        

class Post(models.Model):
        author = models.ForeignKey(User, on_delete=models.CASCADE)
        category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
        title = models.CharField(max_length=64,unique=True)
        # symbol = models.CharField(max_length=2)
        tags = models.ManyToManyField(Tag, blank=True)
        # byline = models.CharField(max_length=255)
        # background_image = models.URLField(verify_exists=True)
        # slug = models.SlugField(max_length=128)
        content = models.TextField()
        updated_on = models.DateField(auto_now=True)
        created_on = models.DateField(auto_now_add=True)
        publish_on = models.DateField()
        list_display = ('title', 'category', 'tags', 'author', 'publish_on','created_on','updated_on')
        search_fields = ['title','byline','symbol']
        list_filter = ['publish_on','created_on']
        date_hierarchy = 'pub_date'
        # imgs = models.ManyToOneRel(Image)

        #this function just below is probably the coolest aspect of the model. 
        #When a background image url is added the function python scrapes the 
        #image from the web saves the image to a virtual directory mounted via s3fs 
        #& rewrites the url to match the s3 cached version. it does all this 
        #before saving the model ensuring that foreign urls are not saved in the db. 
        #this process is also repeated for the social and link classes. It doesn't 
        #strictly adhere to the DRY principle in that it repeats 3 times, but I wanted 
        #to leave this code more legible and easily extensible by not adding additional 
        #classes as each model reperesents an entirely different concept.

        # def save(self, *args, **kwargs):
        #         webfile = urllib2.urlopen(self.background_image)
        #         extension = mimetypes.guess_type(self.background_image)[0].split("/")[1]
        #         self.background_image = '%s/image/post/%s.%s' % (settings.BASE_URL,self.slug,extension )
        #         output = open('home/periodic/mnt' + self.background_image ,'w')
        #         output.write(webfile.read())
        #         output.close()
        #         webfile.close()
        #         super(Post, self).save(*args, **kwargs)
        def __unicode__(self):
                return self.title

# class Link(models.Model):
#         content = models.URLField(verify_exists=True)
#         url = models.URLField(verify_exists=True)
#         slug = models.SlugField(max_length=128)
#         name = models.CharField(max_length=32)
#         def save(self, *args, **kwargs):
#                 webfile = urllib2.urlopen(self.background_image)
#                 extension = mimetypes.guess_type(self.background_image)[0].split("/")[1]
#                 self.content= '%s/image/link/%s.%s' % (settings.BASE_URL,self.slug,extension )
#                 output = open('home/periodic/mnt' + self.content ,'w')
#                 output.write(webfile.read())
#                 output.close()
#                 webfile.close()
#                 super(Link, self).save(*args, **kwargs)
#         def __unicode__(self):
#                 return self.name

# class Social(models.Model):
#         content = models.URLField(verify_exists=True)
#         url = models.URLField(verify_exists=True)
#         slug = models.SlugField(max_length=128)
#         name = models.CharField(max_length=32)
#         class Meta:
#                 verbose_name_plural = "Social networks"
#         def save(self, *args, **kwargs):
#                 webfile = urllib2.urlopen(self.background_image)
#                 extension = mimetypes.guess_type(self.background_image)[0].split("/")[1]
#                 self.content= '%s/image/link/%s.%s' % (settings.BASE_URL,self.slug,extension )
#                 output = open('home/periodic/mnt' + self.content ,'w')
#                 output.write(webfile.read())
#                 output.close()
#                 webfile.close()
#                 super(Social, self).save(*args, **kwargs)
#         def __unicode__(self):
#                 return self.name


class BlogPostComment(models.Model):
        # post_id = models.IntegerField()
        post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
        text = models.TextField()
        created_date = models.DateField(auto_now_add=True)
        list_display = ('title', 'category', 'tags', 'author', 'publish_on','created_date','updated_on')
        search_fields = ['post_id','created_date']
        list_filter = ['created_date','post_id']
        date_hierarchy = 'created_date'

        def __unicode__(self):
                return self.title

class CoinbaseTransaction(models.Model):
        post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
        text = models.TextField()
        created_date = models.DateField(auto_now_add=True)
        list_display = ('title', 'category', 'tags', 'author', 'publish_on','created_date','updated_on')
        search_fields = ['post_id','created_date']
        list_filter = ['created_date','post_id']
        date_hierarchy = 'created_date'

        def __unicode__(self):
                return self.title
