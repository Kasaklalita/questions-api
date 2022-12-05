from .serializers import QuestionSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Question


class GetAllQuestions(APIView):
    def get(self, request):
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)
