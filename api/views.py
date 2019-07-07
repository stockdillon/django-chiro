from django.shortcuts import render
from django.contrib.auth.models import User
# from mysite import UserSerializer
from rest_framework import serializers
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from api.models import Post, BlogPostComment
from api.serializers import UserSerializer, PostSerializer, BlogPostCommentSerializer, CoinbaseTransactionsSerializer
from django.views.generic import TemplateView
from django.http import HttpResponse
import json


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

    def get(self, request, format=None):
        """
        Return a list of all blog posts.
        """
        # return Response(Post.objects.all())        
        # return Response([])
        # titles = [{p.id, p.text} for p in BlogPostComment.objects.filter(id=1).prefetch_related('post_id')]
        result = [
                    p for p in Post.objects
                        .values('id', 'title', 'content', 'updated_on', 'created_on', 'publish_on', 'blogpostcomment__text')
                    ]              
        # result = [{p.title} for p in Post.objects.filter(blogpostcomment__post_id=3)]
        return Response(result)

class BlogPostCommentList(generics.ListCreateAPIView):
    queryset = BlogPostComment.objects.all()
    serializer_class = BlogPostCommentSerializer
    permission_classes = (AllowAny,)


class CoinbaseTransactionList(TemplateView):
    def get(self, request):
        api_key = "GUODYAv11MXO2HFm"
        api_secret = "iV0vbIyIJUspnRsjg1aYLIanzHfdoaG8"
        from coinbase.wallet.client import Client
        client = Client(api_key, api_secret)   
        accounts = client.get_accounts()
        assert isinstance(accounts.data, list)
        assert accounts[0] is accounts.data[0]
        assert len(accounts[::]) == len(accounts.data)
        wallet_id = accounts.data[11]['id']
        transactions = client.get_transactions(wallet_id)
        return HttpResponse(json.dumps(client.get_transactions(wallet_id)), content_type='application/json')
