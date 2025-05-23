from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type':'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        
    def create(self, validated_data):
        # User.objects.create -> Saves the password in a plain text.
        # User.objects.create_user -> Saves the password by hashing it.
        # user = User.objects.create_user(**validated_data) # This automatically passes the username, email and password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )        
        return user