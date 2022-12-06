from rest_framework import serializers
from .models import Question, Category


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            "id",
            "question_text",
            "answer",
            "link",
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            "id",
            "name",
            "description",
            "slug",
            "get_absolute_url"
        )
