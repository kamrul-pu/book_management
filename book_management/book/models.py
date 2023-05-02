from django.db import models
from uuid import uuid4

# Create your models here.

book_type_choice = (
    ("sci-fi", "sci-fi"),
    ("drama", "drama"),
    ("novel", "novel"),
)


class Book(models.Model):
    """Model for our Book."""

    uid = models.UUIDField(default=uuid4, editable=False, primary_key=True)
    name = models.CharField(max_length=255)
    publisher_name = models.CharField(max_length=255)
    # age = models.PositiveIntegerField()
    age = models.CharField(choices=[(i, str(i)) for i in range(20, 80)], max_length=3)
    publication_date = models.DateField()
    page = models.PositiveIntegerField()
    book_type = models.CharField(choices=book_type_choice, max_length=100)

    def __str__(self):
        return f"{self.name}"
