from . import views
from django.urls import path
urlpatterns = [
    
    path('helloRegex/', views.HelloApiView.as_view()),
    path('replacetext/', views.ReplaceTextView.as_view()),

]