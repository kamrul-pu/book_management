"""URL Mapping for book App"""
from django.urls import path
from book import views

urlpatterns = [
    path("books/", views.BookList.as_view(), name="books"),
    path("books/<uid>/", views.BookDetail.as_view(), name="book-detail"),
    path("book-search/", views.BookSearchView.as_view(), name="book-search"),
]
