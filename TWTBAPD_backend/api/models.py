from django.db import models

class Video(models.Model):
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.link


class Category(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=255)
    slug = models.SlugField()

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'{self.slug}/'


class Question(models.Model):
    category = models.ForeignKey(Category, related_name='questions', on_delete=models.CASCADE)
    question_text = models.CharField(max_length=128)
    answer = models.TextField(blank=True)
    link = models.CharField(max_length=128, blank=True, null=True)
    dateAdded = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("category",)

    def __str__(self):
        return self.question_text
