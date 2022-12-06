from django.urls import path
from .views import *

urlpatterns = [
    path('get-all-categories/', GetAllCategories.as_view()),
    path('get-all-questions/', GetAllQuestions.as_view()),
    path('get-questions-by-category/', GetQuestionsByCategory.as_view()),
    path('get-question-detail', GetQuestionDetail.as_view())
]
