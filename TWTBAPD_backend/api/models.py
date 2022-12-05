from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=128)
    slug = models.SlugField()

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'{self.slug}/'


class Question(models.Model):
    category = models.ForeignKey(Category, related_name='questions', on_delete=models.CASCADE)
    question_text = models.CharField(max_length=128)
    answer = models.TextField()
    link = models.CharField(max_length=128)
    dateAdded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question_text
