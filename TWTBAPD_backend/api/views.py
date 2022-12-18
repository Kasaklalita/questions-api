from .serializers import QuestionSerializer, CategorySerializer, VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Question, Video
from django.http import Http404, JsonResponse


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
    def get(self, request, category_slug):
        if category_slug:
            category = Category.objects.get(slug=category_slug)
            questions = Question.objects.all().filter(category=category)
            serializer = QuestionSerializer(questions, many=True)
            return Response({"title": category.name, "questions": serializer.data})
        else:
            raise Http404


class GetQuestionDetail(APIView):
    def get(self, request, id):
        if id:
            question = Question.objects.get(pk=id)
            serializer = QuestionSerializer(question)
            return Response(serializer.data)
        else:
            raise Http404


class RecentlyViewed(APIView):
    def get(self, request):
        if 'recently_viewed' in request.session:
            request.session += ['1']
            return Response({'RECENTLYvIEWED': 1})
        else:
            request.session = ['0']


class Videos(APIView):
    def get(self, request):
        try:
            getRandomVideos = bool(request.GET.get('random', False))
            videosQuantity = int(request.GET.get('max-videos', 0))
            videos = None
            serializer = None
            if getRandomVideos:
                videos = Video.objects.all()[:videosQuantity] if videosQuantity else Video.objects.all()
            else:
                videos = Video.objects.all().order_by('-id')[:videosQuantity] if videosQuantity else Video.objects.all().order_by('-id')
            serializer = VideoSerializer(videos, many=True)
            return Response(serializer.data)
        except:
            print('Something went wrong with the parameters')
            videos = Video.objects.all().order_by('-id')
            serializer = VideoSerializer(videos, many=True)
            return Response(serializer.data)
        