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
        category_slug = request.GET['category_slug']
        if category_slug:
            category = Category.objects.get(slug=category_slug)
            questions = Question.objects.all().filter(category=category)
            serializer = QuestionSerializer(questions, many=True)
            return Response(serializer.data)
        else:
            raise Http404


class GetQuestionDetail(APIView):
    def get(self, request):
        question_id = request.GET['question_id']
        if question_id:
            question = Question.objects.get(pk=question_id)
            serializer = QuestionSerializer(question)
            return Response(serializer.data)
        else:
            raise Http404
