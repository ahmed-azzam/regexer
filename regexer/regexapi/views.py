from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from django.http import HttpResponse
import re
import json
class HelloApiView(APIView):
    """Test API View."""

    def post(self, request, format=None):
        """Returns a list of APIView features."""
        info= (request.data)
        txt = info.get('text')

        x = re.finditer(info.get('regexText'), txt)
        match_strs= [(m.start(0), m.end(0)) for m in re.finditer(info.get('regexText'), txt)]
        

        
        
        
        return HttpResponse(match_strs)

class ReplaceTextView(APIView):
    """Test API View."""

    def post(self, request, format=None):
        """Returns a list of APIView features."""
        info= (request.data)
        txt = info.get('text')

        new_text = re.sub(info.get('regexText'), info.get('replaceWith'), txt)
        
        

       
        
        return HttpResponse(new_text)