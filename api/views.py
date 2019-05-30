from django.shortcuts import render
from django.contrib.auth.models import User
# from mysite import UserSerializer
from rest_framework import serializers
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from api.models import Post, BlogPostComment
from api.serializers import UserSerializer, PostSerializer, BlogPostCommentSerializer


# Create your views here.
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)
    
    # def get(self, request, format=None):
    #     """
    #     Return a list of all users.
    #     """
    #     # usernames = [
    #     #     [
    #     #         user.username,
    #     #         user.email,
    #     #         user.is_active,
    #     #         user.is_staff
    #     #     ] for user in User.objects.all()]
    #     usernames = [
    #         {
    #             'username': user.username,
    #             'email': user.email,
    #             'isActive': user.is_active,
    #             'isStaff': user.is_staff
    #         } for user in User.objects.all()]        
    #     return Response(usernames)   
        # return Response(serializers.ModelSerializer('JSON',User.objects.all()).initial_data)   

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)

    # def get(self, request, format=None):
    #     """
    #     Return a list of all blog posts.
    #     """
    #     # return Response(Post.objects.all())        
    #     return Response([])        

class BlogPostCommentList(generics.ListCreateAPIView):
    queryset = BlogPostComment.objects.all()
    serializer_class = BlogPostCommentSerializer
    permission_classes = (AllowAny,)
