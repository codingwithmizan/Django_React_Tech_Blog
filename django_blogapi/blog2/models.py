from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class BlogTag(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    tag = models.ManyToManyField(BlogTag, related_name='blog_tag')
    title = models.CharField(max_length=255)
    slug = models.SlugField(default='', editable=False, max_length=255)
    thumbnail = models.ImageField(upload_to='blogphotos')
    cover = models.ImageField(upload_to='coverphotos')
    excerpt = models.CharField(max_length=255, blank=True)
    content = models.TextField()
    author = models.ForeignKey(User, related_name='blog_author', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return f'{self.title} - {self.author.username}'
        
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title, allow_unicode=True)
        super().save(*args, **kwargs)

class BlogComment(models.Model):
    blog = models.ForeignKey(Blog, related_name='blog_comment', on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='Annoymous')
    ip = models.CharField(max_length=255, blank=True, null=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)


    def __str__(self):
        return f'{self.blog.title} - {self.name}'
