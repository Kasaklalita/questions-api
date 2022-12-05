from django.http import JsonResponse


def get_questions_by_categories(request):
    return JsonResponse("{all_questions_by_categories}", safe=False)
