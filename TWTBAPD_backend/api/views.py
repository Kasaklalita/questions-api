from .serializers import QuestionSerializer, CategorySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Question
from django.http import Http404


class GetAllQuestions(APIView):
    def get(self, request):
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)


class GetAllCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class GetQuestionsByCategory(APIView):
    def get(self, request):
        category_name = request.GET["category_name"]
        if category_name:
            category = Category.objects.get(name=category_name)
            questions = Question.objects.all().filter(category=category)
            serializer = QuestionSerializer(questions, many=True)
            return Response(serializer.data)
        else:
            raise Http404
