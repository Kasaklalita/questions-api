from django.urls import path
from .views import *

urlpatterns = [
    path('get-all-questions-by-categories/', get_questions_by_categories)
]
