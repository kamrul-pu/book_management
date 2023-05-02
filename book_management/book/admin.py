from django.contrib import admin
from book.models import Book

# Register your models here.


class BookAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "publisher_name",
        "age",
        "publication_date",
        "page",
        "book_type",
    ]


admin.site.register(Book, BookAdmin)
