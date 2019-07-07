from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post, BlogPostComment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'id', 'is_active', 'is_staff')

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class BlogPostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostComment
        fields = '__all__'

class CoinbaseTransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostComment
        fields = '__all__'
