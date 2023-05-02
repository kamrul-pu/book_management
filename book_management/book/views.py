from django.shortcuts import render
from django.db.models import Q
from book.models import Book
from book.serializers import BookSerializer
from rest_framework.views import APIView
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
)

# Create your views here.


class BookList(ListCreateAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.filter()


class BookDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.filter()
    lookup_field = "uid"


from rest_framework import generics

# from django_filters.rest_framework import DjangoFilterBackend
from .models import Book
from .serializers import BookSerializer


class BookSearchView(ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        queryset = Book.objects.all()

        name = self.request.query_params.get("name", None)
        age = self.request.query_params.get("age", None)
        book_type = self.request.query_params.get("book_type", None)

        if name:
            queryset = queryset.filter(Q(name__icontains=name))
        if age:
            queryset = queryset.filter(Q(age=age))
        if book_type:
            queryset = queryset.filter(Q(book_type=book_type))

        return queryset
